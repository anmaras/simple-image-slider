const leftButton = document.querySelector(".btn-left");
const rightButton = document.querySelector(".btn-right");
const container = document.querySelector(".container");
const slider = document.querySelector(".slider");
const imgsList = document.querySelectorAll("img");
let counter = 0;

let size = imgsList[0].clientWidth;

const newSize = setTimeout(() => {
  return imgsList[0].clientWidth;
}, 0);

rightButton.addEventListener("click", () => {
  slider.style.transition = "transform 0.8s ease-in-out";

  if (counter > imgsList.length - 2) {
    counter = -1;
    slider.style.transform = "translateX(" + -size * counter + "px)";
  }
  counter++;
  slider.style.transform = "translateX(" + -size * counter + "px)";
});

leftButton.addEventListener("click", () => {
  slider.style.transition = "transform 0.8s ease-in-out";

  if (counter <= 0) {
    counter = imgsList.length - counter;
    slider.style.transform = "translateX(" + -size * counter + "px)";
  }
  counter--;
  slider.style.transform = "translateX(" + -size * counter + "px)";
});

console.log(size);
