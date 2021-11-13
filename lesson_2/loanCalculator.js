const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function isInvalidNumber(number) {
  return number.trim() === '' || Number.isNaN(+number) || +number < 0;
}

let repeat = true;

prompt(`This program will calculate your amortized monthly loan payment.`);

while (repeat) {
  prompt(`Enter the loan amount in dollars (no $ or commas).`);
  let loanAmount = readline.question();
  while (isInvalidNumber(loanAmount)) {
    prompt('Please enter a valid loan amount as a positive number.');
    loanAmount = readline.question();
  }

  prompt(`Enter the Annual Percentage Rate (APR) as a %.`);
  prompt(`Don't divide by 100 first.`);
  let apr = readline.question();
  while (isInvalidNumber(apr)) {
    prompt(`Please enter a valid APR as a non-negative number.`);
    apr = readline.question();
  }
  let monthlyRate = +apr / 12 / 100;

  prompt(`Enter the loan duration in months.`);
  let loanMonths = readline.question();
  while (loanMonths === '0' || isInvalidNumber(loanMonths)) {
    prompt('Please enter a valid loan duration as a positive number.');
    loanMonths = readline.question();
  }

  let monthlyPayment = 0;
  if (monthlyRate === 0) {
    monthlyPayment = +loanAmount / +loanMonths;
  } else {
    monthlyPayment =
      +loanAmount *
      (+monthlyRate / (1 - Math.pow(1 + +monthlyRate, -+loanMonths)));
  }

  prompt(`Your monthly loan payment is $${monthlyPayment.toFixed(2)}.`);

  prompt(`Enter 'y' to calculate another loan payment or 'n' to quit.`);
  let answer = readline.question().trim()[0].toLowerCase();
  repeat = answer === 'y';
}
