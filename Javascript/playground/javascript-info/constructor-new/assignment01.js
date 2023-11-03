// new A() == new B()가 성립 가능한 함수 A와 B를 만드는게 가능할까?
// -> 정답: 가능하다
// 생성자 함수의 return으로 따로 생성한 객체를 반환해주면 동일한 결과를 얻을 수 있다.

let objcet = {};

function A() {
  return objcet;
}
function B() {
  return objcet;
}

let a = new A();
let b = new B();

alert(a == b); // true
