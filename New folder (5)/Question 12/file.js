// Create a new Date object
const now = new Date();

// Get the year, month, date, hours, and minutes
const year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();

// Create a human-readable time format
const format1 = `${year}-${month < 10 ? "0" + month : month}-${date < 10 ? "0" + date : date} ${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}`;
console.log("Format 1: ", format1);

const format2 = `${date < 10 ? "0" + date : date}-${month < 10 ? "0" + month : month}-${year} ${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}`;
console.log("Format 2: ", format2);

const format3 = `${date < 10 ? "0" + date : date}/${month < 10 ? "0" + month : month}/${year} ${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}`;
console.log("Format 3: ", format3);
