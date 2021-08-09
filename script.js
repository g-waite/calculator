const numBtn = document.querySelectorAll(".num");
const display = document.querySelector(".calculator-screen");

let handleAppendNumber = (item) => {
  if (display.value === "0") resetDisplay();
  if (display.value.length < 9) display.value += item.value;
  console.log(display.value);
};

numBtn.forEach((item) =>
  item.addEventListener("click", () => {
    handleAppendNumber(item);
  })
);

let resetDisplay = () => {
  display.value = "";
};
