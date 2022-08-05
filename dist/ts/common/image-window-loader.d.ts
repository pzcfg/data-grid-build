import type { Item, Rectangle } from "../data-grid/data-grid-types";
declare class ImageWindowLoader {
    private imageLoaded;
    private loadedLocations;
    private visibleWindow;
    private freezeCols;
    private isInWindow;
    private cache;
    setCallback(imageLoaded: (locations: readonly Item[]) => void): void;
    private sendLoaded;
    private clearOutOfWindow;
    setWindow(newWindow: Rectangle, freezeCols: number): void;
    private loadImage;
    loadOrGetImage(url: string, col: number, row: number): HTMLImageElement | undefined;
}
export default ImageWindowLoader;
