let _Symbol$iterator;

import { assertNever, proveType } from "../common/support";
export let GridCellKind;

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
})(GridCellKind || (GridCellKind = {}));

export let GridColumnIcon;

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
})(GridColumnIcon || (GridColumnIcon = {}));

export function isEditableGridCell(cell) {
  if (cell.kind === GridCellKind.Loading || cell.kind === GridCellKind.Bubble || cell.kind === GridCellKind.RowID || cell.kind === GridCellKind.Protected || cell.kind === GridCellKind.Drilldown || cell.kind === GridCellKind.Custom) {
    return false;
  }

  proveType(cell);
  return true;
}
export function isTextEditableGridCell(cell) {
  if (cell.kind === GridCellKind.Loading || cell.kind === GridCellKind.Bubble || cell.kind === GridCellKind.RowID || cell.kind === GridCellKind.Protected || cell.kind === GridCellKind.Drilldown || cell.kind === GridCellKind.Boolean || cell.kind === GridCellKind.Image || cell.kind === GridCellKind.Custom) {
    return false;
  }

  proveType(cell);
  return true;
}
export function isInnerOnlyCell(cell) {
  return cell.kind === InnerGridCellKind.Marker || cell.kind === InnerGridCellKind.NewRow;
}
export function isReadWriteCell(cell) {
  if (!isEditableGridCell(cell) || cell.kind === GridCellKind.Image || cell.kind === GridCellKind.Boolean) return false;

  if (cell.kind === GridCellKind.Text || cell.kind === GridCellKind.Number || cell.kind === GridCellKind.Markdown || cell.kind === GridCellKind.Uri) {
    return cell.readonly !== true;
  }

  assertNever(cell);
}
export let InnerGridCellKind;

(function (InnerGridCellKind) {
  InnerGridCellKind["NewRow"] = "new-row";
  InnerGridCellKind["Marker"] = "marker";
})(InnerGridCellKind || (InnerGridCellKind = {}));

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
export class CompactSelection {
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

      for (const [i, slice] of items.entries()) {
        const [start, end] = slice;

        if (start <= selection && end > selection) {
          const left = [start, selection];
          const right = [selection + 1, end];
          const toAdd = [];

          if (left[0] !== left[1]) {
            toAdd.push(left);
          }

          if (right[0] !== right[1]) {
            toAdd.push(right);
          }

          items.splice(i, 1, ...toAdd);
          break;
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

CompactSelection.empty = () => {
  var _emptyCompactSelectio;

  return (_emptyCompactSelectio = emptyCompactSelection) !== null && _emptyCompactSelectio !== void 0 ? _emptyCompactSelectio : emptyCompactSelection = new CompactSelection([]);
};

CompactSelection.fromSingleSelection = selection => {
  return CompactSelection.empty().add(selection);
};