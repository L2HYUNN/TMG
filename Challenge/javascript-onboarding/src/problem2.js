function isDuplicate(string, index) {
  return (
    string[index - 1] === string[index] || string[index] === string[index + 1]
  );
}

function deleteDuplicateCharacter(string) {
  return Array.from(string)
    .filter((_, index) => !isDuplicate(string, index))
    .join("");
}

function deleteAllDuplicateCharacter(string) {
  const result = deleteDuplicateCharacter(string);

  return string.length !== result.length
    ? deleteAllDuplicateCharacter(result)
    : result;
}

const ErrorMessage = Object.freeze({
  ERROR_INVALIDE_CRYPTOGRAM: "입력된 암호문의 형태가 유효하지 않습니다.",
  ERROR_INVALIDE_CRYPTOGRAM_LENGTH: "입력된 암호문의 길이가 올바르지 않습니다.",
});

function validateCryptogram(cryptogram) {
  if (cryptogram.match(/[a-z]/g).join("") !== cryptogram)
    throw new Error(ErrorMessage.ERROR_INVALIDE_CRYPTOGRAM);
  if (cryptogram.length < 0 || cryptogram.length > 1000)
    throw new Error(ErrorMessage.ERROR_INVALIDE_CRYPTOGRAM_LENGTH);
}

function decrypt(cryptogram) {
  validateCryptogram(cryptogram);

  return deleteAllDuplicateCharacter(cryptogram);
}

function problem2(cryptogram) {
  try {
    return decrypt(cryptogram);
  } catch (error) {
    return error.message;
  }
}

console.log(problem2("browoanoommnaon"));

module.exports = problem2;
