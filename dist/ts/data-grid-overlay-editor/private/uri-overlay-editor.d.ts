import * as React from "react";
import type { SelectionRange } from "../../data-grid/data-grid-types";
interface Props {
    readonly uri: string;
    readonly onKeyDown: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    readonly onChange: (ev: React.ChangeEvent<HTMLTextAreaElement>) => void;
    readonly forceEditMode: boolean;
    readonly readonly: boolean;
    readonly validatedSelection?: SelectionRange;
}
declare const UriOverlayEditor: React.FunctionComponent<Props>;
export default UriOverlayEditor;
