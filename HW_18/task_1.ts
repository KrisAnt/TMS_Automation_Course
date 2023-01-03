export class ChangeString {
  getSymbol(str: string, index: number): string {
    if (str === null) {
      return "Entered string must not be null";
    }
    if (str === "") {
      return "Entered string must not be empty";
    }
    let symbol = str[index];
    if (index < 0) {
      return "Index must not be negative number";
    }
    if (index > str.length) {
      return "The number exceeds the number of elements in the array";
    }
    let result = str.split(symbol).length - 1;
    return symbol + result;
  }
  getIndex(str: string, substr: string): Array<number> {
    let listIndex = [];
    let lastIndex = -1;
    while ((lastIndex = str.indexOf(substr, lastIndex + 1)) !== -1) {
      listIndex.push(lastIndex);
    }
    return listIndex;
  }

  deleteExclude(str: string, subsrt: string, index: number): string {
    let listIndex = this.getIndex(str, subsrt);
    if (index > listIndex.length) {
      return "The number exceeds the number of elements in the array";
    }
    if (index < 0) {
      return "Array must not contain negative numbers";
    }
    let indexOfIndex: number = listIndex[index];
    let st1: string = str.substring(0, indexOfIndex);
    let st2: string = str.substring(indexOfIndex + 1, str.length);
    let result = st1.replaceAll(subsrt, "");
    result += str[indexOfIndex];
    result += st2.replaceAll(subsrt, "");
    return result;
  }
  replaceArr(str0: string, arr1: Array<number>, arr2: Array<number>): string {
    let str = str0;
    if (str0.length < arr1.length || str0.length < arr2.length) {
      return "Number of array elements must not exceed the string length";
    }
    for (let i = 0; i < arr1.length; i++) {
      const from = arr1[i];
      const to = arr2[i];
      if (arr1.length > arr2.length) {
        return "Arrays must be matched";
      }
      if (arr1.length < arr2.length) {
        return "Arrays must be matched";
      }

      const symbolTo = str[to];
      const st1 = str.substring(0, from);
      const st2 = str.substring(from + 1, str.length);

      str = `${st1}${symbolTo}${st2}`;
    }

    return str;
  }
}

let a = new ChangeString();
console.log(a.getSymbol(null, 0));
console.log(a.getIndex("sssssssssss", "h"));
console.log(a.deleteExclude("hello world", "e", 10));
console.log(a.replaceArr("s", [3, 4, 2], [1, 0, 1]));
