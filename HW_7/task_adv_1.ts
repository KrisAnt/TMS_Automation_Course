const word = "казак";
const arr = word.split("");
console.log(arr);
let j = arr.length - 1;
let result = true;
for (let i = 0; i < arr.length && j >= 0; i++) {
  if (arr[i] !== arr[j]) {
    result = false;
    break;
  }
  j--;
}
console.log(result);