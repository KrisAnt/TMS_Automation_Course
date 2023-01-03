import { ChangeString } from "./task_1";
import { assert } from "chai";

describe("GetSymbolCheck", function () {
  let changeString = new ChangeString();
  it("Valid data", function () {
    const expectedresult = "s2";
    const actualResult = changeString.getSymbol("strings", 0);
    assert.equal(actualResult, expectedresult, "Valid data");
  });
  it("Valid data, first argument is a number", function () {
    const expectedresult = "61";
    const actualResult = changeString.getSymbol("256", 2);
    assert.equal(
      actualResult,
      expectedresult,
      "Valid data, first argument is a number"
    );
  });
  it("Result returns string value", function () {
    const expectedresult = "s2";
    const actualResult = changeString.getSymbol("strings", 0);
    assert.typeOf(expectedresult, "string");
  });
  it("First argument is null", function () {
    const expectedresult = "Entered string must not be null";
    const actualResult = changeString.getSymbol(null, 0);
    assert.equal(actualResult, expectedresult, "First argument is null");
  });
  it("Second argument is negative number", function () {
    const expectedresult = "Index must not be negative number";
    const actualResult = changeString.getSymbol("strings", -1);
    assert.equal(
      actualResult,
      expectedresult,
      "Second argument is negative number"
    );
  });
  it("Index is outside the array", function () {
    const expectedresult =
      "The number exceeds the number of elements in the array";
    const actualResult = changeString.getSymbol("strings", 9);
    assert.equal(actualResult, expectedresult, "Index is outside the array");
  });
});
describe("GetIndexCheck", function () {
  let changeString = new ChangeString();
  it("Valid data", function () {
    const expectedresult = [0, 22];
    const actualResult = changeString.getIndex(
      "str with some subs in str",
      "str"
    );
    assert.deepEqual(actualResult, expectedresult, "Valid data");
  });
  it("All single-letter characters", function () {
    const expectedresult = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const actualResult = changeString.getIndex("sssssssssss", "s");
    assert.deepEqual(
      actualResult,
      expectedresult,
      "All single-letter characters"
    );
  });
  it("Second argument - a non-existent character in the string", function () {
    const expectedresult = [];
    const actualResult = changeString.getIndex("hello world", "s");
    assert.deepEqual(
      actualResult,
      expectedresult,
      "Second argument - a non-existent character in the string"
    );
  });
  it("Result returns array value", function () {
    const expectedresult = [0, 22];
    const actualResult = changeString.getIndex(
      "str with some subs in str",
      "str"
    );
    assert.isArray(expectedresult, "Result returns array value");
  });
});
describe("DeleteExcludeCheck", function () {
  let changeString = new ChangeString();
  it("Valid data", function () {
    const expectedresult = " str for  excercise 3";
    const actualResult = changeString.deleteExclude(
      "3 str for 3 excercise 3",
      "3",
      2
    );
    assert.equal(actualResult, expectedresult, "Valid data");
  });
  it("Number of index is greater than the number of elements in the array", function () {
    const expectedresult =
      "The number exceeds the number of elements in the array";
    const actualResult = changeString.deleteExclude("hello", "e", 9);
    assert.equal(
      actualResult,
      expectedresult,
      "Number of index is greater than the number of elements in the array"
    );
  });
  it("Index is a negative number", function () {
    const expectedresult = "Array must not contain negative numbers";
    const actualResult = changeString.deleteExclude("hello", "e", -10);
    assert.equal(
      actualResult,
      expectedresult,
      "Number of index is greater than the number of elements in the array"
    );
  });
});
describe("ReplaceArrCheck", function () {
  let changeString = new ChangeString();
  it("Valid data", function () {
    const expectedresult = "stttsg";
    const actualResult = changeString.replaceArr(
      "string",
      [3, 4, 2],
      [1, 0, 1]
    );
    assert.equal(actualResult, expectedresult, "Valid data");
  });
  it("First array has more elements than second", function () {
    const expectedresult = "Arrays must be matched";
    const actualResult = changeString.replaceArr(
      "string",
      [3, 4, 2, 6],
      [1, 0, 1]
    );
    assert.equal(
      actualResult,
      expectedresult,
      "First array has more elements than secon"
    );
  });
  it("First array has fewer elements than the second", function () {
    const expectedresult = "Arrays must be matched";
    const actualResult = changeString.replaceArr("string", [3, 4], [1, 0, 1]);
    assert.equal(
      actualResult,
      expectedresult,
      "First array has fewer elements than the second"
    );
  });
  it("String length is fewer than number of array elements", function () {
    const expectedresult =
      "Number of array elements must not exceed the string length";
    const actualResult = changeString.replaceArr("s", [3, 4, 1], [1, 0, 1]);
    assert.equal(
      actualResult,
      expectedresult,
      "String length is fewer than number of array elements"
    );
  });
});
