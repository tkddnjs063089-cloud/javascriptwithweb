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

const firstani = document.querySelector("#firstani");

const keyframes = [
  { opacity: 0, transform: "translateY(30px)" },
  { opacity: 1, tranceform: "translateY(0px)" },
];
const option = { buration: 400, fill: "forwards" };

const ob = new IntersectionObserver();
// const keyframes = [
//   { opacity: 0, transform: "translateY(30px)" },
//   { opacity: 1, transform: "translateY(0px)" },
// ];
// const option = { duration: 400, fill: "forwards" };

// const ob = new IntersectionObserver((targets, me) => {
//   targets.forEach((v) => {
//     if (v.isIntersecting) {
//       v.target.animate(keyframes, option);
//       me.unobserve(v.target);
//     }
//   });
// });
// ob.observe(firstani);
