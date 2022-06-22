// multiple round rock, paper scissors

function game() {
  let count = 0;
  for (let i = 0; i < 5; i++) {
    let game = playRound(userInput(), computerPlay());
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
function userInput() {
  let userAnswer = prompt("Make a choice: rock, paper, scissors! Go!");
  return convertString(userAnswer);
}

function convertString(input) {
  let lowerCaseString = input.toLowerCase(); // turns SCISSORS to scissors
  let stringWithCharRemoved = lowerCaseString.slice(1); // slices all chars from start point inclusive (cissors is what is held in this var)
  let firstLetter = lowerCaseString.charAt(0).toUpperCase(); // gets first letter of scissors and capitalizes it

  let convertedInput = firstLetter + stringWithCharRemoved;
  return convertedInput;
}

function computerPlay() {
  let arr = ["Rock", "Paper", "Scissors"];
  // this gives each item in array equal chance of being chosen
  // math.floor to round down; math.random to choose random num between 0 and 1;
  // times by arr.length to get the index of array chosen(each index has equal likelihood of being chosen)

  let randomOption = arr[Math.floor(Math.random() * arr.length)];
  return randomOption;
}

console.log("invoking game func now " + game());
