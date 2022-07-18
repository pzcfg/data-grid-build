import { drawProtectedCell } from "../data-grid-lib.js";
import { GridCellKind } from "../data-grid-types.js";
export const protectedCellRenderer = {
  getAccessibilityString: () => "",
  measure: () => 108,
  kind: GridCellKind.Protected,
  needsHover: false,
  needsHoverPosition: false,
  render: drawProtectedCell
};