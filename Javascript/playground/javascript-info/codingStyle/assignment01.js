function pow(x, n) {
  // 중괄호는 이집션 스타일을 따르는 것이 좋다.
  let result = 1; // 할당문에 적절한 띄어쓰기를 해준다.
  // 세로 들여쓰기 --> 논리를 분리한다.
  for (let i = 0; i < n; i++) {
    // for문에 적절한 띄어쓰기를 해준다.
    result *= x;
  }
  // 세로 들여쓰기
  return result;
}

let x = prompt("x?", ""),
  n = prompt("n?", ""); // 한 줄에 너무 길게 작성하지 않는다.

if (n <= 0) {
  alert(
    `Power ${n} is not supported, 
      please enter an integer number greater than zero`
  );
} else {
  alert(pow(x, n));
}
