import type { Theme } from "../..";
import type { SpriteManager } from "../data-grid-sprites";
import type { InnerGridCell, Rectangle, ImageWindowLoader, CustomCell, ProvideEditorCallback, BaseGridMouseEventArgs } from "../data-grid-types";
export interface BaseDrawArgs {
    ctx: CanvasRenderingContext2D;
    theme: Theme;
    col: number;
    row: number;
    rect: Rectangle;
    highlighted: boolean;
    hoverAmount: number;
    hoverX: number | undefined;
    hoverY: number | undefined;
    imageLoader: ImageWindowLoader;
    spriteManager: SpriteManager;
    hyperWrapping: boolean;
    cell: InnerGridCell;
    requestAnimationFrame: () => void;
}
/** @category Drawing */
export interface DrawArgs<T extends InnerGridCell> extends BaseDrawArgs {
    cell: T;
}
/** @category Drawing */
export interface PrepResult {
    font: string | undefined;
    fillStyle: string | undefined;
    renderer: {};
    deprep: ((args: Pick<BaseDrawArgs, "ctx">) => void) | undefined;
}
/** @category Renderers */
export declare type DrawCallback<T extends InnerGridCell> = (args: DrawArgs<T>, cell: T) => void;
declare type PrepCallback = (args: BaseDrawArgs, lastPrep?: PrepResult) => Partial<PrepResult>;
interface BaseCellRenderer<T extends InnerGridCell> {
    readonly kind: T["kind"];
    readonly draw: DrawCallback<T>;
    readonly drawPrep?: PrepCallback;
    readonly needsHover?: boolean;
    readonly needsHoverPosition?: boolean;
    readonly measure?: (ctx: CanvasRenderingContext2D, cell: T, theme: Theme) => number;
    readonly provideEditor?: ProvideEditorCallback<T>;
    readonly onClick?: (args: {
        readonly cell: T;
        readonly posX: number;
        readonly posY: number;
        readonly bounds: Rectangle;
        readonly theme: Theme;
        readonly preventDefault: () => void;
    } & BaseGridMouseEventArgs) => T | undefined;
    readonly onSelect?: (args: {
        readonly cell: T;
        readonly posX: number;
        readonly posY: number;
        readonly bounds: Rectangle;
        readonly theme: Theme;
        readonly preventDefault: () => void;
    } & BaseGridMouseEventArgs) => void;
    readonly onDelete?: (cell: T) => T | undefined;
}
/** @category Renderers */
export interface InternalCellRenderer<T extends InnerGridCell> extends BaseCellRenderer<T> {
    readonly useLabel?: boolean;
    readonly getAccessibilityString: (cell: T) => string;
    readonly onPaste: (val: string, cell: T) => T | undefined;
}
/** @category Renderers */
export interface CustomRenderer<T extends CustomCell = CustomCell> extends BaseCellRenderer<T> {
    readonly isMatch: (cell: CustomCell) => cell is T;
    readonly onPaste?: (val: string, cellData: T["data"]) => T["data"] | undefined;
}
/** @category Renderers */
export declare type CellRenderer<T extends InnerGridCell> = [T] extends [CustomCell<infer DataType>] ? CustomRenderer<CustomCell<DataType>> : InternalCellRenderer<T>;
/** @category Renderers */
export declare type GetCellRendererCallback = <T extends InnerGridCell>(cell: T) => CellRenderer<T> | undefined;
export {};
//# sourceMappingURL=cell-types.d.ts.map