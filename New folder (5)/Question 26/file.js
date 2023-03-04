let num = parseInt(prompt("Enter a number: "));
console.log(`Multiplication Table of ${num}`);

for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}
