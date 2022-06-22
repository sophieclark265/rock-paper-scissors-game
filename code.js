// ONE GAME OF ROCK PAPER SCISSORS

// func for computer to generate random choice
function computerPlay() {
  console.log("running computerPlay func");
  let arr = ["Rock", "Paper", "Scissors"];
  // this gives each item in array equal chance of being chosen
  // math.floor to round down; math.random to choose random num between 0 and 1;
  // times by arr.length to get the index of array chosen(each index has equal likelihood of being chosen)

  let randomOption = arr[Math.floor(Math.random() * arr.length)];
  console.log("computerPlay func about to return randomOption");
  return randomOption;
}

// func that prompts input from user
// also calls computerPlay func and playRound func
// returns the result from those functions, telling us who won the game

function userChoice() {
  let promptAnswer = prompt("Rock Paper Scissors - Go!");
  if (promptAnswer == null) {
    return "Choose rock, paper, or scissors!";
  } else {
    console.log(
      "userChoice func about to invoke playRound func and computerPlay func"
    );
    return playRound(convertString(promptAnswer), computerPlay());
  }
}

// func that takes return val from computerPlay and return play from userChoice to determine a winner

function playRound(playerSelection, computerSelection) {
  let win = false;
  console.log("playRound func is running");
  if (playerSelection == computerSelection) {
    return `It's a draw! You both chose ${computerSelection}. Go again!`;
  } else if (computerSelection == "Rock" && playerSelection == "Scissors") {
    return "You lose! Rock beats scissors.";
  } else if (computerSelection == "Paper" && playerSelection == "Rock") {
    return "You lose! Paper beats rock.";
  } else if (computerSelection == "Scissors" && playerSelection == "Paper") {
    return "You lose! Scissors beat paper.";
  } else {
    win = true;
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  }
}

// function to convert user input string to all lowercase, then capitalize first letter
// this will allow playRound func to run properly with if...else statements, without worrying about getting inputs that are all caps or something
function convertString(userInput) {
  let lowerCaseString = userInput.toLowerCase(); // turns SCISSORS to scissors
  let stringWithCharRemoved = lowerCaseString.slice(1); // slices all chars from start point inclusive (cissors is what is held in this var)
  let firstLetter = lowerCaseString.charAt(0).toUpperCase(); // gets first letter of scissors and capitalizes it

  let convertedInput = firstLetter + stringWithCharRemoved;
  console.log("this is the converted input: " + convertedInput);
  return convertedInput;
}

let result = userChoice();

console.log(result);
