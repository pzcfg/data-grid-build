import * as React from "react";
import type { NumberFormatValues } from "react-number-format";
import type { SelectionRange } from "../../data-grid/data-grid-types";
interface Props {
    value: number | undefined;
    disabled?: boolean;
    onKeyDown: (ev: React.KeyboardEvent<HTMLInputElement>) => void;
    onChange: (values: NumberFormatValues) => void;
    highlight: boolean;
    validatedSelection?: SelectionRange;
}
declare const NumberOverlayEditor: React.FunctionComponent<Props>;
export default NumberOverlayEditor;
