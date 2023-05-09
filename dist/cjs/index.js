"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../node_modules/@emotion/memoize/dist/memoize.browser.esm.js
function memoize(fn) {
  var cache2 = {};
  return function(arg) {
    if (cache2[arg] === void 0)
      cache2[arg] = fn(arg);
    return cache2[arg];
  };
}
var memoize_browser_esm_default;
var init_memoize_browser_esm = __esm({
  "../../node_modules/@emotion/memoize/dist/memoize.browser.esm.js"() {
    memoize_browser_esm_default = memoize;
  }
});

// ../../node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js
var reactPropsRegex, index, is_prop_valid_browser_esm_default;
var init_is_prop_valid_browser_esm = __esm({
  "../../node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js"() {
    init_memoize_browser_esm();
    reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
    index = memoize_browser_esm_default(
      function(prop) {
        return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
      }
    );
    is_prop_valid_browser_esm_default = index;
  }
});

// ../../node_modules/@linaria/core/esm/cx.js
var cx, cx_default;
var init_cx = __esm({
  "../../node_modules/@linaria/core/esm/cx.js"() {
    cx = function cx2() {
      const presentClassNames = Array.prototype.slice.call(arguments).filter(Boolean);
      const atomicClasses = {};
      const nonAtomicClasses = [];
      presentClassNames.forEach((arg) => {
        const individualClassNames = arg ? arg.split(" ") : [];
        individualClassNames.forEach((className) => {
          if (className.startsWith("atm_")) {
            const [, keyHash] = className.split("_");
            atomicClasses[keyHash] = className;
          } else {
            nonAtomicClasses.push(className);
          }
        });
      });
      const result = [];
      for (const keyHash in atomicClasses) {
        if (Object.prototype.hasOwnProperty.call(atomicClasses, keyHash)) {
          result.push(atomicClasses[keyHash]);
        }
      }
      result.push(...nonAtomicClasses);
      return result.join(" ");
    };
    cx_default = cx;
  }
});

// ../../node_modules/@linaria/core/esm/index.js
var init_esm = __esm({
  "../../node_modules/@linaria/core/esm/index.js"() {
    init_cx();
  }
});

// ../../node_modules/@linaria/react/esm/styled.js
function filterProps(component, props, omitKeys) {
  const filteredProps = omit(props, omitKeys);
  if (typeof component === "string" && component.indexOf("-") === -1 && !isCapital(component[0])) {
    Object.keys(filteredProps).forEach((key) => {
      if (!is_prop_valid_browser_esm_default(key)) {
        delete filteredProps[key];
      }
    });
  }
  return filteredProps;
}
function styled(tag) {
  return (options) => {
    if (true) {
      if (Array.isArray(options)) {
        throw new Error('Using the "styled" tag in runtime is not supported. Make sure you have set up the Babel plugin correctly. See https://github.com/callstack/linaria#setup');
      }
    }
    const render = (props, ref) => {
      const {
        as: component = tag,
        class: className
      } = props;
      const filteredProps = filterProps(component, props, ["as", "class"]);
      filteredProps.ref = ref;
      filteredProps.className = options.atomic ? cx_default(options.class, filteredProps.className || className) : cx_default(filteredProps.className || className, options.class);
      const {
        vars
      } = options;
      if (vars) {
        const style = {};
        for (const name in vars) {
          const variable = vars[name];
          const result = variable[0];
          const unit = variable[1] || "";
          const value = typeof result === "function" ? result(props) : result;
          warnIfInvalid(value, options.name);
          style[`--${name}`] = `${value}${unit}`;
        }
        const ownStyle = filteredProps.style || {};
        const keys = Object.keys(ownStyle);
        if (keys.length > 0) {
          keys.forEach((key) => {
            style[key] = ownStyle[key];
          });
        }
        filteredProps.style = style;
      }
      if (tag.__linaria && tag !== component) {
        filteredProps.as = component;
        return /* @__PURE__ */ import_react2.default.createElement(tag, filteredProps);
      }
      return /* @__PURE__ */ import_react2.default.createElement(component, filteredProps);
    };
    const Result = import_react2.default.forwardRef ? /* @__PURE__ */ import_react2.default.forwardRef(render) : (props) => {
      const rest = omit(props, ["innerRef"]);
      return render(rest, props.innerRef);
    };
    Result.displayName = options.name;
    Result.__linaria = {
      className: options.class,
      extends: tag
    };
    return Result;
  };
}
var import_react2, isCapital, filterKey, omit, warnIfInvalid, styled_default;
var init_styled = __esm({
  "../../node_modules/@linaria/react/esm/styled.js"() {
    init_is_prop_valid_browser_esm();
    import_react2 = __toESM(require("react"));
    init_esm();
    isCapital = (ch) => ch.toUpperCase() === ch;
    filterKey = (keys) => (key) => keys.indexOf(key) === -1;
    omit = (obj, keys) => {
      const res = {};
      Object.keys(obj).filter(filterKey(keys)).forEach((key) => {
        res[key] = obj[key];
      });
      return res;
    };
    warnIfInvalid = (value, componentName) => {
      if (true) {
        if (typeof value === "string" || typeof value === "number" && isFinite(value)) {
          return;
        }
        const stringified = typeof value === "object" ? JSON.stringify(value) : String(value);
        console.warn(`An interpolation evaluated to '${stringified}' in the component '${componentName}', which is probably a mistake. You should explicitly cast or transform the value to a string.`);
      }
    };
    styled_default = true ? new Proxy(styled, {
      get(o, prop) {
        return o(prop);
      }
    }) : styled;
  }
});

// ../../node_modules/@linaria/react/esm/index.js
var init_esm2 = __esm({
  "../../node_modules/@linaria/react/esm/index.js"() {
    init_styled();
  }
});

// linaria:number-overlay-editor-style_1i1z3n.linaria.css
var init_ = __esm({
  "linaria:number-overlay-editor-style_1i1z3n.linaria.css"() {
  }
});

// src/data-grid-overlay-editor/private/number-overlay-editor-style.tsx
var NumberOverlayEditorStyle;
var init_number_overlay_editor_style = __esm({
  "src/data-grid-overlay-editor/private/number-overlay-editor-style.tsx"() {
    "use strict";
    init_();
    init_esm2();
    NumberOverlayEditorStyle = /* @__PURE__ */ styled_default("div")({
      name: "NumberOverlayEditorStyle",
      class: "n1czszh3"
    });
  }
});

// src/data-grid-overlay-editor/private/number-overlay-editor.tsx
var number_overlay_editor_exports = {};
__export(number_overlay_editor_exports, {
  default: () => number_overlay_editor_default
});
function getDecimalSeparator() {
  var _a, _b, _c;
  const numberWithDecimalSeparator = 1.1;
  const result = (_c = (_b = (_a = Intl.NumberFormat()) == null ? void 0 : _a.formatToParts(numberWithDecimalSeparator)) == null ? void 0 : _b.find((part) => part.type === "decimal")) == null ? void 0 : _c.value;
  return result != null ? result : ".";
}
function getThousandSeprator() {
  return getDecimalSeparator() === "." ? "," : ".";
}
var React30, import_react_number_format, NumberOverlayEditor, number_overlay_editor_default;
var init_number_overlay_editor = __esm({
  "src/data-grid-overlay-editor/private/number-overlay-editor.tsx"() {
    "use strict";
    React30 = __toESM(require("react"), 1);
    init_number_overlay_editor_style();
    import_react_number_format = require("react-number-format");
    NumberOverlayEditor = (p) => {
      const { value, onChange, disabled, highlight, validatedSelection, fixedDecimals, allowNegative, thousandSeparator, decimalSeparator } = p;
      const inputRef = React30.useRef();
      React30.useLayoutEffect(() => {
        var _a;
        if (validatedSelection !== void 0) {
          const range2 = typeof validatedSelection === "number" ? [validatedSelection, null] : validatedSelection;
          (_a = inputRef.current) == null ? void 0 : _a.setSelectionRange(range2[0], range2[1]);
        }
      }, [validatedSelection]);
      return /* @__PURE__ */ React30.createElement(NumberOverlayEditorStyle, null, /* @__PURE__ */ React30.createElement(import_react_number_format.NumericFormat, {
        autoFocus: true,
        getInputRef: inputRef,
        className: "gdg-input",
        onFocus: (e) => e.target.setSelectionRange(highlight ? 0 : e.target.value.length, e.target.value.length),
        disabled: disabled === true,
        decimalScale: fixedDecimals,
        allowNegative,
        thousandSeparator: thousandSeparator != null ? thousandSeparator : getThousandSeprator(),
        decimalSeparator: decimalSeparator != null ? decimalSeparator : getDecimalSeparator(),
        value: Object.is(value, -0) ? "-" : value != null ? value : "",
        onValueChange: onChange
      }));
    };
    number_overlay_editor_default = NumberOverlayEditor;
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  BooleanEmpty: () => BooleanEmpty,
  BooleanIndeterminate: () => BooleanIndeterminate,
  CompactSelection: () => CompactSelection,
  DataEditor: () => DataEditor,
  GridCellKind: () => GridCellKind,
  GridColumnIcon: () => GridColumnIcon,
  ImageOverlayEditor: () => ImageOverlayEditor,
  InnerGridCellKind: () => InnerGridCellKind,
  MarkdownDiv: () => MarkdownDiv,
  TextCellEntry: () => GrowingEntry,
  blend: () => blend,
  booleanCellIsEditable: () => booleanCellIsEditable,
  default: () => DataEditor,
  drawTextCell: () => drawTextCellExternal,
  getDefaultTheme: () => getDataEditorTheme,
  getMiddleCenterBias: () => getMiddleCenterBias,
  gridSelectionHasItem: () => gridSelectionHasItem,
  groupHeaderKind: () => groupHeaderKind,
  headerCellCheckboxPrefix: () => headerCellCheckboxPrefix,
  headerCellCheckedMarker: () => headerCellCheckedMarker,
  headerCellIndeterminateMarker: () => headerCellIndeterminateMarker,
  headerCellUnheckedMarker: () => headerCellUnheckedMarker,
  headerKind: () => headerKind,
  interpolateColors: () => interpolateColors,
  isEditableGridCell: () => isEditableGridCell,
  isInnerOnlyCell: () => isInnerOnlyCell,
  isObjectEditorCallbackResult: () => isObjectEditorCallbackResult,
  isReadWriteCell: () => isReadWriteCell,
  isSizedGridColumn: () => isSizedGridColumn,
  isTextEditableGridCell: () => isTextEditableGridCell,
  measureTextCached: () => measureTextCached,
  outOfBoundsKind: () => outOfBoundsKind,
  parseToRgba: () => parseToRgba,
  resolveCellsThunk: () => resolveCellsThunk,
  useColumnSizer: () => useColumnSizer,
  useCustomCells: () => useCustomCells,
  useTheme: () => useTheme,
  withAlpha: () => withAlpha
});
module.exports = __toCommonJS(src_exports);

// src/data-editor/data-editor.tsx
var React36 = __toESM(require("react"), 1);

// src/common/support.ts
function proveType(_val) {
}
function panic(message = "This should not happen") {
  throw new Error(message);
}
function assert(fact, message = "Assertion failed") {
  if (fact)
    return;
  return panic(message);
}
function assertNever(_never) {
  return panic("Hell froze over");
}
function maybe(fn, defaultValue) {
  try {
    return fn();
  } catch (e) {
    return defaultValue;
  }
}
var has = Object.prototype.hasOwnProperty;
function deepEqual(foo, bar) {
  let ctor, len;
  if (foo === bar)
    return true;
  if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
    if (ctor === Date)
      return foo.getTime() === bar.getTime();
    if (ctor === RegExp)
      return foo.toString() === bar.toString();
    if (ctor === Array) {
      if ((len = foo.length) === bar.length) {
        while (len-- && deepEqual(foo[len], bar[len]))
          ;
      }
      return len === -1;
    }
    if (!ctor || typeof foo === "object") {
      len = 0;
      for (ctor in foo) {
        if (has.call(foo, ctor) && ++len && !has.call(bar, ctor))
          return false;
        if (!(ctor in bar) || !deepEqual(foo[ctor], bar[ctor]))
          return false;
      }
      return Object.keys(bar).length === len;
    }
  }
  return foo !== foo && bar !== bar;
}

// src/data-editor/data-editor.tsx
var import_clamp5 = __toESM(require("lodash/clamp.js"), 1);
var import_uniq = __toESM(require("lodash/uniq.js"), 1);
var import_flatten = __toESM(require("lodash/flatten.js"), 1);
var import_range2 = __toESM(require("lodash/range.js"), 1);
var import_debounce2 = __toESM(require("lodash/debounce.js"), 1);

// src/data-grid-overlay-editor/data-grid-overlay-editor.tsx
var React5 = __toESM(require("react"), 1);
var import_react_dom = require("react-dom");

// src/click-outside-container/click-outside-container.tsx
var React = __toESM(require("react"), 1);
var ClickOutsideContainer = class extends React.PureComponent {
  constructor() {
    super(...arguments);
    this.wrapperRef = React.createRef();
    this.clickOutside = (event) => {
      if (this.wrapperRef.current !== null && !this.wrapperRef.current.contains(event.target)) {
        let node = event.target;
        while (node !== null) {
          if (node.classList.contains("click-outside-ignore")) {
            return;
          }
          node = node.parentElement;
        }
        this.props.onClickOutside();
      }
    };
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.clickOutside, true);
    document.addEventListener("contextmenu", this.clickOutside, true);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.clickOutside);
    document.removeEventListener("contextmenu", this.clickOutside);
  }
  render() {
    const { onClickOutside, ...rest } = this.props;
    return /* @__PURE__ */ React.createElement("div", {
      ...rest,
      ref: this.wrapperRef
    }, this.props.children);
  }
};

// src/common/styles.ts
var import_react = __toESM(require("react"), 1);
function makeCSSStyle(theme) {
  var _a, _b;
  return {
    "--gdg-accent-color": theme.accentColor,
    "--gdg-accent-fg": theme.accentFg,
    "--gdg-accent-light": theme.accentLight,
    "--gdg-text-dark": theme.textDark,
    "--gdg-text-medium": theme.textMedium,
    "--gdg-text-light": theme.textLight,
    "--gdg-text-bubble": theme.textBubble,
    "--gdg-bg-icon-header": theme.bgIconHeader,
    "--gdg-fg-icon-header": theme.fgIconHeader,
    "--gdg-text-header": theme.textHeader,
    "--gdg-text-group-header": (_a = theme.textGroupHeader) != null ? _a : theme.textHeader,
    "--gdg-text-header-selected": theme.textHeaderSelected,
    "--gdg-bg-cell": theme.bgCell,
    "--gdg-bg-cell-medium": theme.bgCellMedium,
    "--gdg-bg-header": theme.bgHeader,
    "--gdg-bg-header-has-focus": theme.bgHeaderHasFocus,
    "--gdg-bg-header-hovered": theme.bgHeaderHovered,
    "--gdg-bg-bubble": theme.bgBubble,
    "--gdg-bg-bubble-selected": theme.bgBubbleSelected,
    "--gdg-bg-search-result": theme.bgSearchResult,
    "--gdg-border-color": theme.borderColor,
    "--gdg-horizontal-border-color": (_b = theme.horizontalBorderColor) != null ? _b : theme.borderColor,
    "--gdg-drilldown-border": theme.drilldownBorder,
    "--gdg-link-color": theme.linkColor,
    "--gdg-cell-horizontal-padding": `${theme.cellHorizontalPadding}px`,
    "--gdg-cell-vertical-padding": `${theme.cellVerticalPadding}px`,
    "--gdg-header-font-style": theme.headerFontStyle,
    "--gdg-base-font-style": theme.baseFontStyle,
    "--gdg-font-family": theme.fontFamily,
    "--gdg-editor-font-size": theme.editorFontSize
  };
}
var dataEditorBaseTheme = {
  accentColor: "#4F5DFF",
  accentFg: "#FFFFFF",
  accentLight: "rgba(62, 116, 253, 0.1)",
  textDark: "#313139",
  textMedium: "#737383",
  textLight: "#B2B2C0",
  textBubble: "#313139",
  bgIconHeader: "#737383",
  fgIconHeader: "#FFFFFF",
  textHeader: "#313139",
  textGroupHeader: "#313139BB",
  textHeaderSelected: "#FFFFFF",
  bgCell: "#FFFFFF",
  bgCellMedium: "#FAFAFB",
  bgHeader: "#F7F7F8",
  bgHeaderHasFocus: "#E9E9EB",
  bgHeaderHovered: "#EFEFF1",
  bgBubble: "#EDEDF3",
  bgBubbleSelected: "#FFFFFF",
  bgSearchResult: "#fff9e3",
  borderColor: "rgba(115, 116, 131, 0.16)",
  drilldownBorder: "rgba(0, 0, 0, 0)",
  linkColor: "#4F5DFF",
  cellHorizontalPadding: 8,
  cellVerticalPadding: 3,
  headerIconSize: 18,
  headerFontStyle: "600 13px",
  baseFontStyle: "13px",
  fontFamily: "Inter, Roboto, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, noto, arial, sans-serif",
  editorFontSize: "13px",
  lineHeight: 1.4
};
function getDataEditorTheme() {
  return dataEditorBaseTheme;
}
var ThemeContext = import_react.default.createContext(dataEditorBaseTheme);
function useTheme() {
  return import_react.default.useContext(ThemeContext);
}

// src/data-grid/data-grid-types.ts
var import_has = __toESM(require("lodash/has.js"), 1);
function gridSelectionHasItem(sel, item) {
  const [col, row] = item;
  if (sel.columns.hasIndex(col) || sel.rows.hasIndex(row))
    return true;
  if (sel.current !== void 0) {
    if (sel.current.cell[0] === col && sel.current.cell[1] === row)
      return true;
    const toCheck = [sel.current.range, ...sel.current.rangeStack];
    for (const r of toCheck) {
      if (col >= r.x && col < r.x + r.width && row >= r.y && row < r.y + r.height)
        return true;
    }
  }
  return false;
}
var BooleanEmpty = null;
var BooleanIndeterminate = void 0;
var headerKind = "header";
var groupHeaderKind = "group-header";
var outOfBoundsKind = "out-of-bounds";
var GridCellKind;
(function(GridCellKind2) {
  GridCellKind2["Uri"] = "uri";
  GridCellKind2["Text"] = "text";
  GridCellKind2["Image"] = "image";
  GridCellKind2["RowID"] = "row-id";
  GridCellKind2["Number"] = "number";
  GridCellKind2["Bubble"] = "bubble";
  GridCellKind2["Boolean"] = "boolean";
  GridCellKind2["Loading"] = "loading";
  GridCellKind2["Markdown"] = "markdown";
  GridCellKind2["Drilldown"] = "drilldown";
  GridCellKind2["Protected"] = "protected";
  GridCellKind2["Custom"] = "custom";
})(GridCellKind || (GridCellKind = {}));
var GridColumnIcon;
(function(GridColumnIcon2) {
  GridColumnIcon2["HeaderRowID"] = "headerRowID";
  GridColumnIcon2["HeaderCode"] = "headerCode";
  GridColumnIcon2["HeaderNumber"] = "headerNumber";
  GridColumnIcon2["HeaderString"] = "headerString";
  GridColumnIcon2["HeaderBoolean"] = "headerBoolean";
  GridColumnIcon2["HeaderAudioUri"] = "headerAudioUri";
  GridColumnIcon2["HeaderVideoUri"] = "headerVideoUri";
  GridColumnIcon2["HeaderEmoji"] = "headerEmoji";
  GridColumnIcon2["HeaderImage"] = "headerImage";
  GridColumnIcon2["HeaderUri"] = "headerUri";
  GridColumnIcon2["HeaderPhone"] = "headerPhone";
  GridColumnIcon2["HeaderMarkdown"] = "headerMarkdown";
  GridColumnIcon2["HeaderDate"] = "headerDate";
  GridColumnIcon2["HeaderTime"] = "headerTime";
  GridColumnIcon2["HeaderEmail"] = "headerEmail";
  GridColumnIcon2["HeaderReference"] = "headerReference";
  GridColumnIcon2["HeaderIfThenElse"] = "headerIfThenElse";
  GridColumnIcon2["HeaderSingleValue"] = "headerSingleValue";
  GridColumnIcon2["HeaderLookup"] = "headerLookup";
  GridColumnIcon2["HeaderTextTemplate"] = "headerTextTemplate";
  GridColumnIcon2["HeaderMath"] = "headerMath";
  GridColumnIcon2["HeaderRollup"] = "headerRollup";
  GridColumnIcon2["HeaderJoinStrings"] = "headerJoinStrings";
  GridColumnIcon2["HeaderSplitString"] = "headerSplitString";
  GridColumnIcon2["HeaderGeoDistance"] = "headerGeoDistance";
  GridColumnIcon2["HeaderArray"] = "headerArray";
  GridColumnIcon2["RowOwnerOverlay"] = "rowOwnerOverlay";
  GridColumnIcon2["ProtectedColumnOverlay"] = "protectedColumnOverlay";
})(GridColumnIcon || (GridColumnIcon = {}));
var headerCellCheckboxPrefix = "___gdg_header_cell_";
var headerCellCheckedMarker = headerCellCheckboxPrefix + "checked";
var headerCellUnheckedMarker = headerCellCheckboxPrefix + "unchecked";
var headerCellIndeterminateMarker = headerCellCheckboxPrefix + "indeterminate";
function isSizedGridColumn(c) {
  return "width" in c && typeof c.width === "number";
}
async function resolveCellsThunk(thunk) {
  if (typeof thunk === "object")
    return thunk;
  return await thunk();
}
function isEditableGridCell(cell) {
  if (cell.kind === GridCellKind.Loading || cell.kind === GridCellKind.Bubble || cell.kind === GridCellKind.RowID || cell.kind === GridCellKind.Protected || cell.kind === GridCellKind.Drilldown) {
    return false;
  }
  proveType(cell);
  return true;
}
function isTextEditableGridCell(cell) {
  if (cell.kind === GridCellKind.Loading || cell.kind === GridCellKind.Bubble || cell.kind === GridCellKind.RowID || cell.kind === GridCellKind.Protected || cell.kind === GridCellKind.Drilldown || cell.kind === GridCellKind.Boolean || cell.kind === GridCellKind.Image || cell.kind === GridCellKind.Custom) {
    return false;
  }
  proveType(cell);
  return true;
}
function isInnerOnlyCell(cell) {
  return cell.kind === InnerGridCellKind.Marker || cell.kind === InnerGridCellKind.NewRow;
}
function isReadWriteCell(cell) {
  if (!isEditableGridCell(cell) || cell.kind === GridCellKind.Image)
    return false;
  if (cell.kind === GridCellKind.Text || cell.kind === GridCellKind.Number || cell.kind === GridCellKind.Markdown || cell.kind === GridCellKind.Uri || cell.kind === GridCellKind.Custom || cell.kind === GridCellKind.Boolean) {
    return cell.readonly !== true;
  }
  assertNever(cell);
}
function isObjectEditorCallbackResult(obj) {
  return (0, import_has.default)(obj, "editor");
}
function booleanCellIsEditable(cell) {
  var _a;
  return !((_a = cell.readonly) != null ? _a : false);
}
var InnerGridCellKind;
(function(InnerGridCellKind2) {
  InnerGridCellKind2["NewRow"] = "new-row";
  InnerGridCellKind2["Marker"] = "marker";
})(InnerGridCellKind || (InnerGridCellKind = {}));
function mergeRanges(input) {
  if (input.length === 0) {
    return [];
  }
  const ranges = [...input];
  const stack = [];
  ranges.sort(function(a, b) {
    return a[0] - b[0];
  });
  stack.push([...ranges[0]]);
  for (const range2 of ranges.slice(1)) {
    const top = stack[stack.length - 1];
    if (top[1] < range2[0]) {
      stack.push([...range2]);
    } else if (top[1] < range2[1]) {
      top[1] = range2[1];
    }
  }
  return stack;
}
var emptyCompactSelection;
var _CompactSelection = class {
  constructor(items) {
    this.items = items;
    this.offset = (amount) => {
      if (amount === 0)
        return this;
      const newItems = this.items.map((x) => [x[0] + amount, x[1] + amount]);
      return new _CompactSelection(newItems);
    };
    this.add = (selection) => {
      const slice = typeof selection === "number" ? [selection, selection + 1] : selection;
      const newItems = mergeRanges([...this.items, slice]);
      return new _CompactSelection(newItems);
    };
    this.remove = (selection) => {
      const items2 = [...this.items];
      const selMin = typeof selection === "number" ? selection : selection[0];
      const selMax = typeof selection === "number" ? selection + 1 : selection[1];
      for (const [i, slice] of items2.entries()) {
        const [start, end] = slice;
        if (start <= selMax && selMin <= end) {
          const toAdd = [];
          if (start < selMin) {
            toAdd.push([start, selMin]);
          }
          if (selMax < end) {
            toAdd.push([selMax, end]);
          }
          items2.splice(i, 1, ...toAdd);
        }
      }
      return new _CompactSelection(items2);
    };
    this.first = () => {
      if (this.items.length === 0)
        return void 0;
      return this.items[0][0];
    };
    this.last = () => {
      if (this.items.length === 0)
        return void 0;
      return this.items.slice(-1)[0][1] - 1;
    };
    this.hasIndex = (index2) => {
      for (let i = 0; i < this.items.length; i++) {
        const [start, end] = this.items[i];
        if (index2 >= start && index2 < end)
          return true;
      }
      return false;
    };
    this.hasAll = (index2) => {
      for (let x = index2[0]; x < index2[1]; x++) {
        if (!this.hasIndex(x))
          return false;
      }
      return true;
    };
    this.some = (predicate) => {
      for (const i of this) {
        if (predicate(i))
          return true;
      }
      return false;
    };
    this.equals = (other) => {
      if (other === this)
        return true;
      if (other.items.length !== this.items.length)
        return false;
      for (let i = 0; i < this.items.length; i++) {
        const left = other.items[i];
        const right = this.items[i];
        if (left[0] !== right[0] || left[1] !== right[1])
          return false;
      }
      return true;
    };
    this.toArray = () => {
      const result = [];
      for (const [start, end] of this.items) {
        for (let x = start; x < end; x++) {
          result.push(x);
        }
      }
      return result;
    };
  }
  get length() {
    let len = 0;
    for (const [start, end] of this.items) {
      len += end - start;
    }
    return len;
  }
  *[Symbol.iterator]() {
    for (const [start, end] of this.items) {
      for (let x = start; x < end; x++) {
        yield x;
      }
    }
  }
};
var CompactSelection = _CompactSelection;
CompactSelection.empty = () => {
  return emptyCompactSelection != null ? emptyCompactSelection : emptyCompactSelection = new _CompactSelection([]);
};
CompactSelection.fromSingleSelection = (selection) => {
  return _CompactSelection.empty().add(selection);
};

// src/data-grid-overlay-editor/data-grid-overlay-editor-style.tsx
init_esm2();
var _exp = () => (p) => p.targetY;
var _exp2 = () => (p) => p.targetX - 1;
var _exp3 = () => (p) => p.targetY - 1;
var _exp4 = () => (p) => p.targetWidth + 2;
var _exp5 = () => (p) => p.targetHeight + 2;
var _exp6 = () => (p) => p.targetY + 10;
var _exp7 = () => (p) => Math.max(0, (p.targetHeight - 28) / 2);
var DataGridOverlayEditorStyle = /* @__PURE__ */ styled_default("div")({
  name: "DataGridOverlayEditorStyle",
  class: "d1t1th9s",
  vars: {
    "d1t1th9s-0": [_exp(), "px"],
    "d1t1th9s-1": [_exp2(), "px"],
    "d1t1th9s-2": [_exp3(), "px"],
    "d1t1th9s-3": [_exp4(), "px"],
    "d1t1th9s-4": [_exp5(), "px"],
    "d1t1th9s-5": [_exp6(), "px"],
    "d1t1th9s-6": [_exp7(), "px"]
  }
});

// src/data-grid-overlay-editor/use-stay-on-screen.ts
var React4 = __toESM(require("react"), 1);
function useRefState() {
  const [refState, setRefState] = React4.useState();
  return [refState != null ? refState : void 0, setRefState];
}
function useStayOnScreen() {
  const [ref, setRef] = useRefState();
  const [xOffset, setXOffset] = React4.useState(0);
  const [isIntersecting, setIsIntersecting] = React4.useState(true);
  React4.useLayoutEffect(() => {
    if (ref === void 0)
      return;
    if (!("IntersectionObserver" in window))
      return;
    const observer = new IntersectionObserver((ents) => {
      if (ents.length === 0)
        return;
      setIsIntersecting(ents[0].isIntersecting);
    }, { threshold: 1 });
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref]);
  React4.useEffect(() => {
    if (isIntersecting || ref === void 0)
      return;
    let rafHandle;
    const fn = () => {
      const { right: refRight } = ref.getBoundingClientRect();
      setXOffset((cv) => Math.min(cv + window.innerWidth - refRight - 10, 0));
      rafHandle = requestAnimationFrame(fn);
    };
    rafHandle = requestAnimationFrame(fn);
    return () => {
      if (rafHandle !== void 0) {
        cancelAnimationFrame(rafHandle);
      }
    };
  }, [ref, isIntersecting]);
  const style = React4.useMemo(() => {
    return { transform: `translateX(${xOffset}px)` };
  }, [xOffset]);
  return {
    ref: setRef,
    style
  };
}

// src/data-grid-overlay-editor/data-grid-overlay-editor.tsx
var DataGridOverlayEditor = (p) => {
  const {
    target,
    content,
    onFinishEditing: onFinishEditingIn,
    forceEditMode,
    initialValue,
    imageEditorOverride,
    markdownDivCreateNode,
    highlight,
    className,
    theme,
    id,
    cell,
    validateCell,
    getCellRenderer,
    provideEditor
  } = p;
  const [tempValue, setTempValueRaw] = React5.useState(forceEditMode ? content : void 0);
  const lastValueRef = React5.useRef(tempValue != null ? tempValue : content);
  lastValueRef.current = tempValue != null ? tempValue : content;
  const [isValid, setIsValid] = React5.useState(() => {
    if (validateCell === void 0)
      return true;
    return !(isEditableGridCell(content) && (validateCell == null ? void 0 : validateCell(cell, content, lastValueRef.current)) === false);
  });
  const onFinishEditing = React5.useCallback((newCell, movement) => {
    onFinishEditingIn(isValid ? newCell : void 0, movement);
  }, [isValid, onFinishEditingIn]);
  const setTempValue = React5.useCallback((newVal) => {
    if (validateCell !== void 0 && newVal !== void 0 && isEditableGridCell(newVal)) {
      const validResult = validateCell(cell, newVal, lastValueRef.current);
      if (validResult === false) {
        setIsValid(false);
      } else if (typeof validResult === "object") {
        newVal = validResult;
        setIsValid(true);
      } else {
        setIsValid(true);
      }
    }
    setTempValueRaw(newVal);
  }, [cell, validateCell]);
  const finished = React5.useRef(false);
  const customMotion = React5.useRef(void 0);
  const onClickOutside = React5.useCallback(() => {
    onFinishEditing(tempValue, [0, 0]);
    finished.current = true;
  }, [tempValue, onFinishEditing]);
  const onEditorFinished = React5.useCallback((newValue) => {
    var _a;
    onFinishEditing(newValue, (_a = customMotion.current) != null ? _a : [0, 0]);
    finished.current = true;
  }, [onFinishEditing]);
  const onKeyDown = React5.useCallback(async (event) => {
    let save = false;
    if (event.key === "Escape") {
      event.stopPropagation();
      event.preventDefault();
      customMotion.current = [0, 0];
    } else if (event.key === "Enter" && !event.shiftKey) {
      event.stopPropagation();
      event.preventDefault();
      customMotion.current = [0, 1];
      save = true;
    } else if (event.key === "Tab") {
      event.stopPropagation();
      event.preventDefault();
      customMotion.current = [event.shiftKey ? -1 : 1, 0];
      save = true;
    }
    window.setTimeout(() => {
      if (!finished.current && customMotion.current !== void 0) {
        onFinishEditing(save ? tempValue : void 0, customMotion.current);
        finished.current = true;
      }
    }, 0);
  }, [onFinishEditing, tempValue]);
  const targetValue = tempValue != null ? tempValue : content;
  const [editorProvider, useLabel] = React5.useMemo(() => {
    var _a, _b;
    if (isInnerOnlyCell(content))
      return [];
    const external = provideEditor == null ? void 0 : provideEditor(content);
    if (external !== void 0)
      return [external, false];
    return [(_b = (_a = getCellRenderer(content)) == null ? void 0 : _a.provideEditor) == null ? void 0 : _b.call(_a, content), false];
  }, [content, getCellRenderer, provideEditor]);
  const { ref, style: stayOnScreenStyle } = useStayOnScreen();
  let pad = true;
  let editor;
  let style = true;
  let styleOverride;
  if (editorProvider !== void 0) {
    pad = editorProvider.disablePadding !== true;
    style = editorProvider.disableStyling !== true;
    const isObjectEditor = isObjectEditorCallbackResult(editorProvider);
    if (isObjectEditor) {
      styleOverride = editorProvider.styleOverride;
    }
    const CustomEditor = isObjectEditor ? editorProvider.editor : editorProvider;
    editor = /* @__PURE__ */ React5.createElement(CustomEditor, {
      isHighlighted: highlight,
      onChange: setTempValue,
      value: targetValue,
      initialValue,
      onFinishedEditing: onEditorFinished,
      validatedSelection: isEditableGridCell(targetValue) ? targetValue.selectionRange : void 0,
      forceEditMode,
      target,
      imageEditorOverride,
      markdownDivCreateNode,
      isValid
    });
  }
  styleOverride = { ...styleOverride, ...stayOnScreenStyle };
  const portalElement = document.getElementById("portal");
  if (portalElement === null) {
    console.error('Cannot open Data Grid overlay editor, because portal not found.  Please add `<div id="portal" />` as the last child of your `<body>`.');
    return null;
  }
  let classWrap = style ? "gdg-style" : "gdg-unstyle";
  if (!isValid) {
    classWrap += " invalid";
  }
  if (pad) {
    classWrap += " pad";
  }
  return (0, import_react_dom.createPortal)(/* @__PURE__ */ React5.createElement(ThemeContext.Provider, {
    value: theme
  }, /* @__PURE__ */ React5.createElement(ClickOutsideContainer, {
    style: makeCSSStyle(theme),
    className,
    onClickOutside
  }, /* @__PURE__ */ React5.createElement(DataGridOverlayEditorStyle, {
    ref,
    id,
    className: classWrap,
    style: styleOverride,
    as: useLabel === true ? "label" : void 0,
    targetX: target.x,
    targetY: target.y,
    targetWidth: target.width,
    targetHeight: target.height
  }, /* @__PURE__ */ React5.createElement("div", {
    className: "clip-region",
    onKeyDown
  }, editor)))), portalElement);
};
var data_grid_overlay_editor_default = DataGridOverlayEditor;

// src/data-grid-search/data-grid-search.tsx
var React13 = __toESM(require("react"), 1);

// src/scrolling-data-grid/scrolling-data-grid.tsx
var React12 = __toESM(require("react"), 1);
init_esm2();

// src/data-grid-dnd/data-grid-dnd.tsx
var import_clamp3 = __toESM(require("lodash/clamp.js"), 1);
var React10 = __toESM(require("react"), 1);

// src/data-grid/data-grid.tsx
var React9 = __toESM(require("react"), 1);

// src/common/image-window-loader.ts
var import_throttle = __toESM(require("lodash/throttle.js"), 1);
var rowShift = 1 << 16;
var imgPool = [];
function packColRowToNumber(col, row) {
  return row * rowShift + col;
}
function unpackCol(packed) {
  return packed % rowShift;
}
function unpackRow(packed, col) {
  return (packed - col) / rowShift;
}
function unpackNumberToColRow(packed) {
  const col = unpackCol(packed);
  const row = unpackRow(packed, col);
  return [col, row];
}
var ImageWindowLoaderImpl = class {
  constructor() {
    this.imageLoaded = () => void 0;
    this.loadedLocations = [];
    this.visibleWindow = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
    this.freezeCols = 0;
    this.isInWindow = (packed) => {
      const col = unpackCol(packed);
      const row = unpackRow(packed, col);
      const w = this.visibleWindow;
      if (col < this.freezeCols && row >= w.y && row <= w.y + w.height)
        return true;
      return col >= w.x && col <= w.x + w.width && row >= w.y && row <= w.y + w.height;
    };
    this.cache = {};
    this.sendLoaded = (0, import_throttle.default)(() => {
      this.imageLoaded(this.loadedLocations);
      this.loadedLocations = [];
    }, 20);
    this.clearOutOfWindow = () => {
      const keys = Object.keys(this.cache);
      for (const key of keys) {
        const obj = this.cache[key];
        let keep = false;
        for (let j = 0; j < obj.cells.length; j++) {
          const packed = obj.cells[j];
          if (this.isInWindow(packed)) {
            keep = true;
            break;
          }
        }
        if (keep) {
          obj.cells = obj.cells.filter(this.isInWindow);
        } else {
          obj.cancel();
          delete this.cache[key];
        }
      }
    };
  }
  setCallback(imageLoaded) {
    this.imageLoaded = imageLoaded;
  }
  setWindow(newWindow, freezeCols) {
    if (this.visibleWindow.x === newWindow.x && this.visibleWindow.y === newWindow.y && this.visibleWindow.width === newWindow.width && this.visibleWindow.height === newWindow.height && this.freezeCols === freezeCols)
      return;
    this.visibleWindow = newWindow;
    this.freezeCols = freezeCols;
    this.clearOutOfWindow();
  }
  loadImage(url, col, row, key) {
    var _a;
    let loaded = false;
    const img = (_a = imgPool.pop()) != null ? _a : new Image();
    let canceled = false;
    const result = {
      img: void 0,
      cells: [packColRowToNumber(col, row)],
      url,
      cancel: () => {
        if (canceled)
          return;
        canceled = true;
        if (imgPool.length < 12) {
          imgPool.unshift(img);
        } else if (!loaded) {
          img.src = "";
        }
      }
    };
    const loadPromise = new Promise((r) => img.addEventListener("load", () => r(null)));
    requestAnimationFrame(async () => {
      try {
        img.src = url;
        await loadPromise;
        await img.decode();
        const toWrite = this.cache[key];
        if (toWrite !== void 0 && !canceled) {
          toWrite.img = img;
          for (const packed of toWrite.cells) {
            this.loadedLocations.push(unpackNumberToColRow(packed));
          }
          loaded = true;
          this.sendLoaded();
        }
      } catch (e) {
        result.cancel();
      }
    });
    this.cache[key] = result;
  }
  loadOrGetImage(url, col, row) {
    const key = url;
    const current = this.cache[key];
    if (current !== void 0) {
      const packed = packColRowToNumber(col, row);
      if (!current.cells.includes(packed)) {
        current.cells.push(packed);
      }
      return current.img;
    } else {
      this.loadImage(url, col, row, key);
    }
    return void 0;
  }
};
var image_window_loader_default = ImageWindowLoaderImpl;

// src/common/utils.tsx
var React6 = __toESM(require("react"), 1);
var import_debounce = __toESM(require("lodash/debounce.js"), 1);
function useEventListener(eventName, handler, element, passive, capture = false) {
  const savedHandler = React6.useRef();
  savedHandler.current = handler;
  React6.useEffect(() => {
    if (element === null || element.addEventListener === void 0)
      return;
    const el = element;
    const eventListener = (event) => {
      var _a;
      (_a = savedHandler.current) == null ? void 0 : _a.call(el, event);
    };
    el.addEventListener(eventName, eventListener, { passive, capture });
    return () => {
      el.removeEventListener(eventName, eventListener, { capture });
    };
  }, [eventName, element, passive, capture]);
}
function whenDefined(obj, result) {
  return obj === void 0 ? void 0 : result;
}
var PI = Math.PI;
function degreesToRadians(degrees) {
  return degrees * PI / 180;
}
var getSquareBB = (posX, posY, squareSideLength) => ({
  x1: posX - squareSideLength / 2,
  y1: posY - squareSideLength / 2,
  x2: posX + squareSideLength / 2,
  y2: posY + squareSideLength / 2
});
var getSquareXPosFromAlign = (alignment, containerX, containerWidth, horizontalPadding, squareWidth) => {
  switch (alignment) {
    case "left":
      return Math.floor(containerX) + horizontalPadding + squareWidth / 2;
    case "center":
      return Math.floor(containerX + containerWidth / 2);
    case "right":
      return Math.floor(containerX + containerWidth) - horizontalPadding - squareWidth / 2;
  }
};
var getSquareWidth = (maxSize, containerHeight, verticalPadding) => Math.min(maxSize, containerHeight - verticalPadding * 2);
var pointIsWithinBB = (x, y, bb) => bb.x1 <= x && x <= bb.x2 && bb.y1 <= y && y <= bb.y2;
var EditPencil = (props) => {
  var _a;
  const fg = (_a = props.fgColor) != null ? _a : "currentColor";
  return /* @__PURE__ */ React6.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React6.createElement("path", {
    d: "M12.7073 7.05029C7.87391 11.8837 10.4544 9.30322 6.03024 13.7273C5.77392 13.9836 5.58981 14.3071 5.50189 14.6587L4.52521 18.5655C4.38789 19.1148 4.88543 19.6123 5.43472 19.475L9.34146 18.4983C9.69313 18.4104 10.0143 18.2286 10.2706 17.9722L16.9499 11.2929",
    stroke: fg,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    vectorEffect: "non-scaling-stroke"
  }), /* @__PURE__ */ React6.createElement("path", {
    d: "M20.4854 4.92901L19.0712 3.5148C18.2901 2.73375 17.0238 2.73375 16.2428 3.5148L14.475 5.28257C15.5326 7.71912 16.4736 8.6278 18.7176 9.52521L20.4854 7.75744C21.2665 6.97639 21.2665 5.71006 20.4854 4.92901Z",
    stroke: fg,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    vectorEffect: "non-scaling-stroke"
  }));
};
var Checkmark = (props) => {
  var _a;
  const fg = (_a = props.fgColor) != null ? _a : "currentColor";
  return /* @__PURE__ */ React6.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React6.createElement("path", {
    d: "M19 6L10.3802 17L5.34071 11.8758",
    vectorEffect: "non-scaling-stroke",
    stroke: fg,
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};
function useDebouncedMemo(factory, deps, time) {
  const [state, setState] = React6.useState(factory);
  const mountedRef = React6.useRef(true);
  React6.useEffect(() => () => {
    mountedRef.current = false;
  }, []);
  const debouncedSetState = React6.useRef((0, import_debounce.default)((x) => {
    if (mountedRef.current) {
      setState(x);
    }
  }, time));
  React6.useLayoutEffect(() => {
    if (mountedRef.current) {
      debouncedSetState.current(() => factory());
    }
  }, deps);
  return state;
}
var rtlRange = "\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC";
var ltrRange = "A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u0300-\u0590\u0800-\u1FFF\u200E\u2C00-\uFB1C\uFE00-\uFE6F\uFEFD-\uFFFF";
var rtl = new RegExp("^[^" + ltrRange + "]*[" + rtlRange + "]");
var ltr = new RegExp("^[^" + rtlRange + "]*[" + ltrRange + "]");
function direction(value) {
  return rtl.test(value) ? "rtl" : ltr.test(value) ? "ltr" : "neutral";
}
var scrollbarWidthCache = void 0;
function getScrollBarWidth() {
  if (scrollbarWidthCache !== void 0)
    return scrollbarWidthCache;
  const inner = document.createElement("p");
  inner.style.width = "100%";
  inner.style.height = "200px";
  const outer = document.createElement("div");
  outer.id = "testScrollbar";
  outer.style.position = "absolute";
  outer.style.top = "0px";
  outer.style.left = "0px";
  outer.style.visibility = "hidden";
  outer.style.width = "200px";
  outer.style.height = "150px";
  outer.style.overflow = "hidden";
  outer.append(inner);
  document.body.append(outer);
  const w1 = inner.offsetWidth;
  outer.style.overflow = "scroll";
  let w2 = inner.offsetWidth;
  if (w1 === w2) {
    w2 = outer.clientWidth;
  }
  outer.remove();
  scrollbarWidthCache = w1 - w2;
  return scrollbarWidthCache;
}
var empty = Symbol();
function useStateWithReactiveInput(inputState) {
  const inputStateRef = React6.useRef([empty, inputState]);
  if (inputStateRef.current[1] !== inputState) {
    inputStateRef.current[0] = inputState;
  }
  inputStateRef.current[1] = inputState;
  const [state, setState] = React6.useState(inputState);
  const [, forceRender] = React6.useState();
  const setStateOuter = React6.useCallback((nv) => {
    const s = inputStateRef.current[0];
    if (s !== empty) {
      nv = typeof nv === "function" ? nv(s) : nv;
      if (nv === s)
        return;
    }
    if (s !== empty)
      forceRender({});
    setState((pv) => {
      if (typeof nv === "function") {
        return nv(s === empty ? pv : s);
      }
      return nv;
    });
    inputStateRef.current[0] = empty;
  }, []);
  const onEmpty = React6.useCallback(() => {
    inputStateRef.current[0] = empty;
    forceRender({});
  }, []);
  return [inputStateRef.current[0] === empty ? state : inputStateRef.current[0], setStateOuter, onEmpty];
}

// src/data-grid/data-grid-lib.ts
var import_react4 = __toESM(require("react"), 1);
var import_canvas_hypertxt = require("canvas-hypertxt");
function useMappedColumns(columns, freezeColumns) {
  return import_react4.default.useMemo(() => columns.map((c, i) => ({
    ...c,
    sourceIndex: i,
    sticky: i < freezeColumns
  })), [columns, freezeColumns]);
}
function isGroupEqual(left, right) {
  return (left != null ? left : "") === (right != null ? right : "");
}
function cellIsSelected(location, cell, selection) {
  if ((selection == null ? void 0 : selection.current) === void 0)
    return false;
  const [col, row] = selection.current.cell;
  const [cellCol, cellRow] = location;
  if (cellRow !== row)
    return false;
  if (cell.span === void 0) {
    return col === cellCol;
  }
  return col >= cell.span[0] && col <= cell.span[1];
}
function cellIsInRect(location, cell, rect) {
  const startX = rect.x;
  const endX = rect.x + rect.width - 1;
  const startY = rect.y;
  const endY = rect.y + rect.height - 1;
  const [cellCol, cellRow] = location;
  if (cellRow < startY || cellRow > endY)
    return false;
  if (cell.span === void 0) {
    return cellCol >= startX && cellCol <= endX;
  }
  const [spanStart, spanEnd] = cell.span;
  return spanStart >= startX && spanStart <= endX || spanEnd >= startX && spanStart <= endX || spanStart < startX && spanEnd > endX;
}
function cellIsInRange(location, cell, selection) {
  let result = 0;
  if (selection.current === void 0)
    return result;
  if (cellIsInRect(location, cell, selection.current.range))
    result++;
  for (const r of selection.current.rangeStack) {
    if (cellIsInRect(location, cell, r)) {
      result++;
    }
  }
  return result;
}
function remapForDnDState(columns, dndState) {
  let mappedCols = columns;
  if (dndState !== void 0) {
    let writable = [...columns];
    const temp = mappedCols[dndState.src];
    if (dndState.src > dndState.dest) {
      writable.splice(dndState.src, 1);
      writable.splice(dndState.dest, 0, temp);
    } else {
      writable.splice(dndState.dest + 1, 0, temp);
      writable.splice(dndState.src, 1);
    }
    writable = writable.map((c, i) => ({
      ...c,
      sticky: columns[i].sticky
    }));
    mappedCols = writable;
  }
  return mappedCols;
}
function getStickyWidth(columns, dndState) {
  let result = 0;
  const remapped = remapForDnDState(columns, dndState);
  for (let i = 0; i < remapped.length; i++) {
    const c = remapped[i];
    if (c.sticky)
      result += c.width;
    else
      break;
  }
  return result;
}
function getEffectiveColumns(columns, cellXOffset, width, dndState, tx) {
  const mappedCols = remapForDnDState(columns, dndState);
  const sticky = [];
  for (const c of mappedCols) {
    if (c.sticky) {
      sticky.push(c);
    } else {
      break;
    }
  }
  if (sticky.length > 0) {
    for (const c of sticky) {
      width -= c.width;
    }
  }
  let endIndex = cellXOffset;
  let curX = tx != null ? tx : 0;
  while (curX <= width && endIndex < mappedCols.length) {
    curX += mappedCols[endIndex].width;
    endIndex++;
  }
  for (let i = cellXOffset; i < endIndex; i++) {
    const c = mappedCols[i];
    if (!c.sticky) {
      sticky.push(c);
    }
  }
  return sticky;
}
function getColumnIndexForX(targetX, effectiveColumns, translateX) {
  let x = 0;
  for (const c of effectiveColumns) {
    const cx3 = c.sticky ? x : x + (translateX != null ? translateX : 0);
    if (targetX <= cx3 + c.width) {
      return c.sourceIndex;
    }
    x += c.width;
  }
  return -1;
}
function getRowIndexForY(targetY, height, hasGroups, headerHeight, groupHeaderHeight, rows, rowHeight, cellYOffset, translateY, lastRowSticky) {
  const totalHeaderHeight = headerHeight + groupHeaderHeight;
  if (hasGroups && targetY <= groupHeaderHeight)
    return -2;
  if (targetY <= totalHeaderHeight)
    return -1;
  const lastRowHeight = typeof rowHeight === "number" ? rowHeight : rowHeight(rows - 1);
  if (lastRowSticky && targetY > height - lastRowHeight) {
    return rows - 1;
  }
  const effectiveRows = rows - (lastRowSticky ? 1 : 0);
  const ty = targetY - (translateY != null ? translateY : 0);
  if (typeof rowHeight === "number") {
    const target = Math.floor((ty - totalHeaderHeight) / rowHeight) + cellYOffset;
    if (target >= effectiveRows)
      return void 0;
    return target;
  } else {
    let curY = totalHeaderHeight;
    for (let i = cellYOffset; i < effectiveRows; i++) {
      const rh = rowHeight(i);
      if (ty <= curY + rh)
        return i;
      curY += rh;
    }
    return void 0;
  }
}
var metricsSize = 0;
var metricsCache = {};
var isSSR = typeof window === "undefined";
async function clearCacheOnLoad() {
  var _a;
  if (isSSR || ((_a = document == null ? void 0 : document.fonts) == null ? void 0 : _a.ready) === void 0)
    return;
  await document.fonts.ready;
  metricsSize = 0;
  metricsCache = {};
  (0, import_canvas_hypertxt.clearCache)();
}
void clearCacheOnLoad();
function makeCacheKey(s, ctx, baseline, font) {
  return `${s}_${font != null ? font : ctx.font}_${baseline}`;
}
function measureTextCached(s, ctx, font) {
  const key = makeCacheKey(s, ctx, "middle", font);
  let metrics = metricsCache[key];
  if (metrics === void 0) {
    metrics = ctx.measureText(s);
    metricsCache[key] = metrics;
    metricsSize++;
  }
  if (metricsSize > 1e4) {
    metricsCache = {};
    metricsSize = 0;
  }
  return metrics;
}
function getMiddleCenterBias(ctx, font) {
  if (typeof font !== "string") {
    font = `${font.baseFontStyle} ${font.fontFamily}`;
  }
  return getMiddleCenterBiasInner(ctx, font);
}
function loadMetric(ctx, baseline) {
  const sample = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  ctx.save();
  ctx.textBaseline = baseline;
  const result = ctx.measureText(sample);
  ctx.restore();
  return result;
}
var biasCache = [];
function getMiddleCenterBiasInner(ctx, font) {
  for (const x of biasCache) {
    if (x.key === font)
      return x.val;
  }
  const alphabeticMetrics = loadMetric(ctx, "alphabetic");
  const middleMetrics = loadMetric(ctx, "middle");
  const bias = -(middleMetrics.actualBoundingBoxDescent - alphabeticMetrics.actualBoundingBoxDescent) + alphabeticMetrics.actualBoundingBoxAscent / 2;
  biasCache.push({
    key: font,
    val: bias
  });
  return bias;
}
function drawWithLastUpdate(args, lastUpdate, frameTime, lastPrep, draw) {
  const { ctx, rect, theme } = args;
  let progress = Number.MAX_SAFE_INTEGER;
  const animTime = 500;
  if (lastUpdate !== void 0) {
    progress = frameTime - lastUpdate;
    if (progress < animTime) {
      const fade = 1 - progress / animTime;
      ctx.globalAlpha = fade;
      ctx.fillStyle = theme.bgSearchResult;
      ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
      ctx.globalAlpha = 1;
      if (lastPrep !== void 0) {
        lastPrep.fillStyle = theme.bgSearchResult;
      }
    }
  }
  draw();
  return progress < animTime;
}
function prepTextCell(args, lastPrep, overrideColor) {
  const { ctx, theme } = args;
  const result = lastPrep != null ? lastPrep : {};
  const newFill = overrideColor != null ? overrideColor : theme.textDark;
  if (newFill !== result.fillStyle) {
    ctx.fillStyle = newFill;
    result.fillStyle = newFill;
  }
  return result;
}
function drawTextCellExternal(args, data, contentAlign) {
  const { rect, ctx, theme } = args;
  ctx.fillStyle = theme.textDark;
  drawTextCell({
    ctx,
    rect,
    theme
  }, data, contentAlign);
}
function drawSingleTextLine(ctx, data, x, y, w, h, bias, theme, contentAlign) {
  if (contentAlign === "right") {
    ctx.fillText(data, x + w - (theme.cellHorizontalPadding + 0.5), y + h / 2 + bias);
  } else if (contentAlign === "center") {
    ctx.fillText(data, x + w / 2, y + h / 2 + bias);
  } else {
    ctx.fillText(data, x + theme.cellHorizontalPadding + 0.5, y + h / 2 + bias);
  }
}
function getEmHeight(ctx, fontStyle) {
  const textMetrics = measureTextCached("ABCi09jgqpy", ctx, fontStyle);
  return textMetrics.actualBoundingBoxAscent + textMetrics.actualBoundingBoxDescent;
}
function drawTextCell(args, data, contentAlign, allowWrapping, hyperWrapping) {
  const { ctx, rect, theme } = args;
  const { x, y, width: w, height: h } = rect;
  allowWrapping = allowWrapping != null ? allowWrapping : false;
  if (!allowWrapping) {
    if (data.includes("\n")) {
      data = data.split(/\r?\n/)[0];
    }
    const max = w / 4;
    if (data.length > max) {
      data = data.slice(0, max);
    }
  }
  const bias = getMiddleCenterBias(ctx, theme);
  const isRtl = direction(data) === "rtl";
  if (contentAlign === void 0 && isRtl) {
    contentAlign = "right";
  }
  if (isRtl) {
    ctx.direction = "rtl";
  }
  if (data.length > 0) {
    let changed = false;
    if (contentAlign === "right") {
      ctx.textAlign = "right";
      changed = true;
    } else if (contentAlign !== void 0 && contentAlign !== "left") {
      ctx.textAlign = contentAlign;
      changed = true;
    }
    if (!allowWrapping) {
      drawSingleTextLine(ctx, data, x, y, w, h, bias, theme, contentAlign);
    } else {
      const fontStyle = `${theme.fontFamily} ${theme.baseFontStyle}`;
      const split = (0, import_canvas_hypertxt.split)(ctx, data, fontStyle, w - theme.cellHorizontalPadding * 2, hyperWrapping != null ? hyperWrapping : false);
      const emHeight = getEmHeight(ctx, fontStyle);
      const lineHeight = theme.lineHeight * emHeight;
      const actualHeight = emHeight + lineHeight * (split.length - 1);
      const mustClip = actualHeight + theme.cellVerticalPadding > h;
      if (mustClip) {
        ctx.save();
        ctx.rect(x, y, w, h);
        ctx.clip();
      }
      const optimalY = y + h / 2 - actualHeight / 2;
      let drawY = Math.max(y + theme.cellVerticalPadding, optimalY);
      for (const line of split) {
        drawSingleTextLine(ctx, line, x, drawY, w, emHeight, bias, theme, contentAlign);
        drawY += lineHeight;
        if (drawY > y + h)
          break;
      }
      if (mustClip) {
        ctx.restore();
      }
    }
    if (changed) {
      ctx.textAlign = "start";
    }
    if (isRtl) {
      ctx.direction = "inherit";
    }
  }
}
function drawNewRowCell(args, data, icon) {
  const { ctx, rect, hoverAmount, theme, spriteManager } = args;
  const { x, y, width: w, height: h } = rect;
  ctx.beginPath();
  ctx.globalAlpha = hoverAmount;
  ctx.rect(x, y, w, h);
  ctx.fillStyle = theme.bgHeaderHovered;
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.beginPath();
  const alwaysShowIcon = data !== "";
  let textX = 0;
  if (icon !== void 0) {
    const padding = 8;
    const size = h - padding;
    const px = x + padding / 2;
    const py = y + padding / 2;
    spriteManager.drawSprite(icon, "normal", ctx, px, py, size, theme, alwaysShowIcon ? 1 : hoverAmount);
    textX = size;
  } else {
    textX = 24;
    const finalLineSize = 12;
    const lineSize = alwaysShowIcon ? finalLineSize : hoverAmount * finalLineSize;
    const xTranslate = alwaysShowIcon ? 0 : (1 - hoverAmount) * finalLineSize * 0.5;
    const padPlus = theme.cellHorizontalPadding + 4;
    if (lineSize > 0) {
      ctx.moveTo(x + padPlus + xTranslate, y + h / 2);
      ctx.lineTo(x + padPlus + xTranslate + lineSize, y + h / 2);
      ctx.moveTo(x + padPlus + xTranslate + lineSize * 0.5, y + h / 2 - lineSize * 0.5);
      ctx.lineTo(x + padPlus + xTranslate + lineSize * 0.5, y + h / 2 + lineSize * 0.5);
      ctx.lineWidth = 2;
      ctx.strokeStyle = theme.bgIconHeader;
      ctx.lineCap = "round";
      ctx.stroke();
    }
  }
  ctx.fillStyle = theme.textMedium;
  ctx.fillText(data, textX + x + theme.cellHorizontalPadding + 0.5, y + h / 2 + getMiddleCenterBias(ctx, theme));
  ctx.beginPath();
}
function drawCheckbox(ctx, theme, checked, x, y, width, height, highlighted, hoverX = -20, hoverY = -20, maxSize = 32, alignment = "center") {
  const centerY = Math.floor(y + height / 2);
  const rectBordRadius = 4;
  const checkBoxWidth = getSquareWidth(maxSize, height, theme.cellVerticalPadding);
  const checkBoxHalfWidth = checkBoxWidth / 2;
  const posX = getSquareXPosFromAlign(alignment, x, width, theme.cellHorizontalPadding, checkBoxWidth);
  const bb = getSquareBB(posX, centerY, checkBoxWidth);
  const hovered = pointIsWithinBB(x + hoverX, y + hoverY, bb);
  switch (checked) {
    case true: {
      ctx.beginPath();
      roundedRect(ctx, posX - checkBoxWidth / 2, centerY - checkBoxWidth / 2, checkBoxWidth, checkBoxWidth, rectBordRadius);
      ctx.fillStyle = highlighted ? theme.accentColor : theme.textMedium;
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(posX - checkBoxHalfWidth + checkBoxWidth / 4.23, centerY - checkBoxHalfWidth + checkBoxWidth / 1.97);
      ctx.lineTo(posX - checkBoxHalfWidth + checkBoxWidth / 2.42, centerY - checkBoxHalfWidth + checkBoxWidth / 1.44);
      ctx.lineTo(posX - checkBoxHalfWidth + checkBoxWidth / 1.29, centerY - checkBoxHalfWidth + checkBoxWidth / 3.25);
      ctx.strokeStyle = theme.bgCell;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.lineWidth = 1.9;
      ctx.stroke();
      break;
    }
    case BooleanEmpty:
    case false: {
      ctx.beginPath();
      roundedRect(ctx, posX - checkBoxWidth / 2 + 0.5, centerY - checkBoxWidth / 2 + 0.5, checkBoxWidth - 1, checkBoxWidth - 1, rectBordRadius);
      ctx.lineWidth = 1;
      ctx.strokeStyle = hovered ? theme.textDark : theme.textMedium;
      ctx.stroke();
      break;
    }
    case BooleanIndeterminate: {
      ctx.beginPath();
      roundedRect(ctx, posX - checkBoxWidth / 2, centerY - checkBoxWidth / 2, checkBoxWidth, checkBoxWidth, rectBordRadius);
      ctx.fillStyle = hovered ? theme.textMedium : theme.textLight;
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(posX - checkBoxWidth / 3, centerY);
      ctx.lineTo(posX + checkBoxWidth / 3, centerY);
      ctx.strokeStyle = theme.bgCell;
      ctx.lineCap = "round";
      ctx.lineWidth = 1.9;
      ctx.stroke();
      break;
    }
    default:
      assertNever(checked);
  }
}
function prepMarkerRowCell(args, lastPrep) {
  const { ctx, theme } = args;
  const newFont = `9px ${theme.fontFamily}`;
  const result = lastPrep != null ? lastPrep : {};
  if ((result == null ? void 0 : result.font) !== newFont) {
    ctx.font = newFont;
    result.font = newFont;
  }
  result.deprep = deprepMarkerRowCell;
  ctx.textAlign = "center";
  return result;
}
function deprepMarkerRowCell(args) {
  const { ctx } = args;
  ctx.textAlign = "start";
}
function drawMarkerRowCell(args, index2, checked, markerKind, drawHandle) {
  const { ctx, rect, hoverAmount, theme } = args;
  const { x, y, width, height } = rect;
  const checkedboxAlpha = checked ? 1 : markerKind === "checkbox-visible" ? 0.6 + 0.4 * hoverAmount : hoverAmount;
  if (markerKind !== "number" && checkedboxAlpha > 0) {
    ctx.globalAlpha = checkedboxAlpha;
    const offsetAmount = 7 * (checked ? hoverAmount : 1);
    drawCheckbox(ctx, theme, checked, drawHandle ? x + offsetAmount : x, y, drawHandle ? width - offsetAmount : width, height, true, void 0, void 0, 18);
    if (drawHandle) {
      ctx.globalAlpha = hoverAmount;
      ctx.beginPath();
      for (const xOffset of [3, 6]) {
        for (const yOffset of [-5, -1, 3]) {
          ctx.rect(x + xOffset, y + height / 2 + yOffset, 2, 2);
        }
      }
      ctx.fillStyle = theme.textLight;
      ctx.fill();
      ctx.beginPath();
    }
    ctx.globalAlpha = 1;
  }
  if (markerKind === "number" || markerKind === "both" && !checked) {
    const text = index2.toString();
    const start = x + width / 2;
    if (markerKind === "both" && hoverAmount !== 0) {
      ctx.globalAlpha = 1 - hoverAmount;
    }
    ctx.fillStyle = theme.textLight;
    ctx.fillText(text, start, y + height / 2 + getMiddleCenterBias(ctx, `9px ${theme.fontFamily}`));
    if (hoverAmount !== 0) {
      ctx.globalAlpha = 1;
    }
  }
}
function drawProtectedCell(args) {
  const { ctx, theme, rect } = args;
  const { x, y, height: h } = rect;
  ctx.beginPath();
  const radius = 2.5;
  let xStart = x + theme.cellHorizontalPadding + radius;
  const center = y + h / 2;
  const p = Math.cos(degreesToRadians(30)) * radius;
  const q = Math.sin(degreesToRadians(30)) * radius;
  for (let i = 0; i < 12; i++) {
    ctx.moveTo(xStart, center - radius);
    ctx.lineTo(xStart, center + radius);
    ctx.moveTo(xStart + p, center - q);
    ctx.lineTo(xStart - p, center + q);
    ctx.moveTo(xStart - p, center - q);
    ctx.lineTo(xStart + p, center + q);
    xStart += 8;
  }
  ctx.lineWidth = 1.1;
  ctx.lineCap = "square";
  ctx.strokeStyle = theme.textLight;
  ctx.stroke();
}
function roundedRect(ctx, x, y, width, height, radius) {
  if (typeof radius === "number") {
    radius = { tl: radius, tr: radius, br: radius, bl: radius };
  }
  radius = {
    tl: Math.min(radius.tl, height / 2, width / 2),
    tr: Math.min(radius.tr, height / 2, width / 2),
    bl: Math.min(radius.bl, height / 2, width / 2),
    br: Math.min(radius.br, height / 2, width / 2)
  };
  ctx.moveTo(x + radius.tl, y);
  ctx.arcTo(x + width, y, x + width, y + radius.tr, radius.tr);
  ctx.arcTo(x + width, y + height, x + width - radius.br, y + height, radius.br);
  ctx.arcTo(x, y + height, x, y + height - radius.bl, radius.bl);
  ctx.arcTo(x, y, x + radius.tl, y, radius.tl);
}
function drawBoolean(args, data, canEdit, maxSize) {
  if (!canEdit && data === BooleanEmpty) {
    return;
  }
  const {
    ctx,
    hoverAmount,
    theme,
    rect,
    highlighted,
    hoverX,
    hoverY,
    cell: { contentAlign }
  } = args;
  const { x, y, width: w, height: h } = rect;
  const hoverEffect = 0.35;
  let alpha = canEdit ? 1 - hoverEffect + hoverEffect * hoverAmount : 0.4;
  if (data === BooleanEmpty) {
    alpha *= hoverAmount;
  }
  if (alpha === 0) {
    return;
  }
  ctx.globalAlpha = alpha;
  drawCheckbox(ctx, theme, data, x, y, w, h, highlighted, hoverX, hoverY, maxSize, contentAlign);
  ctx.globalAlpha = 1;
}
var itemMargin = 4;
function drawBubbles(args, data) {
  const { rect, theme, ctx, highlighted } = args;
  const { x, y, width: w, height: h } = rect;
  const bubbleHeight = 20;
  const bubblePad = 8;
  const bubbleMargin = itemMargin;
  let renderX = x + theme.cellHorizontalPadding;
  const renderBoxes = [];
  for (const s of data) {
    if (renderX > x + w)
      break;
    const textWidth = measureTextCached(s, ctx, `${theme.baseFontStyle} ${theme.fontFamily}`).width;
    renderBoxes.push({
      x: renderX,
      width: textWidth
    });
    renderX += textWidth + bubblePad * 2 + bubbleMargin;
  }
  ctx.beginPath();
  for (const rectInfo of renderBoxes) {
    roundedRect(ctx, rectInfo.x, y + (h - bubbleHeight) / 2, rectInfo.width + bubblePad * 2, bubbleHeight, bubbleHeight / 2);
  }
  ctx.fillStyle = highlighted ? theme.bgBubbleSelected : theme.bgBubble;
  ctx.fill();
  for (const [i, rectInfo] of renderBoxes.entries()) {
    ctx.beginPath();
    ctx.fillStyle = theme.textBubble;
    ctx.fillText(data[i], rectInfo.x + bubblePad, y + h / 2 + getMiddleCenterBias(ctx, theme));
  }
}
var drilldownCache = {};
function getAndCacheDrilldownBorder(bgCell, border, height) {
  const dpr = Math.ceil(window.devicePixelRatio);
  const shadowBlur = 5;
  const targetHeight = height - shadowBlur * 2;
  const middleWidth = 4;
  const rounding = 6;
  const innerHeight = height * dpr;
  const sideWidth = rounding + shadowBlur;
  const targetWidth = rounding * 3;
  const innerWidth = (targetWidth + shadowBlur * 2) * dpr;
  const key = `${bgCell},${border},${dpr},${height}`;
  if (drilldownCache[key] !== void 0) {
    return {
      el: drilldownCache[key],
      height: innerHeight,
      width: innerWidth,
      middleWidth: middleWidth * dpr,
      sideWidth: sideWidth * dpr,
      padding: shadowBlur * dpr,
      dpr
    };
  }
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (ctx === null)
    return null;
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  ctx.scale(dpr, dpr);
  drilldownCache[key] = canvas;
  const trueRounding = Math.min(rounding, targetWidth / 2, targetHeight / 2);
  ctx.beginPath();
  roundedRect(ctx, shadowBlur, shadowBlur, targetWidth, targetHeight, trueRounding);
  ctx.shadowColor = "rgba(24, 25, 34, 0.4)";
  ctx.shadowBlur = 1;
  ctx.fillStyle = bgCell;
  ctx.fill();
  ctx.shadowColor = "rgba(24, 25, 34, 0.3)";
  ctx.shadowOffsetY = 1;
  ctx.shadowBlur = 5;
  ctx.fillStyle = bgCell;
  ctx.fill();
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 0;
  ctx.shadowBlur = 0;
  ctx.beginPath();
  roundedRect(ctx, shadowBlur + 0.5, shadowBlur + 0.5, targetWidth, targetHeight, trueRounding);
  ctx.strokeStyle = border;
  ctx.lineWidth = 1;
  ctx.stroke();
  return {
    el: canvas,
    height: innerHeight,
    width: innerWidth,
    sideWidth: sideWidth * dpr,
    middleWidth: rounding * dpr,
    padding: shadowBlur * dpr,
    dpr
  };
}
function drawDrilldownCell(args, data) {
  const { rect, theme, ctx, imageLoader, col, row } = args;
  const { x, width: w } = rect;
  const font = `${theme.baseFontStyle} ${theme.fontFamily}`;
  const emHeight = getEmHeight(ctx, font);
  const h = Math.min(rect.height, Math.max(16, Math.ceil(emHeight * theme.lineHeight) * 2));
  const y = Math.floor(rect.y + (rect.height - h) / 2);
  const bubbleHeight = h - 10;
  const bubblePad = 8;
  const bubbleMargin = itemMargin;
  let renderX = x + theme.cellHorizontalPadding;
  const tileMap = getAndCacheDrilldownBorder(theme.bgCell, theme.drilldownBorder, h);
  const renderBoxes = [];
  for (const el of data) {
    if (renderX > x + w)
      break;
    const textMetrics = measureTextCached(el.text, ctx, font);
    const textWidth = textMetrics.width;
    let imgWidth = 0;
    if (el.img !== void 0) {
      const img = imageLoader.loadOrGetImage(el.img, col, row);
      if (img !== void 0) {
        imgWidth = bubbleHeight - 8 + 4;
      }
    }
    const renderWidth = textWidth + imgWidth + bubblePad * 2;
    renderBoxes.push({
      x: renderX,
      width: renderWidth
    });
    renderX += renderWidth + bubbleMargin;
  }
  if (tileMap !== null) {
    const { el, height, middleWidth, sideWidth, width, dpr, padding } = tileMap;
    const outerSideWidth = sideWidth / dpr;
    const outerPadding = padding / dpr;
    for (const rectInfo of renderBoxes) {
      const rx = Math.floor(rectInfo.x);
      const rw = Math.floor(rectInfo.width);
      const outerMiddleWidth = rw - (outerSideWidth - outerPadding) * 2;
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(el, 0, 0, sideWidth, height, rx - outerPadding, y, outerSideWidth, h);
      if (outerMiddleWidth > 0)
        ctx.drawImage(el, sideWidth, 0, middleWidth, height, rx + (outerSideWidth - outerPadding), y, outerMiddleWidth, h);
      ctx.drawImage(el, width - sideWidth, 0, sideWidth, height, rx + rw - (outerSideWidth - outerPadding), y, outerSideWidth, h);
      ctx.imageSmoothingEnabled = true;
    }
  }
  ctx.beginPath();
  for (const [i, rectInfo] of renderBoxes.entries()) {
    const d = data[i];
    let drawX = rectInfo.x + bubblePad;
    if (d.img !== void 0) {
      const img = imageLoader.loadOrGetImage(d.img, col, row);
      if (img !== void 0) {
        const imgSize = bubbleHeight - 8;
        let srcX = 0;
        let srcY = 0;
        let srcWidth = img.width;
        let srcHeight = img.height;
        if (srcWidth > srcHeight) {
          srcX += (srcWidth - srcHeight) / 2;
          srcWidth = srcHeight;
        } else if (srcHeight > srcWidth) {
          srcY += (srcHeight - srcWidth) / 2;
          srcHeight = srcWidth;
        }
        ctx.beginPath();
        roundedRect(ctx, drawX, y + h / 2 - imgSize / 2, imgSize, imgSize, 3);
        ctx.save();
        ctx.clip();
        ctx.drawImage(img, srcX, srcY, srcWidth, srcHeight, drawX, y + h / 2 - imgSize / 2, imgSize, imgSize);
        ctx.restore();
        drawX += imgSize + 4;
      }
    }
    ctx.beginPath();
    ctx.fillStyle = theme.textBubble;
    ctx.fillText(d.text, drawX, y + h / 2 + getMiddleCenterBias(ctx, theme));
  }
}
function drawImage(args, data, rounding = 4, contentAlign) {
  const { rect, col, row, theme, ctx, imageLoader } = args;
  const { x, y, height: h, width: w } = rect;
  const imgHeight = h - theme.cellVerticalPadding * 2;
  const images = [];
  let totalWidth = 0;
  for (let index2 = 0; index2 < data.length; index2++) {
    const i = data[index2];
    if (i.length === 0)
      continue;
    const img = imageLoader.loadOrGetImage(i, col, row);
    if (img !== void 0) {
      images[index2] = img;
      const imgWidth = img.width * (imgHeight / img.height);
      totalWidth += imgWidth + itemMargin;
    }
  }
  if (totalWidth === 0)
    return;
  totalWidth -= itemMargin;
  let drawX = x + theme.cellHorizontalPadding;
  if (contentAlign === "right")
    drawX = Math.floor(x + w - theme.cellHorizontalPadding - totalWidth);
  else if (contentAlign === "center")
    drawX = Math.floor(x + w / 2 - totalWidth / 2);
  for (const img of images) {
    if (img === void 0)
      continue;
    const imgWidth = img.width * (imgHeight / img.height);
    if (rounding > 0) {
      roundedRect(ctx, drawX, y + theme.cellVerticalPadding, imgWidth, imgHeight, rounding);
      ctx.save();
      ctx.clip();
    }
    ctx.drawImage(img, drawX, y + theme.cellVerticalPadding, imgWidth, imgHeight);
    if (rounding > 0) {
      ctx.restore();
    }
    drawX += imgWidth + itemMargin;
  }
}
function roundedPoly(ctx, points, radiusAll) {
  const asVec = function(p, pp) {
    const vx = pp.x - p.x;
    const vy = pp.y - p.y;
    const vlen = Math.sqrt(vx * vx + vy * vy);
    const vnx = vx / vlen;
    const vny = vy / vlen;
    return {
      x: vx,
      y: pp.y - p.y,
      len: vlen,
      nx: vnx,
      ny: vny,
      ang: Math.atan2(vny, vnx)
    };
  };
  let radius;
  const len = points.length;
  let p1 = points[len - 1];
  for (let i = 0; i < len; i++) {
    let p2 = points[i % len];
    const p3 = points[(i + 1) % len];
    const v1 = asVec(p2, p1);
    const v2 = asVec(p2, p3);
    const sinA = v1.nx * v2.ny - v1.ny * v2.nx;
    const sinA90 = v1.nx * v2.nx - v1.ny * -v2.ny;
    let angle = Math.asin(sinA < -1 ? -1 : sinA > 1 ? 1 : sinA);
    let radDirection = 1;
    let drawDirection = false;
    if (sinA90 < 0) {
      if (angle < 0) {
        angle = Math.PI + angle;
      } else {
        angle = Math.PI - angle;
        radDirection = -1;
        drawDirection = true;
      }
    } else {
      if (angle > 0) {
        radDirection = -1;
        drawDirection = true;
      }
    }
    radius = p2.radius !== void 0 ? p2.radius : radiusAll;
    const halfAngle = angle / 2;
    let lenOut = Math.abs(Math.cos(halfAngle) * radius / Math.sin(halfAngle));
    let cRadius;
    if (lenOut > Math.min(v1.len / 2, v2.len / 2)) {
      lenOut = Math.min(v1.len / 2, v2.len / 2);
      cRadius = Math.abs(lenOut * Math.sin(halfAngle) / Math.cos(halfAngle));
    } else {
      cRadius = radius;
    }
    let x = p2.x + v2.nx * lenOut;
    let y = p2.y + v2.ny * lenOut;
    x += -v2.ny * cRadius * radDirection;
    y += v2.nx * cRadius * radDirection;
    ctx.arc(x, y, cRadius, v1.ang + Math.PI / 2 * radDirection, v2.ang - Math.PI / 2 * radDirection, drawDirection);
    p1 = p2;
    p2 = p3;
  }
  ctx.closePath();
}
function computeBounds(col, row, width, height, groupHeaderHeight, totalHeaderHeight, cellXOffset, cellYOffset, translateX, translateY, rows, freezeColumns, lastRowSticky, mappedColumns, rowHeight) {
  const result = {
    x: 0,
    y: totalHeaderHeight + translateY,
    width: 0,
    height: 0
  };
  const headerHeight = totalHeaderHeight - groupHeaderHeight;
  if (col >= freezeColumns) {
    const dir = cellXOffset > col ? -1 : 1;
    const freezeWidth = getStickyWidth(mappedColumns);
    result.x += freezeWidth + translateX;
    for (let i = cellXOffset; i !== col; i += dir) {
      result.x += mappedColumns[dir === 1 ? i : i - 1].width * dir;
    }
  } else {
    for (let i = 0; i < col; i++) {
      result.x += mappedColumns[i].width;
    }
  }
  result.width = mappedColumns[col].width + 1;
  if (row === -1) {
    result.y = groupHeaderHeight;
    result.height = headerHeight;
  } else if (row === -2) {
    result.y = 0;
    result.height = groupHeaderHeight;
    let start = col;
    const group = mappedColumns[col].group;
    const sticky = mappedColumns[col].sticky;
    while (start > 0 && isGroupEqual(mappedColumns[start - 1].group, group) && mappedColumns[start - 1].sticky === sticky) {
      const c = mappedColumns[start - 1];
      result.x -= c.width;
      result.width += c.width;
      start--;
    }
    let end = col;
    while (end + 1 < mappedColumns.length && isGroupEqual(mappedColumns[end + 1].group, group) && mappedColumns[end + 1].sticky === sticky) {
      const c = mappedColumns[end + 1];
      result.width += c.width;
      end++;
    }
    if (!sticky) {
      const freezeWidth = getStickyWidth(mappedColumns);
      const clip = result.x - freezeWidth;
      if (clip < 0) {
        result.x -= clip;
        result.width += clip;
      }
      if (result.x + result.width > width) {
        result.width = width - result.x;
      }
    }
  } else if (lastRowSticky && row === rows - 1) {
    const stickyHeight = typeof rowHeight === "number" ? rowHeight : rowHeight(row);
    result.y = height - stickyHeight;
    result.height = stickyHeight;
  } else {
    const dir = cellYOffset > row ? -1 : 1;
    if (typeof rowHeight === "number") {
      const delta = row - cellYOffset;
      result.y += delta * rowHeight;
    } else {
      for (let r = cellYOffset; r !== row; r += dir) {
        result.y += rowHeight(r) * dir;
      }
    }
    result.height = (typeof rowHeight === "number" ? rowHeight : rowHeight(row)) + 1;
  }
  return result;
}

// src/data-grid/sprites.ts
var iconHead = `<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">`;
var headerRowID = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `
    ${iconHead}<rect x="2" y="2" width="16" height="16" rx="2" fill="${bg}"/><path d="M15.75 4h-1.5a.25.25 0 0 0-.177.074L9.308 8.838a3.75 3.75 0 1 0 1.854 1.854l1.155-1.157.967.322a.5.5 0 0 0 .65-.55l-.18-1.208.363-.363.727.331a.5.5 0 0 0 .69-.59l-.254-.904.647-.647A.25.25 0 0 0 16 5.75v-1.5a.25.25 0 0 0-.25-.25zM7.5 13.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z" fill="${fg}"/></svg>`;
};
var headerCode = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `
    ${iconHead}<rect x="2" y="2" width="16" height="16" rx="4" fill="${bg}"/><path d="m12.223 13.314 3.052-2.826a.65.65 0 0 0 0-.984l-3.052-2.822c-.27-.25-.634-.242-.865.022-.232.263-.206.636.056.882l2.601 2.41-2.601 2.41c-.262.245-.288.619-.056.882.231.263.595.277.865.026Zm-4.444.005c.266.25.634.241.866-.027.231-.263.206-.636-.06-.882L5.983 10l2.602-2.405c.266-.25.291-.62.06-.887-.232-.263-.596-.272-.866-.022L4.723 9.51a.653.653 0 0 0 0 .983l3.056 2.827Z" fill="${fg}"/></svg>`;
};
var headerNumber = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `${iconHead}
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2z" fill="${bg}"/>
    <path d="M6.52 12.78H5.51V8.74l-1.33.47v-.87l2.29-.83h.05v5.27zm5.2 0H8.15v-.69l1.7-1.83a6.38 6.38 0 0 0 .34-.4c.09-.11.16-.22.22-.32s.1-.19.12-.27a.9.9 0 0 0 0-.56.63.63 0 0 0-.15-.23.58.58 0 0 0-.22-.15.75.75 0 0 0-.29-.05c-.27 0-.48.08-.62.23a.95.95 0 0 0-.2.65H8.03c0-.24.04-.46.13-.67a1.67 1.67 0 0 1 .97-.91c.23-.1.49-.14.77-.14.26 0 .5.04.7.11.21.08.38.18.52.32.14.13.25.3.32.48a1.74 1.74 0 0 1 .03 1.13 2.05 2.05 0 0 1-.24.47 4.16 4.16 0 0 1-.35.47l-.47.5-1 1.05h2.32v.8zm1.8-3.08h.55c.28 0 .48-.06.61-.2a.76.76 0 0 0 .2-.55.8.8 0 0 0-.05-.28.56.56 0 0 0-.13-.22.6.6 0 0 0-.23-.15.93.93 0 0 0-.32-.05.92.92 0 0 0-.29.05.72.72 0 0 0-.23.12.57.57 0 0 0-.21.46H12.4a1.3 1.3 0 0 1 .5-1.04c.15-.13.33-.23.54-.3a2.48 2.48 0 0 1 1.4 0c.2.06.4.15.55.28.15.13.27.28.36.47.08.19.13.4.13.65a1.15 1.15 0 0 1-.2.65 1.36 1.36 0 0 1-.58.49c.15.05.28.12.38.2a1.14 1.14 0 0 1 .43.62c.03.13.05.26.05.4 0 .25-.05.47-.14.66a1.42 1.42 0 0 1-.4.49c-.16.13-.35.23-.58.3a2.51 2.51 0 0 1-.73.1c-.22 0-.44-.03-.65-.09a1.8 1.8 0 0 1-.57-.28 1.43 1.43 0 0 1-.4-.47 1.41 1.41 0 0 1-.15-.66h1a.66.66 0 0 0 .22.5.87.87 0 0 0 .58.2c.25 0 .45-.07.6-.2a.71.71 0 0 0 .21-.56.97.97 0 0 0-.06-.36.61.61 0 0 0-.18-.25.74.74 0 0 0-.28-.15 1.33 1.33 0 0 0-.37-.04h-.55V9.7z" fill="${fg}"/>
  </svg>`;
};
var headerString = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `${iconHead}
  <path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${bg}"/>
  <path d="M8.182 12.4h3.636l.655 1.6H14l-3.454-8H9.455L6 14h1.527l.655-1.6zM10 7.44l1.36 3.651H8.64L10 7.441z" fill="${fg}"/>
</svg>`;
};
var headerBoolean = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `${iconHead}
    <path
        d="M16.2222 2H3.77778C2.8 2 2 2.8 2 3.77778V16.2222C2 17.2 2.8 18 3.77778 18H16.2222C17.2 18 17.9911 17.2 17.9911 16.2222L18 3.77778C18 2.8 17.2 2 16.2222 2Z"
        fill="${bg}"
    />
    <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.66667 6.66669C5.73368 6.66669 4.16667 8.15907 4.16667 10C4.16667 11.841 5.73368 13.3334 7.66667 13.3334H12.3333C14.2663 13.3334 15.8333 11.841 15.8333 10C15.8333 8.15907 14.2663 6.66669 12.3333 6.66669H7.66667ZM12.5 12.5C13.8807 12.5 15 11.3807 15 10C15 8.61931 13.8807 7.50002 12.5 7.50002C11.1193 7.50002 10 8.61931 10 10C10 11.3807 11.1193 12.5 12.5 12.5Z"
        fill="${fg}"
    />
</svg>`;
};
var headerUri = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `${iconHead}
<path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${bg}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.29 4.947a3.368 3.368 0 014.723.04 3.375 3.375 0 01.041 4.729l-.009.009-1.596 1.597a3.367 3.367 0 01-5.081-.364.71.71 0 011.136-.85 1.95 1.95 0 002.942.21l1.591-1.593a1.954 1.954 0 00-.027-2.733 1.95 1.95 0 00-2.732-.027l-.91.907a.709.709 0 11-1.001-1.007l.915-.911.007-.007z" fill="${fg}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.55 8.678a3.368 3.368 0 015.082.364.71.71 0 01-1.136.85 1.95 1.95 0 00-2.942-.21l-1.591 1.593a1.954 1.954 0 00.027 2.733 1.95 1.95 0 002.73.028l.906-.906a.709.709 0 111.003 1.004l-.91.91-.008.01a3.368 3.368 0 01-4.724-.042 3.375 3.375 0 01-.041-4.728l.009-.009L6.55 8.678z" fill="${fg}"/>
</svg>
  `;
};
var renameIcon = (props) => {
  const bg = props.bgColor;
  return `${iconHead}
    <path stroke="${bg}" stroke-width="2" d="M12 3v14"/>
    <path stroke="${bg}" stroke-width="2" stroke-linecap="round" d="M10 4h4m-4 12h4"/>
    <path d="M11 14h4a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-4v2h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4v2ZM9.5 8H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4.5v2H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h4.5v2Z" fill="${bg}"/>
  </svg>
`;
};
var headerAudioUri = headerUri;
var headerVideoUri = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `${iconHead}
  <path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${bg}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7 13.138a.5.5 0 00.748.434l5.492-3.138a.5.5 0 000-.868L7.748 6.427A.5.5 0 007 6.862v6.276z" fill="${fg}"/>
</svg>`;
};
var headerEmoji = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `
    ${iconHead}
    <path d="M10 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 9.17A4.17 4.17 0 0 1 5.83 10 4.17 4.17 0 0 1 10 5.83 4.17 4.17 0 0 1 14.17 10 4.17 4.17 0 0 1 10 14.17z" fill="${fg}"/>
    <path d="M8.33 8.21a.83.83 0 1 0-.03 1.67.83.83 0 0 0 .03-1.67zm3.34 0a.83.83 0 1 0-.04 1.67.83.83 0 0 0 .04-1.67z" fill="${fg}"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.53 13.9a2.82 2.82 0 0 1-5.06 0l.77-.38a1.97 1.97 0 0 0 3.52 0l.77.39z" fill="${fg}"/>
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2z" fill="${bg}"/>
    <path d="M10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 11a5 5 0 1 1 .01-10.01A5 5 0 0 1 10 15z" fill="${fg}"/>
    <path d="M8 7.86a1 1 0 1 0-.04 2 1 1 0 0 0 .04-2zm4 0a1 1 0 1 0-.04 2 1 1 0 0 0 .04-2z" fill="${fg}"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.53 11.9a2.82 2.82 0 0 1-5.06 0l.77-.38a1.97 1.97 0 0 0 3.52 0l.77.39z" fill="${fg}"/>
  </svg>`;
};
var headerImage = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `${iconHead}
  <path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${bg}"/>
  <path opacity=".5" fill-rule="evenodd" clip-rule="evenodd" d="M12.499 10.801a.5.5 0 01.835 0l2.698 4.098a.5.5 0 01-.418.775H10.22a.5.5 0 01-.417-.775l2.697-4.098z" fill="${fg}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.07 8.934a.5.5 0 01.824 0l4.08 5.958a.5.5 0 01-.412.782h-8.16a.5.5 0 01-.413-.782l4.08-5.958zM13.75 8.333a2.083 2.083 0 100-4.166 2.083 2.083 0 000 4.166z" fill="${fg}"/>
</svg>`;
};
var headerPhone = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `
    ${iconHead}
    <path fill="${fg}" d="M3 3h14v14H3z"/>
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2zm-7.24 9.78h1.23c.15 0 .27.06.36.18l.98 1.28a.43.43 0 0 1-.05.58l-1.2 1.21a.45.45 0 0 1-.6.04A6.72 6.72 0 0 1 7.33 10c0-.61.1-1.2.25-1.78a6.68 6.68 0 0 1 2.12-3.3.44.44 0 0 1 .6.04l1.2 1.2c.16.17.18.42.05.59l-.98 1.29a.43.43 0 0 1-.36.17H8.98A5.38 5.38 0 0 0 8.67 10c0 .62.11 1.23.3 1.79z" fill="${bg}"/>
  </svg>`;
};
var headerMarkdown = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `
    ${iconHead}
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2z" fill="${bg}"/>
    <path d="m13.49 13.15-2.32-3.27h1.4V7h1.86v2.88h1.4l-2.34 3.27zM11 13H9v-3l-1.5 1.92L6 10v3H4V7h2l1.5 2L9 7h2v6z" fill="${fg}"/>
  </svg>`;
};
var headerDate = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `${iconHead}
  <path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${bg}"/>
  <path d="M14.8 4.182h-.6V3H13v1.182H7V3H5.8v1.182h-.6c-.66 0-1.2.532-1.2 1.182v9.454C4 15.468 4.54 16 5.2 16h9.6c.66 0 1.2-.532 1.2-1.182V5.364c0-.65-.54-1.182-1.2-1.182zm0 10.636H5.2V7.136h9.6v7.682z" fill="${fg}"/>
</svg>`;
};
var headerTime = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `
    ${iconHead}
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2z" fill="${bg}"/>
    <path d="M10 4a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6 6 6 0 0 0-6-6zm0 10.8A4.8 4.8 0 0 1 5.2 10a4.8 4.8 0 1 1 4.8 4.8z" fill="${fg}"/>
    <path d="M10 7H9v3.93L12.5 13l.5-.8-3-1.76V7z" fill="${fg}"/>
  </svg>`;
};
var headerEmail = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `${iconHead}
  <rect x="2" y="2" width="16" height="16" rx="2" fill="${bg}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10 8.643a1.357 1.357 0 100 2.714 1.357 1.357 0 000-2.714zM7.357 10a2.643 2.643 0 115.286 0 2.643 2.643 0 01-5.286 0z" fill="${fg}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.589 4.898A5.643 5.643 0 0115.643 10v.5a2.143 2.143 0 01-4.286 0V8a.643.643 0 011.286 0v2.5a.857.857 0 001.714 0V10a4.357 4.357 0 10-1.708 3.46.643.643 0 01.782 1.02 5.643 5.643 0 11-5.842-9.582z" fill="${fg}"/>
</svg>`;
};
var headerReference = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `
    ${iconHead}
    <rect x="2" y="8" width="10" height="8" rx="2" fill="${bg}"/>
    <rect x="8" y="4" width="10" height="8" rx="2" fill="${bg}"/>
    <path d="M10.68 7.73V6l2.97 3.02-2.97 3.02v-1.77c-2.13 0-3.62.7-4.68 2.2.43-2.15 1.7-4.31 4.68-4.74z" fill="${fg}"/>
  </svg>`;
};
var headerIfThenElse = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `${iconHead}
  <path fill="${fg}" d="M4 3h12v14H4z"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.6 2A1.6 1.6 0 002 3.6v12.8A1.6 1.6 0 003.6 18h12.8a1.6 1.6 0 001.6-1.6V3.6A1.6 1.6 0 0016.4 2H3.6zm11.3 10.8a.7.7 0 01.7.7v1.4a.7.7 0 01-.7.7h-1.4a.7.7 0 01-.7-.7v-1.4a.7.7 0 01.6-.693.117.117 0 00.1-.115V10.35a.117.117 0 00-.117-.116h-2.8a.117.117 0 00-.117.116v2.333c0 .064.053.117.117.117h.117a.7.7 0 01.7.7v1.4a.7.7 0 01-.7.7H9.3a.7.7 0 01-.7-.7v-1.4a.7.7 0 01.7-.7h.117a.117.117 0 00.117-.117V10.35a.117.117 0 00-.117-.117h-2.8a.117.117 0 00-.117.117v2.342c0 .058.042.106.1.115a.7.7 0 01.6.693v1.4a.7.7 0 01-.7.7H5.1a.7.7 0 01-.7-.7v-1.4a.7.7 0 01.7-.7h.35a.116.116 0 00.116-.117v-2.45c0-.515.418-.933.934-.933h2.917a.117.117 0 00.117-.117V6.85a.117.117 0 00-.117-.116h-2.45a.7.7 0 01-.7-.7V5.1a.7.7 0 01.7-.7h6.067a.7.7 0 01.7.7v.934a.7.7 0 01-.7.7h-2.45a.117.117 0 00-.118.116v2.333c0 .064.053.117.117.117H13.5c.516 0 .934.418.934.934v2.45c0 .063.052.116.116.116h.35z" fill="${bg}"/>
</svg>`;
};
var headerSingleValue = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `
    ${iconHead}
    <rect x="2" y="2" width="16" height="16" rx="2" fill="${bg}"/>
    <path d="M9.98 13.33c.45 0 .74-.3.73-.75l-.01-.1-.16-1.67 1.45 1.05a.81.81 0 0 0 .5.18c.37 0 .72-.32.72-.76 0-.3-.17-.54-.49-.68l-1.63-.77 1.63-.77c.32-.14.49-.37.49-.67 0-.45-.34-.76-.71-.76a.81.81 0 0 0-.5.18l-1.47 1.03.16-1.74.01-.08c.01-.46-.27-.76-.72-.76-.46 0-.76.32-.75.76l.01.08.16 1.74-1.47-1.03a.77.77 0 0 0-.5-.18.74.74 0 0 0-.72.76c0 .3.17.53.49.67l1.63.77-1.62.77c-.32.14-.5.37-.5.68 0 .44.35.75.72.75a.78.78 0 0 0 .5-.17L9.4 10.8l-.16 1.68v.09c-.02.44.28.75.74.75z" fill="${fg}"/>
  </svg>`;
};
var headerLookup = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `
    ${iconHead}
    <rect x="2" y="2" width="16" height="16" rx="2" fill="${bg}"/>
    <path d="M8 5.83H5.83a.83.83 0 0 0 0 1.67h1.69A4.55 4.55 0 0 1 8 5.83zm-.33 3.34H5.83a.83.83 0 0 0 0 1.66h2.72a4.57 4.57 0 0 1-.88-1.66zM5.83 12.5a.83.83 0 0 0 0 1.67h7.5a.83.83 0 1 0 0-1.67h-7.5zm8.8-2.9a3.02 3.02 0 0 0 .46-1.6c0-1.66-1.32-3-2.94-3C10.52 5 9.2 6.34 9.2 8s1.31 3 2.93 3c.58 0 1.11-.17 1.56-.47l2.04 2.08.93-.94-2.04-2.08zm-2.48.07c-.9 0-1.63-.75-1.63-1.67s.73-1.67 1.63-1.67c.9 0 1.63.75 1.63 1.67s-.73 1.67-1.63 1.67z" fill="${fg}"/>
  </svg>`;
};
var headerTextTemplate = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `${iconHead}
  <rect x="2" y="2" width="16" height="16" rx="2" fill="${bg}"/>
  <path d="M7.676 4.726V3l2.976 3.021-2.976 3.022v-1.77c-2.125 0-3.613.69-4.676 2.201.425-2.158 1.7-4.316 4.676-4.748zM10.182 14.4h3.636l.655 1.6H16l-3.454-8h-1.091L8 16h1.527l.655-1.6zM12 9.44l1.36 3.65h-2.72L12 9.44z" fill="${fg}"/>
</svg>`;
};
var headerMath = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `${iconHead}
  <rect x="2" y="2" width="16" height="16" rx="2" fill="${bg}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.167 5.417a.833.833 0 100 1.666h4.166a.833.833 0 100-1.666H4.167z" fill="${fg}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.083 4.167a.833.833 0 10-1.666 0v4.166a.833.833 0 101.666 0V4.167zM11.667 5.417a.833.833 0 100 1.666h4.166a.833.833 0 100-1.666h-4.166zM5.367 11.688a.833.833 0 00-1.179 1.179l2.947 2.946a.833.833 0 001.178-1.178l-2.946-2.947z" fill="${fg}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.313 12.867a.833.833 0 10-1.178-1.179l-2.947 2.947a.833.833 0 101.179 1.178l2.946-2.946z" fill="${fg}"/>
  <path d="M10.833 12.5c0-.46.373-.833.834-.833h4.166a.833.833 0 110 1.666h-4.166a.833.833 0 01-.834-.833zM10.833 15c0-.46.373-.833.834-.833h4.166a.833.833 0 110 1.666h-4.166a.833.833 0 01-.834-.833z" fill="${fg}"/>
</svg>`;
};
var headerRollup = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `
    ${iconHead}
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2z" fill="${bg}"/>
    <path d="M10 8.84a1.16 1.16 0 1 0 0 2.32 1.16 1.16 0 0 0 0-2.32zm3.02 3.61a3.92 3.92 0 0 0 .78-3.28.49.49 0 1 0-.95.2c.19.87-.02 1.78-.58 2.47a2.92 2.92 0 1 1-4.13-4.08 2.94 2.94 0 0 1 2.43-.62.49.49 0 1 0 .17-.96 3.89 3.89 0 1 0 2.28 6.27zM10 4.17a5.84 5.84 0 0 0-5.44 7.93.49.49 0 1 0 .9-.35 4.86 4.86 0 1 1 2.5 2.67.49.49 0 1 0-.4.88c.76.35 1.6.54 2.44.53a5.83 5.83 0 0 0 0-11.66zm3.02 3.5a.7.7 0 1 0-1.4 0 .7.7 0 0 0 1.4 0zm-6.97 5.35a.7.7 0 1 1 0 1.4.7.7 0 0 1 0-1.4z" fill="${fg}"/>
  </svg>`;
};
var headerJoinStrings = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `${iconHead}
  <rect x="2" y="2" width="16" height="16" rx="2" fill="${bg}"/>
  <path d="M12.4 13.565c1.865-.545 3.645-2.083 3.645-4.396 0-1.514-.787-2.604-2.071-2.604C12.69 6.565 12 7.63 12 8.939c1.114.072 1.865.726 1.865 1.683 0 .933-.8 1.647-1.84 2.023l.375.92zM4 5h6v2H4zM4 9h5v2H4zM4 13h4v2H4z" fill="${fg}"/>
</svg>`;
};
var headerSplitString = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `
    ${iconHead}
    <rect x="2" y="2" width="16" height="16" rx="2" fill="${bg}"/>
    <path d="M12.4 13.56c1.86-.54 3.65-2.08 3.65-4.4 0-1.5-.8-2.6-2.08-2.6S12 7.64 12 8.95c1.11.07 1.86.73 1.86 1.68 0 .94-.8 1.65-1.83 2.03l.37.91zM4 5h6v2H4zm0 4h5v2H4zm0 4h4v2H4z" fill="${fg}"/>
  </svg>`;
};
var headerGeoDistance = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `${iconHead}
  <path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${bg}"/>
  <path d="M10 7a1 1 0 100-2v2zm0 6a1 1 0 100 2v-2zm0-8H7v2h3V5zm-3 6h5V9H7v2zm5 2h-2v2h2v-2zm1-1a1 1 0 01-1 1v2a3 3 0 003-3h-2zm-1-1a1 1 0 011 1h2a3 3 0 00-3-3v2zM4 8a3 3 0 003 3V9a1 1 0 01-1-1H4zm3-3a3 3 0 00-3 3h2a1 1 0 011-1V5z" fill="${fg}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.856 12.014a.5.5 0 00-.712.702L5.409 14l-1.265 1.284a.5.5 0 00.712.702l1.255-1.274 1.255 1.274a.5.5 0 00.712-.702L6.813 14l1.265-1.284a.5.5 0 00-.712-.702L6.11 13.288l-1.255-1.274zM12.856 4.014a.5.5 0 00-.712.702L13.409 6l-1.265 1.284a.5.5 0 10.712.702l1.255-1.274 1.255 1.274a.5.5 0 10.712-.702L14.813 6l1.265-1.284a.5.5 0 00-.712-.702L14.11 5.288l-1.255-1.274z" fill="${fg}"/>
</svg>`;
};
var headerArray = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `${iconHead}
  <rect x="2" y="2" width="16" height="16" rx="2" fill="${bg}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.25 7.25a.75.75 0 000-1.5h-6.5a.75.75 0 100 1.5h6.5zM15 10a.75.75 0 01-.75.75h-6.5a.75.75 0 010-1.5h6.5A.75.75 0 0115 10zm-.75 4.25a.75.75 0 000-1.5h-6.5a.75.75 0 000 1.5h6.5zm-8.987-7a.75.75 0 100-1.5.75.75 0 000 1.5zm.75 2.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-.75 4.25a.75.75 0 100-1.5.75.75 0 000 1.5z" fill="${fg}"/>
</svg>`;
};
var rowOwnerOverlay = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `
    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 15v1h14v-2.5c0-.87-.44-1.55-.98-2.04a6.19 6.19 0 0 0-1.9-1.14 12.1 12.1 0 0 0-2.48-.67A4 4 0 1 0 5 6a4 4 0 0 0 2.36 3.65c-.82.13-1.7.36-2.48.67-.69.28-1.37.65-1.9 1.13A2.8 2.8 0 0 0 2 13.5V15z" fill="${bg}" stroke="${fg}" stroke-width="2"/>
  </svg>`;
};
var protectedColumnOverlay = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `
    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.43 6.04v-.18a3.86 3.86 0 0 0-7.72 0v.18A2.15 2.15 0 0 0 3 8.14v5.72C3 15.04 3.96 16 5.14 16H12c1.18 0 2.14-.96 2.14-2.14V8.14c0-1.03-.73-1.9-1.71-2.1zM7.86 6v-.14a.71.71 0 1 1 1.43 0V6H7.86z" fill="${bg}" stroke="${fg}" stroke-width="2"/>
  </svg>
`;
};
var sprites = {
  headerRowID,
  headerNumber,
  headerCode,
  headerString,
  headerBoolean,
  headerAudioUri,
  headerVideoUri,
  headerEmoji,
  headerImage,
  headerUri,
  headerPhone,
  headerMarkdown,
  headerDate,
  headerTime,
  headerEmail,
  headerReference,
  headerIfThenElse,
  headerSingleValue,
  headerLookup,
  headerTextTemplate,
  headerMath,
  headerRollup,
  headerJoinStrings,
  headerSplitString,
  headerGeoDistance,
  headerArray,
  rowOwnerOverlay,
  protectedColumnOverlay,
  renameIcon
};

// src/data-grid/data-grid-sprites.ts
function getColors(variant, theme) {
  if (variant === "normal") {
    return [theme.bgIconHeader, theme.fgIconHeader];
  } else if (variant === "selected") {
    return ["white", theme.accentColor];
  } else {
    return [theme.accentColor, theme.bgHeader];
  }
}
var SpriteManager = class {
  constructor(headerIcons, onSettled) {
    this.onSettled = onSettled;
    this.spriteMap = /* @__PURE__ */ new Map();
    this.inFlight = 0;
    this.headerIcons = {
      ...sprites,
      ...headerIcons
    };
  }
  drawSprite(sprite, variant, ctx, x, y, size, theme, alpha = 1) {
    const [bgColor, fgColor] = getColors(variant, theme);
    const rSize = size * Math.ceil(window.devicePixelRatio);
    const key = `${bgColor}_${fgColor}_${rSize}_${sprite}`;
    let spriteCanvas = this.spriteMap.get(key);
    if (spriteCanvas === void 0) {
      const spriteCb = this.headerIcons[sprite];
      if (spriteCb === void 0)
        return;
      spriteCanvas = document.createElement("canvas");
      const spriteCtx = spriteCanvas.getContext("2d");
      if (spriteCtx === null)
        return;
      const imgSource = new Image();
      imgSource.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(spriteCb({ fgColor, bgColor }))}`;
      this.spriteMap.set(key, spriteCanvas);
      const promise = imgSource.decode();
      if (promise === void 0)
        return;
      this.inFlight++;
      promise.then(() => {
        spriteCtx.drawImage(imgSource, 0, 0, rSize, rSize);
      }).finally(() => {
        this.inFlight--;
        if (this.inFlight === 0) {
          this.onSettled();
        }
      });
    } else {
      if (alpha < 1) {
        ctx.globalAlpha = alpha;
      }
      ctx.drawImage(spriteCanvas, 0, 0, rSize, rSize, x, y, size, size);
      if (alpha < 1) {
        ctx.globalAlpha = 1;
      }
    }
  }
};

// src/data-grid/data-grid.tsx
var import_clamp2 = __toESM(require("lodash/clamp.js"), 1);
var import_range = __toESM(require("lodash/range.js"), 1);

// src/data-grid/data-grid-render.tsx
var import_groupBy = __toESM(require("lodash/groupBy.js"), 1);

// src/data-grid/color-parser.ts
var cache = {};
var div = null;
function createDiv() {
  const d = document.createElement("div");
  d.style.opacity = "0";
  d.style.pointerEvents = "none";
  d.style.position = "fixed";
  document.body.append(d);
  return d;
}
function parseToRgba(color) {
  const normalizedColor = color.toLowerCase().trim();
  if (cache[normalizedColor] !== void 0)
    return cache[normalizedColor];
  div = div || createDiv();
  div.style.color = "#000";
  div.style.color = normalizedColor;
  const control = getComputedStyle(div).color;
  div.style.color = "#fff";
  div.style.color = normalizedColor;
  const computedColor = getComputedStyle(div).color;
  if (computedColor !== control)
    return [0, 0, 0, 1];
  let result = computedColor.replace(/[^\d.,]/g, "").split(",").map(Number.parseFloat);
  if (result.length < 3) {
    console.warn("Invalid color format", control, computedColor, result);
    result = [255, 255, 255, 1];
  }
  if (result.length < 4) {
    result.push(1);
  }
  result = result.map((x) => {
    const isNaN = Number.isNaN(x);
    if (isNaN) {
      console.warn("Could not parse color", color);
    }
    return isNaN ? 0 : x;
  });
  cache[normalizedColor] = result;
  return result;
}
function withAlpha(color, alpha) {
  const [r, g, b] = parseToRgba(color);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
function blend(color, background) {
  if (background === void 0)
    return color;
  const [r, g, b, a] = parseToRgba(color);
  if (a === 1)
    return color;
  const [br, bg, bb, ba] = parseToRgba(background);
  const ao = a + ba * (1 - a);
  const ro = (a * r + ba * br * (1 - a)) / ao;
  const go = (a * g + ba * bg * (1 - a)) / ao;
  const bo = (a * b + ba * bb * (1 - a)) / ao;
  return `rgba(${ro}, ${go}, ${bo}, ${ao})`;
}
function interpolateColors(leftColor, rightColor, val) {
  if (val <= 0)
    return leftColor;
  if (val >= 1)
    return rightColor;
  const left = [...parseToRgba(leftColor)];
  left[0] = left[0] * left[3];
  left[1] = left[1] * left[3];
  left[2] = left[2] * left[3];
  const right = [...parseToRgba(rightColor)];
  right[0] = right[0] * right[3];
  right[1] = right[1] * right[3];
  right[2] = right[2] * right[3];
  const hScaler = val;
  const nScaler = 1 - val;
  const a = left[3] * nScaler + right[3] * hScaler;
  const r = Math.floor((left[0] * nScaler + right[0] * hScaler) / a);
  const g = Math.floor((left[1] * nScaler + right[1] * hScaler) / a);
  const b = Math.floor((left[2] * nScaler + right[2] * hScaler) / a);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

// src/data-grid/data-grid-render.tsx
var loadingCell = {
  kind: GridCellKind.Loading,
  allowOverlay: false
};
function drawCell(ctx, row, cell, col, x, y, w, h, highlighted, theme, drawCustomCell, imageLoader, spriteManager, hoverAmount, hoverInfo, hyperWrapping, frameTime, lastPrep, enqueue, getCellRenderer) {
  let hoverX;
  let hoverY;
  if (hoverInfo !== void 0 && hoverInfo[0][0] === col && hoverInfo[0][1] === row) {
    hoverX = hoverInfo[1][0];
    hoverY = hoverInfo[1][1];
  }
  let result = void 0;
  const args = {
    ctx,
    theme,
    col,
    row,
    cell,
    rect: { x, y, width: w, height: h },
    highlighted,
    hoverAmount,
    hoverX,
    hoverY,
    imageLoader,
    spriteManager,
    hyperWrapping,
    requestAnimationFrame: () => {
      forceAnim = true;
    }
  };
  let forceAnim = false;
  const needsAnim = drawWithLastUpdate(args, cell.lastUpdated, frameTime, lastPrep, () => {
    var _a, _b;
    const drawn = isInnerOnlyCell(cell) ? false : (drawCustomCell == null ? void 0 : drawCustomCell(args)) === true;
    if (!drawn) {
      const r = getCellRenderer(cell);
      if (r !== void 0) {
        if ((lastPrep == null ? void 0 : lastPrep.renderer) !== r) {
          (_a = lastPrep == null ? void 0 : lastPrep.deprep) == null ? void 0 : _a.call(lastPrep, args);
          lastPrep = void 0;
        }
        const partialPrepResult = (_b = r.drawPrep) == null ? void 0 : _b.call(r, args, lastPrep);
        r.draw(args, cell);
        result = {
          deprep: partialPrepResult == null ? void 0 : partialPrepResult.deprep,
          fillStyle: partialPrepResult == null ? void 0 : partialPrepResult.fillStyle,
          font: partialPrepResult == null ? void 0 : partialPrepResult.font,
          renderer: r
        };
      }
    }
  });
  if (needsAnim || forceAnim)
    enqueue == null ? void 0 : enqueue([col, row]);
  return result;
}
function blitLastFrame(ctx, canvas, last, cellXOffset, cellYOffset, translateX, translateY, lastRowSticky, width, height, rows, totalHeaderHeight, dpr, mappedColumns, effectiveCols, getRowHeight, doubleBuffer) {
  const drawRegions = [];
  let blittedYOnly = false;
  ctx.imageSmoothingEnabled = false;
  const minY = Math.min(last.cellYOffset, cellYOffset);
  const maxY = Math.max(last.cellYOffset, cellYOffset);
  let deltaY = 0;
  if (typeof getRowHeight === "number") {
    deltaY += (maxY - minY) * getRowHeight;
  } else {
    for (let i = minY; i < maxY; i++) {
      deltaY += getRowHeight(i);
    }
  }
  if (cellYOffset > last.cellYOffset) {
    deltaY = -deltaY;
  }
  deltaY += translateY - last.translateY;
  const minX = Math.min(last.cellXOffset, cellXOffset);
  const maxX = Math.max(last.cellXOffset, cellXOffset);
  let deltaX = 0;
  for (let i = minX; i < maxX; i++) {
    deltaX += mappedColumns[i].width;
  }
  if (cellXOffset > last.cellXOffset) {
    deltaX = -deltaX;
  }
  deltaX += translateX - last.translateX;
  let stickyWidth = getStickyWidth(effectiveCols);
  if (stickyWidth > 0)
    stickyWidth++;
  if (deltaX !== 0 && deltaY !== 0) {
    return {
      regions: [],
      yOnly: false
    };
  }
  const stickyRowHeight = lastRowSticky ? typeof getRowHeight === "number" ? getRowHeight : getRowHeight(rows - 1) : 0;
  const blitWidth = width - stickyWidth - Math.abs(deltaX);
  const blitHeight = height - totalHeaderHeight - stickyRowHeight - Math.abs(deltaY) - 1;
  if (blitWidth > 150 && blitHeight > 150) {
    blittedYOnly = deltaX === 0;
    const args = {
      sx: 0,
      sy: 0,
      sw: width * dpr,
      sh: height * dpr,
      dx: 0,
      dy: 0,
      dw: width * dpr,
      dh: height * dpr
    };
    if (deltaY > 0) {
      args.sy = (totalHeaderHeight + 1) * dpr;
      args.sh = blitHeight * dpr;
      args.dy = (deltaY + totalHeaderHeight + 1) * dpr;
      args.dh = blitHeight * dpr;
      drawRegions.push({
        x: 0,
        y: totalHeaderHeight,
        width,
        height: deltaY + 1
      });
    } else if (deltaY < 0) {
      args.sy = (-deltaY + totalHeaderHeight + 1) * dpr;
      args.sh = blitHeight * dpr;
      args.dy = (totalHeaderHeight + 1) * dpr;
      args.dh = blitHeight * dpr;
      drawRegions.push({
        x: 0,
        y: height + deltaY - stickyRowHeight,
        width,
        height: -deltaY + stickyRowHeight
      });
    }
    if (deltaX > 0) {
      args.sx = stickyWidth * dpr;
      args.sw = blitWidth * dpr;
      args.dx = (deltaX + stickyWidth) * dpr;
      args.dw = blitWidth * dpr;
      drawRegions.push({
        x: stickyWidth - 1,
        y: 0,
        width: deltaX + 2,
        height
      });
    } else if (deltaX < 0) {
      args.sx = (stickyWidth - deltaX) * dpr;
      args.sw = blitWidth * dpr;
      args.dx = stickyWidth * dpr;
      args.dw = blitWidth * dpr;
      drawRegions.push({
        x: width + deltaX,
        y: 0,
        width: -deltaX,
        height
      });
    }
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    if (stickyWidth > 0 && deltaX !== 0 && deltaY === 0 && doubleBuffer) {
      ctx.drawImage(canvas, 0, 0, stickyWidth * dpr, height * dpr, 0, 0, stickyWidth * dpr, height * dpr);
    }
    ctx.drawImage(canvas, args.sx, args.sy, args.sw, args.sh, args.dx, args.dy, args.dw, args.dh);
    ctx.scale(dpr, dpr);
  }
  ctx.imageSmoothingEnabled = true;
  return {
    regions: drawRegions,
    yOnly: blittedYOnly
  };
}
function blitResizedCol(last, cellXOffset, cellYOffset, translateX, translateY, width, height, totalHeaderHeight, effectiveCols, resizedIndex) {
  const drawRegions = [];
  if (cellXOffset !== last.cellXOffset || cellYOffset !== last.cellYOffset || translateX !== last.translateX || translateY !== last.translateY) {
    return drawRegions;
  }
  walkColumns(effectiveCols, cellYOffset, translateX, translateY, totalHeaderHeight, (c, drawX, _drawY, clipX) => {
    if (c.sourceIndex === resizedIndex) {
      const x = Math.max(drawX, clipX) + 1;
      drawRegions.push({
        x,
        y: 0,
        width: width - x,
        height
      });
      return true;
    }
  });
  return drawRegions;
}
function drawGridLines(ctx, effectiveCols, cellYOffset, translateX, translateY, width, height, drawRegions, spans, groupHeaderHeight, totalHeaderHeight, getRowHeight, getRowThemeOverride, verticalBorder, trailingRowType, rows, theme, verticalOnly = false) {
  var _a, _b, _c;
  if (spans !== void 0) {
    ctx.beginPath();
    ctx.save();
    ctx.rect(0, 0, width, height);
    for (const span of spans) {
      ctx.rect(span.x + 1, span.y + 1, span.width - 1, span.height - 1);
    }
    ctx.clip("evenodd");
  }
  const hColor = (_a = theme.horizontalBorderColor) != null ? _a : theme.borderColor;
  const vColor = theme.borderColor;
  let minX = 0;
  let maxX = width;
  let minY = 0;
  let maxY = height;
  if (drawRegions !== void 0 && drawRegions.length > 0) {
    minX = Number.MAX_SAFE_INTEGER;
    minY = Number.MAX_SAFE_INTEGER;
    maxX = Number.MIN_SAFE_INTEGER;
    maxY = Number.MIN_SAFE_INTEGER;
    for (const r of drawRegions) {
      minX = Math.min(minX, r.x - 1);
      maxX = Math.max(maxX, r.x + r.width + 1);
      minY = Math.min(minY, r.y - 1);
      maxY = Math.max(maxY, r.y + r.height + 1);
    }
  }
  const toDraw = [];
  ctx.beginPath();
  let x = 0.5;
  for (let index2 = 0; index2 < effectiveCols.length; index2++) {
    const c = effectiveCols[index2];
    if (c.width === 0)
      continue;
    x += c.width;
    const tx = c.sticky ? x : x + translateX;
    if (tx >= minX && tx <= maxX && verticalBorder(index2 + 1)) {
      toDraw.push({
        x1: tx,
        y1: Math.max(groupHeaderHeight, minY),
        x2: tx,
        y2: Math.min(height, maxY),
        color: vColor
      });
    }
  }
  const stickyHeight = getRowHeight(rows - 1);
  const stickyRowY = height - stickyHeight + 0.5;
  const lastRowSticky = trailingRowType === "sticky";
  if (lastRowSticky) {
    toDraw.push({ x1: minX, y1: stickyRowY, x2: maxX, y2: stickyRowY, color: hColor });
  }
  if (verticalOnly !== true) {
    let y = totalHeaderHeight + 0.5;
    let row = cellYOffset;
    const target = lastRowSticky ? height - stickyHeight : height;
    while (y + translateY <= target) {
      const ty = y + translateY;
      if (ty >= minY && ty <= maxY - 1 && (!lastRowSticky || row !== rows - 1 || Math.abs(ty - stickyRowY) > 1)) {
        const rowTheme = getRowThemeOverride == null ? void 0 : getRowThemeOverride(row);
        toDraw.push({
          x1: minX,
          y1: ty,
          x2: maxX,
          y2: ty,
          color: (_c = (_b = rowTheme == null ? void 0 : rowTheme.horizontalBorderColor) != null ? _b : rowTheme == null ? void 0 : rowTheme.borderColor) != null ? _c : hColor
        });
      }
      y += getRowHeight(row);
      row++;
    }
  }
  const groups = (0, import_groupBy.default)(toDraw, (line) => line.color);
  for (const g of Object.keys(groups)) {
    ctx.strokeStyle = g;
    for (const line of groups[g]) {
      ctx.moveTo(line.x1, line.y1);
      ctx.lineTo(line.x2, line.y2);
    }
    ctx.stroke();
    ctx.beginPath();
  }
  if (spans !== void 0) {
    ctx.restore();
  }
}
function getActionBoundsForGroup(box, actions) {
  const result = [];
  let x = box.x + box.width - 26 * actions.length;
  const y = box.y + box.height / 2 - 13;
  const height = 26;
  const width = 26;
  for (let i = 0; i < actions.length; i++) {
    result.push({
      x,
      y,
      width,
      height
    });
    x += 26;
  }
  return result;
}
function pointInRect(rect, x, y) {
  return x >= rect.x && x <= rect.x + rect.width && y >= rect.y && y <= rect.y + rect.height;
}
function drawGroups(ctx, effectiveCols, width, translateX, groupHeaderHeight, hovered, theme, spriteManager, _hoverValues, verticalBorder, getGroupDetails, damage) {
  var _a;
  const xPad = 8;
  const [hCol, hRow] = (_a = hovered == null ? void 0 : hovered[0]) != null ? _a : [];
  let finalX = 0;
  walkGroups(effectiveCols, width, translateX, groupHeaderHeight, (span, groupName, x, y, w, h) => {
    var _a2, _b;
    if (damage !== void 0 && !damage.some((d) => d[1] === -2 && d[0] >= span[0] && d[0] <= span[1]))
      return;
    ctx.save();
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.clip();
    const group = getGroupDetails(groupName);
    const groupTheme = (group == null ? void 0 : group.overrideTheme) === void 0 ? theme : { ...theme, ...group.overrideTheme };
    const isHovered = hRow === -2 && hCol !== void 0 && hCol >= span[0] && hCol <= span[1];
    const fillColor = isHovered ? groupTheme.bgHeaderHovered : groupTheme.bgHeader;
    if (fillColor !== theme.bgHeader) {
      ctx.fillStyle = fillColor;
      ctx.fill();
    }
    ctx.fillStyle = (_a2 = groupTheme.textGroupHeader) != null ? _a2 : groupTheme.textHeader;
    if (group !== void 0) {
      let drawX = x;
      if (group.icon !== void 0) {
        spriteManager.drawSprite(group.icon, "normal", ctx, drawX + xPad, (groupHeaderHeight - 20) / 2, 20, groupTheme);
        drawX += 26;
      }
      ctx.fillText(group.name, drawX + xPad, groupHeaderHeight / 2 + getMiddleCenterBias(ctx, `${theme.headerFontStyle} ${theme.fontFamily}`));
      if (group.actions !== void 0 && isHovered) {
        const actionBoxes = getActionBoundsForGroup({ x, y, width: w, height: h }, group.actions);
        ctx.beginPath();
        const fadeStartX = actionBoxes[0].x - 10;
        const fadeWidth = x + w - fadeStartX;
        ctx.rect(fadeStartX, 0, fadeWidth, groupHeaderHeight);
        const grad = ctx.createLinearGradient(fadeStartX, 0, fadeStartX + fadeWidth, 0);
        const trans = withAlpha(fillColor, 0);
        grad.addColorStop(0, trans);
        grad.addColorStop(10 / fadeWidth, fillColor);
        grad.addColorStop(1, fillColor);
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.globalAlpha = 0.6;
        const [mouseX, mouseY] = (_b = hovered == null ? void 0 : hovered[1]) != null ? _b : [-1, -1];
        for (let i = 0; i < group.actions.length; i++) {
          const action = group.actions[i];
          const box = actionBoxes[i];
          const actionHovered = pointInRect(box, mouseX + x, mouseY);
          if (actionHovered) {
            ctx.globalAlpha = 1;
          }
          spriteManager.drawSprite(action.icon, "normal", ctx, box.x + box.width / 2 - 10, box.y + box.height / 2 - 10, 20, groupTheme);
          if (actionHovered) {
            ctx.globalAlpha = 0.6;
          }
        }
        ctx.globalAlpha = 1;
      }
    }
    if (x !== 0 && verticalBorder(span[0])) {
      ctx.beginPath();
      ctx.moveTo(x + 0.5, 0);
      ctx.lineTo(x + 0.5, groupHeaderHeight);
      ctx.strokeStyle = theme.borderColor;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    ctx.restore();
    finalX = x + w;
  });
  ctx.beginPath();
  ctx.moveTo(finalX + 0.5, 0);
  ctx.lineTo(finalX + 0.5, groupHeaderHeight);
  ctx.moveTo(0, groupHeaderHeight + 0.5);
  ctx.lineTo(width, groupHeaderHeight + 0.5);
  ctx.strokeStyle = theme.borderColor;
  ctx.lineWidth = 1;
  ctx.stroke();
}
var menuButtonSize = 30;
function getHeaderMenuBounds(x, y, width, height) {
  return {
    x: x + width - menuButtonSize,
    y: Math.max(y, y + height / 2 - menuButtonSize / 2),
    width: menuButtonSize,
    height: Math.min(menuButtonSize, height)
  };
}
function drawHeader(ctx, x, y, width, height, c, selected, theme, isHovered, hasSelectedCell, hoverAmount, spriteManager, drawHeaderCallback, touchMode) {
  const isCheckboxHeader = c.title.startsWith(headerCellCheckboxPrefix);
  const menuBounds = getHeaderMenuBounds(x, y, width, height);
  if (drawHeaderCallback !== void 0) {
    let passCol = c;
    if (isCheckboxHeader) {
      passCol = {
        ...c,
        title: ""
      };
    }
    if (drawHeaderCallback({
      ctx,
      theme,
      rect: { x, y, width, height },
      column: passCol,
      columnIndex: passCol.sourceIndex,
      isSelected: selected,
      hoverAmount,
      isHovered,
      hasSelectedCell,
      spriteManager,
      menuBounds
    })) {
      return;
    }
  }
  if (isCheckboxHeader) {
    let checked = void 0;
    if (c.title === headerCellCheckedMarker)
      checked = true;
    if (c.title === headerCellUnheckedMarker)
      checked = false;
    if (checked !== true) {
      ctx.globalAlpha = hoverAmount;
    }
    drawCheckbox(ctx, theme, checked, x, y, width, height, false, void 0, void 0, 18);
    if (checked !== true) {
      ctx.globalAlpha = 1;
    }
    return;
  }
  const xPad = theme.cellHorizontalPadding;
  const fillStyle = selected ? theme.textHeaderSelected : theme.textHeader;
  const shouldDrawMenu = c.hasMenu === true && (isHovered || touchMode && selected);
  let drawX = x + xPad;
  if (c.icon !== void 0) {
    let variant = selected ? "selected" : "normal";
    if (c.style === "highlight") {
      variant = selected ? "selected" : "special";
    }
    const headerSize = theme.headerIconSize;
    spriteManager.drawSprite(c.icon, variant, ctx, drawX, y + (height - headerSize) / 2, headerSize, theme);
    if (c.overlayIcon !== void 0) {
      spriteManager.drawSprite(c.overlayIcon, selected ? "selected" : "special", ctx, drawX + 9, y + ((height - 18) / 2 + 6), 18, theme);
    }
    drawX += Math.ceil(headerSize * 1.3);
  }
  if (shouldDrawMenu && c.hasMenu === true && width > 35) {
    const fadeWidth = 35;
    const fadeStart = width - fadeWidth;
    const fadeEnd = width - fadeWidth * 0.7;
    const fadeStartPercent = fadeStart / width;
    const fadeEndPercent = fadeEnd / width;
    const grad = ctx.createLinearGradient(x, 0, x + width, 0);
    const trans = withAlpha(fillStyle, 0);
    grad.addColorStop(0, fillStyle);
    grad.addColorStop(fadeStartPercent, fillStyle);
    grad.addColorStop(fadeEndPercent, trans);
    grad.addColorStop(1, trans);
    ctx.fillStyle = grad;
  } else {
    ctx.fillStyle = fillStyle;
  }
  ctx.fillText(c.title, drawX, y + height / 2 + getMiddleCenterBias(ctx, `${theme.headerFontStyle} ${theme.fontFamily}`));
  if (shouldDrawMenu && c.hasMenu === true) {
    ctx.beginPath();
    const triangleX = menuBounds.x + menuBounds.width / 2 - 5.5;
    const triangleY = menuBounds.y + menuBounds.height / 2 - 3;
    roundedPoly(ctx, [
      {
        x: triangleX,
        y: triangleY
      },
      {
        x: triangleX + 11,
        y: triangleY
      },
      {
        x: triangleX + 5.5,
        y: triangleY + 6
      }
    ], 1);
    ctx.fillStyle = fillStyle;
    ctx.fill();
  }
}
function drawGridHeaders(ctx, effectiveCols, enableGroups, hovered, width, translateX, headerHeight, groupHeaderHeight, dragAndDropState, isResizing, selection, outerTheme, spriteManager, hoverValues, verticalBorder, getGroupDetails, damage, drawHeaderCallback, touchMode) {
  var _a;
  const totalHeaderHeight = headerHeight + groupHeaderHeight;
  if (totalHeaderHeight <= 0)
    return;
  ctx.fillStyle = outerTheme.bgHeader;
  ctx.fillRect(0, 0, width, totalHeaderHeight);
  const [hCol, hRow] = (_a = hovered == null ? void 0 : hovered[0]) != null ? _a : [];
  const font = `${outerTheme.headerFontStyle} ${outerTheme.fontFamily}`;
  ctx.font = font;
  walkColumns(effectiveCols, 0, translateX, 0, totalHeaderHeight, (c, x, _y, clipX) => {
    var _a2, _b, _c;
    if (damage !== void 0 && !damage.some((d) => d[1] === -1 && d[0] === c.sourceIndex))
      return;
    const diff = Math.max(0, clipX - x);
    ctx.save();
    ctx.beginPath();
    ctx.rect(x + diff, groupHeaderHeight, c.width - diff, headerHeight);
    ctx.clip();
    const groupTheme = getGroupDetails((_a2 = c.group) != null ? _a2 : "").overrideTheme;
    const theme = c.themeOverride === void 0 && groupTheme === void 0 ? outerTheme : { ...outerTheme, ...groupTheme, ...c.themeOverride };
    if (theme.bgHeader !== outerTheme.bgHeader) {
      ctx.fillStyle = theme.bgHeader;
      ctx.fill();
    }
    const f = `${theme.headerFontStyle} ${theme.fontFamily}`;
    if (font !== f) {
      ctx.font = f;
    }
    const selected = selection.columns.hasIndex(c.sourceIndex);
    const noHover = dragAndDropState !== void 0 || isResizing;
    const hoveredBoolean = !noHover && hRow === -1 && hCol === c.sourceIndex;
    const hover = noHover ? 0 : (_c = (_b = hoverValues.find((s) => s.item[0] === c.sourceIndex && s.item[1] === -1)) == null ? void 0 : _b.hoverAmount) != null ? _c : 0;
    const hasSelectedCell = (selection == null ? void 0 : selection.current) !== void 0 && selection.current.cell[0] === c.sourceIndex;
    const bgFillStyle = selected ? theme.accentColor : hasSelectedCell ? theme.bgHeaderHasFocus : theme.bgHeader;
    const y = enableGroups ? groupHeaderHeight : 0;
    const xOffset = c.sourceIndex === 0 ? 0 : 1;
    if (selected) {
      ctx.fillStyle = bgFillStyle;
      ctx.fillRect(x + xOffset, y, c.width - xOffset, headerHeight);
    } else if (hasSelectedCell || hover > 0) {
      ctx.beginPath();
      ctx.rect(x + xOffset, y, c.width - xOffset, headerHeight);
      if (hasSelectedCell) {
        ctx.fillStyle = theme.bgHeaderHasFocus;
        ctx.fill();
      }
      if (hover > 0) {
        ctx.globalAlpha = hover;
        ctx.fillStyle = theme.bgHeaderHovered;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }
    drawHeader(ctx, x, y, c.width, headerHeight, c, selected, theme, hoveredBoolean, hasSelectedCell, hover, spriteManager, drawHeaderCallback, touchMode);
    ctx.restore();
  });
  if (enableGroups) {
    drawGroups(ctx, effectiveCols, width, translateX, groupHeaderHeight, hovered, outerTheme, spriteManager, hoverValues, verticalBorder, getGroupDetails, damage);
  }
}
function intersectRect(x1, y1, w1, h1, x2, y2, w2, h2) {
  return x1 <= x2 + w2 && x2 <= x1 + w1 && y1 <= y2 + h2 && y2 <= y1 + h1;
}
function clipDamage(ctx, effectiveColumns, width, height, groupHeaderHeight, totalHeaderHeight, translateX, translateY, cellYOffset, rows, getRowHeight, trailingRowType, damage, includeCells) {
  if (damage === void 0 || damage.length === 0)
    return;
  const stickyRowHeight = trailingRowType === "sticky" ? getRowHeight(rows - 1) : 0;
  ctx.beginPath();
  walkGroups(effectiveColumns, width, translateX, groupHeaderHeight, (span, _group, x, y, w, h) => {
    for (let i = 0; i < damage.length; i++) {
      const d = damage[i];
      if (d[1] === -2 && d[0] >= span[0] && d[0] <= span[1]) {
        ctx.rect(x, y, w, h);
        break;
      }
    }
  });
  walkColumns(effectiveColumns, cellYOffset, translateX, translateY, totalHeaderHeight, (c, drawX, colDrawY, clipX, startRow) => {
    const diff = Math.max(0, clipX - drawX);
    const finalX = drawX + diff + 1;
    const finalWidth = c.width - diff - 1;
    for (let i = 0; i < damage.length; i++) {
      const d = damage[i];
      if (d[0] === c.sourceIndex && (d[1] === -1 || d[1] === void 0)) {
        ctx.rect(finalX, groupHeaderHeight, finalWidth, totalHeaderHeight - groupHeaderHeight);
        break;
      }
    }
    if (!includeCells)
      return;
    walkRowsInCol(startRow, colDrawY, height, rows, getRowHeight, trailingRowType, (drawY, row, rh, isSticky) => {
      let isDamaged = false;
      for (let i = 0; i < damage.length; i++) {
        const d = damage[i];
        if (d[0] === c.sourceIndex && d[1] === row) {
          isDamaged = true;
          break;
        }
      }
      if (isDamaged) {
        const top = drawY + 1;
        const bottom = isSticky ? top + rh - 1 : Math.min(top + rh - 1, height - stickyRowHeight);
        const h = bottom - top;
        if (h > 0) {
          ctx.rect(finalX, top, finalWidth, h);
        }
      }
    });
  });
  ctx.clip();
}
function getSpanBounds(span, cellX, cellY, cellW, cellH, column, allColumns) {
  var _a, _b;
  const [startCol, endCol] = span;
  let frozenRect;
  let contentRect;
  const firstNonSticky = (_b = (_a = allColumns.find((x) => !x.sticky)) == null ? void 0 : _a.sourceIndex) != null ? _b : 0;
  if (endCol > firstNonSticky) {
    const renderFromCol = Math.max(startCol, firstNonSticky);
    let tempX = cellX;
    let tempW = cellW;
    for (let x = column.sourceIndex - 1; x >= renderFromCol; x--) {
      tempX -= allColumns[x].width;
      tempW += allColumns[x].width;
    }
    for (let x = column.sourceIndex + 1; x <= endCol; x++) {
      tempW += allColumns[x].width;
    }
    contentRect = {
      x: tempX,
      y: cellY,
      width: tempW,
      height: cellH
    };
  }
  if (firstNonSticky > startCol) {
    const renderToCol = Math.min(endCol, firstNonSticky - 1);
    let tempX = cellX;
    let tempW = cellW;
    for (let x = column.sourceIndex - 1; x >= startCol; x--) {
      tempX -= allColumns[x].width;
      tempW += allColumns[x].width;
    }
    for (let x = column.sourceIndex + 1; x <= renderToCol; x++) {
      tempW += allColumns[x].width;
    }
    frozenRect = {
      x: tempX,
      y: cellY,
      width: tempW,
      height: cellH
    };
  }
  return [frozenRect, contentRect];
}
function drawCells(ctx, effectiveColumns, allColumns, height, totalHeaderHeight, translateX, translateY, cellYOffset, rows, getRowHeight, getCellContent, getGroupDetails, getRowThemeOverride, disabledRows, isFocused, drawFocus, trailingRowType, drawRegions, damage, selection, prelightCells, highlightRegions, drawCustomCell, imageLoader, spriteManager, hoverValues, hoverInfo, hyperWrapping, outerTheme, enqueue, getCellRenderer) {
  var _a;
  let toDraw = (_a = damage == null ? void 0 : damage.length) != null ? _a : Number.MAX_SAFE_INTEGER;
  const frameTime = performance.now();
  let font = `${outerTheme.baseFontStyle} ${outerTheme.fontFamily}`;
  ctx.font = font;
  let result;
  const handledSpans = /* @__PURE__ */ new Set();
  walkColumns(effectiveColumns, cellYOffset, translateX, translateY, totalHeaderHeight, (c, drawX, colDrawStartY, clipX, startRow) => {
    var _a2;
    const diff = Math.max(0, clipX - drawX);
    const colDrawX = drawX + diff;
    const colDrawY = totalHeaderHeight + 1;
    const colWidth = c.width - diff;
    const colHeight = height - totalHeaderHeight - 1;
    if (drawRegions.length > 0) {
      let found = false;
      for (let i = 0; i < drawRegions.length; i++) {
        const dr = drawRegions[i];
        if (intersectRect(colDrawX, colDrawY, colWidth, colHeight, dr.x, dr.y, dr.width, dr.height)) {
          found = true;
          break;
        }
      }
      if (!found)
        return;
    }
    const reclip = () => {
      ctx.save();
      ctx.beginPath();
      ctx.rect(colDrawX, colDrawY, colWidth, colHeight);
      ctx.clip();
    };
    const colSelected = selection.columns.hasIndex(c.sourceIndex);
    const groupTheme = getGroupDetails((_a2 = c.group) != null ? _a2 : "").overrideTheme;
    const colTheme = c.themeOverride === void 0 && groupTheme === void 0 ? outerTheme : { ...outerTheme, ...groupTheme, ...c.themeOverride };
    const colFont = `${colTheme.baseFontStyle} ${colTheme.fontFamily}`;
    if (colFont !== font) {
      font = colFont;
      ctx.font = colFont;
    }
    reclip();
    let prepResult = void 0;
    walkRowsInCol(startRow, colDrawStartY, height, rows, getRowHeight, trailingRowType, (drawY, row, rh, isSticky, isTrailingRow) => {
      var _a3, _b, _c, _d;
      if (row < 0)
        return;
      if (damage !== void 0) {
        let found = false;
        for (let i = 0; i < damage.length; i++) {
          const d = damage[i];
          if (d[0] === c.sourceIndex && d[1] === row) {
            found = true;
            break;
          }
        }
        if (!found)
          return;
      }
      if (drawRegions.length > 0) {
        let found = false;
        for (let i = 0; i < drawRegions.length; i++) {
          const dr = drawRegions[i];
          if (intersectRect(drawX, drawY, c.width, rh, dr.x, dr.y, dr.width, dr.height)) {
            found = true;
            break;
          }
        }
        if (!found)
          return;
      }
      const rowSelected = selection.rows.hasIndex(row);
      const rowDisabled = disabledRows.hasIndex(row);
      const cell = row < rows ? getCellContent([c.sourceIndex, row]) : loadingCell;
      let cellX = drawX;
      let cellWidth = c.width;
      let drawingSpan = false;
      let skipContents = false;
      if (cell.span !== void 0) {
        const [startCol, endCol] = cell.span;
        const spanKey = `${row},${startCol},${endCol},${c.sticky}`;
        if (!handledSpans.has(spanKey)) {
          const areas = getSpanBounds(cell.span, drawX, drawY, c.width, rh, c, allColumns);
          const area = c.sticky ? areas[0] : areas[1];
          if (!c.sticky && areas[0] !== void 0) {
            skipContents = true;
          }
          if (area !== void 0) {
            cellX = area.x;
            cellWidth = area.width;
            handledSpans.add(spanKey);
            ctx.restore();
            prepResult = void 0;
            ctx.save();
            ctx.beginPath();
            const d = Math.max(0, clipX - area.x);
            ctx.rect(area.x + d, drawY, area.width - d, rh);
            if (result === void 0) {
              result = [];
            }
            result.push({
              x: area.x + d,
              y: drawY,
              width: area.width - d,
              height: rh
            });
            ctx.clip();
            drawingSpan = true;
          }
        } else {
          toDraw--;
          return;
        }
      }
      const rowTheme = getRowThemeOverride == null ? void 0 : getRowThemeOverride(row);
      const trailingTheme = isTrailingRow && ((_a3 = c.trailingRowOptions) == null ? void 0 : _a3.themeOverride) !== void 0 ? (_b = c.trailingRowOptions) == null ? void 0 : _b.themeOverride : void 0;
      const theme = cell.themeOverride === void 0 && rowTheme === void 0 && trailingTheme === void 0 ? colTheme : { ...colTheme, ...rowTheme, ...trailingTheme, ...cell.themeOverride };
      ctx.beginPath();
      const cellIndex = [c.sourceIndex, row];
      const isSelected = cellIsSelected(cellIndex, cell, selection);
      let accentCount = cellIsInRange(cellIndex, cell, selection);
      const spanIsHighlighted = cell.span !== void 0 && selection.columns.some((index2) => cell.span !== void 0 && index2 >= cell.span[0] && index2 <= cell.span[1]);
      if (isSelected && !isFocused && drawFocus) {
        accentCount = 0;
      } else if (isSelected) {
        accentCount = Math.max(accentCount, 1);
      }
      if (spanIsHighlighted) {
        accentCount++;
      }
      if (!isSelected) {
        if (rowSelected)
          accentCount++;
        if (colSelected && !isSticky)
          accentCount++;
      }
      const bgCell = cell.kind === GridCellKind.Protected ? theme.bgCellMedium : theme.bgCell;
      let fill;
      if (isSticky || bgCell !== outerTheme.bgCell) {
        fill = blend(bgCell, fill);
      }
      if (accentCount > 0 || rowDisabled) {
        if (rowDisabled) {
          fill = blend(theme.bgHeader, fill);
        }
        for (let i = 0; i < accentCount; i++) {
          fill = blend(theme.accentLight, fill);
        }
      } else {
        if ((prelightCells == null ? void 0 : prelightCells.some((pre) => pre[0] === c.sourceIndex && pre[1] === row)) === true) {
          fill = blend(theme.bgSearchResult, fill);
        }
      }
      if (highlightRegions !== void 0) {
        for (const region of highlightRegions) {
          const r = region.range;
          if (r.x <= c.sourceIndex && c.sourceIndex < r.x + r.width && r.y <= row && row < r.y + r.height) {
            fill = blend(region.color, fill);
          }
        }
      }
      if (fill !== void 0) {
        ctx.fillStyle = fill;
        if (prepResult !== void 0) {
          prepResult.fillStyle = fill;
        }
        ctx.fillRect(cellX, drawY, cellWidth, rh);
      }
      if (cell.style === "faded") {
        ctx.globalAlpha = 0.6;
      }
      const hoverValue = hoverValues.find((hv) => hv.item[0] === c.sourceIndex && hv.item[1] === row);
      if (cellWidth > 10 && !skipContents) {
        const cellFont = `${theme.baseFontStyle} ${theme.fontFamily}`;
        if (cellFont !== font) {
          ctx.font = cellFont;
          font = cellFont;
        }
        prepResult = drawCell(ctx, row, cell, c.sourceIndex, cellX, drawY, cellWidth, rh, accentCount > 0, theme, drawCustomCell, imageLoader, spriteManager, (_c = hoverValue == null ? void 0 : hoverValue.hoverAmount) != null ? _c : 0, hoverInfo, hyperWrapping, frameTime, prepResult, enqueue, getCellRenderer);
      }
      if (cell.style === "faded") {
        ctx.globalAlpha = 1;
      }
      toDraw--;
      if (drawingSpan) {
        ctx.restore();
        (_d = prepResult == null ? void 0 : prepResult.deprep) == null ? void 0 : _d.call(prepResult, { ctx });
        prepResult = void 0;
        reclip();
        font = colFont;
        ctx.font = colFont;
      }
      return toDraw <= 0;
    });
    ctx.restore();
    return toDraw <= 0;
  });
  return result;
}
function drawBlanks(ctx, effectiveColumns, allColumns, width, height, totalHeaderHeight, translateX, translateY, cellYOffset, rows, getRowHeight, getRowTheme, selectedRows, disabledRows, trailingRowType, drawRegions, damage, theme) {
  if (damage !== void 0 || effectiveColumns[effectiveColumns.length - 1] !== allColumns[effectiveColumns.length - 1])
    return;
  walkColumns(effectiveColumns, cellYOffset, translateX, translateY, totalHeaderHeight, (c, drawX, colDrawY, clipX, startRow) => {
    if (c !== effectiveColumns[effectiveColumns.length - 1])
      return;
    drawX += c.width;
    const x = Math.max(drawX, clipX);
    if (x > width)
      return;
    ctx.save();
    ctx.beginPath();
    ctx.rect(x, totalHeaderHeight + 1, 1e4, height - totalHeaderHeight - 1);
    ctx.clip();
    walkRowsInCol(startRow, colDrawY, height, rows, getRowHeight, trailingRowType, (drawY, row, rh, isSticky) => {
      if (!isSticky && drawRegions.length > 0 && !drawRegions.some((dr) => intersectRect(drawX, drawY, 1e4, rh, dr.x, dr.y, dr.width, dr.height))) {
        return;
      }
      const rowSelected = selectedRows.hasIndex(row);
      const rowDisabled = disabledRows.hasIndex(row);
      ctx.beginPath();
      const rowTheme = getRowTheme == null ? void 0 : getRowTheme(row);
      const blankTheme = rowTheme === void 0 ? theme : { ...theme, ...rowTheme };
      if (blankTheme.bgCell !== theme.bgCell) {
        ctx.fillStyle = blankTheme.bgCell;
        ctx.fillRect(drawX, drawY, 1e4, rh);
      }
      if (rowDisabled) {
        ctx.fillStyle = blankTheme.bgHeader;
        ctx.fillRect(drawX, drawY, 1e4, rh);
      }
      if (rowSelected) {
        ctx.fillStyle = blankTheme.accentLight;
        ctx.fillRect(drawX, drawY, 1e4, rh);
      }
    });
    ctx.restore();
  });
}
function overdrawStickyBoundaries(ctx, effectiveCols, width, height, lastRowSticky, rows, verticalBorder, getRowHeight, theme) {
  var _a;
  let drawFreezeBorder = false;
  for (const c of effectiveCols) {
    if (c.sticky)
      continue;
    drawFreezeBorder = verticalBorder(c.sourceIndex);
    break;
  }
  const hColor = (_a = theme.horizontalBorderColor) != null ? _a : theme.borderColor;
  const vColor = theme.borderColor;
  const drawX = drawFreezeBorder ? getStickyWidth(effectiveCols) : 0;
  if (drawX !== 0) {
    ctx.beginPath();
    ctx.moveTo(drawX + 0.5, 0);
    ctx.lineTo(drawX + 0.5, height);
    ctx.strokeStyle = blend(vColor, theme.bgCell);
    ctx.stroke();
  }
  if (lastRowSticky) {
    const h = getRowHeight(rows - 1);
    ctx.beginPath();
    ctx.moveTo(0, height - h + 0.5);
    ctx.lineTo(width, height - h + 0.5);
    ctx.strokeStyle = blend(hColor, theme.bgCell);
    ctx.stroke();
  }
}
function drawHighlightRings(ctx, width, height, cellXOffset, cellYOffset, translateX, translateY, mappedColumns, freezeColumns, headerHeight, groupHeaderHeight, rowHeight, lastRowSticky, rows, allHighlightRegions) {
  const highlightRegions = allHighlightRegions == null ? void 0 : allHighlightRegions.filter((x) => x.style !== "no-outline");
  if (highlightRegions === void 0 || highlightRegions.length === 0)
    return void 0;
  const drawRects = highlightRegions.map((h) => {
    var _a, _b, _c, _d, _e;
    const r = h.range;
    const topLeftBounds = computeBounds(r.x, r.y, width, height, groupHeaderHeight, headerHeight + groupHeaderHeight, cellXOffset, cellYOffset, translateX, translateY, rows, freezeColumns, lastRowSticky, mappedColumns, rowHeight);
    if (r.width === 1 && r.height === 1) {
      if (r.x < freezeColumns) {
        return [{ color: h.color, style: (_a = h.style) != null ? _a : "dashed", rect: topLeftBounds }, void 0];
      }
      return [void 0, { color: h.color, style: (_b = h.style) != null ? _b : "dashed", rect: topLeftBounds }];
    }
    const bottomRightBounds = computeBounds(r.x + r.width - 1, r.y + r.height - 1, width, height, groupHeaderHeight, headerHeight + groupHeaderHeight, cellXOffset, cellYOffset, translateX, translateY, rows, freezeColumns, lastRowSticky, mappedColumns, rowHeight);
    if (r.x < freezeColumns && r.x + r.width >= freezeColumns) {
      const freezeSectionRightBounds = computeBounds(freezeColumns - 1, r.y + r.height - 1, width, height, groupHeaderHeight, headerHeight + groupHeaderHeight, cellXOffset, cellYOffset, translateX, translateY, rows, freezeColumns, lastRowSticky, mappedColumns, rowHeight);
      const unfreezeSectionleftBounds = computeBounds(freezeColumns, r.y + r.height - 1, width, height, groupHeaderHeight, headerHeight + groupHeaderHeight, cellXOffset, cellYOffset, translateX, translateY, rows, freezeColumns, lastRowSticky, mappedColumns, rowHeight);
      return [
        {
          color: h.color,
          style: (_c = h.style) != null ? _c : "dashed",
          rect: {
            x: topLeftBounds.x,
            y: topLeftBounds.y,
            width: freezeSectionRightBounds.x + freezeSectionRightBounds.width - topLeftBounds.x,
            height: freezeSectionRightBounds.y + freezeSectionRightBounds.height - topLeftBounds.y
          }
        },
        {
          color: h.color,
          style: (_d = h.style) != null ? _d : "dashed",
          rect: {
            x: unfreezeSectionleftBounds.x,
            y: unfreezeSectionleftBounds.y,
            width: bottomRightBounds.x + bottomRightBounds.width - unfreezeSectionleftBounds.x,
            height: bottomRightBounds.y + bottomRightBounds.height - unfreezeSectionleftBounds.y
          }
        }
      ];
    } else {
      return [
        void 0,
        {
          color: h.color,
          style: (_e = h.style) != null ? _e : "dashed",
          rect: {
            x: topLeftBounds.x,
            y: topLeftBounds.y,
            width: bottomRightBounds.x + bottomRightBounds.width - topLeftBounds.x,
            height: bottomRightBounds.y + bottomRightBounds.height - topLeftBounds.y
          }
        }
      ];
    }
  });
  const stickyWidth = getStickyWidth(mappedColumns);
  const drawCb = () => {
    ctx.beginPath();
    ctx.save();
    let dashed = false;
    const setDashed = (dash) => {
      if (dashed === dash)
        return;
      ctx.setLineDash(dash ? [5, 3] : []);
      dashed = dash;
    };
    ctx.lineWidth = 1;
    for (const dr of drawRects) {
      const [s] = dr;
      if (s !== void 0 && intersectRect(0, 0, width, height, s.rect.x, s.rect.y, s.rect.width, s.rect.height)) {
        setDashed(s.style === "dashed");
        ctx.strokeStyle = withAlpha(s.color, 1);
        ctx.strokeRect(s.rect.x + 1, s.rect.y + 1, s.rect.width - 2, s.rect.height - 2);
      }
    }
    let clipped = false;
    for (const dr of drawRects) {
      const [, s] = dr;
      if (s !== void 0 && intersectRect(0, 0, width, height, s.rect.x, s.rect.y, s.rect.width, s.rect.height)) {
        setDashed(s.style === "dashed");
        if (!clipped && s.rect.x < stickyWidth) {
          ctx.rect(stickyWidth, 0, width, height);
          ctx.clip();
          clipped = true;
        }
        ctx.strokeStyle = withAlpha(s.color, 1);
        ctx.strokeRect(s.rect.x + 1, s.rect.y + 1, s.rect.width - 2, s.rect.height - 2);
      }
    }
    ctx.restore();
  };
  drawCb();
  return drawCb;
}
function drawFocusRing(ctx, width, height, cellYOffset, translateX, translateY, effectiveCols, allColumns, theme, totalHeaderHeight, selectedCell, getRowHeight, getCellContent, trailingRowType, fillHandle, rows) {
  var _a;
  if (selectedCell.current === void 0 || !effectiveCols.some((c) => {
    var _a2;
    return c.sourceIndex === ((_a2 = selectedCell.current) == null ? void 0 : _a2.cell[0]);
  }))
    return void 0;
  const [targetCol, targetRow] = selectedCell.current.cell;
  const cell = getCellContent(selectedCell.current.cell);
  const targetColSpan = (_a = cell.span) != null ? _a : [targetCol, targetCol];
  const isStickyRow = trailingRowType === "sticky" && targetRow === rows - 1;
  const stickRowHeight = trailingRowType === "sticky" && !isStickyRow ? getRowHeight(rows - 1) - 1 : 0;
  let drawCb = void 0;
  walkColumns(effectiveCols, cellYOffset, translateX, translateY, totalHeaderHeight, (col, drawX, colDrawY, clipX, startRow) => {
    if (col.sticky && targetCol > col.sourceIndex)
      return;
    if (col.sourceIndex < targetColSpan[0] || col.sourceIndex > targetColSpan[1]) {
      return;
    }
    walkRowsInCol(startRow, colDrawY, height, rows, getRowHeight, trailingRowType, (drawY, row, rh) => {
      if (row !== targetRow)
        return;
      let cellX = drawX;
      let cellWidth = col.width;
      if (cell.span !== void 0) {
        const areas = getSpanBounds(cell.span, drawX, drawY, col.width, rh, col, allColumns);
        const area = col.sticky ? areas[0] : areas[1];
        if (area !== void 0) {
          cellX = area.x;
          cellWidth = area.width;
        }
      }
      drawCb = () => {
        var _a2, _b, _c, _d;
        if (clipX > cellX && !col.sticky) {
          ctx.beginPath();
          ctx.rect(clipX, 0, width - clipX, height);
          ctx.clip();
        }
        ctx.beginPath();
        ctx.rect(cellX + 0.5, drawY + 0.5, cellWidth, rh);
        ctx.strokeStyle = (_b = (_a2 = col.themeOverride) == null ? void 0 : _a2.accentColor) != null ? _b : theme.accentColor;
        ctx.lineWidth = 1;
        ctx.stroke();
        if (fillHandle) {
          ctx.beginPath();
          ctx.rect(cellX + cellWidth - 4, drawY + rh - 4, 4, 4);
          ctx.fillStyle = (_d = (_c = col.themeOverride) == null ? void 0 : _c.accentColor) != null ? _d : theme.accentColor;
          ctx.fill();
        }
      };
      return true;
    });
    return true;
  });
  if (drawCb === void 0)
    return void 0;
  const result = () => {
    ctx.save();
    ctx.beginPath();
    ctx.rect(0, totalHeaderHeight, width, height - totalHeaderHeight - stickRowHeight);
    ctx.clip();
    drawCb == null ? void 0 : drawCb();
    ctx.restore();
  };
  result();
  return result;
}
function getLastRow(effectiveColumns, height, totalHeaderHeight, translateX, translateY, cellYOffset, rows, getRowHeight, trailingRowType) {
  let result = 0;
  walkColumns(effectiveColumns, cellYOffset, translateX, translateY, totalHeaderHeight, (_c, __drawX, colDrawY, _clipX, startRow) => {
    walkRowsInCol(startRow, colDrawY, height, rows, getRowHeight, trailingRowType, (_drawY, row, _rh, isSticky) => {
      if (!isSticky) {
        result = Math.max(row, result);
      }
    });
    return true;
  });
  return result;
}
function computeCanBlit(current, last) {
  if (last === void 0)
    return false;
  if (current.width !== last.width || current.height !== last.height || current.theme !== last.theme || current.headerHeight !== last.headerHeight || current.rowHeight !== last.rowHeight || current.rows !== last.rows || current.getRowThemeOverride !== last.getRowThemeOverride || current.isFocused !== last.isFocused || current.isResizing !== last.isResizing || current.verticalBorder !== last.verticalBorder || current.getCellContent !== last.getCellContent || current.highlightRegions !== last.highlightRegions || current.selection !== last.selection || current.dragAndDropState !== last.dragAndDropState || current.prelightCells !== last.prelightCells || current.touchMode !== last.touchMode || current.scrolling !== last.scrolling) {
    return false;
  }
  if (current.mappedColumns !== last.mappedColumns) {
    if (current.mappedColumns.length > 100 || current.mappedColumns.length !== last.mappedColumns.length) {
      return false;
    }
    let resized;
    for (let i = 0; i < current.mappedColumns.length; i++) {
      const curCol = current.mappedColumns[i];
      const lastCol = last.mappedColumns[i];
      if (deepEqual(curCol, lastCol))
        continue;
      if (resized !== void 0)
        return false;
      if (curCol.width === lastCol.width)
        return false;
      const { width, ...curRest } = curCol;
      const { width: lastWidth, ...lastRest } = lastCol;
      if (!deepEqual(curRest, lastRest))
        return false;
      resized = i;
    }
    if (resized === void 0) {
      return true;
    }
    return resized;
  }
  return true;
}
function drawGrid(arg, lastArg) {
  var _a, _b;
  const {
    canvas,
    headerCanvas,
    width,
    height,
    cellXOffset,
    cellYOffset,
    translateX,
    translateY,
    mappedColumns,
    enableGroups,
    freezeColumns,
    dragAndDropState,
    theme,
    drawFocus,
    headerHeight,
    groupHeaderHeight,
    disabledRows,
    rowHeight,
    verticalBorder,
    isResizing,
    selection,
    fillHandle,
    lastRowSticky: trailingRowType,
    rows,
    getCellContent,
    getGroupDetails,
    getRowThemeOverride,
    isFocused,
    drawCustomCell,
    drawHeaderCallback,
    prelightCells,
    highlightRegions,
    imageLoader,
    lastBlitData,
    hoverValues,
    hyperWrapping,
    hoverInfo,
    spriteManager,
    scrolling,
    touchMode,
    enqueue,
    getCellRenderer,
    renderStrategy,
    bufferA,
    bufferB
  } = arg;
  let { damage } = arg;
  if (width === 0 || height === 0)
    return;
  const doubleBuffer = renderStrategy === "double-buffer";
  const dpr = scrolling ? 1 : Math.ceil((_a = window.devicePixelRatio) != null ? _a : 1);
  const canBlit = renderStrategy !== "direct" && computeCanBlit(arg, lastArg);
  if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
  }
  const overlayCanvas = headerCanvas;
  const totalHeaderHeight = enableGroups ? groupHeaderHeight + headerHeight : headerHeight;
  const overlayHeight = totalHeaderHeight + 1;
  if (overlayCanvas.width !== width * dpr || overlayCanvas.height !== overlayHeight * dpr) {
    overlayCanvas.width = width * dpr;
    overlayCanvas.height = overlayHeight * dpr;
    overlayCanvas.style.width = width + "px";
    overlayCanvas.style.height = overlayHeight + "px";
  }
  if (doubleBuffer && (bufferA.width !== width * dpr || bufferA.height !== height * dpr)) {
    bufferA.width = width * dpr;
    bufferA.height = height * dpr;
  }
  if (doubleBuffer && (bufferB.width !== width * dpr || bufferB.height !== height * dpr)) {
    bufferB.width = width * dpr;
    bufferB.height = height * dpr;
  }
  const last = lastBlitData.current;
  if (canBlit === true && cellXOffset === (last == null ? void 0 : last.cellXOffset) && cellYOffset === (last == null ? void 0 : last.cellYOffset) && translateX === (last == null ? void 0 : last.translateX) && translateY === (last == null ? void 0 : last.translateY))
    return;
  let mainCtx = null;
  if (doubleBuffer) {
    mainCtx = canvas.getContext("2d", {
      alpha: false
    });
  }
  const overlayCtx = overlayCanvas.getContext("2d", {
    alpha: false
  });
  let targetBuffer;
  if (!doubleBuffer) {
    targetBuffer = canvas;
  } else if (damage !== void 0) {
    targetBuffer = (last == null ? void 0 : last.lastBuffer) === "b" ? bufferB : bufferA;
  } else {
    targetBuffer = (last == null ? void 0 : last.lastBuffer) === "b" ? bufferA : bufferB;
  }
  const targetCtx = targetBuffer.getContext("2d", {
    alpha: false
  });
  const blitSource = doubleBuffer ? targetBuffer === bufferA ? bufferB : bufferA : canvas;
  if (overlayCtx === null || targetCtx === null)
    return;
  const getRowHeight = typeof rowHeight === "number" ? () => rowHeight : rowHeight;
  overlayCtx.save();
  overlayCtx.beginPath();
  targetCtx.save();
  targetCtx.beginPath();
  overlayCtx.textBaseline = "middle";
  targetCtx.textBaseline = "middle";
  if (dpr !== 1) {
    overlayCtx.scale(dpr, dpr);
    targetCtx.scale(dpr, dpr);
  }
  const effectiveCols = getEffectiveColumns(mappedColumns, cellXOffset, width, dragAndDropState, translateX);
  let drawRegions = [];
  const mustDrawFocusOnHeader = drawFocus && ((_b = selection.current) == null ? void 0 : _b.cell[1]) === cellYOffset && translateY === 0;
  const drawHeaderTexture = () => {
    var _a2, _b2;
    drawGridHeaders(overlayCtx, effectiveCols, enableGroups, hoverInfo, width, translateX, headerHeight, groupHeaderHeight, dragAndDropState, isResizing, selection, theme, spriteManager, hoverValues, verticalBorder, getGroupDetails, damage, drawHeaderCallback, touchMode);
    drawGridLines(overlayCtx, effectiveCols, cellYOffset, translateX, translateY, width, height, void 0, void 0, groupHeaderHeight, totalHeaderHeight, getRowHeight, getRowThemeOverride, verticalBorder, trailingRowType, rows, theme, true);
    overlayCtx.beginPath();
    overlayCtx.moveTo(0, overlayHeight - 0.5);
    overlayCtx.lineTo(width, overlayHeight - 0.5);
    overlayCtx.strokeStyle = blend((_b2 = (_a2 = theme.headerBottomBorderColor) != null ? _a2 : theme.horizontalBorderColor) != null ? _b2 : theme.borderColor, theme.bgHeader);
    overlayCtx.stroke();
    if (mustDrawFocusOnHeader) {
      drawFocusRing(overlayCtx, width, height, cellYOffset, translateX, translateY, effectiveCols, mappedColumns, theme, totalHeaderHeight, selection, getRowHeight, getCellContent, trailingRowType, fillHandle, rows);
    }
  };
  if (damage !== void 0) {
    let doHeaders = false;
    damage = damage.filter((x) => {
      doHeaders = doHeaders || x[1] < 0;
      return x[1] < 0 || intersectRect(cellXOffset, cellYOffset, effectiveCols.length, 300, x[0], x[1], 1, 1) || intersectRect(0, cellYOffset, freezeColumns, 300, x[0], x[1], 1, 1) || trailingRowType && intersectRect(cellXOffset, rows - 1, effectiveCols.length, 1, x[0], x[1], 1, 1);
    });
    if (damage.length > 0) {
      clipDamage(targetCtx, effectiveCols, width, height, groupHeaderHeight, totalHeaderHeight, translateX, translateY, cellYOffset, rows, getRowHeight, trailingRowType, damage, true);
      targetCtx.fillStyle = theme.bgCell;
      targetCtx.fillRect(0, totalHeaderHeight + 1, width, height - totalHeaderHeight - 1);
      drawCells(targetCtx, effectiveCols, mappedColumns, height, totalHeaderHeight, translateX, translateY, cellYOffset, rows, getRowHeight, getCellContent, getGroupDetails, getRowThemeOverride, disabledRows, isFocused, drawFocus, trailingRowType, drawRegions, damage, selection, prelightCells, highlightRegions, drawCustomCell, imageLoader, spriteManager, hoverValues, hoverInfo, hyperWrapping, theme, enqueue, getCellRenderer);
      if (fillHandle && drawFocus && selection.current !== void 0 && damage.some((x) => {
        var _a2, _b2;
        return x[0] === ((_a2 = selection.current) == null ? void 0 : _a2.cell[0]) && x[1] === ((_b2 = selection.current) == null ? void 0 : _b2.cell[1]);
      })) {
        drawFocusRing(targetCtx, width, height, cellYOffset, translateX, translateY, effectiveCols, mappedColumns, theme, totalHeaderHeight, selection, getRowHeight, getCellContent, trailingRowType, fillHandle, rows);
      }
    }
    if (doHeaders) {
      clipDamage(overlayCtx, effectiveCols, width, totalHeaderHeight, groupHeaderHeight, totalHeaderHeight, translateX, translateY, cellYOffset, rows, getRowHeight, trailingRowType, damage, false);
      drawHeaderTexture();
    }
    targetCtx.restore();
    overlayCtx.restore();
    if (mainCtx !== null) {
      mainCtx.fillStyle = theme.bgCell;
      mainCtx.fillRect(0, 0, width, height);
      mainCtx.drawImage(targetCtx.canvas, 0, 0);
    }
    return;
  }
  if (canBlit !== true || cellXOffset !== (last == null ? void 0 : last.cellXOffset) || translateX !== (last == null ? void 0 : last.translateX) || mustDrawFocusOnHeader !== (last == null ? void 0 : last.mustDrawFocusOnHeader)) {
    drawHeaderTexture();
  }
  if (canBlit === true) {
    assert(blitSource !== void 0 && last !== void 0);
    const { regions } = blitLastFrame(targetCtx, blitSource, last, cellXOffset, cellYOffset, translateX, translateY, trailingRowType === "sticky", width, height, rows, totalHeaderHeight, dpr, mappedColumns, effectiveCols, rowHeight, doubleBuffer);
    drawRegions = regions;
  } else if (canBlit !== false) {
    assert(last !== void 0);
    const resizedCol = canBlit;
    drawRegions = blitResizedCol(last, cellXOffset, cellYOffset, translateX, translateY, width, height, totalHeaderHeight, effectiveCols, resizedCol);
  }
  overdrawStickyBoundaries(targetCtx, effectiveCols, width, height, trailingRowType === "sticky", rows, verticalBorder, getRowHeight, theme);
  const focusRedraw = drawFocus ? drawFocusRing(targetCtx, width, height, cellYOffset, translateX, translateY, effectiveCols, mappedColumns, theme, totalHeaderHeight, selection, getRowHeight, getCellContent, trailingRowType, fillHandle, rows) : void 0;
  const highlightRedraw = drawHighlightRings(targetCtx, width, height, cellXOffset, cellYOffset, translateX, translateY, mappedColumns, freezeColumns, headerHeight, groupHeaderHeight, rowHeight, trailingRowType === "sticky", rows, highlightRegions);
  targetCtx.fillStyle = theme.bgCell;
  if (drawRegions.length > 0) {
    targetCtx.beginPath();
    for (const r of drawRegions) {
      targetCtx.rect(r.x, r.y, r.width, r.height);
    }
    targetCtx.clip();
    targetCtx.fill();
    targetCtx.beginPath();
  } else {
    targetCtx.fillRect(0, 0, width, height);
  }
  const spans = drawCells(targetCtx, effectiveCols, mappedColumns, height, totalHeaderHeight, translateX, translateY, cellYOffset, rows, getRowHeight, getCellContent, getGroupDetails, getRowThemeOverride, disabledRows, isFocused, drawFocus, trailingRowType, drawRegions, damage, selection, prelightCells, highlightRegions, drawCustomCell, imageLoader, spriteManager, hoverValues, hoverInfo, hyperWrapping, theme, enqueue, getCellRenderer);
  drawBlanks(targetCtx, effectiveCols, mappedColumns, width, height, totalHeaderHeight, translateX, translateY, cellYOffset, rows, getRowHeight, getRowThemeOverride, selection.rows, disabledRows, trailingRowType, drawRegions, damage, theme);
  drawGridLines(targetCtx, effectiveCols, cellYOffset, translateX, translateY, width, height, drawRegions, spans, groupHeaderHeight, totalHeaderHeight, getRowHeight, getRowThemeOverride, verticalBorder, trailingRowType, rows, theme);
  focusRedraw == null ? void 0 : focusRedraw();
  highlightRedraw == null ? void 0 : highlightRedraw();
  if (mainCtx !== null) {
    mainCtx.fillStyle = theme.bgCell;
    mainCtx.fillRect(0, 0, width, height);
    mainCtx.drawImage(targetCtx.canvas, 0, 0);
  }
  const lastRowDrawn = getLastRow(effectiveCols, height, totalHeaderHeight, translateX, translateY, cellYOffset, rows, getRowHeight, trailingRowType);
  imageLoader == null ? void 0 : imageLoader.setWindow({
    x: cellXOffset,
    y: cellYOffset,
    width: effectiveCols.length,
    height: lastRowDrawn - cellYOffset
  }, freezeColumns);
  lastBlitData.current = {
    cellXOffset,
    cellYOffset,
    translateX,
    translateY,
    mustDrawFocusOnHeader,
    lastBuffer: doubleBuffer ? targetBuffer === bufferA ? "a" : "b" : void 0
  };
  targetCtx.restore();
  overlayCtx.restore();
}
function walkRowsInCol(startRow, drawY, height, rows, getRowHeight, trailingRowType, cb) {
  let y = drawY;
  let row = startRow;
  let doSticky = trailingRowType === "sticky";
  while (y < height || doSticky) {
    const doingSticky = doSticky && y >= height;
    if (doingSticky) {
      doSticky = false;
      row = rows - 1;
    }
    const rh = getRowHeight(row);
    if (doingSticky) {
      y = height - rh;
    }
    const isMovedStickyRow = doSticky && row === rows - 1;
    if (!isMovedStickyRow && cb(y, row, rh, doingSticky, trailingRowType !== "none" && row === rows - 1) === true) {
      break;
    }
    if (doingSticky) {
      break;
    }
    y += rh;
    row++;
  }
}
function walkColumns(effectiveCols, cellYOffset, translateX, translateY, totalHeaderHeight, cb) {
  let x = 0;
  let clipX = 0;
  const drawY = totalHeaderHeight + translateY;
  for (const c of effectiveCols) {
    const drawX = c.sticky ? clipX : x + translateX;
    if (cb(c, drawX, drawY, clipX, cellYOffset) === true) {
      break;
    }
    x += c.width;
    clipX += c.sticky ? c.width : 0;
  }
}
function walkGroups(effectiveCols, width, translateX, groupHeaderHeight, cb) {
  var _a;
  let x = 0;
  let clipX = 0;
  for (let index2 = 0; index2 < effectiveCols.length; index2++) {
    const startCol = effectiveCols[index2];
    let end = index2 + 1;
    let boxWidth = startCol.width;
    if (startCol.sticky) {
      clipX += boxWidth;
    }
    while (end < effectiveCols.length && isGroupEqual(effectiveCols[end].group, startCol.group) && effectiveCols[end].sticky === effectiveCols[index2].sticky) {
      const endCol = effectiveCols[end];
      boxWidth += endCol.width;
      end++;
      index2++;
      if (endCol.sticky) {
        clipX += endCol.width;
      }
    }
    const t = startCol.sticky ? 0 : translateX;
    const localX = x + t;
    const delta = startCol.sticky ? 0 : Math.max(0, clipX - localX);
    const w = Math.min(boxWidth - delta, width - (localX + delta));
    cb([startCol.sourceIndex, effectiveCols[end - 1].sourceIndex], (_a = startCol.group) != null ? _a : "", localX + delta, 0, w, groupHeaderHeight);
    x += boxWidth;
  }
}

// src/data-grid/animation-manager.ts
var import_clamp = __toESM(require("lodash/clamp.js"), 1);
var hoverTime = 80;
function easeOutCubic(x) {
  const x1 = x - 1;
  return x1 * x1 * x1 + 1;
}
var AnimationManager = class {
  constructor(callback) {
    this.callback = callback;
    this.currentHoveredItem = void 0;
    this.leavingItems = [];
    this.areSameItems = (left, right) => {
      return (left == null ? void 0 : left[0]) === (right == null ? void 0 : right[0]) && (left == null ? void 0 : left[1]) === (right == null ? void 0 : right[1]);
    };
    this.addToLeavingItems = (item) => {
      const isAlreadyLeaving = this.leavingItems.some((i) => this.areSameItems(i.item, item.item));
      if (isAlreadyLeaving) {
        return;
      }
      this.leavingItems.push(item);
    };
    this.removeFromLeavingItems = (item) => {
      var _a;
      const leavingItem = this.leavingItems.find((e) => this.areSameItems(e.item, item));
      this.leavingItems = this.leavingItems.filter((i) => i !== leavingItem);
      return (_a = leavingItem == null ? void 0 : leavingItem.hoverAmount) != null ? _a : 0;
    };
    this.cleanUpLeavingElements = () => {
      this.leavingItems = this.leavingItems.filter((i) => i.hoverAmount > 0);
    };
    this.shouldStep = () => {
      const hasLeavingItems = this.leavingItems.length > 0;
      const currentHoveredIsAnimating = this.currentHoveredItem !== void 0 && this.currentHoveredItem.hoverAmount < 1;
      return hasLeavingItems || currentHoveredIsAnimating;
    };
    this.getAnimatingItems = () => {
      if (this.currentHoveredItem !== void 0) {
        return [...this.leavingItems, this.currentHoveredItem];
      }
      return this.leavingItems.map((x) => ({ ...x, hoverAmount: easeOutCubic(x.hoverAmount) }));
    };
    this.step = (timestamp) => {
      if (this.lastAnimationTime === void 0) {
        this.lastAnimationTime = timestamp;
      } else {
        const step = timestamp - this.lastAnimationTime;
        const delta = step / hoverTime;
        for (const item of this.leavingItems) {
          item.hoverAmount = (0, import_clamp.default)(item.hoverAmount - delta, 0, 1);
        }
        if (this.currentHoveredItem !== void 0) {
          this.currentHoveredItem.hoverAmount = (0, import_clamp.default)(this.currentHoveredItem.hoverAmount + delta, 0, 1);
        }
        const animating = this.getAnimatingItems();
        this.callback(animating);
        this.cleanUpLeavingElements();
      }
      if (this.shouldStep()) {
        this.lastAnimationTime = timestamp;
        window.requestAnimationFrame(this.step);
      } else {
        this.lastAnimationTime = void 0;
      }
    };
    this.setHovered = (item) => {
      var _a;
      if (this.areSameItems((_a = this.currentHoveredItem) == null ? void 0 : _a.item, item)) {
        return;
      }
      if (this.currentHoveredItem !== void 0) {
        this.addToLeavingItems(this.currentHoveredItem);
      }
      if (item !== void 0) {
        const hoverAmount = this.removeFromLeavingItems(item);
        this.currentHoveredItem = {
          item,
          hoverAmount
        };
      } else {
        this.currentHoveredItem = void 0;
      }
      if (this.lastAnimationTime === void 0) {
        window.requestAnimationFrame(this.step);
      }
    };
  }
};

// src/common/browser-detect.ts
var Lazy = class {
  constructor(fn) {
    this.fn = fn;
  }
  get value() {
    var _a;
    return (_a = this.val) != null ? _a : this.val = this.fn();
  }
};
function lazy(fn) {
  return new Lazy(fn);
}
var browserIsFirefox = lazy(() => window.navigator.userAgent.includes("Firefox"));
var browserIsSafari = lazy(() => window.navigator.userAgent.includes("Mac OS") && window.navigator.userAgent.includes("Safari") && !window.navigator.userAgent.includes("Chrome"));
var browserIsOSX = lazy(() => window.navigator.platform.toLowerCase().startsWith("mac"));

// src/data-grid/use-animation-queue.ts
var React8 = __toESM(require("react"), 1);
function hasItem(arr, item) {
  for (const element of arr) {
    if (element[0] === item[0] && element[1] === item[1])
      return true;
  }
  return false;
}
function useAnimationQueue(draw) {
  const queue = React8.useRef([]);
  const seq = React8.useRef(0);
  const drawRef = React8.useRef(draw);
  drawRef.current = draw;
  const loop = React8.useCallback(() => {
    const requeue = () => window.requestAnimationFrame(fn);
    const fn = () => {
      const toDraw = queue.current;
      queue.current = [];
      drawRef.current(toDraw);
      if (queue.current.length > 0) {
        seq.current++;
      } else {
        seq.current = 0;
      }
    };
    window.requestAnimationFrame(seq.current > 600 ? requeue : fn);
  }, []);
  return React8.useCallback((item) => {
    if (hasItem(queue.current, item))
      return;
    if (queue.current.length === 0) {
      loop();
    }
    queue.current.push(item);
  }, [loop]);
}

// src/data-grid/data-grid.tsx
var getRowData = (cell, getCellRenderer) => {
  var _a;
  if (cell.kind === GridCellKind.Custom)
    return cell.copyData;
  const r = getCellRenderer == null ? void 0 : getCellRenderer(cell);
  return (_a = r == null ? void 0 : r.getAccessibilityString(cell)) != null ? _a : "";
};
var DataGrid = (p, forwardedRef) => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const {
    width,
    height,
    accessibilityHeight,
    columns,
    cellXOffset: cellXOffsetReal,
    cellYOffset,
    headerHeight,
    fillHandle = false,
    groupHeaderHeight,
    rowHeight,
    rows,
    getCellContent,
    getRowThemeOverride,
    onHeaderMenuClick,
    enableGroups,
    isFilling,
    onCanvasFocused,
    onCanvasBlur,
    isFocused,
    selection,
    freezeColumns,
    onContextMenu,
    trailingRowType,
    fixedShadowX = true,
    fixedShadowY = true,
    drawFocusRing: drawFocusRing2 = true,
    onMouseDown,
    onMouseUp,
    onMouseMoveRaw,
    onMouseMove,
    onItemHovered,
    dragAndDropState,
    firstColAccessible,
    onKeyDown,
    onKeyUp,
    highlightRegions,
    canvasRef,
    onDragStart,
    onDragEnd,
    eventTargetRef,
    isResizing,
    isDragging,
    isDraggable = false,
    allowResize,
    disabledRows,
    getGroupDetails,
    theme,
    prelightCells,
    headerIcons,
    verticalBorder,
    drawHeader: drawHeaderCallback,
    drawCustomCell,
    onCellFocused,
    onDragOverCell,
    onDrop,
    onDragLeave,
    imageWindowLoader,
    smoothScrollX = false,
    smoothScrollY = false,
    experimental,
    getCellRenderer
  } = p;
  const translateX = (_a = p.translateX) != null ? _a : 0;
  const translateY = (_b = p.translateY) != null ? _b : 0;
  const cellXOffset = Math.max(freezeColumns, Math.min(columns.length - 1, cellXOffsetReal));
  const ref = React9.useRef(null);
  const imageWindowLoaderInternal = React9.useMemo(() => new image_window_loader_default(), []);
  const imageLoader = imageWindowLoader != null ? imageWindowLoader : imageWindowLoaderInternal;
  const damageRegion = React9.useRef();
  const [scrolling, setScrolling] = React9.useState(false);
  const hoverValues = React9.useRef([]);
  const lastBlitData = React9.useRef();
  const [hoveredItemInfo, setHoveredItemInfo] = React9.useState();
  const [hoveredOnEdge, setHoveredOnEdge] = React9.useState();
  const overlayRef = React9.useRef(null);
  const [lastWasTouch, setLastWasTouch] = React9.useState(false);
  const lastWasTouchRef = React9.useRef(lastWasTouch);
  lastWasTouchRef.current = lastWasTouch;
  const spriteManager = React9.useMemo(() => new SpriteManager(headerIcons, () => {
    lastArgsRef.current = void 0;
    lastDrawRef.current();
  }), [headerIcons]);
  const totalHeaderHeight = enableGroups ? groupHeaderHeight + headerHeight : headerHeight;
  const scrollingStopRef = React9.useRef(-1);
  const disableFirefoxRescaling = (experimental == null ? void 0 : experimental.enableFirefoxRescaling) !== true;
  React9.useLayoutEffect(() => {
    if (!browserIsFirefox.value || window.devicePixelRatio === 1 || disableFirefoxRescaling)
      return;
    if (scrollingStopRef.current !== -1) {
      setScrolling(true);
    }
    window.clearTimeout(scrollingStopRef.current);
    scrollingStopRef.current = window.setTimeout(() => {
      setScrolling(false);
      scrollingStopRef.current = -1;
    }, 200);
  }, [cellYOffset, cellXOffset, translateX, translateY, disableFirefoxRescaling]);
  const mappedColumns = useMappedColumns(columns, freezeColumns);
  const getBoundsForItem = React9.useCallback((canvas, col, row) => {
    const rect = canvas.getBoundingClientRect();
    if (col >= mappedColumns.length || row >= rows) {
      return void 0;
    }
    const scale = rect.width / width;
    const result = computeBounds(col, row, width, height, groupHeaderHeight, totalHeaderHeight, cellXOffset, cellYOffset, translateX, translateY, rows, freezeColumns, trailingRowType === "sticky", mappedColumns, rowHeight);
    if (scale !== 1) {
      result.x *= scale;
      result.y *= scale;
      result.width *= scale;
      result.height *= scale;
    }
    result.x += rect.x;
    result.y += rect.y;
    return result;
  }, [
    width,
    height,
    groupHeaderHeight,
    totalHeaderHeight,
    cellXOffset,
    cellYOffset,
    translateX,
    translateY,
    rows,
    freezeColumns,
    trailingRowType,
    mappedColumns,
    rowHeight
  ]);
  const getMouseArgsForPosition = React9.useCallback((canvas, posX, posY, ev) => {
    var _a2, _b2;
    const rect = canvas.getBoundingClientRect();
    const scale = rect.width / width;
    const x = (posX - rect.left) / scale;
    const y = (posY - rect.top) / scale;
    const edgeDetectionBuffer = 5;
    const effectiveCols = getEffectiveColumns(mappedColumns, cellXOffset, width, void 0, translateX);
    let button = 0;
    if (ev instanceof MouseEvent) {
      button = ev.button;
    }
    const col = getColumnIndexForX(x, effectiveCols, translateX);
    const row = getRowIndexForY(y, height, enableGroups, headerHeight, groupHeaderHeight, rows, rowHeight, cellYOffset, translateY, trailingRowType === "sticky");
    const shiftKey = (ev == null ? void 0 : ev.shiftKey) === true;
    const ctrlKey = (ev == null ? void 0 : ev.ctrlKey) === true;
    const metaKey = (ev == null ? void 0 : ev.metaKey) === true;
    const isTouch = ev !== void 0 && !(ev instanceof MouseEvent) || (ev == null ? void 0 : ev.pointerType) === "touch";
    const edgeSize = 20;
    const scrollEdge = [
      Math.abs(x) < edgeSize ? -1 : Math.abs(rect.width - x) < edgeSize ? 1 : 0,
      Math.abs(y) < edgeSize ? -1 : Math.abs(rect.height - y) < edgeSize ? 1 : 0
    ];
    let result;
    if (col === -1 || y < 0 || x < 0 || row === void 0 || x > width || y > height) {
      const horizontal = x > width ? -1 : x < 0 ? 1 : 0;
      const vertical = y > height ? 1 : y < 0 ? -1 : 0;
      let isEdge = false;
      if (col === -1 && row === -1) {
        const b = getBoundsForItem(canvas, mappedColumns.length - 1, -1);
        assert(b !== void 0);
        isEdge = posX < b.x + b.width + edgeDetectionBuffer;
      }
      result = {
        kind: outOfBoundsKind,
        location: [col !== -1 ? col : x < 0 ? 0 : mappedColumns.length - 1, row != null ? row : rows - 1],
        direction: [horizontal, vertical],
        shiftKey,
        ctrlKey,
        metaKey,
        isEdge,
        isTouch,
        button,
        scrollEdge
      };
    } else if (row <= -1) {
      let bounds = getBoundsForItem(canvas, col, row);
      assert(bounds !== void 0);
      let isEdge = bounds !== void 0 && bounds.x + bounds.width - posX <= edgeDetectionBuffer;
      const previousCol = col - 1;
      if (posX - bounds.x <= edgeDetectionBuffer && previousCol >= 0) {
        isEdge = true;
        bounds = getBoundsForItem(canvas, previousCol, row);
        assert(bounds !== void 0);
        result = {
          kind: enableGroups && row === -2 ? groupHeaderKind : headerKind,
          location: [previousCol, row],
          bounds,
          group: (_a2 = mappedColumns[previousCol].group) != null ? _a2 : "",
          isEdge,
          shiftKey,
          ctrlKey,
          metaKey,
          isTouch,
          localEventX: posX - bounds.x,
          localEventY: posY - bounds.y,
          button,
          scrollEdge
        };
      } else {
        result = {
          kind: enableGroups && row === -2 ? groupHeaderKind : headerKind,
          group: (_b2 = mappedColumns[col].group) != null ? _b2 : "",
          location: [col, row],
          bounds,
          isEdge,
          shiftKey,
          ctrlKey,
          metaKey,
          isTouch,
          localEventX: posX - bounds.x,
          localEventY: posY - bounds.y,
          button,
          scrollEdge
        };
      }
    } else {
      const bounds = getBoundsForItem(canvas, col, row);
      assert(bounds !== void 0);
      const isEdge = bounds !== void 0 && bounds.x + bounds.width - posX < edgeDetectionBuffer;
      const isFillHandle = fillHandle && bounds !== void 0 && bounds.x + bounds.width - posX < 6 && bounds.y + bounds.height - posY < 6;
      result = {
        kind: "cell",
        location: [col, row],
        bounds,
        isEdge,
        shiftKey,
        ctrlKey,
        isFillHandle,
        metaKey,
        isTouch,
        localEventX: posX - bounds.x,
        localEventY: posY - bounds.y,
        button,
        scrollEdge
      };
    }
    return result;
  }, [
    mappedColumns,
    cellXOffset,
    width,
    translateX,
    height,
    enableGroups,
    headerHeight,
    groupHeaderHeight,
    rows,
    rowHeight,
    cellYOffset,
    translateY,
    trailingRowType,
    getBoundsForItem,
    fillHandle
  ]);
  function isSameItem(item, other) {
    if (item === other)
      return true;
    return (item == null ? void 0 : item.kind) === (other == null ? void 0 : other.kind) && (item == null ? void 0 : item.location[0]) === (other == null ? void 0 : other.location[0]) && (item == null ? void 0 : item.location[1]) === (other == null ? void 0 : other.location[1]);
  }
  const [hoveredItem] = hoveredItemInfo != null ? hoveredItemInfo : [];
  const enqueueRef = React9.useRef((_item) => {
  });
  const hoverInfoRef = React9.useRef(hoveredItemInfo);
  hoverInfoRef.current = hoveredItemInfo;
  const [bufferA, bufferB] = React9.useMemo(() => {
    const a = document.createElement("canvas");
    const b = document.createElement("canvas");
    a.style["display"] = "none";
    a.style["opacity"] = "0";
    a.style["position"] = "fixed";
    b.style["display"] = "none";
    b.style["opacity"] = "0";
    b.style["position"] = "fixed";
    return [a, b];
  }, []);
  React9.useLayoutEffect(() => {
    document.documentElement.append(bufferA);
    document.documentElement.append(bufferB);
    return () => {
      bufferA.remove();
      bufferB.remove();
    };
  }, [bufferA, bufferB]);
  const lastArgsRef = React9.useRef();
  const draw = React9.useCallback(() => {
    var _a2, _b2;
    const canvas = ref.current;
    const overlay = overlayRef.current;
    if (canvas === null || overlay === null)
      return;
    const last = lastArgsRef.current;
    const current = {
      canvas,
      bufferA,
      bufferB,
      headerCanvas: overlay,
      width,
      height,
      cellXOffset,
      cellYOffset,
      translateX: Math.round(translateX),
      translateY: Math.round(translateY),
      mappedColumns,
      enableGroups,
      freezeColumns,
      dragAndDropState,
      theme,
      headerHeight,
      groupHeaderHeight,
      disabledRows: disabledRows != null ? disabledRows : CompactSelection.empty(),
      rowHeight,
      verticalBorder,
      isResizing,
      isFocused,
      selection,
      fillHandle,
      lastRowSticky: trailingRowType,
      rows,
      drawFocus: drawFocusRing2,
      getCellContent,
      getGroupDetails: getGroupDetails != null ? getGroupDetails : (name) => ({ name }),
      getRowThemeOverride,
      drawCustomCell,
      drawHeaderCallback,
      prelightCells,
      highlightRegions,
      imageLoader,
      lastBlitData,
      damage: damageRegion.current,
      hoverValues: hoverValues.current,
      hoverInfo: hoverInfoRef.current,
      spriteManager,
      scrolling,
      hyperWrapping: (_a2 = experimental == null ? void 0 : experimental.hyperWrapping) != null ? _a2 : false,
      touchMode: lastWasTouch,
      enqueue: enqueueRef.current,
      renderStrategy: (_b2 = experimental == null ? void 0 : experimental.renderStrategy) != null ? _b2 : browserIsSafari.value ? "double-buffer" : "single-buffer",
      getCellRenderer
    };
    if (current.damage === void 0) {
      lastArgsRef.current = current;
      drawGrid(current, last);
    } else {
      drawGrid(current, void 0);
    }
  }, [
    bufferA,
    bufferB,
    width,
    height,
    cellXOffset,
    cellYOffset,
    translateX,
    translateY,
    mappedColumns,
    enableGroups,
    freezeColumns,
    dragAndDropState,
    theme,
    headerHeight,
    groupHeaderHeight,
    disabledRows,
    rowHeight,
    verticalBorder,
    isResizing,
    isFocused,
    selection,
    fillHandle,
    trailingRowType,
    rows,
    drawFocusRing2,
    getCellContent,
    getGroupDetails,
    getRowThemeOverride,
    drawCustomCell,
    drawHeaderCallback,
    prelightCells,
    highlightRegions,
    imageLoader,
    spriteManager,
    scrolling,
    experimental == null ? void 0 : experimental.hyperWrapping,
    experimental == null ? void 0 : experimental.renderStrategy,
    lastWasTouch,
    getCellRenderer
  ]);
  const lastDrawRef = React9.useRef(draw);
  React9.useLayoutEffect(() => {
    draw();
    lastDrawRef.current = draw;
  }, [draw]);
  React9.useLayoutEffect(() => {
    const fn = async () => {
      var _a2;
      if (((_a2 = document == null ? void 0 : document.fonts) == null ? void 0 : _a2.ready) === void 0)
        return;
      await document.fonts.ready;
      lastArgsRef.current = void 0;
      lastDrawRef.current();
    };
    void fn();
  }, []);
  const damageInternal = React9.useCallback((locations) => {
    damageRegion.current = locations;
    lastDrawRef.current();
    damageRegion.current = void 0;
  }, []);
  const enqueue = useAnimationQueue(damageInternal);
  enqueueRef.current = enqueue;
  const damage = React9.useCallback((cells) => {
    damageInternal(cells.map((x) => x.cell));
  }, [damageInternal]);
  imageLoader.setCallback(damageInternal);
  const [overFill, setOverFill] = React9.useState(false);
  const [hCol, hRow] = hoveredItem != null ? hoveredItem : [];
  const headerHovered = hCol !== void 0 && hRow === -1;
  const groupHeaderHovered = hCol !== void 0 && hRow === -2;
  let clickableInnerCellHovered = false;
  let editableBoolHovered = false;
  let cursorOverride;
  if (hCol !== void 0 && hRow !== void 0 && hRow > -1) {
    const cell = getCellContent([hCol, hRow], true);
    clickableInnerCellHovered = cell.kind === InnerGridCellKind.NewRow || cell.kind === InnerGridCellKind.Marker && cell.markerKind !== "number";
    editableBoolHovered = cell.kind === GridCellKind.Boolean && booleanCellIsEditable(cell);
    cursorOverride = cell.cursor;
  }
  const canDrag = hoveredOnEdge != null ? hoveredOnEdge : false;
  const cursor = isDragging ? "grabbing" : canDrag || isResizing ? "col-resize" : overFill || isFilling ? "crosshair" : cursorOverride !== void 0 ? cursorOverride : headerHovered || clickableInnerCellHovered || editableBoolHovered || groupHeaderHovered ? "pointer" : "default";
  const style = React9.useMemo(() => ({
    contain: "strict",
    display: "block",
    cursor
  }), [cursor]);
  const lastSetCursor = React9.useRef("default");
  const target = eventTargetRef == null ? void 0 : eventTargetRef.current;
  if (target !== null && target !== void 0 && lastSetCursor.current !== style.cursor) {
    target.style.cursor = lastSetCursor.current = style.cursor;
  }
  const groupHeaderActionForEvent = React9.useCallback((group, bounds, localEventX, localEventY) => {
    if (getGroupDetails === void 0)
      return void 0;
    const groupDesc = getGroupDetails(group);
    if (groupDesc.actions !== void 0) {
      const boxes = getActionBoundsForGroup(bounds, groupDesc.actions);
      for (const [i, box] of boxes.entries()) {
        if (pointInRect(box, localEventX + bounds.x, localEventY + box.y)) {
          return groupDesc.actions[i];
        }
      }
    }
    return void 0;
  }, [getGroupDetails]);
  const isOverHeaderMenu = React9.useCallback((canvas, col, clientX, clientY) => {
    const header = columns[col];
    if (!isDragging && !isResizing && header.hasMenu === true && !(hoveredOnEdge != null ? hoveredOnEdge : false)) {
      const headerBounds = getBoundsForItem(canvas, col, -1);
      assert(headerBounds !== void 0);
      const menuBounds = getHeaderMenuBounds(headerBounds.x, headerBounds.y, headerBounds.width, headerBounds.height);
      if (clientX > menuBounds.x && clientX < menuBounds.x + menuBounds.width && clientY > menuBounds.y && clientY < menuBounds.y + menuBounds.height) {
        return headerBounds;
      }
    }
    return void 0;
  }, [columns, getBoundsForItem, hoveredOnEdge, isDragging, isResizing]);
  const downTime = React9.useRef(0);
  const downPosition = React9.useRef();
  const onMouseDownImpl = React9.useCallback((ev) => {
    const canvas = ref.current;
    const eventTarget = eventTargetRef == null ? void 0 : eventTargetRef.current;
    if (canvas === null || ev.target !== canvas && ev.target !== eventTarget)
      return;
    let clientX;
    let clientY;
    if (ev instanceof MouseEvent) {
      clientX = ev.clientX;
      clientY = ev.clientY;
    } else {
      clientX = ev.touches[0].clientX;
      clientY = ev.touches[0].clientY;
    }
    if (ev.target === eventTarget && eventTarget !== null) {
      const bounds = eventTarget.getBoundingClientRect();
      if (clientX > bounds.left + eventTarget.clientWidth)
        return;
      if (clientY > bounds.top + eventTarget.clientHeight)
        return;
    }
    const args = getMouseArgsForPosition(canvas, clientX, clientY, ev);
    downPosition.current = args.location;
    if (args.isTouch) {
      downTime.current = Date.now();
    }
    if (lastWasTouchRef.current !== args.isTouch) {
      setLastWasTouch(args.isTouch);
    }
    if (args.kind === headerKind && isOverHeaderMenu(canvas, args.location[0], clientX, clientY) !== void 0) {
      return;
    } else if (args.kind === groupHeaderKind) {
      const action = groupHeaderActionForEvent(args.group, args.bounds, args.localEventX, args.localEventY);
      if (action !== void 0) {
        return;
      }
    }
    onMouseDown == null ? void 0 : onMouseDown(args);
    if (!args.isTouch && isDraggable !== true && isDraggable !== args.kind) {
      ev.preventDefault();
    }
  }, [eventTargetRef, isDraggable, getMouseArgsForPosition, groupHeaderActionForEvent, isOverHeaderMenu, onMouseDown]);
  useEventListener("touchstart", onMouseDownImpl, window, false);
  useEventListener("mousedown", onMouseDownImpl, window, false);
  const onMouseUpImpl = React9.useCallback((ev) => {
    var _a2, _b2;
    const canvas = ref.current;
    if (onMouseUp === void 0 || canvas === null)
      return;
    const eventTarget = eventTargetRef == null ? void 0 : eventTargetRef.current;
    const isOutside = ev.target !== canvas && ev.target !== eventTarget;
    let clientX;
    let clientY;
    if (ev instanceof MouseEvent) {
      clientX = ev.clientX;
      clientY = ev.clientY;
      if (ev.pointerType === "touch") {
        return;
      }
    } else {
      clientX = ev.changedTouches[0].clientX;
      clientY = ev.changedTouches[0].clientY;
    }
    let args = getMouseArgsForPosition(canvas, clientX, clientY, ev);
    if (args.isTouch && downTime.current !== 0 && Date.now() - downTime.current > 500) {
      args = {
        ...args,
        isLongTouch: true
      };
    }
    if (lastWasTouchRef.current !== args.isTouch) {
      setLastWasTouch(args.isTouch);
    }
    if (!isOutside && ev.cancelable) {
      ev.preventDefault();
    }
    if (args.kind === headerKind && isOverHeaderMenu(canvas, args.location[0], clientX, clientY)) {
      const [col] = args.location;
      const headerBounds = isOverHeaderMenu(canvas, col, clientX, clientY);
      if (headerBounds !== void 0) {
        if (args.button === 0 && ((_a2 = downPosition.current) == null ? void 0 : _a2[0]) === col && ((_b2 = downPosition.current) == null ? void 0 : _b2[1]) === -1) {
          onHeaderMenuClick == null ? void 0 : onHeaderMenuClick(col, headerBounds);
        } else {
          onMouseUp(args, true);
        }
        return;
      }
    } else if (args.kind === groupHeaderKind) {
      const action = groupHeaderActionForEvent(args.group, args.bounds, args.localEventX, args.localEventY);
      if (action !== void 0) {
        if (args.button === 0) {
          action.onClick(args);
        }
        return;
      }
    }
    onMouseUp(args, isOutside);
  }, [
    onMouseUp,
    eventTargetRef,
    getMouseArgsForPosition,
    isOverHeaderMenu,
    onHeaderMenuClick,
    groupHeaderActionForEvent
  ]);
  useEventListener("click", onMouseUpImpl, window, false);
  useEventListener("touchend", onMouseUpImpl, window, false);
  const onContextMenuImpl = React9.useCallback((ev) => {
    const canvas = ref.current;
    if (canvas === null || onContextMenu === void 0)
      return;
    const args = getMouseArgsForPosition(canvas, ev.clientX, ev.clientY, ev);
    onContextMenu(args, () => {
      if (ev.cancelable)
        ev.preventDefault();
    });
  }, [getMouseArgsForPosition, onContextMenu]);
  useEventListener("contextmenu", onContextMenuImpl, (_c = eventTargetRef == null ? void 0 : eventTargetRef.current) != null ? _c : null, false);
  const onAnimationFrame = React9.useCallback((values) => {
    damageRegion.current = values.map((x) => x.item);
    hoverValues.current = values;
    lastDrawRef.current();
    damageRegion.current = void 0;
  }, []);
  const animManagerValue = React9.useMemo(() => new AnimationManager(onAnimationFrame), [onAnimationFrame]);
  const animationManager = React9.useRef(animManagerValue);
  animationManager.current = animManagerValue;
  React9.useLayoutEffect(() => {
    const am = animationManager.current;
    if (hoveredItem === void 0 || hoveredItem[1] < 0) {
      am.setHovered(hoveredItem);
      return;
    }
    const cell = getCellContent(hoveredItem);
    const r = getCellRenderer(cell);
    am.setHovered(r === void 0 && cell.kind === GridCellKind.Custom || (r == null ? void 0 : r.needsHover) === true ? hoveredItem : void 0);
  }, [getCellContent, getCellRenderer, hoveredItem]);
  const hoveredRef = React9.useRef();
  const onMouseMoveImpl = React9.useCallback((ev) => {
    var _a2;
    const canvas = ref.current;
    if (canvas === null)
      return;
    const args = getMouseArgsForPosition(canvas, ev.clientX, ev.clientY, ev);
    if (!isSameItem(args, hoveredRef.current)) {
      onItemHovered == null ? void 0 : onItemHovered(args);
      setHoveredItemInfo(args.kind === outOfBoundsKind ? void 0 : [args.location, [args.localEventX, args.localEventY]]);
      hoveredRef.current = args;
    } else if (args.kind === "cell" || args.kind === headerKind || args.kind === groupHeaderKind) {
      const newInfo = [args.location, [args.localEventX, args.localEventY]];
      setHoveredItemInfo(newInfo);
      hoverInfoRef.current = newInfo;
      if (args.kind === "cell") {
        const toCheck = getCellContent(args.location);
        if (toCheck.kind === GridCellKind.Custom || ((_a2 = getCellRenderer(toCheck)) == null ? void 0 : _a2.needsHoverPosition) === true) {
          damageInternal([args.location]);
        }
      } else if (args.kind === groupHeaderKind) {
        damageInternal([args.location]);
      }
    }
    const notRowMarkerCol = args.location[0] >= (firstColAccessible ? 0 : 1);
    setHoveredOnEdge(args.kind === headerKind && args.isEdge && notRowMarkerCol && allowResize === true);
    if (fillHandle && selection.current !== void 0) {
      const [col, row] = selection.current.cell;
      const sb = getBoundsForItem(canvas, col, row);
      const x = ev.clientX;
      const y = ev.clientY;
      assert(sb !== void 0);
      setOverFill(x >= sb.x + sb.width - 6 && x <= sb.x + sb.width && y >= sb.y + sb.height - 6 && y <= sb.y + sb.height);
    } else {
      setOverFill(false);
    }
    onMouseMoveRaw == null ? void 0 : onMouseMoveRaw(ev);
    onMouseMove(args);
  }, [
    getMouseArgsForPosition,
    allowResize,
    fillHandle,
    selection,
    onMouseMoveRaw,
    onMouseMove,
    onItemHovered,
    getCellContent,
    getCellRenderer,
    damageInternal,
    getBoundsForItem,
    firstColAccessible
  ]);
  useEventListener("mousemove", onMouseMoveImpl, window, true);
  const onKeyDownImpl = React9.useCallback((event) => {
    const canvas = ref.current;
    if (canvas === null)
      return;
    let bounds;
    if (selection.current !== void 0) {
      bounds = getBoundsForItem(canvas, selection.current.cell[0], selection.current.cell[1]);
    }
    onKeyDown == null ? void 0 : onKeyDown({
      bounds,
      stopPropagation: () => event.stopPropagation(),
      preventDefault: () => event.preventDefault(),
      cancel: () => void 0,
      ctrlKey: event.ctrlKey,
      metaKey: event.metaKey,
      shiftKey: event.shiftKey,
      altKey: event.altKey,
      key: event.key,
      keyCode: event.keyCode,
      rawEvent: event
    });
  }, [onKeyDown, selection, getBoundsForItem]);
  const onKeyUpImpl = React9.useCallback((event) => {
    const canvas = ref.current;
    if (canvas === null)
      return;
    let bounds;
    if (selection.current !== void 0) {
      bounds = getBoundsForItem(canvas, selection.current.cell[0], selection.current.cell[1]);
    }
    onKeyUp == null ? void 0 : onKeyUp({
      bounds,
      stopPropagation: () => event.stopPropagation(),
      preventDefault: () => event.preventDefault(),
      cancel: () => void 0,
      ctrlKey: event.ctrlKey,
      metaKey: event.metaKey,
      shiftKey: event.shiftKey,
      altKey: event.altKey,
      key: event.key,
      keyCode: event.keyCode,
      rawEvent: event
    });
  }, [onKeyUp, selection, getBoundsForItem]);
  const refImpl = React9.useCallback((instance) => {
    ref.current = instance;
    if (canvasRef !== void 0) {
      canvasRef.current = instance;
    }
  }, [canvasRef]);
  const onDragStartImpl = React9.useCallback((event) => {
    const canvas = ref.current;
    if (canvas === null || isDraggable === false || isResizing) {
      event.preventDefault();
      return;
    }
    let dragMime;
    let dragData;
    const args = getMouseArgsForPosition(canvas, event.clientX, event.clientY);
    if (isDraggable !== true && args.kind !== isDraggable) {
      event.preventDefault();
      return;
    }
    const setData = (mime, payload) => {
      dragMime = mime;
      dragData = payload;
    };
    let dragImage;
    let dragImageX;
    let dragImageY;
    const setDragImage = (image, x, y) => {
      dragImage = image;
      dragImageX = x;
      dragImageY = y;
    };
    let prevented = false;
    onDragStart == null ? void 0 : onDragStart({
      ...args,
      setData,
      setDragImage,
      preventDefault: () => prevented = true,
      defaultPrevented: () => prevented
    });
    if (!prevented && dragMime !== void 0 && dragData !== void 0 && event.dataTransfer !== null) {
      event.dataTransfer.setData(dragMime, dragData);
      event.dataTransfer.effectAllowed = "copyLink";
      if (dragImage !== void 0 && dragImageX !== void 0 && dragImageY !== void 0) {
        event.dataTransfer.setDragImage(dragImage, dragImageX, dragImageY);
      } else {
        const [col, row] = args.location;
        if (row !== void 0) {
          const offscreen = document.createElement("canvas");
          const boundsForDragTarget = getBoundsForItem(canvas, col, row);
          assert(boundsForDragTarget !== void 0);
          offscreen.width = boundsForDragTarget.width;
          offscreen.height = boundsForDragTarget.height;
          const ctx = offscreen.getContext("2d");
          if (ctx !== null) {
            ctx.textBaseline = "middle";
            if (row === -1) {
              ctx.font = `${theme.headerFontStyle} ${theme.fontFamily}`;
              ctx.fillStyle = theme.bgHeader;
              ctx.fillRect(0, 0, offscreen.width, offscreen.height);
              drawHeader(ctx, 0, 0, boundsForDragTarget.width, boundsForDragTarget.height, mappedColumns[col], false, theme, false, false, 0, spriteManager, drawHeaderCallback, false);
            } else {
              ctx.font = `${theme.baseFontStyle} ${theme.fontFamily}`;
              ctx.fillStyle = theme.bgCell;
              ctx.fillRect(0, 0, offscreen.width, offscreen.height);
              drawCell(ctx, row, getCellContent([col, row]), 0, 0, 0, boundsForDragTarget.width, boundsForDragTarget.height, false, theme, drawCustomCell, imageLoader, spriteManager, 1, void 0, false, 0, void 0, void 0, getCellRenderer);
            }
          }
          offscreen.style.left = "-100%";
          offscreen.style.position = "absolute";
          document.body.append(offscreen);
          event.dataTransfer.setDragImage(offscreen, boundsForDragTarget.width / 2, boundsForDragTarget.height / 2);
          window.setTimeout(() => {
            offscreen.remove();
          }, 0);
        }
      }
    } else {
      event.preventDefault();
    }
  }, [
    isDraggable,
    isResizing,
    getMouseArgsForPosition,
    onDragStart,
    getBoundsForItem,
    theme,
    mappedColumns,
    spriteManager,
    drawHeaderCallback,
    getCellContent,
    drawCustomCell,
    imageLoader,
    getCellRenderer
  ]);
  useEventListener("dragstart", onDragStartImpl, (_d = eventTargetRef == null ? void 0 : eventTargetRef.current) != null ? _d : null, false, false);
  const activeDropTarget = React9.useRef();
  const onDragOverImpl = React9.useCallback((event) => {
    var _a2;
    const canvas = ref.current;
    if (onDrop !== void 0) {
      event.preventDefault();
    }
    if (canvas === null || onDragOverCell === void 0) {
      return;
    }
    const args = getMouseArgsForPosition(canvas, event.clientX, event.clientY);
    const [rawCol, row] = args.location;
    const col = rawCol - (firstColAccessible ? 0 : 1);
    const [activeCol, activeRow] = (_a2 = activeDropTarget.current) != null ? _a2 : [];
    if (activeCol !== col || activeRow !== row) {
      activeDropTarget.current = [col, row];
      onDragOverCell([col, row], event.dataTransfer);
    }
  }, [firstColAccessible, getMouseArgsForPosition, onDragOverCell, onDrop]);
  useEventListener("dragover", onDragOverImpl, (_e = eventTargetRef == null ? void 0 : eventTargetRef.current) != null ? _e : null, false, false);
  const onDragEndImpl = React9.useCallback(() => {
    activeDropTarget.current = void 0;
    onDragEnd == null ? void 0 : onDragEnd();
  }, [onDragEnd]);
  useEventListener("dragend", onDragEndImpl, (_f = eventTargetRef == null ? void 0 : eventTargetRef.current) != null ? _f : null, false, false);
  const onDropImpl = React9.useCallback((event) => {
    const canvas = ref.current;
    if (canvas === null || onDrop === void 0) {
      return;
    }
    event.preventDefault();
    const args = getMouseArgsForPosition(canvas, event.clientX, event.clientY);
    const [rawCol, row] = args.location;
    const col = rawCol - (firstColAccessible ? 0 : 1);
    onDrop([col, row], event.dataTransfer);
  }, [firstColAccessible, getMouseArgsForPosition, onDrop]);
  useEventListener("drop", onDropImpl, (_g = eventTargetRef == null ? void 0 : eventTargetRef.current) != null ? _g : null, false, false);
  const onDragLeaveImpl = React9.useCallback(() => {
    onDragLeave == null ? void 0 : onDragLeave();
  }, [onDragLeave]);
  useEventListener("dragleave", onDragLeaveImpl, (_h = eventTargetRef == null ? void 0 : eventTargetRef.current) != null ? _h : null, false, false);
  const selectionRef = React9.useRef(selection);
  selectionRef.current = selection;
  const focusRef = React9.useRef(null);
  const focusElement = React9.useCallback((el) => {
    var _a2;
    if (ref.current === null || !ref.current.contains(document.activeElement))
      return;
    if (el === null && selectionRef.current.current !== void 0) {
      (_a2 = canvasRef == null ? void 0 : canvasRef.current) == null ? void 0 : _a2.focus({
        preventScroll: true
      });
    } else if (el !== null) {
      el.focus({
        preventScroll: true
      });
    }
    focusRef.current = el;
  }, [canvasRef]);
  React9.useImperativeHandle(forwardedRef, () => ({
    focus: () => {
      var _a2;
      const el = focusRef.current;
      if (el === null || !document.contains(el)) {
        (_a2 = canvasRef == null ? void 0 : canvasRef.current) == null ? void 0 : _a2.focus({
          preventScroll: true
        });
      } else {
        el.focus({
          preventScroll: true
        });
      }
    },
    getBounds: (col, row) => {
      if (canvasRef === void 0 || canvasRef.current === null) {
        return void 0;
      }
      return getBoundsForItem(canvasRef.current, col, row != null ? row : -1);
    },
    damage
  }), [canvasRef, damage, getBoundsForItem]);
  const lastFocusedSubdomNode = React9.useRef();
  const accessibilityTree = useDebouncedMemo(() => {
    var _a2, _b2, _c2, _d2;
    if (width < 50)
      return null;
    let effectiveCols = getEffectiveColumns(mappedColumns, cellXOffset, width, dragAndDropState, translateX);
    const colOffset = firstColAccessible ? 0 : -1;
    if (!firstColAccessible && ((_a2 = effectiveCols[0]) == null ? void 0 : _a2.sourceIndex) === 0) {
      effectiveCols = effectiveCols.slice(1);
    }
    const [fCol, fRow] = (_c2 = (_b2 = selection.current) == null ? void 0 : _b2.cell) != null ? _c2 : [];
    const range2 = (_d2 = selection.current) == null ? void 0 : _d2.range;
    const visibleCols = effectiveCols.map((c) => c.sourceIndex);
    const visibleRows = (0, import_range.default)(cellYOffset, Math.min(rows, cellYOffset + accessibilityHeight));
    if (fCol !== void 0 && fRow !== void 0 && !(visibleCols.includes(fCol) && visibleRows.includes(fRow))) {
      focusElement(null);
    }
    return /* @__PURE__ */ React9.createElement("table", {
      key: "access-tree",
      role: "grid",
      "aria-rowcount": rows + 1,
      "aria-multiselectable": "true",
      "aria-colcount": mappedColumns.length + colOffset
    }, /* @__PURE__ */ React9.createElement("thead", {
      role: "rowgroup"
    }, /* @__PURE__ */ React9.createElement("tr", {
      role: "row",
      "aria-rowindex": 1
    }, effectiveCols.map((c) => /* @__PURE__ */ React9.createElement("th", {
      role: "columnheader",
      "aria-selected": selection.columns.hasIndex(c.sourceIndex),
      "aria-colindex": c.sourceIndex + 1 + colOffset,
      tabIndex: -1,
      onFocus: (e) => {
        if (e.target === focusRef.current)
          return;
        return onCellFocused == null ? void 0 : onCellFocused([c.sourceIndex, -1]);
      },
      key: c.sourceIndex
    }, c.title)))), /* @__PURE__ */ React9.createElement("tbody", {
      role: "rowgroup"
    }, visibleRows.map((row) => /* @__PURE__ */ React9.createElement("tr", {
      role: "row",
      "aria-selected": selection.rows.hasIndex(row),
      key: row,
      "aria-rowindex": row + 2
    }, effectiveCols.map((c) => {
      const col = c.sourceIndex;
      const key = `${col},${row}`;
      const focused = fCol === col && fRow === row;
      const selected = range2 !== void 0 && col >= range2.x && col < range2.x + range2.width && row >= range2.y && row < range2.y + range2.height;
      const id = `glide-cell-${col}-${row}`;
      const cellContent = getCellContent([col, row], true);
      return /* @__PURE__ */ React9.createElement("td", {
        key,
        role: "gridcell",
        "aria-colindex": col + 1 + colOffset,
        "aria-selected": selected,
        "aria-readonly": isInnerOnlyCell(cellContent) || !isReadWriteCell(cellContent),
        id,
        "data-testid": id,
        onClick: () => {
          const canvas = canvasRef == null ? void 0 : canvasRef.current;
          if (canvas === null || canvas === void 0)
            return;
          return onKeyDown == null ? void 0 : onKeyDown({
            bounds: getBoundsForItem(canvas, col, row),
            cancel: () => void 0,
            preventDefault: () => void 0,
            stopPropagation: () => void 0,
            ctrlKey: false,
            key: "Enter",
            keyCode: 13,
            metaKey: false,
            shiftKey: false,
            altKey: false,
            rawEvent: void 0
          });
        },
        onFocusCapture: (e) => {
          var _a3, _b3;
          if (e.target === focusRef.current || ((_a3 = lastFocusedSubdomNode.current) == null ? void 0 : _a3[0]) === col && ((_b3 = lastFocusedSubdomNode.current) == null ? void 0 : _b3[1]) === row)
            return;
          lastFocusedSubdomNode.current = [col, row];
          return onCellFocused == null ? void 0 : onCellFocused([col, row]);
        },
        ref: focused ? focusElement : void 0,
        tabIndex: -1
      }, getRowData(cellContent, getCellRenderer));
    })))));
  }, [
    width,
    mappedColumns,
    cellXOffset,
    dragAndDropState,
    translateX,
    rows,
    cellYOffset,
    accessibilityHeight,
    selection,
    focusElement,
    getCellContent,
    canvasRef,
    onKeyDown,
    getBoundsForItem,
    onCellFocused
  ], 200);
  const stickyX = fixedShadowX ? getStickyWidth(mappedColumns, dragAndDropState) : 0;
  const opacityX = freezeColumns === 0 || !fixedShadowX ? 0 : cellXOffset > freezeColumns ? 1 : (0, import_clamp2.default)(-translateX / 100, 0, 1);
  const absoluteOffsetY = -cellYOffset * 32 + translateY;
  const opacityY = !fixedShadowY ? 0 : (0, import_clamp2.default)(-absoluteOffsetY / 100, 0, 1);
  const stickyShadow = React9.useMemo(() => {
    if (!opacityX && !opacityY) {
      return null;
    }
    const styleX = {
      position: "absolute",
      top: 0,
      left: stickyX,
      width: width - stickyX,
      height,
      opacity: opacityX,
      pointerEvents: "none",
      transition: !smoothScrollX ? "opacity 0.2s" : void 0,
      boxShadow: "inset 13px 0 10px -13px rgba(0, 0, 0, 0.2)"
    };
    const styleY = {
      position: "absolute",
      top: totalHeaderHeight,
      left: 0,
      width,
      height,
      opacity: opacityY,
      pointerEvents: "none",
      transition: !smoothScrollY ? "opacity 0.2s" : void 0,
      boxShadow: "inset 0 13px 10px -13px rgba(0, 0, 0, 0.2)"
    };
    return /* @__PURE__ */ React9.createElement(React9.Fragment, null, opacityX > 0 && /* @__PURE__ */ React9.createElement("div", {
      id: "shadow-x",
      style: styleX
    }), opacityY > 0 && /* @__PURE__ */ React9.createElement("div", {
      id: "shadow-y",
      style: styleY
    }));
  }, [opacityX, opacityY, stickyX, width, smoothScrollX, totalHeaderHeight, height, smoothScrollY]);
  const overlayStyle = React9.useMemo(() => ({
    position: "absolute",
    top: 0,
    left: 0
  }), []);
  return /* @__PURE__ */ React9.createElement(React9.Fragment, null, /* @__PURE__ */ React9.createElement("canvas", {
    "data-testid": "data-grid-canvas",
    tabIndex: 0,
    onKeyDown: onKeyDownImpl,
    onKeyUp: onKeyUpImpl,
    onFocus: onCanvasFocused,
    onBlur: onCanvasBlur,
    ref: refImpl,
    style
  }, accessibilityTree), /* @__PURE__ */ React9.createElement("canvas", {
    ref: overlayRef,
    style: overlayStyle
  }), stickyShadow);
};
var data_grid_default = React9.memo(React9.forwardRef(DataGrid));

// src/data-grid-dnd/data-grid-dnd.tsx
function offsetColumnSize(column, width, min, max) {
  var _a;
  return (0, import_clamp3.default)(Math.round(width - ((_a = column.growOffset) != null ? _a : 0)), Math.ceil(min), Math.floor(max));
}
var DataGridDnd = (p) => {
  var _a;
  const [resizeColStartX, setResizeColStartX] = React10.useState();
  const [resizeCol, setResizeCol] = React10.useState();
  const [dragCol, setDragCol] = React10.useState();
  const [dropCol, setDropCol] = React10.useState();
  const [dragColActive, setDragColActive] = React10.useState(false);
  const [dragStartX, setDragStartX] = React10.useState();
  const [dragRow, setDragRow] = React10.useState();
  const [dropRow, setDropRow] = React10.useState();
  const [dragRowActive, setDragRowActive] = React10.useState(false);
  const [dragStartY, setDragStartY] = React10.useState();
  const {
    onHeaderMenuClick,
    getCellContent,
    onColumnMoved,
    onColumnResize,
    onColumnResizeStart,
    onColumnResizeEnd,
    gridRef,
    maxColumnWidth,
    minColumnWidth,
    onRowMoved,
    lockColumns,
    onMouseDown,
    onMouseUp,
    onItemHovered,
    onDragStart,
    canvasRef
  } = p;
  const canResize = ((_a = onColumnResize != null ? onColumnResize : onColumnResizeEnd) != null ? _a : onColumnResizeStart) !== void 0;
  const { columns, selection } = p;
  const selectedColumns = selection.columns;
  const onItemHoveredImpl = React10.useCallback((args) => {
    const [col, row] = args.location;
    if (dragCol !== void 0 && dropCol !== col && col >= lockColumns) {
      setDragColActive(true);
      setDropCol(col);
    } else if (dragRow !== void 0 && row !== void 0) {
      setDragRowActive(true);
      setDropRow(Math.max(0, row));
    } else {
      onItemHovered == null ? void 0 : onItemHovered(args);
    }
  }, [dragCol, dragRow, dropCol, onItemHovered, lockColumns]);
  const canDragCol = onColumnMoved !== void 0;
  const onMouseDownImpl = React10.useCallback((args) => {
    var _a2, _b;
    if (args.button === 0) {
      const [col, row] = args.location;
      if (args.kind === "out-of-bounds" && args.isEdge && canResize) {
        const bounds = (_a2 = gridRef == null ? void 0 : gridRef.current) == null ? void 0 : _a2.getBounds(columns.length - 1, -1);
        if (bounds !== void 0) {
          setResizeColStartX(bounds.x);
          setResizeCol(columns.length - 1);
        }
      } else if (args.kind === "header" && col >= lockColumns) {
        const canvas = canvasRef == null ? void 0 : canvasRef.current;
        if (args.isEdge && canResize && canvas) {
          setResizeColStartX(args.bounds.x);
          setResizeCol(col);
          const rect = canvas.getBoundingClientRect();
          const scale = rect.width / canvas.offsetWidth;
          const width = args.bounds.width / scale;
          onColumnResizeStart == null ? void 0 : onColumnResizeStart(columns[col], width, col, width + ((_b = columns[col].growOffset) != null ? _b : 0));
        } else if (args.kind === "header" && canDragCol) {
          setDragStartX(args.bounds.x);
          setDragCol(col);
        }
      } else if (args.kind === "cell" && lockColumns > 0 && col === 0 && row !== void 0 && onRowMoved !== void 0) {
        setDragStartY(args.bounds.y);
        setDragRow(row);
      }
    }
    onMouseDown == null ? void 0 : onMouseDown(args);
  }, [onMouseDown, canResize, lockColumns, onRowMoved, gridRef, columns, canDragCol, onColumnResizeStart, canvasRef]);
  const onHeaderMenuClickMangled = React10.useCallback((col, screenPosition) => {
    if (dragColActive || dragRowActive)
      return;
    onHeaderMenuClick == null ? void 0 : onHeaderMenuClick(col, screenPosition);
  }, [dragColActive, dragRowActive, onHeaderMenuClick]);
  const lastResizeWidthRef = React10.useRef(-1);
  const clearAll = React10.useCallback(() => {
    lastResizeWidthRef.current = -1;
    setDragRow(void 0);
    setDropRow(void 0);
    setDragStartY(void 0);
    setDragRowActive(false);
    setDragCol(void 0);
    setDropCol(void 0);
    setDragStartX(void 0);
    setDragColActive(false);
    setResizeCol(void 0);
    setResizeColStartX(void 0);
  }, []);
  const onMouseUpImpl = React10.useCallback((args, isOutside) => {
    var _a2, _b, _c;
    if (args.button === 0) {
      if (resizeCol !== void 0) {
        if ((selectedColumns == null ? void 0 : selectedColumns.hasIndex(resizeCol)) === true) {
          for (const c of selectedColumns) {
            if (c === resizeCol)
              continue;
            const col = columns[c];
            const newSize = offsetColumnSize(col, lastResizeWidthRef.current, minColumnWidth, maxColumnWidth);
            onColumnResize == null ? void 0 : onColumnResize(col, newSize, c, newSize + ((_a2 = col.growOffset) != null ? _a2 : 0));
          }
        }
        const ns = offsetColumnSize(columns[resizeCol], lastResizeWidthRef.current, minColumnWidth, maxColumnWidth);
        onColumnResizeEnd == null ? void 0 : onColumnResizeEnd(columns[resizeCol], ns, resizeCol, ns + ((_b = columns[resizeCol].growOffset) != null ? _b : 0));
        if (selectedColumns.hasIndex(resizeCol)) {
          for (const c of selectedColumns) {
            if (c === resizeCol)
              continue;
            const col = columns[c];
            const s = offsetColumnSize(col, lastResizeWidthRef.current, minColumnWidth, maxColumnWidth);
            onColumnResizeEnd == null ? void 0 : onColumnResizeEnd(col, s, c, s + ((_c = col.growOffset) != null ? _c : 0));
          }
        }
      }
      clearAll();
      if (dragCol !== void 0 && dropCol !== void 0) {
        onColumnMoved == null ? void 0 : onColumnMoved(dragCol, dropCol);
      }
      if (dragRow !== void 0 && dropRow !== void 0) {
        onRowMoved == null ? void 0 : onRowMoved(dragRow, dropRow);
      }
    }
    onMouseUp == null ? void 0 : onMouseUp(args, isOutside);
  }, [
    onMouseUp,
    resizeCol,
    dragCol,
    dropCol,
    dragRow,
    dropRow,
    selectedColumns,
    onColumnResizeEnd,
    columns,
    minColumnWidth,
    maxColumnWidth,
    onColumnResize,
    onColumnMoved,
    onRowMoved,
    clearAll
  ]);
  const dragOffset = React10.useMemo(() => {
    if (dragCol === void 0 || dropCol === void 0)
      return void 0;
    if (dragCol === dropCol)
      return void 0;
    return {
      src: dragCol,
      dest: dropCol
    };
  }, [dragCol, dropCol]);
  const onMouseMove = React10.useCallback((event) => {
    var _a2, _b;
    const canvas = canvasRef == null ? void 0 : canvasRef.current;
    if (dragCol !== void 0 && dragStartX !== void 0) {
      const diff = Math.abs(event.clientX - dragStartX);
      if (diff > 20) {
        setDragColActive(true);
      }
    } else if (dragRow !== void 0 && dragStartY !== void 0) {
      const diff = Math.abs(event.clientY - dragStartY);
      if (diff > 20) {
        setDragRowActive(true);
      }
    } else if (resizeCol !== void 0 && resizeColStartX !== void 0 && canvas) {
      const rect = canvas.getBoundingClientRect();
      const scale = rect.width / canvas.offsetWidth;
      const newWidth = (event.clientX - resizeColStartX) / scale;
      const column = columns[resizeCol];
      const ns = offsetColumnSize(column, newWidth, minColumnWidth, maxColumnWidth);
      onColumnResize == null ? void 0 : onColumnResize(column, ns, resizeCol, ns + ((_a2 = column.growOffset) != null ? _a2 : 0));
      lastResizeWidthRef.current = newWidth;
      if ((selectedColumns == null ? void 0 : selectedColumns.first()) === resizeCol) {
        for (const c of selectedColumns) {
          if (c === resizeCol)
            continue;
          const col = columns[c];
          const s = offsetColumnSize(col, lastResizeWidthRef.current, minColumnWidth, maxColumnWidth);
          onColumnResize == null ? void 0 : onColumnResize(col, s, c, s + ((_b = col.growOffset) != null ? _b : 0));
        }
      }
    }
  }, [
    dragCol,
    dragStartX,
    dragRow,
    dragStartY,
    resizeCol,
    resizeColStartX,
    columns,
    minColumnWidth,
    maxColumnWidth,
    onColumnResize,
    selectedColumns,
    canvasRef
  ]);
  const getMangledCellContent = React10.useCallback((cell, forceStrict) => {
    if (dragRow === void 0 || dropRow === void 0)
      return getCellContent(cell, forceStrict);
    let [col, row] = cell;
    if (row === dropRow) {
      row = dragRow;
    } else {
      if (row > dropRow)
        row -= 1;
      if (row >= dragRow)
        row += 1;
    }
    return getCellContent([col, row], forceStrict);
  }, [dragRow, dropRow, getCellContent]);
  const onDragStartImpl = React10.useCallback((args) => {
    onDragStart == null ? void 0 : onDragStart(args);
    if (!args.defaultPrevented()) {
      clearAll();
    }
  }, [clearAll, onDragStart]);
  return /* @__PURE__ */ React10.createElement(data_grid_default, {
    accessibilityHeight: p.accessibilityHeight,
    canvasRef: p.canvasRef,
    cellXOffset: p.cellXOffset,
    cellYOffset: p.cellYOffset,
    columns: p.columns,
    disabledRows: p.disabledRows,
    drawCustomCell: p.drawCustomCell,
    drawFocusRing: p.drawFocusRing,
    drawHeader: p.drawHeader,
    enableGroups: p.enableGroups,
    eventTargetRef: p.eventTargetRef,
    experimental: p.experimental,
    fillHandle: p.fillHandle,
    firstColAccessible: p.firstColAccessible,
    fixedShadowX: p.fixedShadowX,
    fixedShadowY: p.fixedShadowY,
    freezeColumns: p.freezeColumns,
    getCellRenderer: p.getCellRenderer,
    getGroupDetails: p.getGroupDetails,
    getRowThemeOverride: p.getRowThemeOverride,
    groupHeaderHeight: p.groupHeaderHeight,
    headerHeight: p.headerHeight,
    headerIcons: p.headerIcons,
    height: p.height,
    highlightRegions: p.highlightRegions,
    imageWindowLoader: p.imageWindowLoader,
    isDraggable: p.isDraggable,
    isFilling: p.isFilling,
    isFocused: p.isFocused,
    onCanvasBlur: p.onCanvasBlur,
    onCanvasFocused: p.onCanvasFocused,
    onCellFocused: p.onCellFocused,
    onContextMenu: p.onContextMenu,
    onDragEnd: p.onDragEnd,
    onDragLeave: p.onDragLeave,
    onDragOverCell: p.onDragOverCell,
    onDrop: p.onDrop,
    onKeyDown: p.onKeyDown,
    onKeyUp: p.onKeyUp,
    onMouseMove: p.onMouseMove,
    prelightCells: p.prelightCells,
    rowHeight: p.rowHeight,
    rows: p.rows,
    selection: p.selection,
    smoothScrollX: p.smoothScrollX,
    smoothScrollY: p.smoothScrollY,
    theme: p.theme,
    trailingRowType: p.trailingRowType,
    translateX: p.translateX,
    translateY: p.translateY,
    verticalBorder: p.verticalBorder,
    width: p.width,
    getCellContent: getMangledCellContent,
    isResizing: resizeCol !== void 0,
    onHeaderMenuClick: onHeaderMenuClickMangled,
    isDragging: dragColActive,
    onItemHovered: onItemHoveredImpl,
    onDragStart: onDragStartImpl,
    onMouseDown: onMouseDownImpl,
    allowResize: canResize,
    onMouseUp: onMouseUpImpl,
    dragAndDropState: dragOffset,
    onMouseMoveRaw: onMouseMove,
    ref: gridRef
  });
};
var data_grid_dnd_default = DataGridDnd;

// src/scrolling-data-grid/infinite-scroller.tsx
init_esm2();
var React11 = __toESM(require("react"), 1);

// src/common/resize-detector.ts
var import_react5 = require("react");
function useResizeDetector(initialSize) {
  const ref = (0, import_react5.useRef)(null);
  const [size, setSize] = (0, import_react5.useState)({
    width: initialSize == null ? void 0 : initialSize[0],
    height: initialSize == null ? void 0 : initialSize[1]
  });
  (0, import_react5.useLayoutEffect)(() => {
    const resizeCallback = (entries) => {
      for (const entry of entries) {
        const { width, height } = entry && entry.contentRect || {};
        setSize((cv) => cv.width === width && cv.height === height ? cv : { width, height });
      }
    };
    const resizeObserver = new window.ResizeObserver(resizeCallback);
    if (ref.current) {
      resizeObserver.observe(ref.current, void 0);
    }
    return () => {
      resizeObserver.disconnect();
    };
  }, [ref.current]);
  return { ref, ...size };
}

// src/scrolling-data-grid/infinite-scroller.tsx
var _exp8 = () => (p) => p.isSafari ? "scroll" : "auto";
var ScrollRegionStyle = /* @__PURE__ */ styled_default("div")({
  name: "ScrollRegionStyle",
  class: "s1jz82f8",
  vars: {
    "s1jz82f8-0": [_exp8()]
  }
});
function eatEvent(e) {
  e.stopPropagation();
}
function useTouchUpDelayed(delay) {
  const [hasTouches, setHasTouches] = React11.useState(false);
  const cbTimer = React11.useRef(0);
  useEventListener("touchstart", React11.useCallback(() => {
    window.clearTimeout(cbTimer.current);
    setHasTouches(true);
  }, []), window, true, false);
  useEventListener("touchend", React11.useCallback((e) => {
    if (e.touches.length === 0) {
      cbTimer.current = window.setTimeout(() => setHasTouches(false), delay);
    }
  }, [delay]), window, true, false);
  return hasTouches;
}
var InfiniteScroller = (p) => {
  var _a, _b, _c, _d;
  const {
    children,
    clientHeight,
    scrollHeight,
    scrollWidth,
    update,
    draggable,
    className,
    preventDiagonalScrolling = false,
    paddingBottom = 0,
    paddingRight = 0,
    rightElement,
    rightElementProps,
    scrollRef,
    scrollToEnd,
    initialSize,
    minimap
  } = p;
  const padders = [];
  const rightElementSticky = (_a = rightElementProps == null ? void 0 : rightElementProps.sticky) != null ? _a : false;
  const rightElementFill = (_b = rightElementProps == null ? void 0 : rightElementProps.fill) != null ? _b : false;
  const offsetY = React11.useRef(0);
  const lastScrollY = React11.useRef(0);
  const scroller = React11.useRef(null);
  const dpr = window.devicePixelRatio;
  React11.useEffect(() => {
    const el = scroller.current;
    if (el === null || scrollToEnd !== true)
      return;
    el.scrollLeft = el.scrollWidth - el.clientWidth;
  }, [scrollToEnd]);
  const lastScrollPosition = React11.useRef({
    scrollLeft: 0,
    scrollTop: 0,
    lockDirection: void 0
  });
  const rightWrapRef = React11.useRef(null);
  const hasTouches = useTouchUpDelayed(200);
  const [isIdle, setIsIdle] = React11.useState(true);
  const idleTimer = React11.useRef(0);
  React11.useEffect(() => {
    if (!isIdle || hasTouches || lastScrollPosition.current.lockDirection === void 0)
      return;
    const el = scroller.current;
    if (el === null)
      return;
    const [lx, ly] = lastScrollPosition.current.lockDirection;
    if (lx !== void 0) {
      el.scrollLeft = lx;
    } else if (ly !== void 0) {
      el.scrollTop = ly;
    }
    lastScrollPosition.current.lockDirection = void 0;
  }, [hasTouches, isIdle]);
  const onScroll = React11.useCallback(() => {
    var _a2, _b2, _c2, _d2;
    const el = scroller.current;
    if (el === null)
      return;
    let scrollTop = el.scrollTop;
    let scrollLeft = el.scrollLeft;
    const lastScrollTop = lastScrollPosition.current.scrollTop;
    const lastScrollLeft = lastScrollPosition.current.scrollLeft;
    const dx = scrollLeft - lastScrollLeft;
    const dy = scrollTop - lastScrollTop;
    if (hasTouches && dx !== 0 && dy !== 0 && (Math.abs(dx) > 3 || Math.abs(dy) > 3) && preventDiagonalScrolling && lastScrollPosition.current.lockDirection === void 0) {
      lastScrollPosition.current.lockDirection = Math.abs(dx) < Math.abs(dy) ? [lastScrollLeft, void 0] : [void 0, lastScrollTop];
    }
    const lock = lastScrollPosition.current.lockDirection;
    scrollLeft = (_a2 = lock == null ? void 0 : lock[0]) != null ? _a2 : scrollLeft;
    scrollTop = (_b2 = lock == null ? void 0 : lock[1]) != null ? _b2 : scrollTop;
    lastScrollPosition.current.scrollLeft = scrollLeft;
    lastScrollPosition.current.scrollTop = scrollTop;
    const newY = scrollTop;
    const delta = lastScrollY.current - newY;
    const scrollableHeight = el.scrollHeight - el.clientHeight;
    lastScrollY.current = newY;
    if (scrollableHeight > 0 && (Math.abs(delta) > 2e3 || newY === 0 || newY === scrollableHeight) && scrollHeight > el.scrollHeight + 5) {
      const prog = newY / scrollableHeight;
      const recomputed = (scrollHeight - el.clientHeight) * prog;
      offsetY.current = recomputed - newY;
    }
    if (lock !== void 0) {
      window.clearTimeout(idleTimer.current);
      setIsIdle(false);
      idleTimer.current = window.setTimeout(() => setIsIdle(true), 200);
    }
    update({
      x: scrollLeft,
      y: newY + offsetY.current,
      width: el.clientWidth - paddingRight,
      height: el.clientHeight - paddingBottom,
      paddingRight: (_d2 = (_c2 = rightWrapRef.current) == null ? void 0 : _c2.clientWidth) != null ? _d2 : 0
    });
  }, [paddingBottom, paddingRight, scrollHeight, update, preventDiagonalScrolling, hasTouches]);
  const onScrollRef = React11.useRef(onScroll);
  onScrollRef.current = onScroll;
  const lastProps = React11.useRef();
  const didFirstScroll = React11.useRef(false);
  React11.useEffect(() => {
    if (didFirstScroll.current)
      onScroll();
    else
      didFirstScroll.current = true;
  }, [onScroll, paddingBottom, paddingRight]);
  const setRefs = React11.useCallback((instance) => {
    scroller.current = instance;
    if (scrollRef !== void 0) {
      scrollRef.current = instance;
    }
  }, [scrollRef]);
  let key = 0;
  let h = 0;
  padders.push(/* @__PURE__ */ React11.createElement("div", {
    key: key++,
    style: {
      width: scrollWidth,
      height: 0
    }
  }));
  while (h < scrollHeight) {
    const toAdd = Math.min(5e6, scrollHeight - h);
    padders.push(/* @__PURE__ */ React11.createElement("div", {
      key: key++,
      style: {
        width: 0,
        height: toAdd
      }
    }));
    h += toAdd;
  }
  const {
    ref,
    width,
    height
  } = useResizeDetector(initialSize);
  if (((_c = lastProps.current) == null ? void 0 : _c.height) !== height || ((_d = lastProps.current) == null ? void 0 : _d.width) !== width) {
    window.setTimeout(() => onScrollRef.current(), 0);
    lastProps.current = {
      width,
      height
    };
  }
  if ((width != null ? width : 0) === 0 || (height != null ? height : 0) === 0)
    return /* @__PURE__ */ React11.createElement("div", {
      ref
    });
  return /* @__PURE__ */ React11.createElement("div", {
    ref
  }, /* @__PURE__ */ React11.createElement(ScrollRegionStyle, {
    isSafari: browserIsSafari.value
  }, minimap, /* @__PURE__ */ React11.createElement("div", {
    className: "dvn-underlay"
  }, children), /* @__PURE__ */ React11.createElement("div", {
    ref: setRefs,
    style: lastProps.current,
    draggable,
    onDragStart: (e) => {
      if (!draggable) {
        e.stopPropagation();
        e.preventDefault();
      }
    },
    className: "dvn-scroller " + (className != null ? className : ""),
    onScroll
  }, /* @__PURE__ */ React11.createElement("div", {
    className: "dvn-scroll-inner" + (rightElement === void 0 ? " hidden" : "")
  }, /* @__PURE__ */ React11.createElement("div", {
    className: "dvn-stack"
  }, padders), rightElement !== void 0 && /* @__PURE__ */ React11.createElement(React11.Fragment, null, !rightElementFill && /* @__PURE__ */ React11.createElement("div", {
    className: "dvn-spacer"
  }), /* @__PURE__ */ React11.createElement("div", {
    ref: rightWrapRef,
    onMouseDown: eatEvent,
    onMouseUp: eatEvent,
    onMouseMove: eatEvent,
    style: {
      height,
      maxHeight: clientHeight - Math.ceil(dpr % 1),
      position: "sticky",
      top: 0,
      paddingLeft: 1,
      marginBottom: -40,
      marginRight: paddingRight,
      flexGrow: rightElementFill ? 1 : void 0,
      right: rightElementSticky ? paddingRight != null ? paddingRight : 0 : void 0,
      pointerEvents: "auto"
    }
  }, rightElement))))));
};

// src/scrolling-data-grid/scrolling-data-grid.tsx
var import_clamp4 = __toESM(require("lodash/clamp.js"), 1);
var MinimapStyle = /* @__PURE__ */ styled_default("div")({
  name: "MinimapStyle",
  class: "m15w2ly5"
});
var GridScroller = (p) => {
  var _a, _b, _c;
  const {
    columns,
    rows,
    rowHeight,
    headerHeight,
    groupHeaderHeight,
    enableGroups,
    freezeColumns,
    experimental,
    clientSize,
    className,
    onVisibleRegionChanged,
    scrollToEnd,
    scrollRef,
    preventDiagonalScrolling,
    rightElement,
    rightElementProps,
    overscrollX,
    overscrollY,
    showMinimap = false,
    initialSize,
    smoothScrollX = false,
    smoothScrollY = false,
    isDraggable
  } = p;
  const {
    paddingRight,
    paddingBottom
  } = experimental != null ? experimental : {};
  const [clientWidth, clientHeight] = clientSize;
  const last = React12.useRef();
  const lastX = React12.useRef();
  const lastY = React12.useRef();
  const lastSize = React12.useRef();
  const width = React12.useMemo(() => {
    let r = Math.max(0, overscrollX != null ? overscrollX : 0);
    for (const c of columns) {
      r += c.width;
    }
    return r;
  }, [columns, overscrollX]);
  let height = enableGroups ? headerHeight + groupHeaderHeight : headerHeight;
  if (typeof rowHeight === "number") {
    height += rows * rowHeight;
  } else {
    for (let r = 0; r < rows; r++) {
      height += rowHeight(r);
    }
  }
  if (overscrollY !== void 0) {
    height += overscrollY;
  }
  const lastArgs = React12.useRef();
  const processArgs = React12.useCallback(() => {
    var _a2, _b2, _c2;
    if (lastArgs.current === void 0)
      return;
    const args = {
      ...lastArgs.current
    };
    let x = 0;
    let tx = args.x < 0 ? -args.x : 0;
    let cellRight = 0;
    let cellX = 0;
    args.x = args.x < 0 ? 0 : args.x;
    let stickyColWidth = 0;
    for (let i = 0; i < freezeColumns; i++) {
      stickyColWidth += columns[i].width;
    }
    for (const c of columns) {
      const cx3 = x - stickyColWidth;
      if (args.x >= cx3 + c.width) {
        x += c.width;
        cellX++;
        cellRight++;
      } else if (args.x > cx3) {
        x += c.width;
        if (smoothScrollX) {
          tx += cx3 - args.x;
        } else {
          cellX++;
        }
        cellRight++;
      } else if (args.x + args.width > cx3) {
        x += c.width;
        cellRight++;
      } else {
        break;
      }
    }
    let ty = 0;
    let cellY = 0;
    let cellBottom = 0;
    if (typeof rowHeight === "number") {
      if (smoothScrollY) {
        cellY = Math.floor(args.y / rowHeight);
        ty = cellY * rowHeight - args.y;
      } else {
        cellY = Math.ceil(args.y / rowHeight);
      }
      cellBottom = Math.ceil(args.height / rowHeight) + cellY;
      if (ty < 0)
        cellBottom++;
    } else {
      let y = 0;
      for (let row = 0; row < rows; row++) {
        const rh = rowHeight(row);
        const cy = y + (smoothScrollY ? 0 : rh / 2);
        if (args.y >= y + rh) {
          y += rh;
          cellY++;
          cellBottom++;
        } else if (args.y > cy) {
          y += rh;
          if (smoothScrollY) {
            ty += cy - args.y;
          } else {
            cellY++;
          }
          cellBottom++;
        } else if (args.y + args.height > rh / 2 + y) {
          y += rh;
          cellBottom++;
        } else {
          break;
        }
      }
    }
    const rect = {
      x: cellX,
      y: cellY,
      width: cellRight - cellX,
      height: cellBottom - cellY
    };
    const oldRect = last.current;
    if (oldRect === void 0 || oldRect.y !== rect.y || oldRect.x !== rect.x || oldRect.height !== rect.height || oldRect.width !== rect.width || lastX.current !== tx || lastY.current !== ty || args.width !== ((_a2 = lastSize.current) == null ? void 0 : _a2[0]) || args.height !== ((_b2 = lastSize.current) == null ? void 0 : _b2[1])) {
      onVisibleRegionChanged == null ? void 0 : onVisibleRegionChanged({
        x: cellX,
        y: cellY,
        width: cellRight - cellX,
        height: cellBottom - cellY
      }, args.width, args.height, (_c2 = args.paddingRight) != null ? _c2 : 0, tx, ty);
      last.current = rect;
      lastX.current = tx;
      lastY.current = ty;
      lastSize.current = [args.width, args.height];
    }
  }, [columns, rowHeight, rows, onVisibleRegionChanged, freezeColumns, smoothScrollX, smoothScrollY]);
  const onScrollUpdate = React12.useCallback((args) => {
    lastArgs.current = args;
    processArgs();
  }, [processArgs]);
  React12.useEffect(() => {
    processArgs();
  }, [processArgs]);
  const scroller = (_a = scrollRef == null ? void 0 : scrollRef.current) != null ? _a : void 0;
  const aspect = (0, import_clamp4.default)(width / height, 2 / 3, 1.5);
  const maxSize = 200;
  const w = aspect > 1 ? maxSize : Math.ceil(maxSize * aspect);
  const h = aspect > 1 ? Math.ceil(maxSize / aspect) : maxSize;
  const hRatio = w / width;
  const vRatio = h / height;
  const vWidth = Math.min(clientWidth * Math.max(hRatio, 0.01), w);
  const vHeight = Math.min(clientHeight * Math.max(vRatio, 0.01), h);
  const left = ((_b = scroller == null ? void 0 : scroller.scrollLeft) != null ? _b : 0) / (width - clientWidth) * (w - vWidth);
  const top = ((_c = scroller == null ? void 0 : scroller.scrollTop) != null ? _c : 0) / (height - clientHeight) * (h - vHeight);
  const minimap = React12.useMemo(() => {
    if (!showMinimap || vWidth === 0 || vHeight === 0)
      return void 0;
    const handleMouse = (e) => {
      if (scroller === void 0)
        return;
      const bounds = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - bounds.x - vWidth / 2;
      const y = e.clientY - bounds.y - vHeight / 2;
      const newScrollLeft = (width - scroller.clientWidth) * (x / (w - vWidth));
      const newScrollTop = (height - scroller.clientHeight) * (y / (h - vHeight));
      scroller.scrollTo({
        left: newScrollLeft,
        top: newScrollTop,
        behavior: e.type === "mousemove" ? "auto" : "smooth"
      });
    };
    return /* @__PURE__ */ React12.createElement(MinimapStyle, {
      style: {
        width: w,
        height: h
      },
      "data-testid": "minimap-container",
      onMouseMove: (e) => {
        if (e.buttons !== 1)
          return;
        handleMouse(e);
      },
      onClick: handleMouse
    }, /* @__PURE__ */ React12.createElement("div", {
      className: "header"
    }), /* @__PURE__ */ React12.createElement("div", {
      className: "locationMarker",
      onDragStart: (e) => e.preventDefault(),
      style: {
        left,
        top,
        width: vWidth,
        height: vHeight,
        borderRadius: Math.min(vWidth, vHeight * 0.2, 9)
      }
    }));
  }, [h, height, left, scroller, showMinimap, top, vHeight, vWidth, w, width]);
  return /* @__PURE__ */ React12.createElement(InfiniteScroller, {
    scrollRef,
    minimap,
    className,
    preventDiagonalScrolling,
    draggable: isDraggable === true || typeof isDraggable === "string",
    scrollWidth: width + (paddingRight != null ? paddingRight : 0),
    scrollHeight: height + (paddingBottom != null ? paddingBottom : 0),
    clientHeight,
    rightElement,
    paddingBottom,
    paddingRight,
    rightElementProps,
    update: onScrollUpdate,
    initialSize,
    scrollToEnd
  }, /* @__PURE__ */ React12.createElement(data_grid_dnd_default, {
    eventTargetRef: scrollRef,
    width: clientWidth,
    height: clientHeight,
    accessibilityHeight: p.accessibilityHeight,
    canvasRef: p.canvasRef,
    cellXOffset: p.cellXOffset,
    cellYOffset: p.cellYOffset,
    columns: p.columns,
    disabledRows: p.disabledRows,
    enableGroups: p.enableGroups,
    fillHandle: p.fillHandle,
    firstColAccessible: p.firstColAccessible,
    fixedShadowX: p.fixedShadowX,
    fixedShadowY: p.fixedShadowY,
    freezeColumns: p.freezeColumns,
    getCellContent: p.getCellContent,
    getCellRenderer: p.getCellRenderer,
    getGroupDetails: p.getGroupDetails,
    getRowThemeOverride: p.getRowThemeOverride,
    groupHeaderHeight: p.groupHeaderHeight,
    headerHeight: p.headerHeight,
    highlightRegions: p.highlightRegions,
    imageWindowLoader: p.imageWindowLoader,
    isFilling: p.isFilling,
    isFocused: p.isFocused,
    lockColumns: p.lockColumns,
    maxColumnWidth: p.maxColumnWidth,
    minColumnWidth: p.minColumnWidth,
    onHeaderMenuClick: p.onHeaderMenuClick,
    onMouseMove: p.onMouseMove,
    prelightCells: p.prelightCells,
    rowHeight: p.rowHeight,
    rows: p.rows,
    selection: p.selection,
    theme: p.theme,
    trailingRowType: p.trailingRowType,
    translateX: p.translateX,
    translateY: p.translateY,
    verticalBorder: p.verticalBorder,
    drawCustomCell: p.drawCustomCell,
    drawFocusRing: p.drawFocusRing,
    drawHeader: p.drawHeader,
    experimental: p.experimental,
    gridRef: p.gridRef,
    headerIcons: p.headerIcons,
    isDraggable: p.isDraggable,
    onCanvasBlur: p.onCanvasBlur,
    onCanvasFocused: p.onCanvasFocused,
    onCellFocused: p.onCellFocused,
    onColumnMoved: p.onColumnMoved,
    onColumnResize: p.onColumnResize,
    onColumnResizeEnd: p.onColumnResizeEnd,
    onColumnResizeStart: p.onColumnResizeStart,
    onContextMenu: p.onContextMenu,
    onDragEnd: p.onDragEnd,
    onDragLeave: p.onDragLeave,
    onDragOverCell: p.onDragOverCell,
    onDragStart: p.onDragStart,
    onDrop: p.onDrop,
    onItemHovered: p.onItemHovered,
    onKeyDown: p.onKeyDown,
    onKeyUp: p.onKeyUp,
    onMouseDown: p.onMouseDown,
    onMouseUp: p.onMouseUp,
    onRowMoved: p.onRowMoved,
    smoothScrollX: p.smoothScrollX,
    smoothScrollY: p.smoothScrollY
  }));
};
var scrolling_data_grid_default = GridScroller;

// src/data-grid-search/data-grid-search-style.tsx
init_esm2();
var _exp9 = () => (p) => p.showSearch ? 0 : 400;
var SearchWrapper = /* @__PURE__ */ styled_default("div")({
  name: "SearchWrapper",
  class: "sxep88s",
  vars: {
    "sxep88s-0": [_exp9(), "px"]
  }
});

// src/data-grid-search/data-grid-search.tsx
var upArrow = /* @__PURE__ */ React13.createElement("svg", {
  className: "button-icon",
  viewBox: "0 0 512 512"
}, /* @__PURE__ */ React13.createElement("path", {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "48",
  d: "M112 244l144-144 144 144M256 120v292"
}));
var downArrow = /* @__PURE__ */ React13.createElement("svg", {
  className: "button-icon",
  viewBox: "0 0 512 512"
}, /* @__PURE__ */ React13.createElement("path", {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "48",
  d: "M112 268l144 144 144-144M256 392V100"
}));
var closeX = /* @__PURE__ */ React13.createElement("svg", {
  className: "button-icon",
  viewBox: "0 0 512 512"
}, /* @__PURE__ */ React13.createElement("path", {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "32",
  d: "M368 368L144 144M368 144L144 368"
}));
var targetSearchTimeMS = 10;
var DataGridSearch = (p) => {
  const {
    canvasRef,
    cellYOffset,
    rows,
    columns,
    searchInputRef,
    getCellsForSelection,
    onSearchResultsChanged,
    showSearch = false,
    onSearchClose
  } = p;
  const [searchID] = React13.useState(() => "search-box-" + Math.round(Math.random() * 1e3));
  const [searchString, setSearchString] = React13.useState("");
  const [searchStatus, setSearchStatus] = React13.useState();
  const searchStatusRef = React13.useRef(searchStatus);
  searchStatusRef.current = searchStatus;
  const abortControllerRef = React13.useRef(new AbortController());
  const searchHandle = React13.useRef();
  const [searchResults, setSearchResults] = React13.useState([]);
  const cancelSearch = React13.useCallback(() => {
    if (searchHandle.current !== void 0) {
      window.cancelAnimationFrame(searchHandle.current);
      searchHandle.current = void 0;
      abortControllerRef.current.abort();
    }
  }, []);
  const cellYOffsetRef = React13.useRef(cellYOffset);
  cellYOffsetRef.current = cellYOffset;
  const beginSearch = React13.useCallback((str) => {
    const regex = new RegExp(str.replace(/([$()*+.?[\\\]^{|}-])/g, "\\$1"), "i");
    let startY = cellYOffsetRef.current;
    let searchStride = Math.min(10, rows);
    let rowsSearched = 0;
    setSearchStatus(void 0);
    setSearchResults([]);
    const runningResult = [];
    const tick = async () => {
      var _a, _b;
      if (getCellsForSelection === void 0)
        return;
      const tStart = performance.now();
      const rowsLeft = rows - rowsSearched;
      let data = getCellsForSelection({
        x: 0,
        y: startY,
        width: columns.length,
        height: Math.min(searchStride, rowsLeft, rows - startY)
      }, abortControllerRef.current.signal);
      if (typeof data === "function") {
        data = await data();
      }
      let added = false;
      for (const [row, d] of data.entries()) {
        for (const [col, cell] of d.entries()) {
          let testString;
          switch (cell.kind) {
            case GridCellKind.Text:
            case GridCellKind.Number:
              testString = cell.displayData;
              break;
            case GridCellKind.Uri:
            case GridCellKind.Markdown:
              testString = cell.data;
              break;
            case GridCellKind.Boolean:
              testString = typeof cell.data === "boolean" ? cell.data.toString() : void 0;
              break;
            case GridCellKind.Image:
            case GridCellKind.Bubble:
              testString = cell.data.join("\u{1F433}");
              break;
            case GridCellKind.Custom:
              testString = cell.copyData;
              break;
          }
          if (testString !== void 0 && regex.test(testString)) {
            runningResult.push([col, row + startY]);
            added = true;
          }
        }
      }
      const tEnd = performance.now();
      if (added) {
        setSearchResults([...runningResult]);
      }
      rowsSearched += data.length;
      assert(rowsSearched <= rows);
      const selectedIndex = (_b = (_a = searchStatusRef.current) == null ? void 0 : _a.selectedIndex) != null ? _b : -1;
      setSearchStatus({
        results: runningResult.length,
        rowsSearched,
        selectedIndex
      });
      onSearchResultsChanged == null ? void 0 : onSearchResultsChanged(runningResult, selectedIndex);
      if (startY + searchStride >= rows) {
        startY = 0;
      } else {
        startY += searchStride;
      }
      const tElapsed = tEnd - tStart;
      const rounded = Math.max(tElapsed, 1);
      const scalar = targetSearchTimeMS / rounded;
      searchStride = Math.ceil(searchStride * scalar);
      if (rowsSearched < rows && runningResult.length < 1e3) {
        searchHandle.current = window.requestAnimationFrame(tick);
      }
    };
    cancelSearch();
    searchHandle.current = window.requestAnimationFrame(tick);
  }, [cancelSearch, columns.length, getCellsForSelection, onSearchResultsChanged, rows]);
  const onClose = React13.useCallback(() => {
    var _a;
    onSearchClose == null ? void 0 : onSearchClose();
    setSearchStatus(void 0);
    setSearchResults([]);
    onSearchResultsChanged == null ? void 0 : onSearchResultsChanged([], -1);
    cancelSearch();
    (_a = canvasRef == null ? void 0 : canvasRef.current) == null ? void 0 : _a.focus();
  }, [cancelSearch, canvasRef, onSearchClose, onSearchResultsChanged]);
  const onSearchChange = React13.useCallback((event) => {
    setSearchString(event.target.value);
    if (event.target.value === "") {
      setSearchStatus(void 0);
      setSearchResults([]);
      cancelSearch();
    } else {
      beginSearch(event.target.value);
    }
  }, [beginSearch, cancelSearch]);
  React13.useEffect(() => {
    if (showSearch && searchInputRef.current !== null) {
      setSearchString("");
      searchInputRef.current.focus({ preventScroll: true });
    }
  }, [showSearch, searchInputRef]);
  const onNext = React13.useCallback((ev) => {
    var _a;
    (_a = ev == null ? void 0 : ev.stopPropagation) == null ? void 0 : _a.call(ev);
    if (searchStatus === void 0)
      return;
    const newIndex = (searchStatus.selectedIndex + 1) % searchStatus.results;
    setSearchStatus({
      ...searchStatus,
      selectedIndex: newIndex
    });
    onSearchResultsChanged == null ? void 0 : onSearchResultsChanged(searchResults, newIndex);
  }, [searchStatus, onSearchResultsChanged, searchResults]);
  const onPrev = React13.useCallback((ev) => {
    var _a;
    (_a = ev == null ? void 0 : ev.stopPropagation) == null ? void 0 : _a.call(ev);
    if (searchStatus === void 0)
      return;
    let newIndex = (searchStatus.selectedIndex - 1) % searchStatus.results;
    if (newIndex < 0)
      newIndex += searchStatus.results;
    setSearchStatus({
      ...searchStatus,
      selectedIndex: newIndex
    });
    onSearchResultsChanged == null ? void 0 : onSearchResultsChanged(searchResults, newIndex);
  }, [onSearchResultsChanged, searchResults, searchStatus]);
  const onSearchKeyDown = React13.useCallback((event) => {
    if ((event.ctrlKey || event.metaKey) && event.nativeEvent.code === "KeyF" || event.key === "Escape") {
      onClose();
      event.stopPropagation();
      event.preventDefault();
    } else if (event.key === "Enter") {
      if (event.shiftKey) {
        onPrev();
      } else {
        onNext();
      }
    }
  }, [onClose, onNext, onPrev]);
  React13.useEffect(() => {
    return () => {
      cancelSearch();
    };
  }, [cancelSearch]);
  const searchbox = React13.useMemo(() => {
    var _a, _b, _c;
    let resultString;
    if (searchStatus !== void 0) {
      resultString = searchStatus.results >= 1e3 ? `over 1000` : `${searchStatus.results} result${searchStatus.results !== 1 ? "s" : ""}`;
      if (searchStatus.selectedIndex >= 0) {
        resultString = `${searchStatus.selectedIndex + 1} of ${resultString}`;
      }
    }
    const cancelEvent = (ev) => {
      ev.stopPropagation();
    };
    const rowsSearchedProgress = Math.floor(((_a = searchStatus == null ? void 0 : searchStatus.rowsSearched) != null ? _a : 0) / rows * 100);
    const progressStyle = {
      width: `${rowsSearchedProgress}%`
    };
    return /* @__PURE__ */ React13.createElement(SearchWrapper, {
      showSearch,
      onMouseDown: cancelEvent,
      onMouseMove: cancelEvent,
      onMouseUp: cancelEvent,
      onClick: cancelEvent
    }, /* @__PURE__ */ React13.createElement("div", {
      className: "search-bar-inner"
    }, /* @__PURE__ */ React13.createElement("input", {
      id: searchID,
      "aria-hidden": !showSearch,
      "data-testid": "search-input",
      ref: searchInputRef,
      onChange: onSearchChange,
      value: searchString,
      tabIndex: showSearch ? void 0 : -1,
      onKeyDownCapture: onSearchKeyDown
    }), /* @__PURE__ */ React13.createElement("button", {
      "aria-label": "Previous Result",
      "aria-hidden": !showSearch,
      tabIndex: showSearch ? void 0 : -1,
      onClick: onPrev,
      disabled: ((_b = searchStatus == null ? void 0 : searchStatus.results) != null ? _b : 0) === 0
    }, upArrow), /* @__PURE__ */ React13.createElement("button", {
      "aria-label": "Next Result",
      "aria-hidden": !showSearch,
      tabIndex: showSearch ? void 0 : -1,
      onClick: onNext,
      disabled: ((_c = searchStatus == null ? void 0 : searchStatus.results) != null ? _c : 0) === 0
    }, downArrow), onSearchClose !== void 0 && /* @__PURE__ */ React13.createElement("button", {
      "aria-label": "Close Search",
      "aria-hidden": !showSearch,
      "data-testid": "search-close-button",
      tabIndex: showSearch ? void 0 : -1,
      onClick: onClose
    }, closeX)), searchStatus !== void 0 ? /* @__PURE__ */ React13.createElement(React13.Fragment, null, /* @__PURE__ */ React13.createElement("div", {
      className: "search-status"
    }, /* @__PURE__ */ React13.createElement("div", {
      "data-testid": "search-result-area"
    }, resultString)), /* @__PURE__ */ React13.createElement("div", {
      className: "search-progress",
      style: progressStyle
    })) : /* @__PURE__ */ React13.createElement("div", {
      className: "search-status"
    }, /* @__PURE__ */ React13.createElement("label", {
      htmlFor: searchID
    }, "Type to search")));
  }, [
    onClose,
    onNext,
    onPrev,
    onSearchChange,
    onSearchClose,
    onSearchKeyDown,
    rows,
    searchStatus,
    searchString,
    showSearch,
    searchID,
    searchInputRef
  ]);
  return /* @__PURE__ */ React13.createElement(React13.Fragment, null, /* @__PURE__ */ React13.createElement(scrolling_data_grid_default, {
    prelightCells: searchResults,
    accessibilityHeight: p.accessibilityHeight,
    canvasRef: p.canvasRef,
    cellXOffset: p.cellXOffset,
    cellYOffset: p.cellYOffset,
    className: p.className,
    clientSize: p.clientSize,
    columns: p.columns,
    disabledRows: p.disabledRows,
    enableGroups: p.enableGroups,
    fillHandle: p.fillHandle,
    firstColAccessible: p.firstColAccessible,
    fixedShadowX: p.fixedShadowX,
    fixedShadowY: p.fixedShadowY,
    freezeColumns: p.freezeColumns,
    getCellContent: p.getCellContent,
    getCellRenderer: p.getCellRenderer,
    getGroupDetails: p.getGroupDetails,
    getRowThemeOverride: p.getRowThemeOverride,
    groupHeaderHeight: p.groupHeaderHeight,
    headerHeight: p.headerHeight,
    highlightRegions: p.highlightRegions,
    imageWindowLoader: p.imageWindowLoader,
    initialSize: p.initialSize,
    isFilling: p.isFilling,
    isFocused: p.isFocused,
    lockColumns: p.lockColumns,
    maxColumnWidth: p.maxColumnWidth,
    minColumnWidth: p.minColumnWidth,
    onHeaderMenuClick: p.onHeaderMenuClick,
    onMouseMove: p.onMouseMove,
    onVisibleRegionChanged: p.onVisibleRegionChanged,
    overscrollX: p.overscrollX,
    overscrollY: p.overscrollY,
    preventDiagonalScrolling: p.preventDiagonalScrolling,
    rightElement: p.rightElement,
    rightElementProps: p.rightElementProps,
    rowHeight: p.rowHeight,
    rows: p.rows,
    scrollRef: p.scrollRef,
    selection: p.selection,
    showMinimap: p.showMinimap,
    theme: p.theme,
    trailingRowType: p.trailingRowType,
    translateX: p.translateX,
    translateY: p.translateY,
    verticalBorder: p.verticalBorder,
    drawCustomCell: p.drawCustomCell,
    drawFocusRing: p.drawFocusRing,
    drawHeader: p.drawHeader,
    experimental: p.experimental,
    gridRef: p.gridRef,
    headerIcons: p.headerIcons,
    isDraggable: p.isDraggable,
    onCanvasBlur: p.onCanvasBlur,
    onCanvasFocused: p.onCanvasFocused,
    onCellFocused: p.onCellFocused,
    onColumnMoved: p.onColumnMoved,
    onColumnResize: p.onColumnResize,
    onColumnResizeEnd: p.onColumnResizeEnd,
    onColumnResizeStart: p.onColumnResizeStart,
    onContextMenu: p.onContextMenu,
    onDragEnd: p.onDragEnd,
    onDragLeave: p.onDragLeave,
    onDragOverCell: p.onDragOverCell,
    onDragStart: p.onDragStart,
    onDrop: p.onDrop,
    onItemHovered: p.onItemHovered,
    onKeyDown: p.onKeyDown,
    onKeyUp: p.onKeyUp,
    onMouseDown: p.onMouseDown,
    onMouseUp: p.onMouseUp,
    onRowMoved: p.onRowMoved,
    smoothScrollX: p.smoothScrollX,
    smoothScrollY: p.smoothScrollY,
    scrollToEnd: p.scrollToEnd
  }), searchbox);
};
var data_grid_search_default = DataGridSearch;

// src/data-editor/group-rename.tsx
var import_react9 = __toESM(require("react"), 1);
init_esm2();
var _exp10 = () => (p) => Math.max(16, p.targetHeight - 10);
var RenameInput = /* @__PURE__ */ styled_default("input")({
  name: "RenameInput",
  class: "r1kzy40b",
  vars: {
    "r1kzy40b-0": [_exp10(), "px"]
  }
});
var GroupRename = (p) => {
  const {
    bounds,
    group,
    onClose,
    canvasBounds,
    onFinish
  } = p;
  const [value, setValue] = import_react9.default.useState(group);
  return /* @__PURE__ */ import_react9.default.createElement(ClickOutsideContainer, {
    style: {
      position: "absolute",
      left: bounds.x - canvasBounds.left + 1,
      top: bounds.y - canvasBounds.top,
      width: bounds.width - 2,
      height: bounds.height
    },
    className: "c1sqdbw3",
    onClickOutside: onClose
  }, /* @__PURE__ */ import_react9.default.createElement(RenameInput, {
    targetHeight: bounds.height,
    "data-testid": "group-rename-input",
    value,
    onBlur: onClose,
    onFocus: (e) => e.target.setSelectionRange(0, value.length),
    onChange: (e) => setValue(e.target.value),
    onKeyDown: (e) => {
      if (e.key === "Enter") {
        onFinish(value);
      } else if (e.key === "Escape") {
        onClose();
      }
    },
    autoFocus: true
  }));
};

// src/data-editor/use-column-sizer.ts
var React15 = __toESM(require("react"), 1);
var defaultSize = 150;
function measureCell(ctx, cell, theme, getCellRenderer) {
  var _a, _b;
  if (cell.kind === GridCellKind.Custom)
    return defaultSize;
  const r = getCellRenderer(cell);
  return (_b = (_a = r == null ? void 0 : r.measure) == null ? void 0 : _a.call(r, ctx, cell, theme)) != null ? _b : defaultSize;
}
function measureColumn(ctx, theme, c, colIndex, selectedData, minColumnWidth, maxColumnWidth, removeOutliers, getCellRenderer) {
  let sizes = [];
  if (selectedData !== void 0) {
    sizes.push(...selectedData.map((row) => row[colIndex]).map((cell) => measureCell(ctx, cell, theme, getCellRenderer)));
  }
  if (sizes.length > 5 && removeOutliers) {
    const average = sizes.reduce((a, b) => a + b) / sizes.length;
    sizes = sizes.filter((a) => a < average * 2);
  }
  sizes.push(ctx.measureText(c.title).width + 16 + (c.icon === void 0 ? 0 : 28));
  const biggest = Math.max(...sizes);
  const final = Math.max(Math.ceil(minColumnWidth), Math.min(Math.floor(maxColumnWidth), Math.ceil(biggest)));
  return {
    ...c,
    width: final
  };
}
function useColumnSizer(columns, rows, getCellsForSelection, clientWidth, minColumnWidth, maxColumnWidth, theme, getCellRenderer, abortController) {
  const rowsRef = React15.useRef(rows);
  const getCellsForSelectionRef = React15.useRef(getCellsForSelection);
  const themeRef = React15.useRef(theme);
  rowsRef.current = rows;
  getCellsForSelectionRef.current = getCellsForSelection;
  themeRef.current = theme;
  const [ctx] = React15.useState(() => {
    if (typeof window === "undefined")
      return null;
    const offscreen = document.createElement("canvas");
    offscreen.style["display"] = "none";
    offscreen.style["opacity"] = "0";
    offscreen.style["position"] = "fixed";
    document.documentElement.append(offscreen);
    return offscreen.getContext("2d", { alpha: false });
  });
  const memoMap = React15.useRef({});
  const lastColumns = React15.useRef();
  const [selectedData, setSelectionData] = React15.useState();
  React15.useLayoutEffect(() => {
    const getCells = getCellsForSelectionRef.current;
    if (getCells === void 0 || columns.every(isSizedGridColumn))
      return;
    let computeRows = Math.max(1, 10 - Math.floor(columns.length / 1e4));
    let tailRows = 0;
    if (computeRows < rowsRef.current && computeRows > 1) {
      computeRows--;
      tailRows = 1;
    }
    const computeArea = {
      x: 0,
      y: 0,
      width: columns.length,
      height: Math.min(rowsRef.current, computeRows)
    };
    const tailComputeArea = {
      x: 0,
      y: rowsRef.current - 1,
      width: columns.length,
      height: 1
    };
    const fn = async () => {
      const getResult = getCells(computeArea, abortController.signal);
      const tailGetResult = tailRows > 0 ? getCells(tailComputeArea, abortController.signal) : void 0;
      let toSet;
      if (typeof getResult === "object") {
        toSet = getResult;
      } else {
        toSet = await resolveCellsThunk(getResult);
      }
      if (tailGetResult !== void 0) {
        if (typeof tailGetResult === "object") {
          toSet = [...toSet, ...tailGetResult];
        } else {
          toSet = [...toSet, ...await resolveCellsThunk(tailGetResult)];
        }
      }
      lastColumns.current = columns;
      setSelectionData(toSet);
    };
    void fn();
  }, [abortController.signal, columns]);
  return React15.useMemo(() => {
    var _a;
    const getRaw = () => {
      if (columns.every(isSizedGridColumn)) {
        return columns;
      }
      if (ctx === null) {
        return columns.map((c) => {
          if (isSizedGridColumn(c))
            return c;
          return {
            ...c,
            width: defaultSize
          };
        });
      }
      ctx.font = `${themeRef.current.baseFontStyle} ${themeRef.current.fontFamily}`;
      return columns.map((c, colIndex) => {
        if (isSizedGridColumn(c))
          return c;
        if (memoMap.current[c.id] !== void 0) {
          return {
            ...c,
            width: memoMap.current[c.id]
          };
        }
        if (selectedData === void 0 || lastColumns.current !== columns || c.id === void 0) {
          return {
            ...c,
            width: defaultSize
          };
        }
        const r = measureColumn(ctx, theme, c, colIndex, selectedData, minColumnWidth, maxColumnWidth, true, getCellRenderer);
        memoMap.current[c.id] = r.width;
        return r;
      });
    };
    let result = getRaw();
    let totalWidth = 0;
    let totalGrow = 0;
    const distribute = [];
    for (const [i, c] of result.entries()) {
      totalWidth += c.width;
      if (c.grow !== void 0 && c.grow > 0) {
        totalGrow += c.grow;
        distribute.push(i);
      }
    }
    if (totalWidth < clientWidth && distribute.length > 0) {
      const writeable = [...result];
      const extra = clientWidth - totalWidth;
      let remaining = extra;
      for (let di = 0; di < distribute.length; di++) {
        const i = distribute[di];
        const weighted = ((_a = result[i].grow) != null ? _a : 0) / totalGrow;
        const toAdd = di === distribute.length - 1 ? remaining : Math.min(remaining, Math.floor(extra * weighted));
        writeable[i] = {
          ...result[i],
          growOffset: toAdd,
          width: result[i].width + toAdd
        };
        remaining -= toAdd;
      }
      result = writeable;
    }
    return result;
  }, [clientWidth, columns, ctx, selectedData, theme, minColumnWidth, maxColumnWidth, getCellRenderer]);
}

// src/common/is-hotkey.ts
function checkKey(key, args) {
  if (key === void 0)
    return false;
  if (key.length > 1 && key.startsWith("_")) {
    const keycode = Number.parseInt(key.slice(1));
    if (keycode !== args.keyCode)
      return false;
  } else {
    if (key !== args.key)
      return false;
  }
  return true;
}
function isHotkey(hotkey, args) {
  if (hotkey.length === 0)
    return false;
  let wantCtrl = false;
  let wantShift = false;
  let wantAlt = false;
  let wantMeta = false;
  const split = hotkey.split("+");
  const key = split.pop();
  if (!checkKey(key, args))
    return false;
  for (const accel of split) {
    switch (accel) {
      case "ctrl":
        wantCtrl = true;
        break;
      case "shift":
        wantShift = true;
        break;
      case "alt":
        wantAlt = true;
        break;
      case "meta":
        wantMeta = true;
        break;
      case "primary":
        if (browserIsOSX.value) {
          wantMeta = true;
        } else {
          wantCtrl = true;
        }
        break;
    }
  }
  return args.altKey === wantAlt && args.ctrlKey === wantCtrl && args.shiftKey === wantShift && args.metaKey === wantMeta;
}

// src/data-grid/use-selection-behavior.ts
var import_react11 = __toESM(require("react"), 1);
function useSelectionBehavior(gridSelection, setGridSelection, rangeBehavior, columnBehavior, rowBehavior, rangeSelect) {
  const setCurrent = import_react11.default.useCallback((value, expand, append, trigger) => {
    var _a, _b;
    if ((rangeSelect === "cell" || rangeSelect === "multi-cell") && value !== void 0) {
      value = {
        ...value,
        range: {
          x: value.cell[0],
          y: value.cell[1],
          width: 1,
          height: 1
        }
      };
    }
    const rangeMixable = rangeBehavior === "mixed" && (append || trigger === "drag");
    const allowColumnCoSelect = columnBehavior === "mixed" && rangeMixable;
    const allowRowCoSelect = rowBehavior === "mixed" && rangeMixable;
    let newVal = {
      current: value === void 0 ? void 0 : {
        ...value,
        rangeStack: trigger === "drag" ? (_b = (_a = gridSelection.current) == null ? void 0 : _a.rangeStack) != null ? _b : [] : []
      },
      columns: allowColumnCoSelect ? gridSelection.columns : CompactSelection.empty(),
      rows: allowRowCoSelect ? gridSelection.rows : CompactSelection.empty()
    };
    const addLastRange = append && (rangeSelect === "multi-rect" || rangeSelect === "multi-cell");
    if (addLastRange && newVal.current !== void 0 && gridSelection.current !== void 0) {
      newVal = {
        ...newVal,
        current: {
          ...newVal.current,
          rangeStack: [...gridSelection.current.rangeStack, gridSelection.current.range]
        }
      };
    }
    setGridSelection(newVal, expand);
  }, [columnBehavior, gridSelection, rangeBehavior, rangeSelect, rowBehavior, setGridSelection]);
  const setSelectedRows = import_react11.default.useCallback((newRows, append, allowMixed) => {
    newRows = newRows != null ? newRows : gridSelection.rows;
    if (append !== void 0) {
      newRows = newRows.add(append);
    }
    let newVal;
    if (rowBehavior === "exclusive" && newRows.length > 0) {
      newVal = {
        current: void 0,
        columns: CompactSelection.empty(),
        rows: newRows
      };
    } else {
      const rangeMixed = allowMixed && rangeBehavior === "mixed";
      const columnMixed = allowMixed && columnBehavior === "mixed";
      const current = !rangeMixed ? void 0 : gridSelection.current;
      newVal = {
        current,
        columns: columnMixed ? gridSelection.columns : CompactSelection.empty(),
        rows: newRows
      };
    }
    setGridSelection(newVal, false);
  }, [columnBehavior, gridSelection, rangeBehavior, rowBehavior, setGridSelection]);
  const setSelectedColumns = import_react11.default.useCallback((newCols, append, allowMixed) => {
    newCols = newCols != null ? newCols : gridSelection.columns;
    if (append !== void 0) {
      newCols = newCols.add(append);
    }
    let newVal;
    if (columnBehavior === "exclusive" && newCols.length > 0) {
      newVal = {
        current: void 0,
        rows: CompactSelection.empty(),
        columns: newCols
      };
    } else {
      const rangeMixed = allowMixed && rangeBehavior === "mixed";
      const rowMixed = allowMixed && rowBehavior === "mixed";
      const current = !rangeMixed ? void 0 : gridSelection.current;
      newVal = {
        current,
        rows: rowMixed ? gridSelection.rows : CompactSelection.empty(),
        columns: newCols
      };
    }
    setGridSelection(newVal, false);
  }, [columnBehavior, gridSelection, rangeBehavior, rowBehavior, setGridSelection]);
  return [setCurrent, setSelectedRows, setSelectedColumns];
}

// src/data-editor/use-cells-for-selection.ts
var React17 = __toESM(require("react"), 1);
function useCellsForSelection(getCellsForSelectionIn, getCellContent, rowMarkerOffset, abortController, rows) {
  const getCellsForSelectionDirectWhenValid = React17.useCallback((rect) => {
    var _a;
    if (getCellsForSelectionIn === true) {
      const result = [];
      for (let y = rect.y; y < rect.y + rect.height; y++) {
        const row = [];
        for (let x = rect.x; x < rect.x + rect.width; x++) {
          if (x < 0 || y >= rows) {
            row.push({
              kind: GridCellKind.Loading,
              allowOverlay: false
            });
          } else {
            row.push(getCellContent([x, y]));
          }
        }
        result.push(row);
      }
      return result;
    }
    return (_a = getCellsForSelectionIn == null ? void 0 : getCellsForSelectionIn(rect, abortController.signal)) != null ? _a : [];
  }, [abortController.signal, getCellContent, getCellsForSelectionIn, rows]);
  const getCellsForSelectionDirect = getCellsForSelectionIn !== void 0 ? getCellsForSelectionDirectWhenValid : void 0;
  const getCellsForSelectionMangled = React17.useCallback((rect) => {
    if (getCellsForSelectionDirect === void 0)
      return [];
    const newRect = {
      ...rect,
      x: rect.x - rowMarkerOffset
    };
    if (newRect.x < 0) {
      newRect.x = 0;
      newRect.width--;
      const r = getCellsForSelectionDirect(newRect, abortController.signal);
      if (typeof r === "function") {
        return async () => (await r()).map((row) => [
          { kind: GridCellKind.Loading, allowOverlay: false },
          ...row
        ]);
      }
      return r.map((row) => [{ kind: GridCellKind.Loading, allowOverlay: false }, ...row]);
    }
    return getCellsForSelectionDirect(newRect, abortController.signal);
  }, [abortController.signal, getCellsForSelectionDirect, rowMarkerOffset]);
  const getCellsForSelection = getCellsForSelectionIn !== void 0 ? getCellsForSelectionMangled : void 0;
  return [getCellsForSelection, getCellsForSelectionDirect];
}

// src/data-editor/data-editor-fns.ts
function expandSelection(newVal, getCellsForSelection, rowMarkerOffset, spanRangeBehavior, abortController) {
  var _a, _b;
  const origVal = newVal;
  if (spanRangeBehavior === "allowPartial" || newVal.current === void 0)
    return newVal;
  if (getCellsForSelection !== void 0) {
    let isFilled = false;
    do {
      if ((newVal == null ? void 0 : newVal.current) === void 0)
        break;
      const r = (_a = newVal.current) == null ? void 0 : _a.range;
      const cells = [];
      if (r.width > 2) {
        const leftCells = getCellsForSelection({
          x: r.x,
          y: r.y,
          width: 1,
          height: r.height
        }, abortController.signal);
        if (typeof leftCells === "function") {
          return origVal;
        }
        cells.push(...leftCells);
        const rightCells = getCellsForSelection({
          x: r.x + r.width - 1,
          y: r.y,
          width: 1,
          height: r.height
        }, abortController.signal);
        if (typeof rightCells === "function") {
          return origVal;
        }
        cells.push(...rightCells);
      } else {
        const rCells = getCellsForSelection({
          x: r.x,
          y: r.y,
          width: r.width,
          height: r.height
        }, abortController.signal);
        if (typeof rCells === "function") {
          return origVal;
        }
        cells.push(...rCells);
      }
      let left = r.x - rowMarkerOffset;
      let right = r.x + r.width - 1 - rowMarkerOffset;
      for (const row of cells) {
        for (const cell of row) {
          if (cell.span === void 0)
            continue;
          left = Math.min(cell.span[0], left);
          right = Math.max(cell.span[1], right);
        }
      }
      if (left === r.x - rowMarkerOffset && right === r.x + r.width - 1 - rowMarkerOffset) {
        isFilled = true;
      } else {
        newVal = {
          current: {
            cell: (_b = newVal.current.cell) != null ? _b : [0, 0],
            range: {
              x: left + rowMarkerOffset,
              y: r.y,
              width: right - left + 1,
              height: r.height
            },
            rangeStack: newVal.current.rangeStack
          },
          columns: newVal.columns,
          rows: newVal.rows
        };
      }
    } while (!isFilled);
  }
  return newVal;
}
function descape(s) {
  if (s.startsWith('"') && s.endsWith('"')) {
    s = s.slice(1, -1).replace(/""/g, '"');
  }
  return s;
}
function unquote(str) {
  var State;
  (function(State2) {
    State2[State2["None"] = 0] = "None";
    State2[State2["inString"] = 1] = "inString";
    State2[State2["inStringPostQuote"] = 2] = "inStringPostQuote";
  })(State || (State = {}));
  const result = [];
  let current = [];
  let start = 0;
  let state = 0;
  str = str.replace(/\r\n/g, "\n");
  let index2 = 0;
  for (const char of str) {
    switch (state) {
      case 0:
        if (char === "	" || char === "\n") {
          current.push(str.slice(start, index2));
          start = index2 + 1;
          if (char === "\n") {
            result.push(current);
            current = [];
          }
        } else if (char === `"`) {
          state = 1;
        }
        break;
      case 1:
        if (char === `"`) {
          state = 2;
        }
        break;
      case 2:
        if (char === '"') {
          state = 1;
        } else if (char === "	" || char === "\n") {
          current.push(descape(str.slice(start, index2)));
          start = index2 + 1;
          if (char === "\n") {
            result.push(current);
            current = [];
          }
          state = 0;
        } else {
          state = 0;
        }
        break;
    }
    index2++;
  }
  if (start < str.length) {
    current.push(descape(str.slice(start, str.length)));
  }
  result.push(current);
  return result;
}
function decodeHTML(tableEl) {
  var _a, _b;
  const walkEl = [tableEl];
  const result = [];
  let current;
  while (walkEl.length > 0) {
    const el = walkEl.pop();
    if (el === void 0)
      break;
    if (el instanceof HTMLTableElement || el.nodeName === "TBODY") {
      walkEl.push(...[...el.children].reverse());
    } else if (el instanceof HTMLTableRowElement) {
      if (current !== void 0) {
        result.push(current);
      }
      current = [];
      walkEl.push(...[...el.children].reverse());
    } else if (el instanceof HTMLTableCellElement) {
      current == null ? void 0 : current.push((_b = (_a = el.innerText) != null ? _a : el.textContent) != null ? _b : "");
    }
  }
  if (current !== void 0) {
    result.push(current);
  }
  return result;
}
function escape(str) {
  if (/[\t\n",]/.test(str)) {
    str = `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}
var formatBoolean = (val) => {
  switch (val) {
    case true:
      return "TRUE";
    case false:
      return "FALSE";
    case BooleanIndeterminate:
      return "INDETERMINATE";
    case BooleanEmpty:
      return "";
    default:
      assertNever(val);
  }
};
function formatCell(cell, index2, raw, columnIndexes) {
  var _a, _b;
  const colIndex = columnIndexes[index2];
  if (cell.span !== void 0 && cell.span[0] !== colIndex)
    return "";
  if (cell.copyData !== void 0) {
    return escape(cell.copyData);
  }
  switch (cell.kind) {
    case GridCellKind.Text:
    case GridCellKind.Number:
      return escape(raw ? (_b = (_a = cell.data) == null ? void 0 : _a.toString()) != null ? _b : "" : cell.displayData);
    case GridCellKind.Markdown:
    case GridCellKind.RowID:
    case GridCellKind.Uri:
      return escape(cell.data);
    case GridCellKind.Image:
    case GridCellKind.Bubble:
      if (cell.data.length === 0)
        return "";
      return cell.data.reduce((pv, cv) => `${escape(pv)},${escape(cv)}`);
    case GridCellKind.Boolean:
      return formatBoolean(cell.data);
    case GridCellKind.Loading:
      return raw ? "" : "#LOADING";
    case GridCellKind.Protected:
      return raw ? "" : "************";
    case GridCellKind.Drilldown:
      if (cell.data.length === 0)
        return "";
      return cell.data.map((i) => i.text).reduce((pv, cv) => `${escape(pv)},${escape(cv)}`);
    case GridCellKind.Custom:
      return escape(cell.copyData);
    default:
      assertNever(cell);
  }
}
function formatForCopy(cells, columnIndexes) {
  return cells.map((row) => row.map((a, b) => formatCell(a, b, false, columnIndexes)).join("	")).join("\n");
}
function copyToClipboard(cells, columnIndexes, e) {
  var _a, _b, _c, _d;
  const str = formatForCopy(cells, columnIndexes);
  if (((_a = window.navigator.clipboard) == null ? void 0 : _a.write) !== void 0 || e !== void 0) {
    const rootEl = document.createElement("tbody");
    for (const row of cells) {
      const rowEl = document.createElement("tr");
      for (const [i, cell] of row.entries()) {
        const cellEl = document.createElement("td");
        if (cell.kind === GridCellKind.Uri) {
          const link = document.createElement("a");
          link.href = cell.data;
          link.innerText = cell.data;
          cellEl.append(link);
        } else {
          cellEl.innerText = formatCell(cell, i, true, columnIndexes);
        }
        rowEl.append(cellEl);
      }
      rootEl.append(rowEl);
    }
    if (((_b = window.navigator.clipboard) == null ? void 0 : _b.write) !== void 0) {
      void window.navigator.clipboard.write([
        new ClipboardItem({
          "text/plain": new Blob([str], { type: "text/plain" }),
          "text/html": new Blob([`<table>${rootEl.outerHTML}</table>`], { type: "text/html" })
        })
      ]);
    } else if (e !== void 0 && (e == null ? void 0 : e.clipboardData) !== null) {
      try {
        e.clipboardData.setData("text/plain", str);
        e.clipboardData.setData("text/html", `<table>${rootEl.outerHTML}</table>`);
      } catch (e2) {
        void ((_c = window.navigator.clipboard) == null ? void 0 : _c.writeText(str));
      }
    }
  } else {
    void ((_d = window.navigator.clipboard) == null ? void 0 : _d.writeText(str));
  }
  e == null ? void 0 : e.preventDefault();
}

// src/data-editor-container/data-grid-container.tsx
init_esm2();
var React18 = __toESM(require("react"), 1);
function toCss(x) {
  if (typeof x === "string")
    return x;
  return `${x}px`;
}
var _exp11 = () => (p) => p.innerWidth;
var _exp22 = () => (p) => p.innerHeight;
var Wrapper = /* @__PURE__ */ styled_default("div")({
  name: "Wrapper",
  class: "wzg2m5k",
  vars: {
    "wzg2m5k-0": [_exp11()],
    "wzg2m5k-1": [_exp22()]
  }
});
var DataEditorContainer = (p) => {
  const {
    inWidth,
    inHeight,
    children,
    ...rest
  } = p;
  return /* @__PURE__ */ React18.createElement(Wrapper, {
    innerHeight: toCss(inHeight),
    innerWidth: toCss(inWidth),
    ...rest
  }, children);
};

// src/data-grid/cells/boolean-cell.tsx
function toggleBoolean(data) {
  return data !== true;
}
var defaultCellMaxSize = 20;
var booleanCellRenderer = {
  getAccessibilityString: (c) => {
    var _a, _b;
    return (_b = (_a = c.data) == null ? void 0 : _a.toString()) != null ? _b : "false";
  },
  kind: GridCellKind.Boolean,
  needsHover: true,
  useLabel: false,
  needsHoverPosition: true,
  measure: () => 50,
  draw: (a) => {
    var _a;
    return drawBoolean(a, a.cell.data, booleanCellIsEditable(a.cell), (_a = a.cell.maxSize) != null ? _a : defaultCellMaxSize);
  },
  onDelete: (c) => ({
    ...c,
    data: false
  }),
  onClick: (e) => {
    var _a, _b;
    const { cell, posX: pointerX, posY: pointerY, bounds, theme } = e;
    const { width, height, x: cellX, y: cellY } = bounds;
    const maxWidth = (_a = cell.maxSize) != null ? _a : defaultCellMaxSize;
    const cellCenterY = Math.floor(bounds.y + height / 2);
    const checkBoxWidth = getSquareWidth(maxWidth, height, theme.cellVerticalPadding);
    const posX = getSquareXPosFromAlign((_b = cell.contentAlign) != null ? _b : "center", cellX, width, theme.cellHorizontalPadding, checkBoxWidth);
    const bb = getSquareBB(posX, cellCenterY, checkBoxWidth);
    const checkBoxClicked = pointIsWithinBB(cellX + pointerX, cellY + pointerY, bb);
    if (booleanCellIsEditable(cell) && checkBoxClicked) {
      return {
        ...cell,
        data: toggleBoolean(cell.data)
      };
    }
    return void 0;
  },
  onPaste: (toPaste, cell) => {
    let newVal = BooleanEmpty;
    if (toPaste.toLowerCase() === "true") {
      newVal = true;
    } else if (toPaste.toLowerCase() === "false") {
      newVal = false;
    } else if (toPaste.toLowerCase() === "indeterminate") {
      newVal = BooleanIndeterminate;
    }
    return newVal === cell.data ? void 0 : {
      ...cell,
      data: newVal
    };
  }
};

// src/data-editor/use-autoscroll.ts
var import_react13 = __toESM(require("react"), 1);
var maxPxPerMs = 2;
var msToFullSpeed = 1300;
function useAutoscroll(scrollDirection, scrollRef) {
  const speedScalar = import_react13.default.useRef(0);
  const [xDir, yDir] = scrollDirection != null ? scrollDirection : [0, 0];
  import_react13.default.useEffect(() => {
    if (xDir === 0 && yDir === 0) {
      speedScalar.current = 0;
      return;
    }
    let lastTime = 0;
    const scrollFn = (curTime) => {
      var _a;
      if (lastTime === 0) {
        lastTime = curTime;
      } else {
        const step = curTime - lastTime;
        speedScalar.current = Math.min(1, speedScalar.current + step / msToFullSpeed);
        const motion = speedScalar.current ** 1.618 * step * maxPxPerMs;
        (_a = scrollRef.current) == null ? void 0 : _a.scrollBy(xDir * motion, yDir * motion);
        lastTime = curTime;
      }
      t = window.requestAnimationFrame(scrollFn);
    };
    let t = window.requestAnimationFrame(scrollFn);
    return () => window.cancelAnimationFrame(t);
  }, [scrollRef, xDir, yDir]);
}

// src/data-grid/cells/bubble-cell.tsx
var React21 = __toESM(require("react"), 1);

// src/data-grid-overlay-editor/private/bubbles-overlay-editor.tsx
var React20 = __toESM(require("react"), 1);

// src/data-grid-overlay-editor/private/bubbles-overlay-editor-style.tsx
init_esm2();
var BubblesOverlayEditorStyle = /* @__PURE__ */ styled_default("div")({
  name: "BubblesOverlayEditorStyle",
  class: "b1bqsp5z"
});

// src/data-grid-overlay-editor/private/bubbles-overlay-editor.tsx
var BubblesOverlayEditor = (p) => {
  const { bubbles } = p;
  return /* @__PURE__ */ React20.createElement(BubblesOverlayEditorStyle, null, bubbles.map((b, i) => /* @__PURE__ */ React20.createElement("div", {
    key: i,
    className: "boe-bubble"
  }, b)), /* @__PURE__ */ React20.createElement("textarea", {
    className: "gdg-input",
    autoFocus: true
  }));
};
var bubbles_overlay_editor_default = BubblesOverlayEditor;

// src/data-grid/cells/bubble-cell.tsx
var bubbleCellRenderer = {
  getAccessibilityString: (c) => {
    var _a, _b;
    return (_b = (_a = c.data) == null ? void 0 : _a.toString()) != null ? _b : "";
  },
  kind: GridCellKind.Bubble,
  needsHover: false,
  useLabel: false,
  needsHoverPosition: false,
  measure: (ctx, cell, t) => cell.data.reduce((acc, data) => ctx.measureText(data).width + acc + 20, 0) + 2 * t.cellHorizontalPadding - 4,
  draw: (a) => drawBubbles(a, a.cell.data),
  provideEditor: () => (p) => {
    const { value } = p;
    return /* @__PURE__ */ React21.createElement(bubbles_overlay_editor_default, {
      bubbles: value.data
    });
  },
  onPaste: () => void 0
};

// src/data-grid/cells/drilldown-cell.tsx
var React23 = __toESM(require("react"), 1);

// src/data-grid-overlay-editor/private/drilldown-overlay-editor.tsx
var React22 = __toESM(require("react"), 1);
init_esm2();
var DrilldownOverlayEditorStyle = /* @__PURE__ */ styled_default("div")({
  name: "DrilldownOverlayEditorStyle",
  class: "df2kt4a"
});
var DrilldownOverlayEditor = (p) => {
  const {
    drilldowns
  } = p;
  return /* @__PURE__ */ React22.createElement(DrilldownOverlayEditorStyle, null, drilldowns.map((d, i) => /* @__PURE__ */ React22.createElement("div", {
    key: i,
    className: "doe-bubble"
  }, d.img !== void 0 && /* @__PURE__ */ React22.createElement("img", {
    src: d.img
  }), /* @__PURE__ */ React22.createElement("div", null, d.text))));
};
var drilldown_overlay_editor_default = DrilldownOverlayEditor;

// src/data-grid/cells/drilldown-cell.tsx
var drilldownCellRenderer = {
  getAccessibilityString: (c) => c.data.map((d) => d.text).join(", "),
  kind: GridCellKind.Drilldown,
  needsHover: false,
  useLabel: false,
  needsHoverPosition: false,
  measure: (ctx, cell, t) => cell.data.reduce((acc, data) => ctx.measureText(data.text).width + acc + 20 + (data.img !== void 0 ? 18 : 0), 0) + 2 * t.cellHorizontalPadding - 4,
  draw: (a) => drawDrilldownCell(a, a.cell.data),
  provideEditor: () => (p) => {
    const { value } = p;
    return /* @__PURE__ */ React23.createElement(drilldown_overlay_editor_default, {
      drilldowns: value.data
    });
  },
  onPaste: () => void 0
};

// src/data-grid/cells/image-cell.tsx
var React25 = __toESM(require("react"), 1);

// src/data-grid-overlay-editor/private/image-overlay-editor.tsx
var React24 = __toESM(require("react"), 1);

// src/data-grid-overlay-editor/private/image-overlay-editor-style.tsx
init_esm2();
var ImageOverlayEditorStyle = /* @__PURE__ */ styled_default("div")({
  name: "ImageOverlayEditorStyle",
  class: "i1eozt10"
});

// src/data-grid-overlay-editor/private/image-overlay-editor.tsx
var import_react_responsive_carousel = require("react-responsive-carousel");
var ImageOverlayEditor = (p) => {
  const { urls, canWrite, onEditClick, renderImage } = p;
  const filtered = urls.filter((u) => u !== "");
  if (filtered.length === 0) {
    return null;
  }
  const allowMove = filtered.length > 1;
  return /* @__PURE__ */ React24.createElement(ImageOverlayEditorStyle, {
    "data-testid": "GDG-default-image-overlay-editor"
  }, /* @__PURE__ */ React24.createElement(import_react_responsive_carousel.Carousel, {
    showArrows: allowMove,
    showThumbs: false,
    swipeable: allowMove,
    emulateTouch: allowMove,
    infiniteLoop: allowMove
  }, filtered.map((url) => {
    var _a;
    const innerContent = (_a = renderImage == null ? void 0 : renderImage(url)) != null ? _a : /* @__PURE__ */ React24.createElement("img", {
      draggable: false,
      src: url
    });
    return /* @__PURE__ */ React24.createElement("div", {
      className: "centering-container",
      key: url
    }, innerContent);
  })), canWrite && onEditClick && /* @__PURE__ */ React24.createElement("button", {
    className: "edit-icon",
    onClick: onEditClick
  }, /* @__PURE__ */ React24.createElement(EditPencil, null)));
};

// src/data-grid/cells/image-cell.tsx
var imageCellRenderer = {
  getAccessibilityString: (c) => c.data.join(", "),
  kind: GridCellKind.Image,
  needsHover: false,
  useLabel: false,
  needsHoverPosition: false,
  draw: (a) => {
    var _a;
    return drawImage(a, (_a = a.cell.displayData) != null ? _a : a.cell.data, a.cell.rounding, a.cell.contentAlign);
  },
  measure: (_ctx, cell) => cell.data.length * 50,
  onDelete: (c) => ({
    ...c,
    data: []
  }),
  provideEditor: () => (p) => {
    const { value, onFinishedEditing, imageEditorOverride } = p;
    const ImageEditor = imageEditorOverride != null ? imageEditorOverride : ImageOverlayEditor;
    return /* @__PURE__ */ React25.createElement(ImageEditor, {
      urls: value.data,
      canWrite: value.allowAdd,
      onCancel: onFinishedEditing,
      onChange: (newImage) => {
        onFinishedEditing({
          ...value,
          data: [newImage]
        });
      }
    });
  },
  onPaste: (toPaste, cell) => {
    toPaste = toPaste.trim();
    const fragments = toPaste.split(",");
    const uris = fragments.map((f) => {
      try {
        new URL(f);
        return f;
      } catch (e) {
        return void 0;
      }
    }).filter((x) => x !== void 0);
    if (uris.length === cell.data.length && uris.every((u, i) => u === cell.data[i]))
      return void 0;
    return {
      ...cell,
      data: uris
    };
  }
};

// src/data-grid/cells/loading-cell.tsx
var loadingCellRenderer = {
  getAccessibilityString: () => "",
  kind: GridCellKind.Loading,
  needsHover: false,
  useLabel: false,
  needsHoverPosition: false,
  measure: () => 120,
  draw: () => void 0,
  onPaste: () => void 0
};

// src/data-grid/cells/markdown-cell.tsx
var React29 = __toESM(require("react"), 1);

// src/data-grid-overlay-editor/private/markdown-overlay-editor.tsx
var React28 = __toESM(require("react"), 1);

// src/markdown-div/markdown-div.tsx
var import_react18 = __toESM(require("react"), 1);
var import_marked = require("marked");

// src/markdown-div/private/markdown-container.tsx
init_esm2();
var MarkdownContainer = /* @__PURE__ */ styled_default("div")({
  name: "MarkdownContainer",
  class: "mlbeo71"
});

// src/markdown-div/markdown-div.tsx
var MarkdownDiv = class extends import_react18.default.PureComponent {
  constructor() {
    super(...arguments);
    this.targetElement = null;
    this.containerRefHook = (element) => {
      this.targetElement = element;
      this.renderMarkdownIntoDiv();
    };
  }
  renderMarkdownIntoDiv() {
    const { targetElement, props } = this;
    if (targetElement === null)
      return;
    const { contents, createNode } = props;
    const innerHTML = (0, import_marked.marked)(contents);
    const childRange = document.createRange();
    childRange.selectNodeContents(targetElement);
    childRange.deleteContents();
    let newChild = createNode == null ? void 0 : createNode(innerHTML);
    if (newChild === void 0) {
      const childDoc = document.createElement("template");
      childDoc.innerHTML = innerHTML;
      newChild = childDoc.content;
    }
    targetElement.append(newChild);
    const tags = targetElement.getElementsByTagName("a");
    for (const tag of tags) {
      tag.target = "_blank";
      tag.rel = "noreferrer noopener";
    }
  }
  render() {
    this.renderMarkdownIntoDiv();
    return /* @__PURE__ */ import_react18.default.createElement(MarkdownContainer, {
      ref: this.containerRefHook
    });
  }
};

// src/growing-entry/growing-entry.tsx
var React27 = __toESM(require("react"), 1);

// src/growing-entry/growing-entry-style.tsx
init_esm2();
var InputBox = /* @__PURE__ */ styled_default("textarea")({
  name: "InputBox",
  class: "ijuk0po"
});
var ShadowBox = /* @__PURE__ */ styled_default("div")({
  name: "ShadowBox",
  class: "saq3p5l"
});
var GrowingEntryStyle = /* @__PURE__ */ styled_default("div")({
  name: "GrowingEntryStyle",
  class: "gf8vzix"
});

// src/growing-entry/growing-entry.tsx
var GrowingEntry = (props) => {
  const { placeholder, value, onKeyDown, highlight, altNewline, validatedSelection, ...rest } = props;
  const { onChange, className } = rest;
  const inputRef = React27.useRef(null);
  const useText = value != null ? value : "";
  assert(onChange !== void 0, "GrowingEntry must be a controlled input area");
  React27.useEffect(() => {
    const ta = inputRef.current;
    if (ta === null)
      return;
    if (ta.disabled)
      return;
    const length = useText.toString().length;
    ta.focus();
    ta.setSelectionRange(highlight ? 0 : length, length);
  }, []);
  React27.useLayoutEffect(() => {
    var _a;
    if (validatedSelection !== void 0) {
      const range2 = typeof validatedSelection === "number" ? [validatedSelection, null] : validatedSelection;
      (_a = inputRef.current) == null ? void 0 : _a.setSelectionRange(range2[0], range2[1]);
    }
  }, [validatedSelection]);
  const onKeyDownInner = React27.useCallback((e) => {
    if (e.key === "Enter" && e.shiftKey && altNewline === true) {
      return;
    }
    onKeyDown == null ? void 0 : onKeyDown(e);
  }, [altNewline, onKeyDown]);
  return /* @__PURE__ */ React27.createElement(GrowingEntryStyle, {
    className: "gdg-growing-entry"
  }, /* @__PURE__ */ React27.createElement(ShadowBox, {
    className
  }, useText + "\n"), /* @__PURE__ */ React27.createElement(InputBox, {
    ...rest,
    className: (className != null ? className : "") + " gdg-input",
    ref: inputRef,
    onKeyDown: onKeyDownInner,
    value: useText,
    placeholder,
    dir: "auto"
  }));
};

// src/data-grid-overlay-editor/private/markdown-overlay-editor-style.tsx
init_esm2();
var _exp12 = () => (p) => p.targetWidth;
var MarkdownOverlayEditorStyle = /* @__PURE__ */ styled_default("div")({
  name: "MarkdownOverlayEditorStyle",
  class: "mdwzdl1",
  vars: {
    "mdwzdl1-0": [_exp12(), "px"]
  }
});

// src/data-grid-overlay-editor/private/markdown-overlay-editor.tsx
var MarkdownOverlayEditor = (p) => {
  const { value, onChange, forceEditMode, createNode, targetRect, onFinish, validatedSelection } = p;
  const markdown = value.data;
  const readonly = value.readonly === true;
  const [editMode, setEditMode] = React28.useState(markdown === "" || forceEditMode);
  const onEditClick = React28.useCallback(() => {
    setEditMode((e) => !e);
  }, []);
  const addLeftPad = markdown ? "ml-6" : "";
  if (editMode) {
    return /* @__PURE__ */ React28.createElement(MarkdownOverlayEditorStyle, {
      targetWidth: targetRect.width - 20
    }, /* @__PURE__ */ React28.createElement(GrowingEntry, {
      autoFocus: true,
      highlight: false,
      validatedSelection,
      value: markdown,
      onKeyDown: (e) => {
        if (e.key === "Enter")
          e.stopPropagation();
      },
      onChange
    }), /* @__PURE__ */ React28.createElement("div", {
      className: `edit-icon checkmark-hover ${addLeftPad}`,
      onClick: () => onFinish(value)
    }, /* @__PURE__ */ React28.createElement(Checkmark, null)));
  }
  return /* @__PURE__ */ React28.createElement(MarkdownOverlayEditorStyle, {
    targetWidth: targetRect.width
  }, /* @__PURE__ */ React28.createElement(MarkdownDiv, {
    contents: markdown,
    createNode
  }), !readonly && /* @__PURE__ */ React28.createElement(React28.Fragment, null, /* @__PURE__ */ React28.createElement("div", {
    className: "spacer"
  }), /* @__PURE__ */ React28.createElement("div", {
    className: `edit-icon edit-hover ${addLeftPad}`,
    onClick: onEditClick
  }, /* @__PURE__ */ React28.createElement(EditPencil, null))), /* @__PURE__ */ React28.createElement("textarea", {
    className: "md-edit-textarea gdg-input",
    autoFocus: true
  }));
};

// src/data-grid/cells/markdown-cell.tsx
var markdownCellRenderer = {
  getAccessibilityString: (c) => {
    var _a, _b;
    return (_b = (_a = c.data) == null ? void 0 : _a.toString()) != null ? _b : "";
  },
  kind: GridCellKind.Markdown,
  needsHover: false,
  needsHoverPosition: false,
  drawPrep: prepTextCell,
  measure: (ctx, cell, t) => {
    const firstLine = cell.data.split("\n")[0];
    return ctx.measureText(firstLine).width + 2 * t.cellHorizontalPadding;
  },
  draw: (a) => drawTextCell(a, a.cell.data, a.cell.contentAlign),
  onDelete: (c) => ({
    ...c,
    data: ""
  }),
  provideEditor: () => (p) => {
    const { onChange, value, target, onFinishedEditing, markdownDivCreateNode, forceEditMode, validatedSelection } = p;
    return /* @__PURE__ */ React29.createElement(MarkdownOverlayEditor, {
      onFinish: onFinishedEditing,
      targetRect: target,
      value,
      validatedSelection,
      onChange: (e) => onChange({
        ...value,
        data: e.target.value
      }),
      forceEditMode,
      createNode: markdownDivCreateNode
    });
  },
  onPaste: (toPaste, cell) => toPaste === cell.data ? void 0 : { ...cell, data: toPaste }
};

// src/data-grid/cells/marker-cell.tsx
var markerCellRenderer = {
  getAccessibilityString: (c) => c.row.toString(),
  kind: InnerGridCellKind.Marker,
  needsHover: true,
  needsHoverPosition: false,
  drawPrep: prepMarkerRowCell,
  measure: () => 44,
  draw: (a) => drawMarkerRowCell(a, a.cell.row, a.cell.checked, a.cell.markerKind, a.cell.drawHandle),
  onClick: (e) => {
    const { bounds, cell, posX: x, posY: y } = e;
    const { width, height } = bounds;
    const centerX = cell.drawHandle ? 7 + (width - 7) / 2 : width / 2;
    const centerY = height / 2;
    if (Math.abs(x - centerX) <= 10 && Math.abs(y - centerY) <= 10) {
      return {
        ...cell,
        checked: !cell.checked
      };
    }
    return void 0;
  },
  onPaste: () => void 0
};

// src/data-grid/cells/new-row-cell.tsx
var newRowCellRenderer = {
  getAccessibilityString: () => "",
  kind: InnerGridCellKind.NewRow,
  needsHover: true,
  needsHoverPosition: false,
  measure: () => 200,
  draw: (a) => drawNewRowCell(a, a.cell.hint, a.cell.icon),
  onPaste: () => void 0
};

// src/data-grid/cells/number-cell.tsx
var React31 = __toESM(require("react"), 1);
var NumberOverlayEditor2 = React31.lazy(async () => await Promise.resolve().then(() => (init_number_overlay_editor(), number_overlay_editor_exports)));
var numberCellRenderer = {
  getAccessibilityString: (c) => {
    var _a, _b;
    return (_b = (_a = c.data) == null ? void 0 : _a.toString()) != null ? _b : "";
  },
  kind: GridCellKind.Number,
  needsHover: false,
  needsHoverPosition: false,
  useLabel: true,
  drawPrep: prepTextCell,
  draw: (a) => drawTextCell(a, a.cell.displayData, a.cell.contentAlign),
  measure: (ctx, cell) => ctx.measureText(cell.displayData).width + 16,
  onDelete: (c) => ({
    ...c,
    data: void 0
  }),
  provideEditor: () => (p) => {
    const { isHighlighted, onChange, value, validatedSelection } = p;
    return /* @__PURE__ */ React31.createElement(React31.Suspense, {
      fallback: null
    }, /* @__PURE__ */ React31.createElement(NumberOverlayEditor2, {
      highlight: isHighlighted,
      disabled: value.readonly === true,
      value: value.data,
      fixedDecimals: value.fixedDecimals,
      allowNegative: value.allowNegative,
      thousandSeparator: value.thousandSeparator,
      decimalSeparator: value.decimalSeparator,
      validatedSelection,
      onChange: (x) => {
        var _a;
        return onChange({
          ...value,
          data: Number.isNaN((_a = x.floatValue) != null ? _a : 0) ? 0 : x.floatValue
        });
      }
    }));
  },
  onPaste: (toPaste, cell) => {
    const newNumber = Number.parseFloat(toPaste);
    if (Number.isNaN(newNumber) || cell.data === newNumber)
      return void 0;
    return { ...cell, data: newNumber };
  }
};

// src/data-grid/cells/protected-cell.tsx
var protectedCellRenderer = {
  getAccessibilityString: () => "",
  measure: () => 108,
  kind: GridCellKind.Protected,
  needsHover: false,
  needsHoverPosition: false,
  draw: drawProtectedCell,
  onPaste: () => void 0
};

// src/data-grid/cells/row-id-cell.tsx
var import_react22 = __toESM(require("react"), 1);
var rowIDCellRenderer = {
  getAccessibilityString: (c) => {
    var _a, _b;
    return (_b = (_a = c.data) == null ? void 0 : _a.toString()) != null ? _b : "";
  },
  kind: GridCellKind.RowID,
  needsHover: false,
  needsHoverPosition: false,
  drawPrep: (a, b) => prepTextCell(a, b, a.theme.textLight),
  draw: (a) => drawTextCell(a, a.cell.data, a.cell.contentAlign),
  measure: (ctx, cell) => ctx.measureText(cell.data).width + 16,
  provideEditor: () => (p) => {
    const { isHighlighted, onChange, value, validatedSelection } = p;
    return /* @__PURE__ */ import_react22.default.createElement(GrowingEntry, {
      highlight: isHighlighted,
      autoFocus: value.readonly !== true,
      disabled: value.readonly !== false,
      value: value.data,
      validatedSelection,
      onChange: (e) => onChange({
        ...value,
        data: e.target.value
      })
    });
  },
  onPaste: () => void 0
};

// src/data-grid/cells/text-cell.tsx
var React33 = __toESM(require("react"), 1);
var textCellRenderer = {
  getAccessibilityString: (c) => {
    var _a, _b;
    return (_b = (_a = c.data) == null ? void 0 : _a.toString()) != null ? _b : "";
  },
  kind: GridCellKind.Text,
  needsHover: false,
  needsHoverPosition: false,
  drawPrep: prepTextCell,
  useLabel: true,
  draw: (a) => (drawTextCell(a, a.cell.displayData, a.cell.contentAlign, a.cell.allowWrapping, a.hyperWrapping), true),
  measure: (ctx, cell, t) => {
    const lines = cell.displayData.split("\n").slice(0, cell.allowWrapping === true ? void 0 : 1);
    return Math.max(...lines.map((l) => ctx.measureText(l).width + 2 * t.cellHorizontalPadding));
  },
  onDelete: (c) => ({
    ...c,
    data: ""
  }),
  provideEditor: () => (p) => {
    const { isHighlighted, onChange, value, validatedSelection } = p;
    return /* @__PURE__ */ React33.createElement(GrowingEntry, {
      highlight: isHighlighted,
      autoFocus: value.readonly !== true,
      disabled: value.readonly === true,
      altNewline: true,
      value: value.data,
      validatedSelection,
      onChange: (e) => onChange({
        ...value,
        data: e.target.value
      })
    });
  },
  onPaste: (toPaste, cell) => toPaste === cell.data ? void 0 : { ...cell, data: toPaste }
};

// src/data-grid/cells/uri-cell.tsx
var React35 = __toESM(require("react"), 1);

// src/data-grid-overlay-editor/private/uri-overlay-editor.tsx
var React34 = __toESM(require("react"), 1);

// src/data-grid-overlay-editor/private/uri-overlay-editor-style.tsx
init_esm2();
var UriOverlayEditorStyle = /* @__PURE__ */ styled_default("div")({
  name: "UriOverlayEditorStyle",
  class: "uf0sjo8"
});

// src/data-grid-overlay-editor/private/uri-overlay-editor.tsx
var UriOverlayEditor = (p) => {
  const { uri, onChange, forceEditMode, readonly, validatedSelection, preview } = p;
  const [editMode, setEditMode] = React34.useState(uri === "" || forceEditMode);
  const onEditClick = React34.useCallback(() => {
    setEditMode(true);
  }, []);
  if (editMode) {
    return /* @__PURE__ */ React34.createElement(GrowingEntry, {
      validatedSelection,
      highlight: true,
      autoFocus: true,
      value: uri,
      onChange
    });
  }
  return /* @__PURE__ */ React34.createElement(UriOverlayEditorStyle, null, /* @__PURE__ */ React34.createElement("a", {
    className: "link-area",
    href: uri,
    target: "_blank",
    rel: "noopener noreferrer"
  }, preview), !readonly && /* @__PURE__ */ React34.createElement("div", {
    className: "edit-icon",
    onClick: onEditClick
  }, /* @__PURE__ */ React34.createElement(EditPencil, null)), /* @__PURE__ */ React34.createElement("textarea", {
    className: "gdg-input",
    autoFocus: true
  }));
};
var uri_overlay_editor_default = UriOverlayEditor;

// src/data-grid/cells/uri-cell.tsx
var uriCellRenderer = {
  getAccessibilityString: (c) => {
    var _a, _b;
    return (_b = (_a = c.data) == null ? void 0 : _a.toString()) != null ? _b : "";
  },
  kind: GridCellKind.Uri,
  needsHover: false,
  needsHoverPosition: false,
  useLabel: true,
  drawPrep: prepTextCell,
  draw: (a) => drawTextCell(a, a.cell.data, a.cell.contentAlign),
  measure: (ctx, cell, theme) => ctx.measureText(cell.data).width + theme.cellHorizontalPadding * 2,
  onDelete: (c) => ({
    ...c,
    data: ""
  }),
  provideEditor: () => (p) => {
    var _a;
    const { onChange, value, forceEditMode, validatedSelection } = p;
    return /* @__PURE__ */ React35.createElement(uri_overlay_editor_default, {
      forceEditMode,
      uri: value.data,
      preview: (_a = value.displayData) != null ? _a : value.data,
      validatedSelection,
      readonly: value.readonly === true,
      onChange: (e) => onChange({
        ...value,
        data: e.target.value
      })
    });
  },
  onPaste: (toPaste, cell) => toPaste === cell.data ? void 0 : { ...cell, data: toPaste }
};

// src/data-grid/cells/index.ts
var CellRenderers = {
  [InnerGridCellKind.Marker]: markerCellRenderer,
  [InnerGridCellKind.NewRow]: newRowCellRenderer,
  [GridCellKind.Boolean]: booleanCellRenderer,
  [GridCellKind.Bubble]: bubbleCellRenderer,
  [GridCellKind.Drilldown]: drilldownCellRenderer,
  [GridCellKind.Image]: imageCellRenderer,
  [GridCellKind.Loading]: loadingCellRenderer,
  [GridCellKind.Markdown]: markdownCellRenderer,
  [GridCellKind.Number]: numberCellRenderer,
  [GridCellKind.Protected]: protectedCellRenderer,
  [GridCellKind.RowID]: rowIDCellRenderer,
  [GridCellKind.Text]: textCellRenderer,
  [GridCellKind.Uri]: uriCellRenderer
};

// src/data-editor/data-editor.tsx
var idCounter = 0;
function getSpanStops(cells) {
  return (0, import_uniq.default)((0, import_flatten.default)((0, import_flatten.default)(cells).filter((c) => c.span !== void 0).map((c) => {
    var _a, _b, _c, _d;
    return (0, import_range2.default)(((_b = (_a = c.span) == null ? void 0 : _a[0]) != null ? _b : 0) + 1, ((_d = (_c = c.span) == null ? void 0 : _c[1]) != null ? _d : 0) + 1);
  })));
}
function shiftSelection(input, offset) {
  if (input === void 0 || offset === 0 || input.columns.length === 0 && input.current === void 0)
    return input;
  return {
    current: input.current === void 0 ? void 0 : {
      cell: [input.current.cell[0] + offset, input.current.cell[1]],
      range: {
        ...input.current.range,
        x: input.current.range.x + offset
      },
      rangeStack: input.current.rangeStack.map((r) => ({
        ...r,
        x: r.x + offset
      }))
    },
    rows: input.rows,
    columns: input.columns.offset(offset)
  };
}
var keybindingDefaults = {
  selectAll: true,
  selectRow: true,
  selectColumn: true,
  downFill: false,
  rightFill: false,
  pageUp: false,
  pageDown: false,
  clear: true,
  copy: true,
  paste: true,
  search: false,
  first: true,
  last: true
};
var loadingCell2 = {
  kind: GridCellKind.Loading,
  allowOverlay: false
};
var emptyGridSelection = {
  columns: CompactSelection.empty(),
  rows: CompactSelection.empty(),
  current: void 0
};
var DataEditorImpl = (p, forwardedRef) => {
  var _a, _b, _c, _d, _e;
  const [gridSelectionInner, setGridSelectionInner] = React36.useState(emptyGridSelection);
  const [overlay, setOverlay] = React36.useState();
  const searchInputRef = React36.useRef(null);
  const canvasRef = React36.useRef(null);
  const [mouseState, setMouseState] = React36.useState();
  const scrollRef = React36.useRef(null);
  const lastSent = React36.useRef();
  const {
    rowMarkers = "none",
    rowMarkerWidth: rowMarkerWidthRaw,
    imageEditorOverride,
    getRowThemeOverride,
    markdownDivCreateNode,
    width,
    height,
    columns: columnsIn,
    rows,
    getCellContent,
    onCellClicked,
    onCellActivated,
    onFinishedEditing,
    coercePasteValue,
    drawHeader: drawHeaderIn,
    onHeaderClicked,
    spanRangeBehavior = "default",
    onGroupHeaderClicked,
    onCellContextMenu,
    className,
    onHeaderContextMenu,
    getCellsForSelection: getCellsForSelectionIn,
    onGroupHeaderContextMenu,
    onGroupHeaderRenamed,
    onCellEdited,
    onCellsEdited,
    onKeyDown: onKeyDownIn,
    onKeyUp: onKeyUpIn,
    keybindings: keybindingsIn,
    onRowAppended,
    onColumnMoved,
    validateCell: validateCellIn,
    highlightRegions: highlightRegionsIn,
    drawCell: drawCell2,
    rangeSelect = "rect",
    columnSelect = "multi",
    rowSelect = "multi",
    rangeSelectionBlending = "exclusive",
    columnSelectionBlending = "exclusive",
    rowSelectionBlending = "exclusive",
    onDelete: onDeleteIn,
    onDragStart,
    onMouseMove,
    onPaste,
    copyHeaders = false,
    freezeColumns = 0,
    rowSelectionMode = "auto",
    rowMarkerStartIndex = 1,
    rowMarkerTheme,
    onHeaderMenuClick,
    getGroupDetails,
    onSearchClose: onSearchCloseIn,
    onItemHovered,
    onSelectionCleared,
    showSearch: showSearchIn,
    onVisibleRegionChanged,
    gridSelection: gridSelectionOuter,
    onGridSelectionChange,
    minColumnWidth: minColumnWidthIn = 50,
    maxColumnWidth: maxColumnWidthIn = 500,
    maxColumnAutoWidth: maxColumnAutoWidthIn,
    provideEditor,
    trailingRowOptions,
    scrollOffsetX,
    scrollOffsetY,
    verticalBorder,
    onDragOverCell,
    onDrop,
    onColumnResize: onColumnResizeIn,
    onColumnResizeEnd: onColumnResizeEndIn,
    onColumnResizeStart: onColumnResizeStartIn,
    customRenderers: additionalRenderers,
    fillHandle,
    drawFocusRing: drawFocusRing2,
    experimental,
    fixedShadowX,
    fixedShadowY,
    headerIcons,
    imageWindowLoader,
    initialSize,
    isDraggable,
    onDragLeave,
    onRowMoved,
    overscrollX: overscrollXIn,
    overscrollY: overscrollYIn,
    preventDiagonalScrolling,
    rightElement,
    rightElementProps,
    showMinimap,
    smoothScrollX,
    smoothScrollY,
    scrollToEnd,
    scaleToRem = false,
    rowHeight: rowHeightIn = 34,
    headerHeight: headerHeightIn = 36,
    groupHeaderHeight: groupHeaderHeightIn = headerHeightIn,
    theme: themeIn
  } = p;
  const minColumnWidth = Math.max(minColumnWidthIn, 20);
  const maxColumnWidth = Math.max(maxColumnWidthIn, minColumnWidth);
  const maxColumnAutoWidth = Math.max(maxColumnAutoWidthIn != null ? maxColumnAutoWidthIn : maxColumnWidth, minColumnWidth);
  const docStyle = React36.useMemo(() => {
    if (typeof window === "undefined")
      return { fontSize: "16px" };
    return window.getComputedStyle(document.documentElement);
  }, []);
  const fontSizeStr = docStyle.fontSize;
  const remSize = React36.useMemo(() => Number.parseFloat(fontSizeStr), [fontSizeStr]);
  const [rowHeight, headerHeight, groupHeaderHeight, theme, overscrollX, overscrollY] = React36.useMemo(() => {
    var _a2, _b2, _c2;
    if (!scaleToRem || remSize === 16)
      return [rowHeightIn, headerHeightIn, groupHeaderHeightIn, themeIn, overscrollXIn, overscrollYIn];
    const scaler = remSize / 16;
    const rh = rowHeightIn;
    const bt = getDataEditorTheme();
    return [
      typeof rh === "number" ? rh * scaler : (n) => Math.ceil(rh(n) * scaler),
      Math.ceil(headerHeightIn * scaler),
      Math.ceil(groupHeaderHeightIn * scaler),
      {
        ...themeIn,
        headerIconSize: ((_a2 = themeIn == null ? void 0 : themeIn.headerIconSize) != null ? _a2 : bt.headerIconSize) * scaler,
        cellHorizontalPadding: ((_b2 = themeIn == null ? void 0 : themeIn.cellHorizontalPadding) != null ? _b2 : bt.cellHorizontalPadding) * scaler,
        cellVerticalPadding: ((_c2 = themeIn == null ? void 0 : themeIn.cellVerticalPadding) != null ? _c2 : bt.cellVerticalPadding) * scaler
      },
      Math.ceil((overscrollXIn != null ? overscrollXIn : 0) * scaler),
      Math.ceil((overscrollYIn != null ? overscrollYIn : 0) * scaler)
    ];
  }, [groupHeaderHeightIn, headerHeightIn, overscrollXIn, overscrollYIn, remSize, rowHeightIn, scaleToRem, themeIn]);
  const keybindings = React36.useMemo(() => {
    return keybindingsIn === void 0 ? keybindingDefaults : {
      ...keybindingDefaults,
      ...keybindingsIn
    };
  }, [keybindingsIn]);
  const rowMarkerWidth = rowMarkerWidthRaw != null ? rowMarkerWidthRaw : rows > 1e4 ? 48 : rows > 1e3 ? 44 : rows > 100 ? 36 : 32;
  const hasRowMarkers = rowMarkers !== "none";
  const rowMarkerOffset = hasRowMarkers ? 1 : 0;
  const showTrailingBlankRow = onRowAppended !== void 0;
  const lastRowSticky = (trailingRowOptions == null ? void 0 : trailingRowOptions.sticky) === true;
  const [showSearchInner, setShowSearchInner] = React36.useState(false);
  const showSearch = showSearchIn != null ? showSearchIn : showSearchInner;
  const onSearchClose = React36.useCallback(() => {
    if (onSearchCloseIn !== void 0) {
      onSearchCloseIn();
    } else {
      setShowSearchInner(false);
    }
  }, [onSearchCloseIn]);
  const gridSelectionOuterMangled = React36.useMemo(() => {
    return gridSelectionOuter === void 0 ? void 0 : shiftSelection(gridSelectionOuter, rowMarkerOffset);
  }, [gridSelectionOuter, rowMarkerOffset]);
  const gridSelection = gridSelectionOuterMangled != null ? gridSelectionOuterMangled : gridSelectionInner;
  const abortControllerRef = React36.useRef(new AbortController());
  React36.useEffect(() => {
    return () => {
      abortControllerRef == null ? void 0 : abortControllerRef.current.abort();
    };
  }, []);
  const [getCellsForSelection, getCellsForSeletionDirect] = useCellsForSelection(getCellsForSelectionIn, getCellContent, rowMarkerOffset, abortControllerRef.current, rows);
  const validateCell = React36.useCallback((cell, newValue, prevValue) => {
    if (validateCellIn === void 0)
      return true;
    const item = [cell[0] - rowMarkerOffset, cell[1]];
    return validateCellIn == null ? void 0 : validateCellIn(item, newValue, prevValue);
  }, [rowMarkerOffset, validateCellIn]);
  const expectedExternalGridSelection = React36.useRef(gridSelectionOuter);
  const setGridSelection = React36.useCallback((newVal, expand) => {
    if (expand) {
      newVal = expandSelection(newVal, getCellsForSelection, rowMarkerOffset, spanRangeBehavior, abortControllerRef.current);
    }
    if (onGridSelectionChange !== void 0) {
      expectedExternalGridSelection.current = shiftSelection(newVal, -rowMarkerOffset);
      onGridSelectionChange(expectedExternalGridSelection.current);
    } else {
      setGridSelectionInner(newVal);
    }
  }, [onGridSelectionChange, getCellsForSelection, rowMarkerOffset, spanRangeBehavior]);
  const onColumnResize = whenDefined(onColumnResizeIn, React36.useCallback((_, w, ind, wg) => {
    onColumnResizeIn == null ? void 0 : onColumnResizeIn(columnsIn[ind - rowMarkerOffset], w, ind - rowMarkerOffset, wg);
  }, [onColumnResizeIn, rowMarkerOffset, columnsIn]));
  const onColumnResizeEnd = whenDefined(onColumnResizeEndIn, React36.useCallback((_, w, ind, wg) => {
    onColumnResizeEndIn == null ? void 0 : onColumnResizeEndIn(columnsIn[ind - rowMarkerOffset], w, ind - rowMarkerOffset, wg);
  }, [onColumnResizeEndIn, rowMarkerOffset, columnsIn]));
  const onColumnResizeStart = whenDefined(onColumnResizeStartIn, React36.useCallback((_, w, ind, wg) => {
    onColumnResizeStartIn == null ? void 0 : onColumnResizeStartIn(columnsIn[ind - rowMarkerOffset], w, ind - rowMarkerOffset, wg);
  }, [onColumnResizeStartIn, rowMarkerOffset, columnsIn]));
  const drawHeader2 = whenDefined(drawHeaderIn, React36.useCallback((args) => {
    var _a2;
    return (_a2 = drawHeaderIn == null ? void 0 : drawHeaderIn({ ...args, columnIndex: args.columnIndex - rowMarkerOffset })) != null ? _a2 : false;
  }, [drawHeaderIn, rowMarkerOffset]));
  const onDelete = React36.useCallback((sel) => {
    if (onDeleteIn !== void 0) {
      const result = onDeleteIn(shiftSelection(sel, -rowMarkerOffset));
      if (typeof result === "boolean") {
        return result;
      }
      return shiftSelection(result, rowMarkerOffset);
    }
    return true;
  }, [onDeleteIn, rowMarkerOffset]);
  const [setCurrent, setSelectedRows, setSelectedColumns] = useSelectionBehavior(gridSelection, setGridSelection, rangeSelectionBlending, columnSelectionBlending, rowSelectionBlending, rangeSelect);
  const mergedTheme = React36.useMemo(() => {
    return { ...getDataEditorTheme(), ...theme };
  }, [theme]);
  const [clientSize, setClientSize] = React36.useState([10, 10, 0]);
  const getCellRenderer = React36.useCallback((cell) => {
    if (cell.kind !== GridCellKind.Custom) {
      return CellRenderers[cell.kind];
    }
    return additionalRenderers == null ? void 0 : additionalRenderers.find((x) => x.isMatch(cell));
  }, [additionalRenderers]);
  const columns = useColumnSizer(columnsIn, rows, getCellsForSeletionDirect, clientSize[0] - (rowMarkerOffset === 0 ? 0 : rowMarkerWidth) - clientSize[2], minColumnWidth, maxColumnAutoWidth, mergedTheme, getCellRenderer, abortControllerRef.current);
  const enableGroups = React36.useMemo(() => {
    return columns.some((c) => c.group !== void 0);
  }, [columns]);
  const totalHeaderHeight = enableGroups ? headerHeight + groupHeaderHeight : headerHeight;
  const numSelectedRows = gridSelection.rows.length;
  const rowMarkerHeader = rowMarkers === "none" ? "" : numSelectedRows === 0 ? headerCellUnheckedMarker : numSelectedRows === rows ? headerCellCheckedMarker : headerCellIndeterminateMarker;
  const mangledCols = React36.useMemo(() => {
    if (rowMarkers === "none")
      return columns;
    return [
      {
        title: rowMarkerHeader,
        width: rowMarkerWidth,
        icon: void 0,
        hasMenu: false,
        style: "normal",
        themeOverride: rowMarkerTheme
      },
      ...columns
    ];
  }, [columns, rowMarkerWidth, rowMarkers, rowMarkerHeader, rowMarkerTheme]);
  const [visibleRegionY, visibleRegionTy] = React36.useMemo(() => {
    return [
      scrollOffsetY !== void 0 && typeof rowHeight === "number" ? Math.floor(scrollOffsetY / rowHeight) : 0,
      scrollOffsetY !== void 0 && typeof rowHeight === "number" ? -(scrollOffsetY % rowHeight) : 0
    ];
  }, [scrollOffsetY, rowHeight]);
  const visibleRegionRef = React36.useRef({
    height: 1,
    width: 1,
    x: 0,
    y: 0
  });
  const visibleRegionInput = React36.useMemo(() => {
    var _a2, _b2;
    return {
      x: visibleRegionRef.current.x,
      y: visibleRegionY,
      width: (_a2 = visibleRegionRef.current.width) != null ? _a2 : 1,
      height: (_b2 = visibleRegionRef.current.height) != null ? _b2 : 1,
      ty: visibleRegionTy
    };
  }, [visibleRegionTy, visibleRegionY]);
  const hasJustScrolled = React36.useRef(false);
  const [visibleRegion, setVisibleRegion, empty2] = useStateWithReactiveInput(visibleRegionInput);
  const vScrollReady = ((_a = visibleRegion.height) != null ? _a : 1) > 1;
  React36.useLayoutEffect(() => {
    if (scrollOffsetY !== void 0 && scrollRef.current !== null && vScrollReady) {
      if (scrollRef.current.scrollTop === scrollOffsetY)
        return;
      scrollRef.current.scrollTop = scrollOffsetY;
      if (scrollRef.current.scrollTop !== scrollOffsetY) {
        empty2();
      }
      hasJustScrolled.current = true;
    }
  }, [scrollOffsetY, vScrollReady, empty2]);
  const hScrollReady = ((_b = visibleRegion.width) != null ? _b : 1) > 1;
  React36.useLayoutEffect(() => {
    if (scrollOffsetX !== void 0 && scrollRef.current !== null && hScrollReady) {
      if (scrollRef.current.scrollLeft === scrollOffsetX)
        return;
      scrollRef.current.scrollLeft = scrollOffsetX;
      if (scrollRef.current.scrollLeft !== scrollOffsetX) {
        empty2();
      }
      hasJustScrolled.current = true;
    }
  }, [scrollOffsetX, hScrollReady, empty2]);
  const cellXOffset = visibleRegion.x + rowMarkerOffset;
  const cellYOffset = visibleRegion.y;
  const gridRef = React36.useRef(null);
  const focus = React36.useCallback((immediate) => {
    var _a2;
    if (immediate === true) {
      (_a2 = gridRef.current) == null ? void 0 : _a2.focus();
    } else {
      window.requestAnimationFrame(() => {
        var _a3;
        (_a3 = gridRef.current) == null ? void 0 : _a3.focus();
      });
    }
  }, []);
  const mangledRows = showTrailingBlankRow ? rows + 1 : rows;
  const mangledOnCellsEdited = React36.useCallback((items) => {
    const mangledItems = rowMarkerOffset === 0 ? items : items.map((x) => ({
      ...x,
      location: [x.location[0] - rowMarkerOffset, x.location[1]]
    }));
    const r = onCellsEdited == null ? void 0 : onCellsEdited(mangledItems);
    if (r !== true) {
      for (const i of mangledItems)
        onCellEdited == null ? void 0 : onCellEdited(i.location, i.value);
    }
    return r;
  }, [onCellEdited, onCellsEdited, rowMarkerOffset]);
  const highlightRegions = React36.useMemo(() => {
    if (highlightRegionsIn === void 0)
      return void 0;
    if (rowMarkerOffset === 0)
      return highlightRegionsIn;
    return highlightRegionsIn.map((r) => {
      const maxWidth = mangledCols.length - r.range.x - rowMarkerOffset;
      if (maxWidth <= 0)
        return void 0;
      return {
        color: r.color,
        range: {
          ...r.range,
          x: r.range.x + rowMarkerOffset,
          width: Math.min(maxWidth, r.range.width)
        },
        style: r.style
      };
    }).filter((x) => x !== void 0);
  }, [highlightRegionsIn, mangledCols.length, rowMarkerOffset]);
  const mangledColsRef = React36.useRef(mangledCols);
  mangledColsRef.current = mangledCols;
  const getMangledCellContent = React36.useCallback(([col, row], forceStrict = false) => {
    var _a2, _b2, _c2, _d2, _e2, _f, _g, _h, _i, _j;
    const isTrailing = showTrailingBlankRow && row === mangledRows - 1;
    const isRowMarkerCol = col === 0 && hasRowMarkers;
    if (isRowMarkerCol) {
      if (isTrailing) {
        return loadingCell2;
      }
      return {
        kind: InnerGridCellKind.Marker,
        allowOverlay: false,
        checked: (gridSelection == null ? void 0 : gridSelection.rows.hasIndex(row)) === true,
        markerKind: rowMarkers === "clickable-number" ? "number" : rowMarkers,
        row: rowMarkerStartIndex + row,
        drawHandle: onRowMoved !== void 0
      };
    } else if (isTrailing) {
      const isFirst = col === rowMarkerOffset;
      const maybeFirstColumnHint = isFirst ? (_a2 = trailingRowOptions == null ? void 0 : trailingRowOptions.hint) != null ? _a2 : "" : "";
      const c = mangledColsRef.current[col];
      if (((_b2 = c == null ? void 0 : c.trailingRowOptions) == null ? void 0 : _b2.disabled) === true) {
        return loadingCell2;
      } else {
        const hint = (_d2 = (_c2 = c == null ? void 0 : c.trailingRowOptions) == null ? void 0 : _c2.hint) != null ? _d2 : maybeFirstColumnHint;
        const icon = (_f = (_e2 = c == null ? void 0 : c.trailingRowOptions) == null ? void 0 : _e2.addIcon) != null ? _f : trailingRowOptions == null ? void 0 : trailingRowOptions.addIcon;
        return {
          kind: InnerGridCellKind.NewRow,
          hint,
          allowOverlay: false,
          icon
        };
      }
    } else {
      const outerCol = col - rowMarkerOffset;
      if (forceStrict || (experimental == null ? void 0 : experimental.strict) === true) {
        const vr = visibleRegionRef.current;
        const isOutsideMainArea = vr.x > outerCol || outerCol > vr.x + vr.width || vr.y > row || row > vr.y + vr.height;
        const isSelected = outerCol === ((_h = (_g = vr.extras) == null ? void 0 : _g.selected) == null ? void 0 : _h[0]) && row === ((_i = vr.extras) == null ? void 0 : _i.selected[1]);
        const isOutsideFreezeArea = ((_j = vr.extras) == null ? void 0 : _j.freezeRegion) === void 0 || vr.extras.freezeRegion.x > outerCol || outerCol > vr.extras.freezeRegion.x + vr.extras.freezeRegion.width || vr.extras.freezeRegion.y > row || row > vr.extras.freezeRegion.y + vr.extras.freezeRegion.height;
        if (isOutsideMainArea && !isSelected && isOutsideFreezeArea) {
          return {
            kind: GridCellKind.Loading,
            allowOverlay: false
          };
        }
      }
      let result = getCellContent([outerCol, row]);
      if (rowMarkerOffset !== 0 && result.span !== void 0) {
        result = {
          ...result,
          span: [result.span[0] + rowMarkerOffset, result.span[1] + rowMarkerOffset]
        };
      }
      return result;
    }
  }, [
    showTrailingBlankRow,
    mangledRows,
    hasRowMarkers,
    gridSelection == null ? void 0 : gridSelection.rows,
    onRowMoved,
    rowMarkers,
    rowMarkerOffset,
    trailingRowOptions == null ? void 0 : trailingRowOptions.hint,
    trailingRowOptions == null ? void 0 : trailingRowOptions.addIcon,
    experimental == null ? void 0 : experimental.strict,
    getCellContent,
    rowMarkerStartIndex
  ]);
  const mangledGetGroupDetails = React36.useCallback((group) => {
    var _a2, _b2;
    let result = (_a2 = getGroupDetails == null ? void 0 : getGroupDetails(group)) != null ? _a2 : { name: group };
    if (onGroupHeaderRenamed !== void 0 && group !== "") {
      result = {
        icon: result.icon,
        name: result.name,
        overrideTheme: result.overrideTheme,
        actions: [
          ...(_b2 = result.actions) != null ? _b2 : [],
          {
            title: "Rename",
            icon: "renameIcon",
            onClick: (e) => setRenameGroup({
              group: result.name,
              bounds: e.bounds
            })
          }
        ]
      };
    }
    return result;
  }, [getGroupDetails, onGroupHeaderRenamed]);
  const setOverlaySimple = React36.useCallback((val) => {
    var _a2;
    const [col, row] = val.cell;
    const column = mangledCols[col];
    const groupTheme = (column == null ? void 0 : column.group) !== void 0 ? (_a2 = mangledGetGroupDetails(column.group)) == null ? void 0 : _a2.overrideTheme : void 0;
    const colTheme = column == null ? void 0 : column.themeOverride;
    const rowTheme = getRowThemeOverride == null ? void 0 : getRowThemeOverride(row);
    setOverlay({
      ...val,
      theme: { ...mergedTheme, ...groupTheme, ...colTheme, ...rowTheme, ...val.content.themeOverride }
    });
  }, [getRowThemeOverride, mangledCols, mangledGetGroupDetails, mergedTheme]);
  const reselect = React36.useCallback((bounds, fromKeyboard, initialValue) => {
    var _a2;
    if (gridSelection.current === void 0)
      return;
    const [col, row] = gridSelection.current.cell;
    const c = getMangledCellContent([col, row]);
    if (c.kind !== GridCellKind.Boolean && c.allowOverlay) {
      let content = c;
      if (initialValue !== void 0) {
        switch (content.kind) {
          case GridCellKind.Number: {
            const d = maybe(() => initialValue === "-" ? -0 : Number.parseFloat(initialValue), 0);
            content = {
              ...content,
              data: Number.isNaN(d) ? 0 : d
            };
            break;
          }
          case GridCellKind.Text:
          case GridCellKind.Markdown:
          case GridCellKind.Uri:
            content = {
              ...content,
              data: initialValue
            };
            break;
        }
      }
      setOverlaySimple({
        target: bounds,
        content,
        initialValue,
        cell: [col, row],
        highlight: initialValue === void 0,
        forceEditMode: initialValue !== void 0
      });
    } else if (c.kind === GridCellKind.Boolean && fromKeyboard && c.readonly !== true) {
      mangledOnCellsEdited([
        {
          location: gridSelection.current.cell,
          value: {
            ...c,
            data: toggleBoolean(c.data)
          }
        }
      ]);
      (_a2 = gridRef.current) == null ? void 0 : _a2.damage([{ cell: gridSelection.current.cell }]);
    }
  }, [getMangledCellContent, gridSelection, mangledOnCellsEdited, setOverlaySimple]);
  const focusOnRowFromTrailingBlankRow = React36.useCallback((col, row) => {
    var _a2;
    const bounds = (_a2 = gridRef.current) == null ? void 0 : _a2.getBounds(col, row);
    if (bounds === void 0 || scrollRef.current === null) {
      return;
    }
    const content = getMangledCellContent([col, row]);
    if (!content.allowOverlay) {
      return;
    }
    setOverlaySimple({
      target: bounds,
      content,
      initialValue: void 0,
      highlight: true,
      cell: [col, row],
      forceEditMode: true
    });
  }, [getMangledCellContent, setOverlaySimple]);
  const scrollTo = React36.useCallback((col, row, dir = "both", paddingX = 0, paddingY = 0, options = void 0) => {
    var _a2;
    if (scrollRef.current !== null) {
      const grid = gridRef.current;
      const canvas = canvasRef.current;
      const trueCol = typeof col !== "number" ? col.unit === "cell" ? col.amount : void 0 : col;
      const trueRow = typeof row !== "number" ? row.unit === "cell" ? row.amount : void 0 : row;
      const desiredX = typeof col !== "number" && col.unit === "px" ? col.amount : void 0;
      const desiredY = typeof row !== "number" && row.unit === "px" ? row.amount : void 0;
      if (grid !== null && canvas !== null) {
        let targetRect = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
        let scrollX = 0;
        let scrollY = 0;
        if (trueCol !== void 0 || trueRow !== void 0) {
          targetRect = (_a2 = grid.getBounds((trueCol != null ? trueCol : 0) + rowMarkerOffset, trueRow != null ? trueRow : 0)) != null ? _a2 : targetRect;
          if (targetRect.width === 0 || targetRect.height === 0)
            return;
        }
        const scrollBounds = canvas.getBoundingClientRect();
        const scale = scrollBounds.width / canvas.offsetWidth;
        if (desiredX !== void 0) {
          targetRect = {
            ...targetRect,
            x: desiredX - scrollBounds.left - scrollRef.current.scrollLeft,
            width: 1
          };
        }
        if (desiredY !== void 0) {
          targetRect = {
            ...targetRect,
            y: desiredY + scrollBounds.top - scrollRef.current.scrollTop,
            height: 1
          };
        }
        if (targetRect !== void 0) {
          const bounds = {
            x: targetRect.x - paddingX,
            y: targetRect.y - paddingY,
            width: targetRect.width + 2 * paddingX,
            height: targetRect.height + 2 * paddingY
          };
          let frozenWidth = 0;
          for (let i = 0; i < freezeColumns; i++) {
            frozenWidth += columns[i].width;
          }
          let trailingRowHeight = 0;
          if (lastRowSticky) {
            trailingRowHeight = typeof rowHeight === "number" ? rowHeight : rowHeight(rows);
          }
          let sLeft = frozenWidth * scale + scrollBounds.left + rowMarkerOffset * rowMarkerWidth * scale;
          let sRight = scrollBounds.right;
          let sTop = scrollBounds.top + totalHeaderHeight * scale;
          let sBottom = scrollBounds.bottom - trailingRowHeight * scale;
          const minx = targetRect.width + paddingX * 2;
          switch (options == null ? void 0 : options.hAlign) {
            case "start":
              sRight = sLeft + minx;
              break;
            case "end":
              sLeft = sRight - minx;
              break;
            case "center":
              sLeft = Math.floor((sLeft + sRight) / 2) - minx / 2;
              sRight = sLeft + minx;
              break;
          }
          const miny = targetRect.height + paddingY * 2;
          switch (options == null ? void 0 : options.vAlign) {
            case "start":
              sBottom = sTop + miny;
              break;
            case "end":
              sTop = sBottom - miny;
              break;
            case "center":
              sTop = Math.floor((sTop + sBottom) / 2) - miny / 2;
              sBottom = sTop + miny;
              break;
          }
          if (sLeft > bounds.x) {
            scrollX = bounds.x - sLeft;
          } else if (sRight < bounds.x + bounds.width) {
            scrollX = bounds.x + bounds.width - sRight;
          }
          if (sTop > bounds.y) {
            scrollY = bounds.y - sTop;
          } else if (sBottom < bounds.y + bounds.height + (overscrollY != null ? overscrollY : 0)) {
            scrollY = bounds.y + bounds.height + (overscrollY != null ? overscrollY : 0) - sBottom;
          }
          if (dir === "vertical" || col < freezeColumns) {
            scrollX = 0;
          } else if (dir === "horizontal") {
            scrollY = 0;
          }
          if (scrollX !== 0 || scrollY !== 0) {
            if (scale !== 1) {
              scrollX /= scale;
              scrollY /= scale;
            }
            scrollRef.current.scrollTo(scrollX + scrollRef.current.scrollLeft, scrollY + scrollRef.current.scrollTop);
          }
        }
      }
    }
  }, [rowMarkerOffset, rowMarkerWidth, totalHeaderHeight, lastRowSticky, freezeColumns, columns, rowHeight, rows, overscrollY]);
  const focusCallback = React36.useRef(focusOnRowFromTrailingBlankRow);
  const getCellContentRef = React36.useRef(getCellContent);
  const rowsRef = React36.useRef(rows);
  focusCallback.current = focusOnRowFromTrailingBlankRow;
  getCellContentRef.current = getCellContent;
  rowsRef.current = rows;
  const appendRow = React36.useCallback(async (col, openOverlay = true) => {
    var _a2;
    const c = mangledCols[col];
    if (((_a2 = c == null ? void 0 : c.trailingRowOptions) == null ? void 0 : _a2.disabled) === true) {
      return;
    }
    const appendResult = onRowAppended == null ? void 0 : onRowAppended();
    let r = void 0;
    let bottom = true;
    if (appendResult !== void 0) {
      r = await appendResult;
      if (r === "top")
        bottom = false;
      if (typeof r === "number")
        bottom = false;
    }
    let backoff = 0;
    const doFocus = () => {
      if (rowsRef.current <= rows) {
        if (backoff < 500) {
          window.setTimeout(doFocus, backoff);
        }
        backoff = 50 + backoff * 2;
        return;
      }
      const row = typeof r === "number" ? r : bottom ? rows : 0;
      scrollTo(col - rowMarkerOffset, row);
      setCurrent({
        cell: [col, row],
        range: {
          x: col,
          y: row,
          width: 1,
          height: 1
        }
      }, false, false, "edit");
      const cell = getCellContentRef.current([col - rowMarkerOffset, row]);
      if (cell.allowOverlay && isReadWriteCell(cell) && cell.readonly !== true && openOverlay) {
        window.setTimeout(() => {
          focusCallback.current(col, row);
        }, 0);
      }
    };
    doFocus();
  }, [mangledCols, onRowAppended, rowMarkerOffset, rows, scrollTo, setCurrent]);
  const getCustomNewRowTargetColumn = React36.useCallback((col) => {
    var _a2, _b2, _c2;
    const customTargetColumn = (_c2 = (_b2 = (_a2 = columns[col]) == null ? void 0 : _a2.trailingRowOptions) == null ? void 0 : _b2.targetColumn) != null ? _c2 : trailingRowOptions == null ? void 0 : trailingRowOptions.targetColumn;
    if (typeof customTargetColumn === "number") {
      const customTargetOffset = hasRowMarkers ? 1 : 0;
      return customTargetColumn + customTargetOffset;
    }
    if (typeof customTargetColumn === "object") {
      const maybeIndex = columnsIn.indexOf(customTargetColumn);
      if (maybeIndex >= 0) {
        const customTargetOffset = hasRowMarkers ? 1 : 0;
        return maybeIndex + customTargetOffset;
      }
    }
    return void 0;
  }, [columns, columnsIn, hasRowMarkers, trailingRowOptions == null ? void 0 : trailingRowOptions.targetColumn]);
  const lastSelectedRowRef = React36.useRef();
  const lastSelectedColRef = React36.useRef();
  const themeForCell = React36.useCallback((cell, pos) => {
    var _a2;
    const [col, row] = pos;
    return {
      ...mergedTheme,
      ...(_a2 = mangledCols[col]) == null ? void 0 : _a2.themeOverride,
      ...getRowThemeOverride == null ? void 0 : getRowThemeOverride(row),
      ...cell.themeOverride
    };
  }, [getRowThemeOverride, mangledCols, mergedTheme]);
  const handleSelect = React36.useCallback((args) => {
    var _a2, _b2, _c2, _d2;
    const isMultiKey = browserIsOSX.value ? args.metaKey : args.ctrlKey;
    const isMultiRow = isMultiKey && rowSelect === "multi";
    const isMultiCol = isMultiKey && columnSelect === "multi";
    const [col, row] = args.location;
    const selectedColumns = gridSelection.columns;
    const selectedRows = gridSelection.rows;
    const [cellCol, cellRow] = (_b2 = (_a2 = gridSelection.current) == null ? void 0 : _a2.cell) != null ? _b2 : [];
    if (args.kind === "cell") {
      lastSelectedColRef.current = void 0;
      lastMouseSelectLocation.current = [col, row];
      if (col === 0 && hasRowMarkers) {
        if (showTrailingBlankRow === true && row === rows || rowMarkers === "number" || rowSelect === "none")
          return;
        const markerCell = getMangledCellContent(args.location);
        if (markerCell.kind !== InnerGridCellKind.Marker) {
          return;
        }
        if (onRowMoved !== void 0) {
          const renderer = getCellRenderer(markerCell);
          assert((renderer == null ? void 0 : renderer.kind) === InnerGridCellKind.Marker);
          const postClick = (_c2 = renderer == null ? void 0 : renderer.onClick) == null ? void 0 : _c2.call(renderer, {
            ...args,
            cell: markerCell,
            posX: args.localEventX,
            posY: args.localEventY,
            bounds: args.bounds,
            theme: themeForCell(markerCell, args.location),
            preventDefault: () => void 0
          });
          if (postClick === void 0 || postClick.checked === markerCell.checked)
            return;
        }
        setOverlay(void 0);
        focus();
        const isSelected = selectedRows.hasIndex(row);
        const lastHighlighted = lastSelectedRowRef.current;
        if (rowSelect === "multi" && (args.shiftKey || args.isLongTouch === true) && lastHighlighted !== void 0 && selectedRows.hasIndex(lastHighlighted)) {
          const newSlice = [Math.min(lastHighlighted, row), Math.max(lastHighlighted, row) + 1];
          if (isMultiRow || rowSelectionMode === "multi") {
            setSelectedRows(void 0, newSlice, true);
          } else {
            setSelectedRows(CompactSelection.fromSingleSelection(newSlice), void 0, isMultiRow);
          }
        } else if (isMultiRow || args.isTouch || rowSelectionMode === "multi") {
          if (isSelected) {
            setSelectedRows(selectedRows.remove(row), void 0, true);
          } else {
            setSelectedRows(void 0, row, true);
            lastSelectedRowRef.current = row;
          }
        } else if (isSelected && selectedRows.length === 1) {
          setSelectedRows(CompactSelection.empty(), void 0, isMultiKey);
        } else {
          setSelectedRows(CompactSelection.fromSingleSelection(row), void 0, isMultiKey);
          lastSelectedRowRef.current = row;
        }
      } else if (col >= rowMarkerOffset && showTrailingBlankRow && row === rows) {
        const customTargetColumn = getCustomNewRowTargetColumn(col);
        void appendRow(customTargetColumn != null ? customTargetColumn : col);
      } else {
        if (cellCol !== col || cellRow !== row) {
          const cell = getMangledCellContent(args.location);
          const renderer = getCellRenderer(cell);
          if ((renderer == null ? void 0 : renderer.onSelect) !== void 0) {
            let prevented = false;
            renderer.onSelect({
              ...args,
              cell,
              posX: args.localEventX,
              posY: args.localEventY,
              bounds: args.bounds,
              preventDefault: () => prevented = true,
              theme: themeForCell(cell, args.location)
            });
            if (prevented) {
              return;
            }
          }
          const isLastStickyRow = lastRowSticky && row === rows;
          const startedFromLastSticky = lastRowSticky && gridSelection !== void 0 && ((_d2 = gridSelection.current) == null ? void 0 : _d2.cell[1]) === rows;
          if ((args.shiftKey || args.isLongTouch === true) && cellCol !== void 0 && cellRow !== void 0 && gridSelection.current !== void 0 && !startedFromLastSticky) {
            if (isLastStickyRow) {
              return;
            }
            const left = Math.min(col, cellCol);
            const right = Math.max(col, cellCol);
            const top = Math.min(row, cellRow);
            const bottom = Math.max(row, cellRow);
            setCurrent({
              ...gridSelection.current,
              range: {
                x: left,
                y: top,
                width: right - left + 1,
                height: bottom - top + 1
              }
            }, true, isMultiKey, "click");
            lastSelectedRowRef.current = void 0;
            focus();
          } else {
            setCurrent({
              cell: [col, row],
              range: { x: col, y: row, width: 1, height: 1 }
            }, true, isMultiKey, "click");
            lastSelectedRowRef.current = void 0;
            setOverlay(void 0);
            focus();
          }
        }
      }
    } else if (args.kind === "header") {
      lastMouseSelectLocation.current = [col, row];
      setOverlay(void 0);
      if (hasRowMarkers && col === 0) {
        lastSelectedRowRef.current = void 0;
        lastSelectedColRef.current = void 0;
        if (rowSelect === "multi") {
          if (selectedRows.length !== rows) {
            setSelectedRows(CompactSelection.fromSingleSelection([0, rows]), void 0, isMultiKey);
          } else {
            setSelectedRows(CompactSelection.empty(), void 0, isMultiKey);
          }
          focus();
        }
      } else {
        const lastCol = lastSelectedColRef.current;
        if (columnSelect === "multi" && (args.shiftKey || args.isLongTouch === true) && lastCol !== void 0 && selectedColumns.hasIndex(lastCol)) {
          const newSlice = [Math.min(lastCol, col), Math.max(lastCol, col) + 1];
          if (isMultiCol) {
            setSelectedColumns(void 0, newSlice, isMultiKey);
          } else {
            setSelectedColumns(CompactSelection.fromSingleSelection(newSlice), void 0, isMultiKey);
          }
        } else if (isMultiCol) {
          if (selectedColumns.hasIndex(col)) {
            setSelectedColumns(selectedColumns.remove(col), void 0, isMultiKey);
          } else {
            setSelectedColumns(void 0, col, isMultiKey);
          }
          lastSelectedColRef.current = col;
        } else if (columnSelect !== "none") {
          setSelectedColumns(CompactSelection.fromSingleSelection(col), void 0, isMultiKey);
          lastSelectedColRef.current = col;
        }
        lastSelectedRowRef.current = void 0;
        focus();
      }
    } else if (args.kind === groupHeaderKind) {
      lastMouseSelectLocation.current = [col, row];
    } else if (args.kind === outOfBoundsKind) {
      setGridSelection(emptyGridSelection, false);
      setOverlay(void 0);
      focus();
      onSelectionCleared == null ? void 0 : onSelectionCleared();
      lastSelectedRowRef.current = void 0;
      lastSelectedColRef.current = void 0;
    }
  }, [
    appendRow,
    columnSelect,
    focus,
    getCellRenderer,
    getCustomNewRowTargetColumn,
    getMangledCellContent,
    gridSelection,
    hasRowMarkers,
    lastRowSticky,
    onSelectionCleared,
    onRowMoved,
    rowMarkerOffset,
    rowMarkers,
    rowSelect,
    rowSelectionMode,
    rows,
    setCurrent,
    setGridSelection,
    setSelectedColumns,
    setSelectedRows,
    showTrailingBlankRow,
    themeForCell
  ]);
  const lastMouseSelectLocation = React36.useRef();
  const touchDownArgs = React36.useRef(visibleRegion);
  const mouseDownData = React36.useRef();
  const onMouseDown = React36.useCallback((args) => {
    var _a2, _b2;
    isPrevented.current = false;
    touchDownArgs.current = visibleRegionRef.current;
    if (args.button !== 0) {
      mouseDownData.current = void 0;
      return;
    }
    const time = performance.now();
    const wasDoubleClick = time - ((_b2 = (_a2 = mouseDownData.current) == null ? void 0 : _a2.time) != null ? _b2 : -1e3) < 250;
    mouseDownData.current = {
      wasDoubleClick,
      time,
      location: args.location
    };
    const fh = args.kind === "cell" && args.isFillHandle;
    if (!fh && args.kind !== "cell" && args.isEdge)
      return;
    setMouseState({
      previousSelection: gridSelection,
      fillHandle: fh
    });
    lastMouseSelectLocation.current = void 0;
    if (!args.isTouch) {
      handleSelect(args);
    }
  }, [gridSelection, handleSelect]);
  const [renameGroup, setRenameGroup] = React36.useState();
  const handleGroupHeaderSelection = React36.useCallback((args) => {
    if (args.kind !== groupHeaderKind || columnSelect !== "multi") {
      return;
    }
    const isMultiKey = browserIsOSX.value ? args.metaKey : args.ctrlKey;
    const [col] = args.location;
    const selectedColumns = gridSelection.columns;
    if (col < rowMarkerOffset)
      return;
    const needle = mangledCols[col];
    let start = col;
    let end = col;
    for (let i = col - 1; i >= rowMarkerOffset; i--) {
      if (!isGroupEqual(needle.group, mangledCols[i].group))
        break;
      start--;
    }
    for (let i = col + 1; i < mangledCols.length; i++) {
      if (!isGroupEqual(needle.group, mangledCols[i].group))
        break;
      end++;
    }
    focus();
    if (isMultiKey) {
      if (selectedColumns.hasAll([start, end + 1])) {
        let newVal = selectedColumns;
        for (let index2 = start; index2 <= end; index2++) {
          newVal = newVal.remove(index2);
        }
        setSelectedColumns(newVal, void 0, isMultiKey);
      } else {
        setSelectedColumns(void 0, [start, end + 1], isMultiKey);
      }
    } else {
      setSelectedColumns(CompactSelection.fromSingleSelection([start, end + 1]), void 0, isMultiKey);
    }
  }, [columnSelect, focus, gridSelection.columns, mangledCols, rowMarkerOffset, setSelectedColumns]);
  const fillDown = React36.useCallback((reverse) => {
    var _a2;
    if (gridSelection.current === void 0)
      return;
    const v = [];
    const r = gridSelection.current.range;
    for (let x = 0; x < r.width; x++) {
      const fillCol = x + r.x;
      const fillVal = getMangledCellContent([fillCol, reverse ? r.y + r.height - 1 : r.y]);
      if (isInnerOnlyCell(fillVal) || !isReadWriteCell(fillVal))
        continue;
      for (let y = 1; y < r.height; y++) {
        const fillRow = reverse ? r.y + r.height - (y + 1) : y + r.y;
        const target = [fillCol, fillRow];
        v.push({
          location: target,
          value: { ...fillVal }
        });
      }
    }
    mangledOnCellsEdited(v);
    (_a2 = gridRef.current) == null ? void 0 : _a2.damage(v.map((c) => ({
      cell: c.location
    })));
  }, [getMangledCellContent, gridSelection, mangledOnCellsEdited]);
  const isPrevented = React36.useRef(false);
  const normalSizeColumn = React36.useCallback(async (col, force = false) => {
    var _a2;
    if ((((_a2 = mouseDownData.current) == null ? void 0 : _a2.wasDoubleClick) === true || force) && getCellsForSelection !== void 0 && onColumnResize !== void 0) {
      const start = visibleRegionRef.current.y;
      const end = visibleRegionRef.current.height;
      let cells = getCellsForSelection({
        x: col,
        y: start,
        width: 1,
        height: Math.min(end, rows - start)
      }, abortControllerRef.current.signal);
      if (typeof cells !== "object") {
        cells = await cells();
      }
      const inputCol = columns[col - rowMarkerOffset];
      const offscreen = document.createElement("canvas");
      const ctx = offscreen.getContext("2d", { alpha: false });
      if (ctx !== null) {
        ctx.font = `${mergedTheme.baseFontStyle} ${mergedTheme.fontFamily}`;
        const newCol = measureColumn(ctx, mergedTheme, inputCol, 0, cells, minColumnWidth, maxColumnWidth, false, getCellRenderer);
        onColumnResize == null ? void 0 : onColumnResize(inputCol, newCol.width, col, newCol.width);
      }
    }
  }, [
    columns,
    getCellsForSelection,
    maxColumnWidth,
    mergedTheme,
    minColumnWidth,
    onColumnResize,
    rowMarkerOffset,
    rows,
    getCellRenderer
  ]);
  const [scrollDir, setScrollDir] = React36.useState();
  const onMouseUp = React36.useCallback((args, isOutside) => {
    var _a2, _b2, _c2;
    const mouse = mouseState;
    setMouseState(void 0);
    setScrollDir(void 0);
    if (isOutside)
      return;
    if ((mouse == null ? void 0 : mouse.fillHandle) === true && gridSelection.current !== void 0) {
      fillDown(gridSelection.current.cell[1] !== gridSelection.current.range.y);
      return;
    }
    const [col, row] = args.location;
    const [lastMouseDownCol, lastMouseDownRow] = (_a2 = lastMouseSelectLocation.current) != null ? _a2 : [];
    const preventDefault = () => {
      isPrevented.current = true;
    };
    const handleMaybeClick = (a) => {
      var _a3, _b3, _c3;
      if (a.isTouch || lastMouseDownCol === col && lastMouseDownRow === row) {
        onCellClicked == null ? void 0 : onCellClicked([col - rowMarkerOffset, row], {
          ...a,
          preventDefault
        });
      }
      if (!isPrevented.current) {
        const c = getMangledCellContent(args.location);
        const r = getCellRenderer(c);
        if (r !== void 0 && r.onClick !== void 0) {
          const newVal = r.onClick({
            ...a,
            cell: c,
            posX: a.localEventX,
            posY: a.localEventY,
            bounds: a.bounds,
            theme: themeForCell(c, args.location),
            preventDefault
          });
          if (newVal !== void 0 && !isInnerOnlyCell(newVal) && isEditableGridCell(newVal)) {
            mangledOnCellsEdited([{ location: a.location, value: newVal }]);
            (_a3 = gridRef.current) == null ? void 0 : _a3.damage([
              {
                cell: a.location
              }
            ]);
          }
        }
        if (!isPrevented.current && ((_c3 = (_b3 = mouse == null ? void 0 : mouse.previousSelection) == null ? void 0 : _b3.current) == null ? void 0 : _c3.cell) !== void 0 && gridSelection.current !== void 0) {
          const [selectedCol, selectedRow] = gridSelection.current.cell;
          const [prevCol, prevRow] = mouse.previousSelection.current.cell;
          if (col === selectedCol && col === prevCol && row === selectedRow && row === prevRow) {
            onCellActivated == null ? void 0 : onCellActivated([col - rowMarkerOffset, row]);
            reselect(a.bounds, false);
            return true;
          }
        }
      }
      return false;
    };
    const clickLocation = args.location[0] - rowMarkerOffset;
    if (args.isTouch) {
      const vr = visibleRegionRef.current;
      const touchVr = touchDownArgs.current;
      if (vr.x !== touchVr.x || vr.y !== touchVr.y) {
        return;
      }
      if (args.isLongTouch === true) {
        if (args.kind === "cell" && ((_b2 = gridSelection == null ? void 0 : gridSelection.current) == null ? void 0 : _b2.cell[0]) === col && ((_c2 = gridSelection == null ? void 0 : gridSelection.current) == null ? void 0 : _c2.cell[1]) === row) {
          onCellContextMenu == null ? void 0 : onCellContextMenu([clickLocation, args.location[1]], {
            ...args,
            preventDefault
          });
          return;
        } else if (args.kind === "header" && gridSelection.columns.hasIndex(col)) {
          onHeaderContextMenu == null ? void 0 : onHeaderContextMenu(clickLocation, { ...args, preventDefault });
          return;
        } else if (args.kind === groupHeaderKind) {
          if (clickLocation < 0) {
            return;
          }
          onGroupHeaderContextMenu == null ? void 0 : onGroupHeaderContextMenu(clickLocation, { ...args, preventDefault });
          return;
        }
      }
      if (args.kind === "cell") {
        if (!handleMaybeClick(args)) {
          handleSelect(args);
        }
      } else if (args.kind === groupHeaderKind) {
        onGroupHeaderClicked == null ? void 0 : onGroupHeaderClicked(clickLocation, { ...args, preventDefault });
      } else {
        if (args.kind === headerKind) {
          onHeaderClicked == null ? void 0 : onHeaderClicked(clickLocation, {
            ...args,
            preventDefault
          });
        }
        handleSelect(args);
      }
      return;
    }
    if (args.kind === "header") {
      if (clickLocation < 0) {
        return;
      }
      if (args.isEdge) {
        void normalSizeColumn(col);
      } else if (args.button === 0 && col === lastMouseDownCol && row === lastMouseDownRow) {
        onHeaderClicked == null ? void 0 : onHeaderClicked(clickLocation, { ...args, preventDefault });
      }
    }
    if (args.kind === groupHeaderKind) {
      if (clickLocation < 0) {
        return;
      }
      if (args.button === 0 && col === lastMouseDownCol && row === lastMouseDownRow) {
        onGroupHeaderClicked == null ? void 0 : onGroupHeaderClicked(clickLocation, { ...args, preventDefault });
        if (!isPrevented.current) {
          handleGroupHeaderSelection(args);
        }
      }
    }
    if (args.kind === "cell" && args.button === 0) {
      handleMaybeClick(args);
    }
    lastMouseSelectLocation.current = void 0;
  }, [
    mouseState,
    rowMarkerOffset,
    gridSelection,
    onCellClicked,
    fillDown,
    getMangledCellContent,
    getCellRenderer,
    themeForCell,
    mangledOnCellsEdited,
    onCellActivated,
    reselect,
    onCellContextMenu,
    onHeaderContextMenu,
    onGroupHeaderContextMenu,
    handleSelect,
    onGroupHeaderClicked,
    normalSizeColumn,
    onHeaderClicked,
    handleGroupHeaderSelection
  ]);
  const onMouseMoveImpl = React36.useCallback((args) => {
    const a = {
      ...args,
      location: [args.location[0] - rowMarkerOffset, args.location[1]]
    };
    onMouseMove == null ? void 0 : onMouseMove(a);
    setScrollDir((cv) => {
      var _a2, _b2;
      if (args.scrollEdge[0] === (cv == null ? void 0 : cv[0]) && args.scrollEdge[1] === cv[1])
        return cv;
      return mouseState === void 0 || ((_b2 = (_a2 = mouseDownData.current) == null ? void 0 : _a2.location[0]) != null ? _b2 : 0) < rowMarkerOffset ? void 0 : args.scrollEdge;
    });
  }, [mouseState, onMouseMove, rowMarkerOffset]);
  useAutoscroll(scrollDir, scrollRef);
  const onHeaderMenuClickInner = React36.useCallback((col, screenPosition) => {
    onHeaderMenuClick == null ? void 0 : onHeaderMenuClick(col - rowMarkerOffset, screenPosition);
  }, [onHeaderMenuClick, rowMarkerOffset]);
  const currentCell = (_c = gridSelection == null ? void 0 : gridSelection.current) == null ? void 0 : _c.cell;
  const onVisibleRegionChangedImpl = React36.useCallback((region, clientWidth, clientHeight, rightElWidth, tx, ty) => {
    hasJustScrolled.current = false;
    let selected = currentCell;
    if (selected !== void 0) {
      selected = [selected[0] - rowMarkerOffset, selected[1]];
    }
    const newRegion = {
      x: region.x - rowMarkerOffset,
      y: region.y,
      width: region.width,
      height: showTrailingBlankRow && region.y + region.height >= rows ? region.height - 1 : region.height,
      tx,
      ty,
      extras: {
        selected,
        freezeRegion: freezeColumns === 0 ? void 0 : {
          x: 0,
          y: region.y,
          width: freezeColumns,
          height: region.height
        }
      }
    };
    visibleRegionRef.current = newRegion;
    setVisibleRegion(newRegion);
    setClientSize([clientWidth, clientHeight, rightElWidth]);
    onVisibleRegionChanged == null ? void 0 : onVisibleRegionChanged(newRegion, newRegion.tx, newRegion.ty, newRegion.extras);
  }, [
    currentCell,
    rowMarkerOffset,
    showTrailingBlankRow,
    rows,
    freezeColumns,
    setVisibleRegion,
    onVisibleRegionChanged
  ]);
  const onColumnMovedImpl = whenDefined(onColumnMoved, React36.useCallback((startIndex, endIndex) => {
    onColumnMoved == null ? void 0 : onColumnMoved(startIndex - rowMarkerOffset, endIndex - rowMarkerOffset);
    if (columnSelect !== "none") {
      setSelectedColumns(CompactSelection.fromSingleSelection(endIndex), void 0, true);
    }
  }, [columnSelect, onColumnMoved, rowMarkerOffset, setSelectedColumns]));
  const isActivelyDragging = React36.useRef(false);
  const onDragStartImpl = React36.useCallback((args) => {
    if (args.location[0] === 0 && rowMarkerOffset > 0) {
      args.preventDefault();
      return;
    }
    onDragStart == null ? void 0 : onDragStart({
      ...args,
      location: [args.location[0] - rowMarkerOffset, args.location[1]]
    });
    if (!args.defaultPrevented()) {
      isActivelyDragging.current = true;
    }
    setMouseState(void 0);
  }, [onDragStart, rowMarkerOffset]);
  const onDragEnd = React36.useCallback(() => {
    isActivelyDragging.current = false;
  }, []);
  const onItemHoveredImpl = React36.useCallback((args) => {
    var _a2;
    if (mouseState !== void 0 && ((_a2 = mouseDownData.current) == null ? void 0 : _a2.location[0]) === 0 && args.location[0] === 0 && rowMarkerOffset === 1 && rowSelect === "multi" && mouseState.previousSelection && !mouseState.previousSelection.rows.hasIndex(mouseDownData.current.location[1]) && gridSelection.rows.hasIndex(mouseDownData.current.location[1])) {
      const start = Math.min(mouseDownData.current.location[1], args.location[1]);
      const end = Math.max(mouseDownData.current.location[1], args.location[1]) + 1;
      setSelectedRows(CompactSelection.fromSingleSelection([start, end]), void 0, false);
    }
    if (mouseState !== void 0 && gridSelection.current !== void 0 && !isActivelyDragging.current && (rangeSelect === "rect" || rangeSelect === "multi-rect")) {
      const [selectedCol, selectedRow] = gridSelection.current.cell;
      let [col, row] = args.location;
      if (row < 0) {
        row = visibleRegionRef.current.y;
      }
      const startedFromLastStickyRow = lastRowSticky && selectedRow === rows;
      if (startedFromLastStickyRow)
        return;
      const landedOnLastStickyRow = lastRowSticky && row === rows;
      if (landedOnLastStickyRow) {
        if (args.kind === outOfBoundsKind)
          row--;
        else
          return;
      }
      col = Math.max(col, rowMarkerOffset);
      const deltaX = col - selectedCol;
      const deltaY = row - selectedRow;
      const newRange = {
        x: deltaX >= 0 ? selectedCol : col,
        y: deltaY >= 0 ? selectedRow : row,
        width: Math.abs(deltaX) + 1,
        height: Math.abs(deltaY) + 1
      };
      setCurrent({
        ...gridSelection.current,
        range: newRange
      }, true, false, "drag");
    }
    onItemHovered == null ? void 0 : onItemHovered({ ...args, location: [args.location[0] - rowMarkerOffset, args.location[1]] });
  }, [
    mouseState,
    rowMarkerOffset,
    rowSelect,
    gridSelection,
    rangeSelect,
    onItemHovered,
    setSelectedRows,
    lastRowSticky,
    rows,
    setCurrent
  ]);
  const adjustSelection = React36.useCallback((direction2) => {
    if (gridSelection.current === void 0)
      return;
    const [x, y] = direction2;
    const [col, row] = gridSelection.current.cell;
    const old = gridSelection.current.range;
    let left = old.x;
    let right = old.x + old.width;
    let top = old.y;
    let bottom = old.y + old.height;
    if (y !== 0) {
      switch (y) {
        case 2: {
          bottom = rows;
          top = row;
          scrollTo(0, bottom, "vertical");
          break;
        }
        case -2: {
          top = 0;
          bottom = row + 1;
          scrollTo(0, top, "vertical");
          break;
        }
        case 1: {
          if (top < row) {
            top++;
            scrollTo(0, top, "vertical");
          } else {
            bottom = Math.min(rows, bottom + 1);
            scrollTo(0, bottom, "vertical");
          }
          break;
        }
        case -1: {
          if (bottom > row + 1) {
            bottom--;
            scrollTo(0, bottom, "vertical");
          } else {
            top = Math.max(0, top - 1);
            scrollTo(0, top, "vertical");
          }
          break;
        }
        default: {
          assertNever(y);
        }
      }
    }
    if (x !== 0) {
      if (x === 2) {
        right = mangledCols.length;
        left = col;
        scrollTo(right - 1 - rowMarkerOffset, 0, "horizontal");
      } else if (x === -2) {
        left = rowMarkerOffset;
        right = col + 1;
        scrollTo(left - rowMarkerOffset, 0, "horizontal");
      } else {
        let disallowed = [];
        if (getCellsForSelection !== void 0) {
          const cells = getCellsForSelection({
            x: left,
            y: top,
            width: right - left - rowMarkerOffset,
            height: bottom - top
          }, abortControllerRef.current.signal);
          if (typeof cells === "object") {
            disallowed = getSpanStops(cells);
          }
        }
        if (x === 1) {
          let done = false;
          if (left < col) {
            if (disallowed.length > 0) {
              const target = (0, import_range2.default)(left + 1, col + 1).find((n) => !disallowed.includes(n - rowMarkerOffset));
              if (target !== void 0) {
                left = target;
                done = true;
              }
            } else {
              left++;
              done = true;
            }
            if (done)
              scrollTo(left, 0, "horizontal");
          }
          if (!done) {
            right = Math.min(mangledCols.length, right + 1);
            scrollTo(right - 1 - rowMarkerOffset, 0, "horizontal");
          }
        } else if (x === -1) {
          let done = false;
          if (right > col + 1) {
            if (disallowed.length > 0) {
              const target = (0, import_range2.default)(right - 1, col, -1).find((n) => !disallowed.includes(n - rowMarkerOffset));
              if (target !== void 0) {
                right = target;
                done = true;
              }
            } else {
              right--;
              done = true;
            }
            if (done)
              scrollTo(right - rowMarkerOffset, 0, "horizontal");
          }
          if (!done) {
            left = Math.max(rowMarkerOffset, left - 1);
            scrollTo(left - rowMarkerOffset, 0, "horizontal");
          }
        } else {
          assertNever(x);
        }
      }
    }
    setCurrent({
      cell: gridSelection.current.cell,
      range: {
        x: left,
        y: top,
        width: right - left,
        height: bottom - top
      }
    }, true, false, "keyboard-select");
  }, [getCellsForSelection, gridSelection, mangledCols.length, rowMarkerOffset, rows, scrollTo, setCurrent]);
  const updateSelectedCell = React36.useCallback((col, row, fromEditingTrailingRow, freeMove) => {
    const rowMax = mangledRows - (fromEditingTrailingRow ? 0 : 1);
    col = (0, import_clamp5.default)(col, rowMarkerOffset, columns.length - 1 + rowMarkerOffset);
    row = (0, import_clamp5.default)(row, 0, rowMax);
    if (col === (currentCell == null ? void 0 : currentCell[0]) && row === (currentCell == null ? void 0 : currentCell[1]))
      return false;
    if (freeMove && gridSelection.current !== void 0) {
      const newStack = [...gridSelection.current.rangeStack];
      if (gridSelection.current.range.width > 1 || gridSelection.current.range.height > 1) {
        newStack.push(gridSelection.current.range);
      }
      setGridSelection({
        ...gridSelection,
        current: {
          cell: [col, row],
          range: { x: col, y: row, width: 1, height: 1 },
          rangeStack: newStack
        }
      }, true);
    } else {
      setCurrent({
        cell: [col, row],
        range: { x: col, y: row, width: 1, height: 1 }
      }, true, false, "keyboard-nav");
    }
    if (lastSent.current !== void 0 && lastSent.current[0] === col && lastSent.current[1] === row) {
      lastSent.current = void 0;
    }
    scrollTo(col - rowMarkerOffset, row);
    return true;
  }, [
    mangledRows,
    rowMarkerOffset,
    columns.length,
    currentCell,
    gridSelection,
    scrollTo,
    setGridSelection,
    setCurrent
  ]);
  const onFinishEditing = React36.useCallback((newValue, movement) => {
    if ((overlay == null ? void 0 : overlay.cell) !== void 0 && newValue !== void 0 && isEditableGridCell(newValue)) {
      mangledOnCellsEdited([{ location: overlay.cell, value: newValue }]);
      window.requestAnimationFrame(() => {
        var _a2;
        (_a2 = gridRef.current) == null ? void 0 : _a2.damage([
          {
            cell: overlay.cell
          }
        ]);
      });
    }
    focus(true);
    setOverlay(void 0);
    const [movX, movY] = movement;
    if (gridSelection.current !== void 0 && (movX !== 0 || movY !== 0)) {
      const isEditingTrailingRow = gridSelection.current.cell[1] === mangledRows - 1 && newValue !== void 0;
      updateSelectedCell((0, import_clamp5.default)(gridSelection.current.cell[0] + movX, 0, mangledCols.length - 1), (0, import_clamp5.default)(gridSelection.current.cell[1] + movY, 0, mangledRows - 1), isEditingTrailingRow, false);
    }
    onFinishedEditing == null ? void 0 : onFinishedEditing(newValue, movement);
  }, [
    overlay == null ? void 0 : overlay.cell,
    focus,
    gridSelection,
    onFinishedEditing,
    mangledOnCellsEdited,
    mangledRows,
    updateSelectedCell,
    mangledCols.length
  ]);
  const overlayID = React36.useMemo(() => {
    return `gdg-overlay-${idCounter++}`;
  }, []);
  const onKeyDown = React36.useCallback((event) => {
    const fn = async () => {
      var _a2, _b2, _c2, _d2, _e2;
      let cancelled = false;
      if (onKeyDownIn !== void 0) {
        onKeyDownIn({
          ...event,
          cancel: () => {
            cancelled = true;
          }
        });
      }
      if (cancelled)
        return;
      const cancel = () => {
        event.stopPropagation();
        event.preventDefault();
      };
      const overlayOpen = overlay !== void 0;
      const { altKey, shiftKey, metaKey, ctrlKey, key, bounds } = event;
      const isOSX = browserIsOSX.value;
      const isPrimaryKey = isOSX ? metaKey : ctrlKey;
      const isDeleteKey = key === "Delete" || isOSX && key === "Backspace";
      const vr = visibleRegionRef.current;
      const selectedColumns = gridSelection.columns;
      const selectedRows = gridSelection.rows;
      if (key === "Escape") {
        if (overlayOpen) {
          setOverlay(void 0);
        } else if (keybindings.clear) {
          setGridSelection(emptyGridSelection, false);
          onSelectionCleared == null ? void 0 : onSelectionCleared();
        }
        return;
      } else if (isHotkey("primary+a", event) && keybindings.selectAll) {
        if (!overlayOpen) {
          setGridSelection({
            columns: CompactSelection.empty(),
            rows: CompactSelection.empty(),
            current: {
              cell: (_b2 = (_a2 = gridSelection.current) == null ? void 0 : _a2.cell) != null ? _b2 : [rowMarkerOffset, 0],
              range: {
                x: rowMarkerOffset,
                y: 0,
                width: columnsIn.length,
                height: rows
              },
              rangeStack: []
            }
          }, false);
        } else {
          const el = document.getElementById(overlayID);
          if (el !== null) {
            const s = window.getSelection();
            const r = document.createRange();
            r.selectNodeContents(el);
            s == null ? void 0 : s.removeAllRanges();
            s == null ? void 0 : s.addRange(r);
          }
        }
        cancel();
        return;
      } else if (isHotkey("primary+f", event) && keybindings.search) {
        cancel();
        (_c2 = searchInputRef == null ? void 0 : searchInputRef.current) == null ? void 0 : _c2.focus({ preventScroll: true });
        setShowSearchInner(true);
      }
      function deleteRange(r) {
        var _a3, _b3, _c3, _d3;
        focus();
        const editList = [];
        for (let x = r.x; x < r.x + r.width; x++) {
          for (let y = r.y; y < r.y + r.height; y++) {
            const cellValue = getCellContent([x - rowMarkerOffset, y]);
            if (!cellValue.allowOverlay && cellValue.kind !== GridCellKind.Boolean)
              continue;
            let newVal = void 0;
            if (cellValue.kind === GridCellKind.Custom) {
              const toDelete = getCellRenderer(cellValue);
              const editor = (_a3 = toDelete == null ? void 0 : toDelete.provideEditor) == null ? void 0 : _a3.call(toDelete, cellValue);
              if ((toDelete == null ? void 0 : toDelete.onDelete) !== void 0) {
                newVal = toDelete.onDelete(cellValue);
              } else if (isObjectEditorCallbackResult(editor)) {
                newVal = (_b3 = editor == null ? void 0 : editor.deletedValue) == null ? void 0 : _b3.call(editor, cellValue);
              }
            } else if (isEditableGridCell(cellValue) && cellValue.allowOverlay || cellValue.kind === GridCellKind.Boolean) {
              const toDelete = getCellRenderer(cellValue);
              newVal = (_c3 = toDelete == null ? void 0 : toDelete.onDelete) == null ? void 0 : _c3.call(toDelete, cellValue);
            }
            if (newVal !== void 0 && !isInnerOnlyCell(newVal) && isEditableGridCell(newVal)) {
              editList.push({ location: [x, y], value: newVal });
            }
          }
        }
        mangledOnCellsEdited(editList);
        (_d3 = gridRef.current) == null ? void 0 : _d3.damage(editList.map((x) => ({ cell: x.location })));
      }
      if (isDeleteKey) {
        const callbackResult = (_d2 = onDelete == null ? void 0 : onDelete(gridSelection)) != null ? _d2 : true;
        cancel();
        if (callbackResult !== false) {
          const toDelete = callbackResult === true ? gridSelection : callbackResult;
          if (toDelete.current !== void 0) {
            deleteRange(toDelete.current.range);
            for (const r of toDelete.current.rangeStack) {
              deleteRange(r);
            }
          }
          for (const r of toDelete.rows) {
            deleteRange({
              x: rowMarkerOffset,
              y: r,
              width: mangledCols.length - rowMarkerOffset,
              height: 1
            });
          }
          for (const col2 of toDelete.columns) {
            deleteRange({
              x: col2,
              y: 0,
              width: 1,
              height: rows
            });
          }
        }
        return;
      }
      if (gridSelection.current === void 0)
        return;
      let [col, row] = gridSelection.current.cell;
      let freeMove = false;
      if (keybindings.selectColumn && isHotkey("ctrl+ ", event) && columnSelect !== "none") {
        if (selectedColumns.hasIndex(col)) {
          setSelectedColumns(selectedColumns.remove(col), void 0, true);
        } else {
          if (columnSelect === "single") {
            setSelectedColumns(CompactSelection.fromSingleSelection(col), void 0, true);
          } else {
            setSelectedColumns(void 0, col, true);
          }
        }
      } else if (keybindings.selectRow && isHotkey("shift+ ", event) && rowSelect !== "none") {
        if (selectedRows.hasIndex(row)) {
          setSelectedRows(selectedRows.remove(row), void 0, true);
        } else {
          if (rowSelect === "single") {
            setSelectedRows(CompactSelection.fromSingleSelection(row), void 0, true);
          } else {
            setSelectedRows(void 0, row, true);
          }
        }
      } else if ((isHotkey("Enter", event) || isHotkey(" ", event) || isHotkey("shift+Enter", event)) && bounds !== void 0) {
        if (overlayOpen) {
          setOverlay(void 0);
          if (isHotkey("Enter", event)) {
            row++;
          } else if (isHotkey("shift+Enter", event)) {
            row--;
          }
        } else if (row === rows && showTrailingBlankRow) {
          window.setTimeout(() => {
            const customTargetColumn = getCustomNewRowTargetColumn(col);
            void appendRow(customTargetColumn != null ? customTargetColumn : col);
          }, 0);
        } else {
          onCellActivated == null ? void 0 : onCellActivated([col - rowMarkerOffset, row]);
          reselect(bounds, true);
          cancel();
        }
      } else if (keybindings.downFill && isHotkey("primary+_68", event) && gridSelection.current.range.height > 1) {
        fillDown(false);
        cancel();
      } else if (keybindings.rightFill && isHotkey("primary+_82", event) && gridSelection.current.range.width > 1) {
        const editList = [];
        const r = gridSelection.current.range;
        for (let y = 0; y < r.height; y++) {
          const fillRow = y + r.y;
          const fillVal = getMangledCellContent([r.x, fillRow]);
          if (isInnerOnlyCell(fillVal) || !isReadWriteCell(fillVal))
            continue;
          for (let x = 1; x < r.width; x++) {
            const fillCol = x + r.x;
            const target = [fillCol, fillRow];
            editList.push({
              location: target,
              value: { ...fillVal }
            });
          }
        }
        mangledOnCellsEdited(editList);
        (_e2 = gridRef.current) == null ? void 0 : _e2.damage(editList.map((c) => ({
          cell: c.location
        })));
        cancel();
      } else if (keybindings.pageDown && isHotkey("PageDown", event)) {
        row += Math.max(1, visibleRegionRef.current.height - 4);
        cancel();
      } else if (keybindings.pageUp && isHotkey("PageUp", event)) {
        row -= Math.max(1, visibleRegionRef.current.height - 4);
        cancel();
      } else if (keybindings.first && isHotkey("primary+Home", event)) {
        setOverlay(void 0);
        row = 0;
        col = 0;
      } else if (keybindings.last && isHotkey("primary+End", event)) {
        setOverlay(void 0);
        row = Number.MAX_SAFE_INTEGER;
        col = Number.MAX_SAFE_INTEGER;
      } else if (keybindings.first && isHotkey("primary+shift+Home", event)) {
        setOverlay(void 0);
        adjustSelection([-2, -2]);
      } else if (keybindings.last && isHotkey("primary+shift+End", event)) {
        setOverlay(void 0);
        adjustSelection([2, 2]);
      } else if (key === "ArrowDown") {
        if (ctrlKey && altKey) {
          return;
        }
        setOverlay(void 0);
        if (shiftKey && (rangeSelect === "rect" || rangeSelect === "multi-rect")) {
          adjustSelection([0, isPrimaryKey && !altKey ? 2 : 1]);
        } else {
          if (altKey && !isPrimaryKey) {
            freeMove = true;
          }
          if (isPrimaryKey && !altKey) {
            row = rows - 1;
          } else {
            row += 1;
          }
        }
      } else if (key === "ArrowUp" || key === "Home") {
        const asPrimary = key === "Home" || isPrimaryKey;
        setOverlay(void 0);
        if (shiftKey && (rangeSelect === "rect" || rangeSelect === "multi-rect")) {
          adjustSelection([0, asPrimary && !altKey ? -2 : -1]);
        } else {
          if (altKey && !asPrimary) {
            freeMove = true;
          }
          row += asPrimary && !altKey ? Number.MIN_SAFE_INTEGER : -1;
        }
      } else if (key === "ArrowRight" || key === "End") {
        const asPrimary = key === "End" || isPrimaryKey;
        setOverlay(void 0);
        if (shiftKey && (rangeSelect === "rect" || rangeSelect === "multi-rect")) {
          adjustSelection([asPrimary && !altKey ? 2 : 1, 0]);
        } else {
          if (altKey && !asPrimary) {
            freeMove = true;
          }
          col += asPrimary && !altKey ? Number.MAX_SAFE_INTEGER : 1;
        }
      } else if (key === "ArrowLeft") {
        setOverlay(void 0);
        if (shiftKey && (rangeSelect === "rect" || rangeSelect === "multi-rect")) {
          adjustSelection([isPrimaryKey && !altKey ? -2 : -1, 0]);
        } else {
          if (altKey && !isPrimaryKey) {
            freeMove = true;
          }
          col += isPrimaryKey && !altKey ? Number.MIN_SAFE_INTEGER : -1;
        }
      } else if (key === "Tab") {
        setOverlay(void 0);
        if (shiftKey) {
          col--;
        } else {
          col++;
        }
      } else if (!metaKey && !ctrlKey && gridSelection.current !== void 0 && key.length === 1 && /[ -~]/g.test(key) && bounds !== void 0 && isReadWriteCell(getCellContent([col - rowMarkerOffset, Math.max(0, row - 1)]))) {
        if ((!lastRowSticky || row !== rows) && (vr.y > row || row > vr.y + vr.height || vr.x > col || col > vr.x + vr.width)) {
          return;
        }
        reselect(bounds, true, key);
        cancel();
      }
      const moved = updateSelectedCell(col, row, false, freeMove);
      if (moved) {
        cancel();
      }
    };
    void fn();
  }, [
    onKeyDownIn,
    overlay,
    gridSelection,
    keybindings.selectAll,
    keybindings.search,
    keybindings.selectColumn,
    keybindings.selectRow,
    keybindings.downFill,
    keybindings.rightFill,
    keybindings.pageDown,
    keybindings.pageUp,
    keybindings.first,
    keybindings.last,
    keybindings.clear,
    columnSelect,
    rowSelect,
    getCellContent,
    rowMarkerOffset,
    updateSelectedCell,
    setGridSelection,
    onSelectionCleared,
    columnsIn.length,
    rows,
    overlayID,
    focus,
    mangledOnCellsEdited,
    getCellRenderer,
    onDelete,
    mangledCols.length,
    setSelectedColumns,
    setSelectedRows,
    showTrailingBlankRow,
    getCustomNewRowTargetColumn,
    appendRow,
    onCellActivated,
    reselect,
    fillDown,
    getMangledCellContent,
    adjustSelection,
    rangeSelect,
    lastRowSticky
  ]);
  const onContextMenu = React36.useCallback((args, preventDefault) => {
    const adjustedCol = args.location[0] - rowMarkerOffset;
    if (args.kind === "header") {
      onHeaderContextMenu == null ? void 0 : onHeaderContextMenu(adjustedCol, { ...args, preventDefault });
    }
    if (args.kind === groupHeaderKind) {
      if (adjustedCol < 0) {
        return;
      }
      onGroupHeaderContextMenu == null ? void 0 : onGroupHeaderContextMenu(adjustedCol, { ...args, preventDefault });
    }
    if (args.kind === "cell") {
      const [col, row] = args.location;
      onCellContextMenu == null ? void 0 : onCellContextMenu([adjustedCol, row], {
        ...args,
        preventDefault
      });
      if (!gridSelectionHasItem(gridSelection, args.location)) {
        updateSelectedCell(col, row, false, false);
      }
    }
  }, [
    gridSelection,
    onCellContextMenu,
    onGroupHeaderContextMenu,
    onHeaderContextMenu,
    rowMarkerOffset,
    updateSelectedCell
  ]);
  const onPasteInternal = React36.useCallback(async (e) => {
    var _a2, _b2, _c2, _d2, _e2, _f, _g;
    if (!keybindings.paste)
      return;
    function pasteToCell(inner, target2, toPaste) {
      var _a3, _b3;
      if (!isInnerOnlyCell(inner) && isReadWriteCell(inner) && inner.readonly !== true) {
        const coerced = coercePasteValue == null ? void 0 : coercePasteValue(toPaste, inner);
        if (coerced !== void 0 && isEditableGridCell(coerced)) {
          if (coerced.kind !== inner.kind) {
            console.warn("Coercion should not change cell kind.");
          }
          return {
            location: target2,
            value: coerced
          };
        }
        const r = getCellRenderer(inner);
        if (r === void 0)
          return void 0;
        if (r.kind === GridCellKind.Custom) {
          assert(inner.kind === GridCellKind.Custom);
          const newVal = (_a3 = r.onPaste) == null ? void 0 : _a3.call(r, toPaste, inner);
          if (newVal === void 0)
            return void 0;
          return {
            location: target2,
            value: {
              ...inner,
              data: newVal
            }
          };
        } else {
          const newVal = (_b3 = r.onPaste) == null ? void 0 : _b3.call(r, toPaste, inner);
          if (newVal === void 0)
            return void 0;
          assert(newVal.kind === inner.kind);
          return {
            location: target2,
            value: newVal
          };
        }
      }
      return void 0;
    }
    const selectedColumns = gridSelection.columns;
    const selectedRows = gridSelection.rows;
    const focused = ((_a2 = scrollRef.current) == null ? void 0 : _a2.contains(document.activeElement)) === true || ((_b2 = canvasRef.current) == null ? void 0 : _b2.contains(document.activeElement)) === true;
    let target = (_c2 = gridSelection.current) == null ? void 0 : _c2.cell;
    if (target === void 0 && selectedColumns.length === 1) {
      target = [(_d2 = selectedColumns.first()) != null ? _d2 : 0, 0];
    }
    if (target === void 0 && selectedRows.length === 1) {
      target = [rowMarkerOffset, (_e2 = selectedRows.first()) != null ? _e2 : 0];
    }
    if (focused && target !== void 0) {
      let data;
      let text;
      const textPlain = "text/plain";
      const textHtml = "text/html";
      if (navigator.clipboard.read !== void 0) {
        const clipboardContent = await navigator.clipboard.read();
        for (const item of clipboardContent) {
          if (item.types.includes(textHtml)) {
            const htmlBlob = await item.getType(textHtml);
            const html = await htmlBlob.text();
            const fragment = document.createElement("html");
            fragment.innerHTML = html;
            const el = fragment.querySelector("table");
            if (el !== null) {
              data = decodeHTML(el);
              break;
            }
          }
          if (item.types.includes(textPlain)) {
            text = await (await item.getType(textPlain)).text();
          }
        }
      } else if (navigator.clipboard.readText !== void 0) {
        text = await navigator.clipboard.readText();
      } else if (e !== void 0 && (e == null ? void 0 : e.clipboardData) !== null) {
        if (e.clipboardData.types.includes(textHtml)) {
          const html = e.clipboardData.getData(textHtml);
          const fragment = document.createElement("html");
          fragment.innerHTML = html;
          const el = fragment.querySelector("table");
          if (el !== null) {
            data = decodeHTML(el);
          }
        }
        if (data === void 0 && e.clipboardData.types.includes(textPlain)) {
          text = e.clipboardData.getData(textPlain);
        }
      } else {
        return;
      }
      const [gridCol, gridRow] = target;
      const editList = [];
      do {
        if (onPaste === void 0) {
          const cellData = getMangledCellContent(target);
          const newVal = pasteToCell(cellData, target, (_f = text != null ? text : data == null ? void 0 : data.map((r) => r.join("	")).join("	")) != null ? _f : "");
          if (newVal !== void 0) {
            editList.push(newVal);
          }
          break;
        }
        if (data === void 0) {
          if (text === void 0)
            return;
          data = unquote(text);
        }
        if (onPaste === false || typeof onPaste === "function" && (onPaste == null ? void 0 : onPaste([target[0] - rowMarkerOffset, target[1]], data)) !== true) {
          return;
        }
        for (const [row, dataRow] of data.entries()) {
          if (row + gridRow >= rows)
            break;
          for (const [col, dataItem] of dataRow.entries()) {
            const index2 = [col + gridCol, row + gridRow];
            const cellData = getMangledCellContent(index2);
            const newVal = pasteToCell(cellData, index2, dataItem);
            if (newVal !== void 0) {
              editList.push(newVal);
            }
          }
        }
      } while (false);
      mangledOnCellsEdited(editList);
      (_g = gridRef.current) == null ? void 0 : _g.damage(editList.map((c) => ({
        cell: c.location
      })));
    }
  }, [
    coercePasteValue,
    getCellRenderer,
    getMangledCellContent,
    gridSelection,
    keybindings.paste,
    mangledOnCellsEdited,
    onPaste,
    rowMarkerOffset,
    rows
  ]);
  useEventListener("paste", onPasteInternal, window, false, true);
  const onCopy = React36.useCallback(async (e, ignoreFocus) => {
    var _a2, _b2;
    if (!keybindings.copy)
      return;
    const focused = ignoreFocus === true || ((_a2 = scrollRef.current) == null ? void 0 : _a2.contains(document.activeElement)) === true || ((_b2 = canvasRef.current) == null ? void 0 : _b2.contains(document.activeElement)) === true;
    const selectedColumns = gridSelection.columns;
    const selectedRows = gridSelection.rows;
    const copyToClipboardWithHeaders = (cells, columnIndexes) => {
      if (!copyHeaders) {
        copyToClipboard(cells, columnIndexes, e);
      } else {
        const headers = columnIndexes.map((index2) => ({
          kind: GridCellKind.Text,
          data: columnsIn[index2].title,
          displayData: columnsIn[index2].title,
          allowOverlay: false
        }));
        copyToClipboard([headers, ...cells], columnIndexes, e);
      }
    };
    if (focused && getCellsForSelection !== void 0) {
      if (gridSelection.current !== void 0) {
        let thunk = getCellsForSelection(gridSelection.current.range, abortControllerRef.current.signal);
        if (typeof thunk !== "object") {
          thunk = await thunk();
        }
        copyToClipboardWithHeaders(thunk, (0, import_range2.default)(gridSelection.current.range.x - rowMarkerOffset, gridSelection.current.range.x + gridSelection.current.range.width - rowMarkerOffset));
      } else if (selectedRows !== void 0 && selectedRows.length > 0) {
        const toCopy = [...selectedRows];
        const cells = toCopy.map((rowIndex) => {
          const thunk = getCellsForSelection({
            x: rowMarkerOffset,
            y: rowIndex,
            width: columnsIn.length - rowMarkerOffset,
            height: 1
          }, abortControllerRef.current.signal);
          if (typeof thunk === "object") {
            return thunk[0];
          }
          return thunk().then((v) => v[0]);
        });
        if (cells.some((x) => x instanceof Promise)) {
          const settled = await Promise.all(cells);
          copyToClipboardWithHeaders(settled, (0, import_range2.default)(columnsIn.length));
        } else {
          copyToClipboardWithHeaders(cells, (0, import_range2.default)(columnsIn.length));
        }
      } else if (selectedColumns.length > 0) {
        const results = [];
        const cols = [];
        for (const col of selectedColumns) {
          let thunk = getCellsForSelection({
            x: col,
            y: 0,
            width: 1,
            height: rows
          }, abortControllerRef.current.signal);
          if (typeof thunk !== "object") {
            thunk = await thunk();
          }
          results.push(thunk);
          cols.push(col - rowMarkerOffset);
        }
        if (results.length === 1) {
          copyToClipboardWithHeaders(results[0], cols);
        } else {
          const toCopy = results.reduce((pv, cv) => pv.map((row, index2) => [...row, ...cv[index2]]));
          copyToClipboardWithHeaders(toCopy, cols);
        }
      }
    }
  }, [columnsIn, getCellsForSelection, gridSelection, keybindings.copy, rowMarkerOffset, rows, copyHeaders]);
  useEventListener("copy", onCopy, window, false, false);
  const onSearchResultsChanged = React36.useCallback((results, navIndex) => {
    if (results.length === 0 || navIndex === -1)
      return;
    const [col, row] = results[navIndex];
    if (lastSent.current !== void 0 && lastSent.current[0] === col && lastSent.current[1] === row) {
      return;
    }
    lastSent.current = [col, row];
    updateSelectedCell(col, row, false, false);
  }, [updateSelectedCell]);
  const [outCol, outRow] = (_e = (_d = gridSelectionOuter == null ? void 0 : gridSelectionOuter.current) == null ? void 0 : _d.cell) != null ? _e : [];
  const scrollToRef = React36.useRef(scrollTo);
  scrollToRef.current = scrollTo;
  React36.useLayoutEffect(() => {
    var _a2, _b2, _c2, _d2;
    if (!hasJustScrolled.current && outCol !== void 0 && outRow !== void 0 && (outCol !== ((_b2 = (_a2 = expectedExternalGridSelection.current) == null ? void 0 : _a2.current) == null ? void 0 : _b2.cell[0]) || outRow !== ((_d2 = (_c2 = expectedExternalGridSelection.current) == null ? void 0 : _c2.current) == null ? void 0 : _d2.cell[1]))) {
      scrollToRef.current(outCol, outRow);
    }
    hasJustScrolled.current = false;
  }, [outCol, outRow]);
  const selectionOutOfBounds = gridSelection.current !== void 0 && (gridSelection.current.cell[0] >= columnsIn.length || gridSelection.current.cell[1] >= mangledRows);
  React36.useLayoutEffect(() => {
    if (selectionOutOfBounds) {
      setGridSelection(emptyGridSelection, false);
    }
  }, [selectionOutOfBounds, setGridSelection]);
  const disabledRows = React36.useMemo(() => {
    if (showTrailingBlankRow === true && (trailingRowOptions == null ? void 0 : trailingRowOptions.tint) === true) {
      return CompactSelection.fromSingleSelection(mangledRows - 1);
    }
    return CompactSelection.empty();
  }, [mangledRows, showTrailingBlankRow, trailingRowOptions == null ? void 0 : trailingRowOptions.tint]);
  const mangledVerticalBorder = React36.useCallback((col) => {
    var _a2;
    return typeof verticalBorder === "boolean" ? verticalBorder : (_a2 = verticalBorder == null ? void 0 : verticalBorder(col - rowMarkerOffset)) != null ? _a2 : true;
  }, [rowMarkerOffset, verticalBorder]);
  const renameGroupNode = React36.useMemo(() => {
    if (renameGroup === void 0 || canvasRef.current === null)
      return null;
    const { bounds, group } = renameGroup;
    const canvasBounds = canvasRef.current.getBoundingClientRect();
    return /* @__PURE__ */ React36.createElement(GroupRename, {
      bounds,
      group,
      canvasBounds,
      onClose: () => setRenameGroup(void 0),
      onFinish: (newVal) => {
        setRenameGroup(void 0);
        onGroupHeaderRenamed == null ? void 0 : onGroupHeaderRenamed(group, newVal);
      }
    });
  }, [onGroupHeaderRenamed, renameGroup]);
  const mangledFreezeColumns = Math.min(mangledCols.length, freezeColumns + (hasRowMarkers ? 1 : 0));
  React36.useImperativeHandle(forwardedRef, () => ({
    appendRow: (col) => appendRow(col + rowMarkerOffset),
    updateCells: (damageList) => {
      var _a2;
      if (rowMarkerOffset !== 0) {
        damageList = damageList.map((x) => ({ cell: [x.cell[0] + rowMarkerOffset, x.cell[1]] }));
      }
      return (_a2 = gridRef.current) == null ? void 0 : _a2.damage(damageList);
    },
    getBounds: (col, row) => {
      var _a2;
      return (_a2 = gridRef.current) == null ? void 0 : _a2.getBounds(col + rowMarkerOffset, row);
    },
    focus: () => {
      var _a2;
      return (_a2 = gridRef.current) == null ? void 0 : _a2.focus();
    },
    emit: async (e) => {
      switch (e) {
        case "delete":
          onKeyDown({
            bounds: void 0,
            cancel: () => void 0,
            stopPropagation: () => void 0,
            preventDefault: () => void 0,
            ctrlKey: false,
            key: "Delete",
            keyCode: 46,
            metaKey: false,
            shiftKey: false,
            altKey: false,
            rawEvent: void 0
          });
          break;
        case "fill-right":
          onKeyDown({
            bounds: void 0,
            cancel: () => void 0,
            stopPropagation: () => void 0,
            preventDefault: () => void 0,
            ctrlKey: true,
            key: "r",
            keyCode: 82,
            metaKey: false,
            shiftKey: false,
            altKey: false,
            rawEvent: void 0
          });
          break;
        case "fill-down":
          onKeyDown({
            bounds: void 0,
            cancel: () => void 0,
            stopPropagation: () => void 0,
            preventDefault: () => void 0,
            ctrlKey: true,
            key: "d",
            keyCode: 68,
            metaKey: false,
            shiftKey: false,
            altKey: false,
            rawEvent: void 0
          });
          break;
        case "copy":
          await onCopy(void 0, true);
          break;
        case "paste":
          await onPasteInternal();
          break;
      }
    },
    scrollTo,
    remeasureColumns: (cols) => {
      for (const col of cols) {
        void normalSizeColumn(col + rowMarkerOffset, true);
      }
    }
  }), [appendRow, normalSizeColumn, onCopy, onKeyDown, onPasteInternal, rowMarkerOffset, scrollTo]);
  const [selCol, selRow] = currentCell != null ? currentCell : [];
  const onCellFocused = React36.useCallback((cell) => {
    const [col, row] = cell;
    if (row === -1) {
      if (columnSelect !== "none") {
        setSelectedColumns(CompactSelection.fromSingleSelection(col), void 0, false);
        focus();
      }
      return;
    }
    if (selCol === col && selRow === row)
      return;
    setCurrent({
      cell,
      range: { x: col, y: row, width: 1, height: 1 }
    }, true, false, "keyboard-nav");
    scrollTo(col, row);
  }, [columnSelect, focus, scrollTo, selCol, selRow, setCurrent, setSelectedColumns]);
  const [isFocused, setIsFocused] = React36.useState(false);
  const setIsFocusedDebounced = React36.useRef((0, import_debounce2.default)((val) => {
    setIsFocused(val);
  }, 5));
  const onCanvasFocused = React36.useCallback(() => {
    setIsFocusedDebounced.current(true);
    if (gridSelection.current === void 0 && gridSelection.columns.length === 0 && gridSelection.rows.length === 0 && mouseState === void 0) {
      setCurrent({
        cell: [rowMarkerOffset, cellYOffset],
        range: {
          x: rowMarkerOffset,
          y: cellYOffset,
          width: 1,
          height: 1
        }
      }, true, false, "keyboard-select");
    }
  }, [cellYOffset, gridSelection, mouseState, rowMarkerOffset, setCurrent]);
  const onFocusOut = React36.useCallback(() => {
    setIsFocusedDebounced.current(false);
  }, []);
  const [idealWidth, idealHeight] = React36.useMemo(() => {
    var _a2;
    let h;
    const scrollbarWidth = (_a2 = experimental == null ? void 0 : experimental.scrollbarWidthOverride) != null ? _a2 : getScrollBarWidth();
    const rowsCountWithTrailingRow = rows + (showTrailingBlankRow ? 1 : 0);
    if (typeof rowHeight === "number") {
      h = totalHeaderHeight + rowsCountWithTrailingRow * rowHeight;
    } else {
      let avg = 0;
      const toAverage = Math.min(rowsCountWithTrailingRow, 10);
      for (let i = 0; i < toAverage; i++) {
        avg += rowHeight(i);
      }
      avg = Math.floor(avg / toAverage);
      h = totalHeaderHeight + rowsCountWithTrailingRow * avg;
    }
    h += scrollbarWidth;
    const w = mangledCols.reduce((acc, x) => x.width + acc, 0) + scrollbarWidth;
    return [`${Math.min(1e5, w)}px`, `${Math.min(1e5, h)}px`];
  }, [mangledCols, experimental == null ? void 0 : experimental.scrollbarWidthOverride, rowHeight, rows, showTrailingBlankRow, totalHeaderHeight]);
  return /* @__PURE__ */ React36.createElement(ThemeContext.Provider, {
    value: mergedTheme
  }, /* @__PURE__ */ React36.createElement(DataEditorContainer, {
    style: makeCSSStyle(mergedTheme),
    className,
    inWidth: width != null ? width : idealWidth,
    inHeight: height != null ? height : idealHeight
  }, /* @__PURE__ */ React36.createElement(data_grid_search_default, {
    fillHandle,
    drawFocusRing: drawFocusRing2,
    experimental,
    fixedShadowX,
    fixedShadowY,
    getRowThemeOverride,
    headerIcons,
    imageWindowLoader,
    initialSize,
    isDraggable,
    onDragLeave,
    onRowMoved,
    overscrollX,
    overscrollY,
    preventDiagonalScrolling,
    rightElement,
    rightElementProps,
    showMinimap,
    smoothScrollX,
    smoothScrollY,
    className,
    enableGroups,
    onCanvasFocused,
    onCanvasBlur: onFocusOut,
    canvasRef,
    onContextMenu,
    theme: mergedTheme,
    cellXOffset,
    cellYOffset,
    accessibilityHeight: visibleRegion.height,
    onDragEnd,
    columns: mangledCols,
    drawCustomCell: drawCell2,
    drawHeader: drawHeader2,
    disabledRows,
    freezeColumns: mangledFreezeColumns,
    lockColumns: rowMarkerOffset,
    firstColAccessible: rowMarkerOffset === 0,
    getCellContent: getMangledCellContent,
    minColumnWidth,
    maxColumnWidth,
    searchInputRef,
    showSearch,
    onSearchClose,
    highlightRegions,
    getCellsForSelection,
    getGroupDetails: mangledGetGroupDetails,
    headerHeight,
    isFocused,
    groupHeaderHeight: enableGroups ? groupHeaderHeight : 0,
    trailingRowType: !showTrailingBlankRow ? "none" : (trailingRowOptions == null ? void 0 : trailingRowOptions.sticky) === true ? "sticky" : "appended",
    onColumnResize,
    onColumnResizeEnd,
    onColumnResizeStart,
    onCellFocused,
    onColumnMoved: onColumnMovedImpl,
    onDragStart: onDragStartImpl,
    onHeaderMenuClick: onHeaderMenuClickInner,
    onItemHovered: onItemHoveredImpl,
    isFilling: (mouseState == null ? void 0 : mouseState.fillHandle) === true,
    onMouseMove: onMouseMoveImpl,
    onKeyDown,
    onKeyUp: onKeyUpIn,
    onMouseDown,
    onMouseUp,
    onDragOverCell,
    onDrop,
    onSearchResultsChanged,
    onVisibleRegionChanged: onVisibleRegionChangedImpl,
    clientSize: [clientSize[0], clientSize[1]],
    rowHeight,
    rows: mangledRows,
    scrollRef,
    selection: gridSelection,
    translateX: visibleRegion.tx,
    translateY: visibleRegion.ty,
    verticalBorder: mangledVerticalBorder,
    gridRef,
    getCellRenderer,
    scrollToEnd
  }), renameGroupNode, overlay !== void 0 && /* @__PURE__ */ React36.createElement(data_grid_overlay_editor_default, {
    ...overlay,
    validateCell,
    id: overlayID,
    getCellRenderer,
    className: (experimental == null ? void 0 : experimental.isSubGrid) === true ? "click-outside-ignore" : void 0,
    provideEditor,
    imageEditorOverride,
    onFinishEditing,
    markdownDivCreateNode
  })));
};
var DataEditor = React36.forwardRef(DataEditorImpl);

// src/data-editor/use-custom-cells.ts
var React37 = __toESM(require("react"), 1);
function inflate(input) {
  return {
    ...input,
    kind: GridCellKind.Custom
  };
}
function useCustomCells(cells) {
  return { customRenderers: React37.useMemo(() => cells.map(inflate), [cells]) };
}
//# sourceMappingURL=index.js.map
