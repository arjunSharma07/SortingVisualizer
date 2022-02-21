import swap, {
  Wait,
  disable,
  enable,
  start,
  stop,
} from "../components/OtherFunc";
export default async function Selection() {
  disable();
  start();
  const ele = document.querySelectorAll(".flex-item");
  for (let i = 0; i < ele.length; i++) {
    let min = i;
    ele[i].style.background = "blue";
    for (let j = i + 1; j < ele.length; j++) {
      ele[j].style.background = "red";
      await Wait(100 - document.getElementById("sort_speed").value);
      if (parseInt(ele[j].style.height) < parseInt(ele[min].style.height)) {
        if (min !== i) {
          ele[min].style.background = "cyan";
        }
        min = j;
        // await Wait(100 - document.getElementById("sort_speed").value);
      } else {
        ele[j].style.background = "cyan";
      }
    }
    // await Wait(100 - document.getElementById("sort_speed").value);
    swap(ele[min], ele[i]);
    ele[min].style.background = "cyan";
    ele[i].style.background = "green";
  }
  //   ele[ele.length - 1].style.background = "green";
  stop();
  enable();
}
