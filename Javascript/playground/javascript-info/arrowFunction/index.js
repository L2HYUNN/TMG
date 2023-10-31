/**
 * # 화살표 함수 기본
 * 화살표 함수(arrow function)을 사용하면 함수 표현식보다 단순하고 간결하게 함수를 만들 수 있습니다.
 *
 * 문법
 * let func = (arg1, arg2, ...argN) => expression
 *
 * 동일하게 함수 표현식으로 만들면 다음과 같다.
 * let func = function(arg1, arg2, ...argN) {
 *  return expression;
 * }
 */

let sum = (a, b) => a + b;

/* 위 화살표 함수는 아래 함수의 축약 버전입니다.

let sum = function(a, b) {
  return a + b;
};
*/

alert(sum(1, 2)); // 3

// 인수가 하나밖에 없는 경우 인수를 감싸는 괄호를 생략할 수 있다.

let double = (n) => n * 2;
// let double = function(n) { return n * 2 }과 거의 동일합니다.

alert(double(3)); // 6

// 인수가 하나도 없을 땐 괄호를 비워놓으면 된다. (괄호는 생략할 수 없다)
let sayHi = () => alert("안녕하세요!");

/**
 * ## 본문이 여러 줄인 화살표 함수
 * 본문이 여러 줄인 화살표 함수를 만들 때는 중괄호를 사용해야만 한다.
 * 또한 중괄호를 사용한 경우 반드시 return 지시자로 결괏값을 반환해주어야 한다.
 */
