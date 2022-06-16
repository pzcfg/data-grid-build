import { GridCellKind, InnerGridCellKind } from "../data-grid-types.js";
import { booleanCellRenderer } from "./boolean-cell.js";
import { bubbleCellRenderer } from "./bubble-cell.js";
import { drilldownCellRenderer } from "./drilldown-cell.js";
import { imageCellRenderer } from "./image-cell.js";
import { loadingCellRenderer } from "./loading-cell.js";
import { markdownCellRenderer } from "./markdown-cell.js";
import { markerCellRenderer } from "./marker-cell.js";
import { newRowCellRenderer } from "./new-row-cell.js";
import { numberCellRenderer } from "./number-cell.js";
import { protectedCellRenderer } from "./protected-cell.js";
import { rowIDCellRenderer } from "./row-id-cell.js";
import { textCellRenderer } from "./text-cell.js";
import { uriCellRenderer } from "./uri-cell.js";

const asCollapsed = x => x;

export const CellRenderers = {
  [InnerGridCellKind.Marker]: asCollapsed(markerCellRenderer),
  [InnerGridCellKind.NewRow]: asCollapsed(newRowCellRenderer),
  [GridCellKind.Boolean]: asCollapsed(booleanCellRenderer),
  [GridCellKind.Bubble]: asCollapsed(bubbleCellRenderer),
  [GridCellKind.Drilldown]: asCollapsed(drilldownCellRenderer),
  [GridCellKind.Image]: asCollapsed(imageCellRenderer),
  [GridCellKind.Loading]: asCollapsed(loadingCellRenderer),
  [GridCellKind.Markdown]: asCollapsed(markdownCellRenderer),
  [GridCellKind.Number]: asCollapsed(numberCellRenderer),
  [GridCellKind.Protected]: asCollapsed(protectedCellRenderer),
  [GridCellKind.RowID]: asCollapsed(rowIDCellRenderer),
  [GridCellKind.Text]: asCollapsed(textCellRenderer),
  [GridCellKind.Uri]: asCollapsed(uriCellRenderer)
};