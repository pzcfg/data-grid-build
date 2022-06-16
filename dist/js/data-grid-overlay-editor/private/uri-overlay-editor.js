import { EditPencil } from "../../common/utils.js";
import * as React from "react";
import GrowingEntry from "../../growing-entry/growing-entry.js";
import { UriOverlayEditorStyle } from "./uri-overlay-editor-style.js";

const UriOverlayEditor = p => {
  const {
    uri,
    onChange,
    onKeyDown,
    forceEditMode,
    readonly
  } = p;
  const [editMode, setEditMode] = React.useState(uri === "" || forceEditMode);
  const onEditClick = React.useCallback(() => {
    setEditMode(true);
  }, []);

  if (editMode) {
    return React.createElement(GrowingEntry, {
      highlight: true,
      autoFocus: true,
      onKeyDown: onKeyDown,
      value: uri,
      onChange: onChange
    });
  }

  return React.createElement(UriOverlayEditorStyle, null, React.createElement("a", {
    className: "link-area",
    href: uri,
    target: "_blank",
    rel: "noopener noreferrer"
  }, uri), !readonly && React.createElement("div", {
    className: "edit-icon",
    onClick: onEditClick
  }, React.createElement(EditPencil, null)), React.createElement("textarea", {
    className: "gdg-input",
    autoFocus: true,
    onKeyDown: onKeyDown
  }));
};

export default UriOverlayEditor;