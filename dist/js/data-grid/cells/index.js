import { GridCellKind, InnerGridCellKind } from "../data-grid-types";
import { booleanCellRenderer } from "./boolean-cell";
import { bubbleCellRenderer } from "./bubble-cell";
import { drilldownCellRenderer } from "./drilldown-cell";
import { imageCellRenderer } from "./image-cell";
import { loadingCellRenderer } from "./loading-cell";
import { markdownCellRenderer } from "./markdown-cell";
import { markerCellRenderer } from "./marker-cell";
import { newRowCellRenderer } from "./new-row-cell";
import { numberCellRenderer } from "./number-cell";
import { protectedCellRenderer } from "./protected-cell";
import { rowIDCellRenderer } from "./row-id-cell";
import { textCellRenderer } from "./text-cell";
import { uriCellRenderer } from "./uri-cell";

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