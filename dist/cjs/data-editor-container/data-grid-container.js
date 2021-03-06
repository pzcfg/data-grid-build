"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataEditorContainer = void 0;

var _styles = require("../common/styles");

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function toCss(x) {
  if (typeof x === "string") return x;
  return `${x}px`;
}

const Wrapper = _styles.styled.div`
    position: relative;

    min-width: 10px;
    min-height: 10px;
    max-width: 100%;
    max-height: 100%;

    width: ${p => p.innerWidth};
    height: ${p => p.innerHeight};

    overflow: hidden;
    overflow: clip;

    contain: strict;

    > :first-child {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
`;

const DataEditorContainer = p => {
  const {
    width,
    height,
    children,
    ...rest
  } = p;
  return React.createElement(Wrapper, _extends({
    innerHeight: toCss(height),
    innerWidth: toCss(width)
  }, rest), children);
};

exports.DataEditorContainer = DataEditorContainer;