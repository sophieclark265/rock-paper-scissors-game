function computerPlay() {
  let arr = ["Rock", "Paper", "Scissors"];
  // this gives each item in array equal chance of being chosen
  // math.floor to round down; math.random to choose random num between 0 and 1;
  // times by arr.length to get the index of array chosen(each index has equal likelihood of being chosen)

  let randomOption = arr[Math.floor(Math.random() * arr.length)];

  console.log("this is array " + arr);
  console.log("this is random Option " + randomOption);
}

computerPlay();
computerPlay();
computerPlay();

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return `It's a draw! You both chose ${computerSelection}. Go again!`;
  } else if (computerSelection == "Rock" && playerSelection == "Scissors") {
    return "You lose! Rock beats scissors.";
  } else if (computerSelection == "Paper" && playerSelection == "Rock") {
    return "You lose! Paper beats rock.";
  } else if (computerSelection == "Scissors" && playerSelection == "Paper") {
    return "You lose! Scissors beat paper.";
  } else {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  }
}

console.log("testing playRound func " + playRound("Scissors", "Scissors"));

// deliverables:

// player inputs their choice into html, use parseInt() or prompt() for this?
// player input needs to be case insensitive, this may mean converting string
