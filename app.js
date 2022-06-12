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
					return "You Win! Paper beats Rock";
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

game();
