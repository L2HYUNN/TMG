/**
 * # 객체를 원시형으로 변환하기
 */

/**
 * ## ToPrimitive
 * 특수 객체 메서드를 사용하면 숫자형이나 문자형으로의 형 변환을 원하는대로 저잘할 수 있다.
 *
 * 객체 형 변환은 세 종류로 구분되며, 'hint'라 불리는 값이 구분 기준이 된다.
 * hint는 '목표로 하는 자료형' 정도로 이해할 수 있다.
 *
 * 1. "string"
 * alert 함수같이 문자열을 기대하는 연산을 수행할 때(객체 - 문자형 변환), hint는 string이 된다.
 *
 * // 객체를 출력하려고 함
 * alert(obj);
 *
 * // 객체를 프로퍼티 키로 사용하고 있음
 * anotherObj[obj] = 123;
 *
 * 2. "number"
 * 수학 연산을 적용하려 할 때(객체 - 숫자형 변환), hint는 number가 된다.
 *
 * // 명시적 형 변환
 * let num = Number(obj);
 *
 * // (이항 덧셈 연산을 제외한) 수학 연산
 * let n = +obj; // 단항 덧셈 연산
 * let delta = date1 - date2;
 *
 * // 크고 작음 비교하기
 * let greater = user1 > user2;
 *
 * 3. "default"
 * 연산자가 기대하는 자료형이 '확실치 않을 때' hint는 드물게 default가 된다.
 *
 * // 이항 덧셈 연산은 hint로 'default'를 사용합니다.
 * let total = obj1 + obj2;
 *
 * // obj == number 연산은 hint로 'default'를 사용합니다.
 * if (user == 1) { ... };
 *
 * // "boolean" hint는 없다. -> 모든 객체는 그냥 true로 평가된다.
 *
 * 자바스크립트는 형 변환이 필요할 때, 아래와 같은 알고리즘을 따라 원하는 메서드를 찾고 호출합니다.
 *
 * 1. 객체에 obj[Symbol.toPrimitive](hint) 메서드가 있는지 찾고, 있다면 메서드를 호출합니다.
 *    - Symbol.toPrimitive는 시스템 심볼로, 심볼형 키로 사용됩니다.
 *
 * 2. 1에 해당하지 않고 hint가 "string"이면
 *    - obj.toString()이나 obj.valueOf()를 호출합니다.
 *
 * 3. 1과 2에 해당하지 않고, hint가 "number"나 "default"라면
 *    - obj.valueOf()나 obj.toString()을 호출합니다.
 */

/**
 *  ## Symbol.toPrimitive
 * 자바스크립트 내장 심볼인 Symbol.toPrimitive는 아래와 같이 목표로 하는 자료형(hint)를 명명하는 데 사용합니다.
 */

obj[Symbol.toPrimitive] = function (hint) {
  // 반드시 원시값을 반환해야 합니다.
  // hint는 "string", "number", "default" 중 하나가 될 수 있습니다.
};

let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  },
};

// 데모:
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500

/**
 * ## toString과 valueOf
 * 심볼이 생기기 전부터 존재해온 메서드들로 구식이긴 하지만 형 변환을 직접 구현할 수 있습니다.
 *
 * 객체에 Symbol.toPrimitive가 없는 경우 아래 규칙에 따라 toString이나 valueOf를 호출합니다.
 * - hint가 'string’인 경우: toString -> valueOf 순(toString이 있다면 toString을 호출, toString이 없다면 valueOf를 호출함)
 * - 그 외: valueOf -> toString 순
 *
 * 이 메서드들은 반드시 원시값을 반환해야 합니다.
 *
 * 일반 객체는 기본적으로 toString과 valueOf에 적용되는 다음 규칙을 따릅니다.
 * - toString은 문자열 "[objcet Objcet]"을 반환합니다.
 * - valueOf는 객체 자신을 반환합니다.
 */

let user2 = { name: "John" };

alert(user2); // [object Object]
alert(user2.valueOf() === user2); // true

let user3 = {
  name: "John",
  money: 1000,

  // hint가 "string"인 경우
  toString() {
    return `{name: "${this.name}"}`;
  },

  // hint가 "number"나 "default"인 경우
  valueOf() {
    return this.money;
  },
};

alert(user3); // toString -> {name: "John"}
alert(+user3); // valueOf -> 1000
alert(user3 + 500); // valueOf -> 1500

/**
 * ## 반환 타입
 * 위에서 배운 세 개의 메서드는 'hint'에 명시된 자료형으로의 형 변환을 보장해 주지 않습니다.
 *
 * toString()이 항상 문자열을 반환하리라는 보장이 없고, Symbol.toPrimitive의 hint가 "number"일 때 항상
 * 숫자형 자료가 반환되리라는 보장이 없습니다.
 *
 * 확신할 수 있는 단 한 가지는 객체가 아닌 "원시값"을 반환해 준다는 것뿐입니다.
 */

/**
 * ## 추가 형 변환
 * 객체가 피연산자일 때는 다음과 같은 단계를 거쳐 형 변환이 일어납니다.
 * 1. 객체는 원시형으로 변화됩니다. (변화 규칙은 위와 같습니다.)
 * 2. 변환 후 원시값이 원하는 형이 아닌 경우엔 또다시 형 변환이 일어납니다.
 */

// 예시
let obj = {
  // 다른 메서드가 없으면 toString에서 모든 형 변환을 처리합니다.
  toString() {
    return "2";
  },
};

alert(obj * 2); // 4, 객체가 문자열 "2"로 바뀌고, 곱셈 연산 과정에서 문자열 "2"는 숫자 2로 변경됩니다.

// obj.toString()만 사용해도 '모든 변환’을 다 다룰 수 있기 때문에,
// 실무에선 obj.toString()만 구현해도 충분한 경우가 많습니다.
// 반환 값도 ‘사람이 읽고 이해할 수 있는’ 형식이기 때문에 실용성 측면에서 다른 메서드에 뒤처지지 않습니다.
// obj.toString()은 로깅이나 디버깅 목적으로도 자주 사용됩니다.
