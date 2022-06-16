import { drawBoolean } from "../data-grid-lib.js";
import { GridCellKind, booleanCellIsEditable } from "../data-grid-types.js";
export function toggleBoolean(data) {
  return data !== true;
}
export const booleanCellRenderer = {
  getAccessibilityString: c => {
    var _c$data$toString, _c$data;

    return (_c$data$toString = (_c$data = c.data) === null || _c$data === void 0 ? void 0 : _c$data.toString()) !== null && _c$data$toString !== void 0 ? _c$data$toString : "false";
  },
  kind: GridCellKind.Boolean,
  needsHover: true,
  useLabel: false,
  needsHoverPosition: true,
  measure: () => 50,
  render: a => drawBoolean(a, a.cell.data, booleanCellIsEditable(a.cell)),
  onDelete: c => ({ ...c,
    data: false
  }),
  onClick: (cell, x, y, bounds) => {
    if (booleanCellIsEditable(cell) && Math.abs(x - bounds.width / 2) <= 10 && Math.abs(y - bounds.height / 2) <= 10) {
      return { ...cell,
        data: toggleBoolean(cell.data)
      };
    }

    return undefined;
  }
};