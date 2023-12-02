function unique(arr) {
  /* your code */
  const result = [];

  arr.forEach((string) => {
    if (!result.includes(string)) {
      result.push(string);
    }
  });

  return result;
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(strings)); // Hare, Krishna, :-O

/**
 * 위와 같은 방법은 성능상의 문제가 있을 수 있다.
 *
 * 모든 배열을 순회하며 비교를 진행해야하기 때문이다.
 *
 * 추후에 배울 맵과 셋을 이용하면 위의 해답을 최적화할 수 있다.
 */
