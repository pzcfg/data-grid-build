import { assertNever } from "../common/support.js";
import { BooleanEmpty, BooleanIndeterminate, GridCellKind } from "../data-grid/data-grid-types.js";
export function expandSelection(newVal, getCellsForSelection, rowMarkerOffset, spanRangeBehavior, abortController) {
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
export function unquote(str) {
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
export function decodeHTML(tableEl) {
  const walkEl = [tableEl];
  const result = [];
  let current;

  while (walkEl.length > 0) {
    const el = walkEl.pop();
    if (el === undefined) break;

    if (el instanceof HTMLTableElement || el.nodeName === "TBODY") {
      walkEl.push(...[...el.children].reverse());
    } else if (el instanceof HTMLTableRowElement) {
      if (current !== undefined) {
        result.push(current);
      }

      current = [];
      walkEl.push(...[...el.children].reverse());
    } else if (el instanceof HTMLTableCellElement) {
      var _current, _ref, _el$innerText;

      (_current = current) === null || _current === void 0 ? void 0 : _current.push((_ref = (_el$innerText = el.innerText) !== null && _el$innerText !== void 0 ? _el$innerText : el.textContent) !== null && _ref !== void 0 ? _ref : "");
    }
  }

  if (current !== undefined) {
    result.push(current);
  }

  return result;
}
export function copyToClipboard(cells, columnIndexes, e) {
  function escape(str) {
    if (/[\n"\t]/.test(str)) {
      str = `"${str.replace(/"/g, '""')}"`;
    }

    return str;
  }

  const formatBoolean = val => {
    switch (val) {
      case true:
        return "TRUE";

      case false:
        return "FALSE";

      case BooleanIndeterminate:
        return "INDETERMINATE";

      case BooleanEmpty:
        return "";

      default:
        assertNever(val);
    }
  };

  const formatCell = (cell, index, raw) => {
    var _cell$data$toString, _cell$data;

    const colIndex = columnIndexes[index];
    if (cell.span !== undefined && cell.span[0] !== colIndex) return "";

    switch (cell.kind) {
      case GridCellKind.Text:
      case GridCellKind.Number:
        return escape(raw ? (_cell$data$toString = (_cell$data = cell.data) === null || _cell$data === void 0 ? void 0 : _cell$data.toString()) !== null && _cell$data$toString !== void 0 ? _cell$data$toString : "" : cell.displayData);

      case GridCellKind.Markdown:
      case GridCellKind.RowID:
      case GridCellKind.Uri:
        return escape(cell.data);

      case GridCellKind.Image:
      case GridCellKind.Bubble:
        return cell.data.reduce((pv, cv) => `${escape(pv)},${escape(cv)}`);

      case GridCellKind.Boolean:
        return formatBoolean(cell.data);

      case GridCellKind.Loading:
        return raw ? "" : "#LOADING";

      case GridCellKind.Protected:
        return raw ? "" : "************";

      case GridCellKind.Drilldown:
        return cell.data.map(i => i.text).reduce((pv, cv) => `${escape(pv)},${escape(cv)}`);

      case GridCellKind.Custom:
        return escape(cell.copyData);

      default:
        assertNever(cell);
    }
  };

  const str = cells.map(row => row.map((a, b) => formatCell(a, b, false)).join("\t")).join("\n");

  if (window.navigator.clipboard.write !== undefined || e !== undefined) {
    const rootEl = document.createElement("tbody");

    for (const row of cells) {
      const rowEl = document.createElement("tr");

      for (let i = 0; i < row.length; i++) {
        const cell = row[i];
        const cellEl = document.createElement("td");

        if (cell.kind === GridCellKind.Uri) {
          const link = document.createElement("a");
          link.href = cell.data;
          link.innerText = cell.data;
          cellEl.appendChild(link);
        } else {
          cellEl.innerText = formatCell(cell, i, true);
        }

        rowEl.appendChild(cellEl);
      }

      rootEl.appendChild(rowEl);
    }

    if (window.navigator.clipboard.write !== undefined) {
      void window.navigator.clipboard.write([new ClipboardItem({
        "text/plain": new Blob([str], {
          type: "text/plain"
        }),
        "text/html": new Blob([`<table>${rootEl.outerHTML}</table>`], {
          type: "text/html"
        })
      })]);
    } else if (e !== undefined && (e === null || e === void 0 ? void 0 : e.clipboardData) !== null) {
      try {
        e.clipboardData.setData("text/plain", str);
        e.clipboardData.setData("text/html", `<table>${rootEl.outerHTML}</table>`);
        e.preventDefault();
      } catch {
        void window.navigator.clipboard.writeText(str);
      }
    }
  } else {
    void window.navigator.clipboard.writeText(str);
  }
}