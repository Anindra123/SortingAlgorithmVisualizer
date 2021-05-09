import { bubbleSort } from "./bubbleSort.js";
import { mergeSort } from "./mergeSort.js";
import { quickSort } from "./quickSort.js";

export let heightArray = [];

export const bar_container = document.querySelector(".bar-container");
export const child_node_list = bar_container.childNodes;
const App = () => {
  let numOfBars = 50;
  const slider = document.getElementById("myRange");
  const randomize_btn = document.querySelector(".randomize");
  const algo_run_btn = document.querySelector(".run-btn");
  const algo_select = document.querySelector(".algorithms-select");
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
  const randomize = () => {
    heightArray = [];
    for (let i = 0; i < numOfBars; i++) {
      heightArray.push(Math.floor(Math.random() * 450));
    }
    heightArray.forEach((h) => {
      createBar(h);
    });
  };
  const createBarList = () => {
    bar_container.innerHTML = "";
    randomize();
  };

  slider.value = numOfBars;
  randomize();
  slider.addEventListener("input", (e) => {
    setBars(e.target.value);
    createBarList();
  });
  const runBubbleSort = () => {
    algo_run_btn.style.display = "block";
    algo_run_btn.innerHTML = "Run bubblesort!";

    algo_run_btn.removeEventListener("click", mergeSort);
    algo_run_btn.removeEventListener("click", quickSort);
    algo_run_btn.addEventListener("click", bubbleSort);
  };
  const runMergeSort = () => {
    algo_run_btn.style.display = "block";
    algo_run_btn.innerHTML = "Run mergesort!";
    algo_run_btn.removeEventListener("click", bubbleSort);
    algo_run_btn.removeEventListener("click", quickSort);
    algo_run_btn.addEventListener("click", mergeSort);
  };
  const runQuickSort = () => {
    algo_run_btn.style.display = "block";
    algo_run_btn.innerHTML = "Run quicksort!";
    algo_run_btn.removeEventListener("click", mergeSort);
    algo_run_btn.removeEventListener("click", bubbleSort);
    algo_run_btn.addEventListener("click", quickSort);
  };

  randomize_btn.addEventListener("click", createBarList);
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
