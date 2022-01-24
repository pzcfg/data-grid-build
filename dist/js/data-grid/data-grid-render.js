import { GridCellKind, isInnerOnlyCell } from "./data-grid-types";
import { getEffectiveColumns, getStickyWidth, roundedPoly, drawWithLastUpdate, isGroupEqual } from "./data-grid-lib";
import { withAlpha } from "./color-parser";
import { CellRenderers } from "./cells";
export function drawCell(ctx, row, cell, col, x, y, w, h, highlighted, theme, drawCustomCell, imageLoader, hoverAmount, hoverInfo, frameTime, lastToken, enqueue) {
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
    imageLoader
  };
  const needsAnim = drawWithLastUpdate(args, cell.lastUpdated, frameTime, forcePrep => {
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
      imageLoader
    })) === true;

    if (!drawn && cell.kind !== GridCellKind.Custom) {
      const r = CellRenderers[cell.kind];

      if (lastToken !== r || forcePrep) {
        var _r$renderPrep;

        (_r$renderPrep = r.renderPrep) === null || _r$renderPrep === void 0 ? void 0 : _r$renderPrep.call(r, args);
      }

      r.render(args);
      result = r;
    }
  });
  if (needsAnim) enqueue === null || enqueue === void 0 ? void 0 : enqueue([col, row]);
  return result;
}

function blitLastFrame(ctx, canvas, last, cellXOffset, cellYOffset, translateX, translateY, lastRowSticky, width, height, rows, totalHeaderHeight, dpr, columns, effectiveCols, getRowHeight) {
  const drawRegions = [];
  let blittedYOnly = false;
  ctx.imageSmoothingEnabled = false;
  const minY = Math.min(last.cellYOffset, cellYOffset);
  const maxY = Math.max(last.cellYOffset, cellYOffset);
  let deltaY = 0;

  for (let i = minY; i < maxY; i++) {
    deltaY += getRowHeight(i);
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

  const stickyRowHeight = lastRowSticky ? getRowHeight(rows - 1) : 0;
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
      dw: width,
      dh: height
    };

    if (deltaY > 0) {
      args.sy = (totalHeaderHeight + 1) * dpr;
      args.sh = blitHeight * dpr;
      args.dy = deltaY + totalHeaderHeight + 1;
      args.dh = blitHeight;
      drawRegions.push({
        x: 0,
        y: totalHeaderHeight,
        width: width,
        height: deltaY + 1
      });
    } else if (deltaY < 0) {
      args.sy = (-deltaY + totalHeaderHeight + 1) * dpr;
      args.sh = blitHeight * dpr;
      args.dy = totalHeaderHeight + 1;
      args.dh = blitHeight;
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
      args.dx = deltaX + stickyWidth;
      args.dw = blitWidth;
      drawRegions.push({
        x: stickyWidth - 1,
        y: 0,
        width: deltaX + 2,
        height: height
      });
    } else if (deltaX < 0) {
      args.sx = (stickyWidth - deltaX) * dpr;
      args.sw = blitWidth * dpr;
      args.dx = stickyWidth;
      args.dw = blitWidth;
      drawRegions.push({
        x: width + deltaX,
        y: 0,
        width: -deltaX,
        height: height
      });
      ctx.beginPath();
    }

    ctx.drawImage(canvas, args.sx, args.sy, args.sw, args.sh, args.dx, args.dy, args.dw, args.dh);
  }

  ctx.imageSmoothingEnabled = true;
  return {
    regions: drawRegions,
    yOnly: blittedYOnly
  };
}

function drawGridLines(ctx, effectiveCols, cellYOffset, translateX, translateY, width, height, groupHeaderHeight, totalHeaderHeight, getRowHeight, verticalBorder, lastRowSticky, rows, theme) {
  var _theme$horizontalBord;

  let verticalOnly = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : false;
  const hColor = (_theme$horizontalBord = theme.horizontalBorderColor) !== null && _theme$horizontalBord !== void 0 ? _theme$horizontalBord : theme.borderColor;
  const vColor = theme.borderColor;
  ctx.beginPath();
  ctx.moveTo(0, totalHeaderHeight + 0.5);
  ctx.lineTo(width, totalHeaderHeight + 0.5);
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

    if (index === effectiveCols.length - 1 || verticalBorder(index + 1)) {
      ctx.moveTo(tx, groupHeaderHeight);
      ctx.lineTo(tx, height);
    }

    if (vColor !== hColor) {
      ctx.strokeStyle = vColor;
      ctx.stroke();
      ctx.beginPath();
    }
  }

  const stickyHeight = getRowHeight(rows - 1);
  const stickyRowY = height - stickyHeight + 0.5;

  if (lastRowSticky) {
    ctx.moveTo(0, stickyRowY);
    ctx.lineTo(width, stickyRowY);
  }

  if (verticalOnly !== true) {
    let y = totalHeaderHeight + 0.5;
    let row = cellYOffset;
    let isHeader = true;
    const target = lastRowSticky ? height - stickyHeight : height;

    while (y + translateY <= target) {
      const ty = isHeader ? y : y + translateY;

      if (!lastRowSticky || row !== rows - 1 || Math.abs(ty - stickyRowY) > 1) {
        ctx.moveTo(0, ty);
        ctx.lineTo(width, ty);
      }

      y += getRowHeight(row);
      isHeader = false;
      row++;
    }
  }

  ctx.strokeStyle = hColor;
  ctx.stroke();
  ctx.beginPath();
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

      ctx.fillText(group.name, drawX + xPad, groupHeaderHeight / 2 + 1);

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

function drawHeader(ctx, x, y, width, height, c, selected, theme, isHovered, hasSelectedCell, hoverAmount, spriteManager, drawHeaderCallback) {
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

  if (isHovered && c.hasMenu === true && width > 35) {
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

  ctx.fillText(c.title, drawX, y + height / 2 + 1);

  if (isHovered && c.hasMenu === true) {
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

function drawGridHeaders(ctx, effectiveCols, enableGroups, hovered, width, translateX, headerHeight, groupHeaderHeight, selectedColumns, dragAndDropState, isResizing, selectedCell, outerTheme, spriteManager, hoverValues, verticalBorder, getGroupDetails, damage, drawHeaderCallback) {
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
    const hasSelectedCell = selectedCell !== undefined && selectedCell.cell[0] === c.sourceIndex;
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

    drawHeader(ctx, x, y, c.width, headerHeight, c, selected, theme, hoveredBoolean, hasSelectedCell, hover, spriteManager, drawHeaderCallback);
    ctx.restore();
  });

  if (enableGroups) {
    drawGroups(ctx, effectiveCols, width, translateX, groupHeaderHeight, hovered, outerTheme, spriteManager, hoverValues, verticalBorder, getGroupDetails, damage);
  }
}

function intersectRect(x1, y1, w1, h1, x2, y2, w2, h2) {
  return x1 <= x2 + w2 && x2 <= x1 + w1 && y1 <= y2 + h2 && y2 <= y1 + h1;
}

function clipDamage(ctx, effectiveColumns, width, height, groupHeaderHeight, totalHeaderHeight, translateX, translateY, cellYOffset, rows, getRowHeight, lastRowSticky, damage) {
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

function drawCells(ctx, effectiveColumns, height, totalHeaderHeight, translateX, translateY, cellYOffset, rows, getRowHeight, getCellContent, getGroupDetails, selectedRows, disabledRows, lastRowSticky, drawRegions, damage, selectedCell, selectedColumns, prelightCells, drawCustomCell, imageLoader, hoverValues, hoverInfo, outerTheme, enqueue) {
  var _damage$length;

  let toDraw = (_damage$length = damage === null || damage === void 0 ? void 0 : damage.length) !== null && _damage$length !== void 0 ? _damage$length : Number.MAX_SAFE_INTEGER;
  const frameTime = performance.now();
  let font;
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

    ctx.save();
    ctx.beginPath();
    ctx.rect(colDrawX, colDrawY, colWidth, colHeight);
    ctx.clip();
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

    let lastToken;
    walkRowsInCol(startRow, colDrawStartY, height, rows, getRowHeight, lastRowSticky, (drawY, row, rh, isSticky) => {
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
      const cell = row < rows ? getCellContent([c.sourceIndex, row]) : {
        kind: GridCellKind.Loading,
        allowOverlay: false
      };
      const theme = cell.themeOverride === undefined ? colTheme : { ...colTheme,
        ...cell.themeOverride
      };
      ctx.beginPath();
      const isFocused = (selectedCell === null || selectedCell === void 0 ? void 0 : selectedCell.cell[0]) === c.sourceIndex && (selectedCell === null || selectedCell === void 0 ? void 0 : selectedCell.cell[1]) === row;
      let highlighted = isFocused || !isSticky && (rowSelected || selectedColumns.hasIndex(c.sourceIndex));

      if ((selectedCell === null || selectedCell === void 0 ? void 0 : selectedCell.range) !== undefined) {
        const {
          range
        } = selectedCell;

        if (c.sourceIndex >= range.x && c.sourceIndex < range.x + range.width && row >= range.y && row < range.y + range.height) {
          highlighted = true;
        }
      }

      if (isSticky || theme.bgCell !== outerTheme.bgCell) {
        ctx.fillStyle = theme.bgCell;
        ctx.fillRect(drawX, drawY, c.width, rh);
        lastToken = undefined;
      }

      if (highlighted || rowDisabled) {
        if (rowDisabled) {
          ctx.fillStyle = theme.bgHeader;
          ctx.fillRect(drawX, drawY, c.width, rh);
        }

        if (highlighted) {
          ctx.fillStyle = theme.accentLight;
          ctx.fillRect(drawX, drawY, c.width, rh);
        }

        lastToken = undefined;
      } else {
        if ((prelightCells === null || prelightCells === void 0 ? void 0 : prelightCells.some(pre => pre[0] === c.sourceIndex && pre[1] === row)) === true) {
          ctx.fillStyle = theme.bgSearchResult;
          ctx.fillRect(drawX, drawY, c.width, rh);
          lastToken = undefined;
        }
      }

      if (cell.style === "faded") {
        ctx.globalAlpha = 0.6;
      }

      const hoverValue = hoverValues.find(hv => hv.item[0] === c.sourceIndex && hv.item[1] === row);

      if (c.width > 10) {
        var _hoverValue$hoverAmou;

        if (theme !== colTheme) {
          const cellFont = `${theme.baseFontStyle} ${theme.fontFamily}`;

          if (cellFont !== font) {
            ctx.font = cellFont;
            font = cellFont;
          }
        }

        const drawResult = drawCell(ctx, row, cell, c.sourceIndex, drawX, drawY, c.width, rh, highlighted, theme, drawCustomCell, imageLoader, (_hoverValue$hoverAmou = hoverValue === null || hoverValue === void 0 ? void 0 : hoverValue.hoverAmount) !== null && _hoverValue$hoverAmou !== void 0 ? _hoverValue$hoverAmou : 0, hoverInfo, frameTime, lastToken, enqueue);
        lastToken = drawResult;
      }

      ctx.globalAlpha = 1;
      toDraw--;
      return toDraw <= 0;
    });
    ctx.restore();
    return toDraw <= 0;
  });
}

function drawBlanks(ctx, effectiveColumns, width, height, totalHeaderHeight, translateX, translateY, cellYOffset, rows, getRowHeight, selectedRows, disabledRows, lastRowSticky, drawRegions, damage, theme) {
  if (damage !== undefined) return;
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

      if (rowDisabled) {
        ctx.fillStyle = theme.bgHeader;
        ctx.fillRect(drawX, drawY, 10000, rh);
      }

      if (rowSelected) {
        ctx.fillStyle = theme.accentLight;
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

function drawFocusRing(ctx, width, height, cellYOffset, translateX, translateY, effectiveCols, theme, totalHeaderHeight, selectedCell, getRowHeight, lastRowSticky, rows) {
  if (selectedCell === undefined || effectiveCols.find(c => c.sourceIndex === selectedCell.cell[0] === undefined)) return;
  const [targetCol, targetRow] = selectedCell.cell;
  const isStickyRow = lastRowSticky && targetRow === rows - 1;
  const stickRowHeight = lastRowSticky && !isStickyRow ? getRowHeight(rows - 1) - 1 : 0;
  ctx.save();
  ctx.beginPath();
  ctx.rect(0, totalHeaderHeight, width, height - totalHeaderHeight - stickRowHeight);
  ctx.clip();
  walkColumns(effectiveCols, cellYOffset, translateX, translateY, totalHeaderHeight, (col, drawX, colDrawY, clipX, startRow) => {
    if (col.sourceIndex !== targetCol) {
      return;
    }

    walkRowsInCol(startRow, colDrawY, height, rows, getRowHeight, lastRowSticky, (drawY, row, rh) => {
      var _col$themeOverride$ac, _col$themeOverride;

      if (row !== targetRow) return;

      if (clipX > drawX) {
        const diff = Math.max(0, clipX - drawX);
        ctx.beginPath();
        ctx.rect(drawX + diff, drawY, col.width - diff + 1, rh + 1);
        ctx.clip();
      }

      ctx.beginPath();
      ctx.rect(drawX + 0.5, drawY + 0.5, col.width, rh);
      ctx.strokeStyle = (_col$themeOverride$ac = (_col$themeOverride = col.themeOverride) === null || _col$themeOverride === void 0 ? void 0 : _col$themeOverride.accentColor) !== null && _col$themeOverride$ac !== void 0 ? _col$themeOverride$ac : theme.accentColor;
      ctx.lineWidth = 1;
      ctx.stroke();
      return true;
    });
    return true;
  });
  ctx.restore();
}

export function drawGrid(canvas, buffers, width, height, cellXOffset, cellYOffset, translateX, translateY, columns, mappedColumns, enableGroups, freezeColumns, dragAndDropState, theme, headerHeight, groupHeaderHeight, selectedRows, disabledRows, rowHeight, verticalBorder, selectedColumns, isResizing, selectedCell, lastRowSticky, rows, getCellContent, getGroupDetails, drawCustomCell, drawHeaderCallback, prelightCells, imageLoader, lastBlitData, canBlit, damage, hoverValues, hoverInfo, spriteManager, scrolling, enqueue) {
  var _window$devicePixelRa;

  if (width === 0 || height === 0) return;
  const dpr = scrolling ? 1 : Math.ceil((_window$devicePixelRa = window.devicePixelRatio) !== null && _window$devicePixelRa !== void 0 ? _window$devicePixelRa : 1);

  if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
    canvas.width = width * dpr;
    canvas.height = height * dpr;
  }

  const overlayCanvas = buffers.overlay;
  const totalHeaderHeight = enableGroups ? groupHeaderHeight + headerHeight : headerHeight;

  if (overlayCanvas.width !== width * dpr || overlayCanvas.height !== totalHeaderHeight * dpr) {
    overlayCanvas.width = width * dpr;
    overlayCanvas.height = totalHeaderHeight * dpr;
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
  targetCtx.font = `${theme.baseFontStyle} ${theme.fontFamily}`;
  overlayCtx.font = `${theme.baseFontStyle} ${theme.fontFamily}`;

  if (dpr !== 1) {
    overlayCtx.scale(dpr, dpr);
    targetCtx.scale(dpr, dpr);
  }

  const effectiveCols = getEffectiveColumns(mappedColumns, cellXOffset, width, dragAndDropState, translateX);
  let drawRegions = [];

  const drawHeaderTexture = () => {
    drawGridHeaders(overlayCtx, effectiveCols, enableGroups, hoverInfo, width, translateX, headerHeight, groupHeaderHeight, selectedColumns, dragAndDropState, isResizing, selectedCell, theme, spriteManager, hoverValues, verticalBorder, getGroupDetails, damage, drawHeaderCallback);
    drawGridLines(overlayCtx, effectiveCols, cellYOffset, translateX, translateY, width, height, groupHeaderHeight, totalHeaderHeight, getRowHeight, verticalBorder, lastRowSticky, rows, theme, true);
  };

  if (damage !== undefined) {
    let doHeaders = false;
    damage = damage.filter(x => {
      doHeaders = doHeaders || x[1] < 0;
      return x[1] < 0 || intersectRect(cellXOffset, cellYOffset, effectiveCols.length, 300, x[0], x[1], 1, 1) || intersectRect(0, cellYOffset, freezeColumns, 300, x[0], x[1], 1, 1);
    });

    if (damage.length > 0) {
      clipDamage(targetCtx, effectiveCols, width, height, groupHeaderHeight, totalHeaderHeight, translateX, translateY, cellYOffset, rows, getRowHeight, lastRowSticky, damage);
      targetCtx.fillStyle = theme.bgCell;
      targetCtx.fillRect(0, totalHeaderHeight + 1, width, height - totalHeaderHeight - 1);
      drawCells(targetCtx, effectiveCols, height, totalHeaderHeight, translateX, translateY, cellYOffset, rows, getRowHeight, getCellContent, getGroupDetails, selectedRows, disabledRows, lastRowSticky, drawRegions, damage, selectedCell, selectedColumns, prelightCells, drawCustomCell, imageLoader, hoverValues, hoverInfo, theme, enqueue);
    }

    if (doHeaders) {
      clipDamage(overlayCtx, effectiveCols, width, totalHeaderHeight, groupHeaderHeight, totalHeaderHeight, translateX, translateY, cellYOffset, rows, getRowHeight, lastRowSticky, damage);
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
    } = blitLastFrame(targetCtx, canvas, last, cellXOffset, cellYOffset, translateX, translateY, lastRowSticky, width, height, rows, totalHeaderHeight, dpr, columns, effectiveCols, getRowHeight);
    drawRegions = regions;
  }

  overdrawStickyBoundaries(targetCtx, effectiveCols, width, height, totalHeaderHeight, lastRowSticky, rows, getRowHeight, theme);

  if (selectedCell !== undefined && selectedCell.cell[0] === freezeColumns - 1) {
    drawFocusRing(targetCtx, width, height, cellYOffset, translateX, translateY, effectiveCols, theme, totalHeaderHeight, selectedCell, getRowHeight, lastRowSticky, rows);
  }

  if (drawRegions.length > 0) {
    targetCtx.beginPath();

    for (const r of drawRegions) {
      targetCtx.rect(r.x, r.y, r.width, r.height);
    }

    targetCtx.clip();
    targetCtx.beginPath();
  }

  targetCtx.fillStyle = theme.bgCell;
  targetCtx.fillRect(0, 0, width, height);
  drawCells(targetCtx, effectiveCols, height, totalHeaderHeight, translateX, translateY, cellYOffset, rows, getRowHeight, getCellContent, getGroupDetails, selectedRows, disabledRows, lastRowSticky, drawRegions, damage, selectedCell, selectedColumns, prelightCells, drawCustomCell, imageLoader, hoverValues, hoverInfo, theme, enqueue);
  drawBlanks(targetCtx, effectiveCols, width, height, totalHeaderHeight, translateX, translateY, cellYOffset, rows, getRowHeight, selectedRows, disabledRows, lastRowSticky, drawRegions, damage, theme);
  drawGridLines(targetCtx, effectiveCols, cellYOffset, translateX, translateY, width, height, groupHeaderHeight, totalHeaderHeight, getRowHeight, verticalBorder, lastRowSticky, rows, theme);
  drawFocusRing(targetCtx, width, height, cellYOffset, translateX, translateY, effectiveCols, theme, totalHeaderHeight, selectedCell, getRowHeight, lastRowSticky, rows);
  imageLoader === null || imageLoader === void 0 ? void 0 : imageLoader.setWindow({
    x: cellXOffset,
    y: cellYOffset,
    width: effectiveCols.length,
    height: 100
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