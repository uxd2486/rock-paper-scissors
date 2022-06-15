const gameArray = ["rock", "paper", "scissors"];

function computerPlay() {
	let num = (~~(Math.random() * 10)) % 3;
	return gameArray[num];
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	switch (playerSelection) {
		case "rock":
			switch (computerSelection) {
				case "rock":
					return "Tie!";
				case "paper":
					return "You Lose! Paper beats Rock";
				case "scissors":
					return "You Win! Rock beats Scissors";
			}
			break;
		case "paper":
			switch (computerSelection) {
				case "rock":
					return "You Win! Paper beats Rock";
				case "paper":
					return "Tie!";
				case "scissors":
					return "You Lose! Scissors beats Paper";
			}
			break;
		case "scissors":
			switch (computerSelection) {
				case "rock":
					return "You Lose! Rock beats Scissors";
				case "paper":
					return "You Win! Scissors beats Paper";
				case "scissors":
					return "Tie!";
			}
			break;
	}
}

function playGame() {

	// play the round and get the result
	const result = playRound(this.textContent, computerPlay());
	const resDiv = document.querySelector(".results");
	resDiv.textContent = result;

	// update the win counts
	let countDiv;
	if (result.startsWith("You Win!")){
		countDiv = document.querySelector(".player-score span");
	} else if (result.startsWith("You Lose")) {
		countDiv = document.querySelector(".computer-score span");
	} else {
		return;
	}
	let count = parseInt(countDiv.textContent, 10);
	count++;
	countDiv.textContent = count.toString();

	// check if anyone won yet
	if (count === 5){
		endGame(result);
	}
}

function resetScreen() {
	// reset the per-game results
	const results = document.querySelector(".results");
	results.textContent = "";

	// reset the overall results
	const gameCount = document.querySelector(".game-count");
	gameCount.textContent = "First to 5 wins!";

	// remove the "play again?" button
	const body = document.querySelector("body");
	const playButton = document.querySelector(".play-again");
	body.removeChild(playButton);

	// activate the play buttons
	const buttons = document.querySelectorAll(".play");
	buttons.forEach(button => {
		button.addEventListener("click", playGame);
	})

	// show the player score
	const playerScore = document.querySelector(".player-score");
	playerScore.textContent = "Player: ";
	const playerCount = document.createElement("span");
	playerCount.textContent = "0";
	playerScore.appendChild(playerCount);

	//show the computer score
	const computerScore = document.querySelector(".computer-score");
	computerScore.textContent = "computer: ";
	const computerCount = document.createElement("span");
	computerCount.textContent = "0";
	computerScore.appendChild(computerCount);
}

function endGame(result) {
	// show the winner
	const winDiv = document.querySelector(".game-count");
	if (result.startsWith("You Win!")){
		winDiv.textContent = "You Won The Game!"
	} else {
		winDiv.textContent = "You Lost The Game!"
	}

	// disable the buttons
	const buttons = document.querySelectorAll(".play");
	buttons.forEach(button => {
		button.removeEventListener("click", playGame);
	})

	// remove the counts
	const playerCount = document.querySelector(".player-score");
	playerCount.textContent = "";
	const computerCount = document.querySelector(".computer-score");
	computerCount.textContent = "";

	// add a play again button
	const playButton = document.createElement("button");
	playButton.classList.add("play-again");
	playButton.textContent = "Play again?";
	playButton.addEventListener("click", resetScreen);
	const body = document.querySelector("body");
	body.appendChild(playButton);
}

const playButtons = document.querySelectorAll(".play");
playButtons.forEach(button => {
	console.log(button.textContent);
	button.addEventListener("click", playGame)
})
