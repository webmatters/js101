const advice =
  'Few things in life are as important as house training your pet dinosaur.';

const goalString = 'Few things in life are as important as ';

const searchTerm = 'house';

const indexOfSearchTerm = advice.indexOf(searchTerm);

const shortenedSentence = advice.slice(0, indexOfSearchTerm);

console.log(shortenedSentence === goalString);

// More compact version:
console.log(advice.slice(0, advice.indexOf('house')));

// Expected return value:
// => 'Few things in life are as important as '
