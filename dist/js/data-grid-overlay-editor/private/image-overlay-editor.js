import * as React from "react";
import { ImageOverlayEditorStyle } from "./image-overlay-editor-style";
import { Carousel } from "react-responsive-carousel";
import { EditPencil } from "../../common/utils";

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
  return React.createElement(ImageOverlayEditorStyle, {
    onKeyDown: onKeyDown
  }, React.createElement(Carousel, {
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
  }, React.createElement(EditPencil, null)), React.createElement("textarea", {
    autoFocus: true,
    onKeyDown: onKeyDown
  }));
};

export default ImageOverlayEditor;