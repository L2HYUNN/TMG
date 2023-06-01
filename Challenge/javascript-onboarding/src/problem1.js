/**
 * pageNumber를 인자로 받아 각 자릿수의 합을 반환한다.
 *
 * @param {number} pageNumber
 * @returns {number}
 */
function addPageDigit(pageNumber) {
  return pageNumber
    .toString()
    .split("")
    .reduce((acc, cur) => acc + +cur, 0);
}

/**
 * pageNumber를 인자로 받아 각 자릿수의 곱을 반환한다.
 *
 * @param {number} pageNumber
 * @returns {number}
 */
function multiplyPageDigit(pageNumber) {
  return pageNumber
    .toString()
    .split("")
    .reduce((acc, cur) => acc * +cur);
}

/**
 * numbers를 인자로 받아 가장 큰 값을 반환한다.
 *
 * @param {number[]} numbers
 * @returns {number}
 */
function getMaxNumber(numbers) {
  return Math.max(...numbers);
}

/**
 * pageNumbers를 인자로 받아 pageNumber의 각 자릿수의 합을 가진 배열을 반환한다.
 *
 * @param {number[]} pageNumbers
 * @returns {number[]}
 */
function getAddedPageDigitList(pageNumbers) {
  return pageNumbers.map((pageNumber) => addPageDigit(pageNumber));
}

/**
 * pageNumbers를 인자로 받아 pageNubmer의 각 자릿수의 합을 가진 배열을 반환한다.
 *
 * @param {number[]} pageNumbers
 * @returns {number[]}
 */
function getMultipliedPageDigitList(pageNumbers) {
  return pageNumbers.map((pageNumber) => multiplyPageDigit(pageNumber));
}

/**
 * pageNumbers를 인자로 받아 게임의 규칙에 따라 가장 큰 수를 반환한다.
 *
 * @param {number[]} pageNumbers
 * @returns {number}
 */
function getScoreResult(pageNumbers) {
  return getMaxNumber([
    ...getAddedPageDigitList(pageNumbers),
    ...getMultipliedPageDigitList(pageNumbers),
  ]);
}

const ErrorMessage = Object.freeze({
  ERROR_INVALID_PAGE_LENGTH: "페이지의 길이가 올바르지 않습니다.",
  ERROR_INVALID_PAGE_ORDER: "페이지의 순서가 올바르지 않습니다.",
});

/**
 * pobi 혹은 crong의 길이가 2가 아닐때 에러를 발생시킵니다.
 * pobi 혹은 crong의 페이지가 순서대로 나열되어 있지 않을때 에러를 발생시킵니다.
 *
 * @param {number[]} pobi
 * @param {number[]} crong
 *
 * @throws {ExceptionError}
 */
function throwExceptionError(pobi, crong) {
  if (pobi.length !== 2 || crong.length !== 2)
    throw new Error(ErrorMessage.ERROR_INVALID_PAGE_LENGTH);
  if (pobi[0] + 1 !== pobi[1] || crong[0] + 1 !== crong[1])
    throw new Error(ErrorMessage.ERROR_INVALID_PAGE_ORDER);
}

const Result = Object.freeze({
  EXCEPTION: -1,
  DRAW: 0,
  POBI_WIN: 1,
  CRONG_WIN: 2,
});

function problem1(pobi, crong) {
  try {
    throwExceptionError(pobi, crong);
  } catch (error) {
    console.error(error);
    return Result.EXCEPTION;
  }

  const pobiNumberResult = getScoreResult(pobi);

  const crongNumberResult = getScoreResult(crong);

  if (pobiNumberResult > crongNumberResult) return Result.POBI_WIN;
  if (crongNumberResult > pobiNumberResult) return Result.CRONG_WIN;
  if (pobiNumberResult === crongNumberResult) return Result.DRAW;

  return Result.EXCEPTION;
}

console.log(problem1([97, 98], [197, 198]));
console.log(problem1([131, 132], [211, 212]));
console.log(problem1([99, 102], [211, 212]));

module.exports = problem1;
