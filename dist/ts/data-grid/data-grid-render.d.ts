/// <reference types="react" />
import ImageWindowLoader from "../common/image-window-loader";
import type { GridSelection, DrawHeaderCallback, GridColumn, InnerGridCell, Rectangle, CompactSelection, DrawCustomCellCallback, GridColumnIcon, Item, CellList, GridMouseGroupHeaderEventArgs } from "./data-grid-types";
import { HoverValues } from "./animation-manager";
import { MappedGridColumn } from "./data-grid-lib";
import { SpriteManager } from "./data-grid-sprites";
import { Theme } from "../common/styles";
declare type HoverInfo = readonly [Item, readonly [number, number]];
interface GroupDetails {
    readonly name: string;
    readonly icon?: string;
    readonly overrideTheme?: Partial<Theme>;
    readonly actions?: readonly {
        readonly title: string;
        readonly onClick: (e: GridMouseGroupHeaderEventArgs) => void;
        readonly icon: GridColumnIcon | string;
    }[];
}
export declare type GroupDetailsCallback = (groupName: string) => GroupDetails;
interface BlitData {
    readonly cellXOffset: number;
    readonly cellYOffset: number;
    readonly translateX: number;
    readonly translateY: number;
}
interface DragAndDropState {
    src: number;
    dest: number;
}
export declare function drawCell(ctx: CanvasRenderingContext2D, row: number, cell: InnerGridCell, col: number, x: number, y: number, w: number, h: number, highlighted: boolean, theme: Theme, drawCustomCell: DrawCustomCellCallback | undefined, imageLoader: ImageWindowLoader, hoverAmount: number, hoverInfo: HoverInfo | undefined, frameTime: number, lastToken?: {} | undefined, enqueue?: (item: Item) => void): {} | undefined;
export declare function getActionBoundsForGroup(box: Rectangle, actions: NonNullable<GroupDetails["actions"]>): readonly Rectangle[];
export declare function pointInRect(rect: Rectangle, x: number, y: number): boolean;
export declare function getHeaderMenuBounds(x: number, y: number, width: number, height: number): Rectangle;
export declare function drawGrid(canvas: HTMLCanvasElement, buffers: Buffers, width: number, height: number, cellXOffset: number, cellYOffset: number, translateX: number, translateY: number, columns: readonly GridColumn[], mappedColumns: readonly MappedGridColumn[], enableGroups: boolean, freezeColumns: number, dragAndDropState: DragAndDropState | undefined, theme: Theme, headerHeight: number, groupHeaderHeight: number, selectedRows: CompactSelection, disabledRows: CompactSelection, rowHeight: number | ((index: number) => number), verticalBorder: (col: number) => boolean, selectedColumns: CompactSelection, isResizing: boolean, selectedCell: GridSelection | undefined, lastRowSticky: boolean, rows: number, getCellContent: (cell: readonly [number, number]) => InnerGridCell, getGroupDetails: GroupDetailsCallback, drawCustomCell: DrawCustomCellCallback | undefined, drawHeaderCallback: DrawHeaderCallback | undefined, prelightCells: CellList | undefined, imageLoader: ImageWindowLoader, lastBlitData: React.MutableRefObject<BlitData>, canBlit: boolean, damage: CellList | undefined, hoverValues: HoverValues, hoverInfo: HoverInfo | undefined, spriteManager: SpriteManager, scrolling: boolean, enqueue: (item: Item) => void): void;
interface Buffers {
    overlay: HTMLCanvasElement;
}
export {};
