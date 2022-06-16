import * as variable from "./modules/variables.js";
import { renderRadioMarkUp } from "./modules/radioRender.js";
import {
  moveSliderOnRadioBtnClick,
  getDefaultButton as activeButton,
  moveImgsLeft,
  moveImgsRight,
} from "./modules/radioFunctionality.js";

window.addEventListener("resize", () => {
  window.location.reload();
});

let size = variable.img.clientWidth;

renderRadioMarkUp();

activeButton();

moveSliderOnRadioBtnClick(size);

variable.rightButton.addEventListener("click", moveImgsRight);

variable.leftButton.addEventListener("click", moveImgsLeft);
