// multiple round rock, paper scissors

function game() {
  let count = 0;
  for (let i = 0; i < 5; i++) {
    let game = playRound("todo", computerPlay());
    if (game) {
      count += 1;
    }
  }
  return `The score is ${count} out of 5.`;
}

function playRound(playerSelection, computerSelection) {
  let win = false;
  console.log("playRound func is running");
  if (playerSelection == computerSelection) {
    console.log(`It's a draw! You both chose ${computerSelection}. Go again!`);
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

// function that prompts user for an input
// then calls another func to transform input to be case insensitive
// returns case insensitive string
// function userInput() {
//   //let userAnswer = prompt("Make a choice: rock, paper, scissors! Go!");
//   let userAnswer = "";
//   return convertString(userAnswer);
// }

// function convertString(input) {
//   let lowerCaseString = input.toLowerCase(); // turns SCISSORS to scissors
//   let stringWithCharRemoved = lowerCaseString.slice(1); // slices all chars from start point inclusive (cissors is what is held in this var)
//   let firstLetter = lowerCaseString.charAt(0).toUpperCase(); // gets first letter of scissors and capitalizes it

//   let convertedInput = firstLetter + stringWithCharRemoved;
//   return convertedInput;
// }

function computerPlay() {
  let arr = ["Rock", "Paper", "Scissors"];
  // this gives each item in array equal chance of being chosen
  // math.floor to round down; math.random to choose random num between 0 and 1;
  // times by arr.length to get the index of array chosen(each index has equal likelihood of being chosen)

  let randomOption = arr[Math.floor(Math.random() * arr.length)];
  return randomOption;
}

console.log("invoking game func now " + game());

const buttons = document.querySelectorAll(".rps-button"); // gets 'option' nodes ie user's choice

console.log(buttons);

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", handleUserChoice);
});

// takes click event data as parameter (passed from browser when event fired)
function handleUserChoice(event) {
  // play current round

  if (numberOfRoundsPlayed >= NUMBER_OF_ROUNDS) {
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
  if (numberOfRoundsPlayed >= NUMBER_OF_ROUNDS) {
    if (numberOfRoundsComputerWon > numberOfRoundsUserWon) {
      resultDiv.textContent = `GAME OVER! COMPUTER WON, ${numberOfRoundsComputerWon} to ${numberOfRoundsUserWon}`;
    } else {
      resultDiv.textContent = `GAME OVER! USER WON, ${numberOfRoundsUserWon} to ${numberOfRoundsComputerWon}`;
    }
  } else {
    resultDiv.textContent = `SCORE: COMPUTER ${numberOfRoundsComputerWon}, USER ${numberOfRoundsUserWon}`;
  }

  roundOutcomeDiv.textContent = `You chose: ${userChoice}. Computer chose: ${computerChoice}. You ${
    roundResult ? "WON. you are awesome" : "LOST BITCH"
  }`;
}

let roundOutcomeDiv = document.getElementById("round-outcome");
let resultDiv = document.getElementById("result-container");

const NUMBER_OF_ROUNDS = 5;
let numberOfRoundsPlayed = 0;
let numberOfRoundsUserWon = 0;
let numberOfRoundsComputerWon = 0;
