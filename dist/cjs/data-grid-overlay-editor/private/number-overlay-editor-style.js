"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberOverlayEditorStyle = void 0;

var _styles = require("../../common/styles");

const NumberOverlayEditorStyle = _styles.styled.div`
    display: flex;
    margin: 6px 0 3px;
    color: var(--gdg-text-dark);

    > input {
        font-size: var(--gdg-editor-font-size);
        padding: 0;
        font-family: var(--gdg-font-family);
        color: var(--gdg-text-dark);
        background-color: var(--gdg-bg-cell);
    }
`;
exports.NumberOverlayEditorStyle = NumberOverlayEditorStyle;