import {
  heightArray as arr,
  bar_container as container,
  child_node_list as list,
  bar_container,
} from "./app.js";
import { sleep } from "./speed.js";
// const nodeList = [];
// for (let i = 0; i < list.length; i++) {
//   nodeList.push(list[i].cloneNode());
// }

export async function insert(src, target) {
  list[target].style.height = `${src}px`;
  await sleep(50);
}
