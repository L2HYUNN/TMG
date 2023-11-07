/**
 * # 심볼형
 * 자바스크립트는 객체 프로퍼티 키로 오직 문자형과 심볼형만을 허용한다.
 *
 * 프로퍼티 키로 심볼값을 사용해 보면서, 심볼형 키를 사용할 때의 이점을 알아보자.
 */

/**
 * ## 심볼
 * 심볼(symbol)은 유일한 식별자(unique identifier)를 만들고 싶을 때 사용한다.
 *
 * Symbol()을 사용하면 심볼값을 만들 수 있습니다.
 */

// id는 새로운 심볼이 됩니다.
let id = Symbol();

// 심볼을 만들 때 심볼 이름이라 불리는 설명을 붙일 수도 있다. -> 심볼 이름은 디버깅 시 유용하다.
// 심볼 id에는 "id"라는 설명이 붙습니다.
let id2 = Symbol("id");

// 심볼은 유일성이 보장되는 자료형이기 때문에, 설명이 동일한 심볼을 여러 개 만들어도 각 심볼값은 다르다.
let id3 = Symbol("id");
let id4 = Symbol("id");

alert(id3 == id4); // false

// 심볼형 값은 다른 자료형으로 암시적 형 변환(자동 형 변환)되지 않습니다.
let id5 = Symbol("id");
alert(id5); // TypeError: Cannot convert a Symbol value to a string

let id6 = Symbol("id");
alert(id6.toString()); // Symbol(id)가 얼럿 창에 출력됨

let id7 = Symbol("id");
alert(id7.description); // id

/**
 * ## '숨김' 프로퍼티
 * 심볼을 이용하면 '숨김(hidden)' 프로퍼티를 만들 수 있습니다.
 * 숨김 프로퍼티는 외부 코드에서 접근이 불가능하고 값도 덮어쓸 수 없는 프로퍼티입니다.
 */

let user = {
  // 서드파티 코드에서 가져온 객체
  name: "John",
};

let id8 = Symbol("id");

user[id8] = 1;

alert(user[id8]); // 심볼을 키로 사용해 데이터에 접근할 수 있습니다.

/**
 * user는 서드파티 코드에서 가지고 온 객체이므로 함부로 새로운 프로퍼티를 추가할 수 없다.
 * 하지만 심볼은 서드파티 코드에서 접근할 수 없기 때문에, 심볼을 사용하면 서드파티 코드가 모르게 user에 프로퍼티를 추가할 수 있다.
 */

/**
 * ### Symbols in a literal
 * 객체 리터럴 {...}을 사용해 객체를 만든 경우, 대괄호를 사용해 심볼형 키를 만들 수 있다.
 */
let id9 = Symbol("id");

let user = {
  name: "John",
  [id9]: 123, // "id": 123은 안됨
};

/**
 * ### 심볼은 for...in 에서 배제됩니다.
 * 키가 심볼인 프로퍼티는 for...in 반복문에서 배제됩니다.
 */
let id10 = Symbol("id");
let user = {
  name: "John",
  age: 30,
  [id10]: 123,
};

for (let key in user) alert(key); // name과 age만 출력되고, 심볼은 출력되지 않습니다.

// 심볼로 직접 접근하면 잘 작동합니다.
alert("직접 접근한 값: " + user[id10]);

// Object.keys(user)에서도 키가 심볼인 프로퍼티는 배제됩니다.
// '심볼형 프로퍼티 숨기기(hiding symbolic property)'라 불리는 이런 원칙 덕분에 외부 스크립트나 라이브러리는
// 심볼형 키를 가진 프로퍼티에 접근하지 못합니다.

// 그런데 Object.assign은 키가 심볼인 프로퍼티를 배제하지 않고 객체 내 모든 프로퍼티를 복사합니다.
let id11 = Symbol("id");
let user = {
  [id11]: 123,
};

let clone = Object.assign({}, user);

alert(clone[id11]); // 123

/**
 * ## 전역 심볼
 * 이름이 같은 심볼이 같은 개체를 가리키길 원하는 경우가 있다.
 * 이러한 경우 전역 심볼 레지스트리(global symbol registry)를 이용할 수 있다.
 */

// 전역 레지스트리에서 심볼을 읽습니다.
let id12 = Symbol.for("id"); // 심볼이 존재하지 않으면 새로운 심볼을 만듭니다.

// 동일한 이름을 이용해 심볼을 다시 읽습니다(좀 더 멀리 떨어진 코드에서도 가능합니다).
let idAgain = Symbol.for("id");

// 두 심볼은 같습니다.
alert(id12 === idAgain); // true

/**
 * ### Symbol.keyFor
 * Symbol.for(key)와 반대로 Symbol.keyFor(sym)를 사용하면 심볼의 이름을 얻을 수 있다.
 */

// 이름을 이용해 심볼을 찾음
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// 심볼을 이용해 이름을 얻음
alert(Symbol.keyFor(sym)); // name
alert(Symbol.keyFor(sym2)); // id

let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

alert(Symbol.keyFor(globalSymbol)); // name, 전역 심볼
alert(Symbol.keyFor(localSymbol)); // undefined, 전역 심볼이 아님

alert(localSymbol.description); // name

/**
 * ## 시스템 심볼
 * '시스템 심볼(system symbol)'은 자바스크립트 내부에서 사용되는 심볼입니다.
 * 시스템 심볼을 활용하면 객체를 미세 조정할 수 있습니다.
 * 명세서 내의 표, 잘 알려진 심볼(well-known symbols)에서 어떤 시스템 심볼이 있는지 살펴보세요.
 *
 * - Symbol.hasInstanc
 * - Symbol.isConcatSpreadabl
 * - Symbol.iterato
 * - Symbol.toPrimitive
 * - 기타 등등
 */

// 사실 심볼을 완전히 숨길 방법은 없습니다.
// 내장 메서드 Object.getOwnPropertySymbols(obj)를 사용하면 모든 심볼을 볼 수 있고,
// 메서드 Reflect.ownKeys(obj)는 심볼형 키를 포함한 객체의 모든 키를 반환해줍니다.
// 그런데 대부분의 라이브러리, 내장 함수 등은 이런 메서드를 사용하지 않습니다.
