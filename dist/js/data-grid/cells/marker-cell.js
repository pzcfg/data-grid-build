import { drawMarkerRowCell, prepMarkerRowCell } from "../data-grid-lib";
import { InnerGridCellKind } from "../data-grid-types";
export const markerCellRenderer = {
  getAccessibilityString: c => c.row.toString(),
  kind: InnerGridCellKind.Marker,
  needsHover: true,
  needsHoverPosition: false,
  renderPrep: prepMarkerRowCell,
  render: a => drawMarkerRowCell(a, a.cell.row, a.cell.checked, a.cell.markerKind)
};