let humanScore = 0; //Variables for the overall score
let computerScore = 0;

const choices = new Map([
    [1, 'Rock'],
    [2, 'Paper'],
    [3, 'Scissors'],
]);

function getComputerChoice(){
    const minIntInclusive = 1;
    const maxIntInclusive = 3;
    const randomInteger = Math.floor(Math.random() * (maxIntInclusive - minIntInclusive +1)) + minIntInclusive
    //Creates the key that'll be chosen
    const computerChoice = choices.get(randomInteger);
    return computerChoice; //returns the value assigned to that key, in this case PPT
}

function getHumanChoice(){
    let humanChoice = prompt("Pick: Rock, Paper or Scissors!");
    return humanChoice;
}

function playRound(hChoice, computerChoice){
    const humanChoice = hChoice.charAt(0).toUpperCase() + hChoice.slice(1).toLowerCase();
    if(humanChoice == 'null'){ //Initial comparison
        return;
    }

    if(humanChoice == computerChoice){
        console.log(computerChoice," vs ",humanChoice);
        console.log("You both tied! ");
    }
    
    if(humanChoice == 'Rock' && computerChoice == 'Paper'){
        console.log(computerChoice," vs ",humanChoice);
        console.log('You lose! Paper beats Rock');
        computerScore++;
    }
    if(humanChoice == 'Scissors' && computerChoice == 'Rock'){
        console.log(computerChoice," vs ",humanChoice);
        console.log('You lose! Rock beats Scissors');
        computerScore++;
    }
    if(humanChoice == 'Paper' && computerChoice == 'Scissors'){
        console.log(computerChoice," vs ",humanChoice);
        console.log('You lose! Scissors beats Paper');
        computerScore++;
    }

    if(humanChoice == 'Rock' && computerChoice == 'Scissors'){
        console.log(computerChoice," vs ",humanChoice);
        console.log('You won! Rock beats Scissors');
        humanScore++;
    }
    if(humanChoice == 'Paper' && computerChoice == 'Rock'){
        console.log(computerChoice," vs ",humanChoice);
        console.log('You won! Paper beats Rock');
        humanScore++;
    }
    if(humanChoice == 'Scissors' && computerChoice == 'Paper'){
        console.log(computerChoice," vs ",humanChoice);
        console.log('You won! Scissors beats Paper');
        humanScore++;
    }

}

function playGame(){
    for(let i=0; i<5; i++){
        console.log(playRound(getHumanChoice(), getComputerChoice()));
        console.log('C:', computerScore, '- H:', humanScore);
    }
    if(humanScore == computerScore){
        console.log('You both tied at the end! GG WP');
    }
    if(humanScore > computerScore){
        console.log('You won the game! GG WP');
    }
    if(humanScore < computerScore){
        console.log('You lost the whole game! GG EZ');
    }
}

console.log(playGame());


