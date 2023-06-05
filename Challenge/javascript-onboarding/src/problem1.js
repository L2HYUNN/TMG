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
  ERROR_INVALID_PAGE_LENGTH: "페이지의 길이가 올바르지 않습니다.",
  ERROR_INVALID_PAGE_ORDER: "페이지의 순서가 올바르지 않습니다.",
});

function verifyInput(input) {
  if (input.length !== 2)
    throw new Error(ErrorMessage.ERROR_INVALID_PAGE_LENGTH);
  if (input[0] + 1 !== input[1])
    throw new Error(ErrorMessage.ERROR_INVALID_PAGE_ORDER);
}

function isValid(pobi, crong) {
  try {
    verifyInput(pobi);
    verifyInput(crong);
    return true;
  } catch (error) {
    return false;
  }
}

const Result = Object.freeze({
  EXCEPTION: -1,
  DRAW: 0,
  POBI_WIN: 1,
  CRONG_WIN: 2,
});

function selectWinner(pobi, crong) {
  const pobiScore = selectMaxScore(pobi);
  const crongScore = selectMaxScore(crong);

  if (pobiScore > crongScore) return Result.POBI_WIN;
  if (crongScore > pobiScore) return Result.CRONG_WIN;

  return Result.DRAW;
}

function problem1(pobi, crong) {
  if (!isValid(pobi, crong)) return Result.EXCEPTION;

  return selectWinner(pobi, crong);
}

console.log(problem1([97, 98], [197, 198]));
console.log(problem1([131, 132], [211, 212]));
console.log(problem1([99, 102], [211, 212]));

module.exports = problem1;
