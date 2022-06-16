import React from "react";
import { CompactSelection } from "./data-grid-types.js";
export function useSelectionBehavior(gridSelection, setGridSelection, rangeBehavior, columnBehavior, rowBehavior, rangeSelect) {
  const setCurrent = React.useCallback((value, expand, append, trigger) => {
    var _gridSelection$curren, _gridSelection$curren2;

    if ((rangeSelect === "cell" || rangeSelect === "multi-cell") && value !== undefined) {
      value = { ...value,
        range: {
          x: value.cell[0],
          y: value.cell[1],
          width: 1,
          height: 1
        }
      };
    }

    const addLastRange = append && (rangeSelect === "multi-rect" || rangeSelect === "multi-cell");
    const allowColumnCoSelect = columnBehavior === "mixed" && rangeBehavior === "mixed" && (append || trigger === "drag");
    const allowRowCoSelect = rowBehavior === "mixed" && rangeBehavior === "mixed" && (append || trigger === "drag");
    let newVal = {
      current: value === undefined ? undefined : { ...value,
        rangeStack: trigger === "drag" ? (_gridSelection$curren = (_gridSelection$curren2 = gridSelection.current) === null || _gridSelection$curren2 === void 0 ? void 0 : _gridSelection$curren2.rangeStack) !== null && _gridSelection$curren !== void 0 ? _gridSelection$curren : [] : []
      },
      columns: allowColumnCoSelect ? gridSelection.columns : CompactSelection.empty(),
      rows: allowRowCoSelect ? gridSelection.rows : CompactSelection.empty()
    };

    if (addLastRange && newVal.current !== undefined && gridSelection.current !== undefined) {
      newVal = { ...newVal,
        current: { ...newVal.current,
          rangeStack: [...gridSelection.current.rangeStack, gridSelection.current.range]
        }
      };
    }

    setGridSelection(newVal, expand);
  }, [columnBehavior, gridSelection, rangeBehavior, rangeSelect, rowBehavior, setGridSelection]);
  const setSelectedRows = React.useCallback((newRows, append, allowMixed) => {
    var _newRows;

    newRows = (_newRows = newRows) !== null && _newRows !== void 0 ? _newRows : gridSelection.rows;

    if (append !== undefined) {
      newRows = newRows.add(append);
    }

    let newVal;

    if (rowBehavior === "exclusive" && newRows.length !== 0) {
      newVal = {
        current: undefined,
        columns: CompactSelection.empty(),
        rows: newRows
      };
    } else {
      const rangeMixed = allowMixed && rangeBehavior === "mixed";
      const columnMixed = allowMixed && columnBehavior === "mixed";
      const current = !rangeMixed ? undefined : gridSelection.current;
      newVal = {
        current,
        columns: columnMixed ? gridSelection.columns : CompactSelection.empty(),
        rows: newRows
      };
    }

    setGridSelection(newVal, false);
  }, [columnBehavior, gridSelection, rangeBehavior, rowBehavior, setGridSelection]);
  const setSelectedColumns = React.useCallback((newCols, append, allowMixed) => {
    var _newCols;

    newCols = (_newCols = newCols) !== null && _newCols !== void 0 ? _newCols : gridSelection.columns;

    if (append !== undefined) {
      newCols = newCols.add(append);
    }

    let newVal;

    if (columnBehavior === "exclusive" && newCols.length !== 0) {
      newVal = {
        current: undefined,
        rows: CompactSelection.empty(),
        columns: newCols
      };
    } else {
      const rangeMixed = allowMixed && rangeBehavior === "mixed";
      const rowMixed = allowMixed && rowBehavior === "mixed";
      const current = !rangeMixed ? undefined : gridSelection.current;
      newVal = {
        current,
        rows: rowMixed ? gridSelection.rows : CompactSelection.empty(),
        columns: newCols
      };
    }

    setGridSelection(newVal, false);
  }, [columnBehavior, gridSelection, rangeBehavior, rowBehavior, setGridSelection]);
  return [setCurrent, setSelectedRows, setSelectedColumns];
}