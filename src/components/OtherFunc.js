export default function swap(i1, i2) {
  let temp = i1.style.height;
  i1.style.height = i2.style.height;
  i2.style.height = temp;
}
export function Wait(milisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
}
export function disable() {
  document.querySelector("#new_arr").disabled = true;
  document.querySelector(".sorting_btn.bs").disabled = true;
  document.querySelector(".sorting_btn.is").disabled = true;
  document.querySelector(".sorting_btn.ms").disabled = true;
  document.querySelector(".sorting_btn.qs").disabled = true;
  document.querySelector(".sorting_btn.ss").disabled = true;
  document.querySelector("#arr_siz").disabled = true;
}
export function enable() {
  document.querySelector("#new_arr").disabled = false;
  document.querySelector(".sorting_btn.bs").disabled = false;
  document.querySelector(".sorting_btn.is").disabled = false;
  document.querySelector(".sorting_btn.ms").disabled = false;
  document.querySelector(".sorting_btn.qs").disabled = false;
  document.querySelector(".sorting_btn.ss").disabled = false;
  document.querySelector("#arr_siz").disabled = false;
}

let min = 0;
let sec = 0;
let count = 0;
let timer = false;

function stopwatch() {
  if (timer === true) {
    count = count + 1;
    if (count === 100) {
      sec = sec + 1;
      count = 0;
    }
    if (sec === 60) {
      min = min + 1;
      sec = 0;
    }
    let minString = min;
    let secString = sec;
    let countString = count;
    if (min < 10) {
      minString = "0" + minString;
    }
    if (sec < 10) {
      secString = "0" + secString;
    }
    if (count < 10) {
      countString = "0" + countString;
    }
    document.getElementById("min").innerHTML = minString;
    document.getElementById("sec").innerHTML = secString;
    document.getElementById("count").innerHTML = countString;
    setTimeout(stopwatch, 9);
  }
}

export function start() {
  timer = true;
  stopwatch();
}
export function stop() {
  timer = false;
}
export function reset() {
  timer = false;
  min = 0;
  sec = 0;
  count = 0;
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
}
