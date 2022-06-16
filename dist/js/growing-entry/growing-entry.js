function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import { GrowingEntryStyle, ShadowBox, InputBox } from "./growing-entry-style.js";
import { assert } from "../common/support.js";

const GrowingEntry = props => {
  var _rest$className;

  const {
    placeholder,
    value,
    onKeyDown,
    highlight,
    altNewline,
    ...rest
  } = props;
  const {
    onChange,
    className
  } = rest;
  const inputRef = React.useRef(null);
  const useText = value !== null && value !== void 0 ? value : "";
  assert(onChange !== undefined, "GrowingEntry must be a controlled input area");
  React.useEffect(() => {
    const ta = inputRef.current;
    if (ta === null) return;
    if (ta.disabled) return;
    const length = useText.toString().length;
    ta.focus();
    ta.setSelectionRange(highlight ? 0 : length, length);
  }, []);
  const onKeyDownInner = React.useCallback(e => {
    if (e.key === "Enter" && e.shiftKey && altNewline === true) {
      return;
    }

    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);
  }, [altNewline, onKeyDown]);
  return React.createElement(GrowingEntryStyle, null, React.createElement(ShadowBox, {
    className: className
  }, useText + "\n"), React.createElement(InputBox, _extends({}, rest, {
    className: ((_rest$className = rest.className) !== null && _rest$className !== void 0 ? _rest$className : "") + " gdg-input",
    ref: inputRef,
    onKeyDown: onKeyDownInner,
    value: useText,
    placeholder: placeholder,
    dir: "auto"
  })));
};

export default GrowingEntry;