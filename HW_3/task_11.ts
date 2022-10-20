/// Task 11
const readline = require("readline-sync");
let number;
let toType = "";
do {
  toType = "";
  number = readline.question("Please, type a number :");
  if (number % 5 === 0) {
    toType += "Fiz";
  }
  if (number % 3 === 0) {
    toType += "Buz";
  }
  console.log(toType);
} while (number != -1);
