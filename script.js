const numBtn = document.querySelectorAll(".num");
const opBtn = document.querySelectorAll(".operator");
const display = document.querySelector(".calculator-screen");

let firstOperand = "";
let secondOperand = "";
let shouldResetScreen = "";
let currentOperation = null;
//let shouldResetDisplay = false;

//Removes zero and appends numeric user input on display
let handleAppendNumber = (item) => {
  if (display.value === "0") resetDisplay();
  if (display.value.length < 9) display.value += item.value;
};

let handleOperator = (item) => {
  currentOperation = item.value;
  firstOperand = display.value;
  //updateOperatorBtnStyle(currentOperation);
  resetDisplay();
};

//when a numeric button is pressed, return button info
numBtn.forEach((item) =>
  item.addEventListener("click", () => {
    handleAppendNumber(item);
  })
);

//when an operator button is pressed, return button info
opBtn.forEach((item) =>
  item.addEventListener("click", () => {
    handleOperator(item);
  })
);

//Removes any displayed values.
let resetDisplay = () => {
  display.value = "";
};
