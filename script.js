const leftButton = document.querySelector(".btn-left");
const rightButton = document.querySelector(".btn-right");
const container = document.querySelector(".container");
const slider = document.querySelector(".slider");
const imgsList = document.querySelectorAll("img");
const img = document.querySelector("img");
const radioWrapper = document.querySelector(".radio-wrapper");
let counter = 0;

let size = imgsList[0].clientWidth;

rightButton.addEventListener("click", () => {
  slider.style.transition = "transform 1s ease-in-out";

  if (counter > imgsList.length - 2) {
    counter = -1;
    slider.style.transform = "translateX(" + -size * counter + "px)";
  }
  counter++;
  slider.style.transform = "translateX(" + -size * counter + "px)";
});

leftButton.addEventListener("click", () => {
  slider.style.transition = "transform 1s ease-in-out";

  if (counter <= 0) {
    counter = imgsList.length - counter;
    slider.style.transform = "translateX(" + -size * counter + "px)";
  }
  counter--;
  slider.style.transform = "translateX(" + -size * counter + "px)";
});

function renderRadioMarkUp() {
  imgsList.forEach(createRadioMarkUp);
}

function createRadioMarkUp() {
  const radioBtn = document.createElement("input");
  radioBtn.type = "radio";
  radioBtn.dataset.id = counter++;
  radioBtn.name = "img";
  return radioWrapper.append(radioBtn);
}

renderRadioMarkUp();

// setInterval(() => {
//   slider.style.transition = "transform 0.8s ease-in-out";

//   if (counter > imgsList.length - 2) {
//     counter = -1;
//     slider.style.transform = "translateX(" + -size * counter + "px)";
//   }
//   counter++;
//   slider.style.transform = "translateX(" + -size * counter + "px)";
// }, 3000);
