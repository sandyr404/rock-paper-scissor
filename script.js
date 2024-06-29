// TO GET COMPUTER CHOICE

function getComputerChoice() {
  const min = 1;
  const max = 3;

  let compChoice = Math.floor(Math.random() * (max - min + 1)) + min;

  if (compChoice === 1) {
    return "ROCK";
  } else if (compChoice === 2) {
    return "PAPER";
  } else {
    return "SCISSOR";
  }
}

// TO GET HUMAN CHOICE

function getHumanChoice() {
  let choice = prompt(`Enter a choice "Rock" "Paper" or "Scissor": `);
  choice = choice.toUpperCase();
  if (choice == "ROCK") {
    return choice;
  } else if (choice == "PAPER") {
    return choice;
  } else if (choice == "SCISSOR") {
    return choice;
  }
}
// SCORES

let humanScore = 0;
let computerScore = 0;
let result;

// GAMEPLAY LOGIC

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice == "ROCK" && computerChoice == "ROCK") ||
    (humanChoice == "PAPER" && computerChoice == "PAPER") ||
    (humanChoice == "SCISSOR" && computerChoice == "SCISSOR")
  ) {
    result = `Its a tie! ${humanChoice} = ${computerChoice}`;

    console.log(result);
    console.log(
      `Human Score : ${humanScore} || Computer Score : ${computerScore}`
    );
  } else if (
    (humanChoice == "ROCK" && computerChoice == "PAPER") ||
    (humanChoice == "PAPER" && computerChoice == "SCISSOR") ||
    (humanChoice == "SCISSOR" && computerChoice == "ROCK")
  ) {
    result = `You lose. ${computerChoice} beats ${humanChoice}`;

    computerScore = computerScore + 1;
    console.log(result);
    console.log(
      `Human Score : ${humanScore} || Computer Score : ${computerScore}`
    );
  } else if (
    (computerChoice == "ROCK" && humanChoice == "PAPER") ||
    (computerChoice == "PAPER" && humanChoice == "SCISSOR") ||
    (computerChoice == "SCISSOR" && humanChoice == "ROCK")
  ) {
    result = `You won. ${humanChoice} beats ${computerChoice}`;
    humanScore = humanScore + 1;
    console.log(result);
    console.log(
      `Human Score : ${humanScore} || Computer Score : ${computerScore}`
    );
  } else {
    console.log("Enter a valid choice.");
    console.log(
      `Human Score : ${humanScore} || Computer Score : ${computerScore}`
    );
  }
}

const humanSelection = getHumanChoice;
const computerSelection = getComputerChoice;

// TO PLAY 5 TIMES

function playGame() {
  humanScore = humanScore;
  computerScore = computerScore;
  return playRound(humanSelection(), computerSelection());
}

playGame();
playGame();
playGame();
playGame();
playGame();

// to announce winner

if (humanScore > computerScore) {
  console.log("Final Result : You are Winner.");
} else if (humanScore < computerScore) {
  console.log("Final Result : Computer is winner.");
} else {
  console.log("Final Result : Its a tie...");
}
