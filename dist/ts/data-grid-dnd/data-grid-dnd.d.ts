import * as React from "react";
import { DataGridProps, DataGridRef } from "../data-grid/data-grid";
import { GridColumn } from "../data-grid/data-grid-types";
declare type Props = Omit<DataGridProps, "dragAndDropState" | "isResizing" | "isDragging" | "onMouseMoveRaw" | "allowResize">;
export interface DataGridDndProps extends Props {
    readonly onRowMoved?: (startIndex: number, endIndex: number) => void;
    readonly onColumnMoved?: (startIndex: number, endIndex: number) => void;
    /**
     * @deprecated Use onColumnResize instead. It's the same thing, just fixes the naming convention.
     * This will be removed in a future version.
     */
    readonly onColumnResized?: (column: GridColumn, newSize: number) => void;
    readonly onColumnResize?: (column: GridColumn, newSize: number) => void;
    readonly onColumnResizeStart?: (column: GridColumn, newSize: number) => void;
    readonly onColumnResizeEnd?: (column: GridColumn, newSize: number) => void;
    readonly gridRef?: React.MutableRefObject<DataGridRef | null>;
    readonly maxColumnWidth: number;
    readonly minColumnWidth: number;
    readonly lockColumns: number;
}
declare const DataGridDnd: React.FunctionComponent<DataGridDndProps>;
export default DataGridDnd;
