import type { Theme } from "../common/styles";
import type { SpriteProps } from "../common/utils";
import { HeaderIconMap } from "./sprites";
/**
 * A known icon identifier
 *
 * @category Columns
 */
export declare type HeaderIcon = keyof HeaderIconMap;
/**
 * A method that produces an SVG array from
 * an SVG icon configuration.
 *
 * @category Columns
 */
export declare type Sprite = (props: SpriteProps) => string;
/**
 * A method that maps from icon names to functions
 * that return SVG strings.
 *
 * @category Columns
 */
export declare type SpriteMap = Record<string | HeaderIcon, Sprite>;
/** @category Columns */
export declare type SpriteVariant = "normal" | "selected" | "special";
/** @category Columns */
export declare class SpriteManager {
    private onSettled;
    private spriteMap;
    private headerIcons;
    private inFlight;
    constructor(headerIcons: SpriteMap | undefined, onSettled: () => void);
    drawSprite(sprite: HeaderIcon | string, variant: SpriteVariant, ctx: CanvasRenderingContext2D, x: number, y: number, size: number, theme: Theme, alpha?: number): void;
}
//# sourceMappingURL=data-grid-sprites.d.ts.map