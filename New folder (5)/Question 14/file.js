// Get the input number from the user using prompt()
const number = prompt("Enter a number:");

// Convert the input to a number
const num = Number(number);

// Check if the number is even or odd
if (num % 2 === 0) {
  console.log(`${num} is even`);
} else {
  console.log(`${num} is odd`);
}

