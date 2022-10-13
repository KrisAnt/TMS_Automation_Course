/// Task 11
const readline = require("readline-sync");
let number;
do {
  number = readline.question("Please, type a number :");
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizBuz");
  } else if (number % 5 === 0) {
    console.log("Fiz");
  } else if (number % 3 === 0) {
    console.log("Buz");
  } else {
    console.log("Please, type another number");
  }
} while (number <= 100);
