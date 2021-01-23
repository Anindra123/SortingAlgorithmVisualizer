import * as app from "../app.js";
import * as nodeFunc from "../nodes.js";

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
      await nodeFunc.delay(200);
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
