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

function problem1(pobi, crong) {
  var answer = selectMaxNumber([5, 10, 15, 3, 99]);
  return answer;
}

console.log(problem1([97, 98], [197, 198]));

module.exports = problem1;
