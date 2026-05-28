const numlabel = document.getElementById("num");
const generate = document.getElementById("submit");
const max = document.getElementById("max");
const min = document.getElementById("min");

let num = 0;

generate.onclick = function () {
  let maxValue = Number(max.value);
  let minValue = Number(min.value);

  num = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

  numlabel.textContent = num;
};
