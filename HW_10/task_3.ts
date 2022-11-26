class Car {
  door: number;
  wheel: string;

  constructor(door: number, wheel: string) {
    this.door = door;
    this.wheel = wheel;
  }
  getInfo() {
    console.log(
      `This car has ${this.door} doors and this is ${this.wheel} drive car`
    );
  }
}

const car1 = new Car(3, "left-hand").getInfo();
const car2 = new Car(4, "right-hand").getInfo();