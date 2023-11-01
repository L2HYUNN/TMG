// 함수 호출 전
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

console.log(multiplyNumeric(menu));

console.log(menu);

// 함수 호출 후
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };

function multiplyNumeric(obj) {
  const copiedObj = { ...obj };

  for (let key in copiedObj) {
    if (typeof copiedObj[key] === "number") {
      copiedObj[key] *= 2;
    }
  }

  return copiedObj;
}
