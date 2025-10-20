class Soccer {
  name;
  pozition;
  age;
  year;
  constructor(name, age, year, pozition) {
    this.name = name;
    this.age = age;
    this.year = year;
    this.pozition = pozition;
  }
  restructer(newpozition) {
    this.pozition = newpozition;
  }
}

class Team {
  name;
  player;
  supervision;
  constructor(name, supervision) {
    this.name = name;
    this.supervision = supervision;
    this.player = [];
  }
  listplayer() {
    console.log(this.player);
  }
  plusplayer(player) {
    this.player.push(player);
  }
  minusplayer(name) {
    this.player = this.player.filter((v) => v.name != name);
  }
}

const b = new Team("FC 상원", "짱구");
b.plusplayer(new Soccer("상원", 27, 1999));
console.log(b);
