// const a1 = {
//   name: "아메리카노",
//   price: 4800,
//   shots: 2,
//   size: "tall",
//   discount: function (balance) {
//     this.price = this.price * balance;
//   },
// };
// const a2 = {
//   name: "아메리카노",
//   price: 5300,
//   shots: 3,
//   size: "grande",
//   discount: function (balance) {
//     this.price = this.price * balance;
//   },
// };
// const a3 = {
//   name: "아이스라떼",
//   price: 6600,
//   shots: 4,
//   size: "grande",
//   discount: function (balance) {
//     this.price = this.price * balance;
//   },
// };

// //클래스는 오브젝트를 만들어주는 문버 with 함수까지
// class Coffee {
//   name;
//   price;
//   shots;

//   constructor(a, b, c) {
//     this.name = a;
//     this.price = b;
//     this.shots = c;
//   }
// }

// const a = new Coffee("상원이커피", 9600, 2);

// console.log(a);

// class 설계하기

class Soccer {
  teamname;
  teampersonnel;
  teamsupervision;
  teamfoundinyear;

  constructor(a, c, d) {
    this.teamname = a;
    this.teamsupervision = c;
    this.teamfoundinyear = d;
    this.teampersonnel = [];
  }
  registerPlayer(name, number) {
    this.teampersonnel.push({ name, number });
  }
}

const a = new Soccer("대한민국 축구 대표팀", "11명", "홍명보");
a.registerPlayer("상원", 7);
a.registerPlayer("명연", 10);
a.registerPlayer("성현", 15);

console.log(a);
