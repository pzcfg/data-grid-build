import * as React from "react";
import { CellArray, GetCellsThunk, Item, Rectangle } from "../data-grid/data-grid-types";
import { ScrollingDataGridProps } from "../scrolling-data-grid/scrolling-data-grid";
export interface DataGridSearchProps extends Omit<ScrollingDataGridProps, "prelightCells"> {
    readonly getCellsForSelection?: (selection: Rectangle, abortSignal: AbortSignal) => GetCellsThunk | CellArray;
    readonly onSearchResultsChanged?: (results: readonly Item[], navIndex: number) => void;
    readonly showSearch?: boolean;
    readonly onSearchClose?: () => void;
}
declare const DataGridSearch: React.FunctionComponent<DataGridSearchProps>;
export default DataGridSearch;
