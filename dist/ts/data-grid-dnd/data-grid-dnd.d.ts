import * as React from "react";
import { DataGridProps, DataGridRef } from "../data-grid/data-grid";
import type { GridColumn } from "../data-grid/data-grid-types";
declare type Props = Omit<DataGridProps, "dragAndDropState" | "isResizing" | "isDragging" | "onMouseMoveRaw" | "allowResize">;
export interface DataGridDndProps extends Props {
    readonly onRowMoved?: (startIndex: number, endIndex: number) => void;
    readonly onColumnMoved?: (startIndex: number, endIndex: number) => void;
    readonly onColumnResize?: (column: GridColumn, newSize: number, colIndex: number) => void;
    readonly onColumnResizeStart?: (column: GridColumn, newSize: number, colIndex: number) => void;
    readonly onColumnResizeEnd?: (column: GridColumn, newSize: number, colIndex: number) => void;
    readonly gridRef?: React.MutableRefObject<DataGridRef | null>;
    readonly maxColumnWidth: number;
    readonly minColumnWidth: number;
    readonly lockColumns: number;
    readonly smoothScrollX?: boolean;
    readonly smoothScrollY?: boolean;
}
declare const DataGridDnd: React.FunctionComponent<DataGridDndProps>;
export default DataGridDnd;
