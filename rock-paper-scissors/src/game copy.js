const game = () => {
	const ROCK = "rock";
	const PAPER = "paper";
	const SCISSOR = "scissors";

	const TIE = "It's a tie! ¯(°_o)/¯";
	const WIN = "You win! o(^▽^)o";
	const LOST = "You lost! (°ロ°)";

	const moves = [ROCK, PAPER, SCISSOR];

	function getRandomMove() {
		return moves[Math.floor(Math.random() * 3)];
	}

	function play(input) {
		const playerMove = input.toLowerCase().trim();
		const cpuMove = moves[Math.floor(Math.random() * 3)];

		console.log(`You played ${playerMove}`);
		console.log(`Cpu played ${cpuMove}`);

		console.log(compare(playerMove, cpuMove));
	}

	function compare(player, cpu) {
		if (player == cpu) {
			return TIE;
		}

		if (player == ROCK) {
			if (cpu == PAPER) {
				return LOST;
			}

			if (cpu == SCISSOR) {
				return WIN;
			}
		}

		if (player == PAPER) {
			if (cpu == SCISSOR) {
				return LOST;
			}

			if (cpu == ROCK) {
				return WIN;
			}
		}

		if (player == SCISSOR) {
			if (cpu == ROCK) {
				return LOST;
			}

			if (cpu == PAPER) {
				return WIN;
			}
		}

		return "Oops! You entered " + player;
	}
};

export default game;
