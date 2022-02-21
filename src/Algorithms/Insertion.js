import { Wait, disable, enable, start, stop } from "../components/OtherFunc";
export default async function Insertion() {
  disable();
  start();
  const ele = document.querySelectorAll(".flex-item");
  for (let i = 1; i < ele.length; i++) {
    let j = i - 1;
    let key = ele[i].style.height;
    ele[i].style.background = "blue";
    // await Wait(100 - document.getElementById("sort_speed").value);
    while (j >= 0 && parseInt(ele[j].style.height) > parseInt(key)) {
      ele[j].style.background = "blue";
      ele[j + 1].style.height = ele[j].style.height;
      j = j - 1;
      await Wait(100 - document.getElementById("sort_speed").value);
      for (let k = i; k >= 0; k--) {
        ele[k].style.background = "green";
      }
    }
    ele[j + 1].style.height = key;
    ele[j + 1].style.backgroundColor = "green";
  }
  enable();
  stop();
}
