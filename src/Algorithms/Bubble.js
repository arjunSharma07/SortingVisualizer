import React from "react";
import swap, {
  Wait,
  disable,
  enable,
  start,
  stop,
} from "../components/OtherFunc";
export default async function Bubble() {
  start();
  disable();
  const ele = document.querySelectorAll(".flex-item");
  for (let i = 0; i < ele.length; i++) {
    for (let j = 0; j < ele.length - i - 1; j++) {
      ele[j].style.backgroundColor = "blue";
      ele[j + 1].style.backgroundColor = "blue";
      if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
        await Wait(100 - document.getElementById("sort_speed").value);
        swap(ele[j], ele[j + 1]);
      }
      ele[j].style.backgroundColor = "cyan";
      ele[j + 1].style.backgroundColor = "cyan";
    }
    ele[ele.length - i - 1].style.backgroundColor = "green";
  }
  ele[0].style.backgroundColor = "green";
  enable();
  stop();
}
