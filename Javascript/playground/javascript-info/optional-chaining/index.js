/**
 * # 옵셔널 체이닝 '?.'
 * 옵셔널 체이닝(optional chaining) ?. 을 사용하면 프로퍼티가 없는 중첩 객체를 에러 없이 안전하게 접근할 수 있습니다.
 */

/**
 * ## 옵셔널 체이닝이 필요한 이유
 * 몇 가지 사례를 통해 옵셔널 체이닝의 등장 배경에 대해서 알아보자.
 *
 * 유저 중 일부가 주소 정보를 가지고 있지 않은 경우
 * let user = {}; // 주소 정보가 없는 사용자
 * alert(user.address.street); // TypeError: Cannot read property 'street' of undefined
 *
 * 페이지에 존재하지 않는 요소에 접근하려는 경우
 * // querySelector(...) 호출 결과가 null인 경우 에러 발생
 * let html = document.querySelector('.my-element').innerHTML;
 *
 * 옵셔널 체이닝이 추가되기 전에 이런 문제를 해결하기 위해서 && 연산자를 사용하곤 했다.
 * let user = {}; // 주소 정보가 없는 사용자
 * alert( user && user.address && user.address.street ); // undefined, 에러가 발생하지 않습니다.
 *
 * 해당 객체나 프로퍼티가 있는지 확인하기 때문에 에러가 발생하지는 않지만 코드가 길어진다는 단점이 있다.
 */

/**
 * ## 옵셔널 체이닝의 등장
 * ?.은 ?. '앞'의 평가 대상이 undefined나 null이면 평가를 멈추고 undefined를 반환한다.
 */

let user = {}; // 주소 정보가 없는 사용자

alert(user?.address?.street); // undefined, 에러가 발생하지 않습니다.

let user2 = null;

alert(user2?.address); // undefined
alert(user2?.address.street); // undefined

/**
 * 옵셔널 체이닝을 남용하지 마세요.
 * ?.는 존재하지 않아도 괜찮은 대상에만 사용해야 한다.
 *
 * 예시에서 논리상 user는 반드시 있어야 하지만, address는 필수값이 아니다.
 * 따라서 user.address?.street를 사용하는 것이 바람직하다.
 */

/**
 * ## 단락 평가
 * ?. 는 왼쪽 평가대상에 값이 없으면 즉시 평가를 멈춘다.
 * 이런 평가 방법을 단락 평가(short-circuit)라고 부른다.
 */

let user3 = null;
let x = 0;

user3?.sayHi(x++); // 아무 일도 일어나지 않는다.

alert(x); // 0, x는 증가하지 않는다.

/**
 * ## ?.()와 ?.[]
 * ?.은 연산자가 아니다.
 * 함수나 대괄호와 함께 동작하는 특별한 문법 구조체(syntax construct)이다.
 */

// ?.()를 통해 정의되지 않은 메서드를 호출할 때 에러 없이 평가를 멈출 수 있다.
let user4 = {
  admin() {
    alert("관리자 계정입니다.");
  },
};

let user5 = {};

user4.admin?.(); // 관리자 계정입니다.
user5.admin?.();

// ?.[]를 통해 객체 존재 여부가 확실치 않은 경우에도 안전하게 프로퍼티를 읽을 수 있다.

let user6 = {
  firstName: "Violet",
};

let user7 = null; // user2는 권한이 없는 사용자라고 가정해봅시다.

let key = "firstName";

alert(user6?.[key]); // Violet
alert(user7?.[key]); // undefined

alert(user6?.[key]?.something?.not?.existing); // undefined

delete user?.name; // user가 존재하면 user.name을 삭제합니다.

// user가 존재할 경우 user.name에 값을 쓰려는 의도로 아래와 같이 코드를 작성해 보았습니다.

user?.name = "Violet"; // SyntaxError: Invalid left-hand side in assignment
// 에러가 발생하는 이유는 undefined = "Violet"이 되기 때문입니다.