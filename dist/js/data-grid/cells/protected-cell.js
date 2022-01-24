import { drawProtectedCell } from "../data-grid-lib";
import { GridCellKind } from "../data-grid-types";
export const protectedCellRenderer = {
  getAccessibilityString: () => "",
  kind: GridCellKind.Protected,
  needsHover: false,
  needsHoverPosition: false,
  render: drawProtectedCell
};