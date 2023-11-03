function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

alert(user.ref.name); // 결과가 어떻게 될까요? -> 에러가 발생한다.
// Error: Cannot read property 'name' of undefined

/**
 * this 값은 호출 시점에 결정된다.
 *
 * 위의 예시에서 this 값을 설정할 때 객체 정의가 사용되지 않았다.
 * 따라서 makeUser() 내 this는 undefined가 된다.
 *
 * function makeUser() {
 *  return this; // 객체 리터럴을 사용하지 않는다.
 * }
 *
 * alert( makeUser().name );
 * // user.ref.name과 결과가 동일하다.
 */

// 에러가 발생하지 않는 코드
function makeUser() {
  return {
    name: "John",
    ref() {
      // ref는 메서드가 되고 this는 .앞의 객체를 가리키게 된다.
      return this;
    },
  };
}

let user2 = makeUser();

alert(user2.ref().name); // John
