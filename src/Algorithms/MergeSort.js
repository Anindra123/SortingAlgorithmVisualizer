import { arr } from "../blocks.js";
import * as nodeFunc from "../nodes.js";

const merge = (larr, rarr) => {
  const c = [];
  while (larr.length > 0 && rarr.length > 0) {
    if (larr[0] <= rarr[0]) {
      c.push(larr.shift());
    } else {
      c.push(rarr.shift());
    }
  }
  while (larr.length > 0) {
    c.push(larr.shift());
  }
  while (rarr.length > 0) {
    c.push(rarr.shift());
  }

  return c;
};

const mergeSortAlgo = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const m = Math.floor(arr.length / 2);
  const larr = arr.slice(0, m);
  const rarr = arr.slice(m);

  const lsorted = mergeSortAlgo(larr);
  const rsorted = mergeSortAlgo(rarr);

  return merge(lsorted, rsorted);
};

export const MergeSort = () => {
  console.log(arr);
  arr = [...mergeSortAlgo(arr)];
};
