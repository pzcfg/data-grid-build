import { GridCellKind } from "../data-grid-types";
export const loadingCellRenderer = {
  getAccessibilityString: () => "",
  kind: GridCellKind.Loading,
  needsHover: false,
  needsHoverPosition: false,
  render: () => undefined
};