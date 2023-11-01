/**
 * # 객체
 * 자바스크립트엔 여덟 가지 자료형이 있다.
 * 그 중 객체를 제외한 나머지 일곱 개는 오직 하나의 데이터(문자열, 숫자 등)만 담을 수 있어 '원시형(primitive type)'이라 부른다.
 *
 * 객체형은 원시형과 달리 다양한 데이터를 담을 수 있다.
 * 키로 구분된 데이터 집합이나 복잡한 개체(entity)를 저장할 수 있다.
 *
 * 객체는 중괄호 {...}를 이용하여 만들 수 있다.
 * 중괄호 안에는 키(key): 값(value) 쌍으로 구성된 프로퍼티(property)를 여러 개 넣을 수 있다.
 * 이때 키(key)에는 문자형, 값(value)에는 모든 자료형이 허용된다.
 */

// 빈 객체를 만드는 방법은 두 가지가 있다.
let user = new Object(); // '객체 생성자' 문법
let user2 = {}; // '객체 리터럴' 문법, 객체를 선언할 때 주로 이 방법을 사용한다.

/**
 * ## 리터럴과 프로퍼티
 */

let user3 = {
  // 객체
  name: "John", // 키: "name",  값: "John"
  age: 30, // 키: "age", 값: 30
};

// 프로퍼티 값 얻기
alert(user.name); // John
alert(user.age); // 30

// 프로퍼티 값엔 모든 자료형이 올 수 있다.
user.isAdmin = true;

// delete 연산자를 이용하면 프로퍼티를 삭제할 수 있다.
delete user.age;

let user = {
  name: "John",
  age: 30,
  "likes birds": true, // 복수의 단어는 따옴표로 묶어야 합니다.
  // 이런 쉼표를 ‘trailing(길게 늘어지는)’ 혹은 ‘hanging(매달리는)’ 쉼표라고 부릅니다.
  // 이렇게 끝에 쉼표를 붙이면 모든 프로퍼티가 유사한 형태를 보이기 때문에 프로퍼티를 추가, 삭제, 이동하는 게 쉬워집니다.
};

// 상수 객체는 수정될 수 있다.
const user = {
  name: "John",
};

user.name = "Pete"; // (*) 객체 안의 프로퍼티를 수정할 떄 오류가 발생하지 않는다.

alert(user.name); // Pete

user = {}; // 새로운 객체를 할당하려고 할 때 오류가 발생한다.

/**
 * ## 대괄호 표기법
 * 아래와 같이 여러 단어를 조합해 프로퍼티 키를 만든 경우엔, 점 표기법을 사용해 프로퍼티 값을 읽을 수 없다.
 *
 *  // 문법 에러가 발생합니다.
 * user.likes birds = true
 *
 * 이렇게 키가 유효한 변수 식별자가 아닌 경우엔 점 표기법 대신 대괄호 표기법(square bracket notation)을 사용할 수 있다.
 *
 *
 */

let user = {};

// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); // true

// delete
delete user["likes birds"];

let key1 = "likes birds";

// user["likes birds"] = true; 와 같습니다.
user[key1] = true;

let user = {
  name: "John",
  age: 30,
};

let key2 = prompt("사용자의 어떤 정보를 얻고 싶으신가요?", "name");

// 변수로 접근
alert(user[key2]); // John (프롬프트 창에 "name"을 입력한 경우)

// 점 표기법은 위와 같은 접근 방법이 불가능하다.
let user = {
  name: "John",
  age: 30,
};

let key3 = "name";
alert(user.key3); // undefined

/**
 * ### 계산된 프로퍼티
 * 객체를 만들 때 객체 리터럴 안의 프로퍼티 키가 대괄호로 둘러싸여 있는 경우,
 * 이를 계산된 프로퍼티(computer property)라고 부른다.
 */

let fruit = prompt("어떤 과일을 구매하시겠습니까?", "apple");

let bag = {
  [fruit]: 5, // 변수 fruit에서 프로퍼티 이름을 동적으로 받아 옵니다.
};

alert(bag.apple); // fruit에 "apple"이 할당되었다면, 5가 출력됩니다.

// 위의 예시와 동일하게 동작한다.

let fruit2 = prompt("어떤 과일을 구매하시겠습니까?", "apple");
let bag2 = {};

// 변수 fruit을 사용해 프로퍼티 이름을 만들었습니다.
bag[fruit] = 5;

// 대괄호 표기법은 강력하지만 작성하기 번거롭다는 단점이 있다.
// 일반적인 상황에서는 점 표기법을 사용하다가 복잡한 상황, 필요한 상황이 발생한 경우 대괄호 표기법을 사용하자.

/**
 * ## 단축 프로퍼티
 * 실무에선 프로퍼티 값을 기존 변수에서 받아와 사용하는 경우가 종종 있다.
 */

function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...등등
  };
}

let user = makeUser("John", 30);
alert(user.name); // John

// 위의 예시에서 프로퍼티 값 단축 구문(property value shorthand)를 사용하여 짧게 줄일 수 있다.
function makeUser(name, age) {
  return {
    name, // name: name 과 같음
    age, // age: age 와 같음
    // ...
  };
}

// 둘이 혼합하여 사용하는 것 또한 가능하다.
let user = {
  name, // name: name 과 같음
  age: 30,
};

/**
 * ## 프로퍼티 이름의 제약사항
 * 객체 프로퍼티엔 프로퍼티 이름에 대한 특별한 제약이 없다.
 * 어떤 문자형이, 심볼형 값도 프로퍼티 키가 될 수 있다.
 *
 * 문자형이나 심볼형에 속하지 않은 값은 문자열로 자동 형 변환된다.
 */

// 예약어를 키로 사용해도 괜찮습니다.
let obj = {
  for: 1,
  let: 2,
  return: 3,
};

alert(obj.for + obj.let + obj.return); // 6

let obj2 = {
  0: "test", // "0": "test"와 동일합니다.
};

// 숫자 0은 문자열 "0"으로 변환되기 때문에 두 얼럿 창은 같은 프로퍼티에 접근합니다,
alert(obj2["0"]); // test
alert(obj2[0]); // test (동일한 프로퍼티)

// 특별한 경우 __proto__
let obj3 = {};
obj3.__proto__ = 5; // 숫자를 할당합니다.
alert(obj3.__proto__); // [object Object] - 숫자를 할당했지만 값은 객체가 되었습니다. 의도한대로 동작하지 않네요.

/**
 * ## 'in' 연산자로 프로퍼티 존재 여부 확인하기
 * 자바스크립트는 존재하지 않는 프로퍼티에 접근하려 하면 에러 대신 undefined를 반환한다.
 *
 * 이러한 특징을 이용해 프로퍼티 존재 여부를 확인할 수 있다
 *
 * let user = {};
 *
 * alert( user.noSuchProperty === undefined ); // true는 '프로퍼티가 존재하지 않음'을 의미합니다.
 *
 * 연산자 in을 사용하면 이보다 쉽게 프로퍼티 존재 여부를 확인할 수 있다.
 *
 * "key" in object
 */

let user = { name: "John", age: 30 };

alert("age" in user); // user.age가 존재하므로 true가 출력됩니다.
alert("blabla" in user); // user.blabla는 존재하지 않기 때문에 false가 출력됩니다.

let user = { age: 30 };

let key = "age";
alert(key in user); // true, 변수 key에 저장된 값("age")을 사용해 프로퍼티 존재 여부를 확인합니다.

// 흔한 경우는 아니지만 값에 undefined를 할당해놓은 경우 프로퍼티 존재 유무 검사에 실패할 수 있다. (undefined를 이용하는 경우)
let obj4 = {
  test: undefined,
};

alert(obj4.test); // 값이 `undefined`이므로, 얼럿 창엔 undefined가 출력됩니다. 그런데 프로퍼티 test는 존재합니다.

alert("test" in obj4); // `in`을 사용하면 프로퍼티 유무를 제대로 확인할 수 있습니다(true가 출력됨).

/**
 * ## 'for...in' 반복문
 * for..in 반복문을 사용하면 객체의 모든 키를 순회할 수 있다.
 *
 * 문법
 * for (key in object) {
 *  // 각 프로퍼티 키(key)를 이용하여 본문(body)을 실행합니다.
 * }
 */

let user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (let key in user) {
  // 키
  alert(key); // name, age, isAdmin
  // 키에 해당하는 값
  alert(user[key]); // John, 30, true
}

/**
 * ### 객체 정렬 방식
 * 객체는 '특별한 방식으로 정렬' 된다.
 * 정수 프로퍼티(integer property)는 자동으로 정렬되고,
 * 그 외의 프로퍼티는 객체에 추가한 순서 그대로 정렬된다.
 */

let codes = {
  49: "독일",
  41: "스위스",
  44: "영국",
  // ..,
  1: "미국",
};

for (let code in codes) {
  alert(code); // 1, 41, 44, 49
}

let user = {
  name: "John",
  surname: "Smith",
};
user.age = 25; // 프로퍼티를 하나 추가합니다.

// 정수 프로퍼티가 아닌 프로퍼티는 추가된 순서대로 나열됩니다.
for (let prop in user) {
  alert(prop); // name, surname, age
}

// 정수로 취급되지 않게 하면 정렬을 꺨 수 있다.
// 정수 프로퍼티인 경우에만 정렬이 일어난다.
let codes2 = {
  "+49": "독일",
  "+41": "스위스",
  "+44": "영국",
  // ..,
  "+1": "미국",
};

for (let code in codes2) {
  alert(+code); // 49, 41, 44, 1
}
