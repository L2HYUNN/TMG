// 평균 나이 구하기
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

function getAverageAge(arr) {
  const sum = arr.reduce((acc, cur) => acc + cur.age, 0);
  const length = arr.length;

  return Math.floor(sum / length);
}
