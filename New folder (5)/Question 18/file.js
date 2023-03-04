function getDaysInMonth(month, year) {
    switch (month) {
      case 2:
        return (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) ? 29 : 28;
      case 4:
      case 6:
      case 9:
      case 11:
        return 30;
      default:
        return 31;
    }
  }
  
  // Example usage:
  console.log(getDaysInMonth(2, 2022)); // Output: 28
  console.log(getDaysInMonth(2, 2024)); // Output: 29
  console.log(getDaysInMonth(4, 2023)); // Output: 30
  console.log(getDaysInMonth(12, 2023)); // Output: 31
  