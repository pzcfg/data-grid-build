"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _dataGridTypes = require("../data-grid/data-grid-types");

var _scrollingDataGrid = _interopRequireDefault(require("../scrolling-data-grid/scrolling-data-grid"));

var _dataGridSearchStyle = require("./data-grid-search-style");

var _support = require("../common/support");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const upArrow = React.createElement("svg", {
  className: "button-icon",
  viewBox: "0 0 512 512"
}, React.createElement("path", {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "48",
  d: "M112 244l144-144 144 144M256 120v292"
}));
const downArrow = React.createElement("svg", {
  className: "button-icon",
  viewBox: "0 0 512 512"
}, React.createElement("path", {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "48",
  d: "M112 268l144 144 144-144M256 392V100"
}));
const closeX = React.createElement("svg", {
  className: "button-icon",
  viewBox: "0 0 512 512"
}, React.createElement("path", {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "32",
  d: "M368 368L144 144M368 144L144 368"
}));
const targetSearchTimeMS = 10;

const DataGridSearch = p => {
  const {
    getCellsForSelection,
    onSearchResultsChanged,
    showSearch = false,
    onSearchClose,
    canvasRef,
    cellYOffset,
    rows,
    columns
  } = p;
  const [searchID] = React.useState(() => "search-box-" + Math.round(Math.random() * 1000));
  const [searchString, setSearchString] = React.useState("");
  const [searchStatus, setSearchStatus] = React.useState();
  const searchStatusRef = React.useRef(searchStatus);
  searchStatusRef.current = searchStatus;
  const abortControllerRef = React.useRef(new AbortController());
  const inputRef = React.useRef(null);
  const searchHandle = React.useRef();
  const [searchResults, setSearchResults] = React.useState([]);
  const cancelSearch = React.useCallback(() => {
    if (searchHandle.current !== undefined) {
      window.cancelAnimationFrame(searchHandle.current);
      searchHandle.current = undefined;
      abortControllerRef.current.abort();
    }
  }, []);
  const cellYOffsetRef = React.useRef(cellYOffset);
  cellYOffsetRef.current = cellYOffset;
  const beginSearch = React.useCallback(str => {
    const regex = new RegExp(str.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"), "i");
    let startY = cellYOffsetRef.current;
    let searchStride = Math.min(10, rows);
    let rowsSearched = 0;
    setSearchStatus(undefined);
    setSearchResults([]);
    const runningResult = [];

    const tick = async () => {
      var _searchStatusRef$curr, _searchStatusRef$curr2;

      if (getCellsForSelection === undefined) return;
      const tStart = performance.now();
      const rowsLeft = rows - rowsSearched;
      let data = getCellsForSelection({
        x: 0,
        y: startY,
        width: columns.length,
        height: Math.min(searchStride, rowsLeft, rows - startY)
      }, abortControllerRef.current.signal);

      if (typeof data === "function") {
        data = await data();
      }

      let added = false;
      data.forEach((d, row) => d.forEach((cell, col) => {
        let testString;

        switch (cell.kind) {
          case _dataGridTypes.GridCellKind.Text:
          case _dataGridTypes.GridCellKind.Number:
            testString = cell.displayData;
            break;

          case _dataGridTypes.GridCellKind.Uri:
          case _dataGridTypes.GridCellKind.Markdown:
            testString = cell.data;
            break;

          case _dataGridTypes.GridCellKind.Boolean:
            testString = typeof cell.data === "boolean" ? cell.data.toString() : undefined;
            break;

          case _dataGridTypes.GridCellKind.Image:
          case _dataGridTypes.GridCellKind.Bubble:
            testString = cell.data.join("🐳");
            break;

          case _dataGridTypes.GridCellKind.Custom:
            testString = cell.copyData;
            break;
        }

        if (testString !== undefined && regex.test(testString)) {
          runningResult.push([col, row + startY]);
          added = true;
        }
      }));
      const tEnd = performance.now();

      if (added) {
        setSearchResults([...runningResult]);
      }

      rowsSearched += data.length;
      (0, _support.assert)(rowsSearched <= rows);
      const selectedIndex = (_searchStatusRef$curr = (_searchStatusRef$curr2 = searchStatusRef.current) === null || _searchStatusRef$curr2 === void 0 ? void 0 : _searchStatusRef$curr2.selectedIndex) !== null && _searchStatusRef$curr !== void 0 ? _searchStatusRef$curr : -1;
      setSearchStatus({
        results: runningResult.length,
        rowsSearched,
        selectedIndex
      });
      onSearchResultsChanged === null || onSearchResultsChanged === void 0 ? void 0 : onSearchResultsChanged(runningResult, selectedIndex);

      if (startY + searchStride >= rows) {
        startY = 0;
      } else {
        startY += searchStride;
      }

      const tElapsed = tEnd - tStart;
      const rounded = Math.max(tElapsed, 1);
      const scalar = targetSearchTimeMS / rounded;
      searchStride = Math.ceil(searchStride * scalar);

      if (rowsSearched < rows && runningResult.length < 1000) {
        searchHandle.current = window.requestAnimationFrame(tick);
      }
    };

    cancelSearch();
    searchHandle.current = window.requestAnimationFrame(tick);
  }, [cancelSearch, columns.length, getCellsForSelection, onSearchResultsChanged, rows]);
  const onClose = React.useCallback(() => {
    var _canvasRef$current;

    onSearchClose === null || onSearchClose === void 0 ? void 0 : onSearchClose();
    setSearchStatus(undefined);
    setSearchResults([]);
    onSearchResultsChanged === null || onSearchResultsChanged === void 0 ? void 0 : onSearchResultsChanged([], -1);
    cancelSearch();
    canvasRef === null || canvasRef === void 0 ? void 0 : (_canvasRef$current = canvasRef.current) === null || _canvasRef$current === void 0 ? void 0 : _canvasRef$current.focus();
  }, [cancelSearch, canvasRef, onSearchClose, onSearchResultsChanged]);
  const onSearchChange = React.useCallback(event => {
    setSearchString(event.target.value);

    if (event.target.value === "") {
      setSearchStatus(undefined);
      setSearchResults([]);
      cancelSearch();
    } else {
      beginSearch(event.target.value);
    }
  }, [beginSearch, cancelSearch]);
  React.useEffect(() => {
    if (showSearch && inputRef.current !== null) {
      setSearchString("");
      inputRef.current.focus({
        preventScroll: true
      });
    }
  }, [showSearch]);
  const onNext = React.useCallback(ev => {
    var _ev$stopPropagation;

    ev === null || ev === void 0 ? void 0 : (_ev$stopPropagation = ev.stopPropagation) === null || _ev$stopPropagation === void 0 ? void 0 : _ev$stopPropagation.call(ev);
    if (searchStatus === undefined) return;
    const newIndex = (searchStatus.selectedIndex + 1) % searchStatus.results;
    setSearchStatus({ ...searchStatus,
      selectedIndex: newIndex
    });
    onSearchResultsChanged === null || onSearchResultsChanged === void 0 ? void 0 : onSearchResultsChanged(searchResults, newIndex);
  }, [searchStatus, onSearchResultsChanged, searchResults]);
  const onPrev = React.useCallback(ev => {
    var _ev$stopPropagation2;

    ev === null || ev === void 0 ? void 0 : (_ev$stopPropagation2 = ev.stopPropagation) === null || _ev$stopPropagation2 === void 0 ? void 0 : _ev$stopPropagation2.call(ev);
    if (searchStatus === undefined) return;
    let newIndex = (searchStatus.selectedIndex - 1) % searchStatus.results;
    if (newIndex < 0) newIndex += searchStatus.results;
    setSearchStatus({ ...searchStatus,
      selectedIndex: newIndex
    });
    onSearchResultsChanged === null || onSearchResultsChanged === void 0 ? void 0 : onSearchResultsChanged(searchResults, newIndex);
  }, [onSearchResultsChanged, searchResults, searchStatus]);
  const onSearchKeyDown = React.useCallback(event => {
    if ((event.ctrlKey || event.metaKey) && event.key === "f" || event.key === "Escape") {
      onClose();
      event.stopPropagation();
      event.preventDefault();
    } else if (event.key === "Enter") {
      if (event.shiftKey) {
        onPrev();
      } else {
        onNext();
      }
    }
  }, [onClose, onNext, onPrev]);
  React.useEffect(() => {
    return () => {
      cancelSearch();
    };
  }, [cancelSearch]);
  const searchbox = React.useMemo(() => {
    var _searchStatus$rowsSea, _searchStatus$results, _searchStatus$results2;

    let resultString;

    if (searchStatus !== undefined) {
      if (searchStatus.results >= 1000) {
        resultString = `over 1000`;
      } else {
        resultString = `${searchStatus.results} result${searchStatus.results !== 1 ? "s" : ""}`;
      }

      if (searchStatus.selectedIndex >= 0) {
        resultString = `${searchStatus.selectedIndex + 1} of ${resultString}`;
      }
    }

    const cancelEvent = ev => {
      ev.stopPropagation();
    };

    const rowsSearchedProgress = Math.floor(((_searchStatus$rowsSea = searchStatus === null || searchStatus === void 0 ? void 0 : searchStatus.rowsSearched) !== null && _searchStatus$rowsSea !== void 0 ? _searchStatus$rowsSea : 0) / rows * 100);
    const progressStyle = {
      width: `${rowsSearchedProgress}%`
    };
    return React.createElement(_dataGridSearchStyle.SearchWrapper, {
      showSearch: showSearch,
      onMouseDown: cancelEvent,
      onMouseMove: cancelEvent,
      onMouseUp: cancelEvent,
      onClick: cancelEvent
    }, React.createElement("div", {
      className: "search-bar-inner"
    }, React.createElement("input", {
      id: searchID,
      "aria-hidden": !showSearch,
      "data-testid": "search-input",
      ref: inputRef,
      onChange: onSearchChange,
      value: searchString,
      tabIndex: showSearch ? undefined : -1,
      onKeyDownCapture: onSearchKeyDown
    }), React.createElement("button", {
      "aria-label": "Previous Result",
      "aria-hidden": !showSearch,
      tabIndex: showSearch ? undefined : -1,
      onClick: onPrev,
      disabled: ((_searchStatus$results = searchStatus === null || searchStatus === void 0 ? void 0 : searchStatus.results) !== null && _searchStatus$results !== void 0 ? _searchStatus$results : 0) === 0
    }, upArrow), React.createElement("button", {
      "aria-label": "Next Result",
      "aria-hidden": !showSearch,
      tabIndex: showSearch ? undefined : -1,
      onClick: onNext,
      disabled: ((_searchStatus$results2 = searchStatus === null || searchStatus === void 0 ? void 0 : searchStatus.results) !== null && _searchStatus$results2 !== void 0 ? _searchStatus$results2 : 0) === 0
    }, downArrow), onSearchClose !== undefined && React.createElement("button", {
      "aria-label": "Close Search",
      "aria-hidden": !showSearch,
      "data-testid": "search-close-button",
      tabIndex: showSearch ? undefined : -1,
      onClick: onClose
    }, closeX)), searchStatus !== undefined ? React.createElement(React.Fragment, null, React.createElement("div", {
      className: "search-status"
    }, React.createElement("div", {
      "data-testid": "search-result-area"
    }, resultString)), React.createElement("div", {
      className: "search-progress",
      style: progressStyle
    })) : React.createElement("div", {
      className: "search-status"
    }, React.createElement("label", {
      htmlFor: searchID
    }, "Type to search")));
  }, [onClose, onNext, onPrev, onSearchChange, onSearchClose, onSearchKeyDown, rows, searchStatus, searchString, showSearch, searchID]);
  return React.createElement(React.Fragment, null, React.createElement(_scrollingDataGrid.default, {
    accessibilityHeight: p.accessibilityHeight,
    cellXOffset: p.cellXOffset,
    cellYOffset: p.cellYOffset,
    columns: p.columns,
    enableGroups: p.enableGroups,
    freezeColumns: p.freezeColumns,
    preventDiagonalScrolling: p.preventDiagonalScrolling,
    getCellContent: p.getCellContent,
    groupHeaderHeight: p.groupHeaderHeight,
    onCanvasFocused: p.onCanvasFocused,
    onCanvasBlur: p.onCanvasBlur,
    isFocused: p.isFocused,
    headerHeight: p.headerHeight,
    isFilling: p.isFilling,
    fillHandle: p.fillHandle,
    lastRowSticky: p.lastRowSticky,
    firstColAccessible: p.firstColAccessible,
    lockColumns: p.lockColumns,
    rowHeight: p.rowHeight,
    onMouseMove: p.onMouseMove,
    rows: p.rows,
    highlightRegions: p.highlightRegions,
    verticalBorder: p.verticalBorder,
    canvasRef: p.canvasRef,
    className: p.className,
    disabledRows: p.disabledRows,
    drawCustomCell: p.drawCustomCell,
    drawHeader: p.drawHeader,
    experimental: p.experimental,
    getGroupDetails: p.getGroupDetails,
    getRowThemeOverride: p.getRowThemeOverride,
    gridRef: p.gridRef,
    headerIcons: p.headerIcons,
    isDraggable: p.isDraggable,
    minColumnWidth: p.minColumnWidth,
    maxColumnWidth: p.maxColumnWidth,
    onCellFocused: p.onCellFocused,
    onColumnMoved: p.onColumnMoved,
    onColumnResized: p.onColumnResized,
    onColumnResize: p.onColumnResize,
    onColumnResizeStart: p.onColumnResizeStart,
    onColumnResizeEnd: p.onColumnResizeEnd,
    onDragStart: p.onDragStart,
    onHeaderMenuClick: p.onHeaderMenuClick,
    onItemHovered: p.onItemHovered,
    onKeyUp: p.onKeyUp,
    onMouseDown: p.onMouseDown,
    onMouseUp: p.onMouseUp,
    onRowMoved: p.onRowMoved,
    onVisibleRegionChanged: p.onVisibleRegionChanged,
    overscrollX: p.overscrollX,
    overscrollY: p.overscrollY,
    rightElement: p.rightElement,
    rightElementSticky: p.rightElementSticky,
    scrollRef: p.scrollRef,
    scrollToEnd: p.scrollToEnd,
    selection: p.selection,
    showMinimap: p.showMinimap,
    smoothScrollX: p.smoothScrollX,
    smoothScrollY: p.smoothScrollY,
    translateX: p.translateX,
    translateY: p.translateY,
    onKeyDown: p.onKeyDown,
    prelightCells: searchResults
  }), searchbox);
};

var _default = DataGridSearch;
exports.default = _default;