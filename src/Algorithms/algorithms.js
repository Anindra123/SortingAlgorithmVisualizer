import * as app from "../app.js";
import * as nodeFunc from "../nodes.js";

//Bubble Sort
export async function BubbleSort() {
  app.disableButton(true);
  app.rand.disabled = true;
  let blocks = document.querySelectorAll(".block");
  let i = 1;
  while (i < blocks.length) {
    let u = blocks.length - i;
    let swp = 0;
    for (let j = 0; j < u; j++) {
      blocks[j].childNodes[1].style.backgroundColor = "#FF4949";
      blocks[j + 1].childNodes[1].style.backgroundColor = "#FF4949";

      const val1 = Number(blocks[j].childNodes[0].textContent);
      const val2 = Number(blocks[j + 1].childNodes[0].textContent);
      if (val1 > val2) {
        await nodeFunc.swapNodes(blocks, j, j + 1, 200);
        swp++;
      }
      blocks = document.querySelectorAll(".block");
      blocks[j].childNodes[1].style.backgroundColor = "white";
      blocks[j + 1].childNodes[1].style.backgroundColor = "white";
    }
    blocks[u].childNodes[1].style.backgroundColor = "aquamarine";
    if (swp > 0) {
      i++;
    } else {
      break;
    }
  }
  app.rand.disabled = false;
}

//Selection Sort

export async function SelectionSort() {
  app.disableButton(true);
  app.rand.disabled = true;
  let blocks = document.querySelectorAll(".block");
  let i = 0;
  while (i < blocks.length) {
    blocks[i].childNodes[1].style.backgroundColor = "#FF4949";
    let k = i;
    for (let j = i + 1; j < blocks.length; j++) {
      blocks[j].childNodes[1].style.backgroundColor = "#FF4949";
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 200);
      });
      const val1 = Number(blocks[k].childNodes[0].textContent);
      const val2 = Number(blocks[j].childNodes[0].textContent);
      if (val2 < val1) {
        k = j;
      }
      blocks[j].childNodes[1].style.backgroundColor = "white";
    }
    await nodeFunc.swapNodes(blocks, i, k, 200);
    blocks = document.querySelectorAll(".block");
    blocks[k].childNodes[1].style.backgroundColor = "white";
    blocks[i].childNodes[1].style.backgroundColor = "aquamarine";
    i++;
  }
  app.rand.disabled = false;
}

//Insertion Sort

export async function InsertionSort() {
  app.disableButton(true);
  app.rand.disabled = true;
  let blocks = document.querySelectorAll(".block");
  let i = 1;
  while (i < blocks.length) {
    let j = i - 1;

    let iNode = blocks[i].cloneNode(true);
    iNode.childNodes[1].style.backgroundColor = "aquamarine";
    while (
      j >= 0 &&
      Number(blocks[j].childNodes[0].textContent) >
        Number(blocks[i].childNodes[0].textContent)
    ) {
      blocks[j].childNodes[1].style.backgroundColor = "#FF4949";
      blocks[j + 1].childNodes[1].style.backgroundColor = "#FF4949";
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 200);
      });
      let jNode = blocks[j].cloneNode(true);
      jNode.childNodes[1].style.backgroundColor = "aquamarine";
      await nodeFunc.replaceNode(blocks, j + 1, jNode, 200);
      j--;
    }
    await nodeFunc.replaceNode(blocks, j + 1, iNode, 200);
    blocks = document.querySelectorAll(".block");
    i++;
  }
  app.rand.disabled = false;
}

//Quick Sort

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
