/**
 * ## new 연산자와 생성자 함수
 * 개발을 하다 보면 유사한 객체 여러 개를 만들어야 할 때가 생긴다.
 *
 * 'new' 연산자와 생성자 함수를 사용하면 유사한 객체 여러 개를 쉽게 만들 수 있다.
 */

/**
 * ### 생성자 함수
 * 생성자 함수(constructor function)와 일반 함수에 기술적인 차이는 없다.
 *
 * 다만 생성자 함수는 아래 두 관례를 따른다.
 * 1. 함수 이름의 첫 글자는 대문자로 시작한다.
 * 2. 반드시 'new' 연산자를 붙여 실행한다.
 */

// 예시
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("보라");

alert(user.name); // 보라
alert(user.isAdmin); // false

/**
 * new User(...) 함수는 다음과 같은 알고리즘으로 동작한다.
 * 1. 빈 객체를 만들어 this에 할당한다.
 * 2. 함수 본문을 실행한다. this에 새로운 프로퍼티를 추가해 this를 수정한다.
 * 3. this를 반환한다.
 */

function User2(name) {
  // this = {};  (빈 객체가 암시적으로 만들어짐)

  // 새로운 프로퍼티를 this에 추가함
  this.name = name;
  this.isAdmin = false;

  // return this;  (this가 암시적으로 반환됨)
}

let user2 = new User2("보라");

// 위 코드와 동일하게 동작한다.

// let user2 = {
//   name: "보라",
//   isAdmin: false
// };

// 생성자 함수를 이용하면 객체 리터럴 문법으로 하나 하나 만드는 방법돠 훨씬 쉽게 객체를 만들 수 있다.

// 익명 생성자 함수
// 재사용을 막으면서 코드를 캡슐화 할 수 있다.
let user3 = new (function () {
  this.name = "John";
  this.isAdmin = false;

  // 사용자 객체를 만들기 위한 여러 코드.
  // 지역 변수, 복잡한 로직, 구문 등의
  // 다양한 코드가 여기에 들어갑니다.
})();

/**
 * ## new.target과 생성자 함수
 * - 자주 사용되는 문법은 아니다.
 *
 * new.target 프로퍼티를 사용하면 함수가 new와 함께 호출되었는지 아닌지를 알 수 있다.
 */

function User3() {
  alert(new.target);
}

// 'new' 없이 호출함
User3(); // undefined

// 'new'를 붙여 호출함
new User3(); // function User { ... }

// 이것을 활용해 일반적인 방법으로 함수를 호출해도 new를 붙여 호출한 것과 같이 동작하도록 만들 수 있다.
function User4(name) {
  if (!new.target) {
    // new 없이 호출해도
    return new User4(name); // new를 붙여줍니다.
  }

  this.name = name;
}

let bora = User4("보라"); // 'new User'를 쓴 것처럼 바꿔줍니다.
alert(bora.name); // 보라

// 라이브러리에서 종종 사용한 걸 발견할 수 있다.
// 이 방법을 이용하면 new 여부와 상관 없이 코드가 동일하게 동작하기 때문에 좀 더 유연하게 코드를 작성할 수 있다.
// 하지만 new를 생략하게 되면 코드가 정확히 무슨 일을 하는지 알기 어렵기 때문에 필요한 경우에만 사용하자.

/**
 * ## 생성자와 return문
 * 생성자 함수엔 보통 return 문이 없다.
 * 반환해야 할 것들은 모두 this에 저장되고, this는 자동으로 반환되기 때문에 반환문을 명시적으로 써 줄 필요가 없다.
 *
 * 생성자 함수에 return문을 명시해준다면 아래와 같은 규칙이 적용된다.
 * - 객체를 return 한다면 this 대신 객체가 반환된다.
 * - 원시형을 return 한다면 return문이 무시된다. (this가 반환된다)
 */

// 1.
function BigUser() {
  this.name = "원숭이";

  return { name: "고릴라" }; // <-- this가 아닌 새로운 객체를 반환함
}

alert(new BigUser().name); // 고릴라

// 2.
function SmallUser() {
  this.name = "원숭이";

  return; // <-- this를 반환함
}

alert(new SmallUser().name); // 원숭이

// return 문이 있는 생성자 함수는 거의 존재하지 않는다.

/**
 * ## 생성자 내 메서드
 * 생성자 함수를 사용하면 매개변수를 이용해 객체 내부를 자유롭게 구성할 수 있다. (유연성 확보)
 */

function User5(name) {
  this.name = name;

  this.sayHi = function () {
    alert("제 이름은 " + this.name + "입니다.");
  };
}

let bora2 = new User5("이보라");

bora2.sayHi(); // 제 이름은 이보라입니다.

/*
bora = {
   name: "이보라",
   sayHi: function() { ... }
}
*/
