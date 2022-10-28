const readline = require("readline-sync");
const milisecond = Date.now();
let userInput: string = readline.question("Type something");
let result = (Date.now() - milisecond) / 1000;
console.log(Math.round(result));
const regExp: RegExp = /[0-9]/g;
let regResult: RegExpExecArray | null;
while ((regResult = regExp.exec(userInput))) {
  console.log(regResult[0]);
}