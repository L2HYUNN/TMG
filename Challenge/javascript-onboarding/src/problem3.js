function splitNumber(number) {
  return number.toString().split("");
}

function problem3(number) {
  return splitNumber(number);
}

console.log(problem3(33));

module.exports = problem3;
