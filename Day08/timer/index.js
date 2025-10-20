const roket = document.querySelector("#roket");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  let time = 4;
  let interval = setInterval(() => {
    roket.innerText = `🚀 ${time} 초전`;
    time = time - 1;
  }, 1000);
  setTimeout(() => {
    clearInterval(interval);
    roket.innerText = `🦓`;
  }, 5000);
});
