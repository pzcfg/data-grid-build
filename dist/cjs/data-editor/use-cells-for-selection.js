"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCellsForSelection = useCellsForSelection;

var React = _interopRequireWildcard(require("react"));

var _dataGridTypes = require("../data-grid/data-grid-types");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function useCellsForSelection(getCellsForSelectionIn, getCellContent, rowMarkerOffset, abortController) {
  const getCellsForSelectionDirectWhenValid = React.useCallback(rect => {
    var _getCellsForSelection;

    if (getCellsForSelectionIn === true) {
      const result = [];

      for (let y = rect.y; y < rect.y + rect.height; y++) {
        const row = [];

        for (let x = rect.x; x < rect.x + rect.width; x++) {
          if (x < 0) {
            row.push({
              kind: _dataGridTypes.GridCellKind.Loading,
              allowOverlay: false
            });
          } else {
            row.push(getCellContent([x, y]));
          }
        }

        result.push(row);
      }

      return result;
    }

    return (_getCellsForSelection = getCellsForSelectionIn === null || getCellsForSelectionIn === void 0 ? void 0 : getCellsForSelectionIn(rect, abortController.signal)) !== null && _getCellsForSelection !== void 0 ? _getCellsForSelection : [];
  }, [abortController.signal, getCellContent, getCellsForSelectionIn]);
  const getCellsForSelectionDirect = getCellsForSelectionIn !== undefined ? getCellsForSelectionDirectWhenValid : undefined;
  const getCellsForSelectionMangled = React.useCallback(rect => {
    if (getCellsForSelectionDirect === undefined) return [];
    const newRect = { ...rect,
      x: rect.x - rowMarkerOffset
    };

    if (newRect.x < 0) {
      newRect.x = 0;
      newRect.width--;
      const r = getCellsForSelectionDirect(newRect, abortController.signal);

      if (typeof r === "function") {
        return async () => (await r()).map(row => [{
          kind: _dataGridTypes.GridCellKind.Loading,
          allowOverlay: false
        }, ...row]);
      }

      return r.map(row => [{
        kind: _dataGridTypes.GridCellKind.Loading,
        allowOverlay: false
      }, ...row]);
    }

    return getCellsForSelectionDirect(newRect, abortController.signal);
  }, [abortController.signal, getCellsForSelectionDirect, rowMarkerOffset]);
  const getCellsForSelection = getCellsForSelectionIn !== undefined ? getCellsForSelectionMangled : undefined;
  return [getCellsForSelection, getCellsForSelectionDirect];
}