import * as React from "react";
import { createPortal } from "react-dom";
import { ThemeProvider } from "styled-components";
import ClickOutsideContainer from "../click-outside-container/click-outside-container.js";
import { CellRenderers } from "../data-grid/cells/index.js";
import { GridCellKind, isObjectEditorCallbackResult } from "../data-grid/data-grid-types.js";
import { DataGridOverlayEditorStyle } from "./data-grid-overlay-editor-style.js";
import { useStayOnScreen } from "./use-stay-on-screen.js";

const DataGridOverlayEditor = p => {
  const {
    target,
    content,
    onFinishEditing,
    forceEditMode,
    initialValue,
    imageEditorOverride,
    markdownDivCreateNode,
    highlight,
    className,
    theme,
    id,
    provideEditor
  } = p;
  const [tempValue, setTempValue] = React.useState(forceEditMode ? content : undefined);
  const finished = React.useRef(false);
  const customMotion = React.useRef(undefined);
  const onClickOutside = React.useCallback(() => {
    onFinishEditing(tempValue, [0, 0]);
    finished.current = true;
  }, [tempValue, onFinishEditing]);
  const onCustomFinishedEditing = React.useCallback(newValue => {
    var _customMotion$current;

    onFinishEditing(newValue, (_customMotion$current = customMotion.current) !== null && _customMotion$current !== void 0 ? _customMotion$current : [0, 0]);
    finished.current = true;
  }, [onFinishEditing]);
  const onKeyDownCustom = React.useCallback(async event => {
    let save = false;

    if (event.key === "Escape") {
      event.stopPropagation();
      event.preventDefault();
      customMotion.current = [0, 0];
    } else if (event.key === "Enter" && !event.shiftKey) {
      event.stopPropagation();
      event.preventDefault();
      customMotion.current = [0, 1];
      save = true;
    } else if (event.key === "Tab") {
      event.stopPropagation();
      event.preventDefault();
      customMotion.current = [event.shiftKey ? -1 : 1, 0];
      save = true;
    }

    await new Promise(r => window.setTimeout(r, 0));

    if (!finished.current && customMotion.current !== undefined) {
      onFinishEditing(save ? tempValue : undefined, customMotion.current);
      finished.current = true;
    }
  }, [onFinishEditing, tempValue]);
  const onKeyDown = React.useCallback(event => {
    if (event.key === "Escape") {
      onFinishEditing(undefined, [0, 0]);
      event.stopPropagation();
      event.preventDefault();
    } else if (event.key === "Enter" && !event.ctrlKey) {
      onFinishEditing(tempValue, [0, event.shiftKey ? -1 : 1]);
      event.stopPropagation();
      event.preventDefault();
    } else if (event.key === "Tab") {
      onFinishEditing(tempValue, [event.shiftKey ? -1 : 1, 0]);
      event.stopPropagation();
      event.preventDefault();
    }
  }, [onFinishEditing, tempValue]);
  const targetValue = tempValue !== null && tempValue !== void 0 ? tempValue : content;
  const customEditor = React.useMemo(() => {
    return provideEditor === null || provideEditor === void 0 ? void 0 : provideEditor(content);
  }, [content, provideEditor]);
  const [CellEditor, useLabel] = React.useMemo(() => {
    var _renderer$getEditor;

    if (content.kind === GridCellKind.Custom) return [];
    const renderer = CellRenderers[content.kind];
    return [(_renderer$getEditor = renderer.getEditor) === null || _renderer$getEditor === void 0 ? void 0 : _renderer$getEditor.call(renderer, content), renderer.useLabel];
  }, [content]);
  const {
    ref,
    style: stayOnScreenStyle
  } = useStayOnScreen();
  let pad = true;
  let editor;
  let style = true;
  let styleOverride;

  if (customEditor !== undefined) {
    pad = customEditor.disablePadding !== true;
    style = customEditor.disableStyling !== true;
    const isObjectEditor = isObjectEditorCallbackResult(customEditor);

    if (isObjectEditor) {
      styleOverride = customEditor.styleOverride;
    }

    const CustomEditor = isObjectEditor ? customEditor.editor : customEditor;
    editor = React.createElement(CustomEditor, {
      isHighlighted: highlight,
      onChange: setTempValue,
      value: targetValue,
      initialValue: initialValue,
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

  styleOverride = { ...styleOverride,
    ...stayOnScreenStyle
  };
  const portalElement = document.getElementById("portal");

  if (portalElement === null) {
    console.error('Cannot open Data Grid overlay editor, because portal not found.  Please add `<div id="portal" />` as the last child of your `<body>`.');
    return null;
  }

  const portal = createPortal(React.createElement(ThemeProvider, {
    theme: theme
  }, React.createElement(ClickOutsideContainer, {
    className: className,
    onClickOutside: onClickOutside
  }, React.createElement(DataGridOverlayEditorStyle, {
    ref: ref,
    id: id,
    className: style ? "gdg-style" : "gdg-unstyle",
    style: styleOverride,
    as: useLabel === true ? "label" : undefined,
    targetRect: target,
    pad: pad
  }, React.createElement("div", {
    className: "clip-region",
    onKeyDown: customEditor === undefined ? undefined : onKeyDownCustom
  }, editor)))), portalElement);
  return portal;
};

export default DataGridOverlayEditor;