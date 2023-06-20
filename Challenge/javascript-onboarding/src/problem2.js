function deleteAllDuplicateCharacter(string) {
  const result = Array.from(string)
    .filter(
      (character, index) =>
        string[index - 1] !== character && character !== string[index + 1]
    )
    .join("");

  return string.length !== result.length
    ? deleteAllDuplicateCharacter(result)
    : result;
}

function problem2(cryptogram) {
  return deleteAllDuplicateCharacter(cryptogram);
}

console.log(problem2("browoanoommnaon"));

module.exports = problem2;
