// Function to perform addition
function add(num1, num2) {
    return num1 + num2;
  }
  
  // Function to perform subtraction
  function subtract(num1, num2) {
    return num1 - num2;
  }
  
  // Function to perform multiplication
  function multiply(num1, num2) {
    return num1 * num2;
  }
  
  // Function to perform division
  function divide(num1, num2) {
    // Check for division by zero
    if (num2 === 0) {
      return "Cannot divide by zero";
    }
    return num1 / num2;
  }
  
  // Test the calculator functions
  console.log(add(5, 3));        // Output: 8
  console.log(subtract(5, 3));   // Output: 2
  console.log(multiply(5, 3));   // Output: 15
  console.log(divide(10, 5));    // Output: 2
  console.log(divide(10, 0));    // Output: Cannot divide by zero
  