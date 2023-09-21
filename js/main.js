import { showError } from "./alert-error.js";
import * as utils from "./utils.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

utils.focusInput(inputWeight, inputHeight);

form.onsubmit = (event) => {
  event.preventDefault();
  const weight = inputWeight.value;
  const height = inputHeight.value;
  const validTypeError = utils.verifyType(weight) || utils.verifyType(height);
  const resultImc = utils.calculateImc(weight, height);

  if (validTypeError) {
    showError.open();
    return;
  }

  showError.close();

  utils.showResult(resultImc);
};
