import { createElement } from "../utils/element";

export const createButtonElement = () => {
  const timeButton = createElement("button", {
    className: "time-btn",
    innerText: "Start Coundown",
  });

  return timeButton;
};
