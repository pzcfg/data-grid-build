import { drawNewRowCell } from "../data-grid-lib";
import { InnerGridCellKind } from "../data-grid-types";
export const newRowCellRenderer = {
  getAccessibilityString: () => "",
  kind: InnerGridCellKind.NewRow,
  needsHover: true,
  needsHoverPosition: false,
  render: a => drawNewRowCell(a, a.cell.hint, a.cell.isFirst, a.cell.icon)
};