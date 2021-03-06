import _styled2 from "styled-components";
import _styled from "styled-components";
import React from "react";
import { css } from "styled-components";
import ClickOutsideContainer from "../click-outside-container/click-outside-container.js";
export const GroupRename = p => {
  const {
    bounds,
    group,
    onClose,
    canvasBounds,
    onFinish
  } = p;
  const [value, setValue] = React.useState(group);
  return React.createElement(_StyledClickOutsideContainer, {
    style: {
      position: "absolute",
      left: bounds.x - canvasBounds.left + 1,
      top: bounds.y - canvasBounds.top,
      width: bounds.width - 2,
      height: bounds.height
    },
    onClickOutside: onClose
  }, React.createElement(_StyledInput, {
    "data-testid": "group-rename-input",
    value: value,
    onBlur: onClose,
    onFocus: e => e.target.setSelectionRange(0, value.length),
    onChange: e => setValue(e.target.value),
    onKeyDown: e => {
      if (e.key === "Enter") {
        onFinish(value);
      } else if (e.key === "Escape") {
        onClose();
      }
    },
    autoFocus: true,
    $_css: Math.max(16, bounds.height - 10)
  }));
};

var _StyledClickOutsideContainer = _styled(ClickOutsideContainer).withConfig({
  displayName: "group-rename___StyledClickOutsideContainer",
  componentId: "sc-1luhmq4-0"
})(["padding:0 8px;display:flex;align-items:center;background-color:var(--gdg-bg-header);"]);

var _StyledInput = _styled("input").withConfig({
  displayName: "group-rename___StyledInput",
  componentId: "sc-1luhmq4-1"
})(["flex-grow:1;border:none;outline:none;background-color:var(--gdg-bg-header-has-focus);border-radius:9px;padding:0 8px;box-shadow:0 0 0 1px var(--gdg-border-color);color:var(--gdg-text-group-header);min-height:", "px;font:var(--gdg-header-font-style) var(--gdg-font-family);"], p => p.$_css);