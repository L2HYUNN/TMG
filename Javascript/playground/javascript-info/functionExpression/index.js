/**
 * # 함수 표현식
 * 자바스크립트는 함수를 특별한 종류의 값으로 취급한다.
 *
 * 함수 표현식을 이용하면 아래와 같이 함수를 생성할 수 있다.
 */
let sayHi = function () {
  // 함수가 값처럼 여겨지기 때문에 변수에 할당할 수 있다.
  alert("Hello");
}; // 함수 표현식은 if 구문과 같은 코드 블록이 아니고 값처럼 취급되기 때문에 구문의 끝에 세미콜론을 붙이는 것이 좋다.

/**
 * ## 콜백 함수
 * 콜백 함수란 함수를 함수의 인수로 전달하고, 필요하다면 인수로 전달한 함수를 "나중에 호출(called back)"하는 것 이다.
 */

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOk() {
  alert("동의하셨습니다.");
}

function showCancel() {
  alert("취소 버튼을 누르셨습니다.");
}

// 사용법: 함수 showOk와 showCancel가 ask 함수의 인수로 전달됨
// 함수 ask의 인수, showOk와 showCancel은 콜백 함수 또는 콜백이라고 불린다.
ask("동의하십니까?", showOk, showCancel);

// 이름 없이 선언한 함수는 익명 함수(anonymous function)라고 부른다.
ask(
  "동의하십니까?",
  function () {
    alert("동의하셨습니다.");
  },
  function () {
    alert("취소 버튼을 누르셨습니다.");
  }
);

/**
 * 함수 표현식 vs 함수 선언문
 *
 * 1. 문법 차이
 * 함수 선언문: 함수는 주요 코드 흐름 중간에 독자적인 구문 형태로 존재한다.
 * function sum(a, b) {
 *  return a + b;
 * }
 *
 * 함수 표현식: 함수는 표현식이나 구문 구성(syntax construct) 내부에 생성된다.
 * let sum = function(a, b) {
 *  return a + b;
 * }
 *
 * 2. 함수 생성 시점
 * 함수 선언문: 함수 선언문이 정의되기 전에도 호출할 수 있다.
 *
 * 함수 표현식: 실제 실행 흐름이 해당 함수에 도달했을 때 함수를 생성한다.따라서 실행 흐름이 함수에 도달했을 때부터 해당 함수를 사용할 수 있다.
 *
 * 3.스코프
 * 엄격 모드에서 함수 선언문이 코드 블록 내에 위치하면 해당 함수는 블록 내 어디서든 접근할 수 있다. 하지만 블록 밖에서는 함수에 접근할 수 없다.
 */

// 2. 함수 생성 시점 예시
// 함수 선언문
sayHi("John"); // Hello, John

function sayHi(name) {
  alert(`Hello, ${name}`);
}

// 함수 표현식
sayHi("John"); // error!

let sayHi = function (name) {
  // (*) 마술은 일어나지 않습니다.
  alert(`Hello, ${name}`);
};

// 3. 스코프 예시
let age = prompt("나이를 알려주세요.", 18);

// 조건에 따라 함수를 선언함
if (age < 18) {
  function welcome() {
    alert("안녕!");
  }
} else {
  function welcome() {
    alert("안녕하세요!");
  }
}

// 함수를 나중에 호출합니다.
welcome(); // Error: welcome is not defined

// 3. 스코프 예시 2 -> 함수 선언된 블록 내에서의 호출
let age2 = 16; // 16을 저장했다 가정합시다.

if (age2 < 18) {
  welcome(); // \   (실행)
  //  |
  function welcome() {
    //  |
    alert("안녕!"); //  |  함수 선언문은 함수가 선언된 블록 내
  } //  |  어디에서든 유효합니다
  //  |
  welcome(); // /   (실행)
} else {
  function welcome() {
    alert("안녕하세요!");
  }
}

// 여기는 중괄호 밖이기 때문에
// 중괄호 안에서 선언한 함수 선언문은 호출할 수 없습니다.

welcome(); // Error: welcome is not defined

// 3. 스코프 예시 3 -> 함수 표현식을 사용하여 외부에서 함수 호출하기
let age3 = prompt("나이를 알려주세요.", 18);

let welcome;

if (age3 < 18) {
  welcome = function () {
    alert("안녕!");
  };
} else {
  welcome = function () {
    alert("안녕하세요!");
  };
}

welcome(); // 제대로 동작합니다.

/**
 * 함수 선언문과 함수 표현식 중 선택하기
 * 저자의 경험에 따르면 함수 선언문을 이용해 함수를 선언하는 걸 먼저 고려하는 게 좋다.
 * 함수 선언문으로 함수를 정의하면, 함수가 선언되기 전에 호출할 수 있어 코드 구성을 좀 더 자유롭게 할 수 있다.
 * 또한 함수 표현식보다 함수 선언문을 이용하는 것이 가독성 측면에서도 좋다.
 */
