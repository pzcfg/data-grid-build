import * as React from "react";
import NumberOverlayEditor from "../../data-grid-overlay-editor/private/number-overlay-editor";
import { drawTextCell, prepTextCell } from "../data-grid-lib";
import { GridCellKind } from "../data-grid-types";
export const numberCellRenderer = {
  getAccessibilityString: c => {
    var _c$data$toString, _c$data;

    return (_c$data$toString = (_c$data = c.data) === null || _c$data === void 0 ? void 0 : _c$data.toString()) !== null && _c$data$toString !== void 0 ? _c$data$toString : "";
  },
  kind: GridCellKind.Number,
  needsHover: false,
  needsHoverPosition: false,
  renderPrep: prepTextCell,
  render: a => drawTextCell(a, a.cell.displayData),
  onDelete: c => ({ ...c,
    data: undefined
  }),
  getEditor: () => p => {
    const {
      isHighlighted,
      onChange,
      onKeyDown,
      value
    } = p;
    return React.createElement(NumberOverlayEditor, {
      highlight: isHighlighted,
      disabled: value.readonly === true,
      value: value.data,
      onKeyDown: onKeyDown,
      onChange: x => onChange({ ...value,
        data: x.floatValue
      })
    });
  }
};