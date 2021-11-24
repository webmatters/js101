let str1 =
  'Few things in life are as important as house training your pet dinosaur.';
let str2 = 'Fred and Wilma have a pet dinosaur named Dino.';

// String.prototype.includes
console.log(str1.includes('Dino'));
console.log(str2.includes('Dino'));

// String.prototype.match
console.log(str1.match('Dino') !== null); // false
console.log(str2.match('Dino') !== null); // true

// String.prototype.indexOf
console.log(str1.indexOf('Dino') > -1);
console.log(str2.indexOf('Dino') > -1);

// RegEx
let regEx = /Dino/;
console.log(regEx.test(str1));
console.log(regEx.test(str2));
