const logo = document.querySelector("#logo");
const burger = document.querySelector("#burger");
const sidemenu = document.querySelector("#sidemenu");
const x = document.querySelector("#x");

burger.addEventListener("click", () => {
  sidemenu.classList.add("pikabu");
});
x.addEventListener("click", () => {
  sidemenu.classList.remove("pikabu");
});

const lt = document.querySelector("#lt");
const slt = document.querySelector("#slt");

const keyframes = [
  { opasity: 0, transform: "translateY(30px)" },
  { opasity: 1, transform: "translateY(0px)" },
];
const option = { duraction: 400, fill: forwards };
const ob = new IntersectionObserver((targer) => {});
