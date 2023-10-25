/**
 * # 자료형
 * 자바스크립트에서 값은 항상 문자열이나 숫자형 같은 특정한 자료형에 속한다.
 *
 * 자바스크립트는 다음과 같은 여덟 가지 기본 자료형을 가지고 있다.
 * - 숫자형
 * - bigint
 * - 문자형
 * - 불린형
 * - null
 * - undefined
 * - 객체형
 * - 심볼형
 *
 * 자바스크립트의 변수는 자료형에 관계없이 모든 데이터일 수 있다.
 * 이렇게 자료의 타입은 있지만 변수에 저장되는 값의 타입은 언제든지 바꿀 수 있는 언어를 '동적 타입(dynamically typed)' 언어라고 부른다.
 */

// 동적 타입(dynamicalley typed)
let message = "Hello";
message = 123456; // 문자형에서 숫자형으로 변경하였지만 에러는 발생하지 않는다.

/**
 * ## 숫자형
 * 숫자형(number type)은 정수 및 부동소수점 숫자(floating point number)를 나타낸다.
 * 숫자형엔 일반적인 숫자 외에 Infinity, -Infinity, NaN 같은 '특수 숫자 값(special numeric value)'이 포함된다.
 *
 * 현실에선 특수 숫자 값을 숫자로 취급하지 않지만 자바스크립트에선 특수 숫자 값을 숫자형으로 분류한다.
 */

let n = 123;
n = 12.345;

alert(1 / 0); // 무한대
alert(Infinity); // 무한대

// NaN은 계산 중에 에러가 발생했다는 것을 나타낸다. (부정확, 정의되지 않은 수학 연산등)
alert("숫자가 아님" / 2); // NaN, 문자열을 숫자로 나누면 오류가 발생한다.

/**
 * ## BigInt
 * 내부 표현 방식 때문에 자바스크립트에선 (2^53-1)(9007199254740991) 보다 큰 값 혹은 -(2^53-1) 보다 작은 정수는 '숫자형’을 사용해 나타낼 수 없다.
 * 대부분의 상황에서 문제가 없지만 암호 관련 작업 같이 아주 큰 숫자가 필요한 상황, 높은 정밀도를 요구하는 경우 이러한 큰 숫자가 필요하다.
 *
 * BigInt형은 길이에 상관없이 정수를 나타낼 수 있다.
 * BigInt형 값은 정수 리터럴 끝에 n을 붙이면 만들 수 있다.
 */

// 끝에 'n'이 붙으면 BigInt형 자료이다.
const bigInt = 1234567890123456789012345678901234567890n;

/**
 * ## 문자형
 * 자바스크립트에선 문자열(string)을 따옴표로 묶는다.
 *
 * 따옴표는 세 종류가 있습니다.
 * 1. 큰따옴표: "Hello"
 * 2. 작은따옴표: 'Hello'
 * 3. 역 따옴표(백틱, backtick): `Hello`
 *
 * 큰따옴표와 작은따옴표는 ‘기본적인’ 따옴표로, 자바스크립트에서는 이 둘에 차이를 두지 않는다.
 * 역 따옴표로 변수나 표현식을 감싼 후 ${…}안에 넣어주면, 아래와 같이 원하는 변수나 표현식을 문자열 중간에 손쉽게 넣을 수 있다.
 */

let str = "Hello";
let str2 = "Single quotes are ok too";
let phrase = `can embed another ${str}`;

let name = "John";

// 변수를 문자열 중간에 삽입
alert(`Hello, ${name}!`); // Hello, John!

// 표현식을 문자열 중간에 삽입
alert(`the result is ${1 + 2}`); // the result is 3

/**
 * ## 불린형
 * 불린형(논리 타입)은 true와 false 두 가지 값밖에 없는 자료형이다.
 * 불린형은 긍정(yes)이나 부정(no)을 나타내는 값을 저장할 때 사용하며, true는 긍정, false는 부정을 의미한다.
 */

let nameFieldChecked = true; // 네, name field가 확인되었습니다(checked).
let ageFieldChecked = false; // 아니요, age field를 확인하지 않았습니다(not checked)

// 불린값은 비교 결과를 저장할 때도 사용된다.
let isGreater = 4 > 1;

alert(isGreater); // true (비교 결과: "yes")

/**
 * ## 'null'값
 * null 값은 오로지 null 값만 포함하는 별도의 자료형을 만든다.
 *
 * 자바스크립트에서 null은 '존재하지 않는(nothing)' 값, '비어 있는(empty)' 값, '알 수 없는(unknown)' 값을 나타내는데 사용한다.
 * (다른 언어에서 사용하는 null과 성격이 다르다. ex. 존재하지 않는 객체에 대한 참조, 널 포인터(null pointer))
 */

let age = null; // 나이(age)는 알 수 없거나 비어있는 값이다.

/**
 * ## 'undefined'값
 * undefined는 '값이 할당되지 않은 상태'를 나타낼 때 사용한다.
 * 변수를 선언했지만, 값을 할당하지 않았다면 해당 변수에 undefined가 자동으로 할당된다.
 *
 * 개발자가 직접 undefined를 할당할 수 있지만, 이는 권장되지 않는 방법이다.
 * 자바스크립트에서 기본적으로 할당되지 않은 상태를 위해 undefined를 사용하므로
 * '비어있는', '알 수 없는' 상태를 표시하기 위해서는 null을 사용하는 것이 좋다.
 */

let age2;

alert(age2); // 'undefined'가 출력된다.

/**
 * ## 객체와 심볼
 * 객체(object)는 데이터 컬렉션이나 복잡한 개체(entity)를 표현할 수 있다.
 * 객체형을 제외한 다른 자료형은 한 가지만 표현할 수 있기 때문에 원시(primitive) 자료형이라 부른다.
 *
 * 심볼(symbol) 형은 객체의 고유한 식별자(unique identifier)를 만들 때 사용된다.
 */

/**
 * ## typeof 연산자
 * typeof 연산자는 인수의 자료형을 반환한다.
 *
 * typeof 연산자는 두 가지 형태의 문법을 지원한다.
 * 1. 연산자: typeof x
 * 2. 함수: typeof(x)
 */

typeof undefined; // "undefined"

typeof 0; // "number"

typeof 10n; // "bigint"

typeof true; // "boolean"

typeof "foo"; // "string"

typeof Symbol("id"); // "symbol"

typeof Math; // "object"  (1)

typeof null; // "object"  (2) "object"가 출력되지만 null은 객체가 아님에 유의하자.

typeof alert; // "function"  (3) "function"이 출력되지만 함수는 객체형에 속한다.
