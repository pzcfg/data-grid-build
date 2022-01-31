import { DrilldownCellData, GridColumn } from "./data-grid-types";
import { BaseDrawArgs } from "./cells/cell-types";
export interface MappedGridColumn extends GridColumn {
    sourceIndex: number;
    sticky: boolean;
}
export declare function useMappedColumns(columns: readonly GridColumn[], freezeColumns: number): readonly MappedGridColumn[];
export declare function isGroupEqual(left: string | undefined, right: string | undefined): boolean;
export declare function getStickyWidth(columns: readonly MappedGridColumn[], dndState?: {
    src: number;
    dest: number;
}): number;
export declare function getEffectiveColumns(columns: readonly MappedGridColumn[], cellXOffset: number, width: number, dndState?: {
    src: number;
    dest: number;
}, tx?: number): readonly MappedGridColumn[];
export declare function getColumnIndexForX(targetX: number, effectiveColumns: readonly MappedGridColumn[], translateX?: number): number;
export declare function getRowIndexForY(targetY: number, height: number, hasGroups: boolean, headerHeight: number, groupHeaderHeight: number, rows: number, rowHeight: number | ((index: number) => number), cellYOffset: number, translateY: number, lastRowSticky: boolean): number | undefined;
export declare function measureTextCached(s: string, ctx: CanvasRenderingContext2D, font?: string): TextMetrics;
export declare function drawWithLastUpdate(args: BaseDrawArgs, lastUpdate: number | undefined, frameTime: number, draw: (forcePrep: boolean) => void): boolean;
export declare function prepTextCell(args: BaseDrawArgs, overrideColor?: string): void;
export declare function drawTextCell(args: BaseDrawArgs, data: string): void;
export declare function drawNewRowCell(args: BaseDrawArgs, data: string, isFirst: boolean, icon?: {
    x?: number;
    y?: number;
    width: number;
    path: Path2D;
}): void;
export declare function prepMarkerRowCell(args: BaseDrawArgs): void;
export declare function drawMarkerRowCell(args: BaseDrawArgs, index: number, checked: boolean, markerKind: "checkbox" | "both" | "number"): void;
export declare function drawProtectedCell(args: BaseDrawArgs): void;
export declare function drawBoolean(args: BaseDrawArgs, data: boolean, canEdit: boolean): void;
export declare function drawBubbles(args: BaseDrawArgs, data: readonly string[]): void;
export declare function drawDrilldownCell(args: BaseDrawArgs, data: readonly DrilldownCellData[]): void;
export declare function drawImage(args: BaseDrawArgs, data: readonly string[]): void;
interface Point {
    x: number;
    y: number;
    radius?: number;
}
export declare function roundedPoly(ctx: CanvasRenderingContext2D, points: Point[], radiusAll: number): void;
export {};
