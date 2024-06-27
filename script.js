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

    const win = document.querySelector("p");
    const hScore = document.getElementById("hScore");
    const cScore = document.getElementById("cScore")
    
    if ((humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")){

            win.textContent = "You Win!";
            body.append(win);
            humanScore++;
        } else if (humanChoice == computerChoice){
            win.textContent = "It's a tie!" ;
            body.append(win)
        } else if (humanChoice == "scissors" && computerChoice == "rock"){
            win.textContent = "You lose! Rock beats Scissors";
            body.append(win);
            computerScore++;
        const score = document.querySelector("h4");

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
     
       hScore.textContent = `Human Score: ${humanScore}`;
       cScore.textContent = `Computer Score: ${computerScore}`
       
}



// for (i = 0; i < 5; i++){
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
    
//     playRound(humanSelection, computerSelection);
//     }
    
   
       
       
   
    
    
    
    