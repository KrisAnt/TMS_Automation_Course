let student1 = {
  name: "Polina",
  age: 27,
  isMarried: true,
};
let student2 = {
  name: "Polina",
  age: 27,
  isMarried: true,
};
function IsEqual(student1: any, student2: any) {
  const student1Key = Object.getOwnPropertyNames(student1);
  const student2Key = Object.getOwnPropertyNames(student2);
  if (student1Key.length !== student2Key.length) {
    return false;
  }

  for (let i = 0; i < student1Key.length; i += 1) {
    const prop = student1Key[i];
    if (student1[prop] !== student2[prop]) {
      return false;
    }
  }
  return true;
}
console.log(IsEqual(student1, student2));