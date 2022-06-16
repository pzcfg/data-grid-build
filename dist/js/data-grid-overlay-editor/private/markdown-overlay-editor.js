import * as React from "react";
import MarkdownDiv from "../../markdown-div/markdown-div.js";
import GrowingEntry from "../../growing-entry/growing-entry.js";
import { MarkdownOverlayEditorStyle } from "./markdown-overlay-editor-style.js";
import { EditPencil, Checkmark } from "../../common/utils.js";
export const MarkdownOverlayEditor = p => {
  const {
    markdown,
    onChange,
    onKeyDown,
    forceEditMode,
    createNode,
    targetRect,
    readonly,
    onFinish
  } = p;
  const [editMode, setEditMode] = React.useState(markdown === "" || forceEditMode);
  const onEditClick = React.useCallback(() => {
    setEditMode(e => !e);
  }, []);
  const addLeftPad = markdown ? "ml-6" : "";

  if (editMode) {
    return React.createElement(MarkdownOverlayEditorStyle, {
      targetRect: targetRect
    }, React.createElement(GrowingEntry, {
      autoFocus: true,
      highlight: false,
      onKeyDown: e => {
        if (e.key !== "Enter") {
          onKeyDown(e);
        }
      },
      value: markdown,
      onChange: onChange
    }), React.createElement("div", {
      className: `edit-icon checkmark-hover ${addLeftPad}`,
      onClick: () => onFinish()
    }, React.createElement(Checkmark, null)));
  }

  return React.createElement(MarkdownOverlayEditorStyle, {
    targetRect: targetRect
  }, React.createElement(MarkdownDiv, {
    contents: markdown,
    createNode: createNode
  }), !readonly && React.createElement(React.Fragment, null, React.createElement("div", {
    className: "spacer"
  }), React.createElement("div", {
    className: `edit-icon edit-hover ${addLeftPad}`,
    onClick: onEditClick
  }, React.createElement(EditPencil, null))), React.createElement("textarea", {
    className: "md-edit-textarea gdg-input",
    autoFocus: true,
    onKeyDown: onKeyDown
  }));
};