let arr = [];
const p = document.querySelector(".box");
const rand = document.querySelector(".randomize");
const bsort = document.querySelector(".bSort");

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
  bsort.disabled = false;
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
  bsort.disabled = true;
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
}

rand.addEventListener("click", createBlockList);
bsort.addEventListener("click", BubbleSort);
