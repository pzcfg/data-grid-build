/// <reference types="react" />
import ImageWindowLoader from "../common/image-window-loader";
import type { GridSelection, DrawHeaderCallback, InnerGridCell, Rectangle, CompactSelection, DrawCustomCellCallback, GridColumnIcon, Item, CellList, GridMouseGroupHeaderEventArgs } from "./data-grid-types";
import { HoverValues } from "./animation-manager";
import { MappedGridColumn } from "./data-grid-lib";
import { SpriteManager } from "./data-grid-sprites";
import { Theme } from "../common/styles";
import { PrepResult } from "./cells/cell-types";
declare type HoverInfo = readonly [Item, Item];
export interface Highlight {
    readonly color: string;
    readonly range: Rectangle;
    readonly style?: "dashed" | "solid";
}
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
export declare type GetRowThemeCallback = (row: number) => Partial<Theme> | undefined;
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
export declare function drawCell(ctx: CanvasRenderingContext2D, row: number, cell: InnerGridCell, col: number, x: number, y: number, w: number, h: number, highlighted: boolean, theme: Theme, drawCustomCell: DrawCustomCellCallback | undefined, imageLoader: ImageWindowLoader, spriteManager: SpriteManager, hoverAmount: number, hoverInfo: HoverInfo | undefined, hyperWrapping: boolean, frameTime: number, lastPrep?: PrepResult, enqueue?: (item: Item) => void): PrepResult | undefined;
export declare function getActionBoundsForGroup(box: Rectangle, actions: NonNullable<GroupDetails["actions"]>): readonly Rectangle[];
export declare function pointInRect(rect: Rectangle, x: number, y: number): boolean;
export declare function getHeaderMenuBounds(x: number, y: number, width: number, height: number): Rectangle;
export interface DrawGridArg {
    readonly canvas: HTMLCanvasElement;
    readonly headerCanvas: HTMLCanvasElement;
    readonly width: number;
    readonly height: number;
    readonly cellXOffset: number;
    readonly cellYOffset: number;
    readonly translateX: number;
    readonly translateY: number;
    readonly mappedColumns: readonly MappedGridColumn[];
    readonly enableGroups: boolean;
    readonly freezeColumns: number;
    readonly dragAndDropState: DragAndDropState | undefined;
    readonly theme: Theme;
    readonly headerHeight: number;
    readonly groupHeaderHeight: number;
    readonly disabledRows: CompactSelection;
    readonly rowHeight: number | ((index: number) => number);
    readonly verticalBorder: (col: number) => boolean;
    readonly isResizing: boolean;
    readonly isFocused: boolean;
    readonly selection: GridSelection;
    readonly fillHandle: boolean;
    readonly lastRowSticky: boolean;
    readonly hyperWrapping: boolean;
    readonly rows: number;
    readonly getCellContent: (cell: Item) => InnerGridCell;
    readonly getGroupDetails: GroupDetailsCallback;
    readonly getRowThemeOverride: GetRowThemeCallback | undefined;
    readonly drawCustomCell: DrawCustomCellCallback | undefined;
    readonly drawHeaderCallback: DrawHeaderCallback | undefined;
    readonly prelightCells: CellList | undefined;
    readonly highlightRegions: readonly Highlight[] | undefined;
    readonly imageLoader: ImageWindowLoader;
    readonly lastBlitData: React.MutableRefObject<BlitData>;
    readonly damage: CellList | undefined;
    readonly hoverValues: HoverValues;
    readonly hoverInfo: HoverInfo | undefined;
    readonly spriteManager: SpriteManager;
    readonly scrolling: boolean;
    readonly touchMode: boolean;
    readonly enqueue: (item: Item) => void;
}
export declare function drawGrid(arg: DrawGridArg, lastArg: DrawGridArg | undefined): void;
export {};
