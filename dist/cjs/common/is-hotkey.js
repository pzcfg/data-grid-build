"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isHotkey = isHotkey;

var _browserDetect = require("./browser-detect");

function isHotkey(hotkey, args) {
  if (hotkey.length === 0) return false;
  let wantCtrl = false;
  let wantShift = false;
  let wantAlt = false;
  let wantMeta = false;
  const split = hotkey.split("+");
  const key = split.pop();
  if (key === undefined) return false;

  if (key.length > 1 && key.startsWith("_")) {
    const keycode = Number.parseInt(key.substring(1));
    if (keycode !== args.keyCode) return false;
  } else {
    if (key !== args.key) return false;
  }

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
        if (_browserDetect.browserIsOSX.value) {
          wantMeta = true;
        } else {
          wantCtrl = true;
        }

        break;
    }
  }

  return args.altKey === wantAlt && args.ctrlKey === wantCtrl && args.shiftKey === wantShift && args.metaKey === wantMeta;
}