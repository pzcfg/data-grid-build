import React from "react";
import { Rectangle } from "../data-grid/data-grid-types";
interface Props {
    readonly bounds: Rectangle;
    readonly group: string;
    readonly onClose: () => void;
    readonly onFinish: (newVal: string) => void;
    readonly canvasBounds: DOMRect;
}
export declare const GroupRename: React.VFC<Props>;
export {};
