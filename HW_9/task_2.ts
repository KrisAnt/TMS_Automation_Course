class Person {
  static length_ratio: number = 0.65;

  name: string;
  height: number;

  constructor(name: string, height: number) {
    this.height = height;
    this.name = name;
  }
  static stepLength(height: number) {
    return (height / 4) * 0.37;
  }

  get getRunLength() {
    return Person.length_ratio * this.height;
  }

  logWalkStep() {
    console.log(`Длина вашего шага ${Person.stepLength(175)}`);
  }
}
const person = new Person("Петя", 175);
console.log(person.getRunLength);
console.log(person.logWalkStep());