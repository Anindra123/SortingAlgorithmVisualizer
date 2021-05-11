import { bar_container, heightArray as arr, heightArray } from "./app.js";
import { sortHighlight, sortedHighlight } from "./highlight.js";
import { insert } from "./insert.js";
async function merge(startidx, endidx, mididx, mainarr, auxarr) {
  let i = startidx;
  let j = mididx + 1;
  let k = startidx;
  let tempNode = [];
  while (i <= mididx && j <= endidx) {
    if (auxarr[i] < auxarr[j]) {
      tempNode.push(auxarr[i]);
      mainarr[k] = auxarr[i];
      k++;
      i++;
    } else {
      tempNode.push(auxarr[j]);
      mainarr[k] = auxarr[j];
      k++;
      j++;
    }
  }
  while (i <= mididx) {
    tempNode.push(auxarr[i]);
    mainarr[k] = auxarr[i];
    k++;
    i++;
  }
  while (j <= endidx) {
    tempNode.push(auxarr[j]);
    mainarr[k] = auxarr[j];
    k++;
    j++;
  }
  for (let i = startidx, s = 0; i <= endidx; i++, s++) {
    await sortHighlight(i);
    await insert(tempNode[s], i);
  }
}
async function mergeSortAlgo(left, right, mainarr, auxarr) {
  if (left === right) return;
  let mididx = Math.floor(left + (right - left) / 2);
  await mergeSortAlgo(left, mididx, auxarr, mainarr);
  await mergeSortAlgo(mididx + 1, right, auxarr, mainarr);
  await merge(left, right, mididx, mainarr, auxarr);
}

const mergeSort = () => {
  let auxarr = arr.slice();
  mergeSortAlgo(0, arr.length - 1, arr, auxarr);
};
export { mergeSort };
