import { ChangeString } from "./task_1";

describe("GetSymbolCheck", function () {
  let changeString = new ChangeString();
  test("Valid data", function () {
    expect(changeString.getSymbol("strings", 0)).toBe("s2");
  });
  test("Valid data, first argument is a number", function () {
    expect(changeString.getSymbol("4567", 0)).toBe("41");
  });
  test("First argument is empty", function () {
    expect(changeString.getSymbol("", 0)).toBe(
      "Entered string must not be empty"
    );
  });
  test("First argument is null", function () {
    expect(changeString.getSymbol(null, 0)).toBe(
      "Entered string must not be null"
    );
  });
  test("Second argument is negative number", function () {
    expect(changeString.getSymbol("strings", -1)).toBe(
      "Index must not be negative number"
    );
  });
});
describe("GetIndexCheck", function () {
  let changeString = new ChangeString();
  test("Valid data", function () {
    expect(changeString.getIndex("str with some subs in str", "str")).toEqual([
      0, 22,
    ]);
  });
  test("All single-letter characters", function () {
    expect(changeString.getIndex("sssssssssss", "s")).toEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
  });
  test("Result return array", function () {
    expect.arrayContaining(
      changeString.getIndex("str with some subs in str", "str")
    );
  });
  test("Second argument - a non-existent character in the string", function () {
    expect(changeString.getIndex("hello world", "s")).toEqual([]);
  });
});
