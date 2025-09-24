const title = document.querySelector("#title");
const mainbox = document.querySelector("#mainbox");
const picture = document.createElement("picture");
title.appendChild(picture);
const img = document.createElement("img");
picture.appendChild(img);

const data = ["1.avif", "2.avif", "3.avif", "4.avif"];

picture.style.width = "900px";
picture.style.height = "1200px";
picture.style.display = "flex";
img.src = data[(0, 1, 2, 3)];
