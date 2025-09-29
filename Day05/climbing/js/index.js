const burger = document.querySelector("#burger");
const hiddenbox = document.querySelector("#hiddenbox");
const x = document.querySelector("#x");
const loading = document.querySelector("#loading");
const loadingbg = document.querySelector("#loadingbg");
const hero = document.querySelector("#hero");
const body = document.querySelector("#body");

import { keyframes, heroKeyframes, heroOption, option } from "./hero.js";

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

import { scsectionH6, ob, scsectionP } from "./scsection.js";

ob.observe(scsectionH6);
ob.observe(scsectionP);

// thsection

const wrapper = document.querySelector("#thsectionLeft img");
const smallwrap = document.querySelectorAll(".thsection__rightimg img");

smallwrap.forEach((thumbImage) => {
  thumbImage.addEventListener("mouseover", (event) => {
    wrapper.src = event.target.src;
    wrapper.animate({ opacity: [0, 1] }, 500);
  });
});
