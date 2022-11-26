class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName() {
    console.log(`My name is ${this.name}`);
  }
}
const person1 = new Person("Kate").getName();
const person2 = new Person("John").getName();