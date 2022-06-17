import * as variable from "./modules/variables.js";

let counter = 1;
let size = variable.slider.childNodes[counter].clientWidth;

variable.slider.style.transform = `translateX(${-size * counter}px)`;

// import { renderRadioMarkUp } from "./modules/radioRender.js";
// import {
//   moveSliderOnRadioBtnClick,
//   getDefaultButton as activeButton,
//   moveImgsLeft,
//   moveImgsRight,
// } from "./modules/radioFunctionality.js";

// window.addEventListener("resize", () => {
//   window.location.reload();
// });

// let size = variable.img.clientWidth;

// renderRadioMarkUp();

// activeButton();

// moveSliderOnRadioBtnClick(size);

// variable.rightButton.addEventListener("click", moveImgsRight);

// variable.leftButton.addEventListener("click", moveImgsLeft);

const firstClone = variable.slider.firstElementChild.cloneNode(true);
const lastClone = variable.slider.lastElementChild.cloneNode(true);

firstClone.id = "firstClone";
lastClone.id = "lastClone";

variable.slider.append(firstClone);
variable.slider.prepend(lastClone);

console.log(firstClone);

variable.rightButton.addEventListener("click", () => {
  counter++;

  variable.slider.style.transition = "transform 0.8s ease-in-out";
  variable.slider.style.transform = `translateX(${-size * counter}px)`;
});
variable.leftButton.addEventListener("click", () => {
  counter--;

  variable.slider.style.transition = "transform 0.8s ease-in-out";
  variable.slider.style.transform = `translateX(${-size * counter}px)`;
});
