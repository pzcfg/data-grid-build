"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _imageOverlayEditorStyle = require("./image-overlay-editor-style");

var _reactResponsiveCarousel = require("react-responsive-carousel");

var _utils = require("../../common/utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const ImageOverlayEditor = p => {
  const {
    urls,
    canWrite,
    onKeyDown,
    onEditClick,
    renderImage
  } = p;
  const filtered = urls.filter(u => u !== "");

  if (filtered.length === 0) {
    return null;
  }

  const allowMove = filtered.length > 1;
  return React.createElement(_imageOverlayEditorStyle.ImageOverlayEditorStyle, {
    onKeyDown: onKeyDown,
    "data-testid": "GDG-default-image-overlay-editor"
  }, React.createElement(_reactResponsiveCarousel.Carousel, {
    showArrows: allowMove,
    showThumbs: false,
    swipeable: allowMove,
    emulateTouch: allowMove,
    infiniteLoop: allowMove
  }, filtered.map(url => {
    var _renderImage;

    const innerContent = (_renderImage = renderImage === null || renderImage === void 0 ? void 0 : renderImage(url)) !== null && _renderImage !== void 0 ? _renderImage : React.createElement("img", {
      draggable: false,
      src: url
    });
    return React.createElement("div", {
      className: "centering-container",
      key: url
    }, innerContent);
  })), canWrite && onEditClick && React.createElement("button", {
    className: "edit-icon",
    onClick: onEditClick
  }, React.createElement(_utils.EditPencil, null)), React.createElement("textarea", {
    className: "gdg-input",
    autoFocus: true,
    onKeyDown: onKeyDown
  }));
};

var _default = ImageOverlayEditor;
exports.default = _default;