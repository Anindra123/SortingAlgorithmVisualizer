import { insert } from "../insert.js";
import { disableAll, enable, heightArray as arr } from "../app.js";
import { sortedAnimation, sortHighlight } from "../highlight.js";

async function insertionSortAlgo() {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    await sortHighlight(i, j);
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      await sortHighlight(j, j + 1);
      await insert(arr[j], j + 1);
      j--;
    }
    arr[j + 1] = key;
    await sortHighlight(i, j + 1);
    await insert(key, j + 1);
  }
}
async function insertionSortHelper() {
  try {
    await insertionSortAlgo();
    await sortedAnimation();
  } finally {
    enable();
  }
}
const insertionSort = () => {
  disableAll();
  insertionSortHelper();
};

export { insertionSort };
