import { disableButton } from "./app.js";
export let arr = [];
const p = document.querySelector(".box");
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

export const createBlockList = () => {
  p.innerHTML = "";
  randomize();
};
