import * as React from "react";
import { GridCellKind } from "../data-grid/data-grid-types";
import ScrollingDataGrid from "../scrolling-data-grid/scrolling-data-grid";
import { SearchWrapper } from "./data-grid-search-style";
import { assert } from "../common/support";
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
    searchColOffset,
    showSearch = false,
    onSearchClose,
    canvasRef,
    cellYOffset,
    rows,
    columns,
    getCellContent
  } = p;
  const [searchString, setSearchString] = React.useState("");
  const [searchStatus, setSearchStatus] = React.useState();
  const searchStatusRef = React.useRef(searchStatus);
  searchStatusRef.current = searchStatus;
  const inputRef = React.useRef(null);
  const searchHandle = React.useRef();
  const [searchResults, setSearchResults] = React.useState([]);
  const cancelSearch = React.useCallback(() => {
    if (searchHandle.current !== undefined) {
      window.cancelAnimationFrame(searchHandle.current);
      searchHandle.current = undefined;
    }
  }, []);
  const getCellsForSelectionMangled = React.useCallback(selection => {
    if (getCellsForSelection !== undefined) return getCellsForSelection(selection.range);

    if (selection.range === undefined) {
      return [[getCellContent(selection.cell)]];
    }

    const range = selection.range;
    const result = [];

    for (let row = range.y; row < range.y + range.height; row++) {
      const inner = [];

      for (let col = range.x; col < range.x + range.width; col++) {
        inner.push(getCellContent([col + searchColOffset, row]));
      }

      result.push(inner);
    }

    return result;
  }, [getCellContent, getCellsForSelection, searchColOffset]);
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

    const tick = () => {
      var _searchStatusRef$curr, _searchStatusRef$curr2;

      const tStart = performance.now();
      const rowsLeft = rows - rowsSearched;
      const data = getCellsForSelectionMangled({
        cell: [0, 0],
        range: {
          x: 0,
          y: startY,
          width: columns.length - searchColOffset,
          height: Math.min(searchStride, rowsLeft, rows - startY)
        }
      });
      let added = false;
      data.forEach((d, row) => d.forEach((cell, col) => {
        let testString;

        switch (cell.kind) {
          case GridCellKind.Text:
          case GridCellKind.Number:
            testString = cell.displayData;
            break;

          case GridCellKind.Uri:
          case GridCellKind.Markdown:
            testString = cell.data;
            break;

          case GridCellKind.Boolean:
            testString = cell.data.toString();
            break;

          case GridCellKind.Image:
          case GridCellKind.Bubble:
            testString = cell.data.join("🐳");
            break;
        }

        if (testString !== undefined && regex.test(testString)) {
          runningResult.push([col + searchColOffset, row + startY]);
          added = true;
        }
      }));
      const tEnd = performance.now();

      if (added) {
        setSearchResults([...runningResult]);
      }

      rowsSearched += data.length;
      assert(rowsSearched <= rows);
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
  }, [cancelSearch, columns.length, getCellsForSelectionMangled, onSearchResultsChanged, rows, searchColOffset]);
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
    return React.createElement(SearchWrapper, {
      showSearch: showSearch,
      onMouseDown: cancelEvent,
      onMouseMove: cancelEvent,
      onMouseUp: cancelEvent,
      onClick: cancelEvent
    }, React.createElement("div", {
      className: "search-bar-inner"
    }, React.createElement("input", {
      "data-testid": "search-input",
      ref: inputRef,
      onChange: onSearchChange,
      value: searchString,
      tabIndex: showSearch ? undefined : -1,
      onKeyDownCapture: onSearchKeyDown
    }), React.createElement("button", {
      tabIndex: showSearch ? undefined : -1,
      onClick: onPrev,
      disabled: ((_searchStatus$results = searchStatus === null || searchStatus === void 0 ? void 0 : searchStatus.results) !== null && _searchStatus$results !== void 0 ? _searchStatus$results : 0) === 0
    }, upArrow), React.createElement("button", {
      tabIndex: showSearch ? undefined : -1,
      onClick: onNext,
      disabled: ((_searchStatus$results2 = searchStatus === null || searchStatus === void 0 ? void 0 : searchStatus.results) !== null && _searchStatus$results2 !== void 0 ? _searchStatus$results2 : 0) === 0
    }, downArrow), onSearchClose !== undefined && React.createElement("button", {
      "data-testid": "search-close-button",
      tabIndex: showSearch ? undefined : -1,
      onClick: onClose
    }, closeX)), searchStatus !== undefined && React.createElement(React.Fragment, null, React.createElement("div", {
      className: "search-status"
    }, React.createElement("div", {
      "data-testid": "search-result-area"
    }, resultString)), React.createElement("div", {
      className: "search-progress",
      style: progressStyle
    })));
  }, [onClose, onNext, onPrev, onSearchChange, onSearchClose, onSearchKeyDown, rows, searchStatus, searchString, showSearch]);
  return React.createElement(React.Fragment, null, React.createElement(ScrollingDataGrid, {
    cellXOffset: p.cellXOffset,
    cellYOffset: p.cellYOffset,
    columns: p.columns,
    enableGroups: p.enableGroups,
    freezeColumns: p.freezeColumns,
    getCellContent: p.getCellContent,
    groupHeaderHeight: p.groupHeaderHeight,
    headerHeight: p.headerHeight,
    lastRowSticky: p.lastRowSticky,
    lockColumns: p.lockColumns,
    rowHeight: p.rowHeight,
    onMouseMove: p.onMouseMove,
    rows: p.rows,
    verticalBorder: p.verticalBorder,
    canvasRef: p.canvasRef,
    className: p.className,
    disabledRows: p.disabledRows,
    drawCustomCell: p.drawCustomCell,
    drawHeader: p.drawHeader,
    experimental: p.experimental,
    getGroupDetails: p.getGroupDetails,
    gridRef: p.gridRef,
    headerIcons: p.headerIcons,
    isDraggable: p.isDraggable,
    maxColumnWidth: p.maxColumnWidth,
    onCellFocused: p.onCellFocused,
    onColumnMoved: p.onColumnMoved,
    onColumnResized: p.onColumnResized,
    onDragStart: p.onDragStart,
    onHeaderMenuClick: p.onHeaderMenuClick,
    onItemHovered: p.onItemHovered,
    onKeyUp: p.onKeyUp,
    onMouseDown: p.onMouseDown,
    onMouseUp: p.onMouseUp,
    onRowMoved: p.onRowMoved,
    onVisibleRegionChanged: p.onVisibleRegionChanged,
    overscrollX: p.overscrollX,
    rightElement: p.rightElement,
    rightElementSticky: p.rightElementSticky,
    scrollRef: p.scrollRef,
    scrollToEnd: p.scrollToEnd,
    selectedCell: p.selectedCell,
    selectedColumns: p.selectedColumns,
    selectedRows: p.selectedRows,
    showMinimap: p.showMinimap,
    smoothScrollX: p.smoothScrollX,
    smoothScrollY: p.smoothScrollY,
    translateX: p.translateX,
    translateY: p.translateY,
    onKeyDown: p.onKeyDown,
    prelightCells: searchResults
  }), searchbox);
};

export default DataGridSearch;