const burger = document.querySelector("#burger");
const hiddenbox = document.querySelector("#hiddenbox");
const x = document.querySelector("#x");
const loading = document.querySelector("#loading");
const loadingbg = document.querySelector("#loadingbg");
const hero = document.querySelector("#hero");
const body = document.querySelector("#body");

const keyframes = [
  { opacity: 0, transform: "translateY(100vh)" },
  { opacity: 0.5, transform: "translateY(0)" },
  { opacity: 0, transform: "translateY(-100vh)" },
];
const heroKeyframes = [{ opacity: 0 }, { opacity: 1 }];

const option = { duration: 1000, fill: "forwards" };
const heroOption = { duration: 1000, fill: "forwards" };

window.addEventListener("load", () => {
  loading.classList.add("hide");
  loadingbg.animate(keyframes, option);
  hero.animate(heroKeyframes, heroOption);
  body.animate(heroKeyframes, heroOption);
});
burger.addEventListener("click", () => {
  hiddenbox.classList.add("pikabu");
  burger.classList.add("hide");
});

x.addEventListener("click", () => {
  hiddenbox.classList.remove("pikabu");
  burger.classList.remove("hide");
});

// scsection

const scsectionH6 = document.querySelector("#scsectionH6");
const scsectionP = document.querySelector("#scsectionP");

const scsectionkeyframes = [
  { filter: "blur(20px)", transform: "translateY(30px)" },
  { filter: "blur(0)", transform: "translateY(0px)" },
];
const scsectionoption = { duration: 1000, fill: "forwards" };

const ob = new IntersectionObserver((targets, me) => {
  targets.forEach((v) => {
    if (v.isIntersecting) {
      v.target.animate(scsectionkeyframes, scsectionoption);
      me.unobserve(v.target);
    }
  });
});
ob.observe(scsectionH6);
ob.observe(scsectionP);

// thsection

const thsectionLeft = document.querySelector("#thsectionLeft");
const thsectionH5 = document.querySelector("#thsectionH5");
const peakers = document.querySelector("#peakers");
const allez = document.querySelector("#allez");
const seoulforest = document.querySelector("#seoulforest");
const theclisadang = document.querySelector("#theclisadang");
const offthewall = document.querySelector("#offthewall");
const climbingpark = document.querySelector("#climbingpark");
const thecliyangzae = document.querySelector("#thecliyangzae");
const catchstion = document.querySelector("#catchstion");
const son = document.querySelector("#son");

const thob = [
  peakers,
  allez,
  seoulforest,
  theclisadang,
  offthewall,
  climbingpark,
  thecliyangzae,
  catchstion,
  son,
];

thob.forEach((v) => ob.observe(v));
ob.observe(thsectionH5);

const img = [];

// const img = [
//   { value: peakers, css: "peakers" },
//   { value: allez, css: "allez" },
//   { value: seoulforest, css: "seoulforest" },
//   { value: theclisadang, css: "theclisadang" },
//   { value: offthewall, css: "offthewall" },
//   { value: climbingpark, css: "climbingpark" },
//   { value: thecliyangzae, css: "thecliyangzae" },
//   { value: catchstion, css: "catchstion" },
//   { value: son, css: "son" },
// ];

// img.forEach(({ value, css }) => {
//   value.addEventListener("mouseover", () => {
//     thsectionLeft.classList.add(css);
//   });
//   value.addEventListener("mouseout", () => {
//     thsectionLeft.classList.remove(css);
//   });
// });
