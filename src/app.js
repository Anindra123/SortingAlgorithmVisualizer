import * as algos from "./Algorithms/algorithms.js";
import * as block from "./blocks.js";

export const rand = document.querySelector(".randomize");
const bsort = document.querySelector(".bSort");
const ssort = document.querySelector(".SSort");
const isort = document.querySelector(".ISort");
const qsort = document.querySelector(".QSort");
const buttonContainer = document.querySelector(".button-container");

export function disableButton(val) {
  buttonContainer.childNodes.forEach((e) => {
    e.disabled = val;
  });
}

block.createBlockList();

rand.addEventListener("click", block.createBlockList);
bsort.addEventListener("click", algos.BubbleSort);
ssort.addEventListener("click", algos.SelectionSort);
isort.addEventListener("click", algos.InsertionSort);
qsort.addEventListener("click", algos.QuickSort);
