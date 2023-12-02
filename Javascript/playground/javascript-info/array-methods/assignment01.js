// border-left-width를 borderLeftWidth로 변경하기

console.log(camelize("background-color"));

camelize("background-color") == "backgroundColor";
camelize("list-style-image") == "listStyleImage";
camelize("-webkit-transition") == "WebkitTransition";

function camelize(word) {
  const splitedWords = word.split("-");

  const camelizedWords = splitedWords.map((splitedWord, index) => {
    if (index > 0) {
      return splitedWord[0].toUpperCase() + splitedWord.slice(1);
    }

    return splitedWord;
  });

  return camelizedWords.join("");
}
