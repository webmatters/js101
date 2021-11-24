let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

let additionalAges = { Marilyn: 22, Spot: 237 };

Object.assign(ages, additionalAges);
console.log(ages);
// Copies properties to a target object (first argument) from source objects
// (subsequent objects). Returns the original modified object.

ages = { ...ages, ...additionalAges };
console.log(ages);
// Use of the spread operator to destructure properties of objects
// and reassign them to an object literal. Considered more modern.
// Is it still the same original object? It must be.
