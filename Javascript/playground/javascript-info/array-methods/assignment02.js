// 특정 범위에 속하는 요소 찾기

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered); // 3,1 (조건에 맞는 요소)

console.log(arr); // 5,3,8,1 (기존 배열은 변경되지 않았습니다.)

function filterRange(arr, start, end) {
  const filteredArr = arr.filter((number) => start <= number && number <= end);

  return filteredArr;
}
