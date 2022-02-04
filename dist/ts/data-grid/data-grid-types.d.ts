import { Theme } from "../common/styles";
import React from "react";
import ImageWindowLoader from "../common/image-window-loader";
import { SpriteManager } from "./data-grid-sprites";
export interface GridSelection {
    readonly cell: readonly [number, number];
    readonly range: Readonly<Rectangle>;
}
export declare type GridMouseEventArgs = GridMouseCellEventArgs | GridMouseHeaderEventArgs | GridMouseOutOfBoundsEventArgs | GridMouseGroupHeaderEventArgs;
interface PositionableMouseEventArgs {
    readonly localEventX: number;
    readonly localEventY: number;
}
interface BaseGridMouseEventArgs {
    readonly shiftKey: boolean;
    readonly ctrlKey: boolean;
    readonly metaKey: boolean;
    readonly isTouch: boolean;
    readonly isEdge: boolean;
}
export interface GridMouseCellEventArgs extends BaseGridMouseEventArgs, PositionableMouseEventArgs {
    readonly kind: "cell";
    readonly location: readonly [number, number];
    readonly bounds: Rectangle;
}
export interface GridMouseHeaderEventArgs extends BaseGridMouseEventArgs, PositionableMouseEventArgs {
    readonly kind: "header";
    readonly location: readonly [number, -1];
    readonly bounds: Rectangle;
    readonly group: string;
}
export interface GridMouseGroupHeaderEventArgs extends BaseGridMouseEventArgs, PositionableMouseEventArgs {
    readonly kind: "group-header";
    readonly location: readonly [number, -2];
    readonly bounds: Rectangle;
    readonly group: string;
}
export interface GridMouseOutOfBoundsEventArgs extends BaseGridMouseEventArgs {
    readonly kind: "out-of-bounds";
    readonly location: readonly [number, number];
    readonly direction: readonly [-1 | 0 | 1, -1 | 0 | 1];
}
export interface GridKeyEventArgs {
    readonly bounds: Rectangle | undefined;
    readonly key: string;
    readonly keyCode: number;
    readonly shiftKey: boolean;
    readonly ctrlKey: boolean;
    readonly metaKey: boolean;
    readonly cancel: () => void;
}
interface DragHandler {
    readonly setData: (mime: string, payload: string) => void;
    readonly setDragImage: (image: Element, x: number, y: number) => void;
}
export declare type GridDragEventArgs = GridMouseEventArgs & DragHandler;
export declare type DrawCustomCellCallback = (args: {
    ctx: CanvasRenderingContext2D;
    cell: GridCell;
    theme: Theme;
    rect: Rectangle;
    col: number;
    row: number;
    hoverAmount: number;
    hoverX: number | undefined;
    hoverY: number | undefined;
    highlighted: boolean;
    imageLoader: ImageWindowLoader;
}) => boolean;
export declare type DrawHeaderCallback = (args: {
    ctx: CanvasRenderingContext2D;
    column: GridColumn;
    theme: Theme;
    rect: Rectangle;
    hoverAmount: number;
    isSelected: boolean;
    isHovered: boolean;
    hasSelectedCell: boolean;
    spriteManager: SpriteManager;
    menuBounds: Rectangle;
}) => boolean;
export declare enum GridCellKind {
    Uri = "uri",
    Text = "text",
    Image = "image",
    RowID = "row-id",
    Number = "number",
    Bubble = "bubble",
    Boolean = "boolean",
    Loading = "loading",
    Markdown = "markdown",
    Drilldown = "drilldown",
    Protected = "protected",
    Custom = "custom"
}
export declare enum GridColumnIcon {
    HeaderRowID = "headerRowID",
    HeaderCode = "headerCode",
    HeaderNumber = "headerNumber",
    HeaderString = "headerString",
    HeaderBoolean = "headerBoolean",
    HeaderAudioUri = "headerAudioUri",
    HeaderVideoUri = "headerVideoUri",
    HeaderEmoji = "headerEmoji",
    HeaderImage = "headerImage",
    HeaderUri = "headerUri",
    HeaderPhone = "headerPhone",
    HeaderMarkdown = "headerMarkdown",
    HeaderDate = "headerDate",
    HeaderTime = "headerTime",
    HeaderEmail = "headerEmail",
    HeaderReference = "headerReference",
    HeaderIfThenElse = "headerIfThenElse",
    HeaderSingleValue = "headerSingleValue",
    HeaderLookup = "headerLookup",
    HeaderTextTemplate = "headerTextTemplate",
    HeaderMath = "headerMath",
    HeaderRollup = "headerRollup",
    HeaderJoinStrings = "headerJoinStrings",
    HeaderSplitString = "headerSplitString",
    HeaderGeoDistance = "headerGeoDistance",
    HeaderArray = "headerArray",
    RowOwnerOverlay = "rowOwnerOverlay",
    ProtectedColumnOverlay = "protectedColumnOverlay"
}
export declare type Item = readonly [number, number];
export interface GridColumn {
    readonly width: number;
    readonly title: string;
    readonly group?: string;
    readonly icon?: GridColumnIcon | string;
    readonly overlayIcon?: GridColumnIcon | string;
    readonly hasMenu?: boolean;
    readonly style?: "normal" | "highlight";
    readonly themeOverride?: Partial<Theme>;
}
export declare type ReadWriteGridCell = TextCell | NumberCell | MarkdownCell | UriCell;
export declare type EditableGridCell = TextCell | ImageCell | BooleanCell | MarkdownCell | UriCell | NumberCell;
export declare type EditableGridCellKind = EditableGridCell["kind"];
export declare function isEditableGridCell(cell: GridCell): cell is EditableGridCell;
export declare function isTextEditableGridCell(cell: GridCell): cell is ReadWriteGridCell;
export declare function isInnerOnlyCell(cell: InnerGridCell): cell is InnerOnlyGridCell;
export declare function isReadWriteCell(cell: GridCell): cell is ReadWriteGridCell;
export declare type GridCell = EditableGridCell | BubbleCell | RowIDCell | LoadingCell | ProtectedCell | DrilldownCell | CustomCell;
declare type InnerOnlyGridCell = NewRowCell | MarkerCell;
export declare type InnerGridCell = GridCell | InnerOnlyGridCell;
export declare type CellList = readonly Item[];
export interface Rectangle {
    x: number;
    y: number;
    width: number;
    height: number;
}
interface BaseGridCell {
    readonly allowOverlay: boolean;
    readonly lastUpdated?: number;
    readonly style?: "normal" | "faded";
    readonly themeOverride?: Partial<Theme>;
}
export interface LoadingCell extends BaseGridCell {
    readonly kind: GridCellKind.Loading;
}
export interface ProtectedCell extends BaseGridCell {
    readonly kind: GridCellKind.Protected;
}
export interface TextCell extends BaseGridCell {
    readonly kind: GridCellKind.Text;
    readonly displayData: string;
    readonly data: string;
    readonly readonly?: boolean;
}
export interface NumberCell extends BaseGridCell {
    readonly kind: GridCellKind.Number;
    readonly displayData: string;
    readonly data: number | undefined;
    readonly readonly?: boolean;
}
export interface ImageCell extends BaseGridCell {
    readonly kind: GridCellKind.Image;
    readonly data: string[];
    readonly displayData?: string[];
    readonly allowAdd: boolean;
}
export interface BubbleCell extends BaseGridCell {
    readonly kind: GridCellKind.Bubble;
    readonly data: string[];
}
export declare type ProvideEditorCallback<T extends GridCell> = (cell: T) => (React.FunctionComponent<{
    readonly onChange: (newValue: T) => void;
    readonly onFinishedEditing: (newValue?: T) => void;
    readonly isHighlighted: boolean;
    readonly value: T;
}> & {
    disablePadding?: boolean;
    unstyled?: boolean;
}) | undefined;
export interface CustomCell<T extends {} = {}> extends BaseGridCell {
    readonly kind: GridCellKind.Custom;
    readonly data: T;
    readonly copyData: string;
}
export interface DrilldownCellData {
    readonly text: string;
    readonly img?: string;
}
export interface DrilldownCell extends BaseGridCell {
    readonly kind: GridCellKind.Drilldown;
    readonly data: readonly DrilldownCellData[];
}
export interface BooleanCell extends BaseGridCell {
    readonly kind: GridCellKind.Boolean;
    readonly data: boolean;
    readonly showUnchecked: boolean;
    readonly allowEdit: boolean;
    readonly allowOverlay: false;
}
export interface RowIDCell extends BaseGridCell {
    readonly kind: GridCellKind.RowID;
    readonly data: string;
}
export interface MarkdownCell extends BaseGridCell {
    readonly kind: GridCellKind.Markdown;
    readonly data: string;
    readonly readonly?: boolean;
}
export interface UriCell extends BaseGridCell {
    readonly kind: GridCellKind.Uri;
    readonly data: string;
    readonly readonly?: boolean;
}
export declare enum InnerGridCellKind {
    NewRow = "new-row",
    Marker = "marker"
}
export interface NewRowCell extends BaseGridCell {
    readonly kind: InnerGridCellKind.NewRow;
    readonly hint: string;
    readonly icon?: {
        x?: number;
        y?: number;
        width: number;
        path: Path2D;
    };
    readonly isFirst: boolean;
    readonly allowOverlay: false;
}
export interface MarkerCell extends BaseGridCell {
    readonly kind: InnerGridCellKind.Marker;
    readonly allowOverlay: false;
    readonly row: number;
    readonly checked: boolean;
    readonly markerKind: "checkbox" | "number" | "both";
}
export declare type Slice = readonly [number, number];
export declare type CompactSelectionRanges = readonly Slice[];
export declare class CompactSelection {
    private readonly items;
    private constructor();
    static empty: () => CompactSelection;
    static fromSingleSelection: (selection: number | Slice) => CompactSelection;
    offset: (amount: number) => CompactSelection;
    add: (selection: number | Slice) => CompactSelection;
    remove: (selection: number) => CompactSelection;
    first: () => number | undefined;
    last: () => number | undefined;
    hasIndex: (index: number) => boolean;
    hasAll: (index: Slice) => boolean;
    get length(): number;
    [Symbol.iterator](): Generator<number, void, unknown>;
}
export {};
