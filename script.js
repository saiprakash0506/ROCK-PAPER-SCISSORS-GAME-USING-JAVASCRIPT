function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
      return "It's a tie!";
  }

  if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "scissors" && computerChoice === "paper") ||
      (userChoice === "paper" && computerChoice === "rock")
  ) {
      return "You win!";
  } else {
      return "Computer wins!";
  }
}

function playGame(userChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(userChoice, computerChoice);


  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `
      You chose <span style="color: yellow;">${userChoice.toUpperCase()}</span>,
      Computer chose <span style="color: yellow;">${computerChoice.toUpperCase()}</span>.
      <br><center><span style="color: cyan;">${result}</span></center>
  `;
}


document.getElementById("rock").addEventListener("click", () => playGame("rock"));
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));
