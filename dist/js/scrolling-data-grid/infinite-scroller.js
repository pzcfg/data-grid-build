import { styled } from "../common/styles.js";
import * as React from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { browserIsSafari } from "../common/browser-detect.js";
export const ScrollRegionStyle = styled.div`
    .dvn-scroller {
        overflow: ${browserIsSafari ? "scroll" : "auto"};
        transform: translate3d(0, 0, 0);
    }

    .hidden {
        visibility: hidden;
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
export const InfiniteScroller = p => {
  const {
    children,
    clientHeight,
    scrollHeight,
    scrollWidth,
    update,
    draggable,
    className,
    preventDiagonalScrolling = false,
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
  const lastScrollPosition = React.useRef({
    scrollLeft: 0,
    scrollTop: 0,
    lockDirection: undefined
  });
  const resetHandle = React.useRef(0);
  const rightWrapRef = React.useRef(null);
  const onScroll = React.useCallback(() => {
    var _lock$, _lock$2, _rightWrapRef$current, _rightWrapRef$current2;

    const el = scroller.current;
    if (el === null) return;
    let scrollTop = el.scrollTop;
    let scrollLeft = el.scrollLeft;
    const lastScrollTop = lastScrollPosition.current.scrollTop;
    const lastScrollLeft = lastScrollPosition.current.scrollLeft;
    const dx = scrollLeft - lastScrollLeft;
    const dy = scrollTop - lastScrollTop;

    if (dx !== 0 && dy !== 0 && preventDiagonalScrolling) {
      if (lastScrollPosition.current.lockDirection === undefined) {
        if (Math.abs(dx) > Math.abs(dy)) {
          lastScrollPosition.current.lockDirection = [lastScrollLeft, undefined];
        } else {
          lastScrollPosition.current.lockDirection = [undefined, lastScrollTop];
        }
      }
    }

    const lock = lastScrollPosition.current.lockDirection;
    scrollLeft = (_lock$ = lock === null || lock === void 0 ? void 0 : lock[0]) !== null && _lock$ !== void 0 ? _lock$ : scrollLeft;
    scrollTop = (_lock$2 = lock === null || lock === void 0 ? void 0 : lock[1]) !== null && _lock$2 !== void 0 ? _lock$2 : scrollTop;
    lastScrollPosition.current.scrollLeft = scrollLeft;
    lastScrollPosition.current.scrollTop = scrollTop;
    const newY = Math.max(0, scrollTop);
    const delta = lastScrollY.current - newY;
    const scrollableHeight = el.scrollHeight - el.clientHeight;
    const maxFakeY = Math.max(0, scrollHeight - el.clientHeight);
    lastScrollY.current = newY;

    if (scrollableHeight > 0 && (Math.abs(delta) > 2000 || newY === 0 || newY === scrollableHeight) && scrollHeight > el.scrollHeight + 5) {
      const prog = newY / scrollableHeight;
      const recomputed = (scrollHeight - el.clientHeight) * prog;
      offsetY.current = recomputed - newY;
    }

    if (resetHandle.current > 0) {
      window.clearTimeout(resetHandle.current);
    }

    if (lock !== undefined) {
      resetHandle.current = window.setTimeout(() => {
        var _lastScrollPosition$c;

        const [lx, ly] = (_lastScrollPosition$c = lastScrollPosition.current.lockDirection) !== null && _lastScrollPosition$c !== void 0 ? _lastScrollPosition$c : [];

        if (lx !== undefined) {
          el.scrollLeft = lx;
        } else if (ly !== undefined) {
          el.scrollTop = ly;
        }

        lastScrollPosition.current.lockDirection = undefined;
        resetHandle.current = 0;
      }, 200);
    }

    update({
      x: Math.max(0, scrollLeft),
      y: Math.min(maxFakeY, newY + offsetY.current),
      width: el.clientWidth - paddingRight,
      height: el.clientHeight - paddingBottom,
      paddingRight: (_rightWrapRef$current = (_rightWrapRef$current2 = rightWrapRef.current) === null || _rightWrapRef$current2 === void 0 ? void 0 : _rightWrapRef$current2.clientWidth) !== null && _rightWrapRef$current !== void 0 ? _rightWrapRef$current : 0
    });
  }, [paddingBottom, paddingRight, scrollHeight, update, preventDiagonalScrolling]);
  const onScrollRef = React.useRef(onScroll);
  onScrollRef.current = onScroll;
  const lastProps = React.useRef();
  const nomEvent = React.useCallback(e => {
    e.stopPropagation();
  }, []);
  React.useEffect(() => {
    onScroll();
  }, [onScroll, paddingBottom, paddingRight]);
  const setRefs = React.useCallback(instance => {
    scroller.current = instance;

    if (scrollRef !== undefined) {
      scrollRef.current = instance;
    }
  }, [scrollRef]);
  let key = 0;
  let h = 0;
  padders.push(React.createElement("div", {
    key: key++,
    style: {
      width: scrollWidth,
      height: 0
    }
  }));

  while (h < scrollHeight) {
    const toAdd = Math.min(5000000, scrollHeight - h);
    padders.push(React.createElement("div", {
      key: key++,
      style: {
        width: 0,
        height: toAdd
      }
    }));
    h += toAdd;
  }

  return React.createElement("div", {
    style: style
  }, React.createElement(AutoSizer, null, props => {
    var _lastProps$current, _lastProps$current2;

    if (props.width === 0 || props.height === 0) return null;

    if (((_lastProps$current = lastProps.current) === null || _lastProps$current === void 0 ? void 0 : _lastProps$current.height) !== props.height || ((_lastProps$current2 = lastProps.current) === null || _lastProps$current2 === void 0 ? void 0 : _lastProps$current2.width) !== props.width) {
      window.setTimeout(() => onScrollRef.current(), 0);
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
      className: "dvn-scroll-inner" + (rightElement === undefined ? " hidden" : "")
    }, React.createElement("div", {
      className: "dvn-stack"
    }, padders), rightElement !== undefined && React.createElement(React.Fragment, null, React.createElement("div", {
      className: "dvn-spacer"
    }), React.createElement("div", {
      ref: rightWrapRef,
      onMouseDown: nomEvent,
      onMouseUp: nomEvent,
      onMouseMove: nomEvent,
      style: {
        height: props.height,
        maxHeight: clientHeight - Math.ceil(dpr % 1),
        position: "sticky",
        top: 0,
        paddingLeft: 1,
        marginBottom: -40,
        marginRight: paddingRight,
        right: rightElementSticky ? paddingRight !== null && paddingRight !== void 0 ? paddingRight : 0 : undefined,
        pointerEvents: "auto"
      }
    }, rightElement)))));
  }));
};