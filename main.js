const leftButton = document.querySelector('.btn-left');
const rightButton = document.querySelector('.btn-right');
const slider = document.querySelector('.slider');
const imgsList = document.querySelectorAll('.slider-imgs');
const radioWrapper = document.querySelector('.radio-wrapper');
const spanDate = document.querySelector('.footer-date');
const timing = 0.5;
const transFunc = 'ease-in-out';
const timer = 2000;
let counter = 1;
let radioId = 0;
const date = new Date();

window.addEventListener('load', () => {
  const size = imgsList[0].width;

  function defaultSlidePosition() {
    slider.style.transform = `translateX(${-size * counter}px)`;
  }
  defaultSlidePosition();

  function createImageClones() {
    const firstClone = slider.firstElementChild.cloneNode(true);
    const lastClone = slider.lastElementChild.cloneNode(true);
    firstClone.id = 'firstClone';
    lastClone.id = 'lastClone';
    slider.append(firstClone);
    slider.prepend(lastClone);
  }
  createImageClones();

  function createRadioMarkUp() {
    const radioBtn = document.createElement('input');
    radioId += 1;
    radioBtn.type = 'radio';
    radioBtn.dataset.id = radioId - 1;
    radioBtn.name = 'img button';
    return radioWrapper.append(radioBtn);
  }

  function resetCounter(radioBtnData) {
    counter = radioBtnData;
  }

  function renderRadioMarkUp() {
    imgsList.forEach(createRadioMarkUp);
  }

  renderRadioMarkUp();

  function getDefaultButton() {
    radioWrapper.children[counter - 1].classList.add('checked');
  }

  getDefaultButton();

  function makeButtonsActiveByClick(buttonId) {
    const btn = radioWrapper.childNodes;
    btn.forEach((radioButton) => radioButton.classList.remove('checked'));
    btn[buttonId].classList.add('checked');
  }

  function showActiveRadioButton() {
    const buttons = document.querySelectorAll('input');
    const image = slider.children[counter];

    if (image.id === 'firstClone') {
      buttons[0].classList.add('checked');
      buttons[imgsList.length - 1].classList.remove('checked');
      if (counter >= imgsList.length - 1) return;
    }

    if (image.id === 'lastClone') {
      buttons[0].classList.remove('checked');
      buttons[imgsList.length - 1].classList.add('checked');
      if (counter <= 0) return;
    }

    buttons.forEach((btn) => btn.classList.remove('checked'));

    buttons[counter - 1].classList.add('checked');
  }

  // eslint-disable-next-line no-use-before-define
  let timedSliding = setInterval(moveSliderRight, timer);

  function moveSliderRight() {
    if (counter >= slider.children.length - 1) return;
    counter += 1;
    slider.style.transition = `${timing}s ${transFunc}`;
    slider.style.transform = `translateX(${-size * counter}px)`;
    showActiveRadioButton();
    clearInterval(timedSliding);
    timedSliding = setInterval(moveSliderRight, timer);
  }

  function moveSliderLeft() {
    if (counter <= 0) return;
    counter -= 1;
    slider.style.transition = `${timing}s ${transFunc}`;
    slider.style.transform = `translateX(${-size * counter}px)`;
    showActiveRadioButton();
    clearInterval(timedSliding);

    timedSliding = setInterval(moveSliderRight, timer);
  }

  radioWrapper.childNodes.forEach((radioButton) => {
    radioButton.addEventListener('click', function moveSlidesOnClick() {
      const customData = Number(this.dataset.id) + 1;
      slider.style.transition = `${timing}s ${transFunc}`;
      slider.style.transform = `translateX(${-size * customData}px)`;

      makeButtonsActiveByClick(this.dataset.id);

      resetCounter(customData);

      clearInterval(timedSliding);

      timedSliding = setInterval(moveSliderRight, timer);
    });
  });

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

  spanDate.textContent = date.getFullYear();

  rightButton.addEventListener('click', moveSliderRight);

  leftButton.addEventListener('click', moveSliderLeft);
});
