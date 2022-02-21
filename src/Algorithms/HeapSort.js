import React from "react";
import swap, {
  disable,
  enable,
  start,
  stop,
  Wait,
} from "../components/OtherFunc";

async function heapify(ele, n, i) {
  let largest = i;
  let l = 2 * i + 1;
  let r = 2 * i + 2;
  //   ele[l].style.backgroundColor = "red";
  //   ele[largest].style.backgroundColor = "red";
  if (
    l < n &&
    parseInt(ele[l].style.height) > parseInt(ele[largest].style.height)
  ) {
    largest = l;
    console.log(l);
    // await Wait(100 - document.getElementById("sort_speed").value);
  }
  if (
    r < n &&
    parseInt(ele[r].style.height) > parseInt(ele[largest].style.height)
  ) {
    largest = r;
    // await Wait(100 - document.getElementById("sort_speed").value);
  }
  if (largest != i) {
    ele[i].style.backgroundColor = "yellow";
    ele[largest].style.backgroundColor = "orange";
    swap(ele[i], ele[largest]);
    await Wait(100 - document.getElementById("sort_speed").value);
    await heapify(ele, n, largest);
  }
}
async function HeapSort(ele, n) {
  //   const ele = document.querySelectorAll(".flex-items");
  for (let i = n / 2 - 1; i >= 0; i--) {
    await heapify(ele, n, i);
    ele[i].style.backgroundColor = "red";
  }

  for (let j = n - 1; j >= 0; j--) {
    swap(ele[0], ele[j]);
    await heapify(ele, j, 0);
    ele[j].style.backgroundColor = "green";
  }
}

export default async function Heap() {
  const ele = document.querySelectorAll(".flex-item");
  const n = document.querySelector("#arr_siz").value;
  //   console.log(ele + " " + n);
  disable();
  start();
  await HeapSort(ele, ele.length);
  stop();
  enable();
}
