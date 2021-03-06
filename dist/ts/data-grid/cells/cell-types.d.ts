/// <reference types="react" />
import type { OverlayImageEditorProps, Theme } from "../..";
import type ImageWindowLoader from "../../common/image-window-loader";
import type { SpriteManager } from "../data-grid-sprites";
import type { InnerGridCell, Rectangle, Item } from "../data-grid-types";
export declare type HoverInfo = readonly [Item, Item];
export declare type ImageEditorType = React.ComponentType<OverlayImageEditorProps>;
export interface BaseDrawArgs {
    ctx: CanvasRenderingContext2D;
    theme: Theme;
    col: number;
    row: number;
    x: number;
    y: number;
    w: number;
    h: number;
    highlighted: boolean;
    hoverAmount: number;
    hoverX: number | undefined;
    hoverY: number | undefined;
    imageLoader: ImageWindowLoader;
    spriteManager: SpriteManager;
    hyperWrapping: boolean;
}
interface DrawArgs<T extends InnerGridCell> extends BaseDrawArgs {
    cell: T;
}
export interface PrepResult {
    font: string | undefined;
    fillStyle: string | undefined;
    renderer: {};
    deprep: ((args: Pick<BaseDrawArgs, "ctx">) => void) | undefined;
}
declare type DrawCallback<T extends InnerGridCell> = (args: DrawArgs<T>) => void;
export declare type PrepCallback = (args: BaseDrawArgs, lastPrep?: PrepResult) => Partial<PrepResult>;
export declare type DeprepCallback = (args: Pick<BaseDrawArgs, "ctx">) => void;
declare type ProvideEditorCallback<T extends InnerGridCell> = (cell: T) => React.FunctionComponent<{
    readonly onChange: (newValue: T) => void;
    readonly onKeyDown: (event: React.KeyboardEvent) => void;
    readonly onFinishedEditing: (newValue?: T) => void;
    readonly isHighlighted: boolean;
    readonly value: T;
    readonly imageEditorOverride?: ImageEditorType;
    readonly markdownDivCreateNode?: (content: string) => DocumentFragment;
    readonly target: Rectangle;
    readonly forceEditMode: boolean;
    readonly isValid?: boolean;
}> | undefined;
export interface InternalCellRenderer<T extends InnerGridCell> {
    readonly kind: T["kind"];
    readonly renderPrep?: PrepCallback;
    readonly render: DrawCallback<T>;
    readonly renderDeprep?: DeprepCallback;
    readonly needsHover: boolean;
    readonly needsHoverPosition: boolean;
    readonly useLabel?: boolean;
    readonly measure: (ctx: CanvasRenderingContext2D, cell: T, theme: Theme) => number;
    readonly onClick?: (cell: T, posX: number, posY: number, bounds: Rectangle) => T | undefined;
    readonly onDelete?: (cell: T) => T | undefined;
    readonly getAccessibilityString: (cell: T) => string;
    readonly getEditor?: ProvideEditorCallback<T>;
}
export {};
