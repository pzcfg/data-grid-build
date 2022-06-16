"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rowIDCellRenderer = void 0;

var _react = _interopRequireDefault(require("react"));

var _growingEntry = _interopRequireDefault(require("../../growing-entry/growing-entry"));

var _dataGridLib = require("../data-grid-lib");

var _dataGridTypes = require("../data-grid-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const rowIDCellRenderer = {
  getAccessibilityString: c => {
    var _c$data$toString, _c$data;

    return (_c$data$toString = (_c$data = c.data) === null || _c$data === void 0 ? void 0 : _c$data.toString()) !== null && _c$data$toString !== void 0 ? _c$data$toString : "";
  },
  kind: _dataGridTypes.GridCellKind.RowID,
  needsHover: false,
  needsHoverPosition: false,
  renderPrep: (a, b) => (0, _dataGridLib.prepTextCell)(a, b, a.theme.textLight),
  render: a => (0, _dataGridLib.drawTextCell)(a, a.cell.data, a.cell.contentAlign),
  measure: (ctx, cell) => ctx.measureText(cell.data).width + 16,
  getEditor: () => p => {
    const {
      isHighlighted,
      onChange,
      onKeyDown,
      value
    } = p;
    return _react.default.createElement(_growingEntry.default, {
      highlight: isHighlighted,
      autoFocus: value.readonly !== true,
      disabled: value.readonly !== false,
      onKeyDown: onKeyDown,
      value: value.data,
      onChange: e => onChange({ ...value,
        data: e.target.value
      })
    });
  }
};
exports.rowIDCellRenderer = rowIDCellRenderer;