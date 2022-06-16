import ImageWindowLoader from "../common/image-window-loader";
import { Theme } from "../common/styles";
import { CustomCell, GridCell, ProvideEditorCallback, Rectangle } from "../data-grid/data-grid-types";
import { DataEditorProps } from "./data-editor";
declare type DrawCallback = NonNullable<DataEditorProps["drawCell"]>;
export interface DrawArgs {
    ctx: CanvasRenderingContext2D;
    theme: Theme;
    rect: Rectangle;
    hoverAmount: number;
    hoverX: number | undefined;
    hoverY: number | undefined;
    col: number;
    row: number;
    highlighted: boolean;
    imageLoader: ImageWindowLoader;
    requestAnimationFrame: () => void;
}
export declare type CustomCellRenderer<T extends CustomCell> = {
    isMatch: (cell: CustomCell) => cell is T;
    draw: (args: DrawArgs, cell: T) => boolean;
    provideEditor: ProvideEditorCallback<T>;
    onPaste?: (val: string, cellData: T["data"]) => T["data"];
};
export declare function useCustomCells(cells: readonly CustomCellRenderer<any>[]): {
    drawCell: DrawCallback;
    provideEditor: ProvideEditorCallback<GridCell>;
    coercePasteValue: NonNullable<DataEditorProps["coercePasteValue"]>;
};
export {};
