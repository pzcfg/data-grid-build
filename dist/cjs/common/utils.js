"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditPencil = exports.Checkmark = void 0;
exports.degreesToRadians = degreesToRadians;
exports.direction = direction;
exports.disabledProps = void 0;
exports.getScrollBarWidth = getScrollBarWidth;
exports.useDebouncedMemo = useDebouncedMemo;
exports.useEventListener = useEventListener;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

var _debounce = _interopRequireDefault(require("lodash/debounce"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function useEventListener(eventName, handler, element, passive, capture) {
  var _capture;

  capture = (_capture = capture) !== null && _capture !== void 0 ? _capture : false;
  const savedHandler = React.useRef();
  savedHandler.current = handler;
  React.useEffect(() => {
    if (element === null || element.addEventListener === undefined) return;
    const el = element;

    const eventListener = event => {
      var _savedHandler$current;

      (_savedHandler$current = savedHandler.current) === null || _savedHandler$current === void 0 ? void 0 : _savedHandler$current.call(el, event);
    };

    el.addEventListener(eventName, eventListener, {
      passive,
      capture
    });
    return () => {
      el.removeEventListener(eventName, eventListener, {
        capture
      });
    };
  }, [eventName, element, passive, capture]);
}

const PI = Math.PI;

function degreesToRadians(degrees) {
  return degrees * PI / 180;
}

const disabledProps = (0, _styledComponents.css)(["opacity:0.4;pointer-events:none;"]);
exports.disabledProps = disabledProps;

const EditPencil = props => {
  var _props$fgColor;

  const fg = (_props$fgColor = props.fgColor) !== null && _props$fgColor !== void 0 ? _props$fgColor : "currentColor";
  return React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    d: "M12.7073 7.05029C7.87391 11.8837 10.4544 9.30322 6.03024 13.7273C5.77392 13.9836 5.58981 14.3071 5.50189 14.6587L4.52521 18.5655C4.38789 19.1148 4.88543 19.6123 5.43472 19.475L9.34146 18.4983C9.69313 18.4104 10.0143 18.2286 10.2706 17.9722L16.9499 11.2929",
    stroke: fg,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    vectorEffect: "non-scaling-stroke"
  }), React.createElement("path", {
    d: "M20.4854 4.92901L19.0712 3.5148C18.2901 2.73375 17.0238 2.73375 16.2428 3.5148L14.475 5.28257C15.5326 7.71912 16.4736 8.6278 18.7176 9.52521L20.4854 7.75744C21.2665 6.97639 21.2665 5.71006 20.4854 4.92901Z",
    stroke: fg,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    vectorEffect: "non-scaling-stroke"
  }));
};

exports.EditPencil = EditPencil;

const Checkmark = props => {
  var _props$fgColor2;

  const fg = (_props$fgColor2 = props.fgColor) !== null && _props$fgColor2 !== void 0 ? _props$fgColor2 : "currentColor";
  return React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    d: "M19 6L10.3802 17L5.34071 11.8758",
    vectorEffect: "non-scaling-stroke",
    stroke: fg,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

exports.Checkmark = Checkmark;

function useDebouncedMemo(factory, deps, time) {
  const [state, setState] = React.useState(factory);
  const mountedRef = React.useRef(true);
  React.useEffect(() => () => {
    mountedRef.current = false;
  }, []);
  const debouncedSetState = React.useRef((0, _debounce.default)(x => {
    if (mountedRef.current) {
      setState(x);
    }
  }, time));
  React.useLayoutEffect(() => {
    if (mountedRef.current) {
      debouncedSetState.current(() => factory());
    }
  }, deps);
  return state;
}

const rtlRange = "\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC";
const ltrRange = "A-Za-z\u00C0-\u00D6\u00D8-\u00F6" + "\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF\u200E\u2C00-\uFB1C" + "\uFE00-\uFE6F\uFEFD-\uFFFF";
const rtl = new RegExp("^[^" + ltrRange + "]*[" + rtlRange + "]");
const ltr = new RegExp("^[^" + rtlRange + "]*[" + ltrRange + "]");

function direction(value) {
  return rtl.test(value) ? "rtl" : ltr.test(value) ? "ltr" : "neutral";
}

let scrollbarWidthCache = undefined;

function getScrollBarWidth() {
  if (scrollbarWidthCache !== undefined) return scrollbarWidthCache;
  const inner = document.createElement("p");
  inner.style.width = "100%";
  inner.style.height = "200px";
  const outer = document.createElement("div");
  outer.id = "testScrollbar";
  outer.style.position = "absolute";
  outer.style.top = "0px";
  outer.style.left = "0px";
  outer.style.visibility = "hidden";
  outer.style.width = "200px";
  outer.style.height = "150px";
  outer.style.overflow = "hidden";
  outer.appendChild(inner);
  document.body.appendChild(outer);
  const w1 = inner.offsetWidth;
  outer.style.overflow = "scroll";
  let w2 = inner.offsetWidth;

  if (w1 === w2) {
    w2 = outer.clientWidth;
  }

  document.body.removeChild(outer);
  scrollbarWidthCache = w1 - w2;
  return scrollbarWidthCache;
}