import * as React from "react";
import { MarkdownOverlayEditor } from "../../data-grid-overlay-editor/private/markdown-overlay-editor";
import { drawTextCell, prepTextCell } from "../data-grid-lib";
import { GridCellKind } from "../data-grid-types";
export const markdownCellRenderer = {
  getAccessibilityString: c => {
    var _c$data$toString, _c$data;

    return (_c$data$toString = (_c$data = c.data) === null || _c$data === void 0 ? void 0 : _c$data.toString()) !== null && _c$data$toString !== void 0 ? _c$data$toString : "";
  },
  kind: GridCellKind.Markdown,
  needsHover: false,
  needsHoverPosition: false,
  renderPrep: prepTextCell,
  render: a => drawTextCell(a, a.cell.data),
  onDelete: c => ({ ...c,
    data: ""
  }),
  getEditor: () => p => {
    const {
      onChange,
      onKeyDown,
      value,
      target,
      onFinishedEditing,
      markdownDivCreateNode,
      forceEditMode
    } = p;
    return React.createElement(MarkdownOverlayEditor, {
      onFinish: onFinishedEditing,
      targetRect: target,
      readonly: value.readonly === true,
      markdown: value.data,
      onKeyDown: onKeyDown,
      onChange: e => onChange({ ...value,
        data: e.target.value
      }),
      forceEditMode: forceEditMode,
      createNode: markdownDivCreateNode
    });
  }
};