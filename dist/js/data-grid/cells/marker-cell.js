import { deprepMarkerRowCell, drawMarkerRowCell, prepMarkerRowCell } from "../data-grid-lib.js";
import { InnerGridCellKind } from "../data-grid-types.js";
export const markerCellRenderer = {
  getAccessibilityString: c => c.row.toString(),
  kind: InnerGridCellKind.Marker,
  needsHover: true,
  needsHoverPosition: false,
  renderPrep: prepMarkerRowCell,
  renderDeprep: deprepMarkerRowCell,
  measure: () => 44,
  render: a => drawMarkerRowCell(a, a.cell.row, a.cell.checked, a.cell.markerKind)
};