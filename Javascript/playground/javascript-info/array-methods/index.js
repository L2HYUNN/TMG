/**
 * # 배열과 메서드
 * 배열과 관련된 다양한 메서드를 학습합니다.
 */

/**
 * ## 요소 추가 - 제거 메서드
 * 배열의 맨 앞이나 끝에 요소(item)를 추가하거나 제거하는 메서드
 *
 * arr.push(...items) - 맨 끝에 요소 추가
 * arr.pop() - 맨 끝 요소 제거
 * arr.shift() - 맨 앞 요소 제거
 * arr.unshift(...items) - 맨 앞에 요소 추가
 */

// splice

// 배열 또한 객체이므로 delete 연산자를 사용하여 프로퍼티를 지울 수 있지만, length는 바뀌지 않는다.
let arr = ["I", "go", "home"];

delete arr[1]; // "go"를 삭제합니다.

alert(arr[1]); // undefined

// delete를 써서 요소를 지우고 난 후 배열 --> arr = ["I",  , "home"];
alert(arr.length); // 3

// arr.splice()를 사용하면 욧 추가, 삭제, 교체가 모두가능하다.
// arr.splice(index[, deleteCount, elem1, ..., elemN])

// 첫 번째 매개변수 인덱스(index)는 조작을 가할 첫 번째 요소를 가리킵니다.

// 두 번째 매개변수는 deleteCount로, 제거하고자 하는 요소의 개수를 나타냅니다.

// 나머지 elem1, ..., elemN은 배열에 추가할 요소를 나타냅니다.

// splice 메서드를 이용한 요소의 삭제

let arr2 = ["I", "study", "JavaScript"];

arr2.splice(1, 1); // 인덱스 1부터 요소 한 개를 제거

alert(arr2); // ["I", "JavaScript"]

// splice 메서드를 이용한 요소의 삭제와 교체
let arr3 = ["I", "study", "JavaScript", "right", "now"];

// 처음(0) 세 개(3)의 요소를 지우고, 이 자리를 다른 요소로 대체합니다.
arr3.splice(0, 3, "Let's", "dance");

alert(arr3); // now ["Let's", "dance", "right", "now"]

// splice는 삭제된 요소로 구성된 배열을 반환합니다.
let arr4 = ["I", "study", "JavaScript", "right", "now"];

// 처음 두 개의 요소를 삭제함
let removed = arr4.splice(0, 2);

alert(removed); // "I", "study" <-- 삭제된 요소로 구성된 배열

// deleteCount를 0으로 설정하여 요소를 제거하지 않고 새로운 요소를 추가할 수 있습니다.
let arr5 = ["I", "study", "JavaScript"];

// 인덱스 2부터
// 0개의 요소를 삭제합니다.
// 그 후, "complex"와 "language"를 추가합니다.
arr5.splice(2, 0, "complex", "language");

alert(arr5); // "I", "study", "complex", "language", "JavaScript"

// splice에서의 음수 인덱스
let arr6 = [1, 2, 5];

// 인덱스 -1부터 (배열 끝에서부터 첫 번째 요소)
// 0개의 요소를 삭제하고
// 3과 4를 추가합니다.
arr6.splice(-1, 0, 3, 4);

alert(arr6); // 1,2,3,4,5

// slice
// arr.slice([start], [end])
// arr.slice는 "start" 인덱스부터 "end" 인덱스 전까지의 요소를 복사한 "새로운" 배열을 반환합니다.
let arr7 = ["t", "e", "s", "t"];

alert(arr7.slice(1, 3)); // e,s (인덱스가 1인 요소부터 인덱스가 3인 요소까지를 복사(인덱스가 3인 요소는 제외))

alert(arr7.slice(-2)); // s,t (인덱스가 -2인 요소부터 제일 끝 요소까지를 복사)

// arr.slice()는 인수를 하나도 넘기지 않고 호출하여 arr의 복사본을 만들 수 있습니다.

// concat
// arr.concat은 기존 배열의 요소를 사용해 새로운 배열을 만들거나 기존 배열에 요소를 추가하고자 할 때 사용할 수 있습니다.
// arr.concat(arg1, arg2...)

// 인수엔 배열이나 값이 올 수 있으며, 인수 갯수엔 제한이 없습니다.
// arr.concat은 arr에 속한 모든 요소와 arg1, arg2 등에 속한 모든 요소를 한데 모은 새로운 배열이 반환됩니다.
// argN이 배열일 경우 배열의 모든 요소가 복사됩니디. 그렇지 않은 경우(단순 값인 경우)는 인수가 그대로 복사됩니다.
let arr8 = [1, 2];

// arr의 요소 모두와 [3,4]의 요소 모두를 한데 모은 새로운 배열이 만들어집니다.
alert(arr8.concat([3, 4])); // 1,2,3,4

// arr의 요소 모두와 [3,4]의 요소 모두, [5,6]의 요소 모두를 모은 새로운 배열이 만들어집니다.
alert(arr8.concat([3, 4], [5, 6])); // 1,2,3,4,5,6

// arr의 요소 모두와 [3,4]의 요소 모두, 5와 6을 한데 모은 새로운 배열이 만들어집니다.
alert(arr8.concat([3, 4], 5, 6)); // 1,2,3,4,5,6

// 객체가 인자로 넘어오면 객체는 분해되지 않고 통으로 복사되어 더해집니다.
let arr9 = [1, 2];

let arrayLike = {
  0: "something",
  length: 1,
};

alert(arr9.concat(arrayLike)); // 1,2,[object Object]

// 인자로 받은 유사 배열 객체에 특수한 프로퍼티 Symbol.isConcatSpreadable이 있으면 concat은 이 객체를 배열처럼 취급합니다.
let arr10 = [1, 2];

let arrayLike2 = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2,
};

alert(arr10.concat(arrayLike2)); // 1,2,something,else

/**
 * ## forEach로 반복작업 하기
 *
 * arr.forEach를 사용하면 주어진 함수를 배열 요소 각각에 대해 실행할 수 있습니다.
 */

// 문법
arr.forEach(function (item, index, array) {
  // 요소에 무언가를 할 수 있습니다.
});

// for each element call alert
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  alert(`${item} is at index ${index} in ${array}`);
});

/**
 * ## 배열 탐색하기
 * 배열의 탐색에 사용되는 메서드들을 알아보자.
 */

/**
 * ### indexOf, lastIndexOf와 includes
 *
 * arr.indexOf(item, from)
 * 인덱스 from부터 시작해 item(요소)을 찾습니다.
 * 요소를 발견하면 해당 요소의 인덱스를, 발견하지 못했다면 -1을 반환합니다.
 *
 * arr.lastIndexOf(item, from)
 * arr.indexOf 메서드와 동일한 기능을 하며, 검색을 끝에서부터 시작한다는 점이 다릅니다.
 *
 * arr.includes(item, from)
 * 인덱스 from 부터 시작해 item이 있는지를 검색하며, 해당하는 요소를 발견하면 true를 반환합니다.
 *
 * 위 메서드들은 요소를 찾을 때 완전 항등 연산자 "==="을 사용한다는 점에 유의하자.
 */

let arr11 = [1, 0, false];

alert(arr11.indexOf(0)); // 1
alert(arr11.indexOf(false)); // 2
alert(arr11.indexOf(null)); // -1

alert(arr11.includes(1)); // true

// includes는 NaN도 제대로 처리한다는 점에서 indexOf/lastIndexOf 와 약간의 차이가 있습니다.
const arr12 = [NaN];
alert(arr12.indexOf(NaN)); // -1 (완전 항등 비교 === 는 NaN엔 동작하지 않으므로 0이 출력되지 않습니다.)
alert(arr12.includes(NaN)); // true (NaN의 여부를 확인하였습니다.)

/**
 * ### find와 findIndex
 * 톡정 조건에 부합하는 객체를 배열 내에서 찾을때 find를 사용할 수 있습니다.
 */

let result = arr13.find(function (item, index, array) {
  // true가 반환되면 반복이 멈추고 해당 요소를 반환합니다.
  // 조건에 해당하는 요소가 없으면 undefined를 반환합니다.
  // item - 함수를 호출할 요소
  // index - 요소의 인덱스
  // array - 배열 자기 자신
});

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

let user = users.find((item) => item.id == 1);

alert(user.name); // John

// 실무에서 객체로 구성된 배열을 다뤄야 할 일이 잦기 때문에 find 메서드 활용법을 알아두면 좋다.

// arr.findIndex는 find와 동일한 일을 하지만, 조건에 맞는 요소를 반환하는 대신 해당 요소의 인덱스를 반환한다는 점이 다릅니다.
// 조건에 맞는 요소가 없으면 -1이 반환됩니다.

/**
 * ### filter
 * find 메서드가 함수의 반환 값을 true로 만드는 단 하나의 요소를 찾았다면,
 *
 * 조건을 충족하는 요소가 여러 개인경우 arr.filter(fn)을 사용할 수 있습니다.
 */

let results = arr14.filter(function (item, index, array) {
  // 조건을 충족하는 요소는 results에 순차적으로 더해집니다.
  // 조건을 충족하는 요소가 하나도 없으면 빈 배열이 반환됩니다.
});

let users2 = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

// 앞쪽 사용자 두 명을 반환합니다.
let someUsers = users2.filter((item) => item.id < 3);
// [{id: 1, name: "John"}, {id: 2, name: "Pete"}]

alert(someUsers.length); // 2

/**
 * ## 배열을 변형하는 메서드
 * 배열을 변형시키거나 요소를 재 정렬해주는 메서드들
 */

/**
 * ### map
 * map은 배열 요소 전체를 대상으로 함수를 호출하고, 함수 호출 결과를 배열로 반환해줍니다.
 */

let result2 = arr15.map(function (item, index, array) {
  // 요소 대신 새로운 값을 반환합니다.
});

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map((item) => item.length);
alert(lengths); // 5,7,6

/**
 * ### sort(fn)
 * arr.sort()는 배열의 요소를 정렬해줍니다. (배열 자체를 변경시킵니다)
 *
 * 메서드를 호출하면 재정렬된 배열이 반환됩니다.
 */

let arr16 = [1, 2, 15];

// arr 내부가 재 정렬됩니다.
arr16.sort();

alert(arr16); // 1, 15, 2

// sort가 생각대로 동작하지 않은 이유는 sort가 요소를 문자열로 취급하여 재 정렬하기 때문입니다.
// 기본 정렬 기준 대신 새로운 정렬 기준을 만들려면 새로운 함수를 넘겨주어야 합니다.

function compare(a, b) {
  if (a > b) return 1; // 첫 번째 값이 두 번째 값보다 큰 경우
  if (a == b) return 0; // 두 값이 같은 경우
  if (a < b) return -1; //  첫 번째 값이 두 번째 값보다 작은 경우
}

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let arr17 = [1, 2, 15];

arr17.sort(compareNumeric);

alert(arr17); // 1, 2, 15

// 정렬 기준을 정의해주는 함수(ordering function, 정렬 함수)가 없다면, sort 메서드는 사전편집 순으로 요소를 정렬합니다.
// arr.sort(fn) 는 포괄적인 정렬 알고리즘을 이용해 구현되었습니다.
// 대개 최적화된 퀵 소트(quicksort)를 사용합니다.

/**
 * 정렬 함수는 어떤 숫자든 반환할 수 있습니다.
 *
 * 정렬 함수의 반환 값엔 제약이 없기 때문에 크다, 작다를 나타내기만 하면 됩니다.
 * 이를 통해 아래와 같이 정렬 함수를 더 간결하게 만들 수 있습니다.
 */

let arr18 = [1, 2, 15];

arr18.sort(function (a, b) {
  return a - b;
});

// arrow function
arr18.sort((a, b) => a - b);

alert(arr18); // 1, 2, 15

/**
 * 문자열 비교엔 localeCompare를 사용하자.
 *
 * localeCompare는 유니코드를 기준으로 글자를 비교한다.
 * 특수한 문자가 있는 언어에도 대응하기 위해서는 str.localeCompare 메서드를 사용해 문자열을 비교하는 것이 좋다.
 */

let countries = ["Österreich", "Andorra", "Vietnam"];

alert(countries.sort((a, b) => (a > b ? 1 : -1))); // Andorra, Vietnam, Österreich (제대로 정렬이 되지 않았습니다.)

alert(countries.sort((a, b) => a.localeCompare(b))); // Andorra,Österreich,Vietnam (제대로 정렬되었네요!)

/**
 * ### reverse
 *
 * arr.reverse는 arr의 요소를 역순으로 정렬시켜주는 메서드입니다.
 *
 * 반환 값은 재 정렬된 배열입니다.
 */

let arr19 = [1, 2, 3, 4, 5];
arr19.reverse();

alert(arr19); // 5,4,3,2,1

/**
 * ### split
 *
 * str.split(delim)을 이용하면 구분자(delimiter) delim을 기준으로 문자열을 쪼갤 수 있습니다.
 */

let names = "Bilbo, Gandalf, Nazgul";

let arr20 = names.split(", ");

for (let name of arr20) {
  alert(`${name}에게 보내는 메시지`); // Bilbo에게 보내는 메시지
}

// split 메서드의 두 번째 인수에서는 숫자를 받을 수 있습니다.
// 이를 통해 배열의 길이를 제한할 수 있습니다.

let arr21 = "Bilbo, Gandalf, Nazgul, Saruman".split(", ", 2);

alert(arr21); // Bilbo, Gandalf

// 문자열을 글자 단위로 분리하기
// split(s)의 s를 빈 문자열로 지정하면 문자열을 글자 단위로 분리할 수 있습니다.
let str2 = "test";

alert(str2.split("")); // t,e,s,t

/**
 * ### join
 * arr.join(glue)은 split과 반대 역할을 하는 메서드입니다.
 *
 * 배열 요소 마다 glue를 접착제로 이용하여 모두 합친 후 하나의 문자열을 만듭니다.
 */

let arr22 = ["Bilbo", "Gandalf", "Nazgul"];

let str3 = arr22.join(";"); // 배열 요소 모두를 ;를 사용해 하나의 문자열로 합칩니다.

alert(str3); // Bilbo;Gandalf;Nazgul

/**
 * ### reduce
 *
 * 배열을 기반으로 값 하나를 도출할 때 arr.reduce를 사용할 수 있습니다
 */

let value = arr.reduce(
  function (accumulator, item, index, array) {
    // accumulator - 이전 함수 호출의 결과
    // item - 현재 배열 요소
    // index - 요소의 위치
    // array - 배열
    // ...
  },
  [initial]
  // initial - 함수 최초 호출 시 사용되는 초기값 (옵션)
);

/**
 * 함수 호출 결과는 다음 함수를 호출할 때 첫 번째 인수(previousValue)로 사용됩니다.
 *
 * 첫 번째 인수는 앞서 호출했던 함수들의 결과가 누적되어 저장되는 '누산기(accumulator)'라고 생각할 수 있습니다.
 * 마지막 함수까지 호출되면 이 값은 reduce의 반환 값이 됩니다.
 */

let arr23 = [1, 2, 3, 4, 5];

let result3 = arr23.reduce((sum, current) => sum + current, 0);
// 초기값이 없으면 reduce는 배열의 첫 번째 요소를 초깃값으로 사용합니다.

alert(result3); // 15

let arr24 = [];

// TypeError: Reduce of empty array with no initial value
// 초깃값을 설정해 주었다면 초깃값이 반환되었을 겁니다.
arr24.reduce((sum, current) => sum + current);

// 이러한 예외상황이 발생할 수 있기 때문에 항상 초깃값을 명시해 줄 것을 권장합니다.

// arr.reduceRight를 사용하면 배열의 오른쪽부터 reduce 연산을 실행할 수 있습니다.

/**
 * ## Array.isArray로 배열 여부 알아내기
 * 자바스크립트에서 배열은 독립된 자료형으로 취급되지 않고 객체형에 속합니다.
 * 따라서 typeof로는 일반 객체와 배열을 구분할 수 없습니다.
 *
 * 이럴 때 Array.isArray(value)를 사용하면 배열의 여부를 쉽게 구분할 수 있습니다.
 */

alert(typeof {}); // object
alert(typeof []); // object

alert(Array.isArray({})); // false

alert(Array.isArray([])); // true

/**
 * ## 배열 메서드와 'thisArg'
 * 함수를 호출하는 대부분의 배열 메서드(find, filter, map 등. sort는 제외)는 thisArg 라는 매개변수를 옵션으로 받을 수 있습니다.
 *
 * arr.find(func, thisArg);
 * arr.filter(func, thisArg);
 * arr.map(func, thisArg);
 * // ...
 * // thisArg는 선택적으로 사용할 수 있는 마지막 인수입니다.
 *
 * thisArg는 func의 this가 됩니다.
 * func에 thisArg의 컨텍스트 정보를 넘겨주어 해당 함수가 this를 사용할 수 있게 만들어 줍니다.
 */

let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  },
};

let users3 = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];

// army.canJoin 호출 시 참을 반환해주는 user를 찾음
let soldiers = users3.filter(army.canJoin, army);

alert(soldiers.length); // 2
alert(soldiers[0].age); // 20
alert(soldiers[1].age); // 23

// thisArgs에 army를 지정하지 않고 단순히 users.filter(army.canJoin)를 사용했다면 army.canJoin은 단독 함수처럼 취급되고,
// 함수 본문 내 this는 undefined가 되어 에러가 발생했을 겁니다.

// users.filter(user => army.canJoin(user))를 사용하면
// users.filter(army.canJoin, army)를 대체할 수 있긴 한데 thisArg를 사용하는 방식이 좀 더 이해하기 쉬우므로 더 자주 사용됩니다.
