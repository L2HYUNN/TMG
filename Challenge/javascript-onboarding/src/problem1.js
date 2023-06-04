function addPageDigit(pageNumber) {
  return pageNumber
    .toString()
    .split("")
    .reduce((acc, cur) => acc + +cur, 0);
}

function multiplyPageDigit(pageNumber) {
  return pageNumber
    .toString()
    .split("")
    .reduce((acc, cur) => acc * +cur);
}

function getAddedPageDigitList(pageNumbers) {
  return pageNumbers.map((pageNumber) => addPageDigit(pageNumber));
}

function getMultipliedPageDigitList(pageNumbers) {
  return pageNumbers.map((pageNumber) => multiplyPageDigit(pageNumber));
}

function getScoreResult(pageNumbers) {
  return Math.max(
    ...getAddedPageDigitList(pageNumbers),
    ...getMultipliedPageDigitList(pageNumbers)
  );
}

const ErrorMessage = Object.freeze({
  ERROR_INVALID_PAGE_LENGTH: "페이지의 길이가 올바르지 않습니다.",
  ERROR_INVALID_PAGE_ORDER: "페이지의 순서가 올바르지 않습니다.",
});

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
