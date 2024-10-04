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

    return console.log(computerAnswer)
}
getComputerChoice()


/**
 * 
 * @param {String} response 
 * @returns {String}
 */
function getHumanChoice(){

    

     let response = prompt(`Entrez l'une de ces trois valeurs: Rock, Paper or Scissors`)

    if(response != 'paper' && response != 'rock' && response != 'scissors') {
        let newTry = response

        newTry = alert('Perdu')
        
        console.log(newTry)

    } else if (response === ''){

        console.log('Perdu')
       
    } else {
       console.log(response) 
       return response
    }
    
    
    
}

getHumanChoice()