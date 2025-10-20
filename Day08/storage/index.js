const input = document.querySelector("#input");
const save = document.querySelector("#save");
const seeconsole = document.querySelector("#seeconsole");

save.addEventListener("click", () => {
  if (localStorage.getItem("사탕리스트")) {
    const list = localStorage.getItem("사탕리스트");
    localStorage.setItem("사탕리스트", list + "," + input.value);
    input.value = "";
  } else {
    localStorage.setItem("사탕리스트", input.value);
    input.value = "";
  }
});

seeconsole.addEventListener("click", () => {
  const seeback = localStorage.getItem("사탕리스트");
  console.log(seeback);
});
0;
