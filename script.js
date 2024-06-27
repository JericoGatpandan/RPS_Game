//Rock-Paper-Scissors Game

const rockbtn = document.querySelector("#rock");
const paperbtn = document.querySelector("#paper");
const scissorsbtn = document.querySelector("#scissors");
const body = document.body;


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


rockbtn.addEventListener("click", function(){
    playRound("rock", getComputerChoice());
});
paperbtn.addEventListener("click", function(){
    playRound("paper", getComputerChoice());
});
scissorsbtn.addEventListener("click", function(){
    playRound("scissors", getComputerChoice());
});




let humanScore = 0 ; 
let computerScore = 0 ;

function playRound(humanChoice, computerChoice){
    const win = document.createElement("p");
    if ((humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")){
            
            win.textContent = "You Win!";
            body.append(win);
            humanScore++;
        } else if (humanChoice == computerChoice){
            console.log("It's a tie!")
        } else if (humanChoice == "scissors" && computerChoice == "rock"){
            win.textContent = "You lose! Rock beats Scissors";
            body.append(win);
            computerScore++;
        } else if (humanChoice == "rock" && computerChoice == "paper"){
            win.textContent = "You lose! Paper beats Rock";
            body.append(win);
            computerScore++;
        } else if (humanChoice == "paper" && computerChoice == "scissors"){
            win.textContent = "You lose! Scissors beats Paper";
            body.append(win);
            computerScore++;
        } else {
            console.log("invalid choice! Enter the right format");
        }

}



// for (i = 0; i < 5; i++){
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
    
//     playRound(humanSelection, computerSelection);
//     }
    
    if (humanScore > computerScore){
        console.log("You win!")
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
    } else if (humanScore < computerScore){
        console.log("You lose!")
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
    }
    
    
    