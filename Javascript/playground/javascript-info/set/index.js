// Set은 중복을 허용하지 않는 특별한 컬렉션이다.

// Set 선언하기
let set = new Set();

// Set은 인수로 이터러블 객체를 전달받을 수 있다.
const array = [1, 2, 3];
const arraySet = new Set(array);
console.log(arraySet);

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// add 메소드
set.add(john);
set.add(pete);
set.add(mary);
console.log(set);

set.add(mary);
console.log(set);

// has 메소드
const isMary = set.has(mary);
console.log(isMary);

// size 프로퍼티
const size = set.size;
console.log(size);

// 이터러블 객체
for (let user of set) {
  console.log(user);
}

// delete 메소드
set.delete(mary);
console.log(set);

// clear 메소드
set.clear();
console.log(set);

/**
 * Array.Prototype.find를 이용하여 중복을 검사할 수 있지만
 * Set을 이용하는 것 보다 효율적이지 않다.
 */

// Set의 반복 작업
let newSet = new Set(["orange", "apples", "bannas"]);

// for ... of
for (let fruit of newSet) {
  console.log(fruit);
}

// forEach
newSet.forEach((value, valueAgain, set) => {
  console.log(value, valueAgain, set);
});

/**
 * Set의 forEach 매서드의 인수는 맵과의 호환성을 위해 위와 같이 설계되었다.
 * 이를 통해 맵과 셋의 교체가 쉬워진다.
 */

// Set.keys()
const keys = newSet.keys();
console.log(keys);

// Set.values()
const values = newSet.values();
console.log(values);

// Set.entries();
const entries = newSet.entries();
console.log(entries);

/**
 * values, entires의 경우에도
 * Map과의 호환성을 위해 만들어졌다.
 */
