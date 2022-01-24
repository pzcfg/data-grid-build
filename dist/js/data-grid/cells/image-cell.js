import * as React from "react";
import ImageOverlayEditor from "../../data-grid-overlay-editor/private/image-overlay-editor";
import { drawImage } from "../data-grid-lib";
import { GridCellKind } from "../data-grid-types";
export const imageCellRenderer = {
  getAccessibilityString: c => c.data.join(", "),
  kind: GridCellKind.Image,
  needsHover: false,
  needsHoverPosition: false,
  render: a => {
    var _a$cell$displayData;

    return drawImage(a, (_a$cell$displayData = a.cell.displayData) !== null && _a$cell$displayData !== void 0 ? _a$cell$displayData : a.cell.data);
  },
  onDelete: c => ({ ...c,
    data: []
  }),
  getEditor: () => p => {
    const {
      onKeyDown,
      value,
      onFinishedEditing,
      imageEditorOverride
    } = p;
    const ImageEditor = imageEditorOverride !== null && imageEditorOverride !== void 0 ? imageEditorOverride : ImageOverlayEditor;
    return React.createElement(ImageEditor, {
      urls: value.data,
      canWrite: value.allowAdd,
      onCancel: onFinishedEditing,
      onChange: newImage => {
        onFinishedEditing({ ...value,
          data: [newImage]
        });
      },
      onKeyDown: onKeyDown
    });
  }
};