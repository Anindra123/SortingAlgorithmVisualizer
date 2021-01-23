import { BubbleSort } from "./Algorithms/BubbleSort.js";
import { SelectionSort } from "./Algorithms/SelectionSort.js";
import { InsertionSort } from "./Algorithms/InsertionSort.js";
import { QuickSort } from "./Algorithms/QuickSort.js";
import { MergeSort } from "./Algorithms/MergeSort.js";
import * as block from "./blocks.js";

export const rand = document.querySelector(".randomize");
const bsort = document.querySelector(".bSort");
const ssort = document.querySelector(".SSort");
const isort = document.querySelector(".ISort");
const qsort = document.querySelector(".QSort");
const msort = document.querySelector(".MSort");
const buttonContainer = document.querySelector(".button-container");

export function disableButton(val) {
  buttonContainer.childNodes.forEach((e) => {
    e.disabled = val;
  });
}

block.createBlockList();

rand.addEventListener("click", block.createBlockList);
bsort.addEventListener("click", BubbleSort);
ssort.addEventListener("click", SelectionSort);
isort.addEventListener("click", InsertionSort);
qsort.addEventListener("click", QuickSort);
msort.addEventListener("click", MergeSort);
