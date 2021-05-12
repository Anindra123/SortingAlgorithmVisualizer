import { bar_container, heightArray as arr, heightArray } from "./app.js";
import { sortedAnimation, sortHighlight } from "./highlight.js";
import { insert } from "./insert.js";
async function merge(startidx, endidx, mididx, mainarr, auxarr) {
  let i = startidx;
  let j = mididx + 1;
  let k = startidx;
  let tempNode = [];
  while (i <= mididx && j <= endidx) {
    if (auxarr[i] < auxarr[j]) {
      await sortHighlight(i, k);
      await insert(auxarr[i], k);
      mainarr[k] = auxarr[i];
      k++;
      i++;
    } else {
      await sortHighlight(j, k);
      await insert(auxarr[j], k);
      mainarr[k] = auxarr[j];
      k++;
      j++;
    }
  }
  while (i <= mididx) {
    await sortHighlight(i, k);
    await insert(auxarr[i], k);
    mainarr[k] = auxarr[i];
    k++;
    i++;
  }
  while (j <= endidx) {
    await sortHighlight(j, k);
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
  let auxarr = arr.slice();
  await mergeSortAlgo(0, arr.length - 1, arr, auxarr);
  await sortedAnimation();
}
const mergeSort = () => {
  mergeSortHelper();
};
export { mergeSort };
