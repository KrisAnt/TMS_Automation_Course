class Car {
  constructor(protected carName: string, public engineType: string) {
    this.carName = carName;
    this.engineType = engineType;
  }
}
class SportCar extends Car {
  constructor(
    protected carName: string,
    public engineType: string,
    protected carCost: number,
    protected maxSpeed: number
  ) {
    super(carName, engineType);
    this.carCost = carCost;
    this.maxSpeed = maxSpeed;
  }
  getInfo() {
    console.log(
      `This is ${this.carName}. It has ${this.engineType} engine and max speed equal to ${this.maxSpeed}. Approximetly cost of the car is ${this.carCost}`
    );
  }
}
class LuxuryCar extends Car {
  constructor(
    protected carName: string,
    public engineType: string,
    protected carCost: number,
    protected maxSpeed: number
  ) {
    super(carName, engineType);
    this.carCost = carCost;
    this.maxSpeed = maxSpeed;
  }

  getInfo() {
    console.log(
      `This is ${this.carName}. It has ${this.engineType} engine and max speed equal to ${this.maxSpeed}. Approximetly cost of the car is ${this.carCost}`
    );
  }
}

const luxuryCar = new LuxuryCar("Bugatti Veyron", "W-16", 18000000, 220);
luxuryCar.getInfo();
const sportCar = new SportCar(
  "Ford GT",
  "Ford Modular 5.4 Supercharged",
  7525000,
  347
);
sportCar.getInfo();