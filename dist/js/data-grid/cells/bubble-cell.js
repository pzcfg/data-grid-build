import * as React from "react";
import BubblesOverlayEditor from "../../data-grid-overlay-editor/private/bubbles-overlay-editor";
import { drawBubbles } from "../data-grid-lib";
import { GridCellKind } from "../data-grid-types";
export const bubbleCellRenderer = {
  getAccessibilityString: c => {
    var _c$data$toString, _c$data;

    return (_c$data$toString = (_c$data = c.data) === null || _c$data === void 0 ? void 0 : _c$data.toString()) !== null && _c$data$toString !== void 0 ? _c$data$toString : "";
  },
  kind: GridCellKind.Bubble,
  needsHover: false,
  needsHoverPosition: false,
  render: a => drawBubbles(a, a.cell.data),
  getEditor: () => p => {
    const {
      onKeyDown,
      value
    } = p;
    return React.createElement(BubblesOverlayEditor, {
      bubbles: value.data,
      onKeyDown: onKeyDown
    });
  }
};