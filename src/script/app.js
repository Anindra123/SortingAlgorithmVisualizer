import { bubbleSort } from "./bubbleSort.js";
import { mergeSort } from "./mergeSort.js";
import { quickSort } from "./quickSort.js";

const App = () => {
  let numOfBars = 50;
  let heightArray = [];
  const slider = document.getElementById("myRange");
  const bar_container = document.querySelector(".bar-container");
  const randomize_btn = document.querySelector(".randomize");
  const algo_run_btn = document.querySelector(".run-btn");
  const algo_select = document.querySelector(".algorithms-select");
  const setBars = (size) => {
    numOfBars = size;
  };
  const setvalue = (height) => {
    const span = document.createElement("span");
    const h = document.createTextNode(height);
    span.appendChild(h);
    return span;
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

  randomize_btn.addEventListener("click", createBarList);
  algo_select.addEventListener("change", (e) => {
    e.preventDefault();
    if (e.target.value === "bubbleSort") {
      bubbleSort();
    } else if (e.target.value === "mergeSort") {
      mergeSort();
    } else if (e.target.value === "quickSort") {
      quickSort();
    }
  });
};

App();
