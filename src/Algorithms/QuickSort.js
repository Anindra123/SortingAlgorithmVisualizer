import * as app from "../app.js";
import * as nodeFunc from "../nodes.js";

async function partioning(blockList, l, r) {
  let pivot = Number(blockList[r].childNodes[0].textContent);
  blockList[r].childNodes[1].style.backgroundColor = "skyblue";
  let i = l - 1;
  let j = l;
  while (j < r) {
    if (Number(blockList[j].childNodes[0].textContent) <= pivot) {
      i++;
      blockList[i].childNodes[1].style.backgroundColor = "#FF4949";
      await nodeFunc.swapNodes(blockList, i, j, 200);
    }

    blockList = document.querySelectorAll(".block");
    blockList[j].childNodes[1].style.backgroundColor = "aquamarine";
    j++;
  }
  await nodeFunc.swapNodes(blockList, i + 1, r, 200);
  blockList = document.querySelectorAll(".block");
  blockList[i + 1].childNodes[1].style.backgroundColor = "aquamarine";
  blockList[r].childNodes[1].style.backgroundColor = "aquamarine";
  return i + 1;
}

async function QuickSortAlgo(b, l, r) {
  if (l < r) {
    b = document.querySelectorAll(".block");
    let p = await partioning(b, l, r);
    await Promise.all([QuickSortAlgo(b, l, p - 1), QuickSortAlgo(b, p + 1, r)]);
  }
}

export function QuickSort() {
  app.rand.disabled = true;
  app.disableButton(true);
  let blocks = document.querySelectorAll(".block");
  QuickSortAlgo(blocks, 0, blocks.length - 1).then(() => {
    app.rand.disabled = false;
  });
}
