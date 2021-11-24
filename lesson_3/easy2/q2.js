let numbers = [1, 2, 3, 4, 5];
console.log(numbers.slice().reverse());
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

console.log([...numbers].sort((num1, num2) => num2 - num1));
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

let reversedNumbers = [];
numbers.forEach(num => {
  reversedNumbers.unshift(num);
});
console.log(reversedNumbers);
console.log(numbers);
