"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.backProp = backProp;
exports.clearMultilineCache = clearMultilineCache;
exports.splitMultilineText = splitMultilineText;
const resultCache = new Map();
const metrics = new Map();
const hyperMaps = new Map();

function clearMultilineCache() {
  resultCache.clear();
  metrics.clear();
  hyperMaps.clear();
}

function backProp(text, realWidth, keyMap, temperature, avgSize) {
  let guessWidth = 0;
  const contribMap = {};

  for (const char of text) {
    var _keyMap$get, _contribMap$char;

    const v = (_keyMap$get = keyMap.get(char)) !== null && _keyMap$get !== void 0 ? _keyMap$get : avgSize;
    guessWidth += v;
    contribMap[char] = ((_contribMap$char = contribMap[char]) !== null && _contribMap$char !== void 0 ? _contribMap$char : 0) + 1;
  }

  const diff = realWidth - guessWidth;

  for (const key of Object.keys(contribMap)) {
    var _keyMap$get2;

    const numContribution = contribMap[key];
    const contribWidth = (_keyMap$get2 = keyMap.get(key)) !== null && _keyMap$get2 !== void 0 ? _keyMap$get2 : avgSize;
    const contribAmount = contribWidth * numContribution / guessWidth;
    const adjustment = diff * contribAmount * temperature / numContribution;
    const newVal = contribWidth + adjustment;
    keyMap.set(key, newVal);
  }
}

function makeHyperMap(ctx, avgSize) {
  const result = new Map();
  let total = 0;

  for (const char of "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,.-+=?") {
    const w = ctx.measureText(char).width;
    result.set(char, w);
    total += w;
  }

  const avg = total / result.size;
  const damper = 3;
  const scaler = (avgSize / avg + damper) / (damper + 1);
  const keys = result.keys();

  for (const key of keys) {
    var _result$get;

    result.set(key, ((_result$get = result.get(key)) !== null && _result$get !== void 0 ? _result$get : avg) * scaler);
  }

  return result;
}

function measureText(ctx, text, fontStyle, hyperMode) {
  var _current$count;

  const current = metrics.get(fontStyle);

  if (hyperMode && current !== undefined && current.count > 20000) {
    let hyperMap = hyperMaps.get(fontStyle);

    if (hyperMap === undefined) {
      hyperMap = makeHyperMap(ctx, current.size);
      hyperMaps.set(fontStyle, hyperMap);
    }

    if (current.count > 500000) {
      let final = 0;

      for (const char of text) {
        var _hyperMap$get;

        final += (_hyperMap$get = hyperMap.get(char)) !== null && _hyperMap$get !== void 0 ? _hyperMap$get : current.size;
      }

      return final * 1.01;
    }

    const result = ctx.measureText(text);
    backProp(text, result.width, hyperMap, Math.max(0.05, 1 - current.count / 200000), current.size);
    metrics.set(fontStyle, {
      count: current.count + text.length,
      size: current.size
    });
    return result.width;
  }

  const result = ctx.measureText(text);
  const avg = result.width / text.length;

  if (((_current$count = current === null || current === void 0 ? void 0 : current.count) !== null && _current$count !== void 0 ? _current$count : 0) > 20000) {
    return result.width;
  }

  if (current === undefined) {
    metrics.set(fontStyle, {
      count: text.length,
      size: avg
    });
  } else {
    const diff = avg - current.size;
    const contribution = text.length / (current.count + text.length);
    const newVal = current.size + diff * contribution;
    metrics.set(fontStyle, {
      count: current.count + text.length,
      size: newVal
    });
  }

  return result.width;
}

function getSplitPoint(ctx, text, width, fontStyle, totalWidth, measuredChars, hyperMode) {
  if (text.length <= 1) return text.length;
  if (totalWidth < width) return -1;
  let guess = Math.floor(width / totalWidth * measuredChars);
  let guessWidth = measureText(ctx, text.substring(0, guess), fontStyle, hyperMode);

  if (guessWidth === width) {} else if (guessWidth < width) {
    while (guessWidth < width) {
      guess++;
      guessWidth = measureText(ctx, text.substring(0, guess), fontStyle, hyperMode);
    }

    guess--;
  } else {
    while (guessWidth > width) {
      guess--;
      guessWidth = measureText(ctx, text.substring(0, guess), fontStyle, hyperMode);
    }
  }

  if (text[guess] !== " ") {
    const lastSpace = text.lastIndexOf(" ", guess);

    if (lastSpace > 0) {
      guess = lastSpace;
    }
  }

  return guess;
}

function splitMultilineText(ctx, value, fontStyle, width, hyperWrappingAllowed) {
  const key = `${value}_${fontStyle}_${width}px`;
  const cacheResult = resultCache.get(key);
  if (cacheResult !== undefined) return cacheResult;

  if (width <= 0) {
    return [];
  }

  let result = [];
  const encodedLines = value.split("\n");
  const fontMetrics = metrics.get(fontStyle);
  const safeLineGuess = fontMetrics === undefined ? value.length : width / fontMetrics.size * 1.5;
  const hyperMode = hyperWrappingAllowed && fontMetrics !== undefined && fontMetrics.count > 20000;

  for (let line of encodedLines) {
    let textWidth = measureText(ctx, line.substring(0, safeLineGuess), fontStyle, hyperMode);
    let measuredChars = Math.min(line.length, safeLineGuess);

    if (textWidth <= width) {
      result.push(line);
    } else {
      while (textWidth > width) {
        const splitPoint = getSplitPoint(ctx, line, width, fontStyle, textWidth, measuredChars, hyperMode);
        const subLine = line.substring(0, splitPoint);
        line = line.substring(subLine.length);
        result.push(subLine);
        textWidth = measureText(ctx, line.substring(0, safeLineGuess), fontStyle, hyperMode);
        measuredChars = Math.min(line.length, safeLineGuess);
      }

      if (textWidth > 0) {
        result.push(line);
      }
    }
  }

  result = result.map((l, i) => i === 0 ? l.trimEnd() : l.trim());
  resultCache.set(key, result);

  if (resultCache.size > 500) {
    resultCache.delete(resultCache.keys().next().value);
  }

  return result;
}