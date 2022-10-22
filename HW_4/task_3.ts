let str: string = "произвольная строка";
let index: number = -12;
if (index > str.length || index < 0) {
  console.log("вы вышли за границу строки");
} else {
  console.log(str.charAt(index));
}