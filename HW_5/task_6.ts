function fooboo(boolParam: boolean, foo: Function, boo: Function) {
  if (boolParam === true) {
    foo();
  } else boo();
}
function foo() {
  return console.log("foo");
}
function boo() {
  return console.log("boo");
}
fooboo(false, foo, boo);