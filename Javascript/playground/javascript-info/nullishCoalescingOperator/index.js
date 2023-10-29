/**
 * # nullish 병합 연산자 '??'
 * nullish 병합 연산자(nullish coalescing operator) ??를 사용하면 여러 피연산자 중 그 값이 '확정되어있는' 변수를 찾을 수 있다.
 *
 * a ?? b 의 경우
 * a가 null, undefined가 아니면 a
 * 그 외의 경우는 b 를 반환한다.
 *
 * // ??는 변수에 기본값을 할당하는 용도로 사용할 수 있다.
 */

let x = a ?? b;
x = a !== null && a !== undefined ? a : b;

// nullish 병합 연산자 ??를 사용하여 값이 정해진 변수를 간편하게 찾아낼 수 있다.
let firstName = null;
let lastName = null;
let nickName = "바이올렛";

// null이나 undefined가 아닌 첫 번째 피연산자
alert(firstName ?? lastName ?? nickName ?? "익명의 사용자"); // 바이올렛

/**
 * ## '??'와 '||'의 차이
 * nulish 병합 연산자와 OR 연산자는 상당히 유사해보이지만, 실제로는 중요한 차이점이 존재한다.
 * - ||는 첫 번째 truthy 값을 반환한다.
 * - ??는 첫 번째 정의된(defined) 값을 반환한다.
 */

// null과 undefined, 숫자 0을 구분 지어 다뤄야 할 때 이 차이점은 매우 중요한 역할을 한다.
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0

/**
 * height는 0이 할당될 수 있는 변수이다.
 * 하지만 OR 연산자를 사용하게 되면 0은 falsy 값으로 판단되어 평가할 수 없게 된다.
 * 따라서 이러한 경우, 0이 할당 될 수 있는 변수를 사용할 때는 OR 연산자보다 null 병합 연산자를 사용하는 편이 좋다.
 */

/**
 * ## 연산자 우선순위
 * ??의 연산자 우선수위는 5로 꽤 낮다.
 * 그렇기 때문에 복잡한 표현식 안에서 사용할 때는 괄호를 이용하는 것이 좋다.
 */

let height2 = null;
let width = null;

// 괄호를 추가!
let area = (height2 ?? 100) * (width ?? 50);

alert(area); // 5000

// 원치 않는 결과 (괄호가 없을 경우)
// let area = height ?? (100 * width) ?? 50;

// 안정성 관련 이슈 때문에 null 병합 연산자는 AND나 OR 연산자와 함께 사용할 수 없다.
// let x = 1 && 2 ?? 3; // SyntaxError: Unexpected token '??'

// 괄호를 이용하면 위와 같은 제약을 피할 수 있다.
let x1 = (1 && 2) ?? 3; // 제대로 동작합니다.

alert(x); // 2
