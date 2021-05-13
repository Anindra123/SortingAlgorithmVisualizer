import { disableAll, enable, heightArray as arr } from "./app.js";
import { sortedAnimation, sortHighlight } from "./highlight.js";
import { swap } from "./swap.js";
async function selectionSortAlgo() {
  let k = 0;
  while (k < arr.length) {
    let low = k;
    await sortHighlight(low);
    for (let i = k + 1; i < arr.length; i++) {
      await sortHighlight(i, low);
      if (arr[i] < arr[low]) {
        low = i;
        await sortHighlight(i, low);
      }
    }
    if (low !== k) {
      await sortHighlight(k, low);
      await swap(low, k);
    }
    k++;
  }
}

async function selectionSortHelper() {
  try {
    await selectionSortAlgo();
    await sortedAnimation();
  } finally {
    enable();
  }
}
const selectionSort = () => {
  disableAll();
  selectionSortHelper();
};

export { selectionSort };
