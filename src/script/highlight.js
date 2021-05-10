import { sleep } from "./speed.js";
import { child_node_list as list } from "./app.js";
const highlightedNodes = [];
const removeHighlight = () => {
  while (highlightedNodes.length) {
    let node = highlightedNodes.shift();
    if (!node.classList.contains("sorted")) {
      node.style.backgroundColor = "coral";
    } else {
      node.style.backgroundColor = "aquamarine";
    }
  }
};
async function sortedHighlight(...nodes) {
  nodes.forEach((i) => {
    list[i].classList.add("sorted");
    list[i].style.backgroundColor = "aquamarine";
    highlightedNodes.push(list[i]);
  });
  await sleep(5);
}
async function sortHighlight(...nodes) {
  removeHighlight();
  nodes.forEach((i) => {
    list[i].style.backgroundColor = "rebeccapurple";
    highlightedNodes.push(list[i]);
  });

  await sleep(50);
}

export { sortHighlight, sortedHighlight };
