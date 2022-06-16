import React from "react";
import GrowingEntry from "../../growing-entry/growing-entry.js";
import { drawTextCell, prepTextCell } from "../data-grid-lib.js";
import { GridCellKind } from "../data-grid-types.js";
export const rowIDCellRenderer = {
  getAccessibilityString: c => {
    var _c$data$toString, _c$data;

    return (_c$data$toString = (_c$data = c.data) === null || _c$data === void 0 ? void 0 : _c$data.toString()) !== null && _c$data$toString !== void 0 ? _c$data$toString : "";
  },
  kind: GridCellKind.RowID,
  needsHover: false,
  needsHoverPosition: false,
  renderPrep: (a, b) => prepTextCell(a, b, a.theme.textLight),
  render: a => drawTextCell(a, a.cell.data, a.cell.contentAlign),
  measure: (ctx, cell) => ctx.measureText(cell.data).width + 16,
  getEditor: () => p => {
    const {
      isHighlighted,
      onChange,
      onKeyDown,
      value
    } = p;
    return React.createElement(GrowingEntry, {
      highlight: isHighlighted,
      autoFocus: value.readonly !== true,
      disabled: value.readonly !== false,
      onKeyDown: onKeyDown,
      value: value.data,
      onChange: e => onChange({ ...value,
        data: e.target.value
      })
    });
  }
};