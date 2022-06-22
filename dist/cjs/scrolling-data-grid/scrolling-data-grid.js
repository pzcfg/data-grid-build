"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("https://esm.run/styled-components"));

var _dataGridDnd = _interopRequireDefault(require("../data-grid-dnd/data-grid-dnd"));

var _infiniteScroller = require("./infinite-scroller");

var _clamp = _interopRequireDefault(require("https://esm.run/lodash/clamp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const MinimapStyle = _styledComponents.default.div.withConfig({
  displayName: "scrolling-data-grid__MinimapStyle",
  componentId: "sc-r4h7c0-0"
})(["position:absolute;right:44px;bottom:44px;background-color:", ";background:linear-gradient(", ",", ");border-radius:4px;z-index:1;box-shadow:0 0 0 1px ", ",0 2px 5px rgba(0,0,0,0.08);overflow:hidden;.header{position:absolute;left:0;top:0;width:100%;height:4px;background-color:", ";box-shadow:0 0 0 1px ", ";}.locationMarker{position:absolute;border:1px solid ", ";background-color:", ";}"], p => p.theme.bgCell, p => p.theme.bgCell, p => p.theme.bgCellMedium, p => p.theme.borderColor, p => p.theme.bgHeader, p => p.theme.borderColor, p => p.theme.accentColor, p => p.theme.accentLight);

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
    experimental
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
  const [clientWidth, setClientWidth] = React.useState(10);
  const [clientHeight, setClientHeight] = React.useState(10);
  const last = React.useRef();
  const lastX = React.useRef();
  const lastY = React.useRef();
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

    if (oldRect === undefined || oldRect.y !== rect.y || oldRect.x !== rect.x || oldRect.height !== rect.height || oldRect.width !== rect.width || lastX.current !== tx || lastY.current !== ty) {
      onVisibleRegionChanged === null || onVisibleRegionChanged === void 0 ? void 0 : onVisibleRegionChanged({
        x: cellX,
        y: cellY,
        width: cellRight - cellX,
        height: cellBottom - cellY
      }, tx, ty);
      last.current = rect;
      lastX.current = tx;
      lastY.current = ty;
    }

    setClientHeight(args.height);
    setClientWidth(args.width);
  }, [columns, rowHeight, rows, onVisibleRegionChanged, freezeColumns, smoothScrollX, smoothScrollY]);
  const onScrollUpdate = React.useCallback(args => {
    lastArgs.current = args;
    processArgs();
  }, [processArgs]);
  React.useEffect(() => {
    processArgs();
  }, [processArgs]);
  const scroller = (_scrollRef$current = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) !== null && _scrollRef$current !== void 0 ? _scrollRef$current : undefined;
  const aspect = (0, _clamp.default)(width / height, 2 / 3, 1.5);
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
  return React.createElement(_infiniteScroller.InfiniteScroller, {
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
  }, React.createElement(_dataGridDnd.default, _extends({
    eventTargetRef: scrollRef,
    width: clientWidth,
    height: clientHeight
  }, dataGridProps)));
};

var _default = GridScroller;
exports.default = _default;