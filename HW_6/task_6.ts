const readline = require("readline-sync");
interface User {
  username: string;
  password: string;
}

const validator = {
  validate: function (username: string, password: string): User {
    const user = {
      username: username,
      password: password,
    };
    return user;
  },
  login: function (username: string, password: string, user: User) {
    if (user.username === username && user.password === password) {
      return console.log("f");
    }
  },
};
const login = readline.question("Please enter your login: ");
const password = readline.question("Please enter your password: ");
const user = validator.validate(login, password);
const login1 = readline.question("Please enter your login");
const password2 = readline.question("Please enter your password");
validator.login(login1, password2, user);