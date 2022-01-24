import * as React from "react";
import { useTheme } from "styled-components";
import ImageWindowLoader from "../common/image-window-loader";
import { getColumnIndexForX, getEffectiveColumns, getRowIndexForY, getStickyWidth, isGroupEqual, useMappedColumns } from "./data-grid-lib";
import { GridCellKind, InnerGridCellKind, CompactSelection } from "./data-grid-types";
import { SpriteManager } from "./data-grid-sprites";
import { useDebouncedMemo, useEventListener } from "../common/utils";
import makeRange from "lodash/range";
import { drawCell, drawGrid, getActionBoundsForGroup, getHeaderMenuBounds, pointInRect } from "./data-grid-render";
import { AnimationManager } from "./animation-manager";
import { browserIsFirefox } from "../common/browser-detect";
import { CellRenderers } from "./cells";
import { useAnimationQueue } from "./use-animation-queue";

const DataGrid = (p, forwardedRef) => {
  var _p$translateX, _p$translateY, _p$experimental, _eventTargetRef$curre;

  const {
    width,
    height,
    className,
    columns,
    cellXOffset: cellXOffsetReal,
    cellYOffset,
    headerHeight,
    groupHeaderHeight,
    rowHeight,
    rows,
    getCellContent,
    onHeaderMenuClick,
    selectedRows,
    enableGroups,
    selectedCell,
    selectedColumns,
    freezeColumns,
    lastRowSticky,
    onMouseDown,
    onMouseUp,
    onMouseMoveRaw,
    onMouseMove,
    onItemHovered,
    dragAndDropState,
    onKeyDown,
    onKeyUp,
    canvasRef,
    onDragStart,
    eventTargetRef,
    isResizing,
    isDragging,
    isDraggable = false,
    allowResize,
    disabledRows,
    getGroupDetails,
    prelightCells,
    headerIcons,
    verticalBorder,
    drawHeader,
    drawCustomCell,
    onCellFocused
  } = p;
  const translateX = (_p$translateX = p.translateX) !== null && _p$translateX !== void 0 ? _p$translateX : 0;
  const translateY = (_p$translateY = p.translateY) !== null && _p$translateY !== void 0 ? _p$translateY : 0;
  const cellXOffset = Math.max(freezeColumns, Math.min(columns.length - 1, cellXOffsetReal));
  const theme = useTheme();
  const ref = React.useRef(null);
  const imageLoader = React.useMemo(() => new ImageWindowLoader(), []);
  const canBlit = React.useRef();
  const damageRegion = React.useRef(undefined);
  const [scrolling, setScrolling] = React.useState(false);
  const hoverValues = React.useRef([]);
  const lastBlitData = React.useRef({
    cellXOffset,
    cellYOffset,
    translateX,
    translateY
  });
  const [hoveredItemInfo, setHoveredItemInfo] = React.useState();
  const [hoveredOnEdge, setHoveredOnEdge] = React.useState();
  const overlayRef = React.useRef(null);
  const spriteManager = React.useMemo(() => new SpriteManager(headerIcons), [headerIcons]);
  const totalHeaderHeight = enableGroups ? groupHeaderHeight + headerHeight : headerHeight;
  const scrollingStopRef = React.useRef(-1);
  const disableFirefoxRescaling = ((_p$experimental = p.experimental) === null || _p$experimental === void 0 ? void 0 : _p$experimental.disableFirefoxRescaling) === true;
  React.useEffect(() => {
    if (!browserIsFirefox || window.devicePixelRatio === 1 || disableFirefoxRescaling) return;

    if (scrollingStopRef.current !== -1) {
      setScrolling(true);
    }

    window.clearTimeout(scrollingStopRef.current);
    scrollingStopRef.current = window.setTimeout(() => {
      setScrolling(false);
      scrollingStopRef.current = -1;
    }, 200);
  }, [cellYOffset, cellXOffset, translateX, translateY, disableFirefoxRescaling]);
  React.useEffect(() => {
    const fn = async () => {
      const changed = await spriteManager.buildSpriteMap(theme, columns);

      if (changed) {
        lastDrawRef.current();
      }
    };

    void fn();
  }, [columns, spriteManager, theme]);
  const mappedColumns = useMappedColumns(columns, freezeColumns);
  const getBoundsForItem = React.useCallback((canvas, col, row) => {
    const rect = canvas.getBoundingClientRect();
    const result = {
      x: rect.x,
      y: rect.y + totalHeaderHeight + translateY,
      width: 0,
      height: 0
    };

    if (col >= freezeColumns) {
      const dir = cellXOffset > col ? -1 : 1;
      const freezeWidth = getStickyWidth(mappedColumns);
      result.x += freezeWidth + translateX;

      for (let i = cellXOffset; i !== col; i += dir) {
        result.x += mappedColumns[i].width * dir;
      }
    } else {
      for (let i = 0; i < col; i++) {
        result.x += mappedColumns[i].width;
      }
    }

    result.width = mappedColumns[col].width + 1;

    if (row === -1) {
      result.y = rect.y + groupHeaderHeight;
      result.height = headerHeight;
    } else if (row === -2) {
      result.y = rect.y;
      result.height = groupHeaderHeight;
      let start = col;
      const group = mappedColumns[col].group;
      const sticky = mappedColumns[col].sticky;

      while (start > 0 && isGroupEqual(mappedColumns[start - 1].group, group) && mappedColumns[start - 1].sticky === sticky) {
        const c = mappedColumns[start - 1];
        result.x -= c.width;
        result.width += c.width;
        start--;
      }

      let end = col;

      while (end + 1 < mappedColumns.length && isGroupEqual(mappedColumns[end + 1].group, group) && mappedColumns[end + 1].sticky === sticky) {
        const c = mappedColumns[end + 1];
        result.width += c.width;
        end++;
      }

      if (!sticky) {
        const freezeWidth = getStickyWidth(mappedColumns);
        const clip = result.x - (rect.x + freezeWidth);

        if (clip < 0) {
          result.x -= clip;
          result.width += clip;
        }

        if (result.x + result.width > rect.right) {
          result.width = rect.right - result.x;
        }
      }
    } else if (lastRowSticky && row === rows - 1) {
      const stickyHeight = typeof rowHeight === "number" ? rowHeight : rowHeight(row);
      result.y = rect.y + (height - stickyHeight);
      result.height = stickyHeight;
    } else {
      const dir = cellYOffset > row ? -1 : 1;

      for (let r = cellYOffset; r !== row; r += dir) {
        result.y += (typeof rowHeight === "number" ? rowHeight : rowHeight(r)) * dir;
      }

      result.height = (typeof rowHeight === "number" ? rowHeight : rowHeight(row)) + 1;
    }

    return result;
  }, [totalHeaderHeight, translateY, freezeColumns, mappedColumns, lastRowSticky, rows, cellXOffset, translateX, groupHeaderHeight, headerHeight, rowHeight, height, cellYOffset]);
  const getMouseArgsForPosition = React.useCallback((canvas, posX, posY, ev) => {
    const rect = canvas.getBoundingClientRect();
    const x = posX - rect.left;
    const y = posY - rect.top;
    const edgeDetectionBuffer = 5;
    const effectiveCols = getEffectiveColumns(mappedColumns, cellXOffset, width, undefined, translateX);
    const col = getColumnIndexForX(x, effectiveCols, translateX);
    const row = getRowIndexForY(y, height, enableGroups, headerHeight, groupHeaderHeight, rows, rowHeight, cellYOffset, translateY, lastRowSticky);
    const shiftKey = (ev === null || ev === void 0 ? void 0 : ev.shiftKey) === true;
    const ctrlKey = (ev === null || ev === void 0 ? void 0 : ev.ctrlKey) === true;
    const metaKey = (ev === null || ev === void 0 ? void 0 : ev.metaKey) === true;
    const isTouch = ev !== undefined && !(ev instanceof MouseEvent);
    let result;

    if (col === -1 || y < 0 || x < 0 || row === undefined || x > width || y > height) {
      const horizontal = x > width ? -1 : x < 0 ? 1 : 0;
      const vertical = y > height ? 1 : y < 0 ? -1 : 0;
      let isEdge = false;

      if (col === -1 && row === -1) {
        const b = getBoundsForItem(canvas, mappedColumns.length - 1, -1);
        isEdge = posX < b.x + b.width + edgeDetectionBuffer;
      }

      result = {
        kind: "out-of-bounds",
        location: [col !== -1 ? col : x < 0 ? 0 : mappedColumns.length - 1, row !== null && row !== void 0 ? row : rows - 1],
        direction: [horizontal, vertical],
        shiftKey,
        ctrlKey,
        metaKey,
        isEdge,
        isTouch
      };
    } else if (row <= -1) {
      let bounds = getBoundsForItem(canvas, col, row);
      let isEdge = bounds !== undefined && bounds.x + bounds.width - posX <= edgeDetectionBuffer;
      const previousCol = col - 1;

      if (posX - bounds.x <= edgeDetectionBuffer && previousCol >= 0) {
        var _mappedColumns$previo;

        isEdge = true;
        bounds = getBoundsForItem(canvas, previousCol, row);
        result = {
          kind: enableGroups && row === -2 ? "group-header" : "header",
          location: [previousCol, row],
          bounds: bounds,
          group: (_mappedColumns$previo = mappedColumns[previousCol].group) !== null && _mappedColumns$previo !== void 0 ? _mappedColumns$previo : "",
          isEdge,
          shiftKey,
          ctrlKey,
          metaKey,
          isTouch,
          localEventX: posX - bounds.x,
          localEventY: posY - bounds.y
        };
      } else {
        var _mappedColumns$col$gr;

        result = {
          kind: enableGroups && row === -2 ? "group-header" : "header",
          group: (_mappedColumns$col$gr = mappedColumns[col].group) !== null && _mappedColumns$col$gr !== void 0 ? _mappedColumns$col$gr : "",
          location: [col, row],
          bounds: bounds,
          isEdge,
          shiftKey,
          ctrlKey,
          metaKey,
          isTouch,
          localEventX: posX - bounds.x,
          localEventY: posY - bounds.y
        };
      }
    } else {
      const bounds = getBoundsForItem(canvas, col, row);
      const isEdge = bounds !== undefined && bounds.x + bounds.width - posX < edgeDetectionBuffer;
      result = {
        kind: "cell",
        location: [col, row],
        bounds: bounds,
        isEdge,
        shiftKey,
        ctrlKey,
        metaKey,
        isTouch,
        localEventX: posX - bounds.x,
        localEventY: posY - bounds.y
      };
    }

    return result;
  }, [mappedColumns, cellXOffset, width, translateX, height, enableGroups, headerHeight, groupHeaderHeight, rows, rowHeight, cellYOffset, translateY, lastRowSticky, getBoundsForItem]);

  function isSameItem(item, other) {
    if (item === other) return true;
    return (item === null || item === void 0 ? void 0 : item.kind) === (other === null || other === void 0 ? void 0 : other.kind) && (item === null || item === void 0 ? void 0 : item.location[0]) === (other === null || other === void 0 ? void 0 : other.location[0]) && (item === null || item === void 0 ? void 0 : item.location[1]) === (other === null || other === void 0 ? void 0 : other.location[1]);
  }

  const [hoveredItem] = hoveredItemInfo !== null && hoveredItemInfo !== void 0 ? hoveredItemInfo : [];
  const enqueueRef = React.useRef(_item => {});
  const hoverInfoRef = React.useRef(hoveredItemInfo);
  hoverInfoRef.current = hoveredItemInfo;
  const draw = React.useCallback(() => {
    var _canBlit$current;

    const canvas = ref.current;
    const overlay = overlayRef.current;
    if (canvas === null || overlay === null) return;
    drawGrid(canvas, {
      overlay
    }, width, height, cellXOffset, cellYOffset, Math.round(translateX), Math.round(translateY), columns, mappedColumns, enableGroups, freezeColumns, dragAndDropState, theme, headerHeight, groupHeaderHeight, selectedRows !== null && selectedRows !== void 0 ? selectedRows : CompactSelection.empty(), disabledRows !== null && disabledRows !== void 0 ? disabledRows : CompactSelection.empty(), rowHeight, verticalBorder, selectedColumns !== null && selectedColumns !== void 0 ? selectedColumns : CompactSelection.empty(), isResizing, selectedCell, lastRowSticky, rows, getCellContent, getGroupDetails !== null && getGroupDetails !== void 0 ? getGroupDetails : name => ({
      name
    }), drawCustomCell, drawHeader, prelightCells, imageLoader, lastBlitData, (_canBlit$current = canBlit.current) !== null && _canBlit$current !== void 0 ? _canBlit$current : false, damageRegion.current, hoverValues.current, hoverInfoRef.current, spriteManager, scrolling, enqueueRef.current);
  }, [width, height, cellXOffset, cellYOffset, translateX, translateY, columns, mappedColumns, enableGroups, freezeColumns, dragAndDropState, theme, headerHeight, groupHeaderHeight, selectedRows, disabledRows, rowHeight, verticalBorder, selectedColumns, isResizing, selectedCell, lastRowSticky, rows, getCellContent, getGroupDetails, drawCustomCell, drawHeader, prelightCells, imageLoader, spriteManager, scrolling]);
  canBlit.current = canBlit.current !== undefined;
  React.useEffect(() => {
    canBlit.current = false;
  }, [width, height, columns, theme, headerHeight, rowHeight, rows, isResizing, getCellContent, selectedRows, selectedColumns, selectedCell, dragAndDropState, prelightCells, scrolling]);
  const lastDrawRef = React.useRef(draw);
  React.useEffect(() => {
    draw();
    lastDrawRef.current = draw;
  }, [draw]);
  React.useEffect(() => {
    const fn = async () => {
      var _document, _document$fonts;

      if (((_document = document) === null || _document === void 0 ? void 0 : (_document$fonts = _document.fonts) === null || _document$fonts === void 0 ? void 0 : _document$fonts.ready) === undefined) return;
      await document.fonts.ready;
      const prev = canBlit.current;
      canBlit.current = false;
      lastDrawRef.current();
      canBlit.current = prev;
    };

    void fn();
  }, []);
  const damageInternal = React.useCallback(locations => {
    const last = canBlit.current;
    canBlit.current = false;
    damageRegion.current = locations;
    lastDrawRef.current();
    damageRegion.current = undefined;
    canBlit.current = last;
  }, []);
  const enqueue = useAnimationQueue(damageInternal);
  enqueueRef.current = enqueue;
  const damage = React.useCallback(cells => {
    damageInternal(cells.map(x => x.cell));
  }, [damageInternal]);
  imageLoader.setCallback(damageInternal);
  const [hCol, hRow] = hoveredItem !== null && hoveredItem !== void 0 ? hoveredItem : [];
  const headerHovered = hCol !== undefined && hRow === -1;
  const groupHeaderHovered = hCol !== undefined && hRow === -2;
  let clickableInnerCellHovered = false;
  let editableBoolHovered = false;

  if (hCol !== undefined && hRow !== undefined && hRow > 0) {
    const cell = getCellContent([hCol, hRow]);
    clickableInnerCellHovered = cell.kind === InnerGridCellKind.NewRow || cell.kind === InnerGridCellKind.Marker && cell.markerKind !== "number";
    editableBoolHovered = cell.kind === GridCellKind.Boolean && cell.allowEdit === true;
  }

  const canDrag = hoveredOnEdge !== null && hoveredOnEdge !== void 0 ? hoveredOnEdge : false;
  const cursor = isDragging ? "grabbing" : canDrag || isResizing ? "col-resize" : headerHovered || clickableInnerCellHovered || editableBoolHovered || groupHeaderHovered ? "pointer" : "default";
  const style = React.useMemo(() => ({
    width,
    height,
    contain: "strict",
    display: "block",
    cursor
  }), [width, height, cursor]);
  const target = eventTargetRef === null || eventTargetRef === void 0 ? void 0 : eventTargetRef.current;

  if (target !== null && target !== undefined) {
    target.style.cursor = style.cursor;
  }

  const groupHeaderActionForEvent = React.useCallback((group, bounds, localEventX, localEventY) => {
    if (getGroupDetails === undefined) return undefined;
    const groupDesc = getGroupDetails(group);

    if (groupDesc.actions !== undefined) {
      const boxes = getActionBoundsForGroup(bounds, groupDesc.actions);

      for (let i = 0; i < boxes.length; i++) {
        const box = boxes[i];

        if (pointInRect(box, localEventX + bounds.x, localEventY + box.y)) {
          return groupDesc.actions[i];
        }
      }
    }

    return undefined;
  }, [getGroupDetails]);
  const isOverHeaderMenu = React.useCallback((canvas, col, clientX, clientY) => {
    const header = columns[col];

    if (!isDragging && header.hasMenu === true && !(hoveredOnEdge !== null && hoveredOnEdge !== void 0 ? hoveredOnEdge : false)) {
      const headerBounds = getBoundsForItem(canvas, col, -1);
      const menuBounds = getHeaderMenuBounds(headerBounds.x, headerBounds.y, headerBounds.width, headerBounds.height);

      if (clientX > menuBounds.x && clientX < menuBounds.x + menuBounds.width && clientY > menuBounds.y && clientY < menuBounds.y + menuBounds.height) {
        return headerBounds;
      }
    }

    return undefined;
  }, [columns, getBoundsForItem, hoveredOnEdge, isDragging]);
  const onMouseDownImpl = React.useCallback(ev => {
    const canvas = ref.current;
    const eventTarget = eventTargetRef === null || eventTargetRef === void 0 ? void 0 : eventTargetRef.current;
    if (canvas === null || ev.target !== canvas && ev.target !== eventTarget) return;
    let clientX;
    let clientY;

    if (ev instanceof MouseEvent) {
      if (ev.button !== 0) return;
      clientX = ev.clientX;
      clientY = ev.clientY;
    } else {
      clientX = ev.touches[0].clientX;
      clientY = ev.touches[0].clientY;
    }

    if (ev.target === eventTarget && eventTarget !== null) {
      const bounds = eventTarget.getBoundingClientRect();
      if (clientX > bounds.left + eventTarget.clientWidth) return;
      if (clientY > bounds.top + eventTarget.clientHeight) return;
    }

    const args = getMouseArgsForPosition(canvas, clientX, clientY, ev);

    if (args.kind === "header" && isOverHeaderMenu(canvas, args.location[0], clientX, clientY) !== undefined) {
      return;
    } else if (args.kind === "group-header") {
      const action = groupHeaderActionForEvent(args.group, args.bounds, args.localEventX, args.localEventY);

      if (action !== undefined) {
        return;
      }
    }

    onMouseDown === null || onMouseDown === void 0 ? void 0 : onMouseDown(args);
  }, [eventTargetRef, getMouseArgsForPosition, groupHeaderActionForEvent, isOverHeaderMenu, onMouseDown]);
  useEventListener("touchstart", onMouseDownImpl, window, true);
  useEventListener("mousedown", onMouseDownImpl, window, true);
  const onMouseUpImpl = React.useCallback(ev => {
    const canvas = ref.current;
    if (onMouseUp === undefined || canvas === null) return;
    const eventTarget = eventTargetRef === null || eventTargetRef === void 0 ? void 0 : eventTargetRef.current;
    const isOutside = ev.target !== canvas && ev.target !== eventTarget;

    if (!isOutside) {
      ev.preventDefault();
    }

    let clientX;
    let clientY;

    if (ev instanceof MouseEvent) {
      if (ev.button !== 0) return;
      clientX = ev.clientX;
      clientY = ev.clientY;
    } else {
      clientX = ev.changedTouches[0].clientX;
      clientY = ev.changedTouches[0].clientY;
    }

    const args = getMouseArgsForPosition(canvas, clientX, clientY, ev);

    if (args.kind === "header" && isOverHeaderMenu(canvas, args.location[0], clientX, clientY)) {
      const [col] = args.location;
      const headerBounds = isOverHeaderMenu(canvas, col, clientX, clientY);

      if (headerBounds !== undefined) {
        onHeaderMenuClick === null || onHeaderMenuClick === void 0 ? void 0 : onHeaderMenuClick(col, headerBounds);
        return;
      }
    } else if (args.kind === "group-header") {
      const action = groupHeaderActionForEvent(args.group, args.bounds, args.localEventX, args.localEventY);

      if (action !== undefined) {
        action.onClick(args);
        return;
      }
    }

    onMouseUp(args, isOutside);
  }, [onMouseUp, eventTargetRef, getMouseArgsForPosition, isOverHeaderMenu, onHeaderMenuClick, groupHeaderActionForEvent]);
  useEventListener("mouseup", onMouseUpImpl, window, false);
  useEventListener("touchend", onMouseUpImpl, window, false);
  const onAnimationFrame = React.useCallback(values => {
    const last = canBlit.current;
    canBlit.current = false;
    damageRegion.current = values.map(x => x.item);
    hoverValues.current = values;
    lastDrawRef.current();
    damageRegion.current = undefined;
    canBlit.current = last;
  }, []);
  const animManagerValue = React.useMemo(() => new AnimationManager(onAnimationFrame), [onAnimationFrame]);
  const animationManager = React.useRef(animManagerValue);
  animationManager.current = animManagerValue;
  React.useEffect(() => {
    const am = animationManager.current;

    if (hoveredItem === undefined || hoveredItem[1] < 0) {
      am.setHovered(hoveredItem);
      return;
    }

    const cell = getCellContent(hoveredItem);
    am.setHovered(cell.kind === GridCellKind.Custom || CellRenderers[cell.kind].needsHover ? hoveredItem : undefined);
  }, [getCellContent, hoveredItem]);
  const hoveredRef = React.useRef();
  const onMouseMoveImpl = React.useCallback(ev => {
    const canvas = ref.current;
    if (canvas === null) return;
    const args = getMouseArgsForPosition(canvas, ev.clientX, ev.clientY, ev);

    if (!isSameItem(args, hoveredRef.current)) {
      onItemHovered === null || onItemHovered === void 0 ? void 0 : onItemHovered(args);
      setHoveredItemInfo(args.kind === "out-of-bounds" ? undefined : [args.location, [args.localEventX, args.localEventY]]);
      hoveredRef.current = args;
    } else if (args.kind === "cell" || args.kind === "header" || args.kind === "group-header") {
      const newInfo = [args.location, [args.localEventX, args.localEventY]];
      setHoveredItemInfo(newInfo);
      hoverInfoRef.current = newInfo;

      if (args.kind === "cell") {
        const toCheck = getCellContent(args.location);

        if (toCheck.kind === GridCellKind.Custom || CellRenderers[toCheck.kind].needsHoverPosition) {
          damageInternal([args.location]);
        }
      } else if (args.kind === "group-header") {
        damageInternal([args.location]);
      }
    }

    setHoveredOnEdge(args.kind === "header" && args.isEdge && allowResize === true);
    onMouseMoveRaw === null || onMouseMoveRaw === void 0 ? void 0 : onMouseMoveRaw(ev);
    onMouseMove(args);
  }, [getMouseArgsForPosition, allowResize, onMouseMoveRaw, onMouseMove, onItemHovered, getCellContent, damageInternal]);
  useEventListener("mousemove", onMouseMoveImpl, window, true);
  const onKeyDownImpl = React.useCallback(event => {
    const canvas = ref.current;
    if (canvas === null) return;
    let bounds;

    if (selectedCell !== undefined) {
      bounds = getBoundsForItem(canvas, selectedCell.cell[0], selectedCell.cell[1]);
    }

    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown({
      bounds,
      cancel: () => {
        event.stopPropagation();
        event.preventDefault();
      },
      ctrlKey: event.ctrlKey,
      metaKey: event.metaKey,
      shiftKey: event.shiftKey,
      key: event.key,
      keyCode: event.keyCode
    });
  }, [onKeyDown, selectedCell, getBoundsForItem]);
  const onKeyUpImpl = React.useCallback(event => {
    const canvas = ref.current;
    if (canvas === null) return;
    let bounds;

    if (selectedCell !== undefined) {
      bounds = getBoundsForItem(canvas, selectedCell.cell[0], selectedCell.cell[1]);
    }

    onKeyUp === null || onKeyUp === void 0 ? void 0 : onKeyUp({
      bounds,
      cancel: () => {
        event.stopPropagation();
        event.preventDefault();
      },
      ctrlKey: event.ctrlKey,
      metaKey: event.metaKey,
      shiftKey: event.shiftKey,
      key: event.key,
      keyCode: event.keyCode
    });
  }, [onKeyUp, selectedCell, getBoundsForItem]);
  const refImpl = React.useCallback(instance => {
    ref.current = instance;

    if (canvasRef !== undefined) {
      canvasRef.current = instance;
    }
  }, [canvasRef]);
  const onDragStartImpl = React.useCallback(event => {
    const canvas = ref.current;
    if (canvas === null || !isDraggable) return false;
    let dragMime;
    let dragData;
    const args = getMouseArgsForPosition(canvas, event.clientX, event.clientY);

    const setData = (mime, payload) => {
      dragMime = mime;
      dragData = payload;
    };

    let dragImage;
    let dragImageX;
    let dragImageY;

    const setDragImage = (image, x, y) => {
      dragImage = image;
      dragImageX = x;
      dragImageY = y;
    };

    onDragStart === null || onDragStart === void 0 ? void 0 : onDragStart({ ...args,
      setData,
      setDragImage
    });

    if (dragMime !== undefined && dragData !== undefined && event.dataTransfer !== null) {
      event.dataTransfer.setData(dragMime, dragData);
      event.dataTransfer.effectAllowed = "link";

      if (dragImage !== undefined && dragImageX !== undefined && dragImageY !== undefined) {
        event.dataTransfer.setDragImage(dragImage, dragImageX, dragImageY);
      } else {
        const [col, row] = args.location;

        if (row !== undefined) {
          const offscreen = document.createElement("canvas");
          const boundsForDragTarget = getBoundsForItem(canvas, col, row);
          offscreen.width = boundsForDragTarget.width;
          offscreen.height = boundsForDragTarget.height;
          const ctx = offscreen.getContext("2d");

          if (ctx !== null) {
            ctx.fillStyle = theme.bgCell;
            ctx.fillRect(0, 0, offscreen.width, offscreen.height);
            drawCell(ctx, row, getCellContent([col, row]), 0, 0, 0, boundsForDragTarget.width, boundsForDragTarget.height, false, theme, drawCustomCell, imageLoader, 1, undefined, 0);
          }

          offscreen.style.left = "-100%";
          offscreen.style.position = "absolute";
          document.body.appendChild(offscreen);
          event.dataTransfer.setDragImage(offscreen, boundsForDragTarget.width / 2, boundsForDragTarget.height / 2);
          window.setTimeout(() => {
            document.body.removeChild(offscreen);
          }, 0);
        }
      }
    } else {
      event.preventDefault();
    }
  }, [isDraggable, getMouseArgsForPosition, onDragStart, getBoundsForItem, theme, getCellContent, drawCustomCell, imageLoader]);
  useEventListener("dragstart", onDragStartImpl, (_eventTargetRef$curre = eventTargetRef === null || eventTargetRef === void 0 ? void 0 : eventTargetRef.current) !== null && _eventTargetRef$curre !== void 0 ? _eventTargetRef$curre : null, false, false);
  const focusRef = React.useRef(null);
  const focusElement = React.useCallback(el => {
    if (ref.current === null || !ref.current.contains(document.activeElement)) return;

    if (el === null) {
      var _canvasRef$current;

      canvasRef === null || canvasRef === void 0 ? void 0 : (_canvasRef$current = canvasRef.current) === null || _canvasRef$current === void 0 ? void 0 : _canvasRef$current.focus({
        preventScroll: true
      });
    } else {
      el.focus({
        preventScroll: true
      });
    }

    focusRef.current = el;
  }, [canvasRef]);
  React.useImperativeHandle(forwardedRef, () => ({
    focus: () => {
      const el = focusRef.current;

      if (el === null || !document.contains(el)) {
        var _canvasRef$current2;

        canvasRef === null || canvasRef === void 0 ? void 0 : (_canvasRef$current2 = canvasRef.current) === null || _canvasRef$current2 === void 0 ? void 0 : _canvasRef$current2.focus({
          preventScroll: true
        });
      } else {
        el.focus({
          preventScroll: true
        });
      }
    },
    getBounds: (col, row) => {
      if (canvasRef === undefined || canvasRef.current === null) {
        return undefined;
      }

      return getBoundsForItem(canvasRef.current, col, row !== null && row !== void 0 ? row : -1);
    },
    damage
  }), [canvasRef, damage, getBoundsForItem]);
  const accessibilityTree = useDebouncedMemo(() => {
    const effectiveCols = getEffectiveColumns(mappedColumns, cellXOffset, width, dragAndDropState, translateX);

    const getRowData = cell => {
      if (cell.kind === GridCellKind.Custom) {
        return cell.copyData;
      } else {
        return CellRenderers[cell.kind].getAccessibilityString(cell);
      }
    };

    return React.createElement("div", {
      role: "grid",
      "aria-rowcount": rows,
      "aria-colcount": mappedColumns.length
    }, React.createElement("div", {
      role: "rowgroup"
    }, React.createElement("div", {
      role: "row",
      "aria-rowindex": 1,
      "row-index": 1
    }, effectiveCols.map(c => React.createElement("div", {
      role: "columnheader",
      "aria-colindex": c.sourceIndex + 1,
      key: c.sourceIndex
    }, c.title)))), React.createElement("div", {
      role: "rowgroup"
    }, makeRange(cellYOffset, Math.min(rows, cellYOffset + 50)).map(row => React.createElement("div", {
      role: "row",
      key: row,
      "aria-rowindex": row + 2,
      "row-index": row + 2
    }, effectiveCols.map(c => {
      var _selectedCell$cell;

      const col = c.sourceIndex;
      const key = `${col},${row}`;
      const [fCol, fRow] = (_selectedCell$cell = selectedCell === null || selectedCell === void 0 ? void 0 : selectedCell.cell) !== null && _selectedCell$cell !== void 0 ? _selectedCell$cell : [];
      const focused = fCol === col && fRow === row;
      const id = `glide-cell-${col}-${row}`;
      return React.createElement("div", {
        key: key,
        role: "gridcell",
        "aria-colindex": col + 1,
        id: id,
        "data-testid": id,
        onClick: () => {
          const canvas = canvasRef === null || canvasRef === void 0 ? void 0 : canvasRef.current;
          if (canvas === null || canvas === undefined) return;
          return onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown({
            bounds: getBoundsForItem(canvas, col, row),
            cancel: () => undefined,
            ctrlKey: false,
            key: "Enter",
            keyCode: 13,
            metaKey: false,
            shiftKey: false
          });
        },
        onFocusCapture: e => {
          if (e.target === focusRef.current) return;
          return onCellFocused === null || onCellFocused === void 0 ? void 0 : onCellFocused([col, row]);
        },
        ref: focused ? focusElement : undefined,
        tabIndex: -1
      }, getRowData(getCellContent([col, row])));
    })))));
  }, [cellXOffset, cellYOffset, mappedColumns, dragAndDropState, focusElement, getCellContent, selectedCell === null || selectedCell === void 0 ? void 0 : selectedCell.cell, translateX, width], 200);
  const stickyShadow = React.useMemo(() => {
    if (!mappedColumns[0].sticky) {
      return null;
    }

    const stickyX = getStickyWidth(mappedColumns, dragAndDropState);
    const props = {
      position: "absolute",
      top: 0,
      left: stickyX,
      width: style.width - stickyX,
      height: style.height,
      opacity: cellXOffset > freezeColumns || translateX !== 0 ? 1 : 0,
      pointerEvents: "none",
      boxShadow: "inset 13px 0 10px -13px rgba(0, 0, 0, 0.2)",
      transition: "opacity 150ms"
    };
    return React.createElement("div", {
      style: props
    });
  }, [cellXOffset, dragAndDropState, freezeColumns, mappedColumns, style.height, style.width, translateX]);
  const overlayStyle = React.useMemo(() => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: style.width
  }), [style.width]);
  return React.createElement(React.Fragment, null, React.createElement("canvas", {
    "data-testid": "data-grid-canvas",
    tabIndex: 0,
    onKeyDown: onKeyDownImpl,
    onKeyUp: onKeyUpImpl,
    className: className,
    ref: refImpl,
    style: style
  }, accessibilityTree), React.createElement("canvas", {
    ref: overlayRef,
    style: overlayStyle
  }), stickyShadow);
};

export default React.memo(React.forwardRef(DataGrid));