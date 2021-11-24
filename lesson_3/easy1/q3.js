// Check whether the following object has an entry for Spot
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

console.log(ages.hasOwnProperty('Spot'));
// Limits the check to the object's own properties, ignoring prototypes
console.log('Spot' in ages);
// Includes a check of the prototype properties as well
