/**
 * # 메서드와 this
 * 객체는 사용자(user), 주문(order) 등과 같이 실제 존재하는 개체(entity)를 표현하고자 할 때 생성합니다.
 *
 * 장바구니에서 물건 선택하기, 로그인하기와 같이 사용자를 나타내는 개체는 특정한 행동(behavior)를 할 수 있습니다.
 *
 * 이것을 자바스크립트에서는 객체의 프로퍼티에 함수를 할당해 객체에 행동할 수 있는 능력을 부여합니다.
 */

/**
 * ## 메서드 만들기
 */

let user = {
  name: "John",
  age: 30,
};

// 이렇게 객체 프로퍼티에 할당된 함수를 메서드(method)라고 부릅니다.
user.sayHi = function () {
  alert("안녕하세요!");
};

user.sayHi(); // 안녕하세요!

// 이미 정의된 함수를 이용해 만들 수도 있다.
// function sayHi() {
// alert("안녕하세요!");
// };

// 선언된 함수를 메서드로 등록
// user.sayHi = sayHi;

/**
 * ### 메서드 단축 구문
 * 객체 리터럴 안에 메서드를 선언할 때 사용할 수 있는 단축 문법이 존재한다.
 */

// 아래 두 객체는 동일하게 동작합니다.

user = {
  sayHi: function () {
    alert("Hello");
  },
};

// 단축 구문을 사용하니 더 깔끔해 보이네요.
user = {
  sayHi() {
    // "sayHi: function()"과 동일합니다.
    alert("Hello");
  },
};

// 일반적인 방법과 단축 구문을 사용한 방법이 동일하지는 않다, 객체 상속과 관련된 미묘한 차이가 존재한다.

/**
 * ### 메서드와 this
 * 메서드 내부에서 this 키워드를 사용하면 객체에 접근할 수 있습니다.
 * 이때 this는 객체, 정확히는 메서드를 호출할 때 사용된 객체를 나타낸다.
 */

let user = {
  name: "John",
  age: 30,

  sayHi() {
    // 'this'는 '현재 객체'를 나타냅니다.
    alert(this.name);
  },
};

user.sayHi(); // John

// 아래와 같이 this를 사용하지 않고 외부 변수를 참조해 객체에 접근하는 것도 가능하다.
// let user = {
//   name: "John",
//   age: 30,

//   sayHi() {
//     alert(user.name); // 'this' 대신 'user'를 이용함
//   }

// };

// 하지만 이렇게 외부 변수를 사용해 객체를 참조하면 예상치 못한 에러가 발생할 수 있다.
// 예를들어 user의 주소를 다른 변수에 할당하고 user를 전혀 다른 객체로 변경한다면 user.name는 원치 않는 값을 참조한다.

let user = {
  name: "John",
  age: 30,

  sayHi() {
    // this.name을 인수로 받았다면 에러가 발생하지 않았을 것이다.
    alert(user.name); // Error: Cannot read property 'name' of null
  },
};

let admin = user;
user = null; // user를 null로 덮어씁니다.

admin.sayHi(); // sayHi()가 엉뚱한 객체를 참고하면서 에러가 발생했습니다.

/**
 * ## 자유로운 this
 * 자바스크립트의 this 값은 런타임에 결정된다. (컨텍스트에 따라 달라진다)
 * 동일한 함수라도 다른 객체에서 호출했다면 'this'가 참조하는 값이 달라진다.
 */

let user = { name: "John" };
let admin2 = { name: "Admin" };

function sayHi() {
  alert(this.name);
}

// 별개의 객체에서 동일한 함수를 사용함
user.f = sayHi;
admin2.f = sayHi;

// 'this'는 '점(.) 앞의' 객체를 참조하기 때문에
// this 값이 달라짐
user.f(); // John  (this == user)
admin2.f(); // Admin  (this == admin)

admin2["f"](); // Admin (점과 대괄호는 동일하게 동작함)

/**
 * 객체가 없어도 this가 있는 함수를 호출할 수 있다.
 *
 * function sayHi() {
 *  alert(this);
 * }
 *
 * sayHi(); // undefined
 *
 * 위와 같은 코드를 엄격 모드에서 실행하면, this에는 undefined가 할당된다.
 *
 * 엄격 모드가 아닐때는 this는 전역 객체를 참조한다.
 *
 * 이러한 식의 코드는 대개 실수로 작성된 경우가 많다.
 * this가 함수 본문에 사용되었다면 보통 객체 컨텍스트 내에서 함수를 호출할 것이라고 예상할 수 있다.
 */

/**
 * 자바스크립트의 this는 다른 언어와는 동작이 다르다.
 * 보통 this는 항상 메서드가 정의된 객체를 참조할 것(bound this)이라고 생각한다.
 *
 * 하지만 자바스크립트의 this는 런타임에 결정된다.
 * 메서드가 정의된 위치와 상관 없이 this는 '점 앞의'객체가 무엇인가에 따라 '자유롭게' 결정된다.
 *
 * 이렇게 런타임에 결정되는 this는 함수(메서드)를 하나만 만들어 여러 객체에서 재사용할 수 있다는 장점을 가지지만,
 * 이러한 유연함 때문에 실수가 발생할 수 있다는 것은 단점이다.
 */

/**
 * ## this가 없는 화살표 함수
 * 화살표 함수는 일반 함수와는 달리 '고유한' this를 가지지 않습니다.
 * 화살표 함수에서 this를 참조하면, 외부 함수의 this를 참조하게 됩니다.
 */

let user = {
  firstName: "보라",
  sayHi() {
    // this는 arrow가 아닌 외부 함수 user.sayHi()의 this가 됩니다.
    let arrow = () => alert(this.firstName);
    arrow();
  },
};

user.sayHi(); // 보라

// 별개의 this가 만들어지는 건 원하지 않고, 외부 컨텍스트에 있는 this를 이용하고 싶은 경우 화살표 함수가 유용합니다.
