import { GridCellKind, InnerGridCell, InnerGridCellKind } from "../data-grid-types";
import { InternalCellRenderer } from "./cell-types";
declare const asCollapsed: (x: any) => InternalCellRenderer<InnerGridCell>;
declare type RendererKinds = InnerGridCellKind | Exclude<GridCellKind, GridCellKind.Custom>;
export declare const CellRenderers: Record<RendererKinds, ReturnType<typeof asCollapsed>>;
export {};
