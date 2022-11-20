const fibonacci = [
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];
fibonacci.forEach((el) => console.log(el));

fibonacci.forEach(Myfunction);

function Myfunction(el:number):void {
  console.log(el);
}