import * as React from "react";
import { GridCellKind } from "../data-grid/data-grid-types.js";
export function useCellsForSelection(getCellsForSelectionIn, getCellContent, rowMarkerOffset, abortController) {
  const getCellsForSelectionDirectWhenValid = React.useCallback(rect => {
    var _getCellsForSelection;

    if (getCellsForSelectionIn === true) {
      const result = [];

      for (let y = rect.y; y < rect.y + rect.height; y++) {
        const row = [];

        for (let x = rect.x; x < rect.x + rect.width; x++) {
          if (x < 0) {
            row.push({
              kind: GridCellKind.Loading,
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
          kind: GridCellKind.Loading,
          allowOverlay: false
        }, ...row]);
      }

      return r.map(row => [{
        kind: GridCellKind.Loading,
        allowOverlay: false
      }, ...row]);
    }

    return getCellsForSelectionDirect(newRect, abortController.signal);
  }, [abortController.signal, getCellsForSelectionDirect, rowMarkerOffset]);
  const getCellsForSelection = getCellsForSelectionIn !== undefined ? getCellsForSelectionMangled : undefined;
  return [getCellsForSelection, getCellsForSelectionDirect];
}