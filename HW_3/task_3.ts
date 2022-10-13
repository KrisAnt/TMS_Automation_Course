/// Task 3

let count: string | number = 42;
let userName: string | number = "42";
count = String(count);
userName = Number(userName);
console.log(userName, count);
count = count.toString();
console.log(count);
console.log(+userName);
