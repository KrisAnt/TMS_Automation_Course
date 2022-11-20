class MyClass {
  str: string;
  symNum: number;
  sym: string;

  constructor(str: string, symNum: number, sym: string) {
    this.str = str;
    this.symNum = symNum;
    this.sym = sym;
  }

  get findSym() {
    return this.str.includes(this.sym.toString());
  }
  get getSymbol() {
    if (this.str.length < this.symNum) {
      return this.str[0];
    } else return this.str.charAt(this.symNum);
  }

  showCollection(map: Map<string, string>): string {
    let st = this.str;
    for (const iterator of map) {
      if (this.str.includes(iterator[0])) {
        st = st.replace(iterator[0], iterator[1]);
      }
    }
    return st;
  }
}
const obj = new MyClass("123qweasd12", 123, "qw");
console.log(obj.getSymbol);
console.log(obj.findSym);
console.log(
  obj.showCollection(
    new Map([
      ["12", "-"],
      ["ea", "*"],
    ])
  )
);
