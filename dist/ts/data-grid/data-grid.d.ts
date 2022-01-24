import * as React from "react";
import { GridColumn, Rectangle, GridSelection, GridMouseEventArgs, GridDragEventArgs, GridKeyEventArgs, InnerGridCell, CompactSelection, DrawCustomCellCallback, DrawHeaderCallback } from "./data-grid-types";
import { SpriteMap } from "./data-grid-sprites";
import { GroupDetailsCallback } from "./data-grid-render";
export interface DataGridProps {
    readonly width: number;
    readonly height: number;
    readonly cellXOffset: number;
    readonly cellYOffset: number;
    readonly translateX?: number;
    readonly translateY?: number;
    readonly freezeColumns: number;
    readonly lastRowSticky: boolean;
    readonly allowResize?: boolean;
    readonly isResizing: boolean;
    readonly isDragging: boolean;
    readonly columns: readonly GridColumn[];
    readonly rows: number;
    readonly headerHeight: number;
    readonly groupHeaderHeight: number;
    readonly enableGroups: boolean;
    readonly rowHeight: number | ((index: number) => number);
    readonly canvasRef?: React.MutableRefObject<HTMLCanvasElement | null>;
    readonly eventTargetRef?: React.MutableRefObject<HTMLDivElement | null>;
    readonly className?: string;
    readonly getCellContent: (cell: readonly [number, number]) => InnerGridCell;
    readonly getGroupDetails?: GroupDetailsCallback;
    readonly onHeaderMenuClick?: (col: number, screenPosition: Rectangle) => void;
    readonly selectedRows?: CompactSelection;
    readonly selectedColumns?: CompactSelection;
    readonly selectedCell?: GridSelection;
    readonly prelightCells?: readonly (readonly [number, number])[];
    readonly disabledRows?: CompactSelection;
    readonly onItemHovered?: (args: GridMouseEventArgs) => void;
    readonly onMouseMove: (args: GridMouseEventArgs) => void;
    readonly onMouseDown?: (args: GridMouseEventArgs) => void;
    readonly onMouseUp?: (args: GridMouseEventArgs, isOutside: boolean) => void;
    readonly onCellFocused?: (args: readonly [number, number]) => void;
    readonly onMouseMoveRaw?: (event: MouseEvent) => void;
    readonly onKeyDown?: (event: GridKeyEventArgs) => void;
    readonly onKeyUp?: (event: GridKeyEventArgs) => void;
    readonly verticalBorder: (col: number) => boolean;
    readonly isDraggable?: boolean;
    readonly onDragStart?: (args: GridDragEventArgs) => void;
    readonly drawCustomCell?: DrawCustomCellCallback;
    readonly drawHeader?: DrawHeaderCallback;
    readonly dragAndDropState?: {
        src: number;
        dest: number;
    };
    readonly experimental?: {
        readonly paddingRight?: number;
        readonly paddingBottom?: number;
        readonly disableFirefoxRescaling?: boolean;
        readonly isSubGrid?: boolean;
    };
    readonly headerIcons?: SpriteMap;
}
declare type DamageUpdateList = readonly {
    cell: readonly [number, number];
}[];
export interface DataGridRef {
    focus: () => void;
    getBounds: (col: number, row?: number) => Rectangle | undefined;
    damage: (cells: DamageUpdateList) => void;
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<DataGridProps & React.RefAttributes<DataGridRef>>>;
export default _default;
