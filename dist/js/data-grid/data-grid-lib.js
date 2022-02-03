import { degreesToRadians, direction } from "../common/utils";
import React from "react";
export function useMappedColumns(columns, freezeColumns) {
  return React.useMemo(() => columns.map((c, i) => ({ ...c,
    sourceIndex: i,
    sticky: i < freezeColumns
  })), [columns, freezeColumns]);
}
export function isGroupEqual(left, right) {
  return (left !== null && left !== void 0 ? left : "") === (right !== null && right !== void 0 ? right : "");
}

function remapForDnDState(columns, dndState) {
  let mappedCols = columns;

  if (dndState !== undefined) {
    let writable = [...columns];
    const temp = mappedCols[dndState.src];

    if (dndState.src > dndState.dest) {
      writable.splice(dndState.src, 1);
      writable.splice(dndState.dest, 0, temp);
    } else {
      writable.splice(dndState.dest + 1, 0, temp);
      writable.splice(dndState.src, 1);
    }

    writable = writable.map((c, i) => ({ ...c,
      sticky: columns[i].sticky
    }));
    mappedCols = writable;
  }

  return mappedCols;
}

export function getStickyWidth(columns, dndState) {
  let result = 0;
  const remapped = remapForDnDState(columns, dndState);

  for (let i = 0; i < remapped.length; i++) {
    const c = remapped[i];
    if (c.sticky) result += c.width;else break;
  }

  return result;
}
export function getEffectiveColumns(columns, cellXOffset, width, dndState, tx) {
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
  let curX = tx !== null && tx !== void 0 ? tx : 0;

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
export function getColumnIndexForX(targetX, effectiveColumns, translateX) {
  let x = 0;

  for (const c of effectiveColumns) {
    const cx = c.sticky ? x : x + (translateX !== null && translateX !== void 0 ? translateX : 0);

    if (targetX <= cx + c.width) {
      return c.sourceIndex;
    }

    x += c.width;
  }

  return -1;
}
export function getRowIndexForY(targetY, height, hasGroups, headerHeight, groupHeaderHeight, rows, rowHeight, cellYOffset, translateY, lastRowSticky) {
  const totalHeaderHeight = headerHeight + groupHeaderHeight;
  if (hasGroups && targetY <= groupHeaderHeight) return -2;
  if (targetY <= totalHeaderHeight) return -1;
  const lastRowHeight = typeof rowHeight === "number" ? rowHeight : rowHeight(rows - 1);

  if (lastRowSticky && targetY > height - lastRowHeight) {
    return rows - 1;
  }

  const effectiveRows = rows - (lastRowSticky ? 1 : 0);
  const ty = targetY - (translateY !== null && translateY !== void 0 ? translateY : 0);

  if (typeof rowHeight === "number") {
    const target = Math.floor((ty - totalHeaderHeight) / rowHeight) + cellYOffset;
    if (target >= effectiveRows) return undefined;
    return target;
  } else {
    let curY = totalHeaderHeight;

    for (let i = cellYOffset; i < effectiveRows; i++) {
      const rh = rowHeight(i);
      if (ty <= curY + rh) return i;
      curY += rh;
    }

    return undefined;
  }
}
let metricsSize = 0;
let metricsCache = {};

async function clearCacheOnLoad() {
  var _document, _document$fonts;

  if (((_document = document) === null || _document === void 0 ? void 0 : (_document$fonts = _document.fonts) === null || _document$fonts === void 0 ? void 0 : _document$fonts.ready) === undefined) return;
  await document.fonts.ready;
  metricsSize = 0;
  metricsCache = {};
}

void clearCacheOnLoad();
export function measureTextCached(s, ctx, font) {
  const key = `${s}_${font !== null && font !== void 0 ? font : ctx.font}`;
  let metrics = metricsCache[key];

  if (metrics === undefined) {
    metrics = ctx.measureText(s);
    metricsCache[key] = metrics;
    metricsSize++;
  }

  if (metricsSize > 10000) {
    metricsCache = {};
    metricsSize = 0;
  }

  return metrics;
}
export function drawWithLastUpdate(args, lastUpdate, frameTime, draw) {
  const {
    ctx,
    x,
    y,
    w: width,
    h: height,
    theme
  } = args;
  let progress = Number.MAX_SAFE_INTEGER;
  const animTime = 500;
  let forcePrep = false;

  if (lastUpdate !== undefined) {
    progress = frameTime - lastUpdate;

    if (progress < animTime) {
      const fade = 1 - progress / animTime;
      ctx.globalAlpha = fade;
      ctx.fillStyle = theme.bgSearchResult;
      ctx.fillRect(x, y, width, height);
      ctx.globalAlpha = 1;
      forcePrep = true;
    }
  }

  draw(forcePrep);
  return progress < animTime;
}
export function prepTextCell(args, overrideColor) {
  const {
    ctx,
    theme
  } = args;
  ctx.fillStyle = overrideColor !== null && overrideColor !== void 0 ? overrideColor : theme.textDark;
}
export function drawTextCell(args, data) {
  const {
    ctx,
    x,
    y,
    w,
    h,
    theme
  } = args;
  data = data.split(/\r?\n/)[0].slice(0, Math.round(w / 4));
  const dir = direction(data);

  if (dir === "rtl") {
    const textWidth = measureTextCached(data, ctx, `${theme.baseFontStyle} ${theme.fontFamily}`).width;
    ctx.fillText(data, x + w - theme.cellHorizontalPadding - textWidth + 0.5, y + h / 2);
  } else {
    ctx.fillText(data, x + theme.cellHorizontalPadding + 0.5, y + h / 2);
  }
}
export function drawNewRowCell(args, data, isFirst, icon) {
  const {
    ctx,
    x,
    y,
    w,
    h,
    hoverAmount,
    theme
  } = args;
  ctx.beginPath();
  ctx.globalAlpha = hoverAmount;
  ctx.rect(x, y, w, h);
  ctx.fillStyle = theme.bgHeaderHovered;
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.beginPath();
  const finalLineSize = 12;
  const lineSize = isFirst ? finalLineSize : hoverAmount * finalLineSize;
  const xTranslate = isFirst ? 0 : (1 - hoverAmount) * finalLineSize * 0.5;
  const padPlus = theme.cellHorizontalPadding + 4;

  if (icon !== null && icon !== void 0 && icon.path) {
    if (isFirst) {
      var _icon$x, _icon$y;

      ctx.save();
      ctx.fillStyle = theme.bgIconHeader;
      ctx.translate(x + padPlus + ((_icon$x = icon.x) !== null && _icon$x !== void 0 ? _icon$x : 0), y + ((_icon$y = icon.y) !== null && _icon$y !== void 0 ? _icon$y : 0));
      ctx.fill(icon.path, 'evenodd');
      ctx.restore();
    }
  } else if (lineSize > 0) {
    ctx.moveTo(x + padPlus + xTranslate, y + h / 2);
    ctx.lineTo(x + padPlus + xTranslate + lineSize, y + h / 2);
    ctx.moveTo(x + padPlus + xTranslate + lineSize * 0.5, y + h / 2 - lineSize * 0.5);
    ctx.lineTo(x + padPlus + xTranslate + lineSize * 0.5, y + h / 2 + lineSize * 0.5);
    ctx.lineWidth = 2;
    ctx.strokeStyle = theme.bgIconHeader;
    ctx.lineCap = "round";
    ctx.stroke();
  }

  ctx.fillStyle = theme.textMedium;
  ctx.font = '400 14px Inter var, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';

  if ((icon === null || icon === void 0 ? void 0 : icon.width) !== undefined) {
    ctx.fillText(data, icon.width + x + theme.cellHorizontalPadding * 2 + 0.5, y + h / 2);
  } else {
    ctx.fillText(data, 24 + x + theme.cellHorizontalPadding + 0.5, y + h / 2);
  }

  ctx.beginPath();
}

function drawCheckbox(ctx, theme, checked, x, y, width, height, highlighted) {
  let hoverX = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : -20;
  let hoverY = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : -20;
  const centerX = x + width / 2;
  const centerY = y + height / 2;
  const hovered = Math.abs(hoverX - width / 2) < 10 && Math.abs(hoverY - height / 2) < 10;

  if (checked) {
    ctx.beginPath();
    roundedRect(ctx, centerX - 9, centerY - 9, 18, 18, 4);
    ctx.fillStyle = highlighted ? theme.accentColor : theme.textLight;
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(centerX - 8 + 3.65005, centerY - 8 + 7.84995);
    ctx.lineTo(centerX - 8 + 6.37587, centerY - 8 + 10.7304);
    ctx.lineTo(centerX - 8 + 11.9999, centerY - 8 + 4.74995);
    ctx.strokeStyle = theme.accentFg;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = 1.9;
    ctx.stroke();
  } else {
    ctx.beginPath();
    roundedRect(ctx, centerX - 8.5, centerY - 8.5, 17, 17, 4);
    ctx.lineWidth = 1;
    ctx.strokeStyle = hovered ? theme.textMedium : theme.textLight;
    ctx.stroke();
  }
}

export function prepMarkerRowCell(args) {
  const {
    ctx,
    theme
  } = args;
  ctx.font = `9px ${theme.fontFamily}`;
}
export function drawMarkerRowCell(args, index, checked, markerKind) {
  const {
    ctx,
    x,
    y,
    w: width,
    h: height,
    hoverAmount,
    theme
  } = args;
  const checkedboxAlpha = checked ? 1 : hoverAmount;

  if (markerKind !== "number" && checkedboxAlpha > 0) {
    ctx.globalAlpha = checkedboxAlpha;
    drawCheckbox(ctx, theme, checked, x, y, width, height, true);
    ctx.globalAlpha = 1;
  }

  if (markerKind === "number" || markerKind === "both" && !checked) {
    const text = (index + 1).toString();
    const w = measureTextCached(text, ctx, `9px ${theme.fontFamily}`).width;
    const start = x + (width - w) / 2;

    if (markerKind === "both" && hoverAmount !== 0) {
      ctx.globalAlpha = 1 - hoverAmount;
    }

    ctx.fillStyle = theme.textLight;
    ctx.fillText(text, start, y + height / 2);

    if (hoverAmount !== 0) {
      ctx.globalAlpha = 1;
    }
  }
}
export function drawProtectedCell(args) {
  const {
    ctx,
    theme,
    x,
    y,
    w,
    h,
    highlighted
  } = args;

  if (!highlighted) {
    ctx.beginPath();
    ctx.rect(x + 1, y + 1, w - 1, h - 1);
    ctx.fillStyle = theme.bgCellMedium;
    ctx.fill();
  }

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
    radius = {
      tl: radius,
      tr: radius,
      br: radius,
      bl: radius
    };
  }

  ctx.moveTo(x + radius.tl, y);
  ctx.arcTo(x + width, y, x + width, y + radius.tr, radius.tr);
  ctx.arcTo(x + width, y + height, x + width - radius.br, y + height, radius.br);
  ctx.arcTo(x, y + height, x, y + height - radius.bl, radius.bl);
  ctx.arcTo(x, y, x + radius.tl, y, radius.tl);
}

export function drawBoolean(args, data, canEdit) {
  const {
    ctx,
    hoverAmount,
    theme,
    x,
    y,
    w,
    h,
    highlighted,
    hoverX,
    hoverY
  } = args;
  const hoverEffect = 0.35;
  ctx.globalAlpha = canEdit ? 1 - hoverEffect + hoverEffect * hoverAmount : 0.4;
  drawCheckbox(ctx, theme, data, x, y, w, h, highlighted, hoverX, hoverY);
  ctx.globalAlpha = 1;
}
const itemMargin = 4;
export function drawBubbles(args, data) {
  const {
    x,
    y,
    w,
    h,
    theme,
    ctx,
    highlighted
  } = args;
  const bubbleHeight = 20;
  const bubblePad = 8;
  const bubbleMargin = itemMargin;
  let renderX = x + theme.cellHorizontalPadding;
  const renderBoxes = [];

  for (const s of data) {
    if (renderX > x + w) break;
    const textWidth = measureTextCached(s, ctx, `${theme.baseFontStyle} ${theme.fontFamily}`).width;
    renderBoxes.push({
      x: renderX,
      width: textWidth
    });
    renderX += textWidth + bubblePad * 2 + bubbleMargin;
  }

  ctx.beginPath();
  renderBoxes.forEach(rectInfo => {
    roundedRect(ctx, rectInfo.x, y + (h - bubbleHeight) / 2, rectInfo.width + bubblePad * 2, bubbleHeight, bubbleHeight / 2);
  });
  ctx.fillStyle = highlighted ? theme.bgBubbleSelected : theme.bgBubble;
  ctx.fill();
  renderBoxes.forEach((rectInfo, i) => {
    ctx.beginPath();
    ctx.fillStyle = theme.textBubble;
    ctx.fillText(data[i], rectInfo.x + bubblePad, y + h / 2);
  });
}
export function drawDrilldownCell(args, data) {
  const {
    x,
    y,
    w,
    h,
    theme,
    ctx,
    imageLoader,
    col,
    row
  } = args;
  const bubbleHeight = 24;
  const bubblePad = 8;
  const bubbleMargin = itemMargin;
  let renderX = x + theme.cellHorizontalPadding;
  const renderBoxes = [];

  for (const el of data) {
    if (renderX > x + w) break;
    const textWidth = measureTextCached(el.text, ctx, `${theme.baseFontStyle} ${theme.fontFamily}`).width;
    let imgWidth = 0;

    if (el.img !== undefined) {
      const img = imageLoader.loadOrGetImage(el.img, col, row);

      if (img !== undefined) {
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

  ctx.beginPath();
  renderBoxes.forEach(rectInfo => {
    roundedRect(ctx, Math.floor(rectInfo.x), y + (h - bubbleHeight) / 2, Math.floor(rectInfo.width), bubbleHeight, 6);
  });
  ctx.shadowColor = "rgba(24, 25, 34, 0.4)";
  ctx.shadowBlur = 1;
  ctx.fillStyle = theme.bgCell;
  ctx.fill();
  ctx.shadowColor = "rgba(24, 25, 34, 0.2)";
  ctx.shadowOffsetY = 1;
  ctx.shadowBlur = 5;
  ctx.fillStyle = theme.bgCell;
  ctx.fill();
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 0;
  ctx.shadowBlur = 0;
  ctx.beginPath();
  renderBoxes.forEach(rectInfo => {
    roundedRect(ctx, Math.floor(rectInfo.x) + 0.5, Math.floor(y + (h - bubbleHeight) / 2) + 0.5, Math.round(rectInfo.width), bubbleHeight, 6);
  });
  ctx.strokeStyle = theme.drilldownBorder;
  ctx.lineWidth = 1;
  ctx.stroke();
  renderBoxes.forEach((rectInfo, i) => {
    const d = data[i];
    let drawX = rectInfo.x + bubblePad;

    if (d.img !== undefined) {
      const img = imageLoader.loadOrGetImage(d.img, col, row);

      if (img !== undefined) {
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
    ctx.fillText(d.text, drawX, y + h / 2);
  });
}
export function drawImage(args, data) {
  const {
    x,
    y,
    h,
    col,
    row,
    theme,
    ctx,
    imageLoader
  } = args;
  let drawX = x + theme.cellHorizontalPadding;

  for (const i of data) {
    if (i.length === 0) continue;
    const img = imageLoader.loadOrGetImage(i, col, row);

    if (img !== undefined) {
      const imgHeight = h - theme.cellVerticalPadding * 2;
      const imgWidth = img.width * (imgHeight / img.height);
      roundedRect(ctx, drawX, y + theme.cellVerticalPadding, imgWidth, imgHeight, 4);
      ctx.save();
      ctx.clip();
      ctx.drawImage(img, drawX, y + theme.cellVerticalPadding, imgWidth, imgHeight);
      ctx.restore();
      drawX += imgWidth + itemMargin;
    }
  }
}
export function roundedPoly(ctx, points, radiusAll) {
  const asVec = function (p, pp) {
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

  let radius = radiusAll;
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

    if (p2.radius !== undefined) {
      radius = p2.radius;
    } else {
      radius = radiusAll;
    }

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