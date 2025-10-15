const pl = document.createElement("button");
pl.innerText = "-";
pl.addEventListener("click", () => {
  zero.innerText = +zero.innerText >= 1 ? +zero.innerText - 1 : 0;
  zero.style.color = +zero.innerText < 10 ? "black" : "blue";
});
document.body.appendChild(pl);

const zero = document.createElement("span");
zero.innerText = "0";

document.body.appendChild(zero);

const mi = document.createElement("button");
mi.innerText = "+";
mi.addEventListener("click", () => {
  zero.innerText = +zero.innerText + 1;
  zero.style.color = +zero.innerText > 10 ? "blue" : "black";
});
document.body.appendChild(mi);
