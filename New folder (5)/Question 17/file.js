let month = prompt("Enter the month (in numbers): ");

// Check for February separately
if (month === "2") {
  let year = prompt("Enter the year: ");
  let days = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
  console.log(`The number of days in February ${year} is ${days}.`);
} else if (month === "1" || month === "3" || month === "5" || month === "7" || month === "8" || month === "10" || month === "12") {
  console.log(`The number of days in month ${month} is 31.`);
} else if (month === "4" || month === "6" || month === "9" || month === "11") {
  console.log(`The number of days in month ${month} is 30.`);
} else {
  console.log("Invalid input, please enter a valid month.");
}
