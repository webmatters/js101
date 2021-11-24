console.log(false == '0');
console.log(false === '0');
// true - the non-strict equality operator coerces false to 0 and '0' to 0
// false - the strict equality operator checks for equality of types and values
