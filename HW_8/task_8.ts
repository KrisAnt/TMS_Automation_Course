let salatMap = new Map<string, number>([
  ["огурцы", 300],
  ["помидоры", 200],
  ["соль", 10],
  ["сметана", 110],
]);
const grams = salatMap.entries();
for (const iterator of grams) {
  if (iterator[1] > 100) {
    console.log(iterator);
  }
}