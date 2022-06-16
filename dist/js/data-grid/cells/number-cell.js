import * as React from "react";
import { drawTextCell, prepTextCell } from "../data-grid-lib.js";
import { GridCellKind } from "../data-grid-types.js";
const NumberOverlayEditor = React.lazy(async () => await import("../../data-grid-overlay-editor/private/number-overlay-editor.js"));
export const numberCellRenderer = {
  getAccessibilityString: c => {
    var _c$data$toString, _c$data;

    return (_c$data$toString = (_c$data = c.data) === null || _c$data === void 0 ? void 0 : _c$data.toString()) !== null && _c$data$toString !== void 0 ? _c$data$toString : "";
  },
  kind: GridCellKind.Number,
  needsHover: false,
  needsHoverPosition: false,
  useLabel: true,
  renderPrep: prepTextCell,
  render: a => drawTextCell(a, a.cell.displayData, a.cell.contentAlign),
  measure: (ctx, cell) => ctx.measureText(cell.displayData).width + 16,
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
    return React.createElement(React.Suspense, {
      fallback: null
    }, React.createElement(NumberOverlayEditor, {
      highlight: isHighlighted,
      disabled: value.readonly === true,
      value: value.data,
      onKeyDown: onKeyDown,
      onChange: x => onChange({ ...value,
        data: x.floatValue
      })
    }));
  }
};