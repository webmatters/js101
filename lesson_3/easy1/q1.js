let numbers = [1, 2, 3];
numbers[6] = 5;
console.log(numbers);
console.log(numbers[4]);

// JS will add the number 5 at index 6
// It will have <empty items> at the index positions in between
// Trying to access any empty slots or indices that don't exist
// returns undefined, not an error.
