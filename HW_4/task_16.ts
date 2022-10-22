const date: Date = new Date();
let localDate = date.toLocaleDateString("en-US");
console.log("текущая дата:" + localDate);
console.log("текущее время:" + date.toLocaleTimeString());