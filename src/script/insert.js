import {
  heightArray as arr,
  bar_container as container,
  child_node_list as list,
} from "./app.js";
import { sleep } from "./speed.js";
const nodeList = [];
for (let i = 0; i < list.length; i++) {
  nodeList.push(list[i].cloneNode());
}

export async function insert(i, target) {
  if (i === target) {
    return;
  }
  container.insertBefore(list[i], list[target]);

  await sleep(50);
}
