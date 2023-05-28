/**
 * pageNumber를 인자로 받아 각 자릿수의 합을 출력한다.
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
 * pageNumber를 인자로 받아 각 자릿수의 곱을 출력한다.
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
 * numbers를 인자로 받아 가장 큰 값을 출력한다.
 *
 * @param {number[]} numbers
 * @returns {number}
 */
function selectMaxNumber(numbers) {
  return Math.max(...numbers);
}

/**
 * pageNumbers를 인자로 받아 pageNumber의 각 자릿수의 합을 가진 배열을 반환한다.
 *
 * @param {number[]} pageNumbers
 * @returns {number[]}
 */
function makeAddedPageDigitList(pageNumbers) {
  return pageNumbers.map((pageNumber) => addPageDigit(pageNumber));
}

/**
 * pageNumbers를 인자로 받아 pageNubmer의 각 자릿수의 합을 가진 배열을 반환한다.
 *
 * @param {number[]} pageNumbers
 * @returns {number[]}
 */
function makeMultipliedPageDigitList(pageNumbers) {
  return pageNumbers.map((pageNumber) => multiplyPageDigit(pageNumber));
}

function problem1(pobi, crong) {
  const pobiNumberResult = selectMaxNumber([
    ...makeAddedPageDigitList(pobi),
    ...makeMultipliedPageDigitList(pobi),
  ]);

  const crongNumberResult = selectMaxNumber([
    ...makeAddedPageDigitList(crong),
    ...makeMultipliedPageDigitList(crong),
  ]);

  if (pobiNumberResult > crongNumberResult) return 1;
  if (crongNumberResult > pobiNumberResult) return 2;
  if (pobiNumberResult === crongNumberResult) return 0;

  return -1;
}

console.log(problem1([97, 98], [197, 198]));
console.log(problem1([131, 132], [211, 212]));
console.log(problem1([99, 102], [211, 212]));

module.exports = problem1;
