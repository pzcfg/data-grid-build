function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import styled from "styled-components";
import DataGridDnd from "../data-grid-dnd/data-grid-dnd.js";
import { InfiniteScroller } from "./infinite-scroller.js";
import clamp from "lodash/clamp.js";
const MinimapStyle = styled.div.withConfig({
  displayName: "scrolling-data-grid__MinimapStyle",
  componentId: "sc-r4h7c0-0"
})(["position:absolute;right:44px;bottom:44px;background-color:var(--gdg-bg-cell);background:linear-gradient(var(--gdg-bg-cell),var(--gdg-bg-cell-medium));border-radius:4px;z-index:1;box-shadow:0 0 0 1px var(--gdg-border-color),0 2px 5px rgba(0,0,0,0.08);overflow:hidden;.header{position:absolute;left:0;top:0;width:100%;height:4px;background-color:var(--gdg-bg-header);box-shadow:0 0 0 1px var(--gdg-border-color);}.locationMarker{position:absolute;border:1px solid var(--gdg-accent-color);background-color:var(--gdg-accent-light);}"]);

const GridScroller = p => {
  var _scrollRef$current, _scroller$scrollLeft, _scroller$scrollTop;

  const {
    columns,
    rows,
    rowHeight,
    headerHeight,
    groupHeaderHeight,
    enableGroups,
    freezeColumns,
    experimental,
    clientSize
  } = p;
  const {
    paddingRight,
    paddingBottom
  } = experimental !== null && experimental !== void 0 ? experimental : {};
  const {
    className,
    onVisibleRegionChanged,
    scrollToEnd,
    scrollRef,
    preventDiagonalScrolling,
    rightElement,
    rightElementSticky,
    overscrollX,
    overscrollY,
    showMinimap = false,
    ...dataGridProps
  } = p;
  const {
    smoothScrollX = false,
    smoothScrollY = false
  } = p;
  const [clientWidth, clientHeight] = clientSize;
  const last = React.useRef();
  const lastX = React.useRef();
  const lastY = React.useRef();
  const lastSize = React.useRef();
  const width = React.useMemo(() => {
    let r = Math.max(0, overscrollX !== null && overscrollX !== void 0 ? overscrollX : 0);

    for (const c of columns) {
      r += c.width;
    }

    return r;
  }, [columns, overscrollX]);
  let height = enableGroups ? headerHeight + groupHeaderHeight : headerHeight;

  if (typeof rowHeight === "number") {
    height += rows * rowHeight;
  } else {
    for (let r = 0; r < rows; r++) {
      height += rowHeight(r);
    }
  }

  if (overscrollY !== undefined) {
    height += overscrollY;
  }

  const lastArgs = React.useRef();
  const processArgs = React.useCallback(() => {
    var _lastSize$current, _lastSize$current2;

    const args = lastArgs.current;
    if (args === undefined) return;
    let x = 0;
    let tx = 0;
    let cellRight = 0;
    let cellX = 0;
    let stickyColWidth = 0;

    for (let i = 0; i < freezeColumns; i++) {
      stickyColWidth += columns[i].width;
    }

    for (const c of columns) {
      const cx = x - stickyColWidth;

      if (args.x >= cx + c.width) {
        x += c.width;
        cellX++;
        cellRight++;
      } else if (args.x > cx) {
        x += c.width;

        if (smoothScrollX) {
          tx += cx - args.x;
        } else {
          cellX++;
        }

        cellRight++;
      } else if (args.x + args.width > cx) {
        x += c.width;
        cellRight++;
      } else {
        break;
      }
    }

    let ty = 0;
    let cellY = 0;
    let cellBottom = 0;

    if (typeof rowHeight === "number") {
      if (smoothScrollY) {
        cellY = Math.floor(args.y / rowHeight);
        ty = cellY * rowHeight - args.y;
      } else {
        cellY = Math.ceil(args.y / rowHeight);
      }

      cellBottom = Math.ceil(args.height / rowHeight) + cellY;
      if (ty < 0) cellBottom++;
    } else {
      let y = 0;

      for (let row = 0; row < rows; row++) {
        const rh = rowHeight(row);
        const cy = y + (smoothScrollY ? 0 : rh / 2);

        if (args.y >= y + rh) {
          y += rh;
          cellY++;
          cellBottom++;
        } else if (args.y > cy) {
          y += rh;

          if (smoothScrollY) {
            ty += cy - args.y;
          } else {
            cellY++;
          }

          cellBottom++;
        } else if (args.y + args.height > rh / 2 + y) {
          y += rh;
          cellBottom++;
        } else {
          break;
        }
      }
    }

    const rect = {
      x: cellX,
      y: cellY,
      width: cellRight - cellX,
      height: cellBottom - cellY
    };
    const oldRect = last.current;

    if (oldRect === undefined || oldRect.y !== rect.y || oldRect.x !== rect.x || oldRect.height !== rect.height || oldRect.width !== rect.width || lastX.current !== tx || lastY.current !== ty || args.width !== ((_lastSize$current = lastSize.current) === null || _lastSize$current === void 0 ? void 0 : _lastSize$current[0]) || args.height !== ((_lastSize$current2 = lastSize.current) === null || _lastSize$current2 === void 0 ? void 0 : _lastSize$current2[1])) {
      var _args$paddingRight;

      onVisibleRegionChanged === null || onVisibleRegionChanged === void 0 ? void 0 : onVisibleRegionChanged({
        x: cellX,
        y: cellY,
        width: cellRight - cellX,
        height: cellBottom - cellY
      }, args.width, args.height, (_args$paddingRight = args.paddingRight) !== null && _args$paddingRight !== void 0 ? _args$paddingRight : 0, tx, ty);
      last.current = rect;
      lastX.current = tx;
      lastY.current = ty;
      lastSize.current = [args.width, args.height];
    }
  }, [columns, rowHeight, rows, onVisibleRegionChanged, freezeColumns, smoothScrollX, smoothScrollY]);
  const onScrollUpdate = React.useCallback(args => {
    lastArgs.current = args;
    processArgs();
  }, [processArgs]);
  React.useEffect(() => {
    processArgs();
  }, [processArgs]);
  const scroller = (_scrollRef$current = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) !== null && _scrollRef$current !== void 0 ? _scrollRef$current : undefined;
  const aspect = clamp(width / height, 2 / 3, 1.5);
  const maxSize = 200;
  const w = aspect > 1 ? maxSize : Math.ceil(maxSize * aspect);
  const h = aspect > 1 ? Math.ceil(maxSize / aspect) : maxSize;
  const hRatio = w / width;
  const vRatio = h / height;
  const vWidth = Math.min(clientWidth * Math.max(hRatio, 0.01), w);
  const vHeight = Math.min(clientHeight * Math.max(vRatio, 0.01), h);
  const left = ((_scroller$scrollLeft = scroller === null || scroller === void 0 ? void 0 : scroller.scrollLeft) !== null && _scroller$scrollLeft !== void 0 ? _scroller$scrollLeft : 0) / (width - clientWidth) * (w - vWidth);
  const top = ((_scroller$scrollTop = scroller === null || scroller === void 0 ? void 0 : scroller.scrollTop) !== null && _scroller$scrollTop !== void 0 ? _scroller$scrollTop : 0) / (height - clientHeight) * (h - vHeight);
  const minimap = React.useMemo(() => {
    if (!showMinimap || vWidth === 0 || vHeight === 0) return undefined;

    const handleMouse = e => {
      if (scroller === undefined) return;
      const bounds = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - bounds.x - vWidth / 2;
      const y = e.clientY - bounds.y - vHeight / 2;
      const newScrollLeft = (width - scroller.clientWidth) * (x / (w - vWidth));
      const newScrollTop = (height - scroller.clientHeight) * (y / (h - vHeight));
      scroller.scrollTo({
        left: newScrollLeft,
        top: newScrollTop,
        behavior: e.type === "mousemove" ? "auto" : "smooth"
      });
    };

    return React.createElement(MinimapStyle, {
      style: {
        width: w,
        height: h
      },
      "data-testid": "minimap-container",
      onMouseMove: e => {
        if (e.buttons !== 1) return;
        handleMouse(e);
      },
      onClick: handleMouse
    }, React.createElement("div", {
      className: "header"
    }), React.createElement("div", {
      className: "locationMarker",
      onDragStart: e => e.preventDefault(),
      style: {
        left,
        top,
        width: vWidth,
        height: vHeight,
        borderRadius: Math.min(vWidth, vHeight * 0.2, 9)
      }
    }));
  }, [h, height, left, scroller, showMinimap, top, vHeight, vWidth, w, width]);
  return React.createElement(InfiniteScroller, {
    scrollRef: scrollRef,
    minimap: minimap,
    className: className,
    preventDiagonalScrolling: preventDiagonalScrolling,
    draggable: dataGridProps.isDraggable === true,
    scrollWidth: width + (paddingRight !== null && paddingRight !== void 0 ? paddingRight : 0),
    scrollHeight: height + (paddingBottom !== null && paddingBottom !== void 0 ? paddingBottom : 0),
    clientHeight: clientHeight,
    rightElement: rightElement,
    paddingBottom: paddingBottom,
    paddingRight: paddingRight,
    rightElementSticky: rightElementSticky,
    update: onScrollUpdate,
    scrollToEnd: scrollToEnd
  }, React.createElement(DataGridDnd, _extends({
    eventTargetRef: scrollRef,
    width: clientWidth,
    height: clientHeight
  }, dataGridProps)));
};

export default GridScroller;