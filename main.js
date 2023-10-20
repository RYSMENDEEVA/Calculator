let display = document.querySelector(".calculator__display");

let buttons = document.querySelector(".calculator__buttons");

buttons.addEventListener("click", (e) => {
  if (!e.target.classList.contains("btn")) return;

  switch (e.target.innerText) {
    case "AC":
      display.innerText = "0";
      break;
    case "=":
      try {
        display.innerText = eval(display.innerText);
      } catch (e) {
        display.innerText = "Error!";
      }
      break;
    case "+/-":
      display.innerText = "-";
      break;
    case "%":
      let passedText = display.innerText + "/100";
      display.innerText = eval(passedText);
      break;

    default:
      if (display.innerText === "0" && e.target.innerText !== ".") {
        display.innerText = e.target.innerText;
      } else {
        display.innerText += e.target.innerText;
      }
  }
});
