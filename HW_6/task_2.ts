const obj = {
  name: "John",
  isMarried: false,
};
const keys = Object.keys(obj);
if (keys.includes("name") || keys.includes("isMarried")) {
  console.log(true);
}