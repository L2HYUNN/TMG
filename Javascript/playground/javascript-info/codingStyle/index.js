/**
 * # 코딩 스타일
 * 개발자는 가능한 한 간결하고 읽기 쉽게 코드를 작성해야 한다.
 *
 * 추천할만한 규칙
 * // https://ko.javascript.info/coding-style
 * - 함수 이름과 괄호 및 인자 사이에는 공백 없음
 * - 매개변수 사이에 공백 한 칸 씩
 * - 중괄호는 앞에 공백 한 칸을 두고 같은 줄에 작성
 * - 공백 2칸으로 들여쓰기
 * - for/if/while 뒤에 공백 한 칸씩
 * - for문에서 연산자 앞뒤에 공백 한 칸씩
 * - 세미콜론 ; 필수
 * - 인수 사이에 공백 한 칸
 * - 논리적으로 다른 블록은 한 줄 띄어쓰기
 * - 한 줄은 너무 길지 않게
 * - 중첩된 호출 앞뒤에 공백 한 칸씩
 */

/**
 * ## 중괄호
 * 대부분의 자바스크립트 프로젝트에서 여는 중괄호는 '이집션(Egyptian)' 스타일을 따라
 * 새로운 줄이 아닌 상응하는 키워드와 같은 줄에 작성하며, 여는 중괄호 앞엔 공백이 하나 있어야 한다.
 */

// 저자가 가장 추천하는 방법은 다음과 같다
if (n < 0) {
  alert(`Power ${n} is not supported`);
}

/**
 * ## 가로 길이
 * 가로로 길게 늘어진 코드는 가독성을 떨어트립니다.
 * 따라서 가로 길이가 길어진다면 여러 줄로 나눠 작성하는 것이 좋다.
 */

// 백틱(`)을 사용하면 문자열을 여러 줄로 쉽게 나눌 수 있습니다.
let str = `
  ECMA International's TC39 is a group of JavaScript developers,
  implementers, academics, and more, collaborating with the community
  to maintain and evolve the definition of JavaScript.
`;

// 최대 가로 길이는 팀원들과 합의해 정하는 것이 좋지만, 대게 80자나 120자로 제한하는 게 일반적이다.
if (id === 123 && moonPhase === "Waning Gibbous" && zodiacSign === "Libra") {
  letTheSorceryBegin();
}

/**
 * ## 들여쓰기
 * 들여쓰기에는 가로 들여쓰기와 세로 들여쓰기가 있다.
 *
 * 가로 들여쓰기: 스페이스 두 개 혹은 네 개(Tab)를 사용해 만듦
 * 요즘에는 탭보다 스페이스를 많이 사용하는 추세, 탭 대신 스페이스를 이용했을 때
 * 들여쓰기 정도를 좀 더 유연하게 변경할 수 있다는 장점이 있다.
 *
 * show(parmeters,
 *      aligned,
 *      one,
 *      after,
 *      another
 *   ) {
 *  // ...
 * }
 *
 * 세로 들여쓰기: 논리 블록 사이에 넣어 코드를 분리해주는 새 줄
 * 함수 하나에 논리 블록 여러 개가 들어갈 수 있기 때문에
 * 서로 다른 논리 블록 사이에 들여쓰기를 통해 분리해줄 수 있다.
 *
 * function pow(x, n) {
 *  let result = 1;
 *  // 세로 들여쓰기
 *  for(let i = 0; i < n; i++) {
 *    result *= x;
 *  }
 *  // 세로 들여쓰기
 *  return result;
 * }
 */

/**
 * ## 세미콜론
 * 자바스크립트 엔진에 의해 무시되더라도 모든 구문의 끝엔 세미콜론을 써주는 것이 좋다.
 */

/**
 * ## 중첩 레벨
 * 가능하면 너무 깊은 중첩문은 사용하지 않는 것이 좋다.
 */

// 반복문을 사용할 때 중첩문의 깊이가 깊어지면 continue 지시자를 쓰는 게 좋은 대안이 될 수도 있다.
for (let i = 0; i < 10; i++) {
  if (cond) {
    // ... // <- 중첩 레벨이 하나 더 늘어났습니다.
  }
}

for (let i = 0; i < 10; i++) {
  if (!cond) continue;
  // ...  // <- 추가 중첩 레벨이 추가되지 않습니다.
}

// 얼리 리턴을 이용하여 함수에서 또한 중첩 레벨을 줄일 수 있다.
function pow(x, n) {
  if (n < 0) {
    alert("'n'은 음수가 될 수 없습니다.");
  } else {
    let result = 1;

    for (let i = 0; i < n; i++) {
      result *= x;
    }

    return result;
  }
}

function pow2(x, n) {
  if (n < 0) {
    alert("'n'은 음수가 될 수 없습니다.");
    return;
  }

  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

/**
 * ## 함수의 위치
 * '헬퍼' 함수 여러 개를 만들어 사용하고 있다면 아래와 같은 방법을 사용해 코드 구조를 정돈할 수 있다.
 */

// 1. 헬퍼 함수를 사용하는 코드 위에서 헬퍼 함수를 모아 선언하기

// 함수 선언
function createElement() {
  // ...
}

function setHandler(elem) {
  // ...
}

function walkAround() {
  // ...
}

// 헬퍼 함수를 사용하는 코드
let elem = createElement();
setHandler(elem);
walkAround();

// 2. 코드를 먼저, 함수는 그 다음에 선언하기

// 헬퍼 함수를 사용하는 코드
let elem2 = createElement();
setHandler(elem2);
walkAround();

// --- 헬퍼 함수 ---
function createElement() {
  // ...
}

function setHandler(elem2) {
  // ...
}

function walkAround() {
  // ...
}

// 3. 혼합: 코드 바로 위에서 필요한 헬퍼 함수 그때그때 선언하기

/**
 * 대개는 두 번째 방법으로 코드를 정돈한다.
 *
 * 사람들은 이 코드가 '무엇을 하는지'를 생각하며 코드를 읽기 때문에 코드가 먼저 나오는 것이 자연스럽다.
 * 이름만 보고 헬퍼 함수의 역할을 쉽게 유추할 수 있게 함수 이름을 명명했다면 헬퍼 함수를 읽을 필요도 없다.
 */

/**
 * ## 스타일 가이드
 * 코딩 스타일 가이드는 코드를 '어떻게 작성할지'에 대한 전반적인 규칙을 담은 문서로 코딩 스타일에 대한 내용이 담겨 있다.
 *
 * 팀원 전체가 동일한 스타일 가이드를 따라 코드를 작성하면, 코드 작성자와 상관없이 동일한 스탕리의 코드를 만들 수 있다.
 *
 * 유명 스타일 가이드
 * // https://ko.javascript.info/coding-style
 * - Google의 자바스크립트 스타일 가이드
 * - Airbnb의 자바스크립트 스타일 가이드
 * - Idiomatic.JS
 * - StandardJS
 */

/**
 * ## Linter
 * Linter라는 도구를 사용하면 내가 작성한 코드가 스타일 가이드를 준수하고 있는지를 자동으로 확인할 수 있고,
 * 스타일 개선과 관련된 제안도 받을 수 있다.
 *
 * Linter를 사용하면 코드 스타일을 자동으로 따르고 관련 버그를 예방할 수 있다.
 *
 * 유명 linter:
 * // https://ko.javascript.info/coding-style
 * - JSLint, 역사가 오래된 linter
 * - JSHint, JSLint보다 세팅이 좀 더 유연한 linter
 * - ESLint, 가장 최근에 나온 linter
 */
