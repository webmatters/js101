const readline = require('readline-sync');

console.log('Welcome to Calculator!');

console.log('Enter the first number.');
let number1 = +readline.question();

console.log('Enter the second number.');
let number2 = +readline.question();

console.log(
  'What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide'
);
let operation = readline.question();

let result;

switch (operation) {
  case '1':
    result = number1 + number2;
    break;
  case '2':
    result = number1 - number2;
    break;
  case '3':
    result = number1 * number2;
    break;
  case '4':
    result = number1 / number2;
    break;
  default:
    result = 'Invalid numbers provided.';
}

console.log(`The result is ${result}`);
