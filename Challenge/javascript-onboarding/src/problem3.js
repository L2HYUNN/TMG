const GAME = Object.freeze({ NUMBERS: [3, 6, 9] });

function isGameNumber(number) {
  return GAME.NUMBERS.includes(number);
}

function splitNumber(number) {
  return number.toString().split("");
}

function problem3(number) {
  return isGameNumber(3);
}

console.log(problem3(33));

module.exports = problem3;
