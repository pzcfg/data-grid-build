import { Theme } from "../common/styles";
import type { DataGridSearchProps } from "../data-grid-search/data-grid-search";
import { GridColumn, SizedGridColumn } from "../data-grid/data-grid-types";
export declare function useColumnSizer(columns: readonly GridColumn[], rows: number, getCellsForSelection: DataGridSearchProps["getCellsForSelection"], minColumnWidth: number, maxColumnWidth: number, theme: Theme, abortController: AbortController): readonly SizedGridColumn[];
