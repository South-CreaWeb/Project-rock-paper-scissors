let humainScore = 0
let computerScore = 0 

/**
 * 
 * @returns {String}
 */
function getComputerChoice(){

    let computerAnswer = Math.floor(Math.random() * 3)

    if(computerAnswer === 2) {
        computerAnswer = 'rock'
        console.log(computerAnswer, 'rock')
    } else if(computerAnswer === 1){
        computerAnswer = 'paper'
        console.log(computerAnswer, 'paper')
    }else{
        computerAnswer = 'scissors'
        console.log(computerAnswer, 'scissors')
    }

    return computerAnswer
}

let responseComputer = getComputerChoice()


/**
 * 
 * @param {String} response 
 * @returns {String}
 */
function getHumanChoice(){

     let response = prompt(`Entrez l'une de ces trois valeurs: Rock, Paper or Scissors`).toLowerCase()

    return response
}

let responseHuman = getHumanChoice()

/**
 * 
 * @param {String} responseHuman 
 * @param {String} responseComputer 
 */
function playRound(responseHuman, responseComputer) {

    if(responseHuman != responseComputer) {

        console.log('Gagner', `response humaine: ${responseHuman}, reponse ordi: ${responseComputer}`)
    } else {

        console.log('Perdu')
    }

}

playRound(responseHuman, responseComputer)