// Create a new Date object
const now = new Date();

// Get the year
const year = now.getFullYear();
console.log("Year: ", year);

// Get the month as a number (0-11)
const month = now.getMonth();
console.log("Month: ", month);

// Get the date of the month (1-31)
const date = now.getDate();
console.log("Date: ", date);

// Get the day of the week as a number (0-6)
const day = now.getDay();
console.log("Day: ", day);

// Get the hours (0-23)
const hours = now.getHours();
console.log("Hours: ", hours);

// Get the minutes (0-59)
const minutes = now.getMinutes();
console.log("Minutes: ", minutes);

// Get the number of seconds elapsed since January 1, 1970
const secondsSince1970 = now.getTime() / 1000;
console.log("Seconds since January 1, 1970: ", secondsSince1970);
