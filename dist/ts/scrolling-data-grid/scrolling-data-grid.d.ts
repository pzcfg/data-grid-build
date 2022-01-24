import * as React from "react";
import { DataGridDndProps } from "../data-grid-dnd/data-grid-dnd";
import { Rectangle } from "../data-grid/data-grid-types";
declare type Props = Omit<DataGridDndProps, "width" | "height" | "eventTargetRef">;
export interface ScrollingDataGridProps extends Props {
    readonly onVisibleRegionChanged?: (range: Rectangle, tx?: number, ty?: number) => void;
    readonly scrollToEnd?: boolean;
    readonly scrollRef?: React.MutableRefObject<HTMLDivElement | null>;
    readonly smoothScrollX?: boolean;
    readonly smoothScrollY?: boolean;
    readonly overscrollX?: number;
    readonly rightElementSticky?: boolean;
    readonly rightElement?: React.ReactNode;
    readonly showMinimap?: boolean;
}
declare const GridScroller: React.FunctionComponent<ScrollingDataGridProps>;
export default GridScroller;
