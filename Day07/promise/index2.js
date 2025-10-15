const makeDough = () =>
  new Promise((sucsess, fail) => {
    const selectdough = prompt("어떤 도우?");
    sucsess(`${selectdough}`);
  });

const maketoping = () =>
  new Promise((sucsess, fail) => {
    const selecttoping = prompt("토핑 고르셈");
    sucsess(`${selecttoping}`);
  });

const makecheese = () =>
  new Promise((sucsess, fail) => {
    const selectcheese = prompt("치즈 선택");
    sucsess(`${selectcheese}`);
  });

const makeBaked = () =>
  new Promise((sucsess, fail) => {
    sucsess(`피자 굽기`);
  });

const makepizza = () =>
  new Promise((sucsess, fail) => {
    console.log("피자 완성");
  });

makeDough()
  .then((v) => {
    console.log(`${v}도우 선택`);
    return maketoping();
  })
  .then((v) => {
    console.log(`${v}토핑 선택`);
    return makecheese();
  })
  .then((v) => {
    console.log(`${v}치즈 선택`);
    return makecheese();
  });
