import swap, {
  Wait,
  disable,
  enable,
  start,
  stop,
} from "../components/OtherFunc";

async function partitionLomuto(ele, l, r) {
  let i = l - 1;
  // color pivot element
  ele[r].style.background = "red";
  for (let j = l; j <= r - 1; j++) {
    // color current element
    ele[j].style.background = "yellow";
    // pauseChamp
    await Wait(100 - document.getElementById("sort_speed").value);

    if (parseInt(ele[j].style.height) < parseInt(ele[r].style.height)) {
      i++;
      swap(ele[i], ele[j]);
      // color
      ele[i].style.background = "orange";
      if (i != j) ele[j].style.background = "orange";
      // pauseChamp
      await Wait(100 - document.getElementById("sort_speed").value);
    } else {
      // color if not less than pivot
      ele[j].style.background = "pink";
    }
  }
  i++;
  // pauseChamp
  await Wait(100 - document.getElementById("sort_speed").value);
  swap(ele[i], ele[r]);
  // color
  ele[r].style.background = "pink";
  ele[i].style.background = "green";

  // pauseChamp
  await Wait(100 - document.getElementById("sort_speed").value);

  // color
  for (let k = 0; k < ele.length; k++) {
    if (ele[k].style.background != "green") ele[k].style.background = "cyan";
  }

  return i;
}

async function Quick(ele, l, r) {
  if (l < r) {
    let pivot_index = await partitionLomuto(ele, l, r);
    await Quick(ele, l, pivot_index - 1);
    await Quick(ele, pivot_index + 1, r);
  } else {
    if (l >= 0 && r >= 0 && l < ele.length && r < ele.length) {
      ele[r].style.background = "green";
      ele[l].style.background = "green";
    }
  }
}

export default async function QuickSort() {
  const ele = document.querySelectorAll(".flex-item");
  disable();
  start();
  await Quick(ele, 0, ele.length - 1);
  stop();
  enable();
}
