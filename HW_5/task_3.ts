function trimString(userString: string, from: number, to: number) {
  let sum= 0;
  userString = userString.substring(from, to);
  return userString;
}
console.log(trimString("hello wonderful world", 2, 9));