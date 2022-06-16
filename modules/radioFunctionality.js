import * as variable from "./variables.js";

let counter = 0;
let size = variable.img.clientWidth;
const timer = 5000;

export function checkRadioFocusPosition(counter) {
  const btn = variable.radioWrapper.childNodes;
  btn.forEach((btn) => btn.classList.remove("checked"));
  btn[counter].classList.add("checked");
}

function resetCounter(radioBtnData) {
  counter = radioBtnData;
}

export function moveSliderOnRadioBtnClick(size) {
  variable.radioWrapper.childNodes.forEach((btn) =>
    btn.addEventListener("click", function () {
      variable.slider.style.transition = "transform 1s ease-in-out";
      variable.slider.style.transform =
        "translateX(" + -size * this.dataset.id + "px)";

      checkRadioFocusPosition(btn.dataset.id);

      resetCounter(btn.dataset.id);

      clearInterval(timedSliding);

      timedSliding = setInterval(moveImgsRight, timer);
    })
  );
}

export function getDefaultButton() {
  variable.radioWrapper.children[counter].classList.add("checked");
}

export function moveImgsRight() {
  variable.slider.style.transition = "transform 0.8s ease-in-out";

  if (counter > variable.imgsList.length - 2) {
    counter = -1;
    variable.slider.style.transform = "translateX(" + -size * counter + "px)";
  }
  counter++;
  variable.slider.style.transform = "translateX(" + -size * counter + "px)";
  checkRadioFocusPosition(counter);
  clearInterval(timedSliding);

  timedSliding = setInterval(moveImgsRight, timer);
}

export function moveImgsLeft() {
  if (counter <= 0) {
    counter = variable.imgsList.length - counter;
    variable.slider.style.transform = "translateX(" + -size * counter + "px)";
  }

  variable.slider.style.transition = "transform 1s ease-in-out";
  counter--;
  variable.slider.style.transform = "translateX(" + -size * counter + "px)";

  checkRadioFocusPosition(counter);
  clearInterval(timedSliding);

  timedSliding = setInterval(moveImgsRight, timer);
}

let timedSliding = setInterval(moveImgsRight, timer);
