const btn = document.querySelector("button");
const p = document.querySelector("p");
const button = document.querySelector("#changeColor");
const container = document.querySelector("#container");

btn.addEventListener("click", function (e) {
  e.stopPropagation();
});

p.addEventListener("click", function (e) {
  e.stopPropagation();
});

button.addEventListener("click", function (e) {
  container.style.backgroundColor = makeRandColor();
  e.stopPropagation();
});
container.addEventListener("click", function () {
  container.classList.toggle("hide");
});

const makeRandColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};
