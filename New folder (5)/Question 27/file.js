// loop through all the numbers from 0 to 100
for (let i = 0; i <= 100; i++) {
    let isPrime = true;
  
    // check if the number is prime
    if (i < 2) {
      isPrime = false;
    } else {
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
    }
  
    // print the prime number
    if (isPrime) {
      console.log(i);
    }
  }
  