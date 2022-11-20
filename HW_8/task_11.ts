const person = { userName: "", surname: "", age: "" };
let { userName, surname, age } = person;
if (userName === "") {
  userName = "Аноном";
}
if (surname === "") {
  surname = "Анонимович";
}
if (age === "") {
  age = "? лет";
}
console.log(userName);
console.log(surname);
console.log(age);