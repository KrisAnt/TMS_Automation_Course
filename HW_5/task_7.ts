(function factorial(userNumber: number) {
  let result = 1;
  while (userNumber) {
    result *= userNumber--;
  }
  console.log(result);
}(5));