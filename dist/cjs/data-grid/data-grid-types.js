"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InnerGridCellKind = exports.GridColumnIcon = exports.GridCellKind = exports.CompactSelection = exports.BooleanIndeterminate = exports.BooleanEmpty = void 0;
exports.booleanCellIsEditable = booleanCellIsEditable;
exports.isEditableGridCell = isEditableGridCell;
exports.isInnerOnlyCell = isInnerOnlyCell;
exports.isObjectEditorCallbackResult = isObjectEditorCallbackResult;
exports.isReadWriteCell = isReadWriteCell;
exports.isSizedGridColumn = isSizedGridColumn;
exports.isTextEditableGridCell = isTextEditableGridCell;
exports.resolveCellsThunk = resolveCellsThunk;

var _support = require("../common/support");

var _has = _interopRequireDefault(require("lodash/has"));

let _Symbol$iterator;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BooleanEmpty = null;
exports.BooleanEmpty = BooleanEmpty;
const BooleanIndeterminate = undefined;
exports.BooleanIndeterminate = BooleanIndeterminate;
let GridCellKind;
exports.GridCellKind = GridCellKind;

(function (GridCellKind) {
  GridCellKind["Uri"] = "uri";
  GridCellKind["Text"] = "text";
  GridCellKind["Image"] = "image";
  GridCellKind["RowID"] = "row-id";
  GridCellKind["Number"] = "number";
  GridCellKind["Bubble"] = "bubble";
  GridCellKind["Boolean"] = "boolean";
  GridCellKind["Loading"] = "loading";
  GridCellKind["Markdown"] = "markdown";
  GridCellKind["Drilldown"] = "drilldown";
  GridCellKind["Protected"] = "protected";
  GridCellKind["Custom"] = "custom";
})(GridCellKind || (exports.GridCellKind = GridCellKind = {}));

let GridColumnIcon;
exports.GridColumnIcon = GridColumnIcon;

(function (GridColumnIcon) {
  GridColumnIcon["HeaderRowID"] = "headerRowID";
  GridColumnIcon["HeaderCode"] = "headerCode";
  GridColumnIcon["HeaderNumber"] = "headerNumber";
  GridColumnIcon["HeaderString"] = "headerString";
  GridColumnIcon["HeaderBoolean"] = "headerBoolean";
  GridColumnIcon["HeaderAudioUri"] = "headerAudioUri";
  GridColumnIcon["HeaderVideoUri"] = "headerVideoUri";
  GridColumnIcon["HeaderEmoji"] = "headerEmoji";
  GridColumnIcon["HeaderImage"] = "headerImage";
  GridColumnIcon["HeaderUri"] = "headerUri";
  GridColumnIcon["HeaderPhone"] = "headerPhone";
  GridColumnIcon["HeaderMarkdown"] = "headerMarkdown";
  GridColumnIcon["HeaderDate"] = "headerDate";
  GridColumnIcon["HeaderTime"] = "headerTime";
  GridColumnIcon["HeaderEmail"] = "headerEmail";
  GridColumnIcon["HeaderReference"] = "headerReference";
  GridColumnIcon["HeaderIfThenElse"] = "headerIfThenElse";
  GridColumnIcon["HeaderSingleValue"] = "headerSingleValue";
  GridColumnIcon["HeaderLookup"] = "headerLookup";
  GridColumnIcon["HeaderTextTemplate"] = "headerTextTemplate";
  GridColumnIcon["HeaderMath"] = "headerMath";
  GridColumnIcon["HeaderRollup"] = "headerRollup";
  GridColumnIcon["HeaderJoinStrings"] = "headerJoinStrings";
  GridColumnIcon["HeaderSplitString"] = "headerSplitString";
  GridColumnIcon["HeaderGeoDistance"] = "headerGeoDistance";
  GridColumnIcon["HeaderArray"] = "headerArray";
  GridColumnIcon["RowOwnerOverlay"] = "rowOwnerOverlay";
  GridColumnIcon["ProtectedColumnOverlay"] = "protectedColumnOverlay";
})(GridColumnIcon || (exports.GridColumnIcon = GridColumnIcon = {}));

function isSizedGridColumn(c) {
  return "width" in c;
}

async function resolveCellsThunk(thunk) {
  if (typeof thunk === "object") return thunk;
  return await thunk();
}

function isEditableGridCell(cell) {
  if (cell.kind === GridCellKind.Loading || cell.kind === GridCellKind.Bubble || cell.kind === GridCellKind.RowID || cell.kind === GridCellKind.Protected || cell.kind === GridCellKind.Drilldown) {
    return false;
  }

  (0, _support.proveType)(cell);
  return true;
}

function isTextEditableGridCell(cell) {
  if (cell.kind === GridCellKind.Loading || cell.kind === GridCellKind.Bubble || cell.kind === GridCellKind.RowID || cell.kind === GridCellKind.Protected || cell.kind === GridCellKind.Drilldown || cell.kind === GridCellKind.Boolean || cell.kind === GridCellKind.Image || cell.kind === GridCellKind.Custom) {
    return false;
  }

  (0, _support.proveType)(cell);
  return true;
}

function isInnerOnlyCell(cell) {
  return cell.kind === InnerGridCellKind.Marker || cell.kind === InnerGridCellKind.NewRow;
}

function isReadWriteCell(cell) {
  if (!isEditableGridCell(cell) || cell.kind === GridCellKind.Image) return false;

  if (cell.kind === GridCellKind.Text || cell.kind === GridCellKind.Number || cell.kind === GridCellKind.Markdown || cell.kind === GridCellKind.Uri || cell.kind === GridCellKind.Custom || cell.kind === GridCellKind.Boolean) {
    return cell.readonly !== true;
  }

  (0, _support.assertNever)(cell);
}

function isObjectEditorCallbackResult(obj) {
  if ((0, _has.default)(obj, "editor")) {
    return true;
  }

  return false;
}

function booleanCellIsEditable(cell) {
  if (cell.readonly === true) return false;
  if (cell.readonly === false) return true;
  if (cell.allowEdit === true) return true;
  if (cell.allowEdit === false) return false;
  return true;
}

let InnerGridCellKind;
exports.InnerGridCellKind = InnerGridCellKind;

(function (InnerGridCellKind) {
  InnerGridCellKind["NewRow"] = "new-row";
  InnerGridCellKind["Marker"] = "marker";
})(InnerGridCellKind || (exports.InnerGridCellKind = InnerGridCellKind = {}));

function mergeRanges(input) {
  if (input.length === 0) {
    return [];
  }

  const ranges = [...input];
  const stack = [];
  ranges.sort(function (a, b) {
    return a[0] - b[0];
  });
  stack.push([...ranges[0]]);
  ranges.slice(1).forEach(range => {
    const top = stack[stack.length - 1];

    if (top[1] < range[0]) {
      stack.push([...range]);
    } else if (top[1] < range[1]) {
      top[1] = range[1];
    }
  });
  return stack;
}

let emptyCompactSelection;
_Symbol$iterator = Symbol.iterator;

class CompactSelection {
  constructor(items) {
    this.items = items;

    this.offset = amount => {
      if (amount === 0) return this;
      const newItems = this.items.map(x => [x[0] + amount, x[1] + amount]);
      return new CompactSelection(newItems);
    };

    this.add = selection => {
      const slice = typeof selection === "number" ? [selection, selection + 1] : selection;
      const newItems = mergeRanges([...this.items, slice]);
      return new CompactSelection(newItems);
    };

    this.remove = selection => {
      const items = [...this.items];
      const selMin = typeof selection === "number" ? selection : selection[0];
      const selMax = typeof selection === "number" ? selection + 1 : selection[1];

      for (const [i, slice] of items.entries()) {
        const [start, end] = slice;

        if (start <= selMax && selMin <= end) {
          const toAdd = [];

          if (start < selMin) {
            toAdd.push([start, selMin]);
          }

          if (selMax < end) {
            toAdd.push([selMax, end]);
          }

          items.splice(i, 1, ...toAdd);
        }
      }

      return new CompactSelection(items);
    };

    this.first = () => {
      if (this.items.length === 0) return undefined;
      return this.items[0][0];
    };

    this.last = () => {
      if (this.items.length === 0) return undefined;
      return this.items.slice(-1)[0][1] - 1;
    };

    this.hasIndex = index => {
      for (let i = 0; i < this.items.length; i++) {
        const [start, end] = this.items[i];
        if (index >= start && index < end) return true;
      }

      return false;
    };

    this.hasAll = index => {
      for (let x = index[0]; x < index[1]; x++) {
        if (!this.hasIndex(x)) return false;
      }

      return true;
    };

    this.some = predicate => {
      for (const i of this) {
        if (predicate(i)) return true;
      }

      return false;
    };

    this.equals = other => {
      if (other === this) return true;
      if (other.items.length !== this.items.length) return false;

      for (let i = 0; i < this.items.length; i++) {
        const left = other.items[i];
        const right = this.items[i];
        if (left[0] !== right[0] || left[1] !== right[1]) return false;
      }

      return true;
    };
  }

  get length() {
    let len = 0;

    for (const [start, end] of this.items) {
      len += end - start;
    }

    return len;
  }

  *[_Symbol$iterator]() {
    for (const [start, end] of this.items) {
      for (let x = start; x < end; x++) {
        yield x;
      }
    }
  }

}

exports.CompactSelection = CompactSelection;

CompactSelection.empty = () => {
  var _emptyCompactSelectio;

  return (_emptyCompactSelectio = emptyCompactSelection) !== null && _emptyCompactSelectio !== void 0 ? _emptyCompactSelectio : emptyCompactSelection = new CompactSelection([]);
};

CompactSelection.fromSingleSelection = selection => {
  return CompactSelection.empty().add(selection);
};