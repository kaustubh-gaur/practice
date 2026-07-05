const countLabel = document.getElementById("count");
const dec = document.getElementById("btn1");
const res = document.getElementById("btn2");
const inc = document.getElementById("btn3");
let count = 0;
dec.onclick = function () {
  count--;
  countLabel.textContent = count;
};
res.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};
inc.onclick = function () {
  count++;
  countLabel.textContent = count;
};
