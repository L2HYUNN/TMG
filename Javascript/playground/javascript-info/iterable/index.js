// https://ko.javascript.info/iterable
// iterable 객체
let range = {
  from: 1,
  to: 5,
};

/**
 * Symbol.iterator는 매서드이다.
 * Symbol.iterator는 항상 next를 포함하는 새로운 iterable 객체를 반환해야한다.
 */

// range 외부에 Symbol.iterator 매서드를 추가하는 경우
range[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,

    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

for (let num of range) {
  console.log(num);
}

/**
 * iterable 객체의 핵심은 관심사의 분리(Separation of Concern, SoC)에 있다?
 * 위의 예제에서 우리는 이터레이터 객체와 반복 대상인 객체를 분리할 수 있었다.
 *
 * 하지만 객체 안에 이터레이터 객체를 선언한다면?
 * Symbol.iterator가 range 객체 자체를 반환하게 된다.
 * 우리는 하나의 객체에 이터레이터 객체와 반복 대상인 객체를 함께하게 되었다.
 * 이 경우는 관심사의 분리가 이루어지지 못한게 아닐까?
 */

// range 내부에 Symbol.iterator 매서드를 추가하는 경우
let range2 = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  },
};

for (let num of range2) {
  console.log(num);
}

// 이터레이터를 명시적으로 호출하기
// 반복 과정의 통제가 가능해진다.
// 반복을 시작했다가 멈추고 다른 작업을 시행하다가 다시 반복을 실행할 수 있다.
let str = "Hello";

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value);
}

// 이터러블과 유사 배열
let arrayLike = {
  // 인덱스와 length 프로퍼티가 존재 => 유사 배열
  0: "Hello",
  1: "World",
  length: 2,
};

// Symbol.iterator 매서드가 없기 때문에 에러 발생
// for (let item of arrayLike) {
// }

/**
 * 이터러블과 유사 배열은 배열이 아니기 때문에 배열의 메소드들을 사용할 수 없다.
 * 어떻게 하면 이 문제를 해결할 수 있을까?
 */

// Array.from
// Array.from을 이용하여 이터러블이나 유사배열을 진짜 Array로 만들 수 있다.
let arrayLike2 = {
  0: "Hello",
  1: "World",
  length: 2,
};

// 유사 배열의 Array.from
let arr = Array.from(arrayLike2);
console.log(arr.pop());

// 이터러블의 Array.from
let arr2 = Array.from(range);
console.log(arr2);

/**
 * 객체 형태의 유사 배열을 유지하다가 필요할때 Array.from을 이용하여 배열을 생성할 수 있다.
 */

// Array.from 과 map 함수
let arr3 = Array.from(range, (val) => val * val);
console.log(arr3);

// Array.from을 이용하여 문자열을 배열로 만들기
let string = "Hello World";

let chars = Array.from(string);
console.log(chars);

/**
 * 문자열을 배열로 만들떄
 * String.Prototype.split("")의 사용을 지양하는 것이 좋다.
 * MDN에 의하면 이 경우 사용자가 인식하는 하나의 문자(grapheme cluster) 또는 유니코드 문자(코드 포인트) 하나씩으로 나누는 것이 아니라
 * UTF-16 코드 유닛으로 나누게 되어 써로게이트 페어가 망가질 수 있다.
 *
 * MDN https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split
 * Surrogates https://unicode.org/faq/utf_bom.html#utf16-2
 * How can I get a character array from a string?
 * https://stackoverflow.com/questions/4547609/how-can-i-get-a-character-array-from-a-string/34717402#34717402
 *
 * Note: This is not unicode compliant.
 * "I💖U".split('') results in the 4 character array ["I", "�", "�", "u"] which can lead to dangerous bugs.
 * See answers below for safe alternatives.
 */
