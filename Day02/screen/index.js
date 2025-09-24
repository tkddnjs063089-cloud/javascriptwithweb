const burger = document.querySelector("#burger");
const box = document.querySelector("#box");
burger.addEventListener("click", () => {
  box.classList.add("leftdiv");
});
const hidbur = document.querySelector("#hid");
hidbur.addEventListener("click", () => {
  box.classList.remove("leftdiv");
});
