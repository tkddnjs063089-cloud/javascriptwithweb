const checkbox = document.querySelector("#checkbox");
const confirmBtn = document.querySelector("#confirm");
confirmBtn.disabled = true;

checkbox.addEventListener("click", () => {
  confirmBtn.disabled = !confirmBtn.disabled;
});
