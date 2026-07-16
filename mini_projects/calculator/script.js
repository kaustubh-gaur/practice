const numberButtons = document.querySelectorAll(".number");

const display = document.getElementById("display");

const clear = document.getElementById("clear");

const operatorButtons = document.querySelectorAll(".operator");

//number display
attachListeners(numberButtons);

//operator display
attachListeners(operatorButtons);

//clear button

clear.addEventListener("click", () => {
  display.textContent = "0";
});

// takes list - iterate - check for click - add to display

function attachListeners(list) {
  list.forEach((button) => {
    button.addEventListener("click", () => {
      if (display.textContent === "0") {
        display.textContent = "";
      }
      display.textContent += button.textContent;
    });
  });
}
