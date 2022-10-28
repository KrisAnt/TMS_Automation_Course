let fullName: string = "John Doe";

for (let i = 0; i < 5; i++) {
  if (i % 2 === 0) {
    console.log(fullName.toLowerCase());
  } else {
    console.log(fullName.toUpperCase());
  }
}