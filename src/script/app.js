import { bubbleSort } from "./bubbleSort.js";
import { mergeSort } from "./mergeSort.js";
import { quickSort } from "./quickSort.js";

export let heightArray = [];

export const bar_container = document.querySelector(".bar-container");
export const child_node_list = bar_container.childNodes;
const slider = document.getElementById("myRange");
const randomize_btn = document.querySelector(".randomize");
const algo_select = document.querySelector(".algorithms-select");
const run_bubbleSort = document.querySelector(".run-bubblesort");
const run_mergeSort = document.querySelector(".run-mergesort");
const run_quickSort = document.querySelector(".run-quicksort");
let numOfBars = 60;
const setBars = (size) => {
  numOfBars = size;
};
const createBar = (height) => {
  const bar = document.createElement("div");
  bar.className = "bar";
  bar.style.height = `${height}px`;
  bar.style.width = `100%`;
  bar.style.marginLeft = `2px`;
  bar.style.marginRight = `2px`;
  bar_container.appendChild(bar);
};
const createBarList = () => {
  heightArray = [];
  for (let i = 0; i < numOfBars; i++) {
    heightArray.push(Math.floor(Math.random() * 450));
  }
  heightArray.forEach((h) => {
    createBar(h);
  });
};
const generateNewList = () => {
  bar_container.innerHTML = "";
  createBarList();
};

const reset = () => {
  generateNewList();
  run_bubbleSort.style.display = "none";
  run_mergeSort.style.display = "none";
  run_quickSort.style.display = "none";
};
const runBubbleSort = () => {
  reset();
  run_bubbleSort.style.display = "block";
  run_bubbleSort.addEventListener("click", bubbleSort);
};
const runMergeSort = () => {
  reset();
  run_mergeSort.style.display = "block";
  run_mergeSort.addEventListener("click", mergeSort);
};
const runQuickSort = () => {
  reset();
  run_quickSort.style.display = "block";
  run_quickSort.addEventListener("click", quickSort);
};
const App = () => {
  slider.value = numOfBars;
  generateNewList();
  slider.addEventListener("input", (e) => {
    setBars(e.target.value);
    generateNewList();
  });
  randomize_btn.addEventListener("click", generateNewList);

  algo_select.addEventListener("change", (e) => {
    e.preventDefault();
    if (e.target.value === "bubbleSort") {
      runBubbleSort();
    } else if (e.target.value === "mergeSort") {
      runMergeSort();
    } else if (e.target.value === "quickSort") {
      runQuickSort();
    }
  });
};

App();
