import * as React from "react";
import { BubblesOverlayEditorStyle } from "./bubbles-overlay-editor-style.js";

const BubblesOverlayEditor = p => {
  const {
    bubbles,
    onKeyDown
  } = p;
  return React.createElement(BubblesOverlayEditorStyle, null, bubbles.map((b, i) => React.createElement("div", {
    key: i,
    className: "boe-bubble"
  }, b)), React.createElement("textarea", {
    className: "gdg-input",
    autoFocus: true,
    onKeyDown: onKeyDown
  }));
};

export default BubblesOverlayEditor;