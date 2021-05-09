import { sleep } from "./speed.js";
import {
  bar_container,
  bar_container as container,
  child_node_list as list,
  heightArray as arr,
} from "./app.js";

async function swap(i, j) {
  let elem_i = list[i];
  let elem_j = list[j];
  [arr[i], arr[j]] = [arr[j], arr[i]];
  [elem_i.style.height, elem_j.style.height] = [
    elem_j.style.height,
    elem_i.style.height,
  ];
  await sleep(50);
}
export { swap };
