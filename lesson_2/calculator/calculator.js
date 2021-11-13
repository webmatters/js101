const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function isInvalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt('Welcome to Calculator!');

prompt('Enter the first number.');
let number1 = readline.question();

while (isInvalidNumber(number1)) {
  prompt('Please enter a valid number.');
  number1 = readline.question();
}

prompt('Enter the second number.');
let number2 = readline.question();

while (isInvalidNumber(number2)) {
  prompt('Please enter a valid number.');
  number2 = readline.question();
}

prompt(
  'What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide'
);
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must choose 1, 2, 3 or 4');
  operation = readline.question();
}

let result;

switch (operation) {
  case '1':
    result = +number1 + +number2;
    break;
  case '2':
    result = +number1 - +number2;
    break;
  case '3':
    result = +number1 * +number2;
    break;
  case '4':
    result = +number1 / +number2;
    break;
  default:
    result = 'Invalid numbers provided.';
}

prompt(`The result is ${result}`);
