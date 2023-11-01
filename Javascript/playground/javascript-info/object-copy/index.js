/**
 * # 참조에 의한 객체 복사
 * 객체는 원시 타입과 달리 '참조에 의해(by reference)' 저장되고 복사된다.
 *
 * // 원시값(문자열, 숫자, 불린 값)은 '값 그대로' 저장, 할당되고 복사된다.
 */

// 원시값의 경우 두 개의 독립된 변수에 각각 문자열 "Hello!"가 저장된다.
let message = "Hello!";
let phrase = message;

// 객체의 경우 값이 그대로 저장되는 것이 아니라, 객체가 저장되어있는 '메모리 주소'인 객체에 대한 '참조 값'이 저장된다.
let user = {
  // 변수 user엔 객체를 '참조'할 수 있는 값이 저장된다.
  name: "John",
};

// 따라서 객체가 할당된 변수를 복사할 땐 객체의 참조 값이 복사되고 객체는 복사되지 않는다.
let user2 = { name: "John" };

let admin = user2; // 참조값을 복사함

admin.name = "Pete"; // 'admin' 참조 값에 의해 변경됨

alert(user.name); // 'Pete'가 출력됨. 'user' 참조 값을 이용해 변경사항을 확인함

/**
 * ### 참조에 의한 비교
 * 객체 비교 시 동등 연산자와 일치 연산자는 동일하게 동작한다.
 *
 * 비교 시 피연산자인 두 객체가 동일한 객체인 경우 참을 반환한다.
 */

let a = {};
let b = a; // 참조에 의한 복사

alert(a == b); // true, 두 변수는 같은 객체를 참조합니다.
alert(a === b); // true

let a2 = {};
let b2 = {}; // 독립된 두 객체

alert(a2 == b2); // false
alert(a2 === b2); // false

/**
 * ## 객체 복사, 병합과 Object.assign
 * 기존에 있던 객체와 똑같으면서 독립적인 객체를 만들고 싶을 떄
 *
 * 자바스크립트는 객체 복제 내장 메서드를 지원하지 않는다.
 * (객체를 복제할 일은 거의 없다, 참조에 의한 복사로 가능한 경우가 다수이다.)
 *
 * 복제가 정말 필요하다면 새로운 객체를 만든 다음 기존 객체의 프로퍼티를 순회하면서 원시 수준까지 프로퍼티를 복사하면 된다.
 */

// 순회 복제
let user3 = {
  name: "John",
  age: 30,
};

let clone = {}; // 새로운 빈 객체

// 빈 객체에 user 프로퍼티 전부를 복사해 넣습니다.
for (let key in user3) {
  clone[key] = user3[key];
}

// 이제 clone은 완전히 독립적인 복제본이 되었습니다.
clone.name = "Pete"; // clone의 데이터를 변경합니다.

alert(user3.name); // 기존 객체에는 여전히 John이 있습니다.

// Object.assign을 이용한 복제
let user4 = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// permissions1과 permissions2의 프로퍼티를 user로 복사합니다.
Object.assign(user4, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }

let user5 = { name: "John" };

Object.assign(user5, { name: "Pete" });

alert(user5.name); // user = { name: "Pete" }

let user6 = {
  name: "John",
  age: 30,
};

let clone = Object.assign({}, user6);

/**
 * ## 중첩 객체 복사
 * 프로퍼티가 다른 객체인 경우
 *
 * 프로퍼티의 객체 여부를 조사하며 객체의 구조도 복사해주는 반복문을 이용해야한다.
 * 이런 방식을 깊은 복사(deep cloning)라고 한다.
 *
 * 깊은 복사 시 사용되는 표준 알고리즘은 Structured cloning algorithm 이다.
 *
 * 자바스크립트 라이브러리 lodash의 메서드인 _cloneDeep(obj)를 사용하는 것도 하나의 방법이다.
 */

let user7 = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};

let clone = Object.assign({}, user7);

alert(user7.sizes === clone.sizes); // true, 같은 객체입니다.

// user와 clone는 sizes를 공유합니다.
user7.sizes.width++; // 한 객체에서 프로퍼티를 변경합니다.
alert(clone.sizes.width); // 51, 다른 객체에서 변경 사항을 확인할 수 있습니다.
