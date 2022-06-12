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
					break;
				case "paper":
					return "You Lose! Paper beats Rock";
					break;
				case "scissors":
					return "You Win! Rock beats Scissors";
					break;
			}
			break;
		case "paper":
			switch (computerSelection) {
				case "rock":
					return "You Win! Rock beats Paper";
					break;
				case "paper":
					return "Tie!";
					break;
				case "scissors":
					return "You Lose! Scissors beats Paper";
					break;
			}
			break;
		case "scissors":
			switch (computerSelection) {
				case "rock":
					return "You Lose! Rock beats Scissors";
					break;
				case "paper":
					return "You Win! Scissors beats Paper";
					break;
				case "scissors":
					return "Tie!";
					break;
			}
			break;
	}
}
