function getComputerChoice() {
  const min = 1;
  const max = 3;

  let compChoice = Math.floor(Math.random() * (max - min + 1)) + min;

  if (compChoice === 1) {
    return "Rock";
  } else if (compChoice === 2) {
    return "Paper";
  } else {
    return "Scissor";
  }
}
