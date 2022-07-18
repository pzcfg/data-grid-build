import * as React from "react";
import DrilldownOverlayEditor from "../../data-grid-overlay-editor/private/drilldown-overlay-editor.js";
import { drawDrilldownCell } from "../data-grid-lib.js";
import { GridCellKind } from "../data-grid-types.js";
export const drilldownCellRenderer = {
  getAccessibilityString: c => c.data.map(d => d.text).join(", "),
  kind: GridCellKind.Drilldown,
  needsHover: false,
  useLabel: false,
  needsHoverPosition: false,
  measure: (ctx, cell, t) => cell.data.reduce((acc, data) => ctx.measureText(data.text).width + acc + 20 + (data.img !== undefined ? 18 : 0), 0) + 2 * t.cellHorizontalPadding - 4,
  render: a => drawDrilldownCell(a, a.cell.data),
  getEditor: () => p => {
    const {
      onKeyDown,
      value
    } = p;
    return React.createElement(DrilldownOverlayEditor, {
      drilldowns: value.data,
      onKeyDown: onKeyDown
    });
  }
};