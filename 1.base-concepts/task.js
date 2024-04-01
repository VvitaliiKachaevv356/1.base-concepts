"use strict";

// TASK 1
function solveEquation(a, b, c) {
  let roots = [];
  let discriminant = b ** 2 - 4 * a * c;
  if (discriminant < 0) {
    return roots;
  } else if (discriminant === 0) {
    let root = -b / (2 * a);
    roots.push(root)
    return roots;
  } else {
    let rootOne = (-b + Math.sqrt(discriminant)) / (2 * a);
    let rootTwo = (-b - Math.sqrt(discriminant)) / (2 * a);
    roots.push(rootOne);
    roots.push(rootTwo);

    return roots;
  }
}

// TASK 2

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (
    isNaN(percent) ||
    isNaN(contribution) ||
    isNaN(amount) ||
    isNaN(countMonths) ||
    percent < 0 ||
    contribution < 0 ||
    amount < 0 ||
    countMonths < 0
  ) {
    return false;
  }

  let monthlyInterestRate = percent / 100 / 12;
  let loanAmount = amount - contribution;
  let monthlyPayment = loanAmount * (monthlyInterestRate + monthlyInterestRate / (Math.pow(1 + monthlyInterestRate, countMonths) - 1));
  let totalAmount = monthlyPayment * countMonths;

  return +(totalAmount.toFixed(2));
}
