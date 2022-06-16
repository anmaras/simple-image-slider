const leftButton = document.querySelector(".btn-left");
const rightButton = document.querySelector(".btn-right");
const container = document.querySelector(".container");
const slider = document.querySelector(".slider");
const imgsList = document.querySelectorAll("img");
const img = document.querySelector("img");
const radioWrapper = document.querySelector(".radio-wrapper");
let counter = 0;
let radioId = 0;
let size = imgsList[0].clientWidth;

function createRadioMarkUp() {
  const radioBtn = document.createElement("input");
  radioBtn.type = "radio";
  radioBtn.dataset.id = radioId++;
  radioBtn.name = "img button";
  return radioWrapper.append(radioBtn);
}

function renderRadioMarkUp() {
  imgsList.forEach(createRadioMarkUp);
}

renderRadioMarkUp();

radioWrapper.childNodes.forEach((btn) =>
  btn.addEventListener("click", function () {
    slider.style.transition = "transform 1s ease-in-out";

    slider.style.transform = "translateX(" + -size * this.dataset.id + "px)";
  })
);

rightButton.addEventListener("click", () => {
  if (counter > imgsList.length - 2) {
    counter = -1;
    slider.style.transform = "translateX(" + -size * counter + "px)";
  }
  slider.style.transition = "transform 1s ease-in-out";
  counter++;
  slider.style.transform = "translateX(" + -size * counter + "px)";
  showRadioActive(counter);
});

leftButton.addEventListener("click", () => {
  slider.style.transition = "transform 1s ease-in-out";

  if (counter <= 0) {
    counter = imgsList.length - counter;
    slider.style.transform = "translateX(" + -size * counter + "px)";
  }
  counter--;
  slider.style.transform = "translateX(" + -size * counter + "px)";
  showRadioActive(counter);
});

function showRadioActive(counter) {
  const btn = radioWrapper.childNodes;
  const btnNext = btn[counter].nextSibling ?? btn[0];
  const btnPrevious = btn[counter].previousSibling ?? btn[imgsList.length - 1];
  const checkIfPreviousIsActive = btnPrevious.classList.contains("checked");
  const checkIfNextIsActive = btnNext.classList.contains("checked");

  const array = [...btn];

  // if (checkIfPreviousIsActive || checkIfNextIsActive) {
  //   btnPrevious.classList.remove("checked");
  //   btnNext.classList.remove("checked");
  // }

  btn.forEach((btn) => btn.classList.remove("checked"));

  btn[counter].classList.add("checked");
}

window.addEventListener("load", () => {
  radioWrapper.children[counter].classList.add("checked");
});

radioWrapper.childNodes.forEach((node) =>
  node.addEventListener("click", () => {
    showRadioActive(node.dataset.id);

    // clearInterval(timedSliding);
  })
);

// const timedSliding = setInterval(() => {
//   slider.style.transition = "transform 0.8s ease-in-out";

//   if (counter > imgsList.length - 2) {
//     counter = -1;
//     slider.style.transform = "translateX(" + -size * counter + "px)";
//   }
//   counter++;
//   slider.style.transform = "translateX(" + -size * counter + "px)";
//   showRadioActive(counter);
// }, 3000);
