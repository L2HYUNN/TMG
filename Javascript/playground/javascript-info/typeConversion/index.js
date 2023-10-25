/**
 * # 형 변환
 * 함수와 연산자에 전달되는 값은 대부분 적절한 자료형으로 자동 변환된다.
 * 이러한 과정을 "형 변환(type conversion)"이라고 한다.
 *
 * 또한 전달받은 값을 외도적으로 타입 변환(명시적 변환)해 주는 경우도 형 변환이라고 할 수 있다.
 */

/**
 * ## 문자형으로 변환
 * 문자형으로 형 변환을 실행한다.
 */

let value = true;
alert(typeof value); // boolean

value = String(value); // 변수 value엔 문자열 "true"가 저장된다.
alert(typeof value); // string

/**
 * ## 숫자형으로 변환
 * 숫자형으로 형 변환을 실행한다.
 *
 * 보통 수학과 관련된 함수와 표현식에서 자동으로 일어난다.
 */

alert("6" / "2"); // 3, 문자열이 숫자형으로 자동변환된 후 연산이 수행된다.

// Number(value) 함수를 사용하면 주어진 값(value)을 숫자형으로 명시해서 변환할 수 있다.

let str = "123";
alert(typeof str); // string

let num = Number(str); // 문자열 "123"이 숫자 123으로 변한된다.

alert(typeof num); // number

// 숫자 이외의 글자가 들어가 있는 문자열을 숫자형으로 변환하려고 하면, 그 결과는 NaN가 된다.

let age = Number("임의의 문자열 123");

alert(age); // NaN

/**
 * 숫자형으로 변환 시 적용되는 규칙
 * 전달받은 값: 형 변환 후
 * undefined: NaN
 * null: 0
 * true and false: 1 and 0
 * string: 문자열의 처음과 끝 공백은 제거된다. 공백 제거 이후 남은 문자열이 없다면 0, 그렇지 않다면 문자열에서 숫자를 읽는다. (실패시 NaN을 반환한다)
 */

alert(Number("   123   ")); // 123
alert(Number("123z")); // NaN ("z"를 숫자로 변환하는 데 실패함)
alert(Number(true)); // 1
alert(Number(false)); // 0

/**
 * ## 불린형으로 변환
 * 불린형으로 형 변환을 실행한다.
 *
 * 보통 논리 연산을 수행할 때 발생한다.
 *
 * 불린형으로 변환 시 적용되는 규칙은 다음과 같다.
 * - 숫자 0, 빈 문자열, null, undefined, NaN과 같이 직관적으로도 "비어있다고" 느껴지는 값들은 false가 된다.
 * - 그 외의 값은 true로 변환된다.
 */

// Boolean(value)를 호출하면 명시적으로 불리언으로의 형 변환을 수행할 수 있다.

alert(Boolean(1)); // 숫자 1(true)
alert(Boolean(0)); // 숫자 0(false)

alert(Boolean("hello")); // 문자열(true)
alert(Boolean("")); // 빈 문자열(false)

// 주의!: 문자열 "0"은 true이다.
alert(Boolean("0")); // true
alert(Boolean(" ")); // 공백이 있는 문자열도 비어있지 않은 문자열이기 때문에 true로 변환됩니다.

/**
 * 일반적이지 않은 예외 사항을 기억하자
 * - 숫자형으로 변환 시 undefined는 0이 아니라 NaN이 된다.
 * - 문자열 "0"과 "" 같은 공백은 불린형으로 변환 시 true가 된다.
 */
