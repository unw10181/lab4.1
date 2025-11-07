function formatFullName(firstName, lastName) {
  if (firstName == "" || lastName == "") {
    return "Invalid name input.";
  }

  properFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  properLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
  return properFirstName + " " + properLastName;
}

console.log(formatFullName("daniel", "williams"));

function calculateTotalCost(price, quantity, taxRate, discount = 0) {
  if (
    typeof price === "number" &&
    typeof quantity === "number" &&
    typeof taxRate === "number"
  ) {
    let totalCost;
    totalCost = price * quantity;
    totalCost -= totalCost * discount;
    totalCost *= taxRate + 1;
    return "Your total is: " + totalCost;
  } else {
    return "Invalid input";
  }
}

console.log(calculateTotalCost(6, 3, 1, 0.2));

function checkEligibility(age, isEmployed) {
  if (age >= 18 && isEmployed == true) {
    return "You are eligible";
  } else if (age >= 18 && isEmployed == false) {
    return "You are conditionally eligible";
  } else {
    return "You are not eligible";
  }
}

// console.log(checkEligibility(20, false));
// console.log(checkEligibility(21, true));

// How did you approach creating more flexible functions with parameters?
// I approached it by assessing the parameter type and what it would be used for in function.
// What challenges did you face while incorporating conditional logic in your functions?
// I found that it was very easy to make mistakes in conditional logic so I had to be careful.
// How does refactoring improve the readability and maintainability of your code?
// It reduces the lines of code and made logic simpler to follow.
