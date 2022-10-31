const person: { name?: string; age?: number } = {
  name: "Kate",
  age: 25,
};
delete person.name;
delete person.age;
console.log(person);