// Step 2: Write the logic to get the computer choice

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

function getHumanChoice() {
  const userInput = prompt('Choose your weapon: Rock, Paper, or Scissors').toLowerCase();
  if (userInput == 'rock') {
    return 'rock';
  } else if (userInput == 'paper') {
    return 'paper';
  } else if (userInput == 'scissors') {
    return 'scissors';
  } else {
    return userInput;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice) {
    console.log('You chose ' + humanChoice + '.\nComputer chose ' + computerChoice+ '.');
    if (humanChoice === 'rock' && computerChoice === 'scissors') {
      ++humanScore;
      return console.log('You win! Rock beats scissors.');
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
      ++computerScore;
      return console.log('You lose! Paper beats rock.'); 
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
      ++humanScore;
      return console.log('You win! Paper beats rock.');
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
      ++computerScore;
      return console.log('You lose! Scissors beats paper.'); 
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
      ++humanScore;
      return console.log('You win! Scissors beats paper.');
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
      ++computerScore;
      return console.log('You lose! Rock beats scissors.');
    } else if (humanChoice === computerChoice) {
      return console.log('It\'s a tie.')
    }
  }
  playRound(humanSelection, computerSelection);
  console.log('You: ' + humanScore + ', Computer: ' + computerScore);

  for (let i = 0; i < 4; i++) {
    playRound(getHumanChoice(), getComputerChoice());
    console.log('You: ' + humanScore + ', Computer: ' + computerScore);
  }
  if (humanScore > computerScore) {
    console.log(`You won, ${humanScore} to ${computerScore}!`);
  } else if (humanScore < computerScore) {
    console.log(`The computer won, ${computerScore} to ${humanScore}!`);
  } else {
    console.log('The game ended in a tie. No winner!');
  }
}

playGame();