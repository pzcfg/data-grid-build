import type { Rectangle } from "..";
import * as React from "react";
interface Props {
    readonly className?: string;
    readonly preventDiagonalScrolling?: boolean;
    readonly draggable: boolean;
    readonly paddingRight?: number;
    readonly paddingBottom?: number;
    readonly clientHeight: number;
    readonly scrollWidth: number;
    readonly scrollHeight: number;
    readonly scrollToEnd?: boolean;
    readonly initialScrollPosition?: readonly [scrollX: number, scrollY: number];
    readonly initialSize?: readonly [width: number, height: number];
    readonly rightElementProps?: {
        readonly sticky?: boolean;
        readonly fill?: boolean;
    };
    readonly rightElement?: React.ReactNode;
    readonly minimap?: React.ReactNode;
    readonly scrollRef?: React.MutableRefObject<HTMLDivElement | null>;
    readonly update: (region: Rectangle & {
        paddingRight: number;
    }) => void;
}
export declare const InfiniteScroller: React.FC<Props>;
export {};
//# sourceMappingURL=infinite-scroller.d.ts.map