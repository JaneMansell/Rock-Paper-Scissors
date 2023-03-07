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

function game(playerSelection) {
    
    let computerSelection;
    let message;
    
    winningScore = 5;
    let newPlayerScore =0;
    let newComputerScore =0;

    computerSelection = getComputerChoice();
    result = playRound(playerSelection,computerSelection);
    switch (result) {
        case 1:
            message = "Computer chose " + computerSelection + " so you win! " + playerSelection + " " + "beats " + computerSelection;
            newPlayerScore++;
            break;
        case -1:
            message = "Computer chose " + computerSelection + " so you lose! " + computerSelection + " " + "beats " + playerSelection;
            newComputerScore++;
            break; 
        default:
            message = "No winner! We both chose " + playerSelection;
    }

    console.log(message);
    // Add message to webpage
    const resultsBlock = document.querySelector('.resultsBlock');
    if (document.querySelector('.resultsMessage') !== 'null') {
        resultsBlock.removeChild(resultsBlock.lastChild);
    }
    const resultsMessage = document.createElement('div');
    resultsMessage.classList.add('resultsMessage');
    resultsMessage.textContent = message;
    resultsBlock.appendChild(resultsMessage);

    let playerResults = document.querySelector('.playerResults');
    let oldPlayerResult = parseInt(playerResults.textContent);
    let newPlayerResult = oldPlayerResult + newPlayerScore;
    playerResults.textContent = newPlayerResult;

    let computerResults = document.querySelector('.computerResults');
    let oldComputerResult = parseInt(computerResults.textContent);
    let newComputerResult = oldComputerResult + newComputerScore;
    computerResults.textContent = newComputerResult;

    console.log(newPlayerResult, newComputerResult);

    function winningMessage(message) {
        const finalResultMessage = document.createElement('div');
        finalResultMessage.classList.add('finalResultMessage');
        finalResultMessage.textContent = message;
        resultsBlock.appendChild(finalResultMessage);
        const replay = document.createElement('button');
        replay.classList.add('replayButton');
        replay.textContent = "Click to play again";
        finalResultMessage.appendChild(replay);
        removeListener(playButtons);
        activateReplay();
    }
 
    if (newComputerResult === winningScore) {
        message = "Sorry, you lost overall!";
        winningMessage(message);
        }
    else if (newPlayerResult === winningScore) {
        message = "Congratulations, you are the overall winner!";
        winningMessage(message);
        }
    console.log(message);
}

function activateReplay() {
    const replayButton = document.querySelector('.replayButton');
    replayButton.addEventListener('click',() => {
        console.log("Should be reloading");
        location.reload();
    });
}

function listener() {
    game(this.id);   
}

function removeListener(playButtons) {
    playButtons.forEach((button) => {
        button.removeEventListener('click', listener);
    });
    console.log("event listener disabled");
}

const playButtons = document.querySelectorAll('.playButton');
playButtons.forEach((button) => {
    button.addEventListener('click', listener);
});

