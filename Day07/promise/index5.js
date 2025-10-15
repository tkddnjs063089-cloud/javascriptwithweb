//동물 6마리
function getRandomInt(min, max) {
  return (Math.floor(Math.random() * (max - min + 1)) + min) * 1000;
}

const btn = document.querySelector("#btn");
const horse = () =>
  new Promise((success) => setTimeout(() => success("🐎"), getRandomInt(0, 5)));
const rabbit = () =>
  new Promise((success) => setTimeout(() => success("🐇"), getRandomInt(0, 5)));
const turtle = () =>
  new Promise((success) => setTimeout(() => success("🐢"), getRandomInt(0, 5)));
const frog = () =>
  new Promise((success) => setTimeout(() => success("🐸"), getRandomInt(0, 5)));
const fish = () =>
  new Promise((success) => setTimeout(() => success("🐟"), getRandomInt(0, 5)));
const shark = () =>
  new Promise((success) => setTimeout(() => success("🦈"), getRandomInt(0, 5)));

btn.addEventListener("click", () =>
  Promise.race([horse(), turtle(), rabbit(), frog(), fish(), shark()]).then(
    (v) => console.log(v)
  )
);

// const racer = [horse1, rabbit1, turtle1, frog1, fish1, shark1];
// const btn2 = document.querySelector("#btn2");
// racer.forEach((p)=>p.then((v)))

// const horse1 = () =>
//   new Promise((success) => setTimeout(() => success("🐎"), getRandomInt(0, 5)));
// const rabbit1 = () =>
//   new Promise((success) => setTimeout(() => success("🐇"), getRandomInt(0, 5)));
// const turtle1 = () =>
//   new Promise((success) => setTimeout(() => success("🐢"), getRandomInt(0, 5)));
// const frog1 = () =>
//   new Promise((success) => setTimeout(() => success("🐸"), getRandomInt(0, 5)));
// const fish1 = () =>
//   new Promise((success) => setTimeout(() => success("🐟"), getRandomInt(0, 5)));
// const shark1 = () =>
//   new Promise((success) => setTimeout(() => success("🦈"), getRandomInt(0, 5)));

const makeRandomTime = (max, min) =>
  (Math.floor(Math.random() * (max - min + 1)) + min) * 1000;
const animals = ["🐎", "🐇", "🐢", "🐸", "🐟", "🦈"];
const makeRace = (name) => {
  const time = makeRandomTime(10, 0);
  return new Promise((success) => {
    setTimeout(() => {
      success({ name, time });
    }, time);
  });
};
Promise.all(animals.map((v) => makeRace(v))).then((results) => {
  console.log(results);
});
