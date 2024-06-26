const CLAP_GAME = Object.freeze({ DIGITS: [3, 6, 9] });

function isClapGameDigit(digit) {
  return CLAP_GAME.DIGITS.includes(digit);
}

function splitDigits(digit) {
  return digit.toString().split("");
}

function countClapDigits(number) {
  return splitDigits(number).reduce(
    (result, splitedNumber) =>
      isClapGameDigit(Number(splitedNumber)) ? result + 1 : result,
    0
  );
}

function generateRange(number) {
  return Array.from({ length: number }, (_, index) => index);
}

function countTotalClaps(number) {
  return generateRange(number).reduce(
    (result, current) => result + countClapDigits(current + 1),
    0
  );
}

const ErrorMessage = Object.freeze({
  ERROR_INVALIDE_TYPE: "입력된 숫자의 타입이 올바르지 않습니다.",
  ERROR_NUBER_IS_NOT_INTEGER: "입력된 숫자가 정수가 아닙니다.",
  ERROR_NUMBER_NOT_IN_RANGE: "입력된 숫자가 유효 범위 안에 존재하지 않습니다.",
});

function validateNumber(number) {
  if (typeof number !== "number") {
    throw new Error(ErrorMessage.ERROR_INVALIDE_TYPE);
  }
  if (!Number.isInteger(number)) {
    throw new Error(ErrorMessage.ERROR_NUBER_IS_NOT_INTEGER);
  }
  if (!(0 < number && number <= 10000)) {
    throw new Error(ErrorMessage.ERROR_NUMBER_NOT_IN_RANGE);
  }
}

function clapGame(number) {
  validateNumber(number);

  return countTotalClaps(number);
}

function problem3(number) {
  try {
    return clapGame(number);
  } catch (error) {
    return error.message;
  }
}

console.log(problem3(33));

module.exports = problem3;
