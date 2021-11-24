// => The munsters are creepy and spooky.
let munstersDescription = 'the Munsters are CREEPY and Spooky.';
let munstersCapitalized =
  munstersDescription[0].toUpperCase() +
  munstersDescription.slice(1).toLowerCase();

console.log(munstersCapitalized);

munstersDescription[0].toUpperCase() +
  munstersDescription.slice(1).toLowerCase();
console.log(munstersDescription);
// Since strings can't be mutated in place, this code is not valid.
// The value of munstersDescription is unchanged.

munstersDescription =
  munstersDescription[0].toUpperCase() +
  munstersDescription.slice(1).toLowerCase();
console.log(munstersDescription);
// Reassigning a new value to the same string is allowed.
// However, it is a completely new string that is being assigned.
