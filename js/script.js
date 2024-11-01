function getComputerChoice() {
  const randomNumber = (Math.random() * 3);
  if (randomNumber >= 2) {
    return "rock";
  } else if (randomNumber >= 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

let humanChoice;

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let tieScore = 0;
  function playRound(humanChoice, computerChoice) {
    choice.textContent = "You chose " + 
      humanChoice + 
      ".\nComputer chose " + 
      computerChoice + 
      ".";
    if (humanChoice === "rock" && computerChoice === "scissors") {
      ++humanScore;
      result.textContent = "You win! Rock beats scissors.";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      ++computerScore;
      result.textContent = "You lose! Paper beats rock."; 
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      ++humanScore;
      result.textContent = "You win! Paper beats rock.";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      ++computerScore;
      result.textContent = "You lose! Scissors beats paper."; 
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      ++humanScore;
      result.textContent = "You win! Scissors beats paper.";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      ++computerScore;
      result.textContent = "You lose! Rock beats scissors.";
    } else if (humanChoice === computerChoice) {
      ++tieScore;
      result.textContent = "It\'s a tie.";
    } 
  }

  let ui = document.querySelector("#ui");
  const result = document.querySelector("#result");

    ui.addEventListener("click", (event) => {
      let target = event.target;

      switch(target.id) {
        case "rock":
          humanChoice = "rock";
          playRound(humanChoice,getComputerChoice());
          break;
        case "paper":
          humanChoice = "paper";
          playRound(humanChoice,getComputerChoice());
          break;
        case "scissors":
          humanChoice = "scissors";
          playRound(humanChoice,getComputerChoice());
          break;
      }

      score.textContent = "You: " + 
        humanScore + ", Computer: " + 
        computerScore + ", Tie: " + 
        tieScore;

      const maxScore = 5;
      if (humanScore === maxScore || computerScore === maxScore) {
        let winner = humanScore === maxScore ? "You win!" : "Computer wins!";
        result.textContent = `Game over. ${winner}`;
      }
    });
}

playGame();