import "./style.css";
import { createTimeInput } from "./components/timeinput";
import { createButtonElement } from "./components/button";

// import imageName from "./...";

function component() {
  const element = document.createElement("div");

  //   // Lodash, now imported by this script
  //   element.innerText = "Hello webpack";
  //   element.classList.add("hello");
  element.append(createTimeInput());
  element.append(createButtonElement());

  // Add the image to our existing div.
  //    const myIcon = new Image();
  //    myIcon.src = Icon;

  //    element.appendChild(myIcon);

  return element;
}

document.body.append(component());
