const gameArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
	let num = (~~(Math.random() * 10)) % 3;
	return gameArray[num];
}
