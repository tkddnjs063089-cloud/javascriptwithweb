// const a = document.querySelector(".box");
// a.innertext = "gd"

const minus = document.querySelector("#minus");
minus.addEventListener("click", () => {
  num.innerText = +num.innerText - 1;
  if (+num.innerText < 5) {
    minus.classList.add("underFive");
  } else {
    minus.classList.remove("underFive");
  }
});
const num = document.querySelector("#num");

const plus = document.querySelector("#plus");
plus.addEventListener("click", () => {
  num.innerText = +num.innerText + 1;
  if (+num.innertext > 5) {
    plus.classList.to("overFive");
  } else {
    plus.classList.remove("overFive");
  }
});
