function splitPageNumber(pageNumber) {
  return pageNumber.toString().split("");
}

function addPageDigit(pageNumber) {
  return splitPageNumber(pageNumber).reduce((acc, cur) => acc + +cur, 0);
}

function multiplyPageDigit(pageNumber) {
  return splitPageNumber(pageNumber).reduce((acc, cur) => acc * +cur);
}

function createAddedPageDigits(pageNumbers) {
  return pageNumbers.map((pageNumber) => addPageDigit(pageNumber));
}

function createMultipliedPageDigits(pageNumbers) {
  return pageNumbers.map((pageNumber) => multiplyPageDigit(pageNumber));
}

function selectMaxAddedPage(pageNumbers) {
  return Math.max(...createAddedPageDigits(pageNumbers));
}

function selectMaxMultipliedPage(pageNumbers) {
  return Math.max(...createMultipliedPageDigits(pageNumbers));
}

function selectMaxScore(pageNumbers) {
  return Math.max(
    selectMaxAddedPage(pageNumbers),
    selectMaxMultipliedPage(pageNumbers)
  );
}

const ErrorMessage = Object.freeze({
  ERROR_INVALID_PAGE_LENGTH: "페이지 배열의 길이는 2여야만 합니다.",
  ERROR_INVALID_LEFT_PAGE_NUMBER: "왼쪽 페이지는 홀수여야만 합니다.",
  ERROR_INVALID_RIGHT_PAGE_NUMBER: "오른쪽 페이지는 짝수여야만 합니다.",
  ERROR_INVALID_PAGE_ORDER: "페이지의 순서가 올바르지 않습니다.",
});

function verifyInput(input) {
  if (input.length !== 2)
    throw new Error(ErrorMessage.ERROR_INVALID_PAGE_LENGTH);
  if (input[0] % 2 !== 1) throw new Error(ErrorMessage.ERROR_INVALID_LEFT_PAGE);
  if (input[1] % 2 !== 0)
    throw new Error(ErrorMessage.ERROR_INVALID_RIGHT_PAGE);
  if (input[0] > input[1])
    throw new Error(ErrorMessage.ERROR_INVALID_PAGE_ORDER);
  if (input[0] + 1 !== input[1])
    throw new Error(ErrorMessage.ERROR_INVALID_PAGE_ORDER);
}

const Result = Object.freeze({
  EXCEPTION: -1,
  DRAW: 0,
  POBI_WIN: 1,
  CRONG_WIN: 2,
});

function selectResult(pobiScore, crongScore) {
  if (pobiScore > crongScore) return Result.POBI_WIN;
  if (crongScore > pobiScore) return Result.CRONG_WIN;

  return Result.DRAW;
}

function selectWinner(pobi, crong) {
  verifyInput(pobi);
  verifyInput(crong);

  const pobiScore = selectMaxScore(pobi);
  const crongScore = selectMaxScore(crong);

  return selectResult(pobiScore, crongScore);
}

function problem1(pobi, crong) {
  try {
    return selectWinner(pobi, crong);
  } catch (error) {
    return Result.EXCEPTION;
  }
}

console.log(problem1([97, 98], [197, 198]));
console.log(problem1([131, 132], [211, 212]));
console.log(problem1([99, 102], [211, 212]));

module.exports = problem1;
