import { disableAll, enable, heightArray as arr } from "../app.js";
import { sortedAnimation, sortHighlight } from "../highlight.js";
import { swap } from "../swap.js";
async function heapify(i, s) {
  let m = i;
  let l = 2 * i + 1;
  let r = 2 * i + 2;
  if (arr[l] > arr[m] && l < s) {
    m = l;
  }
  if (arr[r] > arr[m] && r < s) {
    m = r;
  }
  if (m !== i) {
    await sortHighlight(m, i);
    await swap(m, i);
    await heapify(m, s);
  }
}
async function buildMaxHeap() {
  let n = Math.floor(arr.length / 2);
  for (let i = n - 1; i >= 0; i--) {
    await heapify(i, arr.length);
  }
}

async function heapSortAlgo() {
  for (let j = arr.length - 1; j > 0; j--) {
    await sortHighlight(j);
    await swap(0, j);
    await heapify(0, j);
  }
}
async function heapSortHelper() {
  try {
    await buildMaxHeap();
    await heapSortAlgo();
    await sortedAnimation();
  } finally {
    enable();
  }
}
const heapSort = () => {
  disableAll();
  heapSortHelper();
};

export { heapSort };
