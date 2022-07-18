"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.markdownCellRenderer = void 0;

var React = _interopRequireWildcard(require("react"));

var _markdownOverlayEditor = require("../../data-grid-overlay-editor/private/markdown-overlay-editor");

var _dataGridLib = require("../data-grid-lib");

var _dataGridTypes = require("../data-grid-types");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const markdownCellRenderer = {
  getAccessibilityString: c => {
    var _c$data$toString, _c$data;

    return (_c$data$toString = (_c$data = c.data) === null || _c$data === void 0 ? void 0 : _c$data.toString()) !== null && _c$data$toString !== void 0 ? _c$data$toString : "";
  },
  kind: _dataGridTypes.GridCellKind.Markdown,
  needsHover: false,
  needsHoverPosition: false,
  renderPrep: _dataGridLib.prepTextCell,
  measure: (ctx, cell, t) => {
    const firstLine = cell.data.split("\n")[0];
    return ctx.measureText(firstLine).width + 2 * t.cellHorizontalPadding;
  },
  render: a => (0, _dataGridLib.drawTextCell)(a, a.cell.data, a.cell.contentAlign),
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
    return React.createElement(_markdownOverlayEditor.MarkdownOverlayEditor, {
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
exports.markdownCellRenderer = markdownCellRenderer;