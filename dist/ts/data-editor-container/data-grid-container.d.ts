import * as React from "react";
interface WrapperProps {
    width: number | string;
    height: number | string;
}
interface Props extends WrapperProps, React.HTMLAttributes<HTMLDivElement> {
}
export declare const DataEditorContainer: React.FunctionComponent<React.PropsWithChildren<Props>>;
export {};
