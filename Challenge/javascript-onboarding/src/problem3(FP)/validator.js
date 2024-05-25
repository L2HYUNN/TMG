const { ERROR_MESSAGE } = require("./constants");

function validateNumber(number) {
  if (typeof number !== "number") {
    throw new Error(ERROR_MESSAGE.ERROR_INVALIDE_TYPE);
  }
  if (!Number.isInteger(number)) {
    throw new Error(ERROR_MESSAGE.ERROR_NUBER_IS_NOT_INTEGER);
  }
  if (!(0 < number && number <= 10000)) {
    throw new Error(ERROR_MESSAGE.ERROR_NUMBER_NOT_IN_RANGE);
  }
}

module.exports = {
  validateNumber,
};
