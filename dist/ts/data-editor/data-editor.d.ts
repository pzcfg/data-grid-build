import * as React from "react";
import { EditableGridCell, GridCell, GridSelection, Rectangle, ProvideEditorCallback, DrawCustomCellCallback, GridColumn, GroupHeaderClickedEventArgs, HeaderClickedEventArgs, CellClickedEventArgs, Item } from "../data-grid/data-grid-types";
import { DataGridSearchProps } from "../data-grid-search/data-grid-search";
import { OverlayImageEditorProps } from "../data-grid-overlay-editor/private/image-overlay-editor";
import { Theme } from "../common/styles";
import { DataGridRef } from "../data-grid/data-grid";
import { SelectionBlending } from "../data-grid/use-selection-behavior";
declare type Props = Omit<DataGridSearchProps, "accessibilityHeight" | "canvasRef" | "cellXOffset" | "cellYOffset" | "className" | "columns" | "disabledRows" | "drawCustomCell" | "enableGroups" | "firstColSticky" | "getCellContent" | "gridRef" | "headerHeight" | "groupHeaderHeight" | "lastRowSticky" | "minColumnWidth" | "maxColumnWidth" | "lockColumns" | "firstColAccessible" | "getCellsForSelection" | "onCellFocused" | "onKeyDown" | "isFilling" | "isFocused" | "onCanvasFocused" | "onCanvasBlur" | "onKeyUp" | "onMouseDown" | "onMouseUp" | "onMouseMove" | "freezeColumns" | "onSearchResultsChanged" | "onVisibleRegionChanged" | "rowHeight" | "verticalBorder" | "scrollRef" | "searchColOffset" | "selection" | "selectedColumns" | "translateX" | "translateY">;
declare type ImageEditorType = React.ComponentType<OverlayImageEditorProps>;
declare type ReplaceReturnType<T extends (...a: any) => any, TNewReturn> = (...a: Parameters<T>) => TNewReturn;
declare type EmitEvents = "copy" | "paste" | "delete" | "fill-right" | "fill-down";
interface Keybinds {
    readonly selectAll: boolean;
    readonly selectRow: boolean;
    readonly selectColumn: boolean;
    readonly downFill: boolean;
    readonly rightFill: boolean;
    readonly pageUp: boolean;
    readonly pageDown: boolean;
    readonly clear: boolean;
    readonly copy: boolean;
    readonly paste: boolean;
    readonly search: boolean;
    readonly first: boolean;
    readonly last: boolean;
}
export interface DataEditorProps extends Props {
    readonly onDelete?: (selection: GridSelection) => boolean | GridSelection;
    readonly onCellEdited?: (cell: Item, newValue: EditableGridCell) => void;
    readonly onCellsEdited?: (newValues: readonly {
        location: Item;
        value: EditableGridCell;
    }[]) => boolean | void;
    readonly onRowAppended?: () => Promise<"top" | "bottom" | number | undefined> | void;
    readonly onHeaderClicked?: (colIndex: number, event: HeaderClickedEventArgs) => void;
    readonly onGroupHeaderClicked?: (colIndex: number, event: GroupHeaderClickedEventArgs) => void;
    readonly onGroupHeaderRenamed?: (groupName: string, newVal: string) => void;
    readonly onCellClicked?: (cell: Item, event: CellClickedEventArgs) => void;
    readonly onCellActivated?: (cell: Item) => void;
    readonly onFinishedEditing?: (newValue: GridCell | undefined, movement: Item) => void;
    readonly onHeaderContextMenu?: (colIndex: number, event: HeaderClickedEventArgs) => void;
    readonly onGroupHeaderContextMenu?: (colIndex: number, event: GroupHeaderClickedEventArgs) => void;
    readonly onCellContextMenu?: (cell: Item, event: CellClickedEventArgs) => void;
    readonly appendRowRef?: React.MutableRefObject<(col: number) => Promise<void> | null>;
    readonly columns: readonly GridColumn[];
    readonly trailingRowOptions?: {
        readonly tint?: boolean;
        readonly hint?: string;
        readonly sticky?: boolean;
        readonly addIcon?: string;
        readonly targetColumn?: number | GridColumn;
    };
    readonly headerHeight?: number;
    readonly groupHeaderHeight?: number;
    readonly rowMarkers?: "checkbox" | "number" | "both" | "none";
    readonly rowMarkerWidth?: number;
    readonly rowMarkerStartIndex?: number;
    readonly width?: number | string;
    readonly height?: number | string;
    readonly className?: string;
    readonly spanRangeBehavior?: "default" | "allowPartial";
    readonly rangeSelectionBlending?: SelectionBlending;
    readonly columnSelectionBlending?: SelectionBlending;
    readonly rowSelectionBlending?: SelectionBlending;
    readonly rangeSelect?: "none" | "cell" | "rect" | "multi-cell" | "multi-rect";
    readonly columnSelect?: "none" | "single" | "multi";
    readonly rowSelect?: "none" | "single" | "multi";
    readonly rowHeight?: DataGridSearchProps["rowHeight"];
    readonly onMouseMove?: DataGridSearchProps["onMouseMove"];
    readonly minColumnWidth?: DataGridSearchProps["minColumnWidth"];
    readonly maxColumnWidth?: DataGridSearchProps["maxColumnWidth"];
    readonly imageEditorOverride?: ImageEditorType;
    readonly markdownDivCreateNode?: (content: string) => DocumentFragment;
    readonly provideEditor?: ProvideEditorCallback<GridCell>;
    readonly coercePasteValue?: (val: string, cell: GridCell) => GridCell | undefined;
    readonly onSelectionCleared?: () => void;
    /**
     * @deprecated Use drawCell instead. This will be removed in a future version.
     */
    readonly drawCustomCell?: (ctx: CanvasRenderingContext2D, cell: GridCell, theme: Theme, rect: Rectangle, hoverAmount: number) => boolean;
    readonly drawCell?: DrawCustomCellCallback;
    readonly gridSelection?: GridSelection;
    readonly onGridSelectionChange?: (newSelection: GridSelection) => void;
    readonly onVisibleRegionChanged?: (range: Rectangle, tx?: number, ty?: number, extras?: {
        selected?: Item;
        freezeRegion?: Rectangle;
    }) => void;
    readonly getCellContent: ReplaceReturnType<DataGridSearchProps["getCellContent"], GridCell>;
    readonly rowSelectionMode?: "auto" | "multi";
    readonly keybindings?: Partial<Keybinds>;
    readonly getCellsForSelection?: DataGridSearchProps["getCellsForSelection"] | true;
    readonly freezeColumns?: DataGridSearchProps["freezeColumns"];
    readonly verticalBorder?: DataGridSearchProps["verticalBorder"] | boolean;
    readonly onPaste?: ((target: Item, values: readonly (readonly string[])[]) => boolean) | boolean;
}
export interface DataEditorRef {
    updateCells: DataGridRef["damage"];
    getBounds: DataGridRef["getBounds"];
    focus: DataGridRef["focus"];
    emit: (eventName: EmitEvents) => Promise<void>;
    scrollTo: (col: number, row: number, dir?: "horizontal" | "vertical" | "both", paddingX?: number, paddingY?: number) => void;
}
export declare const DataEditor: React.ForwardRefExoticComponent<DataEditorProps & React.RefAttributes<DataEditorRef>>;
export {};
