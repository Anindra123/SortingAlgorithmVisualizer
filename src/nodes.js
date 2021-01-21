export function swapNodes(list, a, b, delay) {
  let n1 = list[a].cloneNode(true);
  let n2 = list[b].cloneNode(true);
  list[a].replaceWith(n2);
  list[b].replaceWith(n1);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

export function replaceNode(arr, rNum, rWith, delay) {
  arr[rNum].replaceWith(rWith);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}
