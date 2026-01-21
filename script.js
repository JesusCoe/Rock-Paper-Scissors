const game = () => {
let humanScore = 0; //Variables for the overall score
let computerScore = 0;

    const playGame = () => {
        const rockBtn = document.querySelector('.Rock');
        const paperBtn = document.querySelector('.Paper');
        const scissorsBtn = document.querySelector('.Scissors');
        const playerOptions = [rockBtn, paperBtn, scissorsBtn];

        function getComputerChoice(){
        const choices = new Map([
            [1, 'Rock'],
            [2, 'Paper'],
            [3, 'Scissors'],
        ]);

            const minIntInclusive = 1;
            const maxIntInclusive = 3;
            const randomInteger = Math.floor(Math.random() * (maxIntInclusive - minIntInclusive +1)) + minIntInclusive
            //Creates the key that'll be chosen
            const computerChoice = choices.get(randomInteger);
            return computerChoice; //returns the value assigned to that key, in this case PPT
        }

        playerOptions.forEach(option =>{
            option.addEventListener('click', function(){
                winner(this.innerText, getComputerChoice());
            })
        })
        
    }

    const winner = (player, computer) => {
        const result = document.querySelector('result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');

        if(player === computer){
            result.textContent('Tie!, you both picked ${computer}')
        }
    }

}




