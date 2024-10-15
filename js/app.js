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


/**
 * Create a response for the player 
 * @returns {String}
 */
function getHumanChoice(){

    let response = prompt(`Entrez l'une de ces trois valeurs: Rock, Paper or Scissors`).toLowerCase();

    if(response === null) {

        response = prompt(`Entrez l'une de ces trois valeurs: Rock, Paper or Scissors`).toLowerCase();
    } else {

        return response;
    }

    
};


/**
 * Create a game with 5 round
 */
function playGame() {

        
    let humainScore = 0;
    let computerScore = 0;

    /**
    * Create the logic for playing
    * 
    */
    function playRound() {

        let responseHuman = getHumanChoice();
        let responseComputer = getComputerChoice();
        console.log(responseComputer)

        

        const humanPattern = (responseHuman === 'rock' && responseComputer === 'scissors') || (responseHuman === 'scissors' && responseComputer === 'paper') || (responseHuman === 'paper' && responseComputer === 'rock')
        
       if(humanPattern) {
        console.log(responseHuman, responseComputer)
        humainScore++
        console.log(`Vous avez marqué ${humainScore} points !`)
       } else if(responseHuman == responseComputer) {
            console.log(`${responseHuman} = ${responseComputer} : Égalité !!`)
       } else {
        console.log(responseHuman, responseComputer)
        computerScore++
        console.log(`L'ordinateur a marqué ${computerScore} point`)
       }

    };

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    

    if(humainScore > computerScore) {
        console.log(`Bravo vous avez gagner ! Avec un score de ${humainScore} contre ${computerScore}`);
    } else if(humainScore < computerScore) {
        console.log(`Vous avez perdu ! Résultat: ${computerScore} contre ${humainScore}`);
    } else {
        console.log(`Égalité ! Le score est de: ${humainScore} contre ${computerScore}`);
    };

    
    
};

playGame();