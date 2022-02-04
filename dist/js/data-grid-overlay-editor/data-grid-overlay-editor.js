import * as React from "react";
import { createPortal } from "react-dom";
import ClickOutsideContainer from "../click-outside-container/click-outside-container";
import { CellRenderers } from "../data-grid/cells";
import { GridCellKind } from "../data-grid/data-grid-types";
import { DataGridOverlayEditorStyle } from "./data-grid-overlay-editor-style";

const DataGridOverlayEditor = p => {
  const {
    target,
    content,
    onFinishEditing,
    forceEditMode,
    imageEditorOverride,
    markdownDivCreateNode,
    highlight,
    className,
    provideEditor
  } = p;
  const [tempValue, setTempValue] = React.useState(forceEditMode ? content : undefined);
  const onClickOutside = React.useCallback(() => {
    onFinishEditing(tempValue, [0, 0]);
  }, [tempValue, onFinishEditing]);
  const onCustomFinishedEditing = React.useCallback(newValue => {
    onFinishEditing(newValue !== undefined ? newValue : tempValue, [0, 0]);
  }, [onFinishEditing, tempValue]);
  const onKeyDown = React.useCallback(event => {
    if (event.key === "Escape") {
      onFinishEditing(undefined, [0, 0]);
    } else if (event.key === "Enter" && !event.shiftKey) {
      onFinishEditing(tempValue, [0, 1]);
      event.stopPropagation();
      event.preventDefault();
    } else if (event.key === "Tab") {
      onFinishEditing(tempValue, [event.shiftKey ? -1 : 1, 0]);
      event.stopPropagation();
      event.preventDefault();
    }
  }, [onFinishEditing, tempValue]);
  const targetValue = tempValue !== null && tempValue !== void 0 ? tempValue : content;
  const CustomEditor = React.useMemo(() => {
    return provideEditor === null || provideEditor === void 0 ? void 0 : provideEditor(content);
  }, [content, provideEditor]);
  const CellEditor = React.useMemo(() => {
    var _renderer$getEditor;

    if (content.kind === GridCellKind.Custom) return undefined;
    const renderer = CellRenderers[content.kind];
    return (_renderer$getEditor = renderer.getEditor) === null || _renderer$getEditor === void 0 ? void 0 : _renderer$getEditor.call(renderer, content);
  }, [content]);
  let pad = true;
  let unstyled = false;
  let editor;

  if (CustomEditor !== undefined) {
    pad = CustomEditor.disablePadding !== true;
    unstyled = CustomEditor.unstyled === true;
    editor = React.createElement(CustomEditor, {
      isHighlighted: highlight,
      onChange: setTempValue,
      value: targetValue,
      onFinishedEditing: onCustomFinishedEditing
    });
  } else if (CellEditor !== undefined) {
    editor = React.createElement(CellEditor, {
      forceEditMode: forceEditMode,
      isHighlighted: highlight,
      onChange: setTempValue,
      value: targetValue,
      onFinishedEditing: e => onFinishEditing(e !== null && e !== void 0 ? e : tempValue, [0, 0]),
      onKeyDown: onKeyDown,
      target: target,
      imageEditorOverride: imageEditorOverride,
      markdownDivCreateNode: markdownDivCreateNode
    });
  }

  const portalElement = document.getElementById("portal");

  if (portalElement === null) {
    console.error('Cannot open Data Grid overlay editor, because portal not found.  Please add `<div id="portal" />` as the last child of your `<body>`.');
    return null;
  }

  const portal = createPortal(React.createElement(ClickOutsideContainer, {
    className: className,
    onClickOutside: onClickOutside
  }, React.createElement(DataGridOverlayEditorStyle, {
    targetRect: target,
    pad: pad,
    unstyled: unstyled
  }, React.createElement("div", {
    className: "clip-region",
    onKeyDown: CustomEditor === undefined ? undefined : onKeyDown
  }, editor))), portalElement);
  return portal;
};

export default DataGridOverlayEditor;