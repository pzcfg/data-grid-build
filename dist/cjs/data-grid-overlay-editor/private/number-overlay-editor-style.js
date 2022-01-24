"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberOverlayEditorStyle = void 0;

var _styles = require("../../common/styles");

const NumberOverlayEditorStyle = _styles.styled.div`
    display: flex;
    margin-top: 6px;
    color: ${p => p.theme.textDark};

    > input {
        font-size: 13px;
        padding: 0;
        font-family: ${p => p.theme.fontFamily};
        color: ${p => p.theme.textDark};
    }
`;
exports.NumberOverlayEditorStyle = NumberOverlayEditorStyle;