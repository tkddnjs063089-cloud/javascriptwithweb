// setTimeout(() => {
//   console.log("메렁");
// }, 3000);

function getRandomInt(min, max) {
  return (Math.floor(Math.random() * (max - min + 1)) + min) * 1000;
}

console.log("오늘의 점메추");
const firsttime = setTimeout(() => {
  console.log("오늘의 메뉴:또육");
}, getRandomInt(1, 10));
const secondtime = setTimeout(() => {
  console.log("맛점하세용");
}, getRandomInt(1, 10) + 1000);

const a = new Promise(() => {});
