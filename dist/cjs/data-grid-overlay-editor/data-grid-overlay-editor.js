"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _styledComponents = require("styled-components");

var _clickOutsideContainer = _interopRequireDefault(require("../click-outside-container/click-outside-container"));

var _styles = require("../common/styles");

var _cells = require("../data-grid/cells");

var _dataGridTypes = require("../data-grid/data-grid-types");

var _dataGridOverlayEditorStyle = require("./data-grid-overlay-editor-style");

var _useStayOnScreen = require("./use-stay-on-screen");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const DataGridOverlayEditor = p => {
  const {
    target,
    content,
    onFinishEditing: onFinishEditingIn,
    forceEditMode,
    initialValue,
    imageEditorOverride,
    markdownDivCreateNode,
    highlight,
    className,
    theme,
    id,
    cell,
    validateCell,
    provideEditor
  } = p;
  const [tempValue, setTempValueRaw] = React.useState(forceEditMode ? content : undefined);
  const lastValueRef = React.useRef(tempValue !== null && tempValue !== void 0 ? tempValue : content);
  lastValueRef.current = tempValue !== null && tempValue !== void 0 ? tempValue : content;
  const [isValid, setIsValid] = React.useState(() => {
    if (validateCell === undefined) return true;
    if ((0, _dataGridTypes.isEditableGridCell)(content) && (validateCell === null || validateCell === void 0 ? void 0 : validateCell(cell, content, lastValueRef.current)) === false) return false;
    return true;
  });
  const onFinishEditing = React.useCallback((newCell, movement) => {
    onFinishEditingIn(isValid ? newCell : undefined, movement);
  }, [isValid, onFinishEditingIn]);
  const setTempValue = React.useCallback(newVal => {
    if (validateCell !== undefined && newVal !== undefined && (0, _dataGridTypes.isEditableGridCell)(newVal)) {
      const validResult = validateCell(cell, newVal, lastValueRef.current);

      if (validResult === false) {
        setIsValid(false);
      } else if (typeof validResult === "object") {
        newVal = validResult;
        setIsValid(true);
      } else {
        setIsValid(true);
      }
    }

    setTempValueRaw(newVal);
  }, [cell, validateCell]);
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

    if (content.kind === _dataGridTypes.GridCellKind.Custom) return [];
    const renderer = _cells.CellRenderers[content.kind];
    return [(_renderer$getEditor = renderer.getEditor) === null || _renderer$getEditor === void 0 ? void 0 : _renderer$getEditor.call(renderer, content), renderer.useLabel];
  }, [content]);
  const {
    ref,
    style: stayOnScreenStyle
  } = (0, _useStayOnScreen.useStayOnScreen)();
  let pad = true;
  let editor;
  let style = true;
  let styleOverride;

  if (customEditor !== undefined) {
    pad = customEditor.disablePadding !== true;
    style = customEditor.disableStyling !== true;
    const isObjectEditor = (0, _dataGridTypes.isObjectEditorCallbackResult)(customEditor);

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
      markdownDivCreateNode: markdownDivCreateNode,
      isValid: isValid
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

  let classWrap = style ? "gdg-style" : "gdg-unstyle";

  if (!isValid) {
    classWrap += " invalid";
  }

  const portal = (0, _reactDom.createPortal)(React.createElement(_styledComponents.ThemeProvider, {
    theme: theme
  }, React.createElement(_clickOutsideContainer.default, {
    style: (0, _styles.makeCSSStyle)(theme),
    className: className,
    onClickOutside: onClickOutside
  }, React.createElement(_dataGridOverlayEditorStyle.DataGridOverlayEditorStyle, {
    ref: ref,
    id: id,
    className: classWrap,
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

var _default = DataGridOverlayEditor;
exports.default = _default;