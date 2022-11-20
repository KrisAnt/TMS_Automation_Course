class MyClass {
  str: string;
  classNum: number;

  constructor(str: string, classNum: number) {
    this.str = str;
    this.classNum = classNum;
  }

  get returnSym() {
    const map = new Map<string, number>();
    for (let i = 0; i < this.str.length; i++) {
      const symbol = this.str[i];
      if (map.has(symbol)) {
        let value = map.get(symbol);
        value = value === undefined ? 0 : value;
        map.set(symbol, value + 1);
      } else map.set(symbol, 1);
    }
    const mapSort1 = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
    const [maxSymb] = mapSort1.keys();
    return maxSymb;
  }

  method(paramNum: number | undefined): string {
    let num;
    if (paramNum === undefined) {
      num = this.classNum;
    } else num = this.classNum - paramNum;

    let result = "";
    const count = Math.abs(num);
    if (num < 0) {
      for (let i = count - 1; i >= 0; i--) {
        result += this.str[i];
      }
      for (let i = count; i < this.str.length; i++) {
        result += this.str[i];
      }
    } else {
      const start = this.str.length - count;
      let direct = "";
      for (let i = this.str.length - 1; i > start; i--) {
        result += this.str[i];
      }
      for (let i = 0; i <= start; i++) {
        direct += this.str[i];
      }
      result = direct + result;
    }
    return result;
  }
}
const myclass = new MyClass("Hello World", 5);
console.log(myclass.returnSym);
console.log(myclass.method(1));