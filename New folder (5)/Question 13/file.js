// Get the user's age using prompt()
const age = prompt("Enter your age:");

// Convert the user's input to a number
const ageNumber = parseInt(age);

// Check if the user is 18 or older
if (ageNumber >= 18) {
  console.log("You are old enough to drive");
} else {
  const yearsToWait = 18 - ageNumber;
  console.log(`Sorry, you are not old enough to drive. Please wait for ${yearsToWait} more year(s).`);
}
