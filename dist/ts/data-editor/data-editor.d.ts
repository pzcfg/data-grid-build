import * as React from "react";
import { EditableGridCell, GridCell, GridSelection, Rectangle, CompactSelection, ProvideEditorCallback, DrawCustomCellCallback, GridMouseCellEventArgs, GridMouseHeaderEventArgs, GridMouseGroupHeaderEventArgs } from "../data-grid/data-grid-types";
import { DataGridSearchProps } from "../data-grid-search/data-grid-search";
import { OverlayImageEditorProps } from "../data-grid-overlay-editor/private/image-overlay-editor";
import { Theme } from "../common/styles";
import { DataGridRef } from "../data-grid/data-grid";
declare type Props = Omit<DataGridSearchProps, "canvasRef" | "cellXOffset" | "cellYOffset" | "className" | "disabledRows" | "drawCustomCell" | "enableGroups" | "firstColSticky" | "getCellContent" | "gridRef" | "headerHeight" | "groupHeaderHeight" | "lastRowSticky" | "lockColumns" | "onCellFocused" | "onKeyDown" | "onKeyUp" | "onMouseDown" | "onMouseUp" | "onMouseMove" | "freezeColumns" | "onSearchResultsChanged" | "onVisibleRegionChanged" | "rowHeight" | "verticalBorder" | "scrollRef" | "searchColOffset" | "selectedCell" | "selectedColumns" | "translateX" | "translateY">;
declare type ImageEditorType = React.ComponentType<OverlayImageEditorProps>;
declare type ReplaceReturnType<T extends (...a: any) => any, TNewReturn> = (...a: Parameters<T>) => TNewReturn;
export declare type HeaderSelectionTrigger = "selection" | "drag" | "header" | "group";
interface PreventableEvent {
    preventDefault: () => void;
}
interface CellClickedEventArgs extends GridMouseCellEventArgs, PreventableEvent {
}
interface HeaderClickedEventArgs extends GridMouseHeaderEventArgs, PreventableEvent {
}
interface GroupHeaderClickedEventArgs extends GridMouseGroupHeaderEventArgs, PreventableEvent {
}
export interface DataEditorProps extends Props {
    readonly onDeleteRows?: (rows: readonly number[]) => void;
    readonly onCellEdited?: (cell: readonly [number, number], newValue: EditableGridCell) => void;
    readonly onRowAppended?: () => Promise<"top" | "bottom" | number | undefined> | void;
    readonly onHeaderClicked?: (colIndex: number, event: HeaderClickedEventArgs) => void;
    readonly onGroupHeaderClicked?: (colIndex: number, event: GroupHeaderClickedEventArgs) => void;
    readonly onGroupHeaderRenamed?: (groupName: string, newVal: string) => void;
    readonly onCellClicked?: (cell: readonly [number, number], event: CellClickedEventArgs) => void;
    readonly appendRowRef?: React.MutableRefObject<(col: number) => Promise<void> | null>;
    readonly trailingRowOptions?: {
        readonly tint?: boolean;
        readonly hint?: string;
        readonly hintCol?: number;
        readonly appendCol?: number;
        readonly icon?: {
            x?: number;
            y?: number;
            width: number;
            path: Path2D;
        };
        readonly sticky?: boolean;
    };
    readonly headerHeight?: number;
    readonly groupHeaderHeight?: number;
    readonly rowMarkers?: "checkbox" | "number" | "both" | "none";
    readonly rowMarkerWidth?: number;
    readonly rowHeight?: DataGridSearchProps["rowHeight"];
    readonly onMouseMove?: DataGridSearchProps["onMouseMove"];
    readonly imageEditorOverride?: ImageEditorType;
    readonly markdownDivCreateNode?: (content: string) => DocumentFragment;
    readonly provideEditor?: ProvideEditorCallback<GridCell>;
    readonly onSelectedRowsChange?: (newRows: CompactSelection) => void;
    readonly selectedColumns?: DataGridSearchProps["selectedColumns"];
    readonly onSelectedColumnsChange?: (newColumns: CompactSelection, trigger: HeaderSelectionTrigger) => void;
    /**
     * @deprecated Use drawCell instead. This will be removed in a future version.
     */
    readonly drawCustomCell?: (ctx: CanvasRenderingContext2D, cell: GridCell, theme: Theme, rect: Rectangle, hoverAmount: number) => boolean;
    readonly drawCell?: DrawCustomCellCallback;
    readonly gridSelection?: GridSelection;
    readonly onGridSelectionChange?: (newSelection: GridSelection | undefined) => void;
    readonly onVisibleRegionChanged?: (range: Rectangle, tx?: number, ty?: number) => void;
    readonly getCellContent: ReplaceReturnType<DataGridSearchProps["getCellContent"], GridCell>;
    readonly rowSelectionMode?: "auto" | "multi";
    readonly enableDownfill?: boolean;
    readonly freezeColumns?: DataGridSearchProps["freezeColumns"];
    readonly verticalBorder?: DataGridSearchProps["verticalBorder"] | boolean;
    readonly onPaste?: ((target: readonly [number, number], values: readonly (readonly string[])[]) => boolean) | boolean;
}
export interface DataEditorRef {
    updateCells: DataGridRef["damage"];
    getBounds: DataGridRef["getBounds"];
}
export declare const DataEditor: React.ForwardRefExoticComponent<DataEditorProps & React.RefAttributes<DataEditorRef>>;
export {};
