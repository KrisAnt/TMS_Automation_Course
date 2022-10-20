/// Task 12

const readline = require("readline-sync");

let userAge;
do {
  userAge = readline.question("Сколько вам лет?");
  if (userAge >= 18) console.log("Попей пивка");
  else {
    console.log("Попей колу");
    if (userAge >= 16)
      console.log("Можешь выкурить сигаретку, только маме не говори");
  }
} while (userAge < 100);
