function validateNumber(number) {
  if (typeof number !== "number") {
    throw new Error(ErrorMessage.ERROR_INVALIDE_TYPE);
  }
  if (!Number.isInteger(number)) {
    throw new Error(ErrorMessage.ERROR_NUBER_IS_NOT_INTEGER);
  }
  if (!(0 < number && number <= 10000)) {
    throw new Error(ErrorMessage.ERROR_NUMBER_NOT_IN_RANGE);
  }
}

module.exports = {
  validateNumber,
};
