const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
ages.sort((a, b) => a - b);
const minAge = ages[0];
const maxAge = ages[ages.length - 1];
console.log(`Minimum age: ${minAge}`);
console.log(`Maximum age: ${maxAge}`);

// Find the median age
const middleIndex = Math.floor(ages.length / 2);
let medianAge;
if (ages.length % 2 === 0) {
  medianAge = (ages[middleIndex] + ages[middleIndex - 1]) / 2;
} else {
  medianAge = ages[middleIndex];
}
console.log(`Median age: ${medianAge}`);

// Find the average age
const sum = ages.reduce((acc, cur) => acc + cur);
const averageAge = sum / ages.length;
console.log(`Average age: ${averageAge}`);

// Find the range of the ages
const ageRange = maxAge - minAge;
console.log(`Age range: ${ageRange}`);

// Compare the value of (min - average) and (max - average), use abs() method
const diff1 = Math.abs(minAge - averageAge);
const diff2 = Math.abs(maxAge - averageAge);
if (diff1 > diff2) {
  console.log(`The difference between ${minAge} and ${averageAge} is greater.`);
} else if (diff1 < diff2) {
  console.log(`The difference between ${maxAge} and ${averageAge} is greater.`);
} else {
  console.log(`The differences are equal.`);
}
