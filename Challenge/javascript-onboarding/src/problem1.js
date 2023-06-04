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

function createAddedPageDigitList(pageNumbers) {
  return pageNumbers.map((pageNumber) => addPageDigit(pageNumber));
}

function createMultipliedPageDigitList(pageNumbers) {
  return pageNumbers.map((pageNumber) => multiplyPageDigit(pageNumber));
}

function createScore(pageNumbers) {
  return Math.max(
    ...createAddedPageDigitList(pageNumbers),
    ...createMultipliedPageDigitList(pageNumbers)
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

function verifyExceptionError(pobi, crong) {
  try {
    throwExceptionError(pobi, crong);
  } catch (error) {
    console.error(error);
    return Result.EXCEPTION;
  }
}

const Result = Object.freeze({
  EXCEPTION: -1,
  DRAW: 0,
  POBI_WIN: 1,
  CRONG_WIN: 2,
});

function problem1(pobi, crong) {
  verifyExceptionError(pobi, crong);

  const pobiScore = createScore(pobi);
  const crongScore = createScore(crong);

  if (pobiScore > crongScore) return Result.POBI_WIN;
  if (crongScore > pobiScore) return Result.CRONG_WIN;
  return Result.DRAW;
}

console.log(problem1([97, 98], [197, 198]));
console.log(problem1([131, 132], [211, 212]));
console.log(problem1([99, 102], [211, 212]));

module.exports = problem1;
