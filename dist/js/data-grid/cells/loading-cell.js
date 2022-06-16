import { GridCellKind } from "../data-grid-types.js";
export const loadingCellRenderer = {
  getAccessibilityString: () => "",
  kind: GridCellKind.Loading,
  needsHover: false,
  useLabel: false,
  needsHoverPosition: false,
  measure: () => 150,
  render: () => undefined
};