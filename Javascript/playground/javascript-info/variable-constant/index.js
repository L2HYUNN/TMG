/**
 * # 변수
 * 변수(variable)는 데이터를 저장할 때 쓰이는 '이름이 붙은 저장소'이다.
 */

let message;
message = "Hello"; // 문자열을 저장한다.

alert(message); // 변수에 저장된 값을 보여준다.

// 변수를 정의하고 값을 할당한다.
let message2 = "Hello";

alert(message2);

// 한 줄에 여러 변수를 선언하는 것도 가능하다.
// let user = 'John', age = 25, message = 'Hello';
// 가독성을 위해서 가능하면 다음과 같이 한 줄에 하나의 변수를 작성하자.
let user = "John",
  age = 25,
  message3 = "Hello";

// 오래된 변수 선언 방식인 var는 추후에 '오래된 var' 챕터에서 따로 알아본다.

// 변수 두 개를 선언하고, 한 변수의 데이터를 다른 변수에 복사할 수 있다.
let Hello = "Hello world!";

let message4;

// 값을 복사한다.
message4 = Hello;

// 결과는 같다.
alert(Hello);
alert(message4);

// 변수를 두 번 선언하면 에러가 발생한다.
let message5 = "This";

// 'let'을 반복하면 에러가 발생합니다.
// let message5 = "That"; // SyntaxError: 'message' has already been declared

/**
 * # 변수 명명 규칙
 *
 * 1. 변수명에는 오직 문자와 숫자, 그리고 기호 $와 _만 들어갈 수 있다.
 * 2. 첫 글자는 숫자가 될 수 없다.
 *
 * 여러 단어를 조합하여 변수명을 만들때는 관습적으로 카멜 표기법(camelCase)를 사용한다.
 *
 * 대소문자가 구분되기 때문에 apple과 APPLE은 전혀 다른 변수이다.
 *
 * 자바스크립트 내부에서 이미 사용 중인 예약어(reserved name)은 사용할 수 없다.
 *
 * ## 'use strict' 없이 할당하기
 *
 * // 참고: 이 예제에는 "use strict"가 없습니다.
 * num = 5; // 변수 'num'이 정의되어있지 않더라도, 단순 할당만으로 변수가 생성됩니다.
 * alert(num); // 5
 *
 * // "use strict" 적용의 경우
 * "use strict";
 * num = 5; // error: num is not defined
 */

/**
 * # 상수
 * 변화하지 않는 변수를 선언할 땐, let대신 const를 사용한다.
 * const로 선언한 변수를 상수(constant)라고 부른다.
 *
 */

const myBirthday = "18.04.1982";

// 상수는 재할당할 수 없으므로 변경하려고 하면 에러가 발생한다.
// myBirthday = '01.01.2001'; // error, can't reassign the constant!

/**
 * ## 대문자 상수
 * 기억하기 힘든 값을 변수에 할당해 별칭으로 사용하는 것은 널리 사용되는 관습이다.
 * 대문자로 상수를 만들어 사용하면 다음과 같은 장점이 있습니다.
 *
 * - COLOR_ORANGE는 "#FF7F00"보다 기억하기가 훨씬 쉽습니다.
 * - COLOR_ORANGE를 사용하면 "#FF7F00"를 사용하는 것보다 오타를 낼 확률이 낮습니다.
 * - COLOR_ORANGE가 #FF7F00보다 훨씬 유의미하므로, 코드 가독성이 증가합니다.
 *
 */

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// 색상을 고르고 싶을 때 별칭을 사용할 수 있게 되었습니다.
let color = COLOR_ORANGE;
alert(color); // #FF7F00

// 페이지 로딩시간과 같이 런타임 과정에서 계산되지만 최초 할당 이후 값이 변경되지 않는 경우에도 상수를 이용한다.
const pageLoadTime = /* 웹페이지를 로드하는데 걸린 시간 */ 0;

/**
 * # 바람직한 변수명
 * 변수명은 간결하고, 명확해야 한다.
 * 변수가 담고있는 것이 무엇인지 잘 설명할 수 있어야 한다.
 *
 * 아래는 변수 명명 시 참고하기 좋은 규칙이다.
 *
 * - userName 이나 shoppingCart처럼 사람이 읽을 수 있는 이름을 사용하세요.
 * - 무엇을 하고 있는지 명확히 알고 있지 않을 경우 외에는 줄임말이나 a, b, c와 같은 짧은 이름은 피하세요.
 * - 최대한 서술적이고 간결하게 명명해 주세요. data와 value는 나쁜 이름의 예시입니다. 이런 이름은 아무것도 설명해주지 않습니다. 코드 문맥상 변수가 가리키는 데이터나 값이 아주 명확할 때에만 이런 이름을 사용합시다.
 * - 자신만의 규칙이나 소속된 팀의 규칙을 따르세요. 만약 사이트 방문객을 'user’라고 부르기로 했다면, 이와 관련된 변수를 currentVisitor나 newManInTown이 아닌 currentUser나 newUser라는 이름으로 지어야 합니다.
 */
