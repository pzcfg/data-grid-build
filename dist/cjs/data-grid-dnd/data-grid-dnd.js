"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _clamp = _interopRequireDefault(require("lodash/clamp"));

var React = _interopRequireWildcard(require("react"));

var _dataGrid = _interopRequireDefault(require("../data-grid/data-grid"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DataGridDnd = p => {
  const [resizeColStartX, setResizeColStartX] = React.useState();
  const [resizeCol, setResizeCol] = React.useState();
  const [dragCol, setDragCol] = React.useState();
  const [dropCol, setDropCol] = React.useState();
  const [dragColActive, setDragColActive] = React.useState(false);
  const [dragStartX, setDragStartX] = React.useState();
  const [dragRow, setDragRow] = React.useState();
  const [dropRow, setDropRow] = React.useState();
  const [dragRowActive, setDragRowActive] = React.useState(false);
  const [dragStartY, setDragStartY] = React.useState();
  const {
    onColumnMoved,
    onColumnResized,
    gridRef,
    maxColumnWidth,
    onHeaderMenuClick,
    onRowMoved,
    lockColumns,
    getCellContent
  } = p;
  const {
    onMouseDown,
    onMouseUp,
    onItemHovered,
    isDraggable = false,
    columns,
    selectedColumns
  } = p;
  const onItemHoveredImpl = React.useCallback(args => {
    const [col, row] = args.location;

    if (dragCol !== undefined && dropCol !== col && col >= lockColumns) {
      setDragColActive(true);
      setDropCol(col);
    } else if (dragRow !== undefined && row !== undefined) {
      setDragRowActive(true);
      setDropRow(Math.max(0, row));
    } else {
      onItemHovered === null || onItemHovered === void 0 ? void 0 : onItemHovered(args);
    }
  }, [dragCol, dragRow, dropCol, onItemHovered, lockColumns]);
  const canDragCol = onColumnMoved !== undefined;
  const onMouseDownImpl = React.useCallback(args => {
    let shouldFireEvent = true;
    const [col, row] = args.location;

    if (!isDraggable) {
      if (args.kind === "out-of-bounds" && args.isEdge) {
        var _gridRef$current;

        const bounds = gridRef === null || gridRef === void 0 ? void 0 : (_gridRef$current = gridRef.current) === null || _gridRef$current === void 0 ? void 0 : _gridRef$current.getBounds(columns.length - 1, -1);

        if (bounds !== undefined) {
          setResizeColStartX(bounds.x);
          setResizeCol(columns.length - 1);
        }
      } else if (args.kind === "header" && col >= lockColumns) {
        if (args.isEdge) {
          shouldFireEvent = false;
          setResizeColStartX(args.bounds.x);
          setResizeCol(col);
        } else if (args.kind === "header" && canDragCol) {
          setDragStartX(args.bounds.x);
          setDragCol(col);
        }
      } else if (args.kind === "cell" && lockColumns > 0 && col === 0 && row !== undefined && onRowMoved !== undefined) {
        setDragStartY(args.bounds.y);
        setDragRow(row);
      }
    }

    if (shouldFireEvent) onMouseDown === null || onMouseDown === void 0 ? void 0 : onMouseDown(args);
  }, [isDraggable, onMouseDown, lockColumns, onRowMoved, gridRef, columns.length, canDragCol]);
  const onHeaderMenuClickMangled = React.useCallback((col, screenPosition) => {
    if (dragColActive || dragRowActive) return;
    onHeaderMenuClick === null || onHeaderMenuClick === void 0 ? void 0 : onHeaderMenuClick(col, screenPosition);
  }, [dragColActive, dragRowActive, onHeaderMenuClick]);
  const lastResizeWidthRef = React.useRef(-1);
  const onMouseUpImpl = React.useCallback((args, isOutside) => {
    if (resizeCol !== undefined && (selectedColumns === null || selectedColumns === void 0 ? void 0 : selectedColumns.hasIndex(resizeCol)) === true) {
      for (const c of selectedColumns) {
        if (c === resizeCol) continue;
        onColumnResized === null || onColumnResized === void 0 ? void 0 : onColumnResized(columns[c], lastResizeWidthRef.current);
      }
    }

    lastResizeWidthRef.current = -1;
    setDragRow(undefined);
    setDropRow(undefined);
    setDragStartY(undefined);
    setDragRowActive(false);
    setDragCol(undefined);
    setDropCol(undefined);
    setDragStartX(undefined);
    setDragColActive(false);
    setResizeCol(undefined);
    setResizeColStartX(undefined);

    if (dragCol !== undefined && dropCol !== undefined) {
      onColumnMoved === null || onColumnMoved === void 0 ? void 0 : onColumnMoved(dragCol, dropCol);
    }

    if (dragRow !== undefined && dropRow !== undefined) {
      onRowMoved === null || onRowMoved === void 0 ? void 0 : onRowMoved(dragRow, dropRow);
    }

    onMouseUp === null || onMouseUp === void 0 ? void 0 : onMouseUp(args, isOutside);
  }, [columns, dragCol, dragRow, dropCol, dropRow, onColumnMoved, onColumnResized, onMouseUp, onRowMoved, resizeCol, selectedColumns]);
  const dragOffset = React.useMemo(() => {
    if (dragCol === undefined || dropCol === undefined) return undefined;
    if (dragCol === dropCol) return undefined;
    return {
      src: dragCol,
      dest: dropCol
    };
  }, [dragCol, dropCol]);
  const maxColumnWidthValue = maxColumnWidth === undefined ? 500 : maxColumnWidth < 50 ? 50 : maxColumnWidth;
  const onMouseMove = React.useCallback(event => {
    if (dragCol !== undefined && dragStartX !== undefined) {
      const diff = Math.abs(event.clientX - dragStartX);

      if (diff > 20) {
        setDragColActive(true);
      }
    } else if (dragRow !== undefined && dragStartY !== undefined) {
      const diff = Math.abs(event.clientY - dragStartY);

      if (diff > 20) {
        setDragRowActive(true);
      }
    } else if (resizeCol !== undefined && resizeColStartX !== undefined) {
      const column = columns[resizeCol];
      const newWidth = (0, _clamp.default)(event.clientX - resizeColStartX, 50, maxColumnWidthValue);
      onColumnResized === null || onColumnResized === void 0 ? void 0 : onColumnResized(column, newWidth);
      lastResizeWidthRef.current = newWidth;

      if (resizeCol !== undefined && (selectedColumns === null || selectedColumns === void 0 ? void 0 : selectedColumns.first()) === resizeCol) {
        for (const c of selectedColumns) {
          if (c === resizeCol) continue;
          onColumnResized === null || onColumnResized === void 0 ? void 0 : onColumnResized(columns[c], lastResizeWidthRef.current);
        }
      }
    }
  }, [dragCol, dragStartX, dragRow, dragStartY, resizeCol, resizeColStartX, columns, maxColumnWidthValue, onColumnResized, selectedColumns]);
  const getMangledCellContent = React.useCallback(cell => {
    if (dragRow === undefined || dropRow === undefined) return getCellContent(cell);
    let [col, row] = cell;

    if (row === dropRow) {
      row = dragRow;
    } else {
      if (row > dropRow) row -= 1;
      if (row >= dragRow) row += 1;
    }

    return getCellContent([col, row]);
  }, [dragRow, dropRow, getCellContent]);
  return React.createElement(_dataGrid.default, {
    cellXOffset: p.cellXOffset,
    cellYOffset: p.cellYOffset,
    columns: p.columns,
    enableGroups: p.enableGroups,
    freezeColumns: p.freezeColumns,
    onMouseMove: p.onMouseMove,
    groupHeaderHeight: p.groupHeaderHeight,
    headerHeight: p.headerHeight,
    height: p.height,
    lastRowSticky: p.lastRowSticky,
    rowHeight: p.rowHeight,
    rows: p.rows,
    verticalBorder: p.verticalBorder,
    width: p.width,
    canvasRef: p.canvasRef,
    className: p.className,
    disabledRows: p.disabledRows,
    drawCustomCell: p.drawCustomCell,
    drawHeader: p.drawHeader,
    eventTargetRef: p.eventTargetRef,
    experimental: p.experimental,
    getGroupDetails: p.getGroupDetails,
    headerIcons: p.headerIcons,
    isDraggable: p.isDraggable,
    onCellFocused: p.onCellFocused,
    onDragStart: p.onDragStart,
    onKeyDown: p.onKeyDown,
    onKeyUp: p.onKeyUp,
    prelightCells: p.prelightCells,
    selectedCell: p.selectedCell,
    selectedColumns: p.selectedColumns,
    selectedRows: p.selectedRows,
    translateX: p.translateX,
    translateY: p.translateY,
    getCellContent: getMangledCellContent,
    isResizing: resizeCol !== undefined,
    onHeaderMenuClick: onHeaderMenuClickMangled,
    isDragging: dragColActive,
    onItemHovered: onItemHoveredImpl,
    onMouseDown: onMouseDownImpl,
    allowResize: onColumnResized !== undefined,
    onMouseUp: onMouseUpImpl,
    dragAndDropState: dragOffset,
    onMouseMoveRaw: onMouseMove,
    ref: gridRef
  });
};

var _default = DataGridDnd;
exports.default = _default;