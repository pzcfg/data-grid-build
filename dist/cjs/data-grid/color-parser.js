"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseToRgba = parseToRgba;
exports.withAlpha = withAlpha;
const cache = {};
let div = null;

function createDiv() {
  const d = document.createElement("div");
  d.classList.add("color2k-parser");
  d.style.opacity = "0";
  d.style.pointerEvents = "none";
  d.style.position = "fixed";
  document.body.appendChild(d);
  return d;
}

function parseToRgba(color) {
  const normalizedColor = color.toLowerCase().trim();
  if (cache[normalizedColor] !== undefined) return cache[normalizedColor];
  div = div || createDiv();
  div.style.color = "#000";
  div.style.color = normalizedColor;
  const control = getComputedStyle(div).color;
  div.style.color = "#fff";
  div.style.color = normalizedColor;
  const computedColor = getComputedStyle(div).color;
  if (computedColor !== control) throw new Error("Could not parse color");
  const result = computedColor.replace(/[^\d.,]/g, "").split(",").map(parseFloat);

  if (result.length < 4) {
    result.push(1);
  }

  cache[normalizedColor] = result;
  return result;
}

function withAlpha(color, alpha) {
  const [r, g, b] = parseToRgba(color);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}