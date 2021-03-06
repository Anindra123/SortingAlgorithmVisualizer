import {
  heightArray as arr,
  bar_container as container,
  child_node_list as list,
  heightArray,
  enable,
  disableAll,
} from "../app.js";
import { swap } from "../swap.js";
import { sortedAnimation, sortHighlight } from "../highlight.js";

async function bubbleSortAlgo() {
  for (let i = heightArray.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      await sortHighlight(j, j + 1);
      if (heightArray[j] > heightArray[j + 1]) {
        await swap(j, j + 1);
      }
    }
  }
}

async function bubbleSortHelper() {
  try {
    await bubbleSortAlgo();
    await sortedAnimation();
  } finally {
    enable();
  }
}
const bubbleSort = () => {
  disableAll();
  bubbleSortHelper();
};

export { bubbleSort };
