import {
  heightArray as arr,
  child_node_list as list,
  animationSpeed,
} from "./app.js";
import { sleep } from "./speed.js";
export async function insert(src, target) {
  list[target].style.height = `${src}px`;
  await sleep(animationSpeed);
}
