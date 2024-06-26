//Rock-Paper-Scissors Game

//generate computer choice
function getComputerChoice(){
    const randNum = Math.random()*1;
    if (randNum < 0.33) {
        return "rock";
    } else if (randNum < 0.66){
        return "paper";
    } else {
        return "scissors";
    }
}

// return human Input
function getHumanChoice(){
    humanChoice = prompt("Enter Rock, Paper, or Scissors");
    return (humanChoice)   ;
}




let humanScore = 0 ; 
let computerScore = 0 ;

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if ((humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")){
            console.log("You Win!");
            humanScore++;
        } else if (humanChoice == computerChoice){
            console.log("It's a tie!")
        } else if (humanChoice == "scissors" && computerChoice == "rock"){
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        } else if (humanChoice == "rock" && computerChoice == "paper"){
            console.log("You lose! Paper beats Rock");
            computerScore++;
        } else if (humanChoice == "paper" && computerChoice == "scissors"){
            console.log("You lose! Scissors beats Paper");
            computerScore++;
        } else {
            console.log("invalid choice! Enter the right format");
        }

}