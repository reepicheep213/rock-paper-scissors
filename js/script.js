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
  const userNumber = prompt("Enter \"1\" for Rock, \"2\" for Paper, or \"3\" for Scissors");
  if (userNumber == 1) {
    return "Rock";
  } else if (userNumber == 2) {
    return "Paper";
  } else if (userNumber == 3) {
    return "Scissors";
  } else {
    return "Invalid";
  }
}

console.log(getHumanChoice()); // tested