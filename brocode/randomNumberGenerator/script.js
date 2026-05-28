const numlabel = document.getElementById("num");
const generate = document.getElementById("btn1");
let msg = document.getElementById("msg");

let num = 0;
generate.onclick = function () {
  num = Math.floor(Math.random() * 6 + 1);
  numlabel.textContent = num;
  msg.textContent = "Die is rolled";
};
