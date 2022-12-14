class Calculator {
  sum(firstNumber: number, secondNumber: number): number {
    return firstNumber + secondNumber;
  }

  subtr(firstNumber: number, secondNumber: number): number {
    return firstNumber - secondNumber;
  }
  multiplication(firstNumber: number, secondNumber: number): number {
    return firstNumber * secondNumber;
  }
  division(firstNumber: number, secondNumber: number): number {
    return firstNumber / secondNumber;
  }
}

/// тесты для суммы чисел
function testSum(
  firstNumber: number,
  secondNumber: number,
  expected: number
): void {
  const calc = new Calculator();
  let actual = calc.sum(firstNumber, secondNumber);
  if (actual === expected) {
    console.log("Тест прошел");
  } else console.log("Тест свалился");
}
testSum(5, 3, 8);
testSum(5, 3, 9);
testSum(5.5, 3, 8.5);
testSum(0, 3, 3);
testSum(-1, -1, 0);

///тесты для вычитания
function testSubtr(
  firstNumber: number,
  secondNumber: number,
  expected: number
): void {
  const calc = new Calculator();
  let actual = calc.subtr(firstNumber, secondNumber);
  if (actual === expected) {
    console.log("Тест прошел");
  } else console.log("Тест свалился");
}
testSubtr(111, 11, 100);
testSubtr(0, 0, 0);
testSubtr(-1, -1, 0);
testSubtr(123, 1, 121);
testSubtr(9, -9, 1);
testSubtr(-2, 4.5, -6.5);

///тесты для умножения
function testMulti(
  firstNumber: number,
  secondNumber: number,
  expected: number
): void {
  const calc = new Calculator();
  let actual = calc.multiplication(firstNumber, secondNumber);
  if (actual === expected) {
    console.log("Тест прошел");
  } else console.log("Тест свалился");
}
testMulti(4, 4, 16);
testMulti(-1, 2, -6);
testMulti(-3, -9, -27);
testMulti(-3, -9, 27);
testMulti(56765, 0.5, 28382.5);
testMulti(7, 0, 0);

///тесты на деление
function testDivision(
  firstNumber: number,
  secondNumber: number,
  expected: number
): void {
  const calc = new Calculator();
  let actual = calc.division(firstNumber, secondNumber);
  if (actual === expected) {
    console.log("Тест прошел");
  } else console.log("Тест свалился");
  if (secondNumber === 0) {
    console.log("Деление невозможно");
  }
}
testDivision(5, 0, 9);
testDivision(0, 23, 0);
testDivision(25, 5, 4);
testDivision(-1, 876, 86);
testDivision(-10, -10, 1);