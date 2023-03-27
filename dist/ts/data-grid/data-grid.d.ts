import * as React from "react";
import type { Theme } from "../common/styles";
import { Rectangle, GridSelection, GridMouseEventArgs, GridDragEventArgs, GridKeyEventArgs, InnerGridCell, CompactSelection, DrawCustomCellCallback, Item, DrawHeaderCallback, InnerGridColumn, TrailingRowType, ImageWindowLoader } from "./data-grid-types";
import { SpriteMap } from "./data-grid-sprites";
import { GetRowThemeCallback, GroupDetailsCallback, Highlight } from "./data-grid-render";
import type { CellRenderer } from "./cells/cell-types";
export interface DataGridProps {
    readonly width: number;
    readonly height: number;
    readonly cellXOffset: number;
    readonly cellYOffset: number;
    readonly translateX: number | undefined;
    readonly translateY: number | undefined;
    readonly accessibilityHeight: number;
    readonly freezeColumns: number;
    readonly trailingRowType: TrailingRowType;
    readonly firstColAccessible: boolean;
    /**
     * Enables or disables the overlay shadow when scrolling horizontally
     * @group Style
     */
    readonly fixedShadowX: boolean | undefined;
    /**
     * Enables or disables the overlay shadow when scrolling vertical
     * @group Style
     */
    readonly fixedShadowY: boolean | undefined;
    readonly allowResize: boolean | undefined;
    readonly isResizing: boolean;
    readonly isDragging: boolean;
    readonly isFilling: boolean;
    readonly isFocused: boolean;
    readonly columns: readonly InnerGridColumn[];
    /**
     * The number of rows in the grid.
     * @group Data
     */
    readonly rows: number;
    readonly headerHeight: number;
    readonly groupHeaderHeight: number;
    readonly enableGroups: boolean;
    readonly rowHeight: number | ((index: number) => number);
    readonly canvasRef: React.MutableRefObject<HTMLCanvasElement | null> | undefined;
    readonly eventTargetRef: React.MutableRefObject<HTMLDivElement | null> | undefined;
    readonly getCellContent: (cell: Item, forceStrict?: boolean) => InnerGridCell;
    /**
     * Provides additional details about groups to extend group functionality.
     * @group Data
     */
    readonly getGroupDetails: GroupDetailsCallback | undefined;
    /**
     * Provides per row theme overrides.
     * @group Style
     */
    readonly getRowThemeOverride: GetRowThemeCallback | undefined;
    /**
     * Emitted when a header menu disclosure indicator is clicked.
     * @group Events
     */
    readonly onHeaderMenuClick: ((col: number, screenPosition: Rectangle) => void) | undefined;
    readonly selection: GridSelection;
    readonly prelightCells: readonly Item[] | undefined;
    /**
     * Highlight regions provide hints to users about relations between cells and selections.
     * @group Selection
     */
    readonly highlightRegions: readonly Highlight[] | undefined;
    /**
     * Enabled/disables the fill handle.
     * @defaultValue false
     * @group Editing
     */
    readonly fillHandle: boolean | undefined;
    readonly disabledRows: CompactSelection | undefined;
    /**
     * Allows passing a custom image window loader.
     * @group Advanced
     */
    readonly imageWindowLoader: ImageWindowLoader | undefined;
    /**
     * Emitted when an item is hovered.
     * @group Events
     */
    readonly onItemHovered: (args: GridMouseEventArgs) => void;
    readonly onMouseMove: (args: GridMouseEventArgs) => void;
    readonly onMouseDown: (args: GridMouseEventArgs) => void;
    readonly onMouseUp: (args: GridMouseEventArgs, isOutside: boolean) => void;
    readonly onContextMenu: (args: GridMouseEventArgs, preventDefault: () => void) => void;
    readonly onCanvasFocused: () => void;
    readonly onCanvasBlur: () => void;
    readonly onCellFocused: (args: Item) => void;
    readonly onMouseMoveRaw: (event: MouseEvent) => void;
    /**
     * Emitted when the canvas receives a key down event.
     * @group Events
     */
    readonly onKeyDown: (event: GridKeyEventArgs) => void;
    /**
     * Emitted when the canvas receives a key up event.
     * @group Events
     */
    readonly onKeyUp: ((event: GridKeyEventArgs) => void) | undefined;
    readonly verticalBorder: (col: number) => boolean;
    /**
     * Determines what can be dragged using HTML drag and drop
     * @defaultValue false
     * @group Drag and Drop
     */
    readonly isDraggable: boolean | "cell" | "header" | undefined;
    /**
     * If `isDraggable` is set, the grid becomes HTML draggable, and `onDragStart` will be called when dragging starts.
     * You can use this to build a UI where the user can drag the Grid around.
     * @group Drag and Drop
     */
    readonly onDragStart: (args: GridDragEventArgs) => void;
    readonly onDragEnd: () => void;
    /** @group Drag and Drop */
    readonly onDragOverCell: ((cell: Item, dataTransfer: DataTransfer | null) => void) | undefined;
    /** @group Drag and Drop */
    readonly onDragLeave: (() => void) | undefined;
    /**
     * Called when a HTML Drag and Drop event is ended on the data grid.
     * @group Drag and Drop
     */
    readonly onDrop: ((cell: Item, dataTransfer: DataTransfer | null) => void) | undefined;
    readonly drawCustomCell: DrawCustomCellCallback | undefined;
    /**
     * Overrides the rendering of a header. The grid will call this for every header it needs to render. Header
     * rendering is not as well optimized because they do not redraw as often, but very heavy drawing methods can
     * negatively impact horizontal scrolling performance.
     *
     * It is possible to return `false` after rendering just a background and the regular foreground rendering
     * will happen.
     * @group Drawing
     * @returns `false` if default header rendering should still happen, `true` to cancel rendering.
     */
    readonly drawHeader: DrawHeaderCallback | undefined;
    /**
     * Controls the drawing of the focus ring.
     * @defaultValue true
     * @group Style
     */
    readonly drawFocusRing: boolean | undefined;
    readonly dragAndDropState: {
        src: number;
        dest: number;
    } | undefined;
    /**
     * Experimental features
     * @group Advanced
     * @experimental
     */
    readonly experimental: {
        readonly paddingRight?: number;
        readonly paddingBottom?: number;
        readonly enableFirefoxRescaling?: boolean;
        readonly isSubGrid?: boolean;
        readonly strict?: boolean;
        readonly scrollbarWidthOverride?: number;
        readonly hyperWrapping?: boolean;
        readonly renderStrategy?: "single-buffer" | "double-buffer" | "direct";
    } | undefined;
    /**
     * Additional header icons for use by `GridColumn`.
     *
     * Providing custom header icons to the data grid must be done with a somewhat non-standard mechanism to allow
     * theming and scaling. The `headerIcons` property takes a dictionary which maps icon names to functions which can
     * take a foreground and background color and returns back a string representation of an svg. The svg should contain
     * a header similar to this `<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">` and
     * interpolate the fg/bg colors into the string.
     *
     * We recognize this process is not fantastic from a graphics workflow standpoint, improvements are very welcome
     * here.
     *
     * @group Style
     */
    readonly headerIcons: SpriteMap | undefined;
    /** Controls smooth scrolling in the data grid. If smooth scrolling is not enabled the grid will always be cell
     * aligned.
     * @defaultValue `false`
     * @group Style
     */
    readonly smoothScrollX: boolean | undefined;
    /** Controls smooth scrolling in the data grid. If smooth scrolling is not enabled the grid will always be cell
     * aligned.
     * @defaultValue `false`
     * @group Style
     */
    readonly smoothScrollY: boolean | undefined;
    readonly theme: Theme;
    readonly getCellRenderer: <T extends InnerGridCell>(cell: T) => CellRenderer<T> | undefined;
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
//# sourceMappingURL=data-grid.d.ts.map