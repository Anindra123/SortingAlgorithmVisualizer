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
