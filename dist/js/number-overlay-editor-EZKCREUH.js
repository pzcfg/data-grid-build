"use strict";
import {
  styled_default
} from "./chunk-FWS5YBUI.js";

// src/data-grid-overlay-editor/private/number-overlay-editor.tsx
import * as React from "react";

// src/data-grid-overlay-editor/private/number-overlay-editor-style.tsx
var NumberOverlayEditorStyle = /* @__PURE__ */ styled_default("div")({
  name: "NumberOverlayEditorStyle",
  class: "n1czszh3"
});

// src/data-grid-overlay-editor/private/number-overlay-editor.tsx
import { NumericFormat } from "react-number-format";
function getDecimalSeparator() {
  var _a, _b, _c;
  const numberWithDecimalSeparator = 1.1;
  const result = (_c = (_b = (_a = Intl.NumberFormat()) == null ? void 0 : _a.formatToParts(numberWithDecimalSeparator)) == null ? void 0 : _b.find((part) => part.type === "decimal")) == null ? void 0 : _c.value;
  return result != null ? result : ".";
}
function getThousandSeprator() {
  return getDecimalSeparator() === "." ? "," : ".";
}
var NumberOverlayEditor = (p) => {
  const { value, onChange, disabled, highlight, validatedSelection } = p;
  const inputRef = React.useRef();
  React.useLayoutEffect(() => {
    var _a;
    if (validatedSelection !== void 0) {
      const range = typeof validatedSelection === "number" ? [validatedSelection, null] : validatedSelection;
      (_a = inputRef.current) == null ? void 0 : _a.setSelectionRange(range[0], range[1]);
    }
  }, [validatedSelection]);
  return /* @__PURE__ */ React.createElement(NumberOverlayEditorStyle, null, /* @__PURE__ */ React.createElement(NumericFormat, {
    autoFocus: true,
    getInputRef: inputRef,
    className: "gdg-input",
    onFocus: (e) => e.target.setSelectionRange(highlight ? 0 : e.target.value.length, e.target.value.length),
    disabled: disabled === true,
    thousandSeparator: getThousandSeprator(),
    decimalSeparator: getDecimalSeparator(),
    value: Object.is(value, -0) ? "-" : value != null ? value : "",
    onValueChange: onChange
  }));
};
var number_overlay_editor_default = NumberOverlayEditor;
export {
  number_overlay_editor_default as default
};
//# sourceMappingURL=number-overlay-editor-EZKCREUH.js.map
