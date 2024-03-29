/**
 * # 숫자형
 * 모던 자바스크립트는 숫자를 나타내는 두 가지 자료형을 지원합니다.
 *
 * 1. 일반적인 숫자는 '배정밀도 부동소수점 숫자(double precision floating point number)'로 알려진
 *    64비트 형식의 IEEE-754에 저장됩니다.
 *
 * 2. 임의의 길이를 가진 정수는 BigInt 숫자로 나타낼 수 있습니다.
 *    일반적인 숫자는 2^53이상이거나 -2^53 이하일 수 없다는 제약 때문에 만들어졌습니다.
 */

/**
 * ## 숫자를 입력하는 다양한 방법
 */

let billion = 1000000000;

// 숫자 옆에 'e'와 0의 개수를 붙이는 방법으로 숫자를 줄일수 있다.
let billion2 = 1e9; // 10억, 1과 9개의 0

alert(7.3e9); // 73억 (7,300,000,000

1e3 === 1 * 1000;
1.23e6 === 1.23 * 1000000;

// 아주 작은 숫자는 다음과 같이 표현할 수 있습니다.
let ms = 0.000001;

// 10을 세 번 거듭제곱한 수로 나눔
1e-3 === 1 / 1000; // 0.001

// 10을 여섯 번 거듭제곱한 수로 나눔
1.23e-6 === 1.23 / 1000000; // 0.00000123

/**
 * ### 16진수, 2진수, 8진수
 * 자바스크립트에서 지원하는 진법은 3가지 입니다.
 *
 * 이 외의 진법을 사용하려면 함수 parseInt를 사용해야 합니다.
 */

alert(0xff); // 255 (16진수)
alert(0xff); // 255 (대·소문자를 가리지 않으므로 둘 다 같은 값을 나타냅니다.)

let a = 0b11111111; // 255의 2진수
let b = 0o377; // 255의 8진수

alert(a == b); // true, 진법은 다르지만, a와 b는 같은 수임

/**
 * ## toString(base)
 * num.toString(base) 메서드는 base 진법으로 num을 표현한 후, 이를 문자형으로 변환해 반환합니다.
 */

let num = 255;

alert(num.toString(16)); // ff
alert(num.toString(2)); // 11111111

/**
 * ## 어림수 구하기
 * 어림수를 구하는 것(rounding)은 숫자를 다룰 때 가장 많이 사용되는 연산 중 하나입니다.
 *
 * 어림수 관련 내장 함수 몇 가지는 다음과 같습니다.
 *
 * 1. Math.floor
 *    소수점 첫째 자리에서 내림(버림).
 *
 * 2. Math.ceil
 *    소수점 첫째 자리에서 올림.
 *
 * 3. Math.round
 *    소수점 첫째 자리에서 반올림.
 *
 * 4. Math.trunc
 *    소수부를 무시
 *
 * 위의 함수들은 모두 첫째 자리에서 어림수를 구하고 있습니다.
 *
 * 소수점 n-th 번째 수를 기준으로 어림수는 어떻게 구해야 할까요?
 * 다음과 같은 두 가지 방법을 통해 어림수를 구할 수 있습니디.
 *
 * 1. 곱하기와 나누기
 *
 * let num = 1.23456;
 *
 * alert( Math.floor(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23
 *
 * 2. 소수점 n 번째 수까지의 어림수를 구한 후 이를 문자형으로 반환해주는 메서드, toFixed(n)을 사용
 *
 * let num = 12.34;
 * alert( num.toFixed(1) ); // "12.3"
 *
 * // toFixed는 Math.round와 유사하게 가장 가까운 값으로 올림 혹은 버림 합니다.
 * let num = 12.36;
 * alert( num.toFixed(1) ); // "12.4"
 *
 * // 소수부의 길이가 인수보다 작으면 끝에 0이 추가됩니다.
 * let num = 12.34;
 * alert( num.toFixed(5) ); // "12.34000", 소수부의 길이를 5로 만들기 위해 0이 추가되었습니다.
 *
 * // toFixed() 메서드의 반환값은 항상 문자열이라는 점을 주의해야 합니다.
 */

/**
 * ## 부정확한 계산
 * 숫자를 표현하는 64비트 중 52비트는 숫자를 저장하는 데 사용되고,
 * 11비트는 소수점 위치를(정수는 0), 1비트는 부호를 저장하는 데 사용됩니다.
 */

// 숫자가 너무 커지면 64비트 공간이 넘쳐서 Infinity로 처리됩니다.
alert(1e500); // Infinity

// 꽤 자주 발생하는 현상인 정밀도 손실(loss of precision)도 있습니다.
alert(0.1 + 0.2 == 0.3); // false

alert(0.1 + 0.2); // 0.30000000000000004

/**
 * 이러한 정밀도 손실(loss of precision)은 왜 발생하는 걸까요?
 *
 * 숫자는 0과 1로 이루어진 이진수로 변환되어 연속된 메모리 공간에 저장됩니다.
 * 0.1, 0.2 같은 분수는 이진법으로 표현하면 무한 소수가 됩니다.
 *
 * 10진법에서 1/3을 정확히 나타낼 수 없는 것 처럼, 2진법을 사용해 0.1 혹은 0.2를 정확하게 저장하는 방법은 없습니다.
 *
 * IEEE-754에선 가능한 가장 가까운 숫자로 반올림하는 방법을 사용해 이런 문제를 해결합니다.
 * 그러나 반올림 규칙을 적용하면 발생하는 '작은 정밀도 손실'을 우리가 볼 수는 없지만 실제로 발생한다.
 */

alert((0.1).toFixed(20)); // 0.10000000000000000555

/** 문제를 해결하는 방법
 *
 * 가장 신뢰할만한 방법은 toFixed(n) 메서드를 사용해 어림수를 만드는 것 입니다.
 */

let sum = 0.1 + 0.2;
alert(sum.toFixed(2)); // 0.30

let sum2 = 0.1 + 0.2;
alert(+sum2.toFixed(2)); // 0.3

// 무한소수를 방지하는 완벽한 방법은 사실 존재하지 않는다.
// 필요할 때 마다 잘라 어림수를 만드는 방법뿐이다.

/**
 * ## isNaN과 isFinite
 * Infinity와 NaN은 숫자형에 속하지만 '정상적인' 숫자는 아니기 때문에,
 * 정상적인 숫자와 구분하기 위한 특별한 함수가 존재합니다.
 */

// isNaN(value) - 인수를 숫자로 변환한 다음 NaN 인지 테스트함
alert(isNaN(NaN)); // true
alert(isNaN("str")); // true

// NaN은 자기 자신을 포함하여 그 어떤 값과도 같지 않기 때문에 isNaN을 사용해야 한다.
alert(NaN === NaN); // false

// isFinite(value) - 인수를 숫자로 변환하고 숫자가 NaN/Infinity/-Infinity 가 아닌 일반 숫자인 경우 true를 반환한다.
alert(isFinite("15")); // true
alert(isFinite("str")); // false, NaN이기 때문입니다.
alert(isFinite(Infinity)); // false, Infinity이기 때문입니다.

// isFinite을 이용해 문자열이 일반 숫자인지 검증할 수 있습니다.
let num2 = +prompt("숫자를 입력하세요.", "");

// 숫자가 아닌 값을 입력하거나 Infinity, -Infinity를 입력하면 false가 출력됩니다.
alert(isFinite(num2));

/**
 * Objcet.is와 비교하기
 * Object.is는 ===와 유사하지만 좀 더 신뢰할 수 있는 결과를 얻을 수 있습니다.
 *
 * 다음의 두 가지 케이스를 제외하곤 Object.is(a,b)와 a === b의 결과는 같습니다.
 *
 * 1. NaN 대상으로 비교할 때: Object.is(NaN, NaN) === true 이다.
 * 2. 0, -0을 비교할 때: Object.is(0, -0) === false 이다.
 *
 * 이러한 케이스에서 비교 결과가 정확해야 하는 경우 Object.is를 사용하자.
 */

/**
 * ## parseInt와 parseFloat
 * 단항 덧셈 연산자 + 또는 Number()를 사용하여 숫자형으로 변형할 때,
 * 피연산자가 숫자가 아니면 형 변환이 실패합니다.
 *
 * alert( +"100px" ); // NaN
 *
 * 엄격한 규칙이 적용되지 않는 유일한 예외는 문자열의 처음 또는 끝에 공백을 무시할 떄입니다.
 *
 * 하지만 실무에선 CSS등에 '100px', '12pt' 같은 숫자 단위가 함께 사용됩니다.
 * 이러한 경우 숫자만 추출하는 방법이 필요한데 이러한 경우
 * 내장 함수 parseInt와 parseFloat를 사용할 수 있습니다.
 *
 * 두 함수는 불가능할 때까지 문자열에서 숫자를 읽습니다.
 * 숫자를 읽는 도중 오류가 발생하면 이미 수집된 숫자를 반환합니다.
 *
 * parseInt는 정수, parseFloat는 부동 소수점 숫자를 반환합니다.
 */

alert(parseInt("100px")); // 100
alert(parseFloat("12.5em")); // 12.5

alert(parseInt("12.3")); // 12, 정수 부분만 반환됩니다.
alert(parseFloat("12.3.4")); // 12.3, 두 번째 점에서 숫자 읽기를 멈춥니다.

alert(parseInt("a123")); // NaN, a는 숫자가 아니므로 숫자를 읽는 게 중지됩니다.

/**
 * parseInt(str, radix)의 두 번째 인수
 * radix에 원하는 진수를 지정하면 16진수 문자열, 2진수 문자열 등을 파싱할 수 있습니다.
 */

alert(parseInt("0xff", 16)); // 255
alert(parseInt("ff", 16)); // 255, 0x가 없어도 동작합니다.

alert(parseInt("2n9c", 36)); // 123456

/**
 * ## 기타 수학 함수
 *
 * - Math.random
 *   0과 1 사이의 난수를 반환합니다(1은 제외).
 *
 * - Math.max(a, b, c...) / Math.min(a, b, c...)
 *   인수 중 최대/최솟값을 반환합니다.
 *
 * - Math.pow(n, power)
 *   n 을 power번 거듭제곱한 값을 반환합니다.
 */

alert(Math.random()); // 0.1234567894322
alert(Math.random()); // 0.5435252343232
alert(Math.random()); // ... (무작위 수)

alert(Math.max(3, 5, -10, 0, 1)); // 5
alert(Math.min(1, 2)); // 1

alert(Math.pow(2, 10)); // 2의 10제곱 = 1024
