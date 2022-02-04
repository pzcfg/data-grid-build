"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _clickOutsideContainer = _interopRequireDefault(require("../click-outside-container/click-outside-container"));

var _cells = require("../data-grid/cells");

var _dataGridTypes = require("../data-grid/data-grid-types");

var _dataGridOverlayEditorStyle = require("./data-grid-overlay-editor-style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

    if (content.kind === _dataGridTypes.GridCellKind.Custom) return undefined;
    const renderer = _cells.CellRenderers[content.kind];
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

  const portal = (0, _reactDom.createPortal)(React.createElement(_clickOutsideContainer.default, {
    className: className,
    onClickOutside: onClickOutside
  }, React.createElement(_dataGridOverlayEditorStyle.DataGridOverlayEditorStyle, {
    targetRect: target,
    pad: pad,
    unstyled: unstyled
  }, React.createElement("div", {
    className: "clip-region",
    onKeyDown: CustomEditor === undefined ? undefined : onKeyDown
  }, editor))), portalElement);
  return portal;
};

var _default = DataGridOverlayEditor;
exports.default = _default;