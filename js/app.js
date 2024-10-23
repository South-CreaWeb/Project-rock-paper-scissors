/**
 * Create a random choice for computer
 * @returns {String}
 */
function getComputerChoice() {
  let computerAnswer = Math.floor(Math.random() * 3);

  const signComputer = document.querySelector(".computer-answer");
  const displayComputerResponse = createElement("img");

  if (computerAnswer === 2) {
    computerAnswer = "rock";
    displayComputerResponse.setAttribute("src", "img/rock.svg");
    signComputer.appendChild(displayComputerResponse);
    setTimeout(() => {
      displayComputerResponse.remove();
    }, 1000);
  } else if (computerAnswer === 1) {
    computerAnswer = "paper";

    displayComputerResponse.setAttribute("src", "img/paper.svg");
    signComputer.appendChild(displayComputerResponse);
    setTimeout(() => {
      displayComputerResponse.remove();
    }, 1000);
  } else {
    computerAnswer = "scissors";

    displayComputerResponse.setAttribute("src", "img/scissors.svg");
    signComputer.appendChild(displayComputerResponse);
    setTimeout(() => {
      displayComputerResponse.remove();
    }, 1000);
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
      divHumanScore.appendChild(displayHumanScore);
      divComputerScore.appendChild(displayComputerScore);
    }, 500);

    // CREATE MESSAGE
    const humanMessage = document.querySelector(".human-message");
    const displayHumanMessage = createElement("p");

    const computerMessage = document.querySelector(".computer-message");
    const displayComputerMessage = createElement("p");

    const equalMessage = document.querySelector(".equal-message");
    const displayEqualMessage = createElement("p");

    // CREATE SELECTOR FOR PLAYER
    const divs = document.querySelectorAll("div");
    const humanChoices = [divs[5], divs[6], divs[7]];

    for (choice of humanChoices) {
      choice.addEventListener("click", (e) => {
        let responseComputer = getComputerChoice();
        let response = e.currentTarget.getAttribute("value");
        // console.log(response);

        // GAME PATTERN
        const humanPattern =
          (response === "rock" && responseComputer === "scissors") ||
          (response === "scissors" && responseComputer === "paper") ||
          (response === "paper" && responseComputer === "rock");

        if (humanPattern) {
          humainScore++;
          humanMessage.appendChild(displayHumanMessage);
          divHumanScore.classList.add("active");
          displayHumanMessage.innerText = `Vous avez marqué ${humainScore} points !`;
          setTimeout(() => {
            displayHumanMessage.remove();
          }, 1000);
          displayHumanScore.innerText = `Votre score : ${humainScore}`;
        } else if (response === responseComputer) {
          equalMessage.appendChild(displayEqualMessage);
          displayEqualMessage.innerText = `${response} et ${responseComputer} : Égalité !!`;
          setTimeout(() => {
            displayEqualMessage.remove();
          }, 1000);
        } else {
          computerScore++;

          computerMessage.appendChild(displayComputerMessage);
          divComputerScore.classList.add("active");
          displayComputerMessage.innerText = `L'ordinateur a marqué ${computerScore} point !`;
          setTimeout(() => {
            displayComputerMessage.remove();
          }, 1000);
          displayComputerScore.innerText = `Ordinateur score: ${computerScore}`;
        }

        totalPointWin++;
        console.log(totalPointWin);

        if (totalPointWin === 5) {
          if (humainScore > computerScore) {
            humanMessage.appendChild(displayHumanMessage);
            displayHumanMessage.innerText = "Vous avez gagné !";
          } else if (humainScore == computerScore) {
            equalMessage.appendChild(displayEqualMessage);
            displayEqualMessage.innerText = `Égalité !!`;
          } else {
            computerMessage.appendChild(displayComputerMessage);
            displayComputerMessage.innerText = "L'ordinateur a gagné !";
          }
        }
      });
    }
  }
  playRound();
}
playGame();
