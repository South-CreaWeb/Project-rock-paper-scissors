/**
 * Create a random choice for computer
 * @returns {String}
 */
function getComputerChoice(){

    let computerAnswer = Math.floor(Math.random() * 3);

    if(computerAnswer === 2) {
        computerAnswer = 'rock';
        console.log('rock');
    } else if(computerAnswer === 1){
        computerAnswer = 'paper';
        console.log('paper');
    }else{
        computerAnswer = 'scissors';
        console.log('scissors');
    };

    return computerAnswer;
}

let responseComputer = getComputerChoice();


/**
 * Create a response for the player 
 * @param {String} response 
 * @returns {String}
 */
function getHumanChoice(){

    let response = prompt(`Entrez l'une de ces trois valeurs: Rock, Paper or Scissors`).toLowerCase();

    return response;
};

let responseHuman = getHumanChoice();


/**
 * Create a game with 5 round
 */
function playGame() {

        
    let humainScore = 0;
    let computerScore = 0;

    /**
    * Create the logic for playing
    * @param {String} responseHuman 
    * @param {String} responseComputer 
    */
    function playRound(responseHuman, responseComputer) {

        
        if(responseHuman === "rock" && responseComputer === "scissors" || responseHuman === "scissors" && responseComputer === "paper" || responseHuman === 'paper' && responseComputer === "rock") {
            humainScore++;
            console.log(`Vous avez gagné: ${responseHuman} bat ${responseComputer}, votre score est de: ${humainScore}`);
        } else if (responseHuman === responseComputer){
            console.log(`${responseHuman}, ${responseComputer}: égalité !`);
        } else {
            computerScore++;
            console.log(`L'ordinateur a gagner: le score ordinateur est de: ${computerScore}`);
        };

        getComputerChoice();
        getHumanChoice();

    };
    
    playRound(responseHuman, responseComputer);
    playRound(responseHuman, responseComputer);
    playRound(responseHuman, responseComputer);
    playRound(responseHuman, responseComputer);
    playRound(responseHuman, responseComputer);

    if(humainScore > computerScore) {
        console.log(`Bravo vous avez gagner ! Avec un score de ${humainScore}`);
    } else if(humainScore < computerScore) {
        console.log('Vous avez perdu !');
    } else {
        console.log('Égalité !');
    };
    
};

playGame();