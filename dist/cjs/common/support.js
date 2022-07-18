"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assert = assert;
exports.assertNever = assertNever;
exports.deepEqual = deepEqual;
exports.maybe = maybe;
exports.proveType = proveType;

function proveType(_val) {}

function panic() {
  let message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "This should not happen";
  throw new Error(message);
}

function assert(fact) {
  let message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Assertion failed";
  if (fact) return;
  return panic(message);
}

function assertNever(_never) {
  return panic("Hell froze over");
}

function maybe(fn, defaultValue) {
  try {
    const result = fn();
    return result;
  } catch {
    return defaultValue;
  }
}

const has = Object.prototype.hasOwnProperty;

function deepEqual(foo, bar) {
  let ctor, len;
  if (foo === bar) return true;

  if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
    if (ctor === Date) return foo.getTime() === bar.getTime();
    if (ctor === RegExp) return foo.toString() === bar.toString();

    if (ctor === Array) {
      if ((len = foo.length) === bar.length) {
        while (len-- && deepEqual(foo[len], bar[len]));
      }

      return len === -1;
    }

    if (!ctor || typeof foo === "object") {
      len = 0;

      for (ctor in foo) {
        if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
        if (!(ctor in bar) || !deepEqual(foo[ctor], bar[ctor])) return false;
      }

      return Object.keys(bar).length === len;
    }
  }

  return foo !== foo && bar !== bar;
}