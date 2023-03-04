// Get the input score from the user using prompt()
const score = prompt("Enter your score:");

// Convert the input to a number
const numScore = Number(score);

// Determine the grade based on the score
let grade;
if (numScore >= 80 && numScore <= 100) {
  grade = "A";
} else if (numScore >= 70 && numScore <= 89) {
  grade = "B";
} else if (numScore >= 60 && numScore <= 69) {
  grade = "C";
} else if (numScore >= 50 && numScore <= 59) {
  grade = "D";
} else if (numScore >= 0 && numScore <= 49) {
  grade = "F";
} else {
  console.log("Invalid score. Please enter a score between 0 and 100.");
}

// Display the grade to the user
console.log(`Your grade is ${grade}`);
