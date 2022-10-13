/// Task 12

const readline = require("readline-sync");

let userAge;
do {
  userAge = readline.question("Сколько вам лет?");
  if (userAge >= 16 && userAge <= 18) {
    console.log("Можешь выкурить сигаретку, только маме не говори");
  } else if (userAge < 18) {
    console.log("Попей колу");
  } else if (userAge >= 16 || userAge <= 18) {
    console.log("Попей пивка");
  } else {
    console.log("Введи свой возраст еще раз");
  }
} while (userAge < 100);
