let salaries = {
  andrey: 500,
  sveta: 413,
  anton: 987,
  kate: 664,
  alexandra: 199,
};
const salariesArr = Object.values(salaries);
const sumOfArray = salariesArr.reduce((acc, number) => acc + number);
const averageSalary = sumOfArray / salariesArr.length;