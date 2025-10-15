const clock = document.querySelector("#clock");

setInterval(() => {
  const a = new Date();
  const b = a.toLocaleString();
  clock.innerText = b;
}, 1000);
