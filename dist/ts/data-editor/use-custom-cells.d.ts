import { CustomCell, GridCell, ProvideEditorCallback } from "../data-grid/data-grid-types";
import { DrawArgs } from "./custom-cell-draw-args";
import { DataEditorProps } from "./data-editor";
declare type DrawCallback = NonNullable<DataEditorProps["drawCell"]>;
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
