import * as variable from "./variables.js";

let radioId = 0;

function createRadioMarkUp() {
  const radioBtn = document.createElement("input");
  radioBtn.type = "radio";
  radioBtn.dataset.id = radioId++;
  radioBtn.name = "img button";
  return variable.radioWrapper.append(radioBtn);
}

export function renderRadioMarkUp() {
  variable.imgsList.forEach(createRadioMarkUp);
}
