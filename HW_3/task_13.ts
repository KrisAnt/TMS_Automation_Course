/// Task 13

const readline = require("readline-sync");
let userAnswer;
let south = "south";
let west = "west";
let east = "east";
let north = "north";

do {
  userAnswer = readline.question("Куда хотите поехать");
  switch (userAnswer) {
    case south:
      console.log("на юг пойдешь счастье найдешь");
      break;
    case west:
      console.log("на запад пойдешь верного друга найдешь");
      break;
    case east:
      console.log("на восток пойдешь разработчиком станешь");
      break;
    case north:
      console.log("на север пойдешь много денег найдешь");
      break;
    default:
      console.log("sorry, we can't find appropriate direction");
  }
} while (userAnswer != "ok");
