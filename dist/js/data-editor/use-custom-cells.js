import * as React from "react";
import { GridCellKind } from "../data-grid/data-grid-types.js";
export function useCustomCells(cells) {
  const drawCell = React.useCallback(args => {
    const {
      cell
    } = args;
    if (cell.kind !== GridCellKind.Custom) return false;

    for (const c of cells) {
      if (c.isMatch(cell)) {
        return c.draw(args, cell);
      }
    }

    return false;
  }, [cells]);
  const provideEditor = React.useCallback(cell => {
    if (cell.kind !== GridCellKind.Custom) return undefined;

    for (const c of cells) {
      if (c.isMatch(cell)) {
        return c.provideEditor(cell);
      }
    }

    return undefined;
  }, [cells]);
  const coercePasteValue = React.useCallback((val, cell) => {
    if (cell.kind !== GridCellKind.Custom) return undefined;

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