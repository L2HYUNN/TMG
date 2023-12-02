// 배열 복사본을 정렬하기

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (no changes)

function copySorted(arr) {
  const copiedArr = [...arr];
  // arr.slice()를 이용해도 배열을 복사할 수 있다

  copiedArr.sort();

  return copiedArr;
}
