// Determine whether a given string ends with an exclamation mark

let str1 = 'Come over here!'; // true
let str2 = "What's up, Doc?"; // false

function isLastCharExclamation(str) {
  return str[str.length - 1] === '!';
}

console.log(isLastCharExclamation(str1));
console.log(isLastCharExclamation(str2));

// Alternatively, use JS built-in String prototype method
console.log(str1.endsWith('!'));
console.log(str2.endsWith('!'));
