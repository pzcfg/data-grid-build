"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.protectedCellRenderer = void 0;

var _dataGridLib = require("../data-grid-lib");

var _dataGridTypes = require("../data-grid-types");

const protectedCellRenderer = {
  getAccessibilityString: () => "",
  kind: _dataGridTypes.GridCellKind.Protected,
  needsHover: false,
  needsHoverPosition: false,
  render: _dataGridLib.drawProtectedCell
};
exports.protectedCellRenderer = protectedCellRenderer;