/**
 * # 비교 연산자
 * 아래와 같은 연산자를 통해 자바스크립트에서 비교 연산을 사용할 수 있다.
 * a > b, a < b (크고 작음)
 * a >=b, a <= b (크거나 작거나 같음)
 * a == b ( a === b ) (같음)
 * a != b ( a !== b ) (다름)
 */

/**
 * ## 불린형 반환
 * 다른 연산자와 마찬가지로 비교 연산자 역시 값을 반환한다.
 */

alert(2 > 1); // true
alert(2 == 1); // false
alert(2 != 1); // true

let result = 5 > 4; // 비교 결과를 변수에 할당
alert(result); // true

/**
 * ## 문자열 비교
 * 자바스크립트는 '사전' 순으로 문자열을 비교한다. (사전편집(lexicographical)순)
 *
 * 보다 정확히는 사전 순이 아닌 유니코드 순으로 비교를 진행한다.
 * 'A'와 'a'를 비교했을 때 소문자 'a'가 더 큰 이유도 유니코드를 비교했기 때문이다.
 */

alert("Z" > "A"); // true
alert("Glow" > "Glee"); // true
alert("Bee" > "Be"); // true

/**
 * ## 다른 형을 가진 값 간의 비교
 * 동등 비교 연산자는 비교하려는 값의 자료형이 다르면 이 값들을 숫자형으로 바꾼후 비교를 진행한다.
 */

alert("2" > 1); // true, 문자열 '2'가 숫자 2로 변환된 후 비교가 진행됩니다.
alert("01" == 1); // true, 문자열 '01'이 숫자 1로 변환된 후 비교가 진행됩니다.

alert(true == 1); // true
alert(false == 0); // true

let a = 0;
alert(Boolean(a)); // false

let b = "0";
alert(Boolean(b)); // true

alert(a == b); // true!

// 동등 비교 연산자 ==는 피연산자를 숫자로 변환한 후에 비교를 비교하지만 Boolean을 사용한 명시적 변환에는 다른 규칙이 적용된다.

/**
 * ## 일치 연산자
 * 앞에서 확인한 것 처럼 동등(equality operator)는 피연산자를 숫자로 변환한 후 비교를 진행하기 때문에
 * 아래와 같은 정확한 비교가 어려운 경우가 발생한다.
 *
 * alert( 0 == false ); // true
 * alert( '' == false ); // true
 *
 * 따라서 보다 정확한 비교를 위해서는 일치(strict equality operator)를 사용해야만 한다.
 * 일치 연산자를 사용하면 자료형의 동등 여부까지 검사한다.
 *
 * 일치 연산자 === / 동등 연산자 ==
 * 불일치 연산자 !== / 부등 연산자 !=
 */

alert(0 === false); // false, 피연산자의 형이 다르기 때문입니다.

/**
 * ## null이나 undefined와 비교하기
 */

alert(null === undefined); // false
alert(null == undefined); // true

// 산술 연산자나 기타 비교 연산자 <, >, <=, >=를 사용하여 null과 undefined를 비교할 때 null은 0, undefined는 NaN으로 변환된다.

// Edge Case

// 1. null vs 0
alert(null > 0); // (1) false
alert(null == 0); // (2) false
alert(null >= 0); // (3) true

// 2. 비교 불가능한 undefined
alert(undefined > 0); // false (1)
alert(undefined < 0); // false (2)
alert(undefined == 0); // false (3)

/**
 * ## 함정 피하기
 * 이러한 예외적인 경우를 모두 외우기 보다 자연스럽게 익숙해지는 것이 좋다.
 *
 * 하지만 아래와 같은 방법을 따르면 예외 사항을 미리 예방할 수 있다.
 *
 * 일치 연산자 ===를 제외한 비교 연산자의 피연산자에 undefined나 null이 오지 않도록 특별히 주의하시기 바랍니다.
 *
 * 또한, undefined나 null이 될 가능성이 있는 변수가 <, >, <=, >=의 피연산자가 되지 않도록 주의하시기 바랍니다.
 * 명확한 의도를 갖고 있지 않은 이상 말이죠. 만약 변수가 undefined나 null이 될 가능성이 있다고 판단되면, 이를 따로 처리하는 코드를 추가하시기 바랍니다.
 */
