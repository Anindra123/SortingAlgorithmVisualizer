export function delay(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

export async function swapNodes(list, a, b, time) {
  let n1 = list[a].cloneNode(true);
  let n2 = list[b].cloneNode(true);
  list[a].replaceWith(n2);
  list[b].replaceWith(n1);
  await delay(time);
}

export async function replaceNode(arr, rNum, rWith, time) {
  arr[rNum].replaceWith(rWith);

  await delay(time);
}
