import * as React from "react";
import UriOverlayEditor from "../../data-grid-overlay-editor/private/uri-overlay-editor.js";
import { drawTextCell, prepTextCell } from "../data-grid-lib.js";
import { GridCellKind } from "../data-grid-types.js";
export const uriCellRenderer = {
  getAccessibilityString: c => {
    var _c$data$toString, _c$data;

    return (_c$data$toString = (_c$data = c.data) === null || _c$data === void 0 ? void 0 : _c$data.toString()) !== null && _c$data$toString !== void 0 ? _c$data$toString : "";
  },
  kind: GridCellKind.Uri,
  needsHover: false,
  needsHoverPosition: false,
  useLabel: true,
  renderPrep: prepTextCell,
  render: a => drawTextCell(a, a.cell.data, a.cell.contentAlign),
  measure: (ctx, cell) => ctx.measureText(cell.data).width + 16,
  onDelete: c => ({ ...c,
    data: ""
  }),
  getEditor: () => p => {
    const {
      onChange,
      onKeyDown,
      value,
      forceEditMode
    } = p;
    return React.createElement(UriOverlayEditor, {
      forceEditMode: forceEditMode,
      uri: value.data,
      readonly: value.readonly === true,
      onKeyDown: onKeyDown,
      onChange: e => onChange({ ...value,
        data: e.target.value
      })
    });
  }
};