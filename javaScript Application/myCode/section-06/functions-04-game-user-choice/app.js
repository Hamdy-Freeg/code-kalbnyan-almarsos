/* const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_INPUT = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WIN = "PLAYER WIN";
const RESULT_COMPUTER_WIN = "COMPUTER WIN";

let gameIsRunning = false;

const getPlayerChoise = function () {
  let input = prompt(`${ROCK}, ${PAPER}, or ${SCISSORS}`).toUpperCase();

  if (input !== ROCK && input !== PAPER && input !== SCISSORS) {
    alert(`Invalid input, we chose ${DEFAULT_USER_INPUT} for you!`);
  }
  return input;
};

const getComputerChoice = function () {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = function (cChoice, pChoice) {
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK)
  ) {
    return RESULT_PLAYER_WIN;
  } else {
    return RESULT_COMPUTER_WIN;
  }
};

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerChoise = getPlayerChoise();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerChoise);
  console.log(winner);
});
 */

const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_INPUT = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WIN = "PLAYER WIN";
const RESULT_COMPUTER_WIN = "COMPUTER WIN";

let gameIsRunning = false;

const getPlayerChoise = function () {
  let input = prompt(`${ROCK}, ${PAPER}, or ${SCISSORS}`).toUpperCase();

  if (input !== ROCK && input !== PAPER && input !== SCISSORS) {
    alert(`Invalid input, we chose ${DEFAULT_USER_INPUT} for you!`);
  }
  return input;
};

const getComputerChoice = function () {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

// const getWinner = (cChoice, pChoice) =>
//   cChoice === pChoice
//     ? RESULT_DRAW
//     : (cChoice === ROCK && pChoice === PAPER) ||
//       (cChoice === PAPER && pChoice === SCISSORS) ||
//       (cChoice === SCISSORS && pChoice === ROCK)
//     ? RESULT_PLAYER_WIN
//     : RESULT_COMPUTER_WIN;

const getWinner = function (cChoice, pChoice) {
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK)
  ) {
    return RESULT_PLAYER_WIN;
  } else {
    return RESULT_COMPUTER_WIN;
  }
};

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerChoice = getPlayerChoise();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerChoice);
  let message = `You picked ${playerChoice}, computer picked ${computerChoice}, therefore you`;
  if (winner === RESULT_DRAW) {
    message = message + " had a draw";
  } else if (winner === RESULT_PLAYER_WIN) {
    message = message + " won";
  } else {
    message = message + " lost.";
  }
  alert(message);
  gameIsRunning = false;
  console.log(winner);
});
