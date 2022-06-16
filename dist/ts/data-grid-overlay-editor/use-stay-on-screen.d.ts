import * as React from "react";
export declare function useRefState(): [HTMLElement | undefined, React.RefCallback<HTMLElement | null>];
interface StayOnScreen {
    ref: React.RefCallback<HTMLElement | null>;
    style: React.CSSProperties;
}
export declare function useStayOnScreen(): StayOnScreen;
export {};
