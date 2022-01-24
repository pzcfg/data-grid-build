import clamp from "lodash/clamp";
const hoverTime = 80;
const epsilon = 1e-6;

class Easing {
  constructor(p1x, p1y, p2x, p2y) {
    this.ax = 0;
    this.ay = 0;
    this.bx = 0;
    this.by = 0;
    this.cx = 0;
    this.cy = 0;
    this.cx = 3.0 * p1x;
    this.bx = 3.0 * (p2x - p1x) - this.cx;
    this.ax = 1.0 - this.cx - this.bx;
    this.cy = 3.0 * p1y;
    this.by = 3.0 * (p2y - p1y) - this.cy;
    this.ay = 1.0 - this.cy - this.by;
  }

  sampleCurveX(t) {
    return ((this.ax * t + this.bx) * t + this.cx) * t;
  }

  sampleCurveY(t) {
    return ((this.ay * t + this.by) * t + this.cy) * t;
  }

  sampleCurveDerivativeX(t) {
    return (3.0 * this.ax * t + 2.0 * this.bx) * t + this.cx;
  }

  solveCurveX(x) {
    let t0;
    let t1;
    let t2;
    let x2;
    let d2;
    let i;

    for (t2 = x, i = 0; i < 8; i++) {
      x2 = this.sampleCurveX(t2) - x;
      if (Math.abs(x2) < epsilon) return t2;
      d2 = this.sampleCurveDerivativeX(t2);
      if (Math.abs(d2) < epsilon) break;
      t2 = t2 - x2 / d2;
    }

    t0 = 0.0;
    t1 = 1.0;
    t2 = x;
    if (t2 < t0) return t0;
    if (t2 > t1) return t1;

    while (t0 < t1) {
      x2 = this.sampleCurveX(t2);
      if (Math.abs(x2 - x) < epsilon) return t2;
      if (x > x2) t0 = t2;else t1 = t2;
      t2 = (t1 - t0) * 0.5 + t0;
    }

    return t2;
  }

  solve(x) {
    return this.sampleCurveY(this.solveCurveX(x));
  }

}

export const ease = new Easing(0.25, 0.1, 0.25, 1);
export class AnimationManager {
  constructor(callback) {
    this.callback = callback;
    this.currentHoveredItem = undefined;
    this.leavingItems = [];
    this.lastAnimationTime = void 0;

    this.areSameItems = (left, right) => {
      return (left === null || left === void 0 ? void 0 : left[0]) === (right === null || right === void 0 ? void 0 : right[0]) && (left === null || left === void 0 ? void 0 : left[1]) === (right === null || right === void 0 ? void 0 : right[1]);
    };

    this.addToLeavingItems = item => {
      const isAlreadyLeaving = this.leavingItems.find(i => this.areSameItems(i.item, item.item)) !== undefined;

      if (isAlreadyLeaving) {
        return;
      }

      this.leavingItems.push(item);
    };

    this.removeFromLeavingItems = item => {
      var _leavingItem$hoverAmo;

      const leavingItem = this.leavingItems.find(e => this.areSameItems(e.item, item));
      this.leavingItems = this.leavingItems.filter(i => i !== leavingItem);
      return (_leavingItem$hoverAmo = leavingItem === null || leavingItem === void 0 ? void 0 : leavingItem.hoverAmount) !== null && _leavingItem$hoverAmo !== void 0 ? _leavingItem$hoverAmo : 0;
    };

    this.cleanUpLeavingElements = () => {
      this.leavingItems = this.leavingItems.filter(i => i.hoverAmount > 0);
    };

    this.shouldStep = () => {
      const hasLeavingItems = this.leavingItems.length > 0;
      const currentHoveredIsAnimating = this.currentHoveredItem !== undefined && this.currentHoveredItem.hoverAmount < 1;
      return hasLeavingItems || currentHoveredIsAnimating;
    };

    this.getAnimatingItems = () => {
      if (this.currentHoveredItem !== undefined) {
        return [...this.leavingItems, this.currentHoveredItem];
      }

      return this.leavingItems.map(x => ({ ...x,
        hoverAmount: ease.solve(x.hoverAmount)
      }));
    };

    this.step = timestamp => {
      if (this.lastAnimationTime === undefined) {
        this.lastAnimationTime = timestamp;
      } else {
        const step = timestamp - this.lastAnimationTime;
        const delta = step / hoverTime;

        for (const item of this.leavingItems) {
          item.hoverAmount = clamp(item.hoverAmount - delta, 0, 1);
        }

        if (this.currentHoveredItem !== undefined) {
          this.currentHoveredItem.hoverAmount = clamp(this.currentHoveredItem.hoverAmount + delta, 0, 1);
        }

        const animating = this.getAnimatingItems();
        this.callback(animating);
        this.cleanUpLeavingElements();
      }

      if (this.shouldStep()) {
        this.lastAnimationTime = timestamp;
        window.requestAnimationFrame(this.step);
      } else {
        this.lastAnimationTime = undefined;
      }
    };

    this.setHovered = item => {
      var _this$currentHoveredI;

      if (this.areSameItems((_this$currentHoveredI = this.currentHoveredItem) === null || _this$currentHoveredI === void 0 ? void 0 : _this$currentHoveredI.item, item)) {
        return;
      }

      if (this.currentHoveredItem !== undefined) {
        this.addToLeavingItems(this.currentHoveredItem);
      }

      if (item !== undefined) {
        const hoverAmount = this.removeFromLeavingItems(item);
        this.currentHoveredItem = {
          item,
          hoverAmount
        };
      } else {
        this.currentHoveredItem = undefined;
      }

      if (this.lastAnimationTime === undefined) {
        window.requestAnimationFrame(this.step);
      }
    };
  }

}