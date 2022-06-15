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

function game() {
	const totalRounds = 5;
	let roundCount = 0;
	let roundsWon = 0;

	while (roundCount < totalRounds){
		let playerSelection = prompt("Make your selection!", "Rock, Paper, or Scissors");
		let result = playRound(playerSelection, computerPlay());
		if (result.startsWith("You Win!")){
			roundsWon++;
		}
		console.log(result);
		roundCount++;
	}
	console.log(`You won ${roundsWon} out of ${totalRounds} rounds`);
}

function resetScreen() {

}

function endGame(result) {
	// show the winner
	const winDiv = document.querySelector(".game-count");
	if (result.startsWith("You Win!")){
		winDiv.textContent = "You Won The Game!"
	} else {
		winDiv.textContent = "You Lost The Game!"
	}

	// remove the counts
	const counts = document.querySelectorAll(".score");
	counts.forEach(countDiv => {
		countDiv.textContent = "";
	})

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
	button.addEventListener("click", () => {

		// play the round and get the result
		const result = playRound(button.textContent, computerPlay());
		const resDiv = document.querySelector(".results");
		resDiv.textContent = result;

		// update the win counts
		let countDiv;
		if (result.startsWith("You Win!")){
			countDiv = document.querySelector(".score .player");
		} else if (result.startsWith("You Lose")) {
			countDiv = document.querySelector(".score .computer");
		} else {
			return;
		}
		let count = parseInt(countDiv.textContent, 10);
		console.log(count);
		count++;
		countDiv.textContent = count.toString();

		// check if anyone won yet
		if (count === 5){
			endGame(result);
		}
	})
})
