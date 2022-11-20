const users = ["Darya", "Masha", "Denis", "Vitaliy", "Polina", "Anton"];
const newUsersArray = users.map((el, index) => `member ${index + 1} : ${el}`);
console.log(newUsersArray);

const newArr2 = users.map(Users);

console.log(newArr2);
function Users(el: string, index: number):string {
  return `member ${index + 1} : ${el}`;
}