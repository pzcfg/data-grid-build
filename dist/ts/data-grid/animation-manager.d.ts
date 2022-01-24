import { Item } from "./data-grid-types";
declare type StateItem = {
    item: Item;
    hoverAmount: number;
};
export declare type HoverValues = readonly Readonly<StateItem>[];
export declare type StepCallback = (values: HoverValues) => void;
declare class Easing {
    private ax;
    private ay;
    private bx;
    private by;
    private cx;
    private cy;
    constructor(p1x: number, p1y: number, p2x: number, p2y: number);
    private sampleCurveX;
    private sampleCurveY;
    private sampleCurveDerivativeX;
    private solveCurveX;
    solve(x: number): number;
}
export declare const ease: Easing;
export declare class AnimationManager {
    private callback;
    constructor(callback: StepCallback);
    private currentHoveredItem;
    private leavingItems;
    private lastAnimationTime;
    private areSameItems;
    private addToLeavingItems;
    /**
     * @returns the hover amount of the item, if it was leaving (0 if not).
     */
    private removeFromLeavingItems;
    private cleanUpLeavingElements;
    private shouldStep;
    private getAnimatingItems;
    private step;
    setHovered: (item: Item | undefined) => void;
}
export {};
