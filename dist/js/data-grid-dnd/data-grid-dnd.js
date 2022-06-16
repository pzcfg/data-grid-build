import clamp from "lodash/clamp.js";
import * as React from "react";
import DataGrid from "../data-grid/data-grid.js";
let warned = false;

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
    onColumnResize,
    onColumnResizeStart,
    onColumnResizeEnd,
    gridRef,
    maxColumnWidth,
    minColumnWidth,
    onHeaderMenuClick,
    onRowMoved,
    lockColumns,
    getCellContent
  } = p;

  if (process.env.NODE_ENV !== "production" && onColumnResized !== undefined && !warned) {
    console.warn("onColumnResized has been renamed to onColumnResize and will be removed in a future version.");
    warned = true;
  }

  const {
    onMouseDown,
    onMouseUp,
    onItemHovered,
    isDraggable = false,
    columns,
    selection
  } = p;
  const selectedColumns = selection.columns;
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

    if (args.button === 0) {
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
            onColumnResizeStart === null || onColumnResizeStart === void 0 ? void 0 : onColumnResizeStart(columns[col], args.bounds.width);
          } else if (args.kind === "header" && canDragCol) {
            setDragStartX(args.bounds.x);
            setDragCol(col);
          }
        } else if (args.kind === "cell" && lockColumns > 0 && col === 0 && row !== undefined && onRowMoved !== undefined) {
          setDragStartY(args.bounds.y);
          setDragRow(row);
        }
      }
    }

    if (shouldFireEvent) onMouseDown === null || onMouseDown === void 0 ? void 0 : onMouseDown(args);
  }, [onMouseDown, isDraggable, lockColumns, onRowMoved, gridRef, columns, canDragCol, onColumnResizeStart]);
  const onHeaderMenuClickMangled = React.useCallback((col, screenPosition) => {
    if (dragColActive || dragRowActive) return;
    onHeaderMenuClick === null || onHeaderMenuClick === void 0 ? void 0 : onHeaderMenuClick(col, screenPosition);
  }, [dragColActive, dragRowActive, onHeaderMenuClick]);
  const lastResizeWidthRef = React.useRef(-1);
  const onMouseUpImpl = React.useCallback((args, isOutside) => {
    if (args.button === 0) {
      if (resizeCol !== undefined) {
        if ((selectedColumns === null || selectedColumns === void 0 ? void 0 : selectedColumns.hasIndex(resizeCol)) === true) {
          for (const c of selectedColumns) {
            if (c === resizeCol) continue;
            onColumnResized === null || onColumnResized === void 0 ? void 0 : onColumnResized(columns[c], lastResizeWidthRef.current);
            onColumnResize === null || onColumnResize === void 0 ? void 0 : onColumnResize(columns[c], lastResizeWidthRef.current);
          }
        }

        onColumnResizeEnd === null || onColumnResizeEnd === void 0 ? void 0 : onColumnResizeEnd(columns[resizeCol], lastResizeWidthRef.current);

        for (const c of selectedColumns) {
          if (c === resizeCol) continue;
          onColumnResizeEnd === null || onColumnResizeEnd === void 0 ? void 0 : onColumnResizeEnd(columns[c], lastResizeWidthRef.current);
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
    }

    onMouseUp === null || onMouseUp === void 0 ? void 0 : onMouseUp(args, isOutside);
  }, [onMouseUp, resizeCol, selectedColumns, dragCol, dropCol, dragRow, dropRow, onColumnResizeEnd, columns, onColumnResized, onColumnResize, onColumnMoved, onRowMoved]);
  const dragOffset = React.useMemo(() => {
    if (dragCol === undefined || dropCol === undefined) return undefined;
    if (dragCol === dropCol) return undefined;
    return {
      src: dragCol,
      dest: dropCol
    };
  }, [dragCol, dropCol]);
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
      const newWidth = clamp(event.clientX - resizeColStartX, minColumnWidth, maxColumnWidth);
      onColumnResized === null || onColumnResized === void 0 ? void 0 : onColumnResized(column, newWidth);
      onColumnResize === null || onColumnResize === void 0 ? void 0 : onColumnResize(column, newWidth);
      lastResizeWidthRef.current = newWidth;

      if ((selectedColumns === null || selectedColumns === void 0 ? void 0 : selectedColumns.first()) === resizeCol) {
        for (const c of selectedColumns) {
          if (c === resizeCol) continue;
          onColumnResized === null || onColumnResized === void 0 ? void 0 : onColumnResized(columns[c], lastResizeWidthRef.current);
          onColumnResize === null || onColumnResize === void 0 ? void 0 : onColumnResize(columns[c], lastResizeWidthRef.current);
        }
      }
    }
  }, [dragCol, dragStartX, dragRow, dragStartY, resizeCol, resizeColStartX, columns, minColumnWidth, maxColumnWidth, onColumnResized, onColumnResize, selectedColumns]);
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
  return React.createElement(DataGrid, {
    accessibilityHeight: p.accessibilityHeight,
    cellXOffset: p.cellXOffset,
    cellYOffset: p.cellYOffset,
    columns: p.columns,
    enableGroups: p.enableGroups,
    freezeColumns: p.freezeColumns,
    onCanvasFocused: p.onCanvasFocused,
    onCanvasBlur: p.onCanvasBlur,
    isFocused: p.isFocused,
    onMouseMove: p.onMouseMove,
    groupHeaderHeight: p.groupHeaderHeight,
    fillHandle: p.fillHandle,
    headerHeight: p.headerHeight,
    height: p.height,
    lastRowSticky: p.lastRowSticky,
    rowHeight: p.rowHeight,
    rows: p.rows,
    highlightRegions: p.highlightRegions,
    verticalBorder: p.verticalBorder,
    width: p.width,
    canvasRef: p.canvasRef,
    className: p.className,
    disabledRows: p.disabledRows,
    isFilling: p.isFilling,
    firstColAccessible: p.firstColAccessible,
    drawCustomCell: p.drawCustomCell,
    drawHeader: p.drawHeader,
    eventTargetRef: p.eventTargetRef,
    experimental: p.experimental,
    getGroupDetails: p.getGroupDetails,
    getRowThemeOverride: p.getRowThemeOverride,
    headerIcons: p.headerIcons,
    isDraggable: p.isDraggable,
    onCellFocused: p.onCellFocused,
    onDragStart: p.onDragStart,
    onKeyDown: p.onKeyDown,
    onKeyUp: p.onKeyUp,
    prelightCells: p.prelightCells,
    selection: p.selection,
    translateX: p.translateX,
    translateY: p.translateY,
    getCellContent: getMangledCellContent,
    isResizing: resizeCol !== undefined,
    onHeaderMenuClick: onHeaderMenuClickMangled,
    isDragging: dragColActive,
    onItemHovered: onItemHoveredImpl,
    onMouseDown: onMouseDownImpl,
    allowResize: onColumnResized !== undefined || onColumnResize !== undefined,
    onMouseUp: onMouseUpImpl,
    dragAndDropState: dragOffset,
    onMouseMoveRaw: onMouseMove,
    ref: gridRef
  });
};

export default DataGridDnd;