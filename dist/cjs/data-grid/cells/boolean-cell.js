"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.booleanCellRenderer = void 0;
exports.toggleBoolean = toggleBoolean;

var _dataGridLib = require("../data-grid-lib");

var _dataGridTypes = require("../data-grid-types");

function toggleBoolean(data) {
  return data !== true;
}

const booleanCellRenderer = {
  getAccessibilityString: c => {
    var _c$data$toString, _c$data;

    return (_c$data$toString = (_c$data = c.data) === null || _c$data === void 0 ? void 0 : _c$data.toString()) !== null && _c$data$toString !== void 0 ? _c$data$toString : "false";
  },
  kind: _dataGridTypes.GridCellKind.Boolean,
  needsHover: true,
  useLabel: false,
  needsHoverPosition: true,
  measure: () => 50,
  render: a => (0, _dataGridLib.drawBoolean)(a, a.cell.data, (0, _dataGridTypes.booleanCellIsEditable)(a.cell)),
  onDelete: c => ({ ...c,
    data: false
  }),
  onClick: (cell, x, y, bounds) => {
    if ((0, _dataGridTypes.booleanCellIsEditable)(cell) && Math.abs(x - bounds.width / 2) <= 10 && Math.abs(y - bounds.height / 2) <= 10) {
      return { ...cell,
        data: toggleBoolean(cell.data)
      };
    }

    return undefined;
  }
};
exports.booleanCellRenderer = booleanCellRenderer;