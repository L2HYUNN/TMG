const { CLAP_GAME } = require("./constants");
const { splitDigits, generateRange } = require("./utilities");
const { validateNumber } = require("./validator");

function isClapGameDigit(digit) {
  return CLAP_GAME.DIGITS.includes(digit);
}

function countClapDigits(number) {
  return splitDigits(number).reduce(
    (result, splitedNumber) =>
      isClapGameDigit(Number(splitedNumber)) ? result + 1 : result,
    0
  );
}

function countTotalClaps(number) {
  return generateRange(number).reduce(
    (result, current) => result + countClapDigits(current + 1),
    0
  );
}

function clapGame(number) {
  validateNumber(number);

  return countTotalClaps(number);
}

module.exports = clapGame;
