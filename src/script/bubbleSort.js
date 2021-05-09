import {
  heightArray as arr,
  bar_container as container,
  child_node_list as list,
  heightArray,
} from "./app.js";
import { swap } from "./swap.js";
import { sortedHighlight, sortHighlight } from "./highlight.js";
const bubbleSort = () => {
  bubbleSortHelper();
};
async function bubbleSortHelper() {
  for (let i = heightArray.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      await sortHighlight(j, j + 1);
      if (heightArray[j] > heightArray[j + 1]) {
        await swap(j, j + 1);
      }
    }
    await sortedHighlight(i - 1);
  }
}

export { bubbleSort };
