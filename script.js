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

function getHumanChoice() {
  let playerChoice = prompt("Choose one: Rock, Paper or Scissors: ");
  return playerChoice;
}

