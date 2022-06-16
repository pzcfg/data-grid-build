import groupBy from "lodash/groupBy.js";
import { GridCellKind, isInnerOnlyCell } from "./data-grid-types.js";
import { getEffectiveColumns, getStickyWidth, roundedPoly, drawWithLastUpdate, isGroupEqual, cellIsSelected, cellIsInRange, computeBounds, getMiddleCenterBias } from "./data-grid-lib.js";
import { blend, withAlpha } from "./color-parser.js";
import { CellRenderers } from "./cells/index.js";
const loadingCell = {
  kind: GridCellKind.Loading,
  allowOverlay: false
};
export function drawCell(ctx, row, cell, col, x, y, w, h, highlighted, theme, drawCustomCell, imageLoader, spriteManager, hoverAmount, hoverInfo, frameTime, lastPrep, enqueue) {
  let hoverX;
  let hoverY;

  if (hoverInfo !== undefined && hoverInfo[0][0] === col && hoverInfo[0][1] === row) {
    hoverX = hoverInfo[1][0];
    hoverY = hoverInfo[1][1];
  }

  let result = undefined;
  const args = {
    ctx,
    theme,
    col,
    row,
    cell,
    x,
    y,
    w,
    h,
    highlighted,
    hoverAmount,
    hoverX,
    hoverY,
    imageLoader,
    spriteManager
  };
  let forceAnim = false;
  const needsAnim = drawWithLastUpdate(args, cell.lastUpdated, frameTime, lastPrep, () => {
    const drawn = isInnerOnlyCell(cell) ? false : (drawCustomCell === null || drawCustomCell === void 0 ? void 0 : drawCustomCell({
      ctx,
      cell,
      theme,
      rect: {
        x,
        y,
        width: w,
        height: h
      },
      col,
      row,
      hoverAmount,
      hoverX,
      hoverY,
      highlighted,
      imageLoader,
      requestAnimationFrame: () => {
        forceAnim = true;
      }
    })) === true;

    if (!drawn && cell.kind !== GridCellKind.Custom) {
      var _lastPrep, _r$renderPrep;

      const r = CellRenderers[cell.kind];

      if (((_lastPrep = lastPrep) === null || _lastPrep === void 0 ? void 0 : _lastPrep.renderer) !== r) {
        var _lastPrep2, _lastPrep2$deprep;

        (_lastPrep2 = lastPrep) === null || _lastPrep2 === void 0 ? void 0 : (_lastPrep2$deprep = _lastPrep2.deprep) === null || _lastPrep2$deprep === void 0 ? void 0 : _lastPrep2$deprep.call(_lastPrep2, args);
        lastPrep = undefined;
      }

      const partialPrepResult = (_r$renderPrep = r.renderPrep) === null || _r$renderPrep === void 0 ? void 0 : _r$renderPrep.call(r, args, lastPrep);
      r.render(args);
      result = {
        deprep: partialPrepResult === null || partialPrepResult === void 0 ? void 0 : partialPrepResult.deprep,
        fillStyle: partialPrepResult === null || partialPrepResult === void 0 ? void 0 : partialPrepResult.fillStyle,
        font: partialPrepResult === null || partialPrepResult === void 0 ? void 0 : partialPrepResult.font,
        renderer: r
      };
    }
  });
  if (needsAnim || forceAnim) enqueue === null || enqueue === void 0 ? void 0 : enqueue([col, row]);
  return result;
}

function blitLastFrame(ctx, canvas, last, cellXOffset, cellYOffset, translateX, translateY, lastRowSticky, width, height, rows, totalHeaderHeight, dpr, columns, effectiveCols, getRowHeight) {
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
    deltaX += columns[i].width;
  }

  if (cellXOffset > last.cellXOffset) {
    deltaX = -deltaX;
  }

  deltaX += translateX - last.translateX;
  let stickyWidth = getStickyWidth(effectiveCols);
  if (stickyWidth > 0) stickyWidth++;

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
        width: width,
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
        width: width,
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
        height: height
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
        height: height
      });
    }

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.drawImage(canvas, args.sx, args.sy, args.sw, args.sh, args.dx, args.dy, args.dw, args.dh);
    ctx.scale(dpr, dpr);
  }

  ctx.imageSmoothingEnabled = true;
  return {
    regions: drawRegions,
    yOnly: blittedYOnly
  };
}

function drawGridLines(ctx, effectiveCols, cellYOffset, translateX, translateY, width, height, drawRegions, spans, groupHeaderHeight, totalHeaderHeight, getRowHeight, getRowThemeOverride, verticalBorder, lastRowSticky, rows, theme) {
  var _theme$horizontalBord;

  let verticalOnly = arguments.length > 17 && arguments[17] !== undefined ? arguments[17] : false;

  if (spans !== undefined) {
    ctx.beginPath();
    ctx.save();
    ctx.rect(0, 0, width, height);

    for (const span of spans) {
      ctx.rect(span.x + 1, span.y + 1, span.width - 1, span.height - 1);
    }

    ctx.clip("evenodd");
  }

  const hColor = (_theme$horizontalBord = theme.horizontalBorderColor) !== null && _theme$horizontalBord !== void 0 ? _theme$horizontalBord : theme.borderColor;
  const vColor = theme.borderColor;
  let minX = 0;
  let maxX = width;
  let minY = 0;
  let maxY = height;

  if (drawRegions !== undefined && drawRegions.length > 0) {
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
  ctx.moveTo(minX, totalHeaderHeight + 0.5);
  ctx.lineTo(maxX, totalHeaderHeight + 0.5);
  ctx.strokeStyle = theme.bgHeader;
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.beginPath();
  let x = 0.5;

  for (let index = 0; index < effectiveCols.length; index++) {
    const c = effectiveCols[index];
    if (c.width === 0) continue;
    x += c.width;
    const tx = c.sticky ? x : x + translateX;

    if (tx >= minX && tx <= maxX - 1 && (index === effectiveCols.length - 1 || verticalBorder(index + 1))) {
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

  if (lastRowSticky) {
    toDraw.push({
      x1: minX,
      y1: stickyRowY,
      x2: maxX,
      y2: stickyRowY,
      color: hColor
    });
  }

  if (verticalOnly !== true) {
    let y = totalHeaderHeight + 0.5;
    let row = cellYOffset;
    let isHeader = true;
    const target = lastRowSticky ? height - stickyHeight : height;

    while (y + translateY <= target) {
      const ty = isHeader ? y : y + translateY;

      if (ty >= minY && ty <= maxY - 1 && (!lastRowSticky || row !== rows - 1 || Math.abs(ty - stickyRowY) > 1)) {
        var _ref, _rowTheme$horizontalB;

        const rowTheme = isHeader ? undefined : getRowThemeOverride === null || getRowThemeOverride === void 0 ? void 0 : getRowThemeOverride(row);
        toDraw.push({
          x1: minX,
          y1: ty,
          x2: maxX,
          y2: ty,
          color: (_ref = (_rowTheme$horizontalB = rowTheme === null || rowTheme === void 0 ? void 0 : rowTheme.horizontalBorderColor) !== null && _rowTheme$horizontalB !== void 0 ? _rowTheme$horizontalB : rowTheme === null || rowTheme === void 0 ? void 0 : rowTheme.borderColor) !== null && _ref !== void 0 ? _ref : hColor
        });
      }

      y += getRowHeight(row);
      isHeader = false;
      row++;
    }
  }

  const groups = groupBy(toDraw, line => line.color);

  for (const g of Object.keys(groups)) {
    ctx.strokeStyle = g;

    for (const line of groups[g]) {
      ctx.moveTo(line.x1, line.y1);
      ctx.lineTo(line.x2, line.y2);
    }

    ctx.stroke();
    ctx.beginPath();
  }

  if (spans !== undefined) {
    ctx.restore();
  }
}

export function getActionBoundsForGroup(box, actions) {
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
export function pointInRect(rect, x, y) {
  return x >= rect.x && x <= rect.x + rect.width && y >= rect.y && y <= rect.y + rect.height;
}

function drawGroups(ctx, effectiveCols, width, translateX, groupHeaderHeight, hovered, theme, spriteManager, _hoverValues, verticalBorder, getGroupDetails, damage) {
  var _hovered$;

  const xPad = 8;
  const [hCol, hRow] = (_hovered$ = hovered === null || hovered === void 0 ? void 0 : hovered[0]) !== null && _hovered$ !== void 0 ? _hovered$ : [];
  let finalX = 0;
  walkGroups(effectiveCols, width, translateX, groupHeaderHeight, (span, groupName, x, y, w, h) => {
    var _groupTheme$textGroup;

    if (damage !== undefined && !damage.some(d => d[1] === -2 && d[0] >= span[0] && d[0] <= span[1])) return;
    ctx.save();
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.clip();
    const group = getGroupDetails(groupName);
    const groupTheme = (group === null || group === void 0 ? void 0 : group.overrideTheme) === undefined ? theme : { ...theme,
      ...group.overrideTheme
    };
    const isHovered = hRow === -2 && hCol !== undefined && hCol >= span[0] && hCol <= span[1];
    const fillColor = isHovered ? groupTheme.bgHeaderHovered : groupTheme.bgHeader;

    if (fillColor !== theme.bgHeader) {
      ctx.fillStyle = fillColor;
      ctx.fill();
    }

    ctx.fillStyle = (_groupTheme$textGroup = groupTheme.textGroupHeader) !== null && _groupTheme$textGroup !== void 0 ? _groupTheme$textGroup : groupTheme.textHeader;

    if (group !== undefined) {
      let drawX = x;

      if (group.icon !== undefined) {
        spriteManager.drawSprite(group.icon, "normal", ctx, drawX + xPad, (groupHeaderHeight - 20) / 2, 20, groupTheme);
        drawX += 26;
      }

      ctx.fillText(group.name, drawX + xPad, groupHeaderHeight / 2 + getMiddleCenterBias(ctx, `${theme.headerFontStyle} ${theme.fontFamily}`));

      if (group.actions !== undefined && isHovered) {
        var _hovered$2;

        const actionBoxes = getActionBoundsForGroup({
          x,
          y,
          width: w,
          height: h
        }, group.actions);
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
        const [mouseX, mouseY] = (_hovered$2 = hovered === null || hovered === void 0 ? void 0 : hovered[1]) !== null && _hovered$2 !== void 0 ? _hovered$2 : [-1, -1];

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

    if (verticalBorder(span[0])) {
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

const menuButtonSize = 30;
export function getHeaderMenuBounds(x, y, width, height) {
  return {
    x: x + width - menuButtonSize,
    y: Math.max(y, y + height / 2 - menuButtonSize / 2),
    width: menuButtonSize,
    height: Math.min(menuButtonSize, height)
  };
}

function drawHeader(ctx, x, y, width, height, c, selected, theme, isHovered, hasSelectedCell, hoverAmount, spriteManager, drawHeaderCallback, touchMode) {
  const menuBounds = getHeaderMenuBounds(x, y, width, height);

  if (drawHeaderCallback !== undefined) {
    if (drawHeaderCallback({
      ctx,
      theme,
      rect: {
        x,
        y,
        width,
        height
      },
      column: c,
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

  const xPad = 8;
  const fillStyle = selected ? theme.textHeaderSelected : theme.textHeader;
  const shouldDrawMenu = c.hasMenu === true && (isHovered || touchMode && selected);
  let drawX = x + xPad;

  if (c.icon !== undefined) {
    let variant = selected ? "selected" : "normal";

    if (c.style === "highlight") {
      variant = selected ? "selected" : "special";
    }

    spriteManager.drawSprite(c.icon, variant, ctx, drawX, y + (height - 20) / 2, 20, theme);

    if (c.overlayIcon !== undefined) {
      spriteManager.drawSprite(c.overlayIcon, selected ? "selected" : "special", ctx, drawX + 9, y + ((height - 18) / 2 + 6), 18, theme);
    }

    drawX += 26;
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
    roundedPoly(ctx, [{
      x: triangleX,
      y: triangleY
    }, {
      x: triangleX + 11,
      y: triangleY
    }, {
      x: triangleX + 5.5,
      y: triangleY + 6
    }], 1);
    ctx.fillStyle = fillStyle;
    ctx.fill();
  }
}

function drawGridHeaders(ctx, effectiveCols, enableGroups, hovered, width, translateX, headerHeight, groupHeaderHeight, selectedColumns, dragAndDropState, isResizing, selectedCell, outerTheme, spriteManager, hoverValues, verticalBorder, getGroupDetails, damage, drawHeaderCallback, touchMode) {
  var _hovered$3;

  const totalHeaderHeight = headerHeight + groupHeaderHeight;
  if (totalHeaderHeight <= 0) return;
  ctx.fillStyle = outerTheme.bgHeader;
  ctx.fillRect(0, 0, width, totalHeaderHeight);
  const [hCol, hRow] = (_hovered$3 = hovered === null || hovered === void 0 ? void 0 : hovered[0]) !== null && _hovered$3 !== void 0 ? _hovered$3 : [];
  const font = `${outerTheme.headerFontStyle} ${outerTheme.fontFamily}`;
  ctx.font = font;
  walkColumns(effectiveCols, 0, translateX, 0, totalHeaderHeight, (c, x, _y, clipX) => {
    var _c$group, _hoverValues$find$hov, _hoverValues$find;

    if (damage !== undefined && !damage.some(d => d[1] === -1 && d[0] === c.sourceIndex)) return;
    const diff = Math.max(0, clipX - x);
    ctx.save();
    ctx.beginPath();
    ctx.rect(x + diff, groupHeaderHeight, c.width - diff, headerHeight);
    ctx.clip();
    const groupTheme = getGroupDetails((_c$group = c.group) !== null && _c$group !== void 0 ? _c$group : "").overrideTheme;
    const theme = c.themeOverride === undefined && groupTheme === undefined ? outerTheme : { ...outerTheme,
      ...groupTheme,
      ...c.themeOverride
    };

    if (theme.bgHeader !== outerTheme.bgHeader) {
      ctx.fillStyle = theme.bgHeader;
      ctx.fill();
    }

    const f = `${theme.headerFontStyle} ${theme.fontFamily}`;

    if (font !== f) {
      ctx.font = f;
    }

    const selected = selectedColumns.hasIndex(c.sourceIndex);
    const noHover = dragAndDropState !== undefined || isResizing;
    const hoveredBoolean = !noHover && hRow === -1 && hCol === c.sourceIndex;
    const hover = noHover ? 0 : (_hoverValues$find$hov = (_hoverValues$find = hoverValues.find(s => s.item[0] === c.sourceIndex && s.item[1] === -1)) === null || _hoverValues$find === void 0 ? void 0 : _hoverValues$find.hoverAmount) !== null && _hoverValues$find$hov !== void 0 ? _hoverValues$find$hov : 0;
    const hasSelectedCell = (selectedCell === null || selectedCell === void 0 ? void 0 : selectedCell.current) !== undefined && selectedCell.current.cell[0] === c.sourceIndex;
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

function clipDamage(ctx, effectiveColumns, width, height, groupHeaderHeight, totalHeaderHeight, translateX, translateY, cellYOffset, rows, getRowHeight, lastRowSticky, damage, includeCells) {
  if (damage === undefined || damage.length === 0) return;
  const stickyRowHeight = lastRowSticky ? getRowHeight(rows - 1) : 0;
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

      if (d[0] === c.sourceIndex && (d[1] === -1 || d[1] === undefined)) {
        ctx.rect(finalX, groupHeaderHeight, finalWidth, totalHeaderHeight - groupHeaderHeight);
        break;
      }
    }

    if (!includeCells) return;
    walkRowsInCol(startRow, colDrawY, height, rows, getRowHeight, lastRowSticky, (drawY, row, rh, isSticky) => {
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
  var _allColumns$find$sour, _allColumns$find;

  const [startCol, endCol] = span;
  let frozenRect;
  let contentRect;
  const firstNonSticky = (_allColumns$find$sour = (_allColumns$find = allColumns.find(x => !x.sticky)) === null || _allColumns$find === void 0 ? void 0 : _allColumns$find.sourceIndex) !== null && _allColumns$find$sour !== void 0 ? _allColumns$find$sour : 0;

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

function drawCells(ctx, effectiveColumns, allColumns, height, totalHeaderHeight, translateX, translateY, cellYOffset, rows, getRowHeight, getCellContent, getGroupDetails, getRowThemeOverride, selectedRows, disabledRows, isFocused, lastRowSticky, drawRegions, damage, selection, selectedColumns, prelightCells, highlightRegions, drawCustomCell, imageLoader, spriteManager, hoverValues, hoverInfo, outerTheme, enqueue) {
  var _damage$length;

  let toDraw = (_damage$length = damage === null || damage === void 0 ? void 0 : damage.length) !== null && _damage$length !== void 0 ? _damage$length : Number.MAX_SAFE_INTEGER;
  const frameTime = performance.now();
  let font = `${outerTheme.baseFontStyle} ${outerTheme.fontFamily}`;
  ctx.font = font;
  let result;
  const handledSpans = new Set();
  walkColumns(effectiveColumns, cellYOffset, translateX, translateY, totalHeaderHeight, (c, drawX, colDrawStartY, clipX, startRow) => {
    var _c$group2;

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

      if (!found) return;
    }

    const reclip = () => {
      ctx.save();
      ctx.beginPath();
      ctx.rect(colDrawX, colDrawY, colWidth, colHeight);
      ctx.clip();
    };

    const colSelected = selectedColumns.hasIndex(c.sourceIndex);
    const groupTheme = getGroupDetails((_c$group2 = c.group) !== null && _c$group2 !== void 0 ? _c$group2 : "").overrideTheme;
    const colTheme = c.themeOverride === undefined && groupTheme === undefined ? outerTheme : { ...outerTheme,
      ...groupTheme,
      ...c.themeOverride
    };
    const colFont = `${colTheme.baseFontStyle} ${colTheme.fontFamily}`;

    if (colFont !== font) {
      font = colFont;
      ctx.font = colFont;
    }

    reclip();
    let prepResult = undefined;
    walkRowsInCol(startRow, colDrawStartY, height, rows, getRowHeight, lastRowSticky, (drawY, row, rh, isSticky) => {
      var _c$trailingRowOptions, _c$trailingRowOptions2;

      if (damage !== undefined) {
        let found = false;

        for (let i = 0; i < damage.length; i++) {
          const d = damage[i];

          if (d[0] === c.sourceIndex && d[1] === row) {
            found = true;
            break;
          }
        }

        if (!found) return;
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

        if (!found) return;
      }

      const rowSelected = selectedRows.hasIndex(row);
      const rowDisabled = disabledRows.hasIndex(row);
      const cell = row < rows ? getCellContent([c.sourceIndex, row]) : loadingCell;
      let cellX = drawX;
      let cellWidth = c.width;
      let drawingSpan = false;
      let skipContents = false;

      if (cell.span !== undefined) {
        const [startCol, endCol] = cell.span;
        const spanKey = `${row},${startCol},${endCol},${c.sticky}`;

        if (!handledSpans.has(spanKey)) {
          const areas = getSpanBounds(cell.span, drawX, drawY, c.width, rh, c, allColumns);
          const area = c.sticky ? areas[0] : areas[1];

          if (!c.sticky && areas[0] !== undefined) {
            skipContents = true;
          }

          if (area !== undefined) {
            cellX = area.x;
            cellWidth = area.width;
            handledSpans.add(spanKey);
            ctx.restore();
            prepResult = undefined;
            ctx.save();
            ctx.beginPath();
            const d = Math.max(0, clipX - area.x);
            ctx.rect(area.x + d, drawY, area.width - d, rh);

            if (result === undefined) {
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

      const rowTheme = getRowThemeOverride === null || getRowThemeOverride === void 0 ? void 0 : getRowThemeOverride(row);
      const trailingTheme = ((_c$trailingRowOptions = c.trailingRowOptions) === null || _c$trailingRowOptions === void 0 ? void 0 : _c$trailingRowOptions.themeOverride) !== undefined ? (_c$trailingRowOptions2 = c.trailingRowOptions) === null || _c$trailingRowOptions2 === void 0 ? void 0 : _c$trailingRowOptions2.themeOverride : undefined;
      const theme = cell.themeOverride === undefined && rowTheme === undefined && trailingTheme === undefined ? colTheme : { ...colTheme,
        ...rowTheme,
        ...trailingTheme,
        ...cell.themeOverride
      };
      ctx.beginPath();
      const cellIndex = [c.sourceIndex, row];
      const isSelected = cellIsSelected(cellIndex, cell, selection);
      let accentCount = cellIsInRange(cellIndex, cell, selection);
      const spanIsHighlighted = cell.span !== undefined && selectedColumns.some(index => cell.span !== undefined && index >= cell.span[0] && index <= cell.span[1]);

      if (isSelected && !isFocused) {
        accentCount = 0;
      } else if (isSelected) {
        accentCount = Math.max(accentCount, 1);
      }

      if (spanIsHighlighted) {
        accentCount++;
      }

      if (!isSelected) {
        if (rowSelected) accentCount++;
        if (colSelected && !isSticky) accentCount++;
      }

      let fill;

      if (isSticky || theme.bgCell !== outerTheme.bgCell) {
        fill = blend(theme.bgCell, fill);
      }

      if (accentCount > 0 || rowDisabled) {
        if (rowDisabled) {
          fill = blend(theme.bgHeader, fill);
        }

        for (let i = 0; i < accentCount; i++) {
          fill = blend(theme.accentLight, fill);
        }
      } else {
        if ((prelightCells === null || prelightCells === void 0 ? void 0 : prelightCells.some(pre => pre[0] === c.sourceIndex && pre[1] === row)) === true) {
          fill = blend(theme.bgSearchResult, fill);
        }
      }

      if (highlightRegions !== undefined) {
        for (const region of highlightRegions) {
          const r = region.range;

          if (r.x <= c.sourceIndex && c.sourceIndex < r.x + r.width && r.y <= row && row < r.y + r.height) {
            fill = blend(region.color, fill);
          }
        }
      }

      if (fill !== undefined) {
        ctx.fillStyle = fill;

        if (prepResult !== undefined) {
          prepResult.fillStyle = fill;
        }

        ctx.fillRect(cellX, drawY, cellWidth, rh);
      }

      if (cell.style === "faded") {
        ctx.globalAlpha = 0.6;
      }

      const hoverValue = hoverValues.find(hv => hv.item[0] === c.sourceIndex && hv.item[1] === row);

      if (cellWidth > 10 && !skipContents) {
        var _hoverValue$hoverAmou;

        const cellFont = `${theme.baseFontStyle} ${theme.fontFamily}`;

        if (cellFont !== font) {
          ctx.font = cellFont;
          font = cellFont;
        }

        prepResult = drawCell(ctx, row, cell, c.sourceIndex, cellX, drawY, cellWidth, rh, accentCount > 0, theme, drawCustomCell, imageLoader, spriteManager, (_hoverValue$hoverAmou = hoverValue === null || hoverValue === void 0 ? void 0 : hoverValue.hoverAmount) !== null && _hoverValue$hoverAmou !== void 0 ? _hoverValue$hoverAmou : 0, hoverInfo, frameTime, prepResult, enqueue);
      }

      if (cell.style === "faded") {
        ctx.globalAlpha = 1;
      }

      toDraw--;

      if (drawingSpan) {
        var _prepResult, _prepResult$deprep;

        ctx.restore();
        (_prepResult = prepResult) === null || _prepResult === void 0 ? void 0 : (_prepResult$deprep = _prepResult.deprep) === null || _prepResult$deprep === void 0 ? void 0 : _prepResult$deprep.call(_prepResult, {
          ctx
        });
        prepResult = undefined;
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

function drawBlanks(ctx, effectiveColumns, allColumns, width, height, totalHeaderHeight, translateX, translateY, cellYOffset, rows, getRowHeight, getRowTheme, selectedRows, disabledRows, lastRowSticky, drawRegions, damage, theme) {
  if (damage !== undefined || effectiveColumns[effectiveColumns.length - 1] !== allColumns[effectiveColumns.length - 1]) return;
  walkColumns(effectiveColumns, cellYOffset, translateX, translateY, totalHeaderHeight, (c, drawX, colDrawY, clipX, startRow) => {
    if (c !== effectiveColumns[effectiveColumns.length - 1]) return;
    drawX += c.width;
    const x = Math.max(drawX, clipX);
    if (x > width) return;
    ctx.save();
    ctx.beginPath();
    ctx.rect(x, totalHeaderHeight + 1, 10000, height - totalHeaderHeight - 1);
    ctx.clip();
    walkRowsInCol(startRow, colDrawY, height, rows, getRowHeight, lastRowSticky, (drawY, row, rh, isSticky) => {
      if (!isSticky && drawRegions.length > 0 && !drawRegions.some(dr => intersectRect(drawX, drawY, 10000, rh, dr.x, dr.y, dr.width, dr.height))) {
        return;
      }

      const rowSelected = selectedRows.hasIndex(row);
      const rowDisabled = disabledRows.hasIndex(row);
      ctx.beginPath();
      const rowTheme = getRowTheme === null || getRowTheme === void 0 ? void 0 : getRowTheme(row);
      const blankTheme = rowTheme === undefined ? theme : { ...theme,
        ...rowTheme
      };

      if (blankTheme.bgCell !== theme.bgCell) {
        ctx.fillStyle = blankTheme.bgCell;
        ctx.fillRect(drawX, drawY, 10000, rh);
      }

      if (rowDisabled) {
        ctx.fillStyle = blankTheme.bgHeader;
        ctx.fillRect(drawX, drawY, 10000, rh);
      }

      if (rowSelected) {
        ctx.fillStyle = blankTheme.accentLight;
        ctx.fillRect(drawX, drawY, 10000, rh);
      }
    });
    ctx.restore();
  });
}

function overdrawStickyBoundaries(ctx, effectiveCols, width, height, totalHeaderHeight, lastRowSticky, rows, getRowHeight, theme) {
  const drawX = getStickyWidth(effectiveCols);
  ctx.beginPath();
  ctx.moveTo(0, totalHeaderHeight + 0.5);
  ctx.lineTo(width, totalHeaderHeight + 0.5);
  ctx.strokeStyle = theme.bgHeader;
  ctx.stroke();
  ctx.beginPath();
  let doCell = false;

  if (drawX !== 0) {
    ctx.moveTo(drawX + 0.5, 0);
    ctx.lineTo(drawX + 0.5, height);
    doCell = true;
  }

  if (lastRowSticky) {
    const h = getRowHeight(rows - 1);
    ctx.moveTo(0, height - h + 0.5);
    ctx.lineTo(width, height - h + 0.5);
    doCell = true;
  }

  if (doCell) {
    ctx.strokeStyle = theme.bgCell;
    ctx.stroke();
  }

  ctx.moveTo(0, totalHeaderHeight + 0.5);
  ctx.lineTo(width, totalHeaderHeight + 0.5);
  ctx.strokeStyle = theme.borderColor;
  ctx.stroke();
}

function drawHighlightRings(ctx, width, height, cellXOffset, cellYOffset, translateX, translateY, mappedColumns, freezeColumns, headerHeight, groupHeaderHeight, rowHeight, lastRowSticky, rows, highlightRegions) {
  if (highlightRegions === undefined || highlightRegions.length === 0) return undefined;
  const drawRects = highlightRegions.map(h => {
    const r = h.range;
    const topLeftBounds = computeBounds(r.x, r.y, width, height, groupHeaderHeight, headerHeight + groupHeaderHeight, cellXOffset, cellYOffset, translateX, translateY, rows, freezeColumns, lastRowSticky, mappedColumns, rowHeight);

    if (r.width === 1 && r.height === 1) {
      if (r.x < freezeColumns) {
        return [{
          color: h.color,
          rect: topLeftBounds
        }, undefined];
      }

      return [undefined, {
        color: h.color,
        rect: topLeftBounds
      }];
    }

    const bottomRightBounds = computeBounds(r.x + r.width - 1, r.y + r.height - 1, width, height, groupHeaderHeight, headerHeight + groupHeaderHeight, cellXOffset, cellYOffset, translateX, translateY, rows, freezeColumns, lastRowSticky, mappedColumns, rowHeight);

    if (r.x < freezeColumns && r.x + r.width >= freezeColumns) {
      const freezeSectionRightBounds = computeBounds(freezeColumns - 1, r.y + r.height - 1, width, height, groupHeaderHeight, headerHeight + groupHeaderHeight, cellXOffset, cellYOffset, translateX, translateY, rows, freezeColumns, lastRowSticky, mappedColumns, rowHeight);
      const unfreezeSectionleftBounds = computeBounds(freezeColumns, r.y + r.height - 1, width, height, groupHeaderHeight, headerHeight + groupHeaderHeight, cellXOffset, cellYOffset, translateX, translateY, rows, freezeColumns, lastRowSticky, mappedColumns, rowHeight);
      return [{
        color: h.color,
        rect: {
          x: topLeftBounds.x,
          y: topLeftBounds.y,
          width: freezeSectionRightBounds.x + freezeSectionRightBounds.width - topLeftBounds.x,
          height: freezeSectionRightBounds.y + freezeSectionRightBounds.height - topLeftBounds.y
        }
      }, {
        color: h.color,
        rect: {
          x: unfreezeSectionleftBounds.x,
          y: unfreezeSectionleftBounds.y,
          width: bottomRightBounds.x + bottomRightBounds.width - unfreezeSectionleftBounds.x,
          height: bottomRightBounds.y + bottomRightBounds.height - unfreezeSectionleftBounds.y
        }
      }];
    } else {
      return [undefined, {
        color: h.color,
        rect: {
          x: topLeftBounds.x,
          y: topLeftBounds.y,
          width: bottomRightBounds.x + bottomRightBounds.width - topLeftBounds.x,
          height: bottomRightBounds.y + bottomRightBounds.height - topLeftBounds.y
        }
      }];
    }
  });
  const stickyWidth = getStickyWidth(mappedColumns);

  const drawCb = () => {
    ctx.beginPath();
    ctx.save();
    ctx.setLineDash([7, 5]);
    ctx.lineWidth = 2;

    for (const dr of drawRects) {
      const [s] = dr;

      if (s !== undefined && intersectRect(0, 0, width, height, s.rect.x, s.rect.y, s.rect.width, s.rect.height)) {
        ctx.strokeStyle = withAlpha(s.color, 1);
        ctx.strokeRect(s.rect.x + 1, s.rect.y + 1, s.rect.width - 2, s.rect.height - 2);
      }
    }

    let clipped = false;

    for (const dr of drawRects) {
      const [, s] = dr;

      if (s !== undefined && intersectRect(0, 0, width, height, s.rect.x, s.rect.y, s.rect.width, s.rect.height)) {
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

function drawFocusRing(ctx, width, height, cellYOffset, translateX, translateY, effectiveCols, allColumns, theme, totalHeaderHeight, selectedCell, getRowHeight, getCellContent, lastRowSticky, fillHandle, rows) {
  var _cell$span;

  if (selectedCell.current === undefined || effectiveCols.find(c => {
    var _selectedCell$current;

    return c.sourceIndex === ((_selectedCell$current = selectedCell.current) === null || _selectedCell$current === void 0 ? void 0 : _selectedCell$current.cell[0]) === undefined;
  })) return undefined;
  const [targetCol, targetRow] = selectedCell.current.cell;
  const cell = getCellContent(selectedCell.current.cell);
  const targetColSpan = (_cell$span = cell.span) !== null && _cell$span !== void 0 ? _cell$span : [targetCol, targetCol];
  const isStickyRow = lastRowSticky && targetRow === rows - 1;
  const stickRowHeight = lastRowSticky && !isStickyRow ? getRowHeight(rows - 1) - 1 : 0;
  let drawCb = undefined;
  walkColumns(effectiveCols, cellYOffset, translateX, translateY, totalHeaderHeight, (col, drawX, colDrawY, clipX, startRow) => {
    if (col.sticky && targetCol > col.sourceIndex) return;

    if (col.sourceIndex < targetColSpan[0] || col.sourceIndex > targetColSpan[1]) {
      return;
    }

    walkRowsInCol(startRow, colDrawY, height, rows, getRowHeight, lastRowSticky, (drawY, row, rh) => {
      if (row !== targetRow) return;
      let cellX = drawX;
      let cellWidth = col.width;

      if (cell.span !== undefined) {
        const areas = getSpanBounds(cell.span, drawX, drawY, col.width, rh, col, allColumns);
        const area = col.sticky ? areas[0] : areas[1];

        if (area !== undefined) {
          cellX = area.x;
          cellWidth = area.width;
        }
      }

      drawCb = () => {
        var _col$themeOverride$ac, _col$themeOverride;

        if (clipX > cellX && !col.sticky) {
          ctx.beginPath();
          ctx.rect(clipX, 0, width - clipX, height);
          ctx.clip();
        }

        ctx.beginPath();
        ctx.rect(cellX + 0.5, drawY + 0.5, cellWidth, rh);
        ctx.strokeStyle = (_col$themeOverride$ac = (_col$themeOverride = col.themeOverride) === null || _col$themeOverride === void 0 ? void 0 : _col$themeOverride.accentColor) !== null && _col$themeOverride$ac !== void 0 ? _col$themeOverride$ac : theme.accentColor;
        ctx.lineWidth = 1;
        ctx.stroke();

        if (fillHandle) {
          var _col$themeOverride$ac2, _col$themeOverride2;

          ctx.beginPath();
          ctx.rect(cellX + cellWidth - 4, drawY + rh - 4, 4, 4);
          ctx.fillStyle = (_col$themeOverride$ac2 = (_col$themeOverride2 = col.themeOverride) === null || _col$themeOverride2 === void 0 ? void 0 : _col$themeOverride2.accentColor) !== null && _col$themeOverride$ac2 !== void 0 ? _col$themeOverride$ac2 : theme.accentColor;
          ctx.fill();
        }
      };

      return true;
    });
    return true;
  });
  if (drawCb === undefined) return undefined;

  const result = () => {
    var _drawCb;

    ctx.save();
    ctx.beginPath();
    ctx.rect(0, totalHeaderHeight, width, height - totalHeaderHeight - stickRowHeight);
    ctx.clip();
    (_drawCb = drawCb) === null || _drawCb === void 0 ? void 0 : _drawCb();
    ctx.restore();
  };

  result();
  return result;
}

function getLastRow(effectiveColumns, height, totalHeaderHeight, translateX, translateY, cellYOffset, rows, getRowHeight, lastRowSticky) {
  let result = 0;
  walkColumns(effectiveColumns, cellYOffset, translateX, translateY, totalHeaderHeight, (_c, __drawX, colDrawY, _clipX, startRow) => {
    walkRowsInCol(startRow, colDrawY, height, rows, getRowHeight, lastRowSticky, (_drawY, row, _rh, isSticky) => {
      if (!isSticky) {
        result = Math.max(row, result);
      }
    });
    return true;
  });
  return result;
}

export function drawGrid(arg) {
  var _window$devicePixelRa;

  const {
    canvas,
    buffers,
    width,
    height,
    cellXOffset,
    cellYOffset,
    translateX,
    translateY,
    columns,
    mappedColumns,
    enableGroups,
    freezeColumns,
    dragAndDropState,
    theme,
    headerHeight,
    groupHeaderHeight,
    selectedRows,
    disabledRows,
    rowHeight,
    verticalBorder,
    selectedColumns,
    isResizing,
    selectedCell,
    fillHandle,
    lastRowSticky,
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
    canBlit,
    hoverValues,
    hoverInfo,
    spriteManager,
    scrolling,
    touchMode,
    enqueue
  } = arg;
  let {
    damage
  } = arg;
  if (width === 0 || height === 0) return;
  const dpr = scrolling ? 1 : Math.ceil((_window$devicePixelRa = window.devicePixelRatio) !== null && _window$devicePixelRa !== void 0 ? _window$devicePixelRa : 1);

  if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
  }

  const overlayCanvas = buffers.overlay;
  const totalHeaderHeight = enableGroups ? groupHeaderHeight + headerHeight : headerHeight;

  if (overlayCanvas.width !== width * dpr || overlayCanvas.height !== totalHeaderHeight * dpr) {
    overlayCanvas.width = width * dpr;
    overlayCanvas.height = totalHeaderHeight * dpr;
    overlayCanvas.style.width = width + "px";
    overlayCanvas.style.height = totalHeaderHeight + "px";
  }

  const last = lastBlitData.current;
  if (canBlit === true && cellXOffset === last.cellXOffset && cellYOffset === last.cellYOffset && translateX === last.translateX && translateY === last.translateY) return;
  const targetCtx = canvas.getContext("2d", {
    alpha: false
  });
  const overlayCtx = overlayCanvas.getContext("2d", {
    alpha: false
  });
  if (overlayCtx === null || targetCtx === null) return;

  const getRowHeight = r => typeof rowHeight === "number" ? rowHeight : rowHeight(r);

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

  const drawHeaderTexture = () => {
    drawGridHeaders(overlayCtx, effectiveCols, enableGroups, hoverInfo, width, translateX, headerHeight, groupHeaderHeight, selectedColumns, dragAndDropState, isResizing, selectedCell, theme, spriteManager, hoverValues, verticalBorder, getGroupDetails, damage, drawHeaderCallback, touchMode);
    drawGridLines(overlayCtx, effectiveCols, cellYOffset, translateX, translateY, width, height, undefined, undefined, groupHeaderHeight, totalHeaderHeight, getRowHeight, getRowThemeOverride, verticalBorder, lastRowSticky, rows, theme, true);
  };

  if (damage !== undefined) {
    let doHeaders = false;
    damage = damage.filter(x => {
      doHeaders = doHeaders || x[1] < 0;
      return x[1] < 0 || intersectRect(cellXOffset, cellYOffset, effectiveCols.length, 300, x[0], x[1], 1, 1) || intersectRect(0, cellYOffset, freezeColumns, 300, x[0], x[1], 1, 1) || lastRowSticky && intersectRect(cellXOffset, rows - 1, effectiveCols.length, 1, x[0], x[1], 1, 1);
    });

    if (damage.length > 0) {
      clipDamage(targetCtx, effectiveCols, width, height, groupHeaderHeight, totalHeaderHeight, translateX, translateY, cellYOffset, rows, getRowHeight, lastRowSticky, damage, true);
      targetCtx.fillStyle = theme.bgCell;
      targetCtx.fillRect(0, totalHeaderHeight + 1, width, height - totalHeaderHeight - 1);
      drawCells(targetCtx, effectiveCols, mappedColumns, height, totalHeaderHeight, translateX, translateY, cellYOffset, rows, getRowHeight, getCellContent, getGroupDetails, getRowThemeOverride, selectedRows, disabledRows, isFocused, lastRowSticky, drawRegions, damage, selectedCell, selectedColumns, prelightCells, highlightRegions, drawCustomCell, imageLoader, spriteManager, hoverValues, hoverInfo, theme, enqueue);

      if (fillHandle && selectedCell.current !== undefined && damage.some(x => {
        var _selectedCell$current2, _selectedCell$current3;

        return x[0] === ((_selectedCell$current2 = selectedCell.current) === null || _selectedCell$current2 === void 0 ? void 0 : _selectedCell$current2.cell[0]) && x[1] === ((_selectedCell$current3 = selectedCell.current) === null || _selectedCell$current3 === void 0 ? void 0 : _selectedCell$current3.cell[1]);
      })) {
        drawFocusRing(targetCtx, width, height, cellYOffset, translateX, translateY, effectiveCols, mappedColumns, theme, totalHeaderHeight, selectedCell, getRowHeight, getCellContent, lastRowSticky, fillHandle, rows);
      }
    }

    if (doHeaders) {
      clipDamage(overlayCtx, effectiveCols, width, totalHeaderHeight, groupHeaderHeight, totalHeaderHeight, translateX, translateY, cellYOffset, rows, getRowHeight, lastRowSticky, damage, false);
      drawHeaderTexture();
    }

    targetCtx.restore();
    overlayCtx.restore();
    return;
  }

  if (!canBlit || cellXOffset !== last.cellXOffset || translateX !== last.translateX) {
    drawHeaderTexture();
  }

  if (canBlit === true) {
    const {
      regions
    } = blitLastFrame(targetCtx, canvas, last, cellXOffset, cellYOffset, translateX, translateY, lastRowSticky, width, height, rows, totalHeaderHeight, dpr, columns, effectiveCols, rowHeight);
    drawRegions = regions;
  }

  overdrawStickyBoundaries(targetCtx, effectiveCols, width, height, totalHeaderHeight, lastRowSticky, rows, getRowHeight, theme);
  const focusRedraw = drawFocusRing(targetCtx, width, height, cellYOffset, translateX, translateY, effectiveCols, mappedColumns, theme, totalHeaderHeight, selectedCell, getRowHeight, getCellContent, lastRowSticky, fillHandle, rows);
  const highlightRedraw = drawHighlightRings(targetCtx, width, height, cellXOffset, cellYOffset, translateX, translateY, mappedColumns, freezeColumns, headerHeight, groupHeaderHeight, rowHeight, lastRowSticky, rows, highlightRegions);
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

  const spans = drawCells(targetCtx, effectiveCols, mappedColumns, height, totalHeaderHeight, translateX, translateY, cellYOffset, rows, getRowHeight, getCellContent, getGroupDetails, getRowThemeOverride, selectedRows, disabledRows, isFocused, lastRowSticky, drawRegions, damage, selectedCell, selectedColumns, prelightCells, highlightRegions, drawCustomCell, imageLoader, spriteManager, hoverValues, hoverInfo, theme, enqueue);
  drawBlanks(targetCtx, effectiveCols, mappedColumns, width, height, totalHeaderHeight, translateX, translateY, cellYOffset, rows, getRowHeight, getRowThemeOverride, selectedRows, disabledRows, lastRowSticky, drawRegions, damage, theme);
  drawGridLines(targetCtx, effectiveCols, cellYOffset, translateX, translateY, width, height, drawRegions, spans, groupHeaderHeight, totalHeaderHeight, getRowHeight, getRowThemeOverride, verticalBorder, lastRowSticky, rows, theme);
  focusRedraw === null || focusRedraw === void 0 ? void 0 : focusRedraw();
  highlightRedraw === null || highlightRedraw === void 0 ? void 0 : highlightRedraw();
  const lastRowDrawn = getLastRow(effectiveCols, height, totalHeaderHeight, translateX, translateY, cellYOffset, rows, getRowHeight, lastRowSticky);
  imageLoader === null || imageLoader === void 0 ? void 0 : imageLoader.setWindow({
    x: cellXOffset,
    y: cellYOffset,
    width: effectiveCols.length,
    height: lastRowDrawn - cellYOffset
  }, freezeColumns);
  lastBlitData.current = {
    cellXOffset,
    cellYOffset,
    translateX,
    translateY
  };
  targetCtx.restore();
  overlayCtx.restore();
}

function walkRowsInCol(startRow, drawY, height, rows, getRowHeight, lastRowSticky, cb) {
  let y = drawY;
  let row = startRow;
  let doSticky = lastRowSticky;

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

    if (!isMovedStickyRow) {
      if (cb(y, row, rh, doingSticky) === true) {
        break;
      }
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
    let drawX;

    if (c.sticky) {
      drawX = clipX;
    } else {
      drawX = x + translateX;
    }

    if (cb(c, drawX, drawY, clipX, cellYOffset) === true) {
      break;
    }

    x += c.width;
    clipX += c.sticky ? c.width : 0;
  }
}

function walkGroups(effectiveCols, width, translateX, groupHeaderHeight, cb) {
  let x = 0;
  let clipX = 0;

  for (let index = 0; index < effectiveCols.length; index++) {
    var _startCol$group;

    const startCol = effectiveCols[index];
    let end = index + 1;
    let boxWidth = startCol.width;

    if (startCol.sticky) {
      clipX += boxWidth;
    }

    while (end < effectiveCols.length && isGroupEqual(effectiveCols[end].group, startCol.group) && effectiveCols[end].sticky === effectiveCols[index].sticky) {
      const endCol = effectiveCols[end];
      boxWidth += endCol.width;
      end++;
      index++;

      if (endCol.sticky) {
        clipX += endCol.width;
      }
    }

    const t = startCol.sticky ? 0 : translateX;
    const localX = x + t;
    const delta = startCol.sticky ? 0 : Math.max(0, clipX - localX);
    const w = Math.min(boxWidth - delta, width - (localX + delta));
    cb([startCol.sourceIndex, effectiveCols[end - 1].sourceIndex], (_startCol$group = startCol.group) !== null && _startCol$group !== void 0 ? _startCol$group : "", localX + delta, 0, w, groupHeaderHeight);
    x += boxWidth;
  }
}