function getComputerChoice(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  const formatPlayer = playerSelection.toLowerCase();
  const formatComputer = computerSelection.toLowerCase();

  if (formatComputer === formatPlayer) {
      return "Draw!";
  } else {
      if (formatComputer === "rock" && formatPlayer === "paper") {
          return "You Won! Paper beats Rock";
      } else if (formatComputer === "paper" && formatPlayer === "scissors") {
          return "You Won! Scissors beats Paper";
      } else if (formatComputer === "scissors" && formatPlayer === "rock") {
          return "You Won! Rock beats Scissors";
      } else if (formatComputer === "paper" && formatPlayer === "rock") {
          return "You Lose! Paper beats Rock";
      } else if (formatComputer === "scissors" && formatPlayer === "paper") {
          return "You Lose! Scissors beats Paper";
      } else if (formatComputer === "rock" && formatPlayer === "scissors") {
          return "You Lose! Rock beats Scissors";
      }
  }
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
      const playerSelection = prompt(`Round ${round}: Your Choice (Rock, Paper, Scissors): `);
      const computerSelection = getComputerChoice(["Rock", "Paper", "Scissors"]);

      const result = playRound(playerSelection, computerSelection);
      console.log(result);

      if (result.includes("You Won")) {
          playerScore++;
      } else if (result.includes("You Lose")) {
          computerScore++;
      }
  }


  console.log(`\nFinal Score - Player: ${playerScore}, Computer: ${computerScore}`);
  if (playerScore > computerScore) {
      console.log("Congratulations! You are the winner!");
  } else if (playerScore < computerScore) {
      console.log("Sorry, you lost. Better luck next time!");
  } else {
      console.log("It's a tie! Good game!");
  }
}


playGame();