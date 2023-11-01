/**
 * # while과 for 반복문
 * while, for를 이용하면 반복문(loop)을 만들어 동일한 코드를 여러 번 실행할 수 있다.
 */

/**
 * ## 'while' 반복문
 *
 * 사용법
 * while (condition) { // condition(조건)이 truthy이면 body(본문)의 코드가 실행된다.
 *  // 코드
 *  // '반복문 본문(body)'이라 불림
 * }
 *
 */

let i = 0;
while (i < 3) {
  // 0, 1, 2가 출력됩니다.
  alert(i);
  i++;
}

/**
 * ## 'do...while' 반복문
 * do..while 문법을 사용하면 본문을 먼저 실행한 후에 반복문을 실행할 수 있다.
 *
 * 사용법
 * do {
 *  // 반복문 본문
 * } while(condition);
 */

let i2 = 0;
do {
  alert(i2);
  i2++;
} while (i2 < 3);

// do...while의 경우 조건의 여부와 상관없이, 본문을 최소한 한 번이라도 실행하고 싶을 때만 사용해야 한다.
// 대부분의 상황에서는 일반적인 while문이 더 적합하다.

/**
 * 'for' 반복문
 *
 * 사용법
 * for (begin; condition; step) {
 *  // ... 반복문 본문(body) ...
 * }
 *
 * begin -> 반복문 진입시 단 한 번  실행된다.
 * conditon -> 반복마다 조건을 확인한다.
 * body -> condition이 truthy일 동안 계속해서 실행된다.
 * step -> 각 반복의 body가 실행된 이후에 실행된다.
 */

// 이때 i는 인라인 변수 선언으로 선언되었으며, 외부 변수로 i를 대체할 수 있다.
for (let i = 0; i < 3; i++) {
  // 0, 1, 2가 출력됩니다.
  alert(i);
}

/**
 * ## 구성 요소 생략하기
 */

let i3 = 0; // i를 선언하고 값도 할당하였습니다.

for (; i3 < 3; i3++) {
  // 'begin'이 필요하지 않기 때문에 생략하였습니다.
  alert(i3); // 0, 1, 2
}

let i4 = 0;

for (; i4 < 3; ) {
  // while(i<3)과 동일하게 동작한다.
  alert(i4++);
}

// for (;;) {
// 끊임 없이 본문이 실행됩니다.
// }

// for문에는 꼭 두 개의 ; 세미콜론을 넣어주어야 한다. 그렇지 않으면 에러가 발생한다.

/**
 * ## 반복문 빠져나오기
 * 특별한 지시자인 break를 이용하여 원하는 때에 반복문을 종료할 수 있다.
 */

let sum = 0;

while (true) {
  let value = +prompt("숫자를 입력하세요.", "");

  if (!value) break; // (*)

  sum += value;
}
alert("합계: " + sum);

// 반복문의 시작 지점이나 끝 지점에서 조건을 확인하는 것이 아니라 본문 가운데 혹은 본문 여러 곳에서 조건을 확인해야 하는 경우,
// '무한 반복문 + break' 조합을 사용하면 좋다.

/**
 * ## 다음 반복으로 넘어가기
 * continue를 이용하면 현재 실행 중인 반복을 멈추고 다음 반복을 강제로 실행시킬 수 있다.
 *
 * 현재 반복을 종료시키고 다음 반복으로 넘어가고 싶을 때 사용할 수 있다.
 */

for (let i = 0; i < 10; i++) {
  // 조건이 참이라면 남아있는 본문은 실행되지 않습니다.
  if (i % 2 == 0) continue;

  alert(i); // 1, 3, 5, 7, 9가 차례대로 출력됨
}

// continue는 중첩을 줄이는 데 도움을 준다.
for (let i = 0; i < 10; i++) {
  if (i % 2) {
    // 위의 예시와 동일하게 동작하지만 if 안의 코드가 늘어나게 된다.
    alert(i);
  }
}

/**
 * ## break/continue와 레이블
 * 여러 개의 중첩 반복문을 한 번에 빠져나와야 하는 경우 레이블(label)을 사용할 수 있다.
 *
 * 레이블(label)은 반복문 앞에 콜론과 함께 쓰이는 식별자이다.
 */

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`(${i},${j})의 값`, "");

    // 여기서 멈춰서 아래쪽의 `완료!`가 출력되게 하려면 어떻게 해야 할까요?
  }
}

alert("완료!");

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`(${i},${j})의 값`, "");

    // 사용자가 아무것도 입력하지 않거나 Cancel 버튼을 누르면 두 반복문 모두를 빠져나옵니다.
    if (!input) break outer; // (*)

    // 입력받은 값을 가지고 무언가를 함
  }
}
alert("완료!");

// break뿐 아니라 continue 지시자 또한 레이블과 함께 사용할 수 있다.