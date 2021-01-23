import * as app from "../app.js";
import * as nodeFunc from "../nodes.js";

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
      await nodeFunc.delay(200);
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
