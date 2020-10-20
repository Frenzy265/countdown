import { createElement } from "../utils/element";
// import { createTimeInput } from "./timeinput";

export const createButtonElement = () => {
  const timeButton = createElement("button", {
    className: "time-btn",
    innerText: "Start Coundown",
    onclick: () => {
      alert("Der Button funktioniert");
      let counter = document.querySelector(".time_input").value;
      startCountdown(counter, outputField);
    },
  });

  const outputField = createElement("div", {});

  const container = createElement("div", {
    children: [timeButton, outputField],
  });

  return container;
};

export const startCountdown = (counter, outputField) => {
  const interval = setInterval(() => {
    console.log(counter);
    counter--;
    outputField.innerText = counter;
    if (counter === 0) {
      clearInterval(interval);
      console.log("Ding");
    }
  }, 1000);
};
