/**
 * Create a random choice for computer
 * @returns {String}
 */
function getComputerChoice() {
  let computerAnswer = Math.floor(Math.random() * 3);

  if (computerAnswer === 2) {
    computerAnswer = "rock";
    console.log("rock");
  } else if (computerAnswer === 1) {
    computerAnswer = "paper";
    console.log("paper");
  } else {
    computerAnswer = "scissors";
    console.log("scissors");
  }

  return computerAnswer;
}

/**
 *
 * @param {HTMLElement} tagname
 * @returns {HTMLElement}
 */
function createElement(tagname) {
  let element = document.createElement(tagname);

  return element;
}

/**
 * Create a game
 */
function playGame() {
  let humainScore = 0;
  let computerScore = 0;
  let totalPointWin = 0;

  /**
   * Create the logic for playing
   *
   */
  function playRound() {
    // DISPLAY GAME SCORE

    // Display score player
    const divHumanScore = document.querySelector(".human-score");
    const displayHumanScore = createElement("p");

    // Display score computer
    const divComputerScore = document.querySelector(".computer-score");
    const displayComputerScore = createElement("p");

    setTimeout(() => {
      // divHumanScore.classList.add("active");
      divHumanScore.appendChild(displayHumanScore);
      // divComputerScore.classList.add("active");
      divComputerScore.appendChild(displayComputerScore);
    }, 500);

    // CREATE MESSAGE
    const humanMessage = document.querySelector(".human-message");
    const displayHumanMessage = createElement("p");
    displayHumanMessage.innerText = `Vous avez marqué ${humainScore} points !`;

    const computerMessage = document.querySelector(".computer-message");
    const displayComputerMessage = createElement("p");
    displayComputerMessage.innerText = `L'ordinateur a marqué ${computerScore} point`;

    humanMessage.appendChild(displayHumanMessage);
    computerMessage.appendChild(displayComputerMessage);
    // CREATE SELECTOR FOR PLAYER
    const divs = document.querySelectorAll("div");
    const humanChoices = [divs[5], divs[6], divs[7]];

    for (choice of humanChoices) {
      choice.addEventListener("click", (e) => {
        let responseComputer = getComputerChoice();
        let response = e.currentTarget.getAttribute("value");
        console.log(response);

        // GAME PATTERN
        const humanPattern =
          (response === "rock" && responseComputer === "scissors") ||
          (response === "scissors" && responseComputer === "paper") ||
          (response === "paper" && responseComputer === "rock");

        if (humanPattern) {
          console.log(response, responseComputer);
          humainScore++;
          console.log(`Vous avez marqué ${humainScore} points !`);

          divHumanScore.classList.add("active");
          displayHumanScore.innerText = `Votre score : ${humainScore}`;
        } else if (response === responseComputer) {
          console.log(`${response} = ${responseComputer} : Égalité !!`);
        } else {
          console.log(response, responseComputer);
          computerScore++;
          console.log(`L'ordinateur a marqué ${computerScore} point`);
          divComputerScore.classList.add("active");

          displayComputerScore.innerText = `Ordinateur score: ${computerScore}`;
        }

        totalPointWin++;
        console.log(totalPointWin);

        if (totalPointWin === 5) {
          if (humainScore > computerScore) {
            divHumanScore.classList.remove("active");
            return console.log("Vous avez gagner");
          } else if (humainScore == computerScore) {
            return console.log("Égalité");
          } else {
            divComputerScore.classList.remove("active");
            return console.log(`L'ordi a gagné`);
          }
        }
      });
    }
  }
  playRound();
}
playGame();
