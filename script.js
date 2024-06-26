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
