import { createElement } from "../utils/element";

export const createTimeInput = () => {
  const inputfield = createElement("input", {
    className: "time_input",
    type: "number",
    placeholder: "Enter timecode",
  });
  return inputfield;
};
