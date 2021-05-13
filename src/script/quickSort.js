import { disableAll, enable, heightArray as arr } from "./app.js";
import { sortedAnimation, sortHighlight } from "./highlight.js";
import { sleep } from "./speed.js";
import { swap } from "./swap.js";
async function quickSortAlgo(start, end) {
  if (start >= end) return;
  let pivot = start;
  let left = start + 1;
  let right = end;
  while (right >= left) {
    if (arr[left] > arr[pivot] && arr[right] < arr[pivot]) {
      await sortHighlight(left, right);
      await swap(left, right);
    }
    if (arr[left] <= arr[pivot]) {
      left++;
    }
    if (arr[right] >= arr[pivot]) {
      right--;
    }
  }
  if (pivot !== right) {
    await sortHighlight(pivot, right);
    await swap(pivot, right);
  }
  await quickSortAlgo(start, right - 1);
  await quickSortAlgo(right + 1, end);
}
async function quickSortHelper() {
  try {
    await quickSortAlgo(0, arr.length - 1);
    await sortedAnimation();
  } finally {
    enable();
  }
}

const quickSort = () => {
  disableAll();
  quickSortHelper();
};
export { quickSort };
