// const capitalList = document.querySelector("#capitalList");
// const p = document.querySelector("#p");
// const div = document.querySelector("#div");

// const data = [
//   { nation: "Eengland", capital: "london" },
//   { nation: "Japen", capital: "Tokyo" },
//   { nation: "France", capital: "paris" },
//   { nation: "Korea", capital: "Soul" },
//   { nation: "Newzealand", capital: "WllingTone" },
// ];

// data.forEach((v) => {
//   const newLi = document.createElement("li");
//   newLi.innerText = v.capital;
//   newLi.id = v.capital;
//   newLi.addEventListener("click", () => {
//     p.innerText = v.capital;
//     div.innerText = `${v.capital} is thje capital city of ${v.capital}`;
//   });
//   capitalList.appendChild(newLi);
// });

// london.addEventListener("click", () => {
//   p.innerText = "London";
//   div.innerText = "London is the capital city of England.";
//   london.classList.add("background");
//   paris.classList.remove("background");
//   tokyo.classList.remove("background");
// });
// paris.addEventListener("click", () => {
//   p.innerText = "Paris";
//   div.innerText = "Paris is the capital of France.";
//   paris.classList.add("background");
//   london.classList.remove("background");
//   tokyo.classList.remove("background");
// });
// tokyo.addEventListener("click", () => {
//   p.innerText = "Tokyo";
//   div.innerText = "Tokyo is the capital of Japan.";
//   tokyo.classList.add("background");
//   paris.classList.remove("background");
//   london.classList.remove("background");
// });

const title = document.querySelector("#title");
const body = document.querySelector("#body");
const h3 = document.querySelector("#h3");
const p = document.querySelector("#p");

const data = [
  { name: "Home", info: "Home is where the heart is.." },
  { name: "News", info: "Some news this fine day!" },
  { name: "Contact", info: "Get in touch, or swing by for a cup of coffee." },
  { name: "About", info: "Who we are and what we do." },
];
data.forEach((v) => {
  const newli = document.createElement("li");
  newli.innerText = v.name;
  newli.id = v.name;
  newli.addEventListener("click", () => {
    if (newli.innerText == "Home") {
      newli.classList.add("red");
      body.classList.add("red");
      h3.innerHTML = v.name;
      p.innerText = v.info;
    } else if (newli.innerText == "News") {
      newli.classList.add("orange");
      body.classList.add("orange");
      h3.innerHTML = v.name;
      p.innerText = v.info;
    } else if (newli.innerText == "Contact") {
      newli.classList.add("yellow");
      body.classList.add("yellow");
      h3.innerHTML = v.name;
      p.innerText = v.info;
    } else {
      newli.classList.add("green");
      body.classList.add("green");
      h3.innerHTML = v.name;
      p.innerText = v.info;
    }
  });
  title.appendChild(newli);
});
