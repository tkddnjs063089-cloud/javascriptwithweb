class Car {
  #name;
  #speed;
  constructor(name) {
    this.#name = name;
    this.#speed = 0;
  }

  speedup(x) {
    this.#speed = this.#speed + x;
  }
  speeddown(x) {
    if ((this.#speed = x < 0)) {
      this.#speed = 0;
    } else {
      this.#speed = this.#speed - x;
    }
  }
}

const speedUp = new Car("람보르기니");
speedUp.speedup(30);

console.log(speedUp);
