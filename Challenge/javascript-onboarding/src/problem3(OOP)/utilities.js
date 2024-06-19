function generateRange(number) {
  return Array.from({ length: number }, (_, index) => index);
}

function splitDigits(digit) {
  return digit.toString().split("");
}

module.exports = {
  generateRange,
  splitDigits,
};
