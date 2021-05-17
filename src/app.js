import { bubbleSort } from "./Algorithms/bubbleSort.js";
import { heapSort } from "./Algorithms/heapSort.js";
import { insertionSort } from "./Algorithms/insertionSort.js";
import { mergeSort } from "./Algorithms/mergeSort.js";
import { quickSort } from "./Algorithms/quickSort.js";
import { selectionSort } from "./Algorithms/selectionSort.js";

export let heightArray = [];

export const bar_container = document.querySelector(".bar-container");
export const child_node_list = bar_container.childNodes;
const slider = document.getElementById("myRange");
const randomize_btn = document.querySelector(".randomize");
const algo_select = document.querySelector(".algorithms-select");
const run_bubbleSort = document.querySelector(".run-bubblesort");
const run_mergeSort = document.querySelector(".run-mergesort");
const run_quickSort = document.querySelector(".run-quicksort");
const run_heapSort = document.querySelector(".run-heapsort");
const run_insertionSort = document.querySelector(".run-insertionsort");
const run_selectionSort = document.querySelector(".run-selectionsort");
const buttons = document.querySelectorAll("button");

let numOfBars = 60;
export let animationSpeed = numOfBars < 50 ? 100 - numOfBars : 40;
let barwidth = Math.floor(bar_container.clientWidth / numOfBars);
let margin = Math.floor(bar_container.clientWidth / (numOfBars * 10));
export const disableAll = () => {
  buttons.forEach((b) => {
    b.disabled = true;
  });
  slider.disabled = true;
  algo_select.disabled = true;
};
export const enable = () => {
  slider.disabled = false;
  algo_select.disabled = false;
  randomize_btn.disabled = false;
};

const setBars = (size) => {
  numOfBars = size;
};
const createBar = (height) => {
  const bar = document.createElement("div");
  bar.className = "bar";
  bar.style.height = `${height}px`;
  bar.style.width = `${barwidth}px`;
  bar.style.margin = `0px ${margin}px`;
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
const enableButton = () => {
  buttons.forEach((b) => {
    b.disabled = false;
  });
};

const reset = () => {
  generateNewList();
  run_bubbleSort.style.display = "none";
  run_mergeSort.style.display = "none";
  run_quickSort.style.display = "none";
  run_heapSort.style.display = "none";
  run_selectionSort.style.display = "none";
  run_insertionSort.style.display = "none";
};
const runBubbleSort = () => {
  reset();
  enableButton();
  run_bubbleSort.style.display = "block";
  run_bubbleSort.addEventListener("click", bubbleSort);
};
const runMergeSort = () => {
  reset();
  enableButton();
  run_mergeSort.style.display = "block";
  run_mergeSort.addEventListener("click", mergeSort);
};
const runQuickSort = () => {
  reset();
  enableButton();
  run_quickSort.style.display = "block";
  run_quickSort.addEventListener("click", quickSort);
};
const runHeapSort = () => {
  reset();
  enableButton();
  run_heapSort.style.display = "block";
  run_heapSort.addEventListener("click", heapSort);
};
const runInsertionSort = () => {
  reset();
  enableButton();
  run_insertionSort.style.display = "block";
  run_insertionSort.addEventListener("click", insertionSort);
};
const runSelectionSort = () => {
  reset();
  enableButton();
  run_selectionSort.style.display = "block";
  run_selectionSort.addEventListener("click", selectionSort);
};

const App = () => {
  slider.value = numOfBars;
  generateNewList();
  slider.addEventListener("input", (e) => {
    setBars(e.target.value);
    animationSpeed = e.target.value < 50 ? 100 - e.target.value : 30;
    barwidth = Math.floor(bar_container.clientWidth / e.target.value);
    margin = Math.floor(bar_container.clientWidth / (e.target.value * 10));
    enableButton();
    generateNewList();
  });
  randomize_btn.addEventListener("click", (e) => {
    e.preventDefault();
    enableButton();
    generateNewList();
  });

  algo_select.addEventListener("change", (e) => {
    e.preventDefault();
    switch (e.target.value) {
      case "bubbleSort":
        runBubbleSort();
        break;
      case "mergeSort":
        runMergeSort();
        break;
      case "quickSort":
        runQuickSort();
        break;
      case "heapSort":
        runHeapSort();
        break;
      case "insertionSort":
        runInsertionSort();
        break;
      case "selectionSort":
        runSelectionSort();
        break;
    }
  });
};

App();
