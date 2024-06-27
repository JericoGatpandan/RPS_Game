//Rock-Paper-Scissors Game

const rockbtn = document.querySelector("#rock");
const paperbtn = document.querySelector("#paper");
const scissorsbtn = document.querySelector("#scissors");
const body = document.body;
const humanChoiceImg = document.getElementById("human-choice-img");
const computerChoiceImg = document.getElementById("computer-choice-img");

//generate computer choice
function getComputerChoice() {
  const randNum = Math.random() * 1;
  if (randNum < 0.33) {
    return "rock";
  } else if (randNum < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

rockbtn.addEventListener("click", function () {
  playRound("rock", getComputerChoice());
});
paperbtn.addEventListener("click", function () {
  playRound("paper", getComputerChoice());
});
scissorsbtn.addEventListener("click", function () {
  playRound("scissors", getComputerChoice());
});

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  const choices = {
    rock: "/assets/fist.png",
    paper: "/assets/hand-paper.png",
    scissors: "/assets/scissors.png",
  };

  humanChoiceImg.src = choices[humanChoice];
  computerChoiceImg.src = choices[computerChoice];

  const win = document.querySelector("p");
  const hScore = document.getElementById("hScore");
  const cScore = document.getElementById("cScore");

  if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    win.textContent = "You Win!";
    win.style.color = "#F9F871";
    body.append(win);
    humanScore++;
  } else if (humanChoice == computerChoice) {
    win.textContent = "It's a tie!";
    body.append(win);
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    win.textContent = "You lose! Rock beats Scissors";
    win.style.color = "red";
    body.append(win);
    computerScore++;
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    win.textContent = "You lose! Paper beats Rock";
    win.style.color = "red";
    body.append(win);
    computerScore++;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    win.textContent = "You lose! Scissors beats Paper";
    win.style.color = "red";

    body.append(win);
    computerScore++;
  } else {
    console.log("invalid choice! Enter the right format");
  }

  hScore.textContent = `Human Score: ${humanScore}`;
  cScore.textContent = `Computer Score: ${computerScore}`;
  win.style.display = "flex";
  win.style.justifyContent = "center";
}

