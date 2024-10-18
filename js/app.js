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
    displayHumanScore.innerText = `Votre score : ${humainScore}`;

    // Display score computer
    const divComputerScore = document.querySelector(".computer-score");
    const displayComputerScore = createElement("p");
    displayComputerScore.innerText = `Ordinateur score: ${computerScore}`;

    setTimeout(() => {
      divHumanScore.classList.add("active");
      divHumanScore.appendChild(displayHumanScore);
      divComputerScore.classList.add("active");
      divComputerScore.appendChild(displayComputerScore);
    }, 500);

    // CREATE SELECTOR FOR PLAYER
    const divs = document.querySelectorAll("div");
    const humanChoices = [divs[4], divs[5], divs[6]];

    for (choice of humanChoices) {
      choice.addEventListener("click", (e) => {
        let response = e.currentTarget.getAttribute("value");
        console.log(response);

        let responseComputer = getComputerChoice();

        const humanPattern =
          (response === "rock" && responseComputer === "scissors") ||
          (response === "scissors" && responseComputer === "paper") ||
          (response === "paper" && responseComputer === "rock");

        if (humanPattern) {
          console.log(response, responseComputer);
          humainScore++;
          console.log(`Vous avez marqué ${humainScore} points !`);
          displayHumanScore.innerText = `Votre score : ${humainScore}`;
        } else if (response === responseComputer) {
          console.log(`${response} = ${responseComputer} : Égalité !!`);
        } else {
          console.log(response, responseComputer);
          computerScore++;
          console.log(`L'ordinateur a marqué ${computerScore} point`);
          displayComputerScore.innerText = `Ordinateur score: ${computerScore}`;
        }

        totalPointWin++;
        console.log(totalPointWin);
        if (totalPointWin === 5) {
          if (humainScore > computerScore) {
            console.log("vous avez gagné");
          } else if (humainScore < computerScore) {
            console.log("ordi gagné");
          } else {
            console.log("Égalité");
          }
        }
      });
    }
  }

  playRound();
}
playGame();
