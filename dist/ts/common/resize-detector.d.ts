import { MutableRefObject } from "react";
interface ReactResizeDetectorDimensions {
    height?: number;
    width?: number;
}
export declare function useResizeDetector<T extends HTMLElement = HTMLElement>(): UseResizeDetectorReturn<T>;
export interface UseResizeDetectorReturn<T> extends ReactResizeDetectorDimensions {
    ref: MutableRefObject<T | null>;
}
export {};
