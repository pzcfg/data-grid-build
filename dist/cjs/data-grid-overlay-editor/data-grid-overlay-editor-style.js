"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataGridOverlayEditorStyle = void 0;

var _styles = require("../common/styles");

var _growingEntryStyle = require("../growing-entry/growing-entry-style");

const DataGridOverlayEditorStyle = _styles.styled.div`
    position: absolute;

    display: flex;
    flex-direction: column;
    ${p => !p.unstyled && `
    overflow: hidden;
    `}
    box-sizing: border-box;

    --overlay-top: ${p => p.targetRect.y}px;

    left: ${p => p.targetRect.x - 1}px;
    top: ${p => p.targetRect.y - 1}px;
    min-width: ${p => p.targetRect.width + 2}px;
    min-height: ${p => p.targetRect.height + 2}px;
    width: max-content;
    max-width: 400px;
    max-height: calc(100vh - ${p => p.targetRect.y + 10}px);

    ${p => !p.unstyled && `
    border-radius: 2px;
    background-color: ${p => p.theme.bgCell};

    box-shadow: 0 0 0 1px ${p => p.theme.accentColor}, 0px 0px 1px rgba(62, 65, 86, 0.4),
        0px 6px 12px rgba(62, 65, 86, 0.15);
    `}

    font-family: ${p => p.theme.fontFamily};
    font-size: 13px;

    ${p => p.pad && `padding: ${Math.max(0, (p.targetRect.height - 28) / 2)}px 8.5px 3px;`}

    @keyframes glide_fade_in {
        from {
            opacity: 0%;
        }

        to {
            opacity: 100%;
        }
    }

    animation: glide_fade_in 60ms 1;

    .clip-region {
        display: flex;
        flex-direction: column;
        ${p => !p.unstyled && `
        overflow-y: auto;
        overflow-x: hidden;
        border-radius: 2px;
        overflow: hidden;
        `}

        ${p => !p.unstyled && `
        input {
            width: 100%;

            border: none;
            border-width: 0;
            outline: none;
        }
        `}

        textarea {
            border: none;
            border-width: 0;
            outline: none;
        }

        ${_growingEntryStyle.GrowingEntryStyle} {
            height: 100%;
        }
    }

    text-align: start;
`;
exports.DataGridOverlayEditorStyle = DataGridOverlayEditorStyle;