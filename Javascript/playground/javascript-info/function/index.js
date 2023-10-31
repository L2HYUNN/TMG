/**
 * # 함수
 * 유사한 동작을 하는 코드가 여러 곳에서 필요할 때 함수를 이용하여 중복 없는 코드를 만들 수 있다.
 */

/**
 * ## 함수 선언
 * **함수 선언(function declaration)** 방식을 이용하면 함수를 만들 수 있다.
 *
 * 함수 선언 방식은 아래와 같이 작성할 수 있다.
 * function name(parameter1, parameter2, ... parameterN) {
 *  // 함수 본문
 * }
 */

function showMessage() {
  alert("안녕하세요!");
}

showMessage();
showMessage();

// 함수 사용을 통해 alert 함수의 중복을 피할 수 있다.

/**
 * ## 지역 변수
 * 함수 내에서 선언한 변수인 지역 변수(local variable)는 함수 안에서만 접근할 수 있다.
 */

function showMessage2() {
  let message = "안녕하세요!"; // 지역 변수

  alert(message);
}

showMessage2(); // 안녕하세요!

alert(message); // ReferenceError: message is not defined (message는 함수 내 지역 변수이기 때문에 에러가 발생합니다.)

/**
 * ## 외부 변수
 * 함수 내부에서 함수 외부의 변수인 외부 변수(outer variable)에 접근할 수 있다.
 */

let userName = "John";

function showMessage3() {
  let message = "Hello, " + userName;
  alert(message);
}

showMessage3(); // Hello, John

// userName 처럼, 함수 외부에 선언된 변수는 전역 변수(global variable)라고 부릅니다.
// 전역 변수는 같은 이름을 가진 지역 변수에 의해 가려지지만 않는다면 모든 함수에서 접근할 수 있습니다.
// 하지만 변수는 연관되는 함수 내에 선언하고, 전역 변수는 되도록 사용을 지양하는 것이 좋습니다.

/**
 * ## 매개변수
 * 매개변수(parameter)를 이용하면 임의의 데이터를 함수 안에 전달할 수 있다.
 * 매개 변수는 인자(parameter)라고 불리기도 한다.
 */

function showMessage4(from, text) {
  // 인자: from, text
  alert(from + ": " + text);
}

showMessage4("Ann", "Hello!"); // Ann: Hello! (*)
showMessage4("Ann", "What's up?"); // Ann: What's up? (**)

// 함수의 인자로 전달된 값은 항상 본문에서 복사된 값이 사용된다. -> 따라서 인자를 변경해도 외부에 영향을 줄 수 없다.

// 매개변수(parameter)는 함수 선언 방식 괄호 사이에 있는 변수 -> 함수 선언 시 쓰이는 용어
// 인수(argument)는 함수를 호출할 때 매개변수에 전달되는 값 -> 함수 호출 시 쓰이는 용어

/**
 * ## 기본값
 * 함수 호출 시 매개변수에 인수를 전달하지 않으면 그 값은 undefined가 된다.
 */

function showMessage5(from, text = "no text given") {
  alert(from + ": " + text);
}

showMessage5("Ann"); // Ann: no text given

// 매개변수의 기본값은 인수가 전달되지 않았을때만 평가된다.

/**
 * 매개변수 기본값 문법이 없는 엤날 버전에 기본값을 설정하는 방법
 *
 * 1. undefined 체크
 * function showMessage(from, text) {
 *  if (text === undefined) {
 *    text = 'no text given';
 *  }
 *
 *  alert( from + ": " + text );
 * }
 *
 * 2. OR 연산자 이용
 * function showMessage(from, text) {
 *  // text의 값이 falsy면 기본값을 할당함
 *  // 이 방식은 text == ""일 경우, text에 값이 전달되지 않은것과 같다고 간주된다.
 *  text = text || 'no text given';
 *  ...
 * }
 *
 * 3. Null 병합 연산자 이용
 * 0처럼 falsy로 평가되는 값들을 일반 값처럼 처리할 수 있다.
 */

/**
 * ## 반환 값
 * 함수를 호출하면 호출한 곳에 특정 값을 반환할 수 있습니다.
 * 이때 이 특정 값을 **반환 값(return value)**라고 부릅니다.
 */

function sum(a, b) {
  // return을 만나면 함수 실행은 즉시 중단되고 리턴 값은 반환된다.
  return a + b;
}

let result = sum(1, 2);
alert(result); // 3

// return 문이 없거나 return 지시자만 있는 함수는 undefined를 반환한다.

function doNothing() {
  /* empty */
}

alert(doNothing() === undefined); // true

function doNothing2() {
  return;
}

alert(doNothing2() === undefined); // true

/**
 * ## 함수 이름짓기
 * 함수는 어떤 **동작**을 수행하기 위한 코드를 모아 놓은 것이다.
 * 따라서 함수의 이름은 대게 동사이다.
 *
 * 가능한 한 간결하고 명확해야 하며 함수 이름을 통해 충분히 어떤 동작을 하는지 설명할 수 있어야 한다.
 *
 * 일반적인 관습은 함수가 어떤 동작을 하는지 축약해서 설명해 주는 동사를 접두어로 붙인다.
 *
 * ex) "show"로 시작하는 함수는 대개 무언가를 보여주는 함수이다.
 *
 * - "get.." - 값을 반환함
 * - "calc.." - 무언가를 계산함
 * - "create.." - 무언가를 생성함
 * - "check.." - 무언가를 확인하고 불린값을 반환함
 */

showMessage(); // 메시지를 보여줌
getAge(); // 나이를 나타내는 값을 얻고 그 값을 반환함
calcSum(); // 합계를 계산하고 그 결과를 반환함
createForm(); // form을 생성하고 만들어진 form을 반환함
checkPermission(); // 승인 여부를 확인하고 true나 false를 반환함

// 함수는 하나의 동작만을 담당해야 한다.

/**
 * ## 함수 == 주석
 * 함수를 간결하게 만들면 테스트와 디버깅이 쉬워지며 그 자체로 주석의 역할까지 할 수 있게 된다.
 */
// 레이블을 이용한 소수 출력 함수
function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert(i); // 소수
  }
}

// 따로 함수로 분리한 코드
function showPrimes2(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i); // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}
