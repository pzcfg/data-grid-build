import type { Rectangle } from "../data-grid/data-grid-types";
declare class ImageWindowLoader {
    private imageLoaded;
    private loadedLocations;
    private window;
    private freezeCols;
    private isInWindow;
    private cache;
    setCallback(imageLoaded: (locations: readonly (readonly [number, number])[]) => void): void;
    private sendLoaded;
    private clearOutOfWindow;
    setWindow(window: Rectangle, freezeCols: number): void;
    loadOrGetImage(url: string, col: number, row: number): HTMLImageElement | undefined;
}
export default ImageWindowLoader;
