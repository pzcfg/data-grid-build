import * as React from "react";
import { CellRenderers } from "../data-grid/cells/index.js";
import { GridCellKind, isSizedGridColumn, resolveCellsThunk } from "../data-grid/data-grid-types.js";
const defaultSize = 150;

function measureCell(ctx, cell) {
  var _r$measure;

  if (cell.kind === GridCellKind.Custom) return defaultSize;
  const r = CellRenderers[cell.kind];
  return (_r$measure = r === null || r === void 0 ? void 0 : r.measure(ctx, cell)) !== null && _r$measure !== void 0 ? _r$measure : defaultSize;
}

export function useColumnSizer(columns, rows, getCellsForSelection, minColumnWidth, maxColumnWidth, theme, abortController) {
  const rowsRef = React.useRef(rows);
  const getCellsForSelectionRef = React.useRef(getCellsForSelection);
  const themeRef = React.useRef(theme);
  rowsRef.current = rows;
  getCellsForSelectionRef.current = getCellsForSelection;
  themeRef.current = theme;
  const [ctx] = React.useState(() => {
    const offscreen = document.createElement("canvas");
    return offscreen.getContext("2d", {
      alpha: false
    });
  });
  const memoMap = React.useRef({});
  const lastColumns = React.useRef();
  const [selectedData, setSelectionData] = React.useState();
  React.useLayoutEffect(() => {
    const getCells = getCellsForSelectionRef.current;
    if (getCells === undefined || columns.every(isSizedGridColumn)) return;
    let computeRows = Math.max(1, 10 - Math.floor(columns.length / 10000));
    let tailRows = 0;

    if (computeRows < rowsRef.current && computeRows > 1) {
      computeRows--;
      tailRows = 1;
    }

    const computeArea = {
      x: 0,
      y: 0,
      width: columns.length,
      height: Math.min(rowsRef.current, computeRows)
    };
    const tailComputeArea = {
      x: 0,
      y: rowsRef.current - 1,
      width: columns.length,
      height: 1
    };

    const fn = async () => {
      const getResult = getCells(computeArea, abortController.signal);
      const tailGetResult = tailRows > 0 ? getCells(tailComputeArea, abortController.signal) : undefined;
      let toSet;

      if (typeof getResult === "object") {
        toSet = getResult;
      } else {
        toSet = await resolveCellsThunk(getResult);
      }

      if (tailGetResult !== undefined) {
        if (typeof tailGetResult === "object") {
          toSet = [...toSet, ...tailGetResult];
        } else {
          toSet = [...toSet, ...(await resolveCellsThunk(tailGetResult))];
        }
      }

      lastColumns.current = columns;
      setSelectionData(toSet);
    };

    void fn();
  }, [abortController.signal, columns]);
  return React.useMemo(() => {
    if (columns.every(isSizedGridColumn)) {
      return columns;
    }

    if (ctx === null) {
      return columns.map(c => {
        if (isSizedGridColumn(c)) return c;
        return { ...c,
          width: defaultSize
        };
      });
    }

    ctx.font = `${themeRef.current.baseFontStyle} ${themeRef.current.fontFamily}`;
    return columns.map((c, colIndex) => {
      if (isSizedGridColumn(c)) return c;

      if (memoMap.current[c.id] !== undefined) {
        return { ...c,
          width: memoMap.current[c.id]
        };
      }

      if (selectedData === undefined || lastColumns.current !== columns || c.id === undefined) {
        return { ...c,
          width: defaultSize
        };
      }

      let sizes = [];

      if (selectedData !== undefined) {
        sizes.push(...selectedData.map(row => row[colIndex]).map(cell => measureCell(ctx, cell)));
      }

      sizes.push(ctx.measureText(c.title).width + 16 + (c.icon === undefined ? 0 : 28));
      const average = sizes.reduce((a, b) => a + b) / sizes.length;

      if (sizes.length > 5) {
        sizes = sizes.filter(a => a < average * 2);
      }

      const biggest = Math.max(...sizes);
      const final = Math.max(minColumnWidth, Math.min(maxColumnWidth, Math.ceil(biggest)));
      memoMap.current[c.id] = final;
      return { ...c,
        width: final
      };
    });
  }, [columns, ctx, maxColumnWidth, minColumnWidth, selectedData]);
}