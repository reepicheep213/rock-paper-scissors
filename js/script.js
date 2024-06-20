// Step 2: Write the logic to get the computer choice
// Get a random value among rock, paper, and scissors

function getComputerChoice() {
  const randomNumber = (Math.random() * 3);
  if (randomNumber >= 2) {
    return "Rock";
  } else if (randomNumber >= 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}
// console.log(getComputerChoice()); // tested 


// Step 3: Write the logic to get the human choice
// When the user inputs a value
// Get one of the valid choices depending on the user's input

function getHumanChoice() {
  const userWeapon = prompt("Choose your weapon: Rock, Paper, or Scissors").toLowerCase();
  if (userWeapon == "rock") {
    return "Rock";
  } else if (userWeapon == "paper") {
    return "Paper";
  } else if (userWeapon == "scissors") {
    return "Scissors";
  } else {
    return "Invalid";
  }
}

// console.log(getHumanChoice()); // tested


// Step 4: Declare the players score variables
// Keep track of the user and computer scores using variables

const humanScore = 0;
const computerScore = 0;

// Step 5: Write the logic to play a single round
// Take human and computer choices as arguments
// Run a single round
// Increment the round winner's score
// Log a winner announcement

function playRound(humanChoice, computerChoice) {
  console.log("You chose " + humanChoice + "\nComputer chose " + computerChoice);
  if (humanChoice == "Rock") {
    if (computerChoice == "Scissors") {
      console.log("You win! Rock beats Scissors.");
    } else if (computerChoice == "Paper") {
      console.log("You lose! Paper beats Rock."); 
    } else {
      console.log("It's a tie.");
    };
  } else if (humanChoice == "Paper") {
    if (computerChoice == "Rock") {
      console.log("You win! Paper beats Rock.");
    } else if (computerChoice == "Scissors") {
      console.log("You lose! Scissors beats Paper."); 
    } else {
      console.log("It's a tie.");
    };
  } else if (humanChoice == "Scissors") {
    if (computerChoice == "Paper") {
      console.log("You win! Scissors beats Paper.");
    } else if (computerChoice == "Rock") {
      console.log("You lose! Rock beats Scissors."); 
    } else {
      console.log("It's a tie.");
    };
  };
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);