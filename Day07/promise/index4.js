//라면 끓이기 프로그램
//콘솔로 모든 과정이 찍혀야됌

//1. 물받기 (1~5초)
//2. 물 끓이기(5~8초)
//3. 면 넣기 (1~3초)
//4. 계란 넣기 (1~2초)
//5. 라면 전체 익히기 (5초~10초)
//6. 라면 완성
function getRandomInt(min, max) {
  return (Math.floor(Math.random() * (max - min + 1)) + min) * 1000;
}

// const first = setTimeout(() => {
//   console.log("물받기");
// }, getRandomInt(1, 5));
// const second = setTimeout(() => {
//   console.log("물 끓이기");
// }, getRandomInt(5, 8));
// const third = setTimeout(() => {
//   console.log("면 넣기");
// }, getRandomInt(1, 3));
// const ford = setTimeout(() => {
//   console.log("계란 넣기");
// }, getRandomInt(1, 2));
// const fivth = setTimeout(() => {
//   console.log("라면 전체 익히기");
// }, getRandomInt(5, 10));
// const sixth = setTimeout(() => {
//   console.log("라면 완성");
// });

// const takewater = () =>
//   new Promise((sucsess, fail) => {
//     //   console.log("물받기");
//     sucsess(setTimeout(() => {}, getRandomInt(1, 5)));
//   });
// const b = () =>
//   new Promise((sucsess, fail) => {
//     //   console.log("물 끓이기");
//     sucsess(setTimeout(() => {}, getRandomInt(5, 8)));
//   });
// const c = () =>
//   new Promise((sucsess, fail) => {
//     //   console.log("면 넣기");
//     sucsess(setTimeout(() => {}, getRandomInt(1, 3)));
//   });
// const d = () =>
//   new Promise((sucsess, fail) => {
//     //   console.log("계란 넣기");
//     sucsess(setTimeout(() => {}, getRandomInt(1, 2)));
//   });
// const e = () =>
//   new Promise((sucsess, fail) => {
//     //   console.log("라면 전체 익히기");
//     sucsess(setTimeout(() => {}, getRandomInt(5, 10)));
//   });
// const f = () =>
//   new Promise((sucsess, fail) => {
//     //   console.log("라면 완성");
//   });

// a()
//   .then(() => {
//     console.log("물받기");
//     return b();
//   })
//   .then(() => {
//     console.log("물 끓이기");
//     return c();
//   })
//   .then(() => {
//     console.log("면 넣기");
//     return d();
//   })
//   .then(() => {
//     console.log("계란 넣기");
//     return e();
//   })
//   .then(() => {
//     console.log("라면 전체 익히기");
//     return f();
//   })
//   .then(() => {
//     console.log("라면 완성");
//   });

const watering = () =>
  new Promise((success, fail) => {
    console.log("물 받는중");
    setTimeout(() => {
      console.log("물 받기 완료");
      success();
    }, getRandomInt(1, 5));
  });
const heating = () =>
  new Promise((success, fail) => {
    console.log("물 끓이기");
    setTimeout(() => {
      console.log("물 끓이기 완료");
      success();
    }, getRandomInt(5, 8));
  });
const noodleAndFlake = () =>
  new Promise((success, fail) => {
    console.log("면과 스프 넣는중");
    setTimeout(() => {
      console.log("면과 스프 넣기 완료!");
      success();
    }, getRandomInt(1, 3));
  });
const egg = () =>
  new Promise((success, fail) => {
    console.log("계란 넣는중");
    setTimeout(() => {
      console.log("계란 넣기 완료");
      success();
    }, getRandomInt(1, 2));
  });
const cooking = () =>
  new Promise((success, fail) => {
    console.log("라면 전체 끊이는중");
    setTimeout(() => {
      console.log("라면 완성");
      success();
    }, getRandomInt(1, 10));
  });

watering()
  .then(() => heating())
  .then(() => noodleAndFlake())
  .then(() => egg())
  .then(() => cooking());
