"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollRegionStyle = exports.InfiniteScroller = void 0;

var _styles = require("../common/styles");

var React = _interopRequireWildcard(require("react"));

var _reactVirtualizedAutoSizer = _interopRequireDefault(require("react-virtualized-auto-sizer"));

var _browserDetect = require("../common/browser-detect");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const ScrollRegionStyle = _styles.styled.div`
    .dvn-scroller {
        overflow: ${_browserDetect.browserIsSafari ? "scroll" : "auto"};
        transform: translate3d(0, 0, 0);
    }

    .dvn-scroll-inner {
        display: flex;
        pointer-events: none;

        > * {
            flex-shrink: 0;
        }

        .dvn-spacer {
            flex-grow: 1;
        }

        .dvn-stack {
            display: flex;
            flex-direction: column;
        }
    }

    .dvn-underlay > * {
        position: absolute;
        left: 0;
        top: 0;
    }

    canvas {
        outline: none;

        * {
            height: 0;
        }
    }
`;
exports.ScrollRegionStyle = ScrollRegionStyle;

const InfiniteScroller = p => {
  const {
    children,
    clientHeight,
    scrollHeight,
    scrollWidth,
    update,
    draggable,
    className,
    paddingBottom = 0,
    paddingRight = 0,
    rightElement,
    rightElementSticky = false,
    scrollRef,
    scrollToEnd,
    minimap,
    style
  } = p;
  const padders = [];
  const offsetY = React.useRef(0);
  const lastScrollY = React.useRef(0);
  const scroller = React.useRef(null);
  const dpr = window.devicePixelRatio;
  React.useEffect(() => {
    const el = scroller.current;
    if (el === null || scrollToEnd !== true) return;
    el.scrollLeft = el.scrollWidth - el.clientWidth;
  }, [scrollToEnd]);
  const onScroll = React.useCallback(() => {
    const el = scroller.current;
    if (el === null) return;
    const newY = el.scrollTop;
    const delta = lastScrollY.current - newY;
    const scrollableHeight = el.scrollHeight - el.clientHeight;
    const maxFakeY = Math.max(0, scrollHeight - el.clientHeight);
    lastScrollY.current = newY;

    if (scrollableHeight > 0 && (Math.abs(delta) > 2000 || newY === 0 || newY === scrollableHeight) && scrollHeight > el.scrollHeight + 5) {
      const prog = newY / scrollableHeight;
      const recomputed = (scrollHeight - el.clientHeight) * prog;
      offsetY.current = recomputed - newY;
    }

    update({
      x: el.scrollLeft,
      y: Math.min(maxFakeY, newY + offsetY.current),
      width: el.clientWidth - paddingRight,
      height: el.clientHeight - paddingBottom
    });
  }, [paddingBottom, paddingRight, scrollHeight, update]);
  const lastProps = React.useRef();
  const nomEvent = React.useCallback(e => {
    e.stopPropagation();
  }, []);
  const setRefs = React.useCallback(instance => {
    scroller.current = instance;

    if (scrollRef !== undefined) {
      scrollRef.current = instance;
    }
  }, [scrollRef]);
  let key = 0;
  let h = 0;

  while (h < scrollHeight) {
    const toAdd = Math.min(5000000, scrollHeight - h);
    padders.push(React.createElement("div", {
      key: key++,
      style: {
        width: scrollWidth,
        height: toAdd
      }
    }));
    h += toAdd;
  }

  return React.createElement("div", {
    style: style
  }, React.createElement(_reactVirtualizedAutoSizer.default, null, props => {
    var _lastProps$current, _lastProps$current2;

    if (props.width === 0 || props.height === 0) return null;

    if (((_lastProps$current = lastProps.current) === null || _lastProps$current === void 0 ? void 0 : _lastProps$current.height) !== props.height || ((_lastProps$current2 = lastProps.current) === null || _lastProps$current2 === void 0 ? void 0 : _lastProps$current2.width) !== props.width) {
      window.setTimeout(onScroll, 0);
      lastProps.current = props;
    }

    return React.createElement(ScrollRegionStyle, null, minimap, React.createElement("div", {
      className: "dvn-underlay"
    }, children), React.createElement("div", {
      ref: setRefs,
      style: props,
      draggable: draggable,
      onDragStart: e => {
        if (!draggable) {
          e.stopPropagation();
          e.preventDefault();
        }
      },
      className: "dvn-scroller " + (className !== null && className !== void 0 ? className : ""),
      onScroll: onScroll
    }, React.createElement("div", {
      className: "dvn-scroll-inner"
    }, React.createElement("div", {
      className: "dvn-stack"
    }, padders), rightElement !== undefined && React.createElement(React.Fragment, null, React.createElement("div", {
      className: "dvn-spacer"
    }), React.createElement("div", {
      onMouseDown: nomEvent,
      onMouseUp: nomEvent,
      onMouseMove: nomEvent,
      style: {
        height: props.height,
        maxHeight: clientHeight - Math.ceil(dpr % 1),
        position: "sticky",
        top: 0,
        marginBottom: -40,
        marginRight: paddingRight,
        right: rightElementSticky ? paddingRight !== null && paddingRight !== void 0 ? paddingRight : 0 : undefined,
        pointerEvents: "auto"
      }
    }, rightElement)))));
  }));
};

exports.InfiniteScroller = InfiniteScroller;