export const showError = {
  alert: document.querySelector(".alert-error"),

  open() {
    showError.alert.classList.add("open");
  },

  close() {
    showError.alert.classList.remove("open");
  },
};
