"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

var _imageWindowLoader = _interopRequireDefault(require("../common/image-window-loader"));

var _dataGridLib = require("./data-grid-lib");

var _dataGridTypes = require("./data-grid-types");

var _dataGridSprites = require("./data-grid-sprites");

var _utils = require("../common/utils");

var _range = _interopRequireDefault(require("https://esm.run/lodash/range"));

var _dataGridRender = require("./data-grid-render");

var _animationManager = require("./animation-manager");

var _browserDetect = require("../common/browser-detect");

var _cells = require("./cells");

var _useAnimationQueue = require("./use-animation-queue");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const DataGrid = (p, forwardedRef) => {
  var _p$translateX, _p$translateY, _p$experimental, _eventTargetRef$curre;

  const {
    width,
    height,
    accessibilityHeight,
    className,
    columns,
    cellXOffset: cellXOffsetReal,
    cellYOffset,
    headerHeight,
    fillHandle = false,
    groupHeaderHeight,
    rowHeight,
    rows,
    getCellContent,
    getRowThemeOverride,
    onHeaderMenuClick,
    enableGroups,
    isFilling,
    onCanvasFocused,
    onCanvasBlur,
    isFocused,
    selection,
    freezeColumns,
    lastRowSticky,
    onMouseDown,
    onMouseUp,
    onMouseMoveRaw,
    onMouseMove,
    onItemHovered,
    dragAndDropState,
    firstColAccessible,
    onKeyDown,
    onKeyUp,
    highlightRegions,
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
  const theme = (0, _styledComponents.useTheme)();
  const ref = React.useRef(null);
  const imageLoader = React.useMemo(() => new _imageWindowLoader.default(), []);
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
  const [lastWasTouch, setLastWasTouch] = React.useState(false);
  const lastWasTouchRef = React.useRef(lastWasTouch);
  lastWasTouchRef.current = lastWasTouch;
  const spriteManager = React.useMemo(() => new _dataGridSprites.SpriteManager(headerIcons), [headerIcons]);
  const totalHeaderHeight = enableGroups ? groupHeaderHeight + headerHeight : headerHeight;
  const scrollingStopRef = React.useRef(-1);
  const disableFirefoxRescaling = ((_p$experimental = p.experimental) === null || _p$experimental === void 0 ? void 0 : _p$experimental.enableFirefoxRescaling) !== true;
  React.useLayoutEffect(() => {
    if (!_browserDetect.browserIsFirefox || window.devicePixelRatio === 1 || disableFirefoxRescaling) return;

    if (scrollingStopRef.current !== -1) {
      setScrolling(true);
    }

    window.clearTimeout(scrollingStopRef.current);
    scrollingStopRef.current = window.setTimeout(() => {
      setScrolling(false);
      scrollingStopRef.current = -1;
    }, 200);
  }, [cellYOffset, cellXOffset, translateX, translateY, disableFirefoxRescaling]);
  React.useLayoutEffect(() => {
    const fn = async () => {
      const changed = await spriteManager.buildSpriteMap(theme, columns);

      if (changed) {
        lastDrawRef.current();
      }
    };

    void fn();
  }, [columns, spriteManager, theme]);
  const mappedColumns = (0, _dataGridLib.useMappedColumns)(columns, freezeColumns);
  const getBoundsForItem = React.useCallback((canvas, col, row) => {
    const rect = canvas.getBoundingClientRect();
    const result = (0, _dataGridLib.computeBounds)(col, row, width, height, groupHeaderHeight, totalHeaderHeight, cellXOffset, cellYOffset, translateX, translateY, rows, freezeColumns, lastRowSticky, mappedColumns, rowHeight);
    result.x += rect.x;
    result.y += rect.y;
    return result;
  }, [width, height, groupHeaderHeight, totalHeaderHeight, cellXOffset, cellYOffset, translateX, translateY, rows, freezeColumns, lastRowSticky, mappedColumns, rowHeight]);
  const getMouseArgsForPosition = React.useCallback((canvas, posX, posY, ev) => {
    const rect = canvas.getBoundingClientRect();
    const x = posX - rect.left;
    const y = posY - rect.top;
    const edgeDetectionBuffer = 5;
    const effectiveCols = (0, _dataGridLib.getEffectiveColumns)(mappedColumns, cellXOffset, width, undefined, translateX);
    let button = 0;

    if (ev instanceof MouseEvent) {
      button = ev.button;
    }

    const col = (0, _dataGridLib.getColumnIndexForX)(x, effectiveCols, translateX);
    const row = (0, _dataGridLib.getRowIndexForY)(y, height, enableGroups, headerHeight, groupHeaderHeight, rows, rowHeight, cellYOffset, translateY, lastRowSticky);
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
        isTouch,
        button
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
          localEventY: posY - bounds.y,
          button
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
          localEventY: posY - bounds.y,
          button
        };
      }
    } else {
      const bounds = getBoundsForItem(canvas, col, row);
      const isEdge = bounds !== undefined && bounds.x + bounds.width - posX < edgeDetectionBuffer;
      const isFillHandle = fillHandle && bounds !== undefined && bounds.x + bounds.width - posX < 6 && bounds.y + bounds.height - posY < 6;
      result = {
        kind: "cell",
        location: [col, row],
        bounds: bounds,
        isEdge,
        shiftKey,
        ctrlKey,
        isFillHandle,
        metaKey,
        isTouch,
        localEventX: posX - bounds.x,
        localEventY: posY - bounds.y,
        button
      };
    }

    return result;
  }, [mappedColumns, cellXOffset, width, translateX, height, enableGroups, headerHeight, groupHeaderHeight, rows, rowHeight, cellYOffset, translateY, lastRowSticky, getBoundsForItem, fillHandle]);

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
    (0, _dataGridRender.drawGrid)({
      canvas,
      buffers: {
        overlay
      },
      width,
      height,
      cellXOffset,
      cellYOffset,
      translateX: Math.round(translateX),
      translateY: Math.round(translateY),
      columns,
      mappedColumns,
      enableGroups,
      freezeColumns,
      dragAndDropState,
      theme,
      headerHeight,
      groupHeaderHeight,
      selectedRows: selection.rows,
      disabledRows: disabledRows !== null && disabledRows !== void 0 ? disabledRows : _dataGridTypes.CompactSelection.empty(),
      rowHeight,
      verticalBorder,
      selectedColumns: selection.columns,
      isResizing,
      isFocused,
      selectedCell: selection,
      fillHandle,
      lastRowSticky,
      rows,
      getCellContent,
      getGroupDetails: getGroupDetails !== null && getGroupDetails !== void 0 ? getGroupDetails : name => ({
        name
      }),
      getRowThemeOverride,
      drawCustomCell,
      drawHeaderCallback: drawHeader,
      prelightCells,
      highlightRegions,
      imageLoader,
      lastBlitData,
      canBlit: (_canBlit$current = canBlit.current) !== null && _canBlit$current !== void 0 ? _canBlit$current : false,
      damage: damageRegion.current,
      hoverValues: hoverValues.current,
      hoverInfo: hoverInfoRef.current,
      spriteManager,
      scrolling,
      touchMode: lastWasTouch,
      enqueue: enqueueRef.current
    });
  }, [width, height, cellXOffset, cellYOffset, translateX, translateY, columns, mappedColumns, enableGroups, freezeColumns, dragAndDropState, theme, headerHeight, isFocused, groupHeaderHeight, selection, disabledRows, rowHeight, verticalBorder, isResizing, fillHandle, lastRowSticky, rows, getCellContent, getGroupDetails, getRowThemeOverride, drawCustomCell, drawHeader, prelightCells, highlightRegions, imageLoader, spriteManager, scrolling, lastWasTouch]);
  canBlit.current = canBlit.current !== undefined;
  React.useLayoutEffect(() => {
    canBlit.current = false;
  }, [width, height, columns, theme, headerHeight, rowHeight, rows, isFocused, isResizing, verticalBorder, getCellContent, highlightRegions, lastWasTouch, selection, dragAndDropState, prelightCells, scrolling]);
  const lastDrawRef = React.useRef(draw);
  React.useLayoutEffect(() => {
    draw();
    lastDrawRef.current = draw;
  }, [draw]);
  React.useLayoutEffect(() => {
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
  const enqueue = (0, _useAnimationQueue.useAnimationQueue)(damageInternal);
  enqueueRef.current = enqueue;
  const damage = React.useCallback(cells => {
    damageInternal(cells.map(x => x.cell));
  }, [damageInternal]);
  imageLoader.setCallback(damageInternal);
  const [overFill, setOverFill] = React.useState(false);
  const [hCol, hRow] = hoveredItem !== null && hoveredItem !== void 0 ? hoveredItem : [];
  const headerHovered = hCol !== undefined && hRow === -1;
  const groupHeaderHovered = hCol !== undefined && hRow === -2;
  let clickableInnerCellHovered = false;
  let editableBoolHovered = false;

  if (hCol !== undefined && hRow !== undefined && hRow > -1) {
    const cell = getCellContent([hCol, hRow]);
    clickableInnerCellHovered = cell.kind === _dataGridTypes.InnerGridCellKind.NewRow || cell.kind === _dataGridTypes.InnerGridCellKind.Marker && cell.markerKind !== "number";
    editableBoolHovered = cell.kind === _dataGridTypes.GridCellKind.Boolean && (0, _dataGridTypes.booleanCellIsEditable)(cell);
  }

  const canDrag = hoveredOnEdge !== null && hoveredOnEdge !== void 0 ? hoveredOnEdge : false;
  const cursor = isDragging ? "grabbing" : canDrag || isResizing ? "col-resize" : overFill || isFilling ? "crosshair" : headerHovered || clickableInnerCellHovered || editableBoolHovered || groupHeaderHovered ? "pointer" : "default";
  const style = React.useMemo(() => ({
    contain: "strict",
    display: "block",
    cursor
  }), [cursor]);
  const target = eventTargetRef === null || eventTargetRef === void 0 ? void 0 : eventTargetRef.current;

  if (target !== null && target !== undefined) {
    target.style.cursor = style.cursor;
  }

  const groupHeaderActionForEvent = React.useCallback((group, bounds, localEventX, localEventY) => {
    if (getGroupDetails === undefined) return undefined;
    const groupDesc = getGroupDetails(group);

    if (groupDesc.actions !== undefined) {
      const boxes = (0, _dataGridRender.getActionBoundsForGroup)(bounds, groupDesc.actions);

      for (let i = 0; i < boxes.length; i++) {
        const box = boxes[i];

        if ((0, _dataGridRender.pointInRect)(box, localEventX + bounds.x, localEventY + box.y)) {
          return groupDesc.actions[i];
        }
      }
    }

    return undefined;
  }, [getGroupDetails]);
  const isOverHeaderMenu = React.useCallback((canvas, col, clientX, clientY) => {
    const header = columns[col];

    if (!isDragging && !isResizing && header.hasMenu === true && !(hoveredOnEdge !== null && hoveredOnEdge !== void 0 ? hoveredOnEdge : false)) {
      const headerBounds = getBoundsForItem(canvas, col, -1);
      const menuBounds = (0, _dataGridRender.getHeaderMenuBounds)(headerBounds.x, headerBounds.y, headerBounds.width, headerBounds.height);

      if (clientX > menuBounds.x && clientX < menuBounds.x + menuBounds.width && clientY > menuBounds.y && clientY < menuBounds.y + menuBounds.height) {
        return headerBounds;
      }
    }

    return undefined;
  }, [columns, getBoundsForItem, hoveredOnEdge, isDragging, isResizing]);
  const downTime = React.useRef(0);
  const onMouseDownImpl = React.useCallback(ev => {
    const canvas = ref.current;
    const eventTarget = eventTargetRef === null || eventTargetRef === void 0 ? void 0 : eventTargetRef.current;
    if (canvas === null || ev.target !== canvas && ev.target !== eventTarget) return;
    let clientX;
    let clientY;

    if (ev instanceof MouseEvent) {
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

    if (args.isTouch) {
      downTime.current = Date.now();
    }

    if (lastWasTouchRef.current !== args.isTouch) {
      setLastWasTouch(args.isTouch);
    }

    if (args.kind === "header" && isOverHeaderMenu(canvas, args.location[0], clientX, clientY) !== undefined) {
      return;
    } else if (args.kind === "group-header") {
      const action = groupHeaderActionForEvent(args.group, args.bounds, args.localEventX, args.localEventY);

      if (action !== undefined) {
        return;
      }
    }

    onMouseDown === null || onMouseDown === void 0 ? void 0 : onMouseDown(args);

    if (!args.isTouch && !isDraggable) {
      ev.preventDefault();
    }
  }, [eventTargetRef, isDraggable, getMouseArgsForPosition, groupHeaderActionForEvent, isOverHeaderMenu, onMouseDown]);
  (0, _utils.useEventListener)("touchstart", onMouseDownImpl, window, false);
  (0, _utils.useEventListener)("mousedown", onMouseDownImpl, window, false);
  const onMouseUpImpl = React.useCallback(ev => {
    const canvas = ref.current;
    if (onMouseUp === undefined || canvas === null) return;
    const eventTarget = eventTargetRef === null || eventTargetRef === void 0 ? void 0 : eventTargetRef.current;
    const isOutside = ev.target !== canvas && ev.target !== eventTarget;
    let clientX;
    let clientY;

    if (ev instanceof MouseEvent) {
      clientX = ev.clientX;
      clientY = ev.clientY;
    } else {
      clientX = ev.changedTouches[0].clientX;
      clientY = ev.changedTouches[0].clientY;
    }

    let args = getMouseArgsForPosition(canvas, clientX, clientY, ev);

    if (args.isTouch && downTime.current !== 0 && Date.now() - downTime.current > 500) {
      args = { ...args,
        isLongTouch: true
      };
    }

    if (lastWasTouchRef.current !== args.isTouch) {
      setLastWasTouch(args.isTouch);
    }

    if (!isOutside && ev.cancelable) {
      ev.preventDefault();
    }

    if (args.kind === "header" && isOverHeaderMenu(canvas, args.location[0], clientX, clientY)) {
      const [col] = args.location;
      const headerBounds = isOverHeaderMenu(canvas, col, clientX, clientY);

      if (headerBounds !== undefined) {
        if (args.button === 0) {
          onHeaderMenuClick === null || onHeaderMenuClick === void 0 ? void 0 : onHeaderMenuClick(col, headerBounds);
        }

        return;
      }
    } else if (args.kind === "group-header") {
      const action = groupHeaderActionForEvent(args.group, args.bounds, args.localEventX, args.localEventY);

      if (action !== undefined) {
        if (args.button === 0) {
          action.onClick(args);
        }

        return;
      }
    }

    onMouseUp(args, isOutside);
  }, [onMouseUp, eventTargetRef, getMouseArgsForPosition, isOverHeaderMenu, onHeaderMenuClick, groupHeaderActionForEvent]);
  (0, _utils.useEventListener)("mouseup", onMouseUpImpl, window, false);
  (0, _utils.useEventListener)("touchend", onMouseUpImpl, window, false);
  const onAnimationFrame = React.useCallback(values => {
    const last = canBlit.current;
    canBlit.current = false;
    damageRegion.current = values.map(x => x.item);
    hoverValues.current = values;
    lastDrawRef.current();
    damageRegion.current = undefined;
    canBlit.current = last;
  }, []);
  const animManagerValue = React.useMemo(() => new _animationManager.AnimationManager(onAnimationFrame), [onAnimationFrame]);
  const animationManager = React.useRef(animManagerValue);
  animationManager.current = animManagerValue;
  React.useLayoutEffect(() => {
    const am = animationManager.current;

    if (hoveredItem === undefined || hoveredItem[1] < 0) {
      am.setHovered(hoveredItem);
      return;
    }

    const cell = getCellContent(hoveredItem);
    am.setHovered(cell.kind === _dataGridTypes.GridCellKind.Custom || _cells.CellRenderers[cell.kind].needsHover ? hoveredItem : undefined);
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

        if (toCheck.kind === _dataGridTypes.GridCellKind.Custom || _cells.CellRenderers[toCheck.kind].needsHoverPosition) {
          damageInternal([args.location]);
        }
      } else if (args.kind === "group-header") {
        damageInternal([args.location]);
      }
    }

    setHoveredOnEdge(args.kind === "header" && args.isEdge && allowResize === true);

    if (fillHandle && selection.current !== undefined) {
      const [col, row] = selection.current.cell;
      const sb = getBoundsForItem(canvas, col, row);
      const x = ev.clientX;
      const y = ev.clientY;
      setOverFill(x >= sb.x + sb.width - 6 && x <= sb.x + sb.width && y >= sb.y + sb.height - 6 && y <= sb.y + sb.height);
    } else {
      setOverFill(false);
    }

    onMouseMoveRaw === null || onMouseMoveRaw === void 0 ? void 0 : onMouseMoveRaw(ev);
    onMouseMove(args);
  }, [getMouseArgsForPosition, allowResize, fillHandle, selection, onMouseMoveRaw, onMouseMove, onItemHovered, getCellContent, damageInternal, getBoundsForItem]);
  (0, _utils.useEventListener)("mousemove", onMouseMoveImpl, window, true);
  const onKeyDownImpl = React.useCallback(event => {
    const canvas = ref.current;
    if (canvas === null) return;
    let bounds;

    if (selection.current !== undefined) {
      bounds = getBoundsForItem(canvas, selection.current.cell[0], selection.current.cell[1]);
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
      altKey: event.altKey,
      key: event.key,
      keyCode: event.keyCode
    });
  }, [onKeyDown, selection, getBoundsForItem]);
  const onKeyUpImpl = React.useCallback(event => {
    const canvas = ref.current;
    if (canvas === null) return;
    let bounds;

    if (selection.current !== undefined) {
      bounds = getBoundsForItem(canvas, selection.current.cell[0], selection.current.cell[1]);
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
      altKey: event.altKey,
      key: event.key,
      keyCode: event.keyCode
    });
  }, [onKeyUp, selection, getBoundsForItem]);
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
            (0, _dataGridRender.drawCell)(ctx, row, getCellContent([col, row]), 0, 0, 0, boundsForDragTarget.width, boundsForDragTarget.height, false, theme, drawCustomCell, imageLoader, spriteManager, 1, undefined, 0);
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
  }, [isDraggable, getMouseArgsForPosition, onDragStart, getBoundsForItem, theme, getCellContent, drawCustomCell, imageLoader, spriteManager]);
  (0, _utils.useEventListener)("dragstart", onDragStartImpl, (_eventTargetRef$curre = eventTargetRef === null || eventTargetRef === void 0 ? void 0 : eventTargetRef.current) !== null && _eventTargetRef$curre !== void 0 ? _eventTargetRef$curre : null, false, false);
  const selectionRef = React.useRef(selection);
  selectionRef.current = selection;
  const focusRef = React.useRef(null);
  const focusElement = React.useCallback(el => {
    if (ref.current === null || !ref.current.contains(document.activeElement)) return;

    if (el === null && selectionRef.current.current !== undefined) {
      var _canvasRef$current;

      canvasRef === null || canvasRef === void 0 ? void 0 : (_canvasRef$current = canvasRef.current) === null || _canvasRef$current === void 0 ? void 0 : _canvasRef$current.focus({
        preventScroll: true
      });
    } else if (el !== null) {
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
  const lastFocusedSubdomNode = React.useRef();
  const accessibilityTree = (0, _utils.useDebouncedMemo)(() => {
    var _effectiveCols$, _selection$current$ce, _selection$current, _selection$current2;

    if (width < 50) return null;
    let effectiveCols = (0, _dataGridLib.getEffectiveColumns)(mappedColumns, cellXOffset, width, dragAndDropState, translateX);
    const colOffset = firstColAccessible ? 0 : -1;

    if (!firstColAccessible && ((_effectiveCols$ = effectiveCols[0]) === null || _effectiveCols$ === void 0 ? void 0 : _effectiveCols$.sourceIndex) === 0) {
      effectiveCols = effectiveCols.slice(1);
    }

    const getRowData = cell => {
      if (cell.kind === _dataGridTypes.GridCellKind.Custom) {
        return cell.copyData;
      } else {
        return _cells.CellRenderers[cell.kind].getAccessibilityString(cell);
      }
    };

    const [fCol, fRow] = (_selection$current$ce = (_selection$current = selection.current) === null || _selection$current === void 0 ? void 0 : _selection$current.cell) !== null && _selection$current$ce !== void 0 ? _selection$current$ce : [];
    const range = (_selection$current2 = selection.current) === null || _selection$current2 === void 0 ? void 0 : _selection$current2.range;
    const visibleCols = effectiveCols.map(c => c.sourceIndex);
    const visibleRows = (0, _range.default)(cellYOffset, Math.min(rows, cellYOffset + accessibilityHeight));

    if (fCol !== undefined && fRow !== undefined && !(visibleCols.includes(fCol) && visibleRows.includes(fRow))) {
      focusElement(null);
    }

    return React.createElement("table", {
      key: "access-tree",
      role: "grid",
      "aria-rowcount": rows + 1,
      "aria-multiselectable": "true",
      "aria-colcount": mappedColumns.length + colOffset
    }, React.createElement("thead", {
      role: "rowgroup"
    }, React.createElement("tr", {
      role: "row",
      "aria-rowindex": 1
    }, effectiveCols.map(c => React.createElement("th", {
      role: "columnheader",
      "aria-selected": selection.columns.hasIndex(c.sourceIndex),
      "aria-colindex": c.sourceIndex + 1 + colOffset,
      tabIndex: -1,
      onFocus: e => {
        if (e.target === focusRef.current) return;
        return onCellFocused === null || onCellFocused === void 0 ? void 0 : onCellFocused([c.sourceIndex, -1]);
      },
      key: c.sourceIndex
    }, c.title)))), React.createElement("tbody", {
      role: "rowgroup"
    }, visibleRows.map(row => React.createElement("tr", {
      role: "row",
      "aria-selected": selection.rows.hasIndex(row),
      key: row,
      "aria-rowindex": row + 2
    }, effectiveCols.map(c => {
      const col = c.sourceIndex;
      const key = `${col},${row}`;
      const focused = fCol === col && fRow === row;
      const selected = range !== undefined && col >= range.x && col < range.x + range.width && row >= range.y && row < range.y + range.height;
      const id = `glide-cell-${col}-${row}`;
      const cellContent = getCellContent([col, row]);
      return React.createElement("td", {
        key: key,
        role: "gridcell",
        "aria-colindex": col + 1 + colOffset,
        "aria-selected": selected,
        "aria-readonly": (0, _dataGridTypes.isInnerOnlyCell)(cellContent) || !(0, _dataGridTypes.isReadWriteCell)(cellContent),
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
            shiftKey: false,
            altKey: false
          });
        },
        onFocusCapture: e => {
          var _lastFocusedSubdomNod, _lastFocusedSubdomNod2;

          if (e.target === focusRef.current || ((_lastFocusedSubdomNod = lastFocusedSubdomNode.current) === null || _lastFocusedSubdomNod === void 0 ? void 0 : _lastFocusedSubdomNod[0]) === col && ((_lastFocusedSubdomNod2 = lastFocusedSubdomNode.current) === null || _lastFocusedSubdomNod2 === void 0 ? void 0 : _lastFocusedSubdomNod2[1]) === row) return;
          lastFocusedSubdomNode.current = [col, row];
          return onCellFocused === null || onCellFocused === void 0 ? void 0 : onCellFocused([col, row]);
        },
        ref: focused ? focusElement : undefined,
        tabIndex: -1
      }, getRowData(cellContent));
    })))));
  }, [width, mappedColumns, cellXOffset, dragAndDropState, translateX, rows, cellYOffset, accessibilityHeight, selection, focusElement, getCellContent, canvasRef, onKeyDown, getBoundsForItem, onCellFocused], 200);
  const stickyShadow = React.useMemo(() => {
    if (!mappedColumns[0].sticky) {
      return null;
    }

    const stickyX = (0, _dataGridLib.getStickyWidth)(mappedColumns, dragAndDropState);
    const props = {
      position: "absolute",
      top: 0,
      left: stickyX,
      width: width - stickyX,
      height: height,
      opacity: cellXOffset > freezeColumns || translateX !== 0 ? 1 : 0,
      pointerEvents: "none",
      boxShadow: "inset 13px 0 10px -13px rgba(0, 0, 0, 0.2)",
      transition: "opacity 150ms"
    };
    return React.createElement("div", {
      style: props
    });
  }, [cellXOffset, dragAndDropState, freezeColumns, mappedColumns, height, width, translateX]);
  const overlayStyle = React.useMemo(() => ({
    position: "absolute",
    top: 0,
    left: 0
  }), []);
  return React.createElement(React.Fragment, null, React.createElement("canvas", {
    "data-testid": "data-grid-canvas",
    tabIndex: 0,
    onKeyDown: onKeyDownImpl,
    onKeyUp: onKeyUpImpl,
    onFocus: onCanvasFocused,
    onBlur: onCanvasBlur,
    className: className,
    ref: refImpl,
    style: style
  }, accessibilityTree), React.createElement("canvas", {
    ref: overlayRef,
    style: overlayStyle
  }), stickyShadow);
};

var _default = React.memo(React.forwardRef(DataGrid));

exports.default = _default;