const even = [];
const odd = [];

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    even.push(i);
  } else {
    odd.push(i);
  }
}

console.log("Even numbers between 0 to 100:", even);
console.log("Odd numbers between 0 to 100:", odd);
