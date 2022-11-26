class Someclass {
   static getGen<T>(arg: T): any {
    switch (typeof arg) {
      case "boolean":
        return !arg;
      case "number":
        let value = 1;
        while (value * value <= arg) {
          value++;
        }
        return value - 1;
      case "string":
        if (arg.includes("(")) {
          return "Не забыли ли вы закрыть скобку?";
        } else return "Скобок нет";
    }
  }
}
console.log(Someclass.getGen("("));