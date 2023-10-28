/**
 * # 논리 연산자
 * 자바스크립트에는 세 종류의 논리 연산자가 존재한다.
 *
 * || (OR)
 * && (AND)
 * ! (NOT)
 */

/**
 * ## || (OR)
 * 인수 중 하나라도 true이면 true를 반환하고, 그렇지 않으면 false를 반환한다.
 *
 * result = a || b;
 */

alert(true || true); // true
alert(false || true); // true
alert(true || false); // true
alert(false || false); // false

if (1 || 0) {
  // if( true || false ) 와 동일하게 동작합니다.
  alert("truthy!");
}

let hour = 9;

if (hour < 10 || hour > 18) {
  alert("영업시간이 아닙니다.");
}

let hour2 = 12;
let isWeekend = true;

if (hour2 < 10 || hour2 > 18 || isWeekend) {
  alert("영업시간이 아닙니다."); // 주말이기 때문임
}

/**
 * ## 첫 번째 truthy를 찾는 OR 연산자 '||'
 * OR || 연산자를 여러 개 체이닝(chaining) 하면 첫 번째 truth를 반환하고 하나도 없다면 마지막 피연산자를 반환한다.
 */

alert(1 || 0); // 1 (1은 truthy임)

alert(null || 1); // 1 (1은 truthy임)
alert(null || 0 || 1); // 1 (1은 truthy임)

alert(undefined || null || 0); // 0 (모두 falsy이므로, 마지막 값을 반환함)

// 1. 변수 또는 표현식으로 구성된 목록에서 첫 번째 truthy 얻기
let firstName = "";
let lastName = "";
let nickName = "바이올렛";

alert(firstName || lastName || nickName || "익명"); // 바이올렛

// 2. 단락 평가(short circuit evaluation)
true || alert("not printed");
false || alert("printed");

/**
 * ## && (AND)
 * 두 피연산자가 모두 참일 때 true를 반환한다. 그 외의 경우는 false를 반환한다.
 */

alert(true && true); // true
alert(false && true); // false
alert(true && false); // false
alert(false && false); // false

let hour3 = 12;
let minute = 30;

if (hour3 == 12 && minute == 30) {
  alert("현재 시각은 12시 30분입니다.");
}

if (1 && 0) {
  // 피연산자가 숫자형이지만 논리형으로 바뀌어 true && false가 됩니다.
  alert("if 문 안에 falsy가 들어가 있으므로 alert창은 실행되지 않습니다.");
}

/**
 * ## 첫 번째 falsy를 찾는 AND 연산자 '&&'
 * AND && 연산자는 첫 번째 falsy를 반환한다. 피연산자에 falsy가 없다면 마지막 값을 반환한다.
 */

// 첫 번째 피연산자가 truthy이면,
// AND는 두 번째 피연산자를 반환합니다.
alert(1 && 0); // 0
alert(1 && 5); // 5

// 첫 번째 피연산자가 falsy이면,
// AND는 첫 번째 피연산자를 반환하고, 두 번째 피연산자는 무시합니다.
alert(null && 5); // null
alert(0 && "아무거나 와도 상관없습니다."); // 0

alert(1 && 2 && null && 3); // null

alert(1 && 2 && 3); // 마지막 값, 3

// &&의 우선순위가 || 보다 높다.

/**
 * if를 ||나 &&로 대체하지 말자.
 * 논리 연산자를 사용한 코드가 더 짧긴 하지만 if 문을 사용한 코드에 비해 가독성이 떨어진다.
 * 조건문이 필요한 경우에는 if문을 사용하자.
 */

let x = 1;

// 논리 연산자
x > 0 && alert("0보다 큽니다!");

// 비교 연산자
if (x > 0) alert("0보다 큽니다!");

/**
 * ## ! (NOT)
 * NOT ! 연산자는 값의 역을 반환한다.
 */

alert(!true); // false
alert(!0); // true

// NOT 연산자를 두 번 사용(!!)하여 값을 불린형으로 변환할 수 있다.
alert(!!"non-empty string"); // true
alert(!!null); // false

alert(Boolean("non-empty string")); // true
alert(Boolean(null)); // false

// NOT 연산자의 우선순위는 모든 논리 연산자 중에서 가장 높다. -> 항상 && / || 보다 먼저 실행된다.
