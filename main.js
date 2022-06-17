export const leftButton = document.querySelector('.btn-left');
export const rightButton = document.querySelector('.btn-right');
export const arrowBtn = document.querySelectorAll('div');
export const container = document.querySelector('.container');
export const slider = document.querySelector('.slider');
export const imgsList = document.querySelectorAll('img');
export const img = document.querySelector('img');
export const radioWrapper = document.querySelector('.radio-wrapper');
const timing = 0.5;
const transFunc = 'ease-in-out';
const firstClone = slider.firstElementChild.cloneNode(true);
const lastClone = slider.lastElementChild.cloneNode(true);
let counter = 1;
let radioId = 0;
const size = slider.childNodes[counter].clientWidth;

firstClone.id = 'firstClone';
lastClone.id = 'lastClone';

slider.append(firstClone);
slider.prepend(lastClone);
slider.style.transform = `translateX(${-size * counter}px)`;

function createRadioMarkUp() {
  const radioBtn = document.createElement('input');
  radioBtn.type = 'radio';
  radioBtn.dataset.id = radioId++;
  radioBtn.name = 'img button';
  return radioWrapper.append(radioBtn);
}

function renderRadioMarkUp() {
  imgsList.forEach(createRadioMarkUp);
}

renderRadioMarkUp();

slider.addEventListener('transitionend', () => {
  const image = slider.children[counter];

  if (image.id === 'firstClone') {
    slider.style.transition = 'none';
    counter = 1;
    slider.style.transform = `translateX(${-size * counter}px)`;
  }
  if (image.id === 'lastClone') {
    slider.style.transition = 'none';
    counter = slider.children.length - 2;
    slider.style.transform = `translateX(${-size * counter}px)`;
  }
});

rightButton.addEventListener('click', () => {
  if (counter >= slider.children.length - 1) return;

  counter += 1;
  slider.style.transition = `${timing}s ${transFunc}`;
  slider.style.transform = `translateX(${-size * counter}px)`;
});
leftButton.addEventListener('click', () => {
  if (counter <= 0) return;

  counter -= 1;
  slider.style.transition = `${timing}s ${transFunc}`;
  slider.style.transform = `translateX(${-size * counter}px)`;
});
