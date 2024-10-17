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
 * 
 * @param {HTMLElement} tagname 
 * @returns {HTMLElement}
 */
function createElement(tagname) {

    let element = document.createElement(tagname)

    return element
}

/**
 * Create a game
 */
function playGame() {

        
    let humainScore = 0;
    let computerScore = 0;

    /**
    * Create the logic for playing
    * 
    */
    function playRound() {

        
        let responseComputer = getComputerChoice();

        const humanPattern = (response === 'rock' && responseComputer === 'scissors') || (response === 'scissors' && responseComputer === 'paper') || (response === 'paper' && responseComputer === 'rock')
        
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

    // CREATE SELECTOR FOR PLAYER

        const divs = document.querySelectorAll('div')

        const humanChoices = [divs[4], divs[5], divs[6]]

        for(choice of humanChoices) {
            choice.addEventListener('click', (e) => {
                let response = e.currentTarget.getAttribute('value')
                console.log(response)
                playRound()
            })

        }


     
    // DISPLAY GAME SCORE
    const divHumanScore = document.querySelector('.human-score')
    divHumanScore.classList.add('active')
    const displayHumanScore = createElement('p')
    displayHumanScore.innerText = `Votre score : ${humainScore}`

    divHumanScore.appendChild(displayHumanScore)

    const divComputerScore = document.querySelector('.computer-score')
    divComputerScore.classList.add('active')
    const displayComputerScore = createElement('p')
    displayComputerScore.innerText = `Ordinateur score: ${computerScore}`

    divComputerScore.appendChild(displayComputerScore)
    


    if(humainScore > computerScore) {
        console.log(`Bravo vous avez gagner ! Avec un score de ${humainScore} contre ${computerScore}`);
    } else if(humainScore < computerScore) {
        console.log(`Vous avez perdu ! Résultat: ${computerScore} contre ${humainScore}`);
    } else {
        console.log(`Égalité ! Le score est de: ${humainScore} contre ${computerScore}`);
    };

    
    
};
playGame();
