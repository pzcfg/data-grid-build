"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadingCellRenderer = void 0;

var _dataGridTypes = require("../data-grid-types");

const loadingCellRenderer = {
  getAccessibilityString: () => "",
  kind: _dataGridTypes.GridCellKind.Loading,
  needsHover: false,
  needsHoverPosition: false,
  render: () => undefined
};
exports.loadingCellRenderer = loadingCellRenderer;