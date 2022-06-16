import * as React from "react";

function hasItem(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === item[0] && arr[i][1] === item[1]) return true;
  }

  return false;
}

export function useAnimationQueue(draw) {
  const queue = React.useRef([]);
  const seq = React.useRef(0);
  const drawRef = React.useRef(draw);
  drawRef.current = draw;
  const loop = React.useCallback(() => {
    const requeue = () => window.requestAnimationFrame(fn);

    const fn = () => {
      const toDraw = queue.current;
      queue.current = [];
      drawRef.current(toDraw);

      if (queue.current.length > 0) {
        seq.current++;
      } else {
        seq.current = 0;
      }
    };

    window.requestAnimationFrame(seq.current > 600 ? requeue : fn);
  }, []);
  const enqueue = React.useCallback(item => {
    if (hasItem(queue.current, item)) return;

    if (queue.current.length === 0) {
      loop();
    }

    queue.current.push(item);
  }, [loop]);
  return enqueue;
}