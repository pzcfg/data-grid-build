import { drawNewRowCell } from "../data-grid-lib.js";
import { InnerGridCellKind } from "../data-grid-types.js";
export const newRowCellRenderer = {
  getAccessibilityString: () => "",
  kind: InnerGridCellKind.NewRow,
  needsHover: true,
  needsHoverPosition: false,
  measure: () => 200,
  render: a => drawNewRowCell(a, a.cell.hint, a.cell.icon)
};