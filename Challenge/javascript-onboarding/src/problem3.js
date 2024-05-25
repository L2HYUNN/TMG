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

function game(number) {
  validateNumber(number);

  return indexArray(number).reduce(
    (result, current) => result + calculateGameNumber(current + 1),
    0
  );
}

function problem3(number) {
  try {
    return game(number);
  } catch (error) {
    return error.message;
  }
}

console.log(problem3(33));

module.exports = problem3;
