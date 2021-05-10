import { bar_container, heightArray as arr } from "./app.js";
import { sortHighlight, sortedHighlight } from "./highlight.js";
import { insert } from "./insert.js";
import { swap } from "./swap.js";
const nodeList = bar_container.childNodes;
async function merge(startidx, endidx, mididx, mainarr, auxarr) {
  let i = startidx;
  let j = mididx + 1;
  let k = startidx;
  while (i <= mididx && j <= endidx) {
    if (auxarr[i] <= auxarr[j]) {
      await sortHighlight(i, k);
      await insert(i, k);
      mainarr[k] = auxarr[i];
      k++;
      i++;
    } else {
      await sortHighlight(j, k);
      await insert(j, k);
      mainarr[k] = auxarr[j];
      k++;
      j++;
    }
  }
  while (i <= mididx) {
    sortHighlight(i, k);
    await insert(i, k);
    mainarr[k] = auxarr[i];
    k++;
    i++;
  }
  while (j <= endidx) {
    sortHighlight(j, k);
    await insert(j, k);
    mainarr[k] = auxarr[j];
    k++;
    j++;
  }
}
async function mergeSortAlgo(left, right, mainarr, auxarr) {
  if (left === right) return;
  let mididx = Math.floor((left + right) / 2);
  await mergeSortAlgo(left, mididx, auxarr, mainarr);
  await mergeSortAlgo(mididx + 1, right, auxarr, mainarr);
  await merge(left, right, mididx, mainarr, auxarr);
}

const mergeSort = () => {
  let auxarr = arr.slice();
  mergeSortAlgo(0, arr.length - 1, arr, auxarr);
};
export { mergeSort };
