import "../Styles/Body.css";
export default function Body(noofbars =50) {
  const min = 5;
  const max = 350;
  const bars = document.querySelector("#bars");
  for (let i = 0; i < noofbars; i++) {
    const rand = min + Math.random() * (max - min);
    const bar = document.createElement("div");
    bar.classList.add("flex-item");
    bar.classList.add(`bar-no${i}`);
    bar.style.height = `${parseInt(rand)}px`;
    bars.appendChild(bar);
  }
}
export function delbar() {
  const del = document.getElementById("bars");
  del.innerHTML = "";
}
