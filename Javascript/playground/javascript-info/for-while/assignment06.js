while (true) {
  let number = +prompt("100보다 큰 숫자를 입력하세요.", "");
  if (number > 100 || number === null) break;
}

let num;

do {
  num = prompt("100을 초과하는 숫자를 입력해주세요.", 0);
} while (num <= 100 && num);
