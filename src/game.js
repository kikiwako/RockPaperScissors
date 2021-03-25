/* eslint-disable eqeqeq */
const ROCK = "rock";
const PAPER = "paper";
const SCISSOR = "scissors";

const TIE = "It's a tie!\n\n¯\\(°_o)/¯";
const WIN = "You win!\n\no(^▽^)o";
const LOST = "You lost!\n\nᕦ(òロó)ᕤ";
const CHOOSE = "Choose your move!\n\n(◠‿◠)";

const moves = [ROCK, PAPER, SCISSOR];

const game = {
	ROCK,
	PAPER,
	SCISSOR,

	TIE,
	WIN,
	LOST,
	CHOOSE,

	moves: [ROCK, PAPER, SCISSOR],

	getRandomMove: () => {
		return moves[Math.floor(Math.random() * 3)];
	},

	play: (input) => {
		const playerMove = input.toLowerCase().trim();
		const cpuMove = moves[Math.floor(Math.random() * 3)];

		console.log(`You played ${playerMove}`);
		console.log(`Cpu played ${cpuMove}`);

		console.log(this.compare(playerMove, cpuMove));
	},

	compare: (player, cpu) => {
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
	},
};

export default game;
