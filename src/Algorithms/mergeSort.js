import {
  bar_container,
  disableAll,
  enable,
  heightArray as arr,
  heightArray,
} from "../app.js";
import { sortedAnimation, sortHighlight } from "../highlight.js";
import { insert } from "../insert.js";
async function merge(startidx, endidx, mididx, mainarr, auxarr) {
  let i = startidx;
  let j = mididx + 1;
  let k = startidx;
  await sortHighlight(i, j);
  while (i <= mididx && j <= endidx) {
    if (auxarr[i] < auxarr[j]) {
      await sortHighlight(k);
      await insert(auxarr[i], k);
      mainarr[k] = auxarr[i];
      k++;
      i++;
    } else {
      await sortHighlight(k);
      await insert(auxarr[j], k);
      mainarr[k] = auxarr[j];
      k++;
      j++;
    }
  }
  while (i <= mididx) {
    await sortHighlight(k);
    await insert(auxarr[i], k);
    mainarr[k] = auxarr[i];
    k++;
    i++;
  }
  while (j <= endidx) {
    await sortHighlight(k);
    await insert(auxarr[j], k);
    mainarr[k] = auxarr[j];
    k++;
    j++;
  }
}
async function mergeSortAlgo(left, right, mainarr, auxarr) {
  if (left === right) return;
  let mididx = Math.floor(left + (right - left) / 2);
  await mergeSortAlgo(left, mididx, auxarr, mainarr);
  await mergeSortAlgo(mididx + 1, right, auxarr, mainarr);
  await merge(left, right, mididx, mainarr, auxarr);
}

async function mergeSortHelper() {
  try {
    let auxarr = arr.slice();
    await mergeSortAlgo(0, arr.length - 1, arr, auxarr);
    await sortedAnimation();
  } finally {
    enable();
  }
}
const mergeSort = () => {
  disableAll();
  mergeSortHelper();
};
export { mergeSort };
