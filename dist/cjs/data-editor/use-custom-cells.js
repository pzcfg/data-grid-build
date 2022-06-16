"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCustomCells = useCustomCells;

var React = _interopRequireWildcard(require("react"));

var _dataGridTypes = require("../data-grid/data-grid-types");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function useCustomCells(cells) {
  const drawCell = React.useCallback(args => {
    const {
      cell
    } = args;
    if (cell.kind !== _dataGridTypes.GridCellKind.Custom) return false;

    for (const c of cells) {
      if (c.isMatch(cell)) {
        return c.draw(args, cell);
      }
    }

    return false;
  }, [cells]);
  const provideEditor = React.useCallback(cell => {
    if (cell.kind !== _dataGridTypes.GridCellKind.Custom) return undefined;

    for (const c of cells) {
      if (c.isMatch(cell)) {
        return c.provideEditor(cell);
      }
    }

    return undefined;
  }, [cells]);
  const coercePasteValue = React.useCallback((val, cell) => {
    if (cell.kind !== _dataGridTypes.GridCellKind.Custom) return undefined;

    for (const c of cells) {
      if (c.isMatch(cell)) {
        if (c.onPaste === undefined) {
          return undefined;
        }

        return { ...cell,
          data: c.onPaste(val, cell.data)
        };
      }
    }
  }, [cells]);
  return {
    drawCell,
    provideEditor,
    coercePasteValue
  };
}