import { drawTextCell, prepTextCell } from "../data-grid-lib";
import { GridCellKind } from "../data-grid-types";
export const rowIDCellRenderer = {
  getAccessibilityString: c => {
    var _c$data$toString, _c$data;

    return (_c$data$toString = (_c$data = c.data) === null || _c$data === void 0 ? void 0 : _c$data.toString()) !== null && _c$data$toString !== void 0 ? _c$data$toString : "";
  },
  kind: GridCellKind.RowID,
  needsHover: false,
  needsHoverPosition: false,
  renderPrep: a => prepTextCell(a, a.theme.textLight),
  render: a => drawTextCell(a, a.cell.data)
};