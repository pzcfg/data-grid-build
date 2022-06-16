import * as React from "react";
import { Rectangle, GridSelection, GridMouseEventArgs, GridDragEventArgs, GridKeyEventArgs, InnerGridCell, CompactSelection, DrawCustomCellCallback, Item, DrawHeaderCallback, SizedGridColumn } from "./data-grid-types";
import { SpriteMap } from "./data-grid-sprites";
import { GetRowThemeCallback, GroupDetailsCallback, Highlight } from "./data-grid-render";
export interface DataGridProps {
    readonly width: number;
    readonly height: number;
    readonly cellXOffset: number;
    readonly cellYOffset: number;
    readonly translateX?: number;
    readonly translateY?: number;
    readonly accessibilityHeight: number;
    readonly freezeColumns: number;
    readonly lastRowSticky: boolean;
    readonly firstColAccessible: boolean;
    readonly allowResize?: boolean;
    readonly isResizing: boolean;
    readonly isDragging: boolean;
    readonly isFilling: boolean;
    readonly isFocused: boolean;
    readonly columns: readonly SizedGridColumn[];
    readonly rows: number;
    readonly headerHeight: number;
    readonly groupHeaderHeight: number;
    readonly enableGroups: boolean;
    readonly rowHeight: number | ((index: number) => number);
    readonly canvasRef?: React.MutableRefObject<HTMLCanvasElement | null>;
    readonly eventTargetRef?: React.MutableRefObject<HTMLDivElement | null>;
    readonly className?: string;
    readonly getCellContent: (cell: Item) => InnerGridCell;
    readonly getGroupDetails?: GroupDetailsCallback;
    readonly getRowThemeOverride?: GetRowThemeCallback;
    readonly onHeaderMenuClick?: (col: number, screenPosition: Rectangle) => void;
    readonly selection: GridSelection;
    readonly prelightCells?: readonly Item[];
    readonly highlightRegions?: readonly Highlight[];
    readonly fillHandle?: boolean;
    readonly disabledRows?: CompactSelection;
    readonly onItemHovered?: (args: GridMouseEventArgs) => void;
    readonly onMouseMove: (args: GridMouseEventArgs) => void;
    readonly onMouseDown?: (args: GridMouseEventArgs) => void;
    readonly onMouseUp?: (args: GridMouseEventArgs, isOutside: boolean) => void;
    readonly onCanvasFocused?: () => void;
    readonly onCanvasBlur?: () => void;
    readonly onCellFocused?: (args: Item) => void;
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
        readonly enableFirefoxRescaling?: boolean;
        readonly isSubGrid?: boolean;
        readonly strict?: boolean;
        readonly scrollbarWidthOverride?: number;
    };
    readonly headerIcons?: SpriteMap;
}
declare type DamageUpdateList = readonly {
    cell: Item;
}[];
export interface DataGridRef {
    focus: () => void;
    getBounds: (col: number, row?: number) => Rectangle | undefined;
    damage: (cells: DamageUpdateList) => void;
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<DataGridProps & React.RefAttributes<DataGridRef>>>;
export default _default;
