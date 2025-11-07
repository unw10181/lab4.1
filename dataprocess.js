function formatFullName(firstName, lastName) {
  if (firstName == "" || lastName == "") {
    return "Invalid name input.";
  }

  properFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  properLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
  return properFirstName + " " + properLastName;
}

//console.log(formatFullName("daniel", "williams"));

function calculateTotalCost(price, quantity, taxRate) {
  if (
    typeof price === "number" &&
    typeof quantity === "number" &&
    typeof taxRate === "number"
  ) {
    let totalCost;
    totalCost = price * quantity;
    totalCost *= taxRate + 1;
    return + "Your total is: " + totalCost;
  } else {
    return "Invalid input";
  }
}

function calculateTotalCost(price, quantity, taxRate, discount) {
  if (
    typeof price === "number" &&
    typeof quantity === "number" &&
    typeof taxRate === "number" &&
    typeof discount === "number"
  ) {
    let totalCost;
    totalCost = price * quantity;
    totalCost -= totalCost * discount
    totalCost *= taxRate + 1;
    return totalCost;
  } else {
    return "Invalid input";
  }
}

console.log(calculateTotalCost(6, 3, 1, .2));

function checkEligibility(age, isEmployed) {
  if (age >= 18 && isEmployed == true) {
    return "You are eligible";
  } else if (age >= 18 && isEmployed == false) {
    return "You are conditionally eligible";
  } else {
    return "You are not eligible";
  }
}
console.log(checkEligibility(20, false));
