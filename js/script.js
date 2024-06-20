// Step 2: Write the logic to get the computer choice
// Get a random value among rock, paper, and scissors

function getComputerChoice() {
  const randomNumber = (Math.random() * 3);
  if (randomNumber >= 2) {
    return 'rock';
  } else if (randomNumber >= 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}
// console.log(getComputerChoice()); // tested 


// Step 3: Write the logic to get the human choice
// When the user inputs a value
// Get one of the valid choices depending on the user's input

function getHumanChoice() {
  const userWeapon = prompt('Choose your weapon: Rock, Paper, or Scissors').toLowerCase();
  if (userWeapon == 'rock') {
    return 'rock';
  } else if (userWeapon == 'paper') {
    return 'paper';
  } else if (userWeapon == 'scissors') {
    return 'scissors';
  } else {
    return userWeapon;
  }
}

// console.log(getHumanChoice()); // tested


// Step 4: Declare the players score variables
// Keep track of the user and computer scores using variables

let humanScore = 0;
let computerScore = 0;

// Step 5: Write the logic to play a single round
// Take human and computer choices as arguments
// Run a single round
// Increment the round winner's score
// Log a winner announcement

function playRound(humanChoice, computerChoice) {
  console.log('You chose ' + humanChoice + '.\nComputer chose ' + computerChoice+ '.');
  if (humanChoice === 'rock' && computerChoice === 'scissors') {
    console.log('You win! Rock beats scissors.');
    ++humanScore;
  } else if (humanChoice === 'rock' && computerChoice === 'paper') {
    console.log('You lose! Paper beats rock.'); 
    ++computerScore;
  } else if (humanChoice === 'paper' && computerChoice === 'rock') {
    console.log('You win! Paper beats rock.');
    ++humanScore;
  } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
    console.log('You lose! Scissors beats Paper.');
    ++computerScore; 
  } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    console.log('You win! Scissors beats paper.');
    ++humanScore;
  } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
    console.log('You lose! Rock beats scissors.');
    ++computerScore; 
  } else if (humanChoice === computerChoice) {
    console.log('It\'s a tie.')
  } else {
    console.log('"' + humanSelection + '"' + ' is invalid. You lose by default.');
    ++computerScore;
  }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);