import { showError } from "./alert-error.js";
import { modal } from "./modal.js";

export function verifyType(value) {
  return isNaN(value) || value == "";
}

export function calculateImc(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(0);
}

export function verifyHealth(resultImc) {
  if (resultImc >= 18 && resultImc <= 25) {
    const result = "saudável";
    return result;
  } else {
    const result = "fora da faixa";
    return result;
  }
}

export function showResult(resultImc) {
  const resultHealth = verifyHealth(resultImc);

  const resultMessage = `Seu IMC é de ${resultImc} e você está ${resultHealth}`;
  modal.message.innerHTML = resultMessage;

  modal.open();
}

export function focusInput(inputWeight, inputHeight) {
  inputWeight.oninput = () => showError.close();
  inputHeight.oninput = () => showError.close();
}
