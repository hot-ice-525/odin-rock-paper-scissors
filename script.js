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

  // Making a function for playing a single round
  function playRound(computerChoice, playerChoice) {
    // Making parameters case insensitive
    let newComputerChoice = computerChoice.toLowerCase();
    let newPlayerChoice = playerChoice.toLowerCase();

    // Building the logic
    if (newComputerChoice == "rock" && newPlayerChoice == "rock") {
      console.log("Tie, Rock vs Rock");
    }
    else if (newComputerChoice == "rock" && newPlayerChoice == "paper") {
      console.log("You win!, Paper beats Rock");
      playerScore += 1;
    }
    else if (newComputerChoice == "rock" && newPlayerChoice == "scissors") {
      console.log("You lose, Rock beats Scissors");
      computerScore += 1;
    }
    else if (newComputerChoice == "paper" && newPlayerChoice == "rock") {
      console.log("You lose, Paper beats Rock");
      computerScore += 1;
    }
    else if (newComputerChoice == "paper" && newPlayerChoice == "paper") {
      console.log("Tie, Paper vs Paper");
    }
    else if (newComputerChoice == "paper" && newPlayerChoice == "scissors") {
      console.log("You win!, Scissors beats Paper");
      playerScore += 1;
    }
    else if (newComputerChoice == "scissors" && newPlayerChoice == "rock") {
      console.log("You win!, Rock beats Scissors");
      playerScore += 1;
    }
    else if (newComputerChoice == "scissors" && newPlayerChoice == "paper") {
      console.log("You lose, Scissors beats Paper");
      computerScore += 1;
    }
    else if (newComputerChoice == "scissors" && newPlayerChoice == "scissors") {
      console.log("Tie, Scissors vs Scissors");
    }

    return;
  }

  // Checking which button was clicked
  const allOptions = document.querySelector(".options");
  allOptions.addEventListener("click", (e) => {
    const playerSelection = e.target.id;
    playRound(getComputerChoice(), playerSelection);
  });

  // // Declaring the winner
  // console.log("Final Results: ")
  // if (computerScore > playerScore) {
  //   console.log("YOU LOSE");
  // }
  // else if (computerScore < playerScore) {
  //   console.log("YOU WIN!");
  // }
  // else {
  //   console.log("TIE");
  // }
}

playGame();
