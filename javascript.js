function getComputerChoice() {
    let randomNum = Math.floor(Math.random()*3)+1;
    let randomChoice;
    switch (randomNum) {
        case 1:
            randomChoice = "rock";
            break;
        case 2:
            randomChoice = "paper";
            break;
        case 3:
            randomChoice = "scissors";
            break;
    }
    
    return randomChoice
}

function playRound (playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock") {
        if (computerSelection === "paper"){
            return (-1);
        }
        else if (computerSelection === "rock"){
            return(0);
        }
        else {
            return(1);
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock"){
            return(1);
        }
        else if (computerSelection === "paper"){
            return(0);
        }
        else {
            return(-1);
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock"){
            return(-1);
        }
        else if (computerSelection === "scissors"){
            return(0);
        }
        else {
            return(1);
        }
    }
    else{
        return "Invalid input. Choose rock, paper or scissors."
    }
}

function game() {
    let playerSelection;
    let computerSelection;
    let message;
    let score = 0;
    for (let i=0; i<5; i++) {
        playerSelection = prompt("Choose rock, paper or scissors.");
        computerSelection = getComputerChoice();
        result = playRound(playerSelection,computerSelection);
        switch (result) {
            case 1:
                message = "You win! " + playerSelection + " " + "beats " + computerSelection;
                break;
            case -1:
                message = "You lose! " + computerSelection + " " + "beats " + playerSelection;
                break; 
            default:
                message = "No winner! We both chose " + playerSelection;
        }
        score = score + result;
        console.log(message);

    }
    if (score<0) {
        message = "Sorry, you lost overall!";
    }
    else if (score>0) {
        message = "Congratulations, you are the overall winner!";
    }
    else{
        message = "It's a draw!";
    }
    console.log(message);
}

game();