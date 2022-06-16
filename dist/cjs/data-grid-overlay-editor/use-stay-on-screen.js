"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRefState = useRefState;
exports.useStayOnScreen = useStayOnScreen;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function useRefState() {
  const [refState, setRefState] = React.useState();
  return [refState !== null && refState !== void 0 ? refState : undefined, setRefState];
}

function useStayOnScreen() {
  const [ref, setRef] = useRefState();
  const [xOffset, setXOffset] = React.useState(0);
  const [isIntersecting, setIsIntersecting] = React.useState(true);
  React.useLayoutEffect(() => {
    if (ref === undefined) return;
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(ents => {
      if (ents.length < 1) return;
      setIsIntersecting(ents[0].isIntersecting);
    }, {
      threshold: 1
    });
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref]);
  React.useEffect(() => {
    if (isIntersecting || ref === undefined) return;
    let rafHandle;

    const fn = () => {
      const {
        right: refRight
      } = ref.getBoundingClientRect();
      setXOffset(cv => Math.min(cv + window.innerWidth - refRight - 10, 0));
      rafHandle = requestAnimationFrame(fn);
    };

    rafHandle = requestAnimationFrame(fn);
    return () => {
      if (rafHandle !== undefined) {
        cancelAnimationFrame(rafHandle);
      }
    };
  }, [ref, isIntersecting]);
  const style = React.useMemo(() => {
    return {
      transform: `translateX(${xOffset}px)`
    };
  }, [xOffset]);
  return {
    ref: setRef,
    style
  };
}