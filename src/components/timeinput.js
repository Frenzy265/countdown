import { createElement } from "../utils/element";

export const createTimeInput = () => {
  const inputfield = createElement("input", {
    className: "time-input",
    type: "number",
  });
  return inputfield;
};
