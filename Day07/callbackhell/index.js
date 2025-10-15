//피자 만들기
const makeDough = (nextstep) => {
  console.log("1. 도우 만들기 완료");
  nextstep();
};
const addSauce = (nextstep) => {
  console.log("2. 소스 바르기 완료");
  nextstep();
};
const addTopping = (nextstep) => {
  console.log("3. 토핑 올리기 완료");
  nextstep();
};
const bakePizza = (nextstep) => {
  console.log("4. 피자 굽기 완료");
  nextstep();
};
const cutPizza = (nextstep) => {
  console.log("5. 피자 자르기 완료");
  nextstep();
};
const boxPizza = () => {
  console.log("6. 피자 포장하기 완료");
};

makeDough(() => {
  addSauce(() => {
    addTopping(() => {
      bakePizza(() => {
        cutPizza(() => {
          boxPizza();
        });
      });
    });
  });
});
