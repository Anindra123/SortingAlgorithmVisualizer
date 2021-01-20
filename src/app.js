let arr = [];
const p = document.querySelector(".box");
const rand = document.querySelector(".randomize");
const bsort = document.querySelector(".bSort");
const ssort = document.querySelector(".SSort");
const isort = document.querySelector(".ISort");
const buttonContainer = document.querySelector(".button-container");
function disableButton(val) {
  buttonContainer.childNodes.forEach((e) => {
    e.disabled = val;
  });
}

const createBlock = (h) => {
  const block = document.createElement("div");
  block.classList.add("block");
  const head = document.createElement("p");
  head.textContent = `${h}`;
  head.classList.add("label");
  const body = document.createElement("div");
  body.classList.add("body");
  body.style.height = `${h * 3}px`;
  block.appendChild(head);
  block.appendChild(body);
  p.appendChild(block);
};
const randomize = () => {
  disableButton(false);
  arr = [];
  for (let i = 0; i < 20; i++) {
    let num = Math.floor(Math.random() * 100 + 1);
    arr.push(num);
  }
  arr.forEach((e) => {
    createBlock(e);
  });
};

const createBlockList = () => {
  p.innerHTML = "";
  randomize();
};
createBlockList();

function swap(a, b) {
  let elem1 = p.children[a].cloneNode(true);
  let elem2 = p.children[b].cloneNode(true);
  p.replaceChild(elem1, p.children[b]);
  p.replaceChild(elem2, p.children[a]);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 300);
  });
}

async function BubbleSort() {
  disableButton(true);
  rand.disabled = true;
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
        await swap(j, j + 1);
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
  rand.disabled = false;
}

async function SelectionSort() {
  disableButton(true);
  rand.disabled = true;
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
    await swap(i, k);
    blocks = document.querySelectorAll(".block");
    blocks[k].childNodes[1].style.backgroundColor = "white";
    blocks[i].childNodes[1].style.backgroundColor = "aquamarine";
    i++;
  }
  rand.disabled = false;
}

function replaceNode(arr, rNum, rWith, delay) {
  arr[rNum].replaceWith(rWith);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

async function InsertionSort() {
  disableButton(true);
  rand.disabled = true;
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
      await replaceNode(blocks, j + 1, jNode, 300);
      j--;
    }
    await replaceNode(blocks, j + 1, iNode, 300);
    blocks = document.querySelectorAll(".block");
    i++;
  }
  rand.disabled = false;
}

rand.addEventListener("click", createBlockList);
bsort.addEventListener("click", BubbleSort);
ssort.addEventListener("click", SelectionSort);
isort.addEventListener("click", InsertionSort);
