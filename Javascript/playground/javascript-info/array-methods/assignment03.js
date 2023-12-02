// 특정 범위에 속하는 요소 찾기(배열 변경하기)
let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // 1과 4 사이에 있지 않은 요소는 모두 제거함

console.log(arr); // [3, 1]

function filterRangeInPlace(arr, start, end) {
  arr.forEach((number, index) => {
    if (!(start <= number && number <= end)) {
      arr.splice(index, 1);
    }
  });
}
