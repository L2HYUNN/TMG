readNumber();

function readNumber() {
  let num;

  do {
    num = prompt("유효한 숫자형 값을 입력하세요.", 0);
  } while (!isFinite(num));

  if (num === "" || num === null) return null;

  return +num;
}
