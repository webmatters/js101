const readline = require('readline-sync');

const MESSAGES = require('./messages.json');
const LANGUAGE = 'en';

function prompt(message) {
  let output = messages(message, LANGUAGE);
  console.log(`=> ${output}`);
}

function messages(message, language = 'en') {
  return MESSAGES[message][language]
    ? MESSAGES[message][language]
    : MESSAGES[message]['en'];
}

function isInvalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

let repeat = 'y';

prompt('welcome');

while (repeat === 'y') {
  prompt('enterFirst');
  let number1 = readline.question();

  while (isInvalidNumber(number1)) {
    prompt('invalidNumber');
    number1 = readline.question();
  }

  prompt('enterSecond');
  let number2 = readline.question();

  while (isInvalidNumber(number2)) {
    prompt('invalidNumber');
    number2 = readline.question();
  }

  prompt('operation');
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('invalidOperation');
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

  console.log(`=> The result is ${result}.`);

  prompt('repeat');
  let answer = readline.question();
  repeat = answer.trim()[0].toLowerCase();
}
