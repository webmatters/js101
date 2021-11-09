// PROBLEM 1
// Given two numbers
// Add number 1 to number 2

/*
START
  RETURN num1 + num2
END
*/

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
console.log(addTwoNumbers(2, 5));

// PROBLEM 2
// Given an array of strings
// Start with an empty string
// Iterate through the collection one by one
// for each iteration, concatenate the new string with the current string
// Return the resulting string

/*
START
# Given an array of strings
SET iterator = 1
SET result = ''

WHILE iterator <= length of array
  SET result = result + string
  iterator = iterator + 1

PRINT result

END
*/

function concatStrings(strings) {
  return strings.join('');
}
console.log(concatStrings(['a', 'b', 'c']));

// PROBLEM 3
// Problem Definition
// Function
// Accepts an array of integers
// Return a new array consisting of every other element from the array argument

// Given an array of integers
// Define a new empty array
// Iterate through the elements in the array, starting with the first element
// Push the first element and then every second element thereafter into the new array
// Return the new array

/*
START
#Given an array of integers
SET everyOther = []
SET iterator = 1

WHILE iterator <= length of array
  SET everyOther = everyOther + element
  iterator = iterator + 2

PRINT everyOther

END
*/

function everyOther(arr) {
  const everyOther = [];
  for (let i = 0; i < arr.length; i += 2) {
    everyOther.push(arr[i]);
  }

  return everyOther;
}

console.log(everyOther([1, 2, 3, 4, 5, 6]));
