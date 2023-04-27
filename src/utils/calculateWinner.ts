export const calculateWinner = (cells : number[]) => {
	if (cells.length === 0) return false;

	let gameOver = false;

	const winningPatterns = [
		// Horizontal winning patterns
		[0, 1, 2], // 3
		[3, 4, 5], // 12
		[6, 7, 8], // 21
		// Vertical winning patterns
		[0, 3, 6], // 9
		[1, 4, 7], // 13
		[2, 5, 8], //15
		// Diagonal winning patterns
		[0, 4, 8], // 12
		[2, 4, 6]
	]

	for (let i = 0; i < winningPatterns.length; i++) {
		const pattern = winningPatterns[i];
		if (pattern.every(num => cells.includes(num))) {
			gameOver = true;
			break;
		}
	}

	return gameOver;
}
