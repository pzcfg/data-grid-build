import throttle from "https://esm.run/lodash/throttle.js";
const rowShift = 1 << 16;
const imgPool = [];

function packColRowToNumber(col, row) {
  return row * rowShift + col;
}

function unpackCol(packed) {
  return packed % rowShift;
}

function unpackRow(packed, col) {
  return (packed - col) / rowShift;
}

function unpackNumberToColRow(packed) {
  const col = unpackCol(packed);
  const row = unpackRow(packed, col);
  return [col, row];
}

class ImageWindowLoader {
  constructor() {
    this.imageLoaded = () => undefined;

    this.loadedLocations = [];
    this.visibleWindow = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
    this.freezeCols = 0;

    this.isInWindow = packed => {
      const col = unpackCol(packed);
      const row = unpackRow(packed, col);
      const w = this.visibleWindow;
      if (col < this.freezeCols && row >= w.y && row <= w.y + w.height) return true;
      return col >= w.x && col <= w.x + w.width && row >= w.y && row <= w.y + w.height;
    };

    this.cache = {};
    this.sendLoaded = throttle(() => {
      this.imageLoaded(this.loadedLocations);
      this.loadedLocations = [];
    }, 20);

    this.clearOutOfWindow = () => {
      const keys = Object.keys(this.cache);

      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const obj = this.cache[key];
        let keep = false;

        for (let j = 0; j < obj.cells.length; j++) {
          const packed = obj.cells[j];

          if (this.isInWindow(packed)) {
            keep = true;
            break;
          }
        }

        if (keep) {
          obj.cells = obj.cells.filter(this.isInWindow);
        } else {
          obj.cancel();
          delete this.cache[key];
        }
      }
    };
  }

  setCallback(imageLoaded) {
    this.imageLoaded = imageLoaded;
  }

  setWindow(newWindow, freezeCols) {
    if (this.visibleWindow.x === newWindow.x && this.visibleWindow.y === newWindow.y && this.visibleWindow.width === newWindow.width && this.visibleWindow.height === newWindow.height && this.freezeCols === freezeCols) return;
    this.visibleWindow = newWindow;
    this.freezeCols = freezeCols;
    this.clearOutOfWindow();
  }

  loadOrGetImage(url, col, row) {
    const key = url;
    const current = this.cache[key];

    if (current !== undefined) {
      const packed = packColRowToNumber(col, row);

      if (!current.cells.includes(packed)) {
        current.cells.push(packed);
      }

      return current.img;
    } else {
      var _imgPool$pop;

      let loaded = false;
      const img = (_imgPool$pop = imgPool.pop()) !== null && _imgPool$pop !== void 0 ? _imgPool$pop : new Image();
      let canceled = false;
      const result = {
        img: undefined,
        cells: [packColRowToNumber(col, row)],
        url,
        cancel: () => {
          if (canceled) return;
          canceled = true;

          if (imgPool.length < 12) {
            imgPool.unshift(img);
          } else if (!loaded) {
            img.src = "";
          }
        }
      };
      const loadPromise = new Promise(r => img.onload = () => r(null));
      requestAnimationFrame(async () => {
        try {
          img.src = url;
          await loadPromise;
          await img.decode();
          const toWrite = this.cache[key];

          if (toWrite !== undefined && !canceled) {
            toWrite.img = img;

            for (const packed of toWrite.cells) {
              this.loadedLocations.push(unpackNumberToColRow(packed));
            }

            loaded = true;
            this.sendLoaded();
          }
        } catch (e) {
          result.cancel();
        }
      });
      this.cache[key] = result;
      return undefined;
    }
  }

}

export default ImageWindowLoader;