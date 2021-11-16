const readline = require('readline-sync');

const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const ABBREVIATED_CHOICES = createArrayOfAbbreviations(VALID_CHOICES);

const WINNING_COMBOS = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['paper', 'spock'],
  spock: ['rock', 'scissors'],
};

let playerWinCount = 0;
let computerWinCount = 0;

function containsDupeFirstLetter(char, index, array) {
  let arrayToCheck = array.slice();
  arrayToCheck.splice(index, 1);
  return arrayToCheck.some(element => element[0] === char);
}

function createArrayOfAbbreviations(array) {
  return array.map((element, index) => {
    if (containsDupeFirstLetter(element[0], index, array)) {
      return element.slice(0, 2);
    } else {
      return element[0];
    }
  });
}

function getFullWord(word, array) {
  let fullWord = '';
  for (let element of array) {
    if (element.startsWith(word)) {
      fullWord = element;
    }
  }
  return fullWord;
}

function playerWins(choice, computerChoice) {
  let fullKey = getFullWord(choice, VALID_CHOICES);
  return WINNING_COMBOS[fullKey].includes(computerChoice);
}

function displayWinner(choice, computerChoice) {
  prompt(
    `You chose ${getFullWord(
      choice,
      VALID_CHOICES
    )}, computer chose ${computerChoice}`
  );

  if (playerWins(choice, computerChoice)) {
    prompt('You win!');
    displayWinCount('player');
  } else if (getFullWord(choice, VALID_CHOICES) === computerChoice) {
    prompt("It's a tie!");
    displayWinCount('tie');
  } else {
    prompt('Computer wins!');
    displayWinCount('computer');
  }
}

function displayWinCount(winner) {
  if (winner === 'player') {
    playerWinCount += 1;
  }

  if (winner === 'computer') {
    computerWinCount += 1;
  }

  prompt(`Player has ${playerWinCount} wins.`);
  prompt(`Computer has ${computerWinCount} wins.`);
}

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('Welcome to Rock, Paper, Scissors, Lizard, Spock!');
prompt('You may continue to play or exit after each round.');
prompt('Whoever gets 3 wins first is the Grand Winner!');

while (true) {
  prompt(`Enter your choice: ${VALID_CHOICES.join(', ')}`);
  prompt(
    `You may type the abbreviated version: ${ABBREVIATED_CHOICES.join(', ')}`
  );
  let choice = readline.question();

  while (
    !VALID_CHOICES.includes(choice) &&
    !ABBREVIATED_CHOICES.includes(choice)
  ) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  if (playerWinCount >= 3 || computerWinCount >= 3) {
    const winner = playerWinCount > computerWinCount ? 'Player' : 'Computer';
    prompt(`${winner} is the Grand Winner! Ending program.`);
    break;
  }

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}
