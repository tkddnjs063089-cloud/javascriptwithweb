// const btn = document.createElement("button");
// btn.innerText = "테스트";
// btn.addEventListener("click", () => {
//   alert("전상원");
// });
// document.body.appendChild(btn);

// const newdiv = document.createElement("div");
// newdiv.innerText = "점메추";
// newdiv.addEventListener("click", () => {
//   console.log("오늘의 점심메뉴는 마라탕");
// });
// document.body.appendChild(newdiv);

// const btn1 = document.createElement("button");
// btn1.innerText = "콜라";
// btn1.addEventListener("click", () => {
//   btn1.innerText = "사이다";
// });
// document.body.appendChild(btn1);

// const btn2 = document.createElement("button");
// btn2.innerText = "😊";
// btn2.addEventListener("click", () => {
//   btn2.innerText = btn2.innerText == "😊" ? "😁" : "😊";
// });
// document.body.appendChild(btn2);

const btn3 = document.createElement("button");
btn3.innerText = "✔";
btn3.style.backgroundColor = "white";
btn3.style.padding = "2px";
btn3.addEventListener("click", () => {
  btn3.style.backgroundColor =
    btn3.style.backgroundColor == "white" ? "skyblue" : "white";
});
document.body.appendChild(btn3);
