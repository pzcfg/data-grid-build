"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.copyToClipboard = copyToClipboard;
exports.expandSelection = expandSelection;
exports.unquote = unquote;

var _support = require("../common/support");

var _dataGridTypes = require("../data-grid/data-grid-types");

function expandSelection(newVal, getCellsForSelection, rowMarkerOffset, spanRangeBehavior, abortController) {
  const origVal = newVal;
  if (spanRangeBehavior === "allowPartial" || newVal.current === undefined) return newVal;

  if (getCellsForSelection !== undefined) {
    let isFilled = false;

    do {
      var _newVal, _newVal$current;

      if (((_newVal = newVal) === null || _newVal === void 0 ? void 0 : _newVal.current) === undefined) break;
      const r = (_newVal$current = newVal.current) === null || _newVal$current === void 0 ? void 0 : _newVal$current.range;
      const cells = [];

      if (r.width > 2) {
        const leftCells = getCellsForSelection({
          x: r.x,
          y: r.y,
          width: 1,
          height: r.height
        }, abortController.signal);

        if (typeof leftCells === "function") {
          return origVal;
        }

        cells.push(...leftCells);
        const rightCells = getCellsForSelection({
          x: r.x + r.width - 1,
          y: r.y,
          width: 1,
          height: r.height
        }, abortController.signal);

        if (typeof rightCells === "function") {
          return origVal;
        }

        cells.push(...rightCells);
      } else {
        const rCells = getCellsForSelection({
          x: r.x,
          y: r.y,
          width: r.width,
          height: r.height
        }, abortController.signal);

        if (typeof rCells === "function") {
          return origVal;
        }

        cells.push(...rCells);
      }

      let left = r.x - rowMarkerOffset;
      let right = r.x + r.width - 1 - rowMarkerOffset;
      cells.forEach(row => row.forEach(cell => {
        if (cell.span === undefined) return;
        left = Math.min(cell.span[0], left);
        right = Math.max(cell.span[1], right);
      }));

      if (left === r.x - rowMarkerOffset && right === r.x + r.width - 1 - rowMarkerOffset) {
        isFilled = true;
      } else {
        var _newVal$current$cell;

        newVal = {
          current: {
            cell: (_newVal$current$cell = newVal.current.cell) !== null && _newVal$current$cell !== void 0 ? _newVal$current$cell : [0, 0],
            range: {
              x: left + rowMarkerOffset,
              y: r.y,
              width: right - left + 1,
              height: r.height
            },
            rangeStack: newVal.current.rangeStack
          },
          columns: newVal.columns,
          rows: newVal.rows
        };
      }
    } while (!isFilled);
  }

  return newVal;
}

function unquote(str) {
  function descape(s) {
    if (s.startsWith('"') && s.endsWith('"')) {
      s = s.slice(1, -1).replace(/""/g, '"');
    }

    return s;
  }

  let State;

  (function (State) {
    State[State["None"] = 0] = "None";
    State[State["inString"] = 1] = "inString";
    State[State["inStringPostQuote"] = 2] = "inStringPostQuote";
  })(State || (State = {}));

  const result = [];
  let current = [];
  let start = 0;
  let state = State.None;
  str = str.trim().replace(/\r\n/g, "\n");
  let index = 0;

  for (const char of str) {
    switch (state) {
      case State.None:
        if (char === "\t" || char === "\n") {
          current.push(str.slice(start, index));
          start = index + 1;

          if (char === "\n") {
            result.push(current);
            current = [];
          }
        } else if (char === `"`) {
          state = State.inString;
        }

        break;

      case State.inString:
        if (char === `"`) {
          state = State.inStringPostQuote;
        }

        break;

      case State.inStringPostQuote:
        if (char === '"') {
          state = State.inString;
        } else if (char === "\t" || char === "\n") {
          current.push(descape(str.slice(start, index)));
          start = index + 1;

          if (char === "\n") {
            result.push(current);
            current = [];
          }

          state = State.None;
        } else {
          state = State.None;
        }

        break;
    }

    index++;
  }

  if (start < str.length) {
    current.push(descape(str.slice(start, str.length)));
  }

  result.push(current);
  return result;
}

function copyToClipboard(cells, columnIndexes) {
  function escape(str) {
    if (/\n|"|\t/.test(str)) {
      str = `"${str.replace(/"/g, `""`)}"`;
    }

    return str;
  }

  const formatCell = (cell, index) => {
    const colIndex = columnIndexes[index];
    if (cell.span !== undefined && cell.span[0] !== colIndex) return "";

    switch (cell.kind) {
      case _dataGridTypes.GridCellKind.Text:
      case _dataGridTypes.GridCellKind.Number:
        return escape(cell.displayData);

      case _dataGridTypes.GridCellKind.Markdown:
      case _dataGridTypes.GridCellKind.RowID:
      case _dataGridTypes.GridCellKind.Uri:
        return escape(cell.data);

      case _dataGridTypes.GridCellKind.Image:
      case _dataGridTypes.GridCellKind.Bubble:
        return cell.data.reduce((pv, cv) => `${escape(pv)},${escape(cv)}`);

      case _dataGridTypes.GridCellKind.Boolean:
        return cell.data ? "TRUE" : "FALSE";

      case _dataGridTypes.GridCellKind.Loading:
        return "#LOADING";

      case _dataGridTypes.GridCellKind.Protected:
        return "************";

      case _dataGridTypes.GridCellKind.Drilldown:
        return cell.data.map(i => i.text).reduce((pv, cv) => `${escape(pv)},${escape(cv)}`);

      case _dataGridTypes.GridCellKind.Custom:
        return escape(cell.copyData);

      default:
        (0, _support.assertNever)(cell);
    }
  };

  const str = cells.map(row => row.map(formatCell).join("\t")).join("\n");
  void window.navigator.clipboard.writeText(str);
}