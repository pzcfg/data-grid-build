import * as React from "react";
import { CellArray, EditableGridCell, GridCell, GridColumn, Item, Rectangle } from "../../data-grid/data-grid-types";
/**
 * Attempts to copy data between grid cells of any kind.
 */
export declare function lossyCopyData<T extends EditableGridCell>(source: EditableGridCell, target: T): EditableGridCell;
export declare type GridColumnWithMockingInfo = GridColumn & {
    getContent(): GridCell;
};
export declare function getGridColumn(columnWithMock: GridColumnWithMockingInfo): GridColumn;
export declare const BeautifulStyle: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const PropName: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const Description: import("styled-components").StyledComponent<"p", any, {}, never>;
export declare const MoreInfo: import("styled-components").StyledComponent<"p", any, {}, never>;
interface BeautifulProps {
    title: string;
    description?: React.ReactNode;
    className?: string;
}
export declare const BeautifulWrapper: React.FC<BeautifulProps>;
export declare class ContentCache {
    private cachedContent;
    get(col: number, row: number): import("../../data-grid/data-grid-types").TextCell | import("../../data-grid/data-grid-types").ImageCell | import("../../data-grid/data-grid-types").BooleanCell | import("../../data-grid/data-grid-types").MarkdownCell | import("../../data-grid/data-grid-types").UriCell | import("../../data-grid/data-grid-types").NumberCell | import("../../data-grid/data-grid-types").CustomCell<{}> | import("../../data-grid/data-grid-types").BubbleCell | import("../../data-grid/data-grid-types").RowIDCell | import("../../data-grid/data-grid-types").LoadingCell | import("../../data-grid/data-grid-types").ProtectedCell | import("../../data-grid/data-grid-types").DrilldownCell | undefined;
    set(col: number, row: number, value: GridCell): void;
}
export declare function useMockDataGenerator(numCols: number, readonly?: boolean, group?: boolean): {
    cols: GridColumn[];
    getCellContent: ([col, row]: Item) => GridCell;
    onColumnResize: (column: GridColumn, newSize: number) => void;
    setCellValue: ([col, row]: Item, val: GridCell) => void;
    getCellsForSelection: (selection: Rectangle) => CellArray;
    setCellValueRaw: ([col, row]: Item, val: GridCell) => void;
};
export {};
