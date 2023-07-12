const GAME = Object.freeze({ NUMBERS: [3, 6, 9] });

function isGameNumber(number) {
  return GAME.NUMBERS.includes(number);
}

function splitNumber(number) {
  return number.toString().split("");
}

function calculateGameNumber(number) {
  return splitNumber(number).reduce(
    (result, splitedNumber) =>
      isGameNumber(Number(splitedNumber)) ? result + 1 : result,
    0
  );
}

function indexArray(number) {
  return Array.from(Array(number), (_, index) => index);
}

function game(number) {
  return indexArray(number).reduce(
    (result, current) => result + calculateGameNumber(current + 1),
    0
  );
}

function problem3(number) {
  return game(number);
}

console.log(problem3(33));

module.exports = problem3;
