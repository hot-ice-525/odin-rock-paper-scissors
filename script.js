function getComputerChoice() {
  // Generate a random number between 1 and 100
  let randomNum = Math.floor(Math.random() * 100) + 1;
  let computerChoice;

  // Convert randomNum to Rock, Paper and Scissors
  if (randomNum > 0 && randomNum <= 33) {
    computerChoice = "Rock";
  }
  else if (randomNum > 33 && randomNum <= 66) {
    computerChoice = "Paper";
  }
  else {
    computerChoice = "Scissors";
  }

  return computerChoice;
}

function playGame() {
  // Defining the score variables
  let computerScore = 0,
      playerScore = 0;

  const roundInfo = document.querySelector(".round-info");

  // Making a function for playing a single round
  function playRound(computerChoice, playerChoice) {
    // Making parameters case insensitive
    let newComputerChoice = computerChoice.toLowerCase();
    let newPlayerChoice = playerChoice.toLowerCase();

    // Building the logic
    roundInfo.innerHTML = "";
    if (newComputerChoice == "rock" && newPlayerChoice == "rock") {
      roundInfo.textContent = "Tie, Rock vs Rock";
    }
    else if (newComputerChoice == "rock" && newPlayerChoice == "paper") {
      roundInfo.textContent = "You win!, Paper beats Rock";
      playerScore += 1;
    }
    else if (newComputerChoice == "rock" && newPlayerChoice == "scissors") {
      roundInfo.textContent = "You lose, Rock beats Scissors";
      computerScore += 1;
    }
    else if (newComputerChoice == "paper" && newPlayerChoice == "rock") {
      roundInfo.textContent = "You lose, Paper beats Rock";
      computerScore += 1;
    }
    else if (newComputerChoice == "paper" && newPlayerChoice == "paper") {
      roundInfo.textContent = "Tie, Paper vs Paper";
    }
    else if (newComputerChoice == "paper" && newPlayerChoice == "scissors") {
      roundInfo.textContent = "You win!, Scissors beats Paper";
      playerScore += 1;
    }
    else if (newComputerChoice == "scissors" && newPlayerChoice == "rock") {
      roundInfo.textContent = "You win!, Rock beats Scissors";
      playerScore += 1;
    }
    else if (newComputerChoice == "scissors" && newPlayerChoice == "paper") {
      roundInfo.textContent = "You lose, Scissors beats Paper";
      computerScore += 1;
    }
    else if (newComputerChoice == "scissors" && newPlayerChoice == "scissors") {
      roundInfo.textContent = "Tie, Scissors vs Scissors";
    }

    return;
  }

  // Checking which button was clicked
  let playerSelection;
  const liveScores = document.querySelector(".live-score");

  const allOptions = document.querySelector(".options");
  allOptions.addEventListener("click", (e) => {
    liveScores.innerHTML = "";
    playerSelection = e.target.id;
    playRound(getComputerChoice(), playerSelection);
    liveScores.textContent = `Computer: ${computerScore} |||| Player: ${playerScore}`;

    // Checking for winner
    const finalResults = document.querySelector(".final-result");
    if (computerScore === 5 && playerScore < 5) {
      finalResults.textContent = "YOU LOSE";
      allOptions.style["pointer-events"] = "none";
    }
    else if (playerScore === 5 && computerScore < 5) {
      finalResults.textContent = "YOU WIN!";
      allOptions.style["pointer-events"] = "none";
    }
  });
}

playGame();
