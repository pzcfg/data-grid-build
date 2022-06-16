function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { styled } from "../common/styles.js";
import * as React from "react";

function toCss(x) {
  if (typeof x === "string") return x;
  return `${x}px`;
}

const Wrapper = styled.div`
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
export const DataEditorContainer = p => {
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