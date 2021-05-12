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

async function sortHighlight(...nodes) {
  removeHighlight();
  nodes.forEach((i) => {
    list[i].style.backgroundColor = "rebeccapurple";
    highlightedNodes.push(list[i]);
  });

  await sleep(10);
}
function colorBar(node) {
  node.style.backgroundColor = "aquamarine";
}
function resetBarColor() {
  list.forEach((li) => {
    li.style.backgroundColor = "coral";
  });
}
async function sortedAnimation() {
  resetBarColor();
  for (let i = 0; i < list.length; i++) {
    colorBar(list[i]);
    await sleep(50);
  }
}

export { sortHighlight, sortedAnimation };
