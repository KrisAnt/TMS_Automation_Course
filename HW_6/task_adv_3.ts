const cat = {
  name: "Енчик",
  age: 3,
};
interface Icat {
  name: string;
  age: number;
}
const cat2 = Object.assign({}, cat) as Icat;
const cat3 = JSON.parse(JSON.stringify(cat)) as Icat;
cat.name = "Кот";
cat.age = 5;
cat3.age =10;
console.log(cat, cat2, cat3);