function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import { assertNever, maybe } from "../common/support.js";
import clamp from "lodash/clamp.js";
import uniq from "lodash/uniq.js";
import flatten from "lodash/flatten.js";
import range from "lodash/range.js";
import debounce from "lodash/debounce.js";
import DataGridOverlayEditor from "../data-grid-overlay-editor/data-grid-overlay-editor.js";
import { GridCellKind, isEditableGridCell, isReadWriteCell, InnerGridCellKind, CompactSelection, isInnerOnlyCell, isObjectEditorCallbackResult, BooleanIndeterminate, BooleanEmpty } from "../data-grid/data-grid-types.js";
import DataGridSearch from "../data-grid-search/data-grid-search.js";
import { browserIsOSX } from "../common/browser-detect.js";
import { ThemeProvider, useTheme } from "styled-components";
import { getDataEditorTheme } from "../common/styles.js";
import { getScrollBarWidth, useEventListener } from "../common/utils.js";
import { CellRenderers } from "../data-grid/cells/index.js";
import { isGroupEqual } from "../data-grid/data-grid-lib.js";
import { GroupRename } from "./group-rename.js";
import { useColumnSizer } from "./use-column-sizer.js";
import { isHotkey } from "../common/is-hotkey.js";
import { useSelectionBehavior } from "../data-grid/use-selection-behavior.js";
import { useCellsForSelection } from "./use-cells-for-selection.js";
import { unquote, expandSelection, copyToClipboard, decodeHTML } from "./data-editor-fns.js";
import { DataEditorContainer } from "../data-editor-container/data-grid-container.js";
import { toggleBoolean } from "../data-grid/cells/boolean-cell.js";
let idCounter = 0;

function getSpanStops(cells) {
  const disallowed = uniq(flatten(flatten(cells).filter(c => c.span !== undefined).map(c => {
    var _c$span$, _c$span, _c$span$2, _c$span2;

    return range(((_c$span$ = (_c$span = c.span) === null || _c$span === void 0 ? void 0 : _c$span[0]) !== null && _c$span$ !== void 0 ? _c$span$ : 0) + 1, ((_c$span$2 = (_c$span2 = c.span) === null || _c$span2 === void 0 ? void 0 : _c$span2[1]) !== null && _c$span$2 !== void 0 ? _c$span$2 : 0) + 1);
  })));
  return disallowed;
}

function shiftSelection(input, offset) {
  if (input === undefined || offset === 0 || input.columns.length === 0 && input.current === undefined) return input;
  return {
    current: input.current === undefined ? undefined : {
      cell: [input.current.cell[0] + offset, input.current.cell[1]],
      range: { ...input.current.range,
        x: input.current.range.x + offset
      },
      rangeStack: input.current.rangeStack.map(r => ({ ...r,
        x: r.x + offset
      }))
    },
    rows: input.rows,
    columns: input.columns.offset(offset)
  };
}

const keybindingDefaults = {
  selectAll: true,
  selectRow: true,
  selectColumn: true,
  downFill: false,
  rightFill: false,
  pageUp: false,
  pageDown: false,
  clear: true,
  copy: true,
  paste: true,
  search: false,
  first: true,
  last: true
};
const loadingCell = {
  kind: GridCellKind.Loading,
  allowOverlay: false
};
const emptyGridSelection = {
  columns: CompactSelection.empty(),
  rows: CompactSelection.empty(),
  current: undefined
};

const DataEditorImpl = (p, forwardedRef) => {
  var _p$experimental2, _p$overscrollY, _gridSelection$curren6, _p$experimental4, _p$experimental5;

  const [gridSelectionInner, setGridSelectionInner] = React.useState(emptyGridSelection);
  const [overlay, setOverlay] = React.useState();
  const canvasRef = React.useRef(null);
  const [mouseState, setMouseState] = React.useState();
  const scrollRef = React.useRef(null);
  const scrollTimer = React.useRef();
  const lastSent = React.useRef();
  const {
    isDraggable = false,
    rowMarkers = "none",
    rowHeight = 34,
    headerHeight = 36,
    rowMarkerWidth: rowMarkerWidthRaw,
    imageEditorOverride,
    getRowThemeOverride,
    markdownDivCreateNode
  } = p;
  const {
    width,
    height,
    columns: columnsIn,
    rows,
    getCellContent,
    onCellClicked,
    onCellActivated,
    onFinishedEditing,
    coercePasteValue,
    onHeaderClicked,
    spanRangeBehavior = "default",
    onGroupHeaderClicked,
    onCellContextMenu,
    className,
    onHeaderContextMenu,
    getCellsForSelection: getCellsForSelectionIn,
    onGroupHeaderContextMenu,
    onGroupHeaderRenamed,
    onCellEdited,
    onCellsEdited,
    keybindings: keybindingsIn,
    appendRowRef,
    onRowAppended,
    onColumnMoved,
    highlightRegions: highlightRegionsIn,
    drawCell,
    drawCustomCell,
    rangeSelect = "rect",
    columnSelect = "multi",
    rowSelect = "multi",
    rangeSelectionBlending = "exclusive",
    columnSelectionBlending = "exclusive",
    rowSelectionBlending = "exclusive",
    onDelete: onDeleteIn,
    onDragStart,
    onMouseMove,
    onPaste,
    groupHeaderHeight = headerHeight,
    freezeColumns = 0,
    rowSelectionMode = "auto",
    rowMarkerStartIndex = 1,
    onHeaderMenuClick,
    getGroupDetails,
    onSearchClose: onSearchCloseIn,
    onItemHovered,
    onSelectionCleared,
    showSearch: showSearchIn,
    onVisibleRegionChanged,
    gridSelection: gridSelectionOuter,
    onGridSelectionChange,
    minColumnWidth: minColumnWidthIn = 50,
    maxColumnWidth: maxColumnWidthIn = 500,
    provideEditor,
    trailingRowOptions,
    verticalBorder,
    ...rest
  } = p;
  const minColumnWidth = Math.max(minColumnWidthIn, 20);
  const maxColumnWidth = Math.max(maxColumnWidthIn, minColumnWidth);
  const keybindings = React.useMemo(() => {
    return keybindingsIn === undefined ? keybindingDefaults : { ...keybindingDefaults,
      ...keybindingsIn
    };
  }, [keybindingsIn]);
  const rowMarkerWidth = rowMarkerWidthRaw !== null && rowMarkerWidthRaw !== void 0 ? rowMarkerWidthRaw : rows > 10000 ? 48 : rows > 1000 ? 44 : rows > 100 ? 36 : 32;
  const hasRowMarkers = rowMarkers !== "none";
  const rowMarkerOffset = hasRowMarkers ? 1 : 0;
  const showTrailingBlankRow = onRowAppended !== undefined;
  const lastRowSticky = (trailingRowOptions === null || trailingRowOptions === void 0 ? void 0 : trailingRowOptions.sticky) === true;
  const [showSearchInner, setShowSearchInner] = React.useState(false);
  const showSearch = showSearchIn !== null && showSearchIn !== void 0 ? showSearchIn : showSearchInner;
  const onSearchClose = React.useCallback(() => {
    if (onSearchCloseIn !== undefined) {
      onSearchCloseIn();
    } else {
      setShowSearchInner(false);
    }
  }, [onSearchCloseIn]);
  const gridSelectionOuterMangled = React.useMemo(() => {
    return gridSelectionOuter === undefined ? undefined : shiftSelection(gridSelectionOuter, rowMarkerOffset);
  }, [gridSelectionOuter, rowMarkerOffset]);
  const gridSelection = gridSelectionOuterMangled !== null && gridSelectionOuterMangled !== void 0 ? gridSelectionOuterMangled : gridSelectionInner;
  const abortControllerRef = React.useRef(new AbortController());
  React.useEffect(() => {
    return () => {
      abortControllerRef === null || abortControllerRef === void 0 ? void 0 : abortControllerRef.current.abort();
    };
  }, []);
  const [getCellsForSelection, getCellsForSeletionDirect] = useCellsForSelection(getCellsForSelectionIn, getCellContent, rowMarkerOffset, abortControllerRef.current);
  const setGridSelection = React.useCallback((newVal, expand) => {
    if (expand) {
      newVal = expandSelection(newVal, getCellsForSelection, rowMarkerOffset, spanRangeBehavior, abortControllerRef.current);
    }

    if (onGridSelectionChange !== undefined) {
      onGridSelectionChange(shiftSelection(newVal, -rowMarkerOffset));
    } else {
      setGridSelectionInner(newVal);
    }
  }, [onGridSelectionChange, getCellsForSelection, rowMarkerOffset, spanRangeBehavior]);
  const onDelete = React.useCallback(sel => {
    if (onDeleteIn !== undefined) {
      const result = onDeleteIn(shiftSelection(sel, -rowMarkerOffset));

      if (typeof result === "boolean") {
        return result;
      }

      return shiftSelection(result, rowMarkerOffset);
    }

    return true;
  }, [onDeleteIn, rowMarkerOffset]);
  const [setCurrent, setSelectedRows, setSelectedColumns] = useSelectionBehavior(gridSelection, setGridSelection, rangeSelectionBlending, columnSelectionBlending, rowSelectionBlending, rangeSelect);
  const theme = useTheme();
  const mergedTheme = React.useMemo(() => {
    return { ...getDataEditorTheme(),
      ...theme
    };
  }, [theme]);
  const columns = useColumnSizer(columnsIn, rows, getCellsForSeletionDirect, minColumnWidth, maxColumnWidth, mergedTheme, abortControllerRef.current);
  const enableGroups = React.useMemo(() => {
    return columns.some(c => c.group !== undefined);
  }, [columns]);
  const totalHeaderHeight = enableGroups ? headerHeight + groupHeaderHeight : headerHeight;
  const [visibleRegion, setVisibleRegion] = React.useState({
    x: 0,
    y: 0,
    width: 1,
    height: 1
  });
  const cellXOffset = visibleRegion.x + rowMarkerOffset;
  const cellYOffset = visibleRegion.y;
  const gridRef = React.useRef(null);
  const focus = React.useCallback(immediate => {
    if (immediate === true) {
      var _gridRef$current;

      (_gridRef$current = gridRef.current) === null || _gridRef$current === void 0 ? void 0 : _gridRef$current.focus();
    } else {
      window.requestAnimationFrame(() => {
        var _gridRef$current2;

        (_gridRef$current2 = gridRef.current) === null || _gridRef$current2 === void 0 ? void 0 : _gridRef$current2.focus();
      });
    }
  }, []);
  const mangledRows = showTrailingBlankRow ? rows + 1 : rows;
  const mangledOnCellEdited = React.useCallback((cell, newValue) => {
    onCellEdited === null || onCellEdited === void 0 ? void 0 : onCellEdited([cell[0] - rowMarkerOffset, cell[1]], newValue);
  }, [onCellEdited, rowMarkerOffset]);
  const mangledOnCellsEdited = React.useCallback(items => {
    const mangledItems = rowMarkerOffset === 0 ? items : items.map(x => ({ ...x,
      location: [x.location[0] - rowMarkerOffset, x.location[1]]
    }));
    onCellsEdited === null || onCellsEdited === void 0 ? void 0 : onCellsEdited(mangledItems);
  }, [onCellsEdited, rowMarkerOffset]);
  const mangledCols = React.useMemo(() => {
    if (rowMarkers === "none") return columns;
    return [{
      title: "",
      width: rowMarkerWidth,
      icon: undefined,
      hasMenu: false,
      style: "normal"
    }, ...columns];
  }, [columns, rowMarkerWidth, rowMarkers]);
  const highlightRegions = React.useMemo(() => {
    if (highlightRegionsIn === undefined) return undefined;
    if (rowMarkerOffset === 0) return highlightRegionsIn;
    return highlightRegionsIn.map(r => {
      const maxWidth = mangledCols.length - r.range.x - rowMarkerOffset;
      if (maxWidth <= 0) return undefined;
      return {
        color: r.color,
        range: { ...r.range,
          x: r.range.x + rowMarkerOffset,
          width: Math.min(maxWidth, r.range.width)
        }
      };
    }).filter(x => x !== undefined);
  }, [highlightRegionsIn, mangledCols.length, rowMarkerOffset]);
  const visibleRegionRef = React.useRef(visibleRegion);
  const getMangledCellContent = React.useCallback(_ref => {
    let [col, row] = _ref;
    const isTrailing = showTrailingBlankRow && row === mangledRows - 1;
    const isRowMarkerCol = col === 0 && hasRowMarkers;

    if (isRowMarkerCol) {
      if (isTrailing) {
        return loadingCell;
      }

      return {
        kind: InnerGridCellKind.Marker,
        allowOverlay: false,
        checked: (gridSelection === null || gridSelection === void 0 ? void 0 : gridSelection.rows.hasIndex(row)) === true,
        markerKind: rowMarkers,
        row: rowMarkerStartIndex + row
      };
    } else if (isTrailing) {
      var _trailingRowOptions$h, _c$trailingRowOptions;

      const isFirst = col === rowMarkerOffset;
      const maybeFirstColumnHint = isFirst ? (_trailingRowOptions$h = trailingRowOptions === null || trailingRowOptions === void 0 ? void 0 : trailingRowOptions.hint) !== null && _trailingRowOptions$h !== void 0 ? _trailingRowOptions$h : "" : "";
      const c = mangledCols[col];

      if ((c === null || c === void 0 ? void 0 : (_c$trailingRowOptions = c.trailingRowOptions) === null || _c$trailingRowOptions === void 0 ? void 0 : _c$trailingRowOptions.disabled) === true) {
        return loadingCell;
      } else {
        var _c$trailingRowOptions2, _c$trailingRowOptions3, _c$trailingRowOptions4, _c$trailingRowOptions5;

        const hint = (_c$trailingRowOptions2 = c === null || c === void 0 ? void 0 : (_c$trailingRowOptions3 = c.trailingRowOptions) === null || _c$trailingRowOptions3 === void 0 ? void 0 : _c$trailingRowOptions3.hint) !== null && _c$trailingRowOptions2 !== void 0 ? _c$trailingRowOptions2 : maybeFirstColumnHint;
        const icon = (_c$trailingRowOptions4 = c === null || c === void 0 ? void 0 : (_c$trailingRowOptions5 = c.trailingRowOptions) === null || _c$trailingRowOptions5 === void 0 ? void 0 : _c$trailingRowOptions5.addIcon) !== null && _c$trailingRowOptions4 !== void 0 ? _c$trailingRowOptions4 : trailingRowOptions === null || trailingRowOptions === void 0 ? void 0 : trailingRowOptions.addIcon;
        return {
          kind: InnerGridCellKind.NewRow,
          hint,
          allowOverlay: false,
          icon
        };
      }
    } else {
      var _p$experimental;

      const outerCol = col - rowMarkerOffset;

      if (((_p$experimental = p.experimental) === null || _p$experimental === void 0 ? void 0 : _p$experimental.strict) === true) {
        var _vr$extras, _vr$extras$selected, _vr$extras2, _vr$extras3;

        const vr = visibleRegionRef.current;
        const isOutsideMainArea = vr.x > outerCol || outerCol > vr.x + vr.width || vr.y > row || row > vr.y + vr.height;
        const isSelected = outerCol === ((_vr$extras = vr.extras) === null || _vr$extras === void 0 ? void 0 : (_vr$extras$selected = _vr$extras.selected) === null || _vr$extras$selected === void 0 ? void 0 : _vr$extras$selected[0]) && row === ((_vr$extras2 = vr.extras) === null || _vr$extras2 === void 0 ? void 0 : _vr$extras2.selected[1]);
        const isOutsideFreezeArea = ((_vr$extras3 = vr.extras) === null || _vr$extras3 === void 0 ? void 0 : _vr$extras3.freezeRegion) === undefined || vr.extras.freezeRegion.x > outerCol || outerCol > vr.extras.freezeRegion.x + vr.extras.freezeRegion.width || vr.extras.freezeRegion.y > row || row > vr.extras.freezeRegion.y + vr.extras.freezeRegion.height;

        if (isOutsideMainArea && !isSelected && isOutsideFreezeArea) {
          return {
            kind: GridCellKind.Loading,
            allowOverlay: false
          };
        }
      }

      let result = getCellContent([outerCol, row]);

      if (rowMarkerOffset !== 0 && result.span !== undefined) {
        result = { ...result,
          span: [result.span[0] + rowMarkerOffset, result.span[1] + rowMarkerOffset]
        };
      }

      return result;
    }
  }, [showTrailingBlankRow, mangledRows, hasRowMarkers, gridSelection === null || gridSelection === void 0 ? void 0 : gridSelection.rows, rowMarkers, rowMarkerOffset, trailingRowOptions === null || trailingRowOptions === void 0 ? void 0 : trailingRowOptions.hint, trailingRowOptions === null || trailingRowOptions === void 0 ? void 0 : trailingRowOptions.addIcon, mangledCols, (_p$experimental2 = p.experimental) === null || _p$experimental2 === void 0 ? void 0 : _p$experimental2.strict, getCellContent, rowMarkerStartIndex]);
  const mangledGetGroupDetails = React.useCallback(group => {
    var _getGroupDetails;

    let result = (_getGroupDetails = getGroupDetails === null || getGroupDetails === void 0 ? void 0 : getGroupDetails(group)) !== null && _getGroupDetails !== void 0 ? _getGroupDetails : {
      name: group
    };

    if (onGroupHeaderRenamed !== undefined && group !== "") {
      var _result$actions;

      result = {
        icon: result.icon,
        name: result.name,
        overrideTheme: result.overrideTheme,
        actions: [...((_result$actions = result.actions) !== null && _result$actions !== void 0 ? _result$actions : []), {
          title: "Rename",
          icon: "renameIcon",
          onClick: e => setRenameGroup({
            group: result.name,
            bounds: e.bounds
          })
        }]
      };
    }

    return result;
  }, [getGroupDetails, onGroupHeaderRenamed]);
  const setOverlaySimple = React.useCallback(val => {
    const [col, row] = val.cell;
    const column = mangledCols[col];
    const groupTheme = (column === null || column === void 0 ? void 0 : column.group) !== undefined ? mangledGetGroupDetails(column.group) : undefined;
    const colTheme = column === null || column === void 0 ? void 0 : column.themeOverride;
    const rowTheme = getRowThemeOverride === null || getRowThemeOverride === void 0 ? void 0 : getRowThemeOverride(row);
    setOverlay({ ...val,
      theme: { ...mergedTheme,
        ...groupTheme,
        ...colTheme,
        ...rowTheme,
        ...val.content.themeOverride
      }
    });
  }, [getRowThemeOverride, mangledCols, mangledGetGroupDetails, mergedTheme]);
  const reselect = React.useCallback((bounds, fromKeyboard, initialValue) => {
    if (gridSelection.current === undefined) return;
    const [col, row] = gridSelection.current.cell;
    const c = getMangledCellContent([col, row]);

    if (c.kind !== GridCellKind.Boolean && c.allowOverlay) {
      let content = c;

      if (initialValue !== undefined) {
        switch (content.kind) {
          case GridCellKind.Number:
            content = { ...content,
              data: maybe(() => initialValue === "-" ? -0 : Number.parseFloat(initialValue), 0)
            };
            break;

          case GridCellKind.Text:
          case GridCellKind.Markdown:
          case GridCellKind.Uri:
            content = { ...content,
              data: initialValue
            };
            break;
        }
      }

      setOverlaySimple({
        target: bounds,
        content,
        initialValue,
        cell: [col, row],
        highlight: initialValue === undefined,
        forceEditMode: initialValue !== undefined
      });
    } else if (c.kind === GridCellKind.Boolean && fromKeyboard) {
      var _gridRef$current3;

      mangledOnCellEdited(gridSelection.current.cell, { ...c,
        data: toggleBoolean(c.data)
      });
      (_gridRef$current3 = gridRef.current) === null || _gridRef$current3 === void 0 ? void 0 : _gridRef$current3.damage([{
        cell: gridSelection.current.cell
      }]);
    }
  }, [getMangledCellContent, gridSelection, mangledOnCellEdited, setOverlaySimple]);
  const focusOnRowFromTrailingBlankRow = React.useCallback((col, row) => {
    var _gridRef$current4;

    const bounds = (_gridRef$current4 = gridRef.current) === null || _gridRef$current4 === void 0 ? void 0 : _gridRef$current4.getBounds(col, row);

    if (bounds === undefined || scrollRef.current === null) {
      return;
    }

    let content = getMangledCellContent([col, row]);

    if (!content.allowOverlay) {
      return;
    }

    switch (content.kind) {
      case GridCellKind.Number:
        content = { ...content,
          data: undefined
        };
        break;

      case GridCellKind.Text:
      case GridCellKind.Markdown:
      case GridCellKind.Uri:
        content = { ...content,
          data: ""
        };
        break;
    }

    setOverlaySimple({
      target: bounds,
      content,
      initialValue: undefined,
      highlight: true,
      cell: [col, row],
      forceEditMode: true
    });
  }, [getMangledCellContent, setOverlaySimple]);
  const overscrollY = (_p$overscrollY = p.overscrollY) !== null && _p$overscrollY !== void 0 ? _p$overscrollY : 0;
  const scrollTo = React.useCallback(function (col, row) {
    let dir = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "both";
    let paddingX = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    let paddingY = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

    if (scrollRef.current !== null) {
      const grid = gridRef.current;
      const canvas = canvasRef.current;

      if (grid !== null && canvas !== null) {
        const rawBounds = grid.getBounds(col + rowMarkerOffset, row);
        const scrollBounds = canvas.getBoundingClientRect();

        if (rawBounds !== undefined) {
          const bounds = {
            x: rawBounds.x - paddingX,
            y: rawBounds.y - paddingY,
            width: rawBounds.width + 2 * paddingX,
            height: rawBounds.height + 2 * paddingY
          };
          let scrollX = 0;
          let scrollY = 0;
          let frozenWidth = 0;

          for (let i = 0; i < freezeColumns; i++) {
            frozenWidth += columns[i].width;
          }

          const sLeft = frozenWidth + scrollBounds.left + rowMarkerOffset * rowMarkerWidth;
          const sRight = scrollBounds.right;
          const sTop = scrollBounds.top + totalHeaderHeight;
          let trailingRowHeight = 0;

          if (lastRowSticky) {
            trailingRowHeight = typeof rowHeight === "number" ? rowHeight : rowHeight(rows);
          }

          const sBottom = scrollBounds.bottom - trailingRowHeight;

          if (sLeft > bounds.x) {
            scrollX = bounds.x - sLeft;
          } else if (sRight < bounds.x + bounds.width) {
            scrollX = bounds.x + bounds.width - sRight;
          }

          if (sTop > bounds.y) {
            scrollY = bounds.y - sTop;
          } else if (sBottom < bounds.y + bounds.height + overscrollY) {
            scrollY = bounds.y + bounds.height + overscrollY - sBottom;
          }

          if (dir === "vertical" || col < freezeColumns) {
            scrollX = 0;
          } else if (dir === "horizontal") {
            scrollY = 0;
          }

          if (scrollX !== 0 || scrollY !== 0) {
            scrollRef.current.scrollTo(scrollX + scrollRef.current.scrollLeft, scrollY + scrollRef.current.scrollTop);
          }
        }
      }
    }
  }, [rowMarkerOffset, rowMarkerWidth, totalHeaderHeight, lastRowSticky, freezeColumns, columns, rowHeight, rows, overscrollY]);
  const focusCallback = React.useRef(focusOnRowFromTrailingBlankRow);
  const getCellContentRef = React.useRef(getCellContent);
  const rowsRef = React.useRef(rows);
  focusCallback.current = focusOnRowFromTrailingBlankRow;
  getCellContentRef.current = getCellContent;
  rowsRef.current = rows;
  const appendRow = React.useCallback(async col => {
    var _c$trailingRowOptions6;

    const c = mangledCols[col];

    if ((c === null || c === void 0 ? void 0 : (_c$trailingRowOptions6 = c.trailingRowOptions) === null || _c$trailingRowOptions6 === void 0 ? void 0 : _c$trailingRowOptions6.disabled) === true) {
      return;
    }

    const appendResult = onRowAppended === null || onRowAppended === void 0 ? void 0 : onRowAppended();
    let r = undefined;
    let bottom = true;

    if (appendResult !== undefined) {
      r = await appendResult;
      if (r === "top") bottom = false;
      if (typeof r === "number") bottom = false;
    }

    let backoff = 0;

    const doFocus = () => {
      if (rowsRef.current <= rows) {
        if (backoff < 500) {
          window.setTimeout(doFocus, backoff);
        }

        backoff = 50 + backoff * 2;
        return;
      }

      const row = typeof r === "number" ? r : bottom ? rows : 0;
      scrollTo(col - rowMarkerOffset, row);
      setCurrent({
        cell: [col, row],
        range: {
          x: col,
          y: row,
          width: 1,
          height: 1
        }
      }, false, false, "edit");
      const cell = getCellContentRef.current([col - rowMarkerOffset, row]);

      if (cell.allowOverlay && isReadWriteCell(cell) && cell.readonly !== true) {
        window.setTimeout(() => {
          focusCallback.current(col, row);
        }, 0);
      }
    };

    doFocus();
  }, [mangledCols, onRowAppended, rowMarkerOffset, rows, scrollTo, setCurrent]);
  const getCustomNewRowTargetColumn = React.useCallback(col => {
    var _columns$col$trailing, _columns$col, _columns$col$trailing2;

    const customTargetColumn = (_columns$col$trailing = (_columns$col = columns[col]) === null || _columns$col === void 0 ? void 0 : (_columns$col$trailing2 = _columns$col.trailingRowOptions) === null || _columns$col$trailing2 === void 0 ? void 0 : _columns$col$trailing2.targetColumn) !== null && _columns$col$trailing !== void 0 ? _columns$col$trailing : trailingRowOptions === null || trailingRowOptions === void 0 ? void 0 : trailingRowOptions.targetColumn;

    if (typeof customTargetColumn === "number") {
      const customTargetOffset = hasRowMarkers ? 1 : 0;
      return customTargetColumn + customTargetOffset;
    }

    if (typeof customTargetColumn === "object") {
      const maybeIndex = columnsIn.indexOf(customTargetColumn);

      if (maybeIndex >= 0) {
        const customTargetOffset = hasRowMarkers ? 1 : 0;
        return maybeIndex + customTargetOffset;
      }
    }

    return undefined;
  }, [columns, columnsIn, hasRowMarkers, trailingRowOptions === null || trailingRowOptions === void 0 ? void 0 : trailingRowOptions.targetColumn]);
  React.useEffect(() => {
    if (appendRowRef) {
      appendRowRef.current = appendRow;
    }
  }, [appendRow, appendRowRef]);
  const lastSelectedRowRef = React.useRef();
  const lastSelectedColRef = React.useRef();
  const handleSelect = React.useCallback(args => {
    var _gridSelection$curren, _gridSelection$curren2;

    const isMultiKey = browserIsOSX.value ? args.metaKey : args.ctrlKey;
    const isMultiRow = isMultiKey && rowSelect === "multi";
    const isMultiCol = isMultiKey && columnSelect === "multi";
    const [col, row] = args.location;
    const selectedColumns = gridSelection.columns;
    const selectedRows = gridSelection.rows;
    const [cellCol, cellRow] = (_gridSelection$curren = (_gridSelection$curren2 = gridSelection.current) === null || _gridSelection$curren2 === void 0 ? void 0 : _gridSelection$curren2.cell) !== null && _gridSelection$curren !== void 0 ? _gridSelection$curren : [];

    if (args.kind === "cell") {
      lastSelectedColRef.current = undefined;
      lastMouseDownCellLocation.current = [col, row];

      if (col === 0 && hasRowMarkers) {
        if (showTrailingBlankRow === true && row === rows || rowMarkers === "number" || rowSelect === "none") return;
        setOverlay(undefined);
        focus();
        const isSelected = selectedRows.hasIndex(row);
        const lastHighlighted = lastSelectedRowRef.current;

        if (rowSelect === "multi" && (args.shiftKey || args.isLongTouch === true) && lastHighlighted !== undefined && selectedRows.hasIndex(lastHighlighted)) {
          const newSlice = [Math.min(lastHighlighted, row), Math.max(lastHighlighted, row) + 1];

          if (isMultiRow || rowSelectionMode === "multi") {
            setSelectedRows(undefined, newSlice, true);
          } else {
            setSelectedRows(CompactSelection.fromSingleSelection(newSlice), undefined, isMultiRow);
          }
        } else if (isMultiRow || args.isTouch || rowSelectionMode === "multi") {
          if (isSelected) {
            setSelectedRows(selectedRows.remove(row), undefined, true);
          } else {
            setSelectedRows(undefined, row, true);
            lastSelectedRowRef.current = row;
          }
        } else if (isSelected && selectedRows.length === 1) {
          setSelectedRows(CompactSelection.empty(), undefined, isMultiKey);
        } else {
          setSelectedRows(CompactSelection.fromSingleSelection(row), undefined, isMultiKey);
          lastSelectedRowRef.current = row;
        }
      } else if (col >= rowMarkerOffset && showTrailingBlankRow && row === rows) {
        const customTargetColumn = getCustomNewRowTargetColumn(col);
        void appendRow(customTargetColumn !== null && customTargetColumn !== void 0 ? customTargetColumn : col);
      } else {
        if (cellCol !== col || cellRow !== row) {
          var _gridSelection$curren3;

          const isLastStickyRow = lastRowSticky && row === rows;
          const startedFromLastSticky = lastRowSticky && gridSelection !== undefined && ((_gridSelection$curren3 = gridSelection.current) === null || _gridSelection$curren3 === void 0 ? void 0 : _gridSelection$curren3.cell[1]) === rows;

          if ((args.shiftKey || args.isLongTouch === true) && cellCol !== undefined && cellRow !== undefined && gridSelection.current !== undefined && !startedFromLastSticky) {
            if (isLastStickyRow) {
              return;
            }

            const left = Math.min(col, cellCol);
            const right = Math.max(col, cellCol);
            const top = Math.min(row, cellRow);
            const bottom = Math.max(row, cellRow);
            setCurrent({ ...gridSelection.current,
              range: {
                x: left,
                y: top,
                width: right - left + 1,
                height: bottom - top + 1
              }
            }, true, isMultiKey, "click");
            lastSelectedRowRef.current = undefined;
            focus();
          } else {
            setCurrent({
              cell: [col, row],
              range: {
                x: col,
                y: row,
                width: 1,
                height: 1
              }
            }, true, isMultiKey, "click");
            lastSelectedRowRef.current = undefined;
            setOverlay(undefined);
            focus();
          }
        }
      }
    } else if (args.kind === "header") {
      lastMouseDownCellLocation.current = [col, row];
      setOverlay(undefined);

      if (hasRowMarkers && col === 0) {
        lastSelectedRowRef.current = undefined;
        lastSelectedColRef.current = undefined;

        if (rowSelect === "multi") {
          if (selectedRows.length !== rows) {
            setSelectedRows(CompactSelection.fromSingleSelection([0, rows]), undefined, isMultiKey);
          } else {
            setSelectedRows(CompactSelection.empty(), undefined, isMultiKey);
          }

          focus();
        }
      } else {
        const lastCol = lastSelectedColRef.current;

        if (columnSelect === "multi" && (args.shiftKey || args.isLongTouch === true) && lastCol !== undefined && selectedColumns.hasIndex(lastCol)) {
          const newSlice = [Math.min(lastCol, col), Math.max(lastCol, col) + 1];

          if (isMultiCol) {
            setSelectedColumns(undefined, newSlice, isMultiKey);
          } else {
            setSelectedColumns(CompactSelection.fromSingleSelection(newSlice), undefined, isMultiKey);
          }
        } else if (isMultiCol) {
          if (selectedColumns.hasIndex(col)) {
            setSelectedColumns(selectedColumns.remove(col), undefined, isMultiKey);
          } else {
            setSelectedColumns(undefined, col, isMultiKey);
          }

          lastSelectedColRef.current = col;
        } else if (columnSelect !== "none") {
          setSelectedColumns(CompactSelection.fromSingleSelection(col), undefined, isMultiKey);
          lastSelectedColRef.current = col;
        }

        lastSelectedRowRef.current = undefined;
        focus();
      }
    } else if (args.kind === "group-header") {
      lastMouseDownCellLocation.current = [col, row];
    } else if (args.kind === "out-of-bounds") {
      setGridSelection(emptyGridSelection, false);
      setOverlay(undefined);
      focus();
      onSelectionCleared === null || onSelectionCleared === void 0 ? void 0 : onSelectionCleared();
      lastSelectedRowRef.current = undefined;
      lastSelectedColRef.current = undefined;
    }
  }, [appendRow, columnSelect, focus, getCustomNewRowTargetColumn, gridSelection, hasRowMarkers, lastRowSticky, onSelectionCleared, rowMarkerOffset, rowMarkers, rowSelect, rowSelectionMode, rows, setCurrent, setGridSelection, setSelectedColumns, setSelectedRows, showTrailingBlankRow]);
  const lastMouseDownCellLocation = React.useRef();
  const touchDownArgs = React.useRef(visibleRegion);
  const onMouseDown = React.useCallback(args => {
    isPrevented.current = false;
    touchDownArgs.current = visibleRegionRef.current;

    if (args.button !== 0) {
      return;
    }

    setMouseState({
      previousSelection: gridSelection,
      fillHandle: args.kind === "cell" && args.isFillHandle
    });
    lastMouseDownCellLocation.current = undefined;

    if (!args.isTouch) {
      handleSelect(args);
    }
  }, [gridSelection, handleSelect]);
  const [renameGroup, setRenameGroup] = React.useState();
  const handleGroupHeaderSelection = React.useCallback(args => {
    if (args.kind !== "group-header" || columnSelect !== "multi") {
      return;
    }

    const isMultiKey = browserIsOSX.value ? args.metaKey : args.ctrlKey;
    const [col] = args.location;
    const selectedColumns = gridSelection.columns;
    if (col < rowMarkerOffset) return;
    const needle = mangledCols[col];
    let start = col;
    let end = col;

    for (let i = col - 1; i >= rowMarkerOffset; i--) {
      if (!isGroupEqual(needle.group, mangledCols[i].group)) break;
      start--;
    }

    for (let i = col + 1; i < mangledCols.length; i++) {
      if (!isGroupEqual(needle.group, mangledCols[i].group)) break;
      end++;
    }

    focus();

    if (isMultiKey) {
      if (selectedColumns.hasAll([start, end + 1])) {
        let newVal = selectedColumns;

        for (let index = start; index <= end; index++) {
          newVal = newVal.remove(index);
        }

        setSelectedColumns(newVal, undefined, isMultiKey);
      } else {
        setSelectedColumns(undefined, [start, end + 1], isMultiKey);
      }
    } else {
      setSelectedColumns(CompactSelection.fromSingleSelection([start, end + 1]), undefined, isMultiKey);
    }
  }, [columnSelect, focus, gridSelection.columns, mangledCols, rowMarkerOffset, setSelectedColumns]);
  const fillDown = React.useCallback(reverse => {
    var _gridRef$current5;

    if (gridSelection.current === undefined) return;
    const damage = [];
    const r = gridSelection.current.range;

    for (let x = 0; x < r.width; x++) {
      const fillCol = x + r.x;
      const fillVal = getMangledCellContent([fillCol, reverse ? r.y + r.height - 1 : r.y]);
      if (isInnerOnlyCell(fillVal) || !isEditableGridCell(fillVal)) continue;

      for (let y = 1; y < r.height; y++) {
        const fillRow = reverse ? r.y + r.height - (y + 1) : y + r.y;
        const target = [fillCol, fillRow];
        damage.push(target);
        mangledOnCellEdited === null || mangledOnCellEdited === void 0 ? void 0 : mangledOnCellEdited(target, { ...fillVal
        });
      }
    }

    (_gridRef$current5 = gridRef.current) === null || _gridRef$current5 === void 0 ? void 0 : _gridRef$current5.damage(damage.map(c => ({
      cell: c
    })));
  }, [getMangledCellContent, gridSelection, mangledOnCellEdited]);
  const isPrevented = React.useRef(false);
  const onContextMenu = React.useCallback(e => {
    if (isPrevented.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, []);
  const onMouseUp = React.useCallback((args, isOutside) => {
    var _lastMouseDownCellLoc;

    const mouse = mouseState;
    setMouseState(undefined);

    if (scrollTimer.current !== undefined) {
      window.clearInterval(scrollTimer.current);
    }

    if (isOutside) return;
    const [col, row] = args.location;
    const [lastMouseDownCol, lastMouseDownRow] = (_lastMouseDownCellLoc = lastMouseDownCellLocation.current) !== null && _lastMouseDownCellLoc !== void 0 ? _lastMouseDownCellLoc : [];

    const preventDefault = () => {
      isPrevented.current = true;
    };

    const handleMaybeClick = a => {
      if (lastMouseDownCol === col && lastMouseDownRow === row) {
        onCellClicked === null || onCellClicked === void 0 ? void 0 : onCellClicked([col - rowMarkerOffset, row], { ...a,
          preventDefault
        });
      }

      if (gridSelection.current !== undefined) {
        var _mouse$previousSelect, _mouse$previousSelect2;

        if ((mouse === null || mouse === void 0 ? void 0 : mouse.fillHandle) === true) {
          fillDown(gridSelection.current.cell[1] !== gridSelection.current.range.y);
        } else if (gridSelection.current !== undefined && (mouse === null || mouse === void 0 ? void 0 : (_mouse$previousSelect = mouse.previousSelection) === null || _mouse$previousSelect === void 0 ? void 0 : (_mouse$previousSelect2 = _mouse$previousSelect.current) === null || _mouse$previousSelect2 === void 0 ? void 0 : _mouse$previousSelect2.cell) !== undefined && !isPrevented.current) {
          const [selectedCol, selectedRow] = gridSelection.current.cell;
          const [prevCol, prevRow] = mouse.previousSelection.current.cell;
          const c = getMangledCellContent([col, row]);
          const r = c.kind === GridCellKind.Custom ? undefined : CellRenderers[c.kind];

          if (r !== undefined && r.onClick !== undefined) {
            const newVal = r.onClick(c, a.localEventX, a.localEventY, a.bounds);

            if (newVal !== undefined && !isInnerOnlyCell(newVal) && isEditableGridCell(newVal)) {
              var _gridRef$current6;

              mangledOnCellEdited(a.location, newVal);
              (_gridRef$current6 = gridRef.current) === null || _gridRef$current6 === void 0 ? void 0 : _gridRef$current6.damage([{
                cell: a.location
              }]);
            }
          }

          if (col === selectedCol && col === prevCol && row === selectedRow && row === prevRow) {
            onCellActivated === null || onCellActivated === void 0 ? void 0 : onCellActivated([col - rowMarkerOffset, row]);
            reselect(a.bounds, false);
            return true;
          }
        }
      }

      return false;
    };

    if (args.isTouch) {
      const vr = visibleRegionRef.current;
      const touchVr = touchDownArgs.current;

      if (vr.x !== touchVr.x || vr.y !== touchVr.y) {
        return;
      }

      if (args.isLongTouch === true) {
        var _gridSelection$curren4, _gridSelection$curren5;

        const clickLocation = args.location[0] - rowMarkerOffset;

        if (args.kind === "cell" && (gridSelection === null || gridSelection === void 0 ? void 0 : (_gridSelection$curren4 = gridSelection.current) === null || _gridSelection$curren4 === void 0 ? void 0 : _gridSelection$curren4.cell[0]) === col && (gridSelection === null || gridSelection === void 0 ? void 0 : (_gridSelection$curren5 = gridSelection.current) === null || _gridSelection$curren5 === void 0 ? void 0 : _gridSelection$curren5.cell[1]) === row) {
          onCellContextMenu === null || onCellContextMenu === void 0 ? void 0 : onCellContextMenu([clickLocation, args.location[1]], { ...args,
            preventDefault
          });
          return;
        } else if (args.kind === "header" && gridSelection.columns.hasIndex(col)) {
          onHeaderContextMenu === null || onHeaderContextMenu === void 0 ? void 0 : onHeaderContextMenu(clickLocation, { ...args,
            preventDefault
          });
          return;
        } else if (args.kind === "group-header") {
          if (clickLocation < 0) {
            return;
          }

          onGroupHeaderContextMenu === null || onGroupHeaderContextMenu === void 0 ? void 0 : onGroupHeaderContextMenu(clickLocation, { ...args,
            preventDefault
          });
          return;
        }
      }

      if (args.kind === "cell") {
        if (!handleMaybeClick(args)) {
          handleSelect(args);
        }
      } else {
        handleSelect(args);
      }

      return;
    }

    if (args.kind === "header") {
      const clickLocation = args.location[0] - rowMarkerOffset;

      if (clickLocation < 0) {
        return;
      }

      if (args.button === 0 && col === lastMouseDownCol && row === lastMouseDownRow) {
        onHeaderClicked === null || onHeaderClicked === void 0 ? void 0 : onHeaderClicked(clickLocation, { ...args,
          preventDefault
        });
      } else if (args.button === 2) {
        onHeaderContextMenu === null || onHeaderContextMenu === void 0 ? void 0 : onHeaderContextMenu(clickLocation, { ...args,
          preventDefault
        });
      }
    }

    if (args.kind === "group-header") {
      const clickLocation = args.location[0] - rowMarkerOffset;

      if (clickLocation < 0) {
        return;
      }

      if (args.button === 0 && col === lastMouseDownCol && row === lastMouseDownRow) {
        onGroupHeaderClicked === null || onGroupHeaderClicked === void 0 ? void 0 : onGroupHeaderClicked(clickLocation, { ...args,
          preventDefault
        });

        if (!isPrevented.current) {
          handleGroupHeaderSelection(args);
        }
      } else if (args.button === 2) {
        onGroupHeaderContextMenu === null || onGroupHeaderContextMenu === void 0 ? void 0 : onGroupHeaderContextMenu(clickLocation, { ...args,
          preventDefault
        });
      }
    }

    if (args.kind === "cell") {
      if (args.button === 0) {
        handleMaybeClick(args);
      } else if (args.button === 2) {
        onCellContextMenu === null || onCellContextMenu === void 0 ? void 0 : onCellContextMenu([args.location[0] - rowMarkerOffset, args.location[1]], { ...args,
          preventDefault
        });
      }
    }

    lastMouseDownCellLocation.current = undefined;
  }, [mouseState, gridSelection, onCellClicked, rowMarkerOffset, fillDown, getMangledCellContent, mangledOnCellEdited, onCellActivated, reselect, onCellContextMenu, onHeaderContextMenu, onGroupHeaderContextMenu, handleSelect, onHeaderClicked, onGroupHeaderClicked, handleGroupHeaderSelection]);
  const onHeaderMenuClickInner = React.useCallback((col, screenPosition) => {
    onHeaderMenuClick === null || onHeaderMenuClick === void 0 ? void 0 : onHeaderMenuClick(col - rowMarkerOffset, screenPosition);
  }, [onHeaderMenuClick, rowMarkerOffset]);
  const currentCell = gridSelection === null || gridSelection === void 0 ? void 0 : (_gridSelection$curren6 = gridSelection.current) === null || _gridSelection$curren6 === void 0 ? void 0 : _gridSelection$curren6.cell;
  const onVisibleRegionChangedImpl = React.useCallback((region, tx, ty) => {
    let selected = currentCell;

    if (selected !== undefined) {
      selected = [selected[0] - rowMarkerOffset, selected[1]];
    }

    const newRegion = { ...region,
      x: region.x - rowMarkerOffset,
      height: showTrailingBlankRow && region.y + region.height >= rows ? region.height - 1 : region.height,
      tx,
      ty,
      extras: {
        selected,
        freezeRegion: freezeColumns === 0 ? undefined : {
          x: 0,
          y: region.y,
          width: freezeColumns,
          height: region.height
        }
      }
    };
    setVisibleRegion(newRegion);
    visibleRegionRef.current = newRegion;
    onVisibleRegionChanged === null || onVisibleRegionChanged === void 0 ? void 0 : onVisibleRegionChanged(newRegion, newRegion.tx, newRegion.ty, newRegion.extras);
  }, [freezeColumns, currentCell, onVisibleRegionChanged, rowMarkerOffset, rows, showTrailingBlankRow]);
  const onColumnMovedImpl = React.useCallback((startIndex, endIndex) => {
    onColumnMoved === null || onColumnMoved === void 0 ? void 0 : onColumnMoved(startIndex - rowMarkerOffset, endIndex - rowMarkerOffset);

    if (columnSelect !== "none") {
      setSelectedColumns(CompactSelection.fromSingleSelection(endIndex), undefined, true);
    }
  }, [columnSelect, onColumnMoved, rowMarkerOffset, setSelectedColumns]);
  const onDragStartImpl = React.useCallback(args => {
    onDragStart === null || onDragStart === void 0 ? void 0 : onDragStart({ ...args,
      location: [args.location[0] - rowMarkerOffset, args.location[1]]
    });
  }, [onDragStart, rowMarkerOffset]);
  const onMouseMoveImpl = React.useCallback(args => {
    const a = { ...args,
      location: [args.location[0] - rowMarkerOffset, args.location[1]]
    };
    onMouseMove === null || onMouseMove === void 0 ? void 0 : onMouseMove(a);
  }, [onMouseMove, rowMarkerOffset]);
  const onItemHoveredImpl = React.useCallback(args => {
    if (mouseState !== undefined && gridSelection.current !== undefined && !isDraggable && (rangeSelect === "rect" || rangeSelect === "multi-rect")) {
      const [selectedCol, selectedRow] = gridSelection.current.cell;
      let [col, row] = args.location;
      const landedOnLastStickyRow = lastRowSticky && row === rows;
      const startedFromLastStickyRow = lastRowSticky && selectedRow === rows;
      if (landedOnLastStickyRow || startedFromLastStickyRow) return;

      if (col === 0 && hasRowMarkers) {
        col = 1;
      }

      const deltaX = col - selectedCol;
      const deltaY = (row !== null && row !== void 0 ? row : 0) - selectedRow;
      const newRange = {
        x: deltaX >= 0 ? selectedCol : col,
        y: deltaY >= 0 ? selectedRow : row !== null && row !== void 0 ? row : 0,
        width: Math.abs(deltaX) + 1,
        height: Math.abs(deltaY) + 1
      };
      setCurrent({ ...gridSelection.current,
        range: newRange
      }, true, false, "drag");

      if (args.kind === "out-of-bounds" && scrollRef.current !== null) {
        const [horizontal, vertical] = args.direction;
        let scrollX = 0;
        let scrollY = 0;

        if (horizontal === -1) {
          scrollX = columns[columns.length - 1].width;
        } else if (horizontal === 1) {
          scrollX = -columns[0].width;
        }

        if (vertical !== 0) {
          if (typeof rowHeight === "number") {
            scrollY = rowHeight * vertical;
          } else {
            scrollY = rowHeight(row !== null && row !== void 0 ? row : 0) * vertical;
          }
        }

        if (scrollTimer.current !== undefined) {
          window.clearInterval(scrollTimer.current);
        }

        scrollTimer.current = window.setInterval(() => {
          var _scrollRef$current;

          (_scrollRef$current = scrollRef.current) === null || _scrollRef$current === void 0 ? void 0 : _scrollRef$current.scrollBy(-100 * horizontal, scrollY);
        }, 200);
        scrollRef.current.scrollBy(scrollX, scrollY);
      } else {
        if (scrollTimer.current !== undefined) {
          window.clearInterval(scrollTimer.current);
        }
      }
    }

    onItemHovered === null || onItemHovered === void 0 ? void 0 : onItemHovered({ ...args,
      location: [args.location[0] - rowMarkerOffset, args.location[1]]
    });
  }, [mouseState, gridSelection, isDraggable, rangeSelect, onItemHovered, rowMarkerOffset, lastRowSticky, rows, hasRowMarkers, setCurrent, columns, rowHeight]);
  const adjustSelection = React.useCallback(direction => {
    if (gridSelection.current === undefined) return;
    const [x, y] = direction;
    const [col, row] = gridSelection.current.cell;
    const old = gridSelection.current.range;
    let left = old.x;
    let right = old.x + old.width;
    let top = old.y;
    let bottom = old.y + old.height;

    if (y !== 0) {
      if (y === 2) {
        bottom = rows;
        top = row;
        scrollTo(0, bottom, "vertical");
      } else if (y === -2) {
        top = 0;
        bottom = row + 1;
        scrollTo(0, top, "vertical");
      } else if (y === 1) {
        if (top < row) {
          top++;
          scrollTo(0, top, "vertical");
        } else {
          bottom = Math.min(rows, bottom + 1);
          scrollTo(0, bottom, "vertical");
        }
      } else if (y === -1) {
        if (bottom > row + 1) {
          bottom--;
          scrollTo(0, bottom, "vertical");
        } else {
          top = Math.max(0, top - 1);
          scrollTo(0, top, "vertical");
        }
      } else {
        assertNever(y);
      }
    }

    if (x !== 0) {
      if (x === 2) {
        right = mangledCols.length;
        left = col;
        scrollTo(right - 1 - rowMarkerOffset, 0, "horizontal");
      } else if (x === -2) {
        left = rowMarkerOffset;
        right = col + 1;
        scrollTo(left - rowMarkerOffset, 0, "horizontal");
      } else {
        let disallowed = [];

        if (getCellsForSelection !== undefined) {
          const cells = getCellsForSelection({
            x: left,
            y: top,
            width: right - left - rowMarkerOffset,
            height: bottom - top
          }, abortControllerRef.current.signal);

          if (typeof cells === "object") {
            disallowed = getSpanStops(cells);
          }
        }

        if (x === 1) {
          let done = false;

          if (left < col) {
            if (disallowed.length > 0) {
              const target = range(left + 1, col + 1).find(n => !disallowed.includes(n - rowMarkerOffset));

              if (target !== undefined) {
                left = target;
                done = true;
              }
            } else {
              left++;
              done = true;
            }

            if (done) scrollTo(left, 0, "horizontal");
          }

          if (!done) {
            right = Math.min(mangledCols.length, right + 1);
            scrollTo(right - 1 - rowMarkerOffset, 0, "horizontal");
          }
        } else if (x === -1) {
          let done = false;

          if (right > col + 1) {
            if (disallowed.length > 0) {
              const target = range(right - 1, col, -1).find(n => !disallowed.includes(n - rowMarkerOffset));

              if (target !== undefined) {
                right = target;
                done = true;
              }
            } else {
              right--;
              done = true;
            }

            if (done) scrollTo(right - rowMarkerOffset, 0, "horizontal");
          }

          if (!done) {
            left = Math.max(rowMarkerOffset, left - 1);
            scrollTo(left - rowMarkerOffset, 0, "horizontal");
          }
        } else {
          assertNever(x);
        }
      }
    }

    setCurrent({
      cell: gridSelection.current.cell,
      range: {
        x: left,
        y: top,
        width: right - left,
        height: bottom - top
      }
    }, true, false, "keyboard-select");
  }, [getCellsForSelection, gridSelection, mangledCols.length, rowMarkerOffset, rows, scrollTo, setCurrent]);
  const updateSelectedCell = React.useCallback((col, row, fromEditingTrailingRow, freeMove) => {
    const rowMax = mangledRows - (fromEditingTrailingRow ? 0 : 1);
    col = clamp(col, rowMarkerOffset, columns.length - 1 + rowMarkerOffset);
    row = clamp(row, 0, rowMax);
    if (col === (currentCell === null || currentCell === void 0 ? void 0 : currentCell[0]) && row === (currentCell === null || currentCell === void 0 ? void 0 : currentCell[1])) return false;

    if (freeMove && gridSelection.current !== undefined) {
      const newStack = [...gridSelection.current.rangeStack];

      if (gridSelection.current.range.width > 1 || gridSelection.current.range.height > 1) {
        newStack.push(gridSelection.current.range);
      }

      setGridSelection({ ...gridSelection,
        current: {
          cell: [col, row],
          range: {
            x: col,
            y: row,
            width: 1,
            height: 1
          },
          rangeStack: newStack
        }
      }, true);
    } else {
      setCurrent({
        cell: [col, row],
        range: {
          x: col,
          y: row,
          width: 1,
          height: 1
        }
      }, true, false, "keyboard-nav");
    }

    if (lastSent.current !== undefined && lastSent.current[0] === col && lastSent.current[1] === row) {
      lastSent.current = undefined;
    }

    scrollTo(col - rowMarkerOffset, row);
    return true;
  }, [mangledRows, rowMarkerOffset, columns.length, currentCell, gridSelection, scrollTo, setGridSelection, setCurrent]);
  const onFinishEditing = React.useCallback((newValue, movement) => {
    if ((overlay === null || overlay === void 0 ? void 0 : overlay.cell) !== undefined && newValue !== undefined && isEditableGridCell(newValue)) {
      mangledOnCellEdited === null || mangledOnCellEdited === void 0 ? void 0 : mangledOnCellEdited(overlay.cell, newValue);
      window.requestAnimationFrame(() => {
        var _gridRef$current7;

        (_gridRef$current7 = gridRef.current) === null || _gridRef$current7 === void 0 ? void 0 : _gridRef$current7.damage([{
          cell: overlay.cell
        }]);
      });
    }

    focus(true);
    setOverlay(undefined);
    const [movX, movY] = movement;

    if (gridSelection.current !== undefined && (movX !== 0 || movY !== 0)) {
      const isEditingTrailingRow = gridSelection.current.cell[1] === mangledRows - 1 && newValue !== undefined;
      updateSelectedCell(clamp(gridSelection.current.cell[0] + movX, 0, mangledCols.length - 1), clamp(gridSelection.current.cell[1] + movY, 0, mangledRows - 1), isEditingTrailingRow, false);
    }

    onFinishedEditing === null || onFinishedEditing === void 0 ? void 0 : onFinishedEditing(newValue, movement);
  }, [overlay === null || overlay === void 0 ? void 0 : overlay.cell, focus, gridSelection, onFinishedEditing, mangledOnCellEdited, mangledRows, updateSelectedCell, mangledCols.length]);
  const overlayID = React.useMemo(() => {
    return `gdg-overlay-${idCounter++}`;
  }, []);
  const onKeyDown = React.useCallback(event => {
    const fn = async () => {
      const overlayOpen = overlay !== undefined;
      const {
        altKey,
        shiftKey
      } = event;
      const isOSX = browserIsOSX.value;
      const isPrimaryKey = isOSX ? event.metaKey : event.ctrlKey;
      const isDeleteKey = event.key === "Delete" || isOSX && event.key === "Backspace";
      const vr = visibleRegionRef.current;
      const selectedColumns = gridSelection.columns;
      const selectedRows = gridSelection.rows;

      if (event.key === "Escape") {
        if (overlayOpen) {
          setOverlay(undefined);
        } else if (keybindings.clear) {
          setGridSelection(emptyGridSelection, false);
          onSelectionCleared === null || onSelectionCleared === void 0 ? void 0 : onSelectionCleared();
        }

        return;
      } else if (isHotkey("primary+a", event) && keybindings.selectAll) {
        if (!overlayOpen) {
          var _gridSelection$curren7, _gridSelection$curren8;

          setGridSelection({
            columns: CompactSelection.empty(),
            rows: CompactSelection.empty(),
            current: {
              cell: (_gridSelection$curren7 = (_gridSelection$curren8 = gridSelection.current) === null || _gridSelection$curren8 === void 0 ? void 0 : _gridSelection$curren8.cell) !== null && _gridSelection$curren7 !== void 0 ? _gridSelection$curren7 : [rowMarkerOffset, 0],
              range: {
                x: rowMarkerOffset,
                y: 0,
                width: columnsIn.length,
                height: rows
              },
              rangeStack: []
            }
          }, false);
        } else {
          const el = document.getElementById(overlayID);

          if (el !== null) {
            const s = window.getSelection();
            const r = document.createRange();
            r.selectNodeContents(el);
            s === null || s === void 0 ? void 0 : s.removeAllRanges();
            s === null || s === void 0 ? void 0 : s.addRange(r);
          }
        }

        event.cancel();
        return;
      } else if (isHotkey("primary+f", event) && keybindings.search) {
        event.cancel();
        setShowSearchInner(true);
      }

      function deleteRange(r) {
        var _gridRef$current8;

        focus();
        const damaged = [];

        for (let x = r.x; x < r.x + r.width; x++) {
          for (let y = r.y; y < r.y + r.height; y++) {
            const cellValue = getCellContent([x - rowMarkerOffset, y]);
            let newVal = undefined;

            if (cellValue.kind === GridCellKind.Custom) {
              const editor = provideEditor === null || provideEditor === void 0 ? void 0 : provideEditor(cellValue);

              if (isObjectEditorCallbackResult(editor)) {
                var _editor$deletedValue;

                newVal = editor === null || editor === void 0 ? void 0 : (_editor$deletedValue = editor.deletedValue) === null || _editor$deletedValue === void 0 ? void 0 : _editor$deletedValue.call(editor, cellValue);
              }
            } else if (isEditableGridCell(cellValue) && cellValue.allowOverlay || cellValue.kind === GridCellKind.Boolean) {
              var _toDelete$onDelete;

              const toDelete = CellRenderers[cellValue.kind];
              newVal = (_toDelete$onDelete = toDelete.onDelete) === null || _toDelete$onDelete === void 0 ? void 0 : _toDelete$onDelete.call(toDelete, cellValue);
            }

            if (newVal !== undefined && !isInnerOnlyCell(newVal) && isEditableGridCell(newVal)) {
              mangledOnCellEdited([x, y], newVal);
              damaged.push([x, y]);
            }
          }
        }

        (_gridRef$current8 = gridRef.current) === null || _gridRef$current8 === void 0 ? void 0 : _gridRef$current8.damage(damaged.map(x => ({
          cell: x
        })));
      }

      if (isDeleteKey) {
        var _onDelete;

        const callbackResult = (_onDelete = onDelete === null || onDelete === void 0 ? void 0 : onDelete(gridSelection)) !== null && _onDelete !== void 0 ? _onDelete : true;
        event.cancel();

        if (callbackResult !== false) {
          const toDelete = callbackResult === true ? gridSelection : callbackResult;

          if (toDelete.current !== undefined) {
            deleteRange(toDelete.current.range);

            for (const r of toDelete.current.rangeStack) {
              deleteRange(r);
            }
          }

          for (const r of toDelete.rows) {
            deleteRange({
              x: rowMarkerOffset,
              y: r,
              width: mangledCols.length - rowMarkerOffset,
              height: 1
            });
          }

          for (const col of toDelete.columns) {
            deleteRange({
              x: col,
              y: 0,
              width: 1,
              height: rows
            });
          }
        }

        return;
      }

      if (gridSelection.current === undefined) return;
      let [col, row] = gridSelection.current.cell;
      let freeMove = false;

      if (keybindings.selectColumn && isHotkey("ctrl+ ", event) && columnSelect !== "none") {
        if (selectedColumns.hasIndex(col)) {
          setSelectedColumns(selectedColumns.remove(col), undefined, true);
        } else {
          if (columnSelect === "single") {
            setSelectedColumns(CompactSelection.fromSingleSelection(col), undefined, true);
          } else {
            setSelectedColumns(undefined, col, true);
          }
        }
      } else if (keybindings.selectRow && isHotkey("shift+ ", event) && rowSelect !== "none") {
        if (selectedRows.hasIndex(row)) {
          setSelectedRows(selectedRows.remove(row), undefined, true);
        } else {
          if (rowSelect === "single") {
            setSelectedRows(CompactSelection.fromSingleSelection(row), undefined, true);
          } else {
            setSelectedRows(undefined, row, true);
          }
        }
      } else if ((isHotkey("Enter", event) || isHotkey(" ", event) || isHotkey("shift+Enter", event)) && event.bounds !== undefined) {
        if (overlayOpen) {
          setOverlay(undefined);

          if (isHotkey("Enter", event)) {
            row++;
          } else if (isHotkey("shift+Enter", event)) {
            row--;
          }
        } else if (row === rows && showTrailingBlankRow) {
          window.setTimeout(() => {
            const customTargetColumn = getCustomNewRowTargetColumn(col);
            void appendRow(customTargetColumn !== null && customTargetColumn !== void 0 ? customTargetColumn : col);
          }, 0);
        } else {
          onCellActivated === null || onCellActivated === void 0 ? void 0 : onCellActivated([col - rowMarkerOffset, row]);
          reselect(event.bounds, true);
          event.cancel();
        }
      } else if (keybindings.downFill && isHotkey("primary+_68", event) && gridSelection.current.range.height > 1) {
        fillDown(false);
        event.cancel();
      } else if (keybindings.rightFill && isHotkey("primary+_82", event) && gridSelection.current.range.width > 1) {
        var _gridRef$current9;

        const damage = [];
        const r = gridSelection.current.range;

        for (let y = 0; y < r.height; y++) {
          const fillRow = y + r.y;
          const fillVal = getMangledCellContent([r.x, fillRow]);
          if (isInnerOnlyCell(fillVal) || !isEditableGridCell(fillVal)) continue;

          for (let x = 1; x < r.width; x++) {
            const fillCol = x + r.x;
            const target = [fillCol, fillRow];
            damage.push(target);
            mangledOnCellEdited === null || mangledOnCellEdited === void 0 ? void 0 : mangledOnCellEdited(target, { ...fillVal
            });
          }
        }

        (_gridRef$current9 = gridRef.current) === null || _gridRef$current9 === void 0 ? void 0 : _gridRef$current9.damage(damage.map(c => ({
          cell: c
        })));
        event.cancel();
      } else if (keybindings.pageDown && isHotkey("PageDown", event)) {
        row += Math.max(1, visibleRegionRef.current.height - 4);
        event.cancel();
      } else if (keybindings.pageUp && isHotkey("PageUp", event)) {
        row -= Math.max(1, visibleRegionRef.current.height - 4);
        event.cancel();
      } else if (keybindings.first && isHotkey("primary+Home", event)) {
        setOverlay(undefined);
        row = 0;
        col = 0;
      } else if (keybindings.last && isHotkey("primary+End", event)) {
        setOverlay(undefined);
        row = Number.MAX_SAFE_INTEGER;
        col = Number.MAX_SAFE_INTEGER;
      } else if (keybindings.first && isHotkey("primary+shift+Home", event)) {
        setOverlay(undefined);
        adjustSelection([-2, -2]);
      } else if (keybindings.last && isHotkey("primary+shift+End", event)) {
        setOverlay(undefined);
        adjustSelection([2, 2]);
      } else if (event.key === "ArrowDown") {
        if (event.ctrlKey && event.altKey) {
          return;
        }

        setOverlay(undefined);

        if (shiftKey && (rangeSelect === "rect" || rangeSelect === "multi-rect")) {
          adjustSelection([0, isPrimaryKey && !altKey ? 2 : 1]);
        } else {
          if (altKey && !isPrimaryKey) {
            freeMove = true;
          }

          if (isPrimaryKey && !altKey) {
            row = rows - 1;
          } else {
            row += 1;
          }
        }
      } else if (event.key === "ArrowUp" || event.key === "Home") {
        const asPrimary = event.key === "Home" || isPrimaryKey;
        setOverlay(undefined);

        if (shiftKey && (rangeSelect === "rect" || rangeSelect === "multi-rect")) {
          adjustSelection([0, asPrimary && !altKey ? -2 : -1]);
        } else {
          if (altKey && !asPrimary) {
            freeMove = true;
          }

          row += asPrimary && !altKey ? Number.MIN_SAFE_INTEGER : -1;
        }
      } else if (event.key === "ArrowRight" || event.key === "End") {
        const asPrimary = event.key === "End" || isPrimaryKey;
        setOverlay(undefined);

        if (shiftKey && (rangeSelect === "rect" || rangeSelect === "multi-rect")) {
          adjustSelection([asPrimary && !altKey ? 2 : 1, 0]);
        } else {
          if (altKey && !asPrimary) {
            freeMove = true;
          }

          col += asPrimary && !altKey ? Number.MAX_SAFE_INTEGER : 1;
        }
      } else if (event.key === "ArrowLeft") {
        setOverlay(undefined);

        if (shiftKey && (rangeSelect === "rect" || rangeSelect === "multi-rect")) {
          adjustSelection([isPrimaryKey && !altKey ? -2 : -1, 0]);
        } else {
          if (altKey && !isPrimaryKey) {
            freeMove = true;
          }

          col += isPrimaryKey && !altKey ? Number.MIN_SAFE_INTEGER : -1;
        }
      } else if (event.key === "Tab") {
        setOverlay(undefined);

        if (shiftKey) {
          col--;
        } else {
          col++;
        }
      } else if (!event.metaKey && !event.ctrlKey && gridSelection.current !== undefined && event.key.length === 1 && event.key.match(/[ -~]/g) && event.bounds !== undefined && isReadWriteCell(getCellContent([col - rowMarkerOffset, Math.max(0, row - 1)]))) {
        if ((!lastRowSticky || row !== rows) && (vr.y > row || row > vr.y + vr.height || vr.x > col || col > vr.x + vr.width)) {
          return;
        }

        reselect(event.bounds, true, event.key);
        event.cancel();
      }

      const moved = updateSelectedCell(col, row, false, freeMove);

      if (moved) {
        event.cancel();
      }
    };

    void fn();
  }, [overlay, gridSelection, keybindings.selectAll, keybindings.search, keybindings.selectColumn, keybindings.selectRow, keybindings.downFill, keybindings.rightFill, keybindings.pageDown, keybindings.pageUp, keybindings.first, keybindings.last, keybindings.clear, columnSelect, rowSelect, getCellContent, rowMarkerOffset, updateSelectedCell, setGridSelection, fillDown, onSelectionCleared, columnsIn.length, rows, overlayID, focus, provideEditor, mangledOnCellEdited, onDelete, mangledCols.length, setSelectedColumns, setSelectedRows, showTrailingBlankRow, getCustomNewRowTargetColumn, appendRow, onCellActivated, reselect, getMangledCellContent, adjustSelection, rangeSelect, lastRowSticky]);
  const onPasteInternal = React.useCallback(async e => {
    var _scrollRef$current2, _canvasRef$current, _gridSelection$curren9;

    if (!keybindings.paste) return;

    function pasteToCell(inner, target, toPaste) {
      if (!isInnerOnlyCell(inner) && isReadWriteCell(inner) && inner.readonly !== true) {
        const coerced = coercePasteValue === null || coercePasteValue === void 0 ? void 0 : coercePasteValue(toPaste, inner);

        if (coerced !== undefined && isEditableGridCell(coerced)) {
          if (process.env.NODE_ENV !== "production") {
            if (coerced.kind !== inner.kind) {
              console.warn("Coercion should not change cell kind.");
            }
          }

          return {
            location: target,
            value: coerced
          };
        }

        switch (inner.kind) {
          case GridCellKind.Text:
          case GridCellKind.Markdown:
          case GridCellKind.Uri:
            {
              return {
                location: target,
                value: { ...inner,
                  data: toPaste
                }
              };
            }

          case GridCellKind.Number:
            {
              const newNumber = Number.parseFloat(toPaste);

              if (!Number.isNaN(newNumber)) {
                return {
                  location: target,
                  value: { ...inner,
                    data: newNumber
                  }
                };
              }

              return undefined;
            }

          case GridCellKind.Custom:
            {
              return {
                location: target,
                value: { ...inner,
                  copyData: toPaste
                }
              };
            }

          case GridCellKind.Boolean:
            {
              let newVal = BooleanEmpty;

              if (toPaste.toLowerCase() === "true") {
                newVal = true;
              } else if (toPaste.toLowerCase() === "false") {
                newVal = false;
              } else if (toPaste.toLowerCase() === "indeterminate") {
                newVal = BooleanIndeterminate;
              }

              return {
                location: target,
                value: { ...inner,
                  data: newVal
                }
              };
            }

          default:
            assertNever(inner);
        }
      }

      return undefined;
    }

    const selectedColumns = gridSelection.columns;
    const selectedRows = gridSelection.rows;
    const focused = ((_scrollRef$current2 = scrollRef.current) === null || _scrollRef$current2 === void 0 ? void 0 : _scrollRef$current2.contains(document.activeElement)) === true || ((_canvasRef$current = canvasRef.current) === null || _canvasRef$current === void 0 ? void 0 : _canvasRef$current.contains(document.activeElement)) === true;
    let target = (_gridSelection$curren9 = gridSelection.current) === null || _gridSelection$curren9 === void 0 ? void 0 : _gridSelection$curren9.cell;

    if (target === undefined && selectedColumns.length === 1) {
      var _selectedColumns$firs;

      target = [(_selectedColumns$firs = selectedColumns.first()) !== null && _selectedColumns$firs !== void 0 ? _selectedColumns$firs : 0, 0];
    }

    if (target === undefined && selectedRows.length === 1) {
      var _selectedRows$first;

      target = [rowMarkerOffset, (_selectedRows$first = selectedRows.first()) !== null && _selectedRows$first !== void 0 ? _selectedRows$first : 0];
    }

    if (focused && target !== undefined) {
      var _gridRef$current10;

      let data;
      let text;

      if (navigator.clipboard.read !== undefined) {
        const clipboardContent = await navigator.clipboard.read();

        for (const item of clipboardContent) {
          if (item.types.includes("text/html")) {
            const htmlBlob = await item.getType("text/html");
            const html = await htmlBlob.text();
            const fragment = document.createElement("html");
            fragment.innerHTML = html;
            const el = fragment.querySelector("table");

            if (el !== null) {
              data = decodeHTML(el);
              break;
            }
          }

          if (item.types.includes("text/plain")) {
            text = await (await item.getType("text/plain")).text();
          }
        }
      } else if (navigator.clipboard.readText !== undefined) {
        text = await navigator.clipboard.readText();
      } else if (e !== undefined && (e === null || e === void 0 ? void 0 : e.clipboardData) !== null) {
        if (e.clipboardData.types.includes("text/html")) {
          const html = e.clipboardData.getData("text/html");
          const fragment = document.createElement("html");
          fragment.innerHTML = html;
          const el = fragment.querySelector("table");

          if (el !== null) {
            data = decodeHTML(el);
          }
        }

        if (data === undefined && e.clipboardData.types.includes("text/plain")) {
          text = e.clipboardData.getData("text/plain");
        }
      } else {
        return;
      }

      const [gridCol, gridRow] = target;
      const damage = [];

      do {
        if (onPaste === undefined) {
          var _ref2, _text, _data;

          const cellData = getMangledCellContent(target);
          const newVal = pasteToCell(cellData, target, (_ref2 = (_text = text) !== null && _text !== void 0 ? _text : (_data = data) === null || _data === void 0 ? void 0 : _data.map(r => r.join("\t")).join("\t")) !== null && _ref2 !== void 0 ? _ref2 : "");

          if (newVal !== undefined) {
            damage.push(newVal);
          }

          break;
        }

        if (data === undefined) {
          if (text === undefined) return;
          data = unquote(text);
        }

        if (onPaste === false || typeof onPaste === "function" && (onPaste === null || onPaste === void 0 ? void 0 : onPaste([target[0] - rowMarkerOffset, target[1]], data)) !== true) {
          return;
        }

        for (let row = 0; row < data.length; row++) {
          const dataRow = data[row];
          if (row + gridRow >= rows) break;

          for (let col = 0; col < dataRow.length; col++) {
            const dataItem = dataRow[col];
            const index = [col + gridCol, row + gridRow];
            const cellData = getMangledCellContent(index);
            const newVal = pasteToCell(cellData, index, dataItem);

            if (newVal !== undefined) {
              damage.push(newVal);
            }
          }
        }
      } while (false);

      const r = mangledOnCellsEdited(damage);

      if (r !== true) {
        damage.forEach(i => mangledOnCellEdited(i.location, i.value));
      }

      (_gridRef$current10 = gridRef.current) === null || _gridRef$current10 === void 0 ? void 0 : _gridRef$current10.damage(damage.map(c => ({
        cell: c.location
      })));
    }
  }, [coercePasteValue, getMangledCellContent, gridSelection, keybindings.paste, mangledOnCellEdited, mangledOnCellsEdited, onPaste, rowMarkerOffset, rows]);
  useEventListener("paste", onPasteInternal, window, false, true);
  const onCopy = React.useCallback(async e => {
    var _scrollRef$current3, _canvasRef$current2;

    if (!keybindings.copy) return;
    const focused = ((_scrollRef$current3 = scrollRef.current) === null || _scrollRef$current3 === void 0 ? void 0 : _scrollRef$current3.contains(document.activeElement)) === true || ((_canvasRef$current2 = canvasRef.current) === null || _canvasRef$current2 === void 0 ? void 0 : _canvasRef$current2.contains(document.activeElement)) === true;
    const selectedColumns = gridSelection.columns;
    const selectedRows = gridSelection.rows;

    if (focused && getCellsForSelection !== undefined) {
      if (gridSelection.current !== undefined) {
        let thunk = getCellsForSelection(gridSelection.current.range, abortControllerRef.current.signal);

        if (typeof thunk !== "object") {
          thunk = await thunk();
        }

        copyToClipboard(thunk, range(gridSelection.current.range.x - rowMarkerOffset, gridSelection.current.range.x + gridSelection.current.range.width - rowMarkerOffset), e);
      } else if (selectedRows !== undefined && selectedRows.length > 0) {
        const toCopy = Array.from(selectedRows);
        const cells = toCopy.map(rowIndex => {
          const thunk = getCellsForSelection({
            x: rowMarkerOffset,
            y: rowIndex,
            width: columnsIn.length - rowMarkerOffset,
            height: 1
          }, abortControllerRef.current.signal);

          if (typeof thunk === "object") {
            return thunk[0];
          }

          return thunk().then(v => v[0]);
        });

        if (cells.some(x => x instanceof Promise)) {
          const settled = await Promise.all(cells);
          copyToClipboard(settled, range(columnsIn.length), e);
        } else {
          copyToClipboard(cells, range(columnsIn.length), e);
        }
      } else if (selectedColumns.length >= 1) {
        const results = [];
        const cols = [];

        for (const col of selectedColumns) {
          let thunk = getCellsForSelection({
            x: col,
            y: 0,
            width: 1,
            height: rows
          }, abortControllerRef.current.signal);

          if (typeof thunk !== "object") {
            thunk = await thunk();
          }

          results.push(thunk);
          cols.push(col - rowMarkerOffset);
        }

        if (results.length === 1) {
          copyToClipboard(results[0], cols, e);
        } else {
          const toCopy = results.reduce((pv, cv) => pv.map((row, index) => [...row, ...cv[index]]));
          copyToClipboard(toCopy, cols, e);
        }
      }
    }
  }, [columnsIn.length, getCellsForSelection, gridSelection, keybindings.copy, rowMarkerOffset, rows]);
  useEventListener("copy", onCopy, window, false, false);
  const onSearchResultsChanged = React.useCallback((results, navIndex) => {
    if (results.length === 0 || navIndex === -1) return;
    const [col, row] = results[navIndex];

    if (lastSent.current !== undefined && lastSent.current[0] === col && lastSent.current[1] === row) {
      return;
    }

    lastSent.current = [col, row];
    updateSelectedCell(col, row, false, false);
  }, [updateSelectedCell]);
  React.useEffect(() => {
    if (gridSelection.current === undefined) return;
    const [col, row] = gridSelection.current.cell;
    const selectionColInRange = mangledCols[col];
    if (selectionColInRange === undefined) return;
    updateSelectedCell(col, row, false, false);
  }, [mangledCols, rows, gridSelection, updateSelectedCell]);
  const disabledRows = React.useMemo(() => {
    if (showTrailingBlankRow === true && (trailingRowOptions === null || trailingRowOptions === void 0 ? void 0 : trailingRowOptions.tint) === true) {
      return CompactSelection.fromSingleSelection(mangledRows - 1);
    }

    return CompactSelection.empty();
  }, [mangledRows, showTrailingBlankRow, trailingRowOptions === null || trailingRowOptions === void 0 ? void 0 : trailingRowOptions.tint]);
  const mangledVerticalBorder = React.useCallback(col => {
    var _verticalBorder;

    return typeof verticalBorder === "boolean" ? verticalBorder : (_verticalBorder = verticalBorder === null || verticalBorder === void 0 ? void 0 : verticalBorder(col - rowMarkerOffset)) !== null && _verticalBorder !== void 0 ? _verticalBorder : true;
  }, [rowMarkerOffset, verticalBorder]);
  const drawCustomCellMangled = React.useMemo(() => {
    if (drawCell !== undefined) {
      return drawCell;
    } else if (drawCustomCell !== undefined) {
      return a => drawCustomCell(a.ctx, a.cell, a.theme, a.rect, a.hoverAmount);
    }

    return undefined;
  }, [drawCell, drawCustomCell]);
  const renameGroupNode = React.useMemo(() => {
    if (renameGroup === undefined || canvasRef.current === null) return null;
    const {
      bounds,
      group
    } = renameGroup;
    const canvasBounds = canvasRef.current.getBoundingClientRect();
    return React.createElement(GroupRename, {
      bounds: bounds,
      group: group,
      canvasBounds: canvasBounds,
      onClose: () => setRenameGroup(undefined),
      onFinish: newVal => {
        setRenameGroup(undefined);
        onGroupHeaderRenamed === null || onGroupHeaderRenamed === void 0 ? void 0 : onGroupHeaderRenamed(group, newVal);
      }
    });
  }, [onGroupHeaderRenamed, renameGroup]);
  const mangledFreezeColumns = Math.min(mangledCols.length, freezeColumns + (hasRowMarkers ? 1 : 0));
  React.useImperativeHandle(forwardedRef, () => ({
    updateCells: damageList => {
      var _gridRef$current11;

      if (rowMarkerOffset !== 0) {
        damageList = damageList.map(x => ({
          cell: [x.cell[0] + rowMarkerOffset, x.cell[1]]
        }));
      }

      return (_gridRef$current11 = gridRef.current) === null || _gridRef$current11 === void 0 ? void 0 : _gridRef$current11.damage(damageList);
    },
    getBounds: function () {
      var _gridRef$current12;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (_gridRef$current12 = gridRef.current) === null || _gridRef$current12 === void 0 ? void 0 : _gridRef$current12.getBounds(...args);
    },
    focus: () => {
      var _gridRef$current13;

      return (_gridRef$current13 = gridRef.current) === null || _gridRef$current13 === void 0 ? void 0 : _gridRef$current13.focus();
    },
    emit: async e => {
      switch (e) {
        case "delete":
          onKeyDown({
            bounds: undefined,
            cancel: () => undefined,
            ctrlKey: false,
            key: "Delete",
            keyCode: 46,
            metaKey: false,
            shiftKey: false,
            altKey: false
          });
          break;

        case "fill-right":
          onKeyDown({
            bounds: undefined,
            cancel: () => undefined,
            ctrlKey: true,
            key: "r",
            keyCode: 82,
            metaKey: false,
            shiftKey: false,
            altKey: false
          });
          break;

        case "fill-down":
          onKeyDown({
            bounds: undefined,
            cancel: () => undefined,
            ctrlKey: true,
            key: "d",
            keyCode: 68,
            metaKey: false,
            shiftKey: false,
            altKey: false
          });
          break;

        case "copy":
          await onCopy();
          break;

        case "paste":
          await onPasteInternal();
          break;
      }
    },
    scrollTo
  }), [onCopy, onKeyDown, onPasteInternal, rowMarkerOffset, scrollTo]);
  const [selCol, selRow] = currentCell !== null && currentCell !== void 0 ? currentCell : [];
  const onCellFocused = React.useCallback(cell => {
    const [col, row] = cell;

    if (row === -1) {
      if (columnSelect !== "none") {
        setSelectedColumns(CompactSelection.fromSingleSelection(col), undefined, false);
        focus();
      }

      return;
    }

    if (selCol === col && selRow === row) return;
    setCurrent({
      cell,
      range: {
        x: col,
        y: row,
        width: 1,
        height: 1
      }
    }, true, false, "keyboard-nav");
    scrollTo(col, row);
  }, [columnSelect, focus, scrollTo, selCol, selRow, setCurrent, setSelectedColumns]);
  const [isFocused, setIsFocused] = React.useState(false);
  const setIsFocusedDebounced = React.useRef(debounce(val => {
    setIsFocused(val);
  }, 5));
  const onCanvasFocused = React.useCallback(() => {
    setIsFocusedDebounced.current(true);

    if (gridSelection.current === undefined && gridSelection.columns.length === 0 && gridSelection.rows.length === 0 && mouseState === undefined) {
      setCurrent({
        cell: [rowMarkerOffset, cellYOffset],
        range: {
          x: rowMarkerOffset,
          y: cellYOffset,
          width: 1,
          height: 1
        }
      }, true, false, "keyboard-select");
    }
  }, [cellYOffset, gridSelection, mouseState, rowMarkerOffset, setCurrent]);
  const onFocusOut = React.useCallback(() => {
    setIsFocusedDebounced.current(false);
  }, []);
  const [idealWidth, idealHeight] = React.useMemo(() => {
    var _p$experimental$scrol, _p$experimental3;

    let h;
    const scrollbarWidth = (_p$experimental$scrol = (_p$experimental3 = p.experimental) === null || _p$experimental3 === void 0 ? void 0 : _p$experimental3.scrollbarWidthOverride) !== null && _p$experimental$scrol !== void 0 ? _p$experimental$scrol : getScrollBarWidth();
    const rowsCountWithTrailingRow = rows + (showTrailingBlankRow ? 1 : 0);

    if (typeof rowHeight === "number") {
      h = totalHeaderHeight + rowsCountWithTrailingRow * rowHeight;
    } else {
      let avg = 0;
      const toAverage = Math.min(rowsCountWithTrailingRow, 10);

      for (let i = 0; i < toAverage; i++) {
        avg += rowHeight(i);
      }

      avg = Math.floor(avg / toAverage);
      h = totalHeaderHeight + rowsCountWithTrailingRow * avg;
    }

    h += scrollbarWidth;
    const w = mangledCols.reduce((acc, x) => x.width + acc, 0) + scrollbarWidth;
    return [`${Math.min(100000, w)}px`, `${Math.min(100000, h)}px`];
  }, [mangledCols, (_p$experimental4 = p.experimental) === null || _p$experimental4 === void 0 ? void 0 : _p$experimental4.scrollbarWidthOverride, rowHeight, rows, showTrailingBlankRow, totalHeaderHeight]);
  return React.createElement(ThemeProvider, {
    theme: mergedTheme
  }, React.createElement(DataEditorContainer, {
    className: className,
    width: width !== null && width !== void 0 ? width : idealWidth,
    height: height !== null && height !== void 0 ? height : idealHeight,
    onContextMenu: onContextMenu
  }, React.createElement(DataGridSearch, _extends({}, rest, {
    enableGroups: enableGroups,
    onCanvasFocused: onCanvasFocused,
    onCanvasBlur: onFocusOut,
    canvasRef: canvasRef,
    cellXOffset: cellXOffset,
    cellYOffset: cellYOffset,
    accessibilityHeight: visibleRegion.height,
    columns: mangledCols,
    drawCustomCell: drawCustomCellMangled,
    disabledRows: disabledRows,
    freezeColumns: mangledFreezeColumns,
    lockColumns: rowMarkerOffset,
    firstColAccessible: rowMarkerOffset === 0,
    getCellContent: getMangledCellContent,
    minColumnWidth: minColumnWidth,
    maxColumnWidth: maxColumnWidth,
    showSearch: showSearch,
    onSearchClose: onSearchClose,
    highlightRegions: highlightRegions,
    getCellsForSelection: getCellsForSelection,
    getGroupDetails: mangledGetGroupDetails,
    headerHeight: headerHeight,
    isFocused: isFocused,
    groupHeaderHeight: enableGroups ? groupHeaderHeight : 0,
    lastRowSticky: lastRowSticky,
    onCellFocused: onCellFocused,
    onColumnMoved: onColumnMoved === undefined ? undefined : onColumnMovedImpl,
    onDragStart: onDragStartImpl,
    onHeaderMenuClick: onHeaderMenuClickInner,
    onItemHovered: onItemHoveredImpl,
    isFilling: (mouseState === null || mouseState === void 0 ? void 0 : mouseState.fillHandle) === true,
    onMouseMove: onMouseMoveImpl,
    onKeyDown: onKeyDown,
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp,
    onSearchResultsChanged: onSearchResultsChanged,
    onVisibleRegionChanged: onVisibleRegionChangedImpl,
    rowHeight: rowHeight,
    rows: mangledRows,
    scrollRef: scrollRef,
    selection: gridSelection,
    translateX: visibleRegion.tx,
    translateY: visibleRegion.ty,
    verticalBorder: mangledVerticalBorder,
    gridRef: gridRef
  })), renameGroupNode, overlay !== undefined && React.createElement(DataGridOverlayEditor, _extends({}, overlay, {
    id: overlayID,
    className: ((_p$experimental5 = p.experimental) === null || _p$experimental5 === void 0 ? void 0 : _p$experimental5.isSubGrid) === true ? "click-outside-ignore" : undefined,
    provideEditor: provideEditor,
    imageEditorOverride: imageEditorOverride,
    onFinishEditing: onFinishEditing,
    markdownDivCreateNode: markdownDivCreateNode
  }))));
};

export const DataEditor = React.forwardRef(DataEditorImpl);