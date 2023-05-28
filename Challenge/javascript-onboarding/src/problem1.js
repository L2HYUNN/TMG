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

function problem1(pobi, crong) {
  var answer = addPageDigit(pobi[0]);
  return answer;
}

console.log(problem1([97, 98], [197, 198]));

module.exports = problem1;
