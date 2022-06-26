// multiple round rock, paper scissors

document.addEventListener("DOMContentLoaded", init);
function init() {
  let NUMBER_OF_ROUNDS = 0;
  let numberOfRoundsPlayed = 0;
  let numberOfRoundsUserWon = 0;
  let numberOfRoundsComputerWon = 0;

  let roundOutcomeDiv = document.getElementById("round-outcome");
  let resultDiv = document.getElementById("result-container");
  let roundSelector = document.getElementById("round-selector"); // round election input
  let startGameButton = document.getElementById("start-game-button");
  let roundSelectorErrorDiv = document.getElementById(
    "round-selector-error-message"
  );

  startGameButton.addEventListener("click", initializeGame);
  const buttons = document.querySelectorAll(".rps-button"); // gets 'option' nodes ie user's choice
  buttons.forEach((button) => {
    console.log(button);
    button.addEventListener("click", handleUserChoice);
  });

  function playRound(playerSelection, computerSelection) {
    let win = false;
    console.log("playRound func is running");
    if (playerSelection == computerSelection) {
      console.log(
        `It's a draw! You both chose ${computerSelection}. Go again!`
      );
    } else if (computerSelection == "Rock" && playerSelection == "Scissors") {
      console.log("You lose! Rock beats scissors.");
    } else if (computerSelection == "Paper" && playerSelection == "Rock") {
      console.log("You lose! Paper beats rock.");
    } else if (computerSelection == "Scissors" && playerSelection == "Paper") {
      console.log("You lose! Scissors beat paper.");
    } else {
      win = true;
      console.log(
        `You win! ${playerSelection} beats ${computerSelection}. WIN VAR IS NOW SET TO ${win}`
      );
      return win;
    }
  }

  function computerPlay() {
    let arr = ["Rock", "Paper", "Scissors"];
    // this gives each item in array equal chance of being chosen
    // math.floor to round down; math.random to choose random num between 0 and 1;
    // times by arr.length to get the index of array chosen(each index has equal likelihood of being chosen)

    let randomOption = arr[Math.floor(Math.random() * arr.length)];
    return randomOption;
  }

  // takes click event data as parameter (passed from browser when event fired)
  function handleUserChoice(event) {
    // play current round
    let lostMin = Math.round(NUMBER_OF_ROUNDS / 2);
    if (
      numberOfRoundsComputerWon >= lostMin ||
      numberOfRoundsUserWon >= lostMin
    ) {
      return;
    }
    // userChoice var stores innertext of button clicked
    const userChoice = event.target.innerText;
    const computerChoice = computerPlay();
    // call playRound func, passing in userChoice var and result of calling computerPlay
    let roundResult = playRound(userChoice, computerChoice);

    // figure out current state of game
    if (roundResult) {
      numberOfRoundsUserWon += 1;
    } else {
      numberOfRoundsComputerWon += 1;
    }
    numberOfRoundsPlayed += 1;

    // is the game over?
    //

    if (
      numberOfRoundsComputerWon >= lostMin ||
      numberOfRoundsUserWon >= lostMin
    ) {
      if (numberOfRoundsComputerWon > numberOfRoundsUserWon) {
        resultDiv.textContent = `GAME OVER! COMPUTER WON, ${numberOfRoundsComputerWon} to ${numberOfRoundsUserWon}`;
      } else {
        resultDiv.textContent = `GAME OVER! USER WON, ${numberOfRoundsUserWon} to ${numberOfRoundsComputerWon}`;
      }
    } else {
      resultDiv.textContent = `SCORE: COMPUTER ${numberOfRoundsComputerWon}, USER ${numberOfRoundsUserWon}`;
    }

    roundOutcomeDiv.textContent = `You chose: ${userChoice}. Computer chose: ${computerChoice}. You ${
      roundResult ? "WON. you are awesome" : "LOST"
    }`;
  }

  function initializeGame(event) {
    let numRounds = roundSelector.value;
    if (numRounds % 2 === 0 || numRounds < 1) {
      roundSelectorErrorDiv.textContent =
        "Number of rounds must be odd and at least 1";
      return;
    } else {
      roundSelectorErrorDiv.textContent = "";
    }
    NUMBER_OF_ROUNDS = roundSelector.value;
    roundSelector.disabled = true;
    event.target.disabled = true;
  }
}
