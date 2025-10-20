//unit 클래스 작성하기
//필드name,emoji,hp
//메소드:
// - attack 함수:{emohi}{name}이(가) 공격했다 출력하기
// - status 함수: 남은 hp 출력하기

// Hero 클래스 작성하기 [Unit을 상속 받기]
// 필드 : skills
// 메소드 : activate 함수: skill이 발동했다!

// Monster 클래스 작성하기 [Unit을 상속받기]
// 필드 : level

class Unit {
  #name;
  #emoji;
  #hp;
  constructor(name, emoji, hp) {
    this.#name = [];
    this.#emoji = [];
    this.#hp = [];
  }
  attack() {
    console.log(`${this.#emoji}${this.#name}이(가) 공격했다`);
  }
  status() {
    console.log(`체력${this.#hp}남음`);
  }
}

class Hero extends Unit {
  #skill;
  constructor(name, emoji, hp, skill) {
    super(name, emoji, hp);
    this.#skill = skill;
  }
  activate() {
    console.log(`${this.#skill}이 발동했다!`);
  }
}

class Monster extends Unit {
  #level;
  constructor(name, emoji, hp, level) {
    super(name, emoji, hp);
    this.#level = level;
  }
}

const a = new Unit("전상원", "😶", "100");
a.attack(new Hero("다이노"));
console.log(a);
