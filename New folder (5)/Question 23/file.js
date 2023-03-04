let num = prompt("Enter a positive integer:");
let isPrime = true;

// check if input is a positive integer
if (num <= 1) {
  console.log("Input is not a prime number.");
} else {
  // loop through numbers from 2 to num-1
  for (let i = 2; i < num; i++) {
    // check if num is divisible by i without a remainder
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  // check if isPrime is still true after the loop
  if (isPrime) {
    console.log(num + " is a prime number.");
  } else {
    console.log(num + " is not a prime number.");
  }
}
