import { disable, enable, Wait, start, stop } from "../components/OtherFunc";

async function merge(ele, low, mid, high) {
  // console.log("In merge()");
  // console.log(`low=${low}, mid=${mid}, high=${high}`);
  const n1 = mid - low + 1;
  const n2 = high - mid;
  console.log(`n1=${n1}, n2=${n2}`);
  let left = new Array(n1);
  let right = new Array(n2);

  for (let i = 0; i < n1; i++) {
    await Wait(100 - document.getElementById("sort_speed").value);
    // console.log("In merge left loop");
    // console.log(ele[low + i].style.height + " at " + (low + i));
    // color
    ele[low + i].style.background = "orange";
    left[i] = ele[low + i].style.height;
  }
  for (let i = 0; i < n2; i++) {
    await Wait(100 - document.getElementById("sort_speed").value);
    // console.log("In merge right loop");
    // console.log(ele[mid + 1 + i].style.height + " at " + (mid + 1 + i));
    // color
    ele[mid + 1 + i].style.background = "yellow";
    right[i] = ele[mid + 1 + i].style.height;
  }
  await Wait(100 - document.getElementById("sort_speed").value);
  let i = 0,
    j = 0,
    k = low;
  while (i < n1 && j < n2) {
    await Wait(100 - document.getElementById("sort_speed").value);
    // console.log("In merge while loop");
    // console.log(parseInt(left[i]), parseInt(right[j]));

    // To add color for which two r being compared for merging

    if (parseInt(left[i]) <= parseInt(right[j])) {
      // color
      if (n1 + n2 === ele.length) {
        ele[k].style.background = "green";
      } else {
        ele[k].style.background = "red";
      }

      ele[k].style.height = left[i];
      i++;
      k++;
    } else {
      // color
      if (n1 + n2 === ele.length) {
        ele[k].style.background = "green";
      } else {
        ele[k].style.background = "red";
      }
      ele[k].style.height = right[j];
      j++;
      k++;
    }
  }
  while (i < n1) {
    await Wait(100 - document.getElementById("sort_speed").value);
    console.log("In while if n1 is left");
    // color
    if (n1 + n2 === ele.length) {
      ele[k].style.background = "green";
    } else {
      ele[k].style.background = "red";
    }
    ele[k].style.height = left[i];
    i++;
    k++;
  }
  while (j < n2) {
    await Wait(100 - document.getElementById("sort_speed").value);
    // console.log("In while if n2 is left");
    // color
    if (n1 + n2 === ele.length) {
      ele[k].style.background = "green";
    } else {
      ele[k].style.background = "red";
    }
    ele[k].style.height = right[j];
    j++;
    k++;
  }
}

async function MergeSort(ele, l, r) {
  if (l >= r) {
    return;
  }
  const m = l + Math.floor((r - l) / 2);
  // console.log(`left=${l} mid=${m} right=${r}`, typeof m);
  await MergeSort(ele, l, m);
  await MergeSort(ele, m + 1, r);
  await merge(ele, l, m, r);
}
export default async function mergeSort() {
  let ele = document.querySelectorAll(".flex-item");
  let l = 0;
  let r = parseInt(ele.length) - 1;
  disable();
  start();
  await MergeSort(ele, l, r);
  stop();
  enable();
}
