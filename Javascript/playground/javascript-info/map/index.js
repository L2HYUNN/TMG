// 객체는 키에 오직 String만 저장할 수 있지만 Map은 다양한 자료형을 저장할 수 있다.

let map = new Map();

// set 메소드
map.set("1", "str1");
map.set(1, "num1");
map.set(true, "bool1");

console.log(map);

// get 메소드
const bool1 = map.get(true);
console.log(bool1);

// has 메소드
console.log(map.has(false));
console.log(map.has(1));

// delete 메소드
map.delete(true);
console.log(map);

// size 프로퍼티
const size = map.size;
console.log(size);

// clear 메소드
map.clear();
console.log(map);

/**
 * map[key]와 같이 Map을 일반 객체처럼 접근하지말자.
 * 이렇게 사용할 경우 여러 제약이 걸린다.
 *
 * 객체는 키를 모두 문자형으로 변경시킨다.
 */

// Map.set의 체이닝
// Map.set()은 호출 시 자기 자신을 반환하므로 체이닝하여 사용할 수 있다.
map.set("1", "str1").set(1, "num1").set(true, "bool1");
console.log(map);

const obj1 = {
  obj: "obj1",
};
const val = map.set(obj1, "obj1").get(obj1);
/**
 * map.set({obj: "obj1"}, "obj1").get({obj: "obj1"}) 은 에러가 발생한다.
 * set, get 메소드에 사용하고 있는 객체는 동일한 객체처럼 보이지만 서로 다른 새로운 객체이다.
 * 따라서 위와 같이 사용해야 원하는 결과를 얻을 수 있다.
 */
console.log(val);

// Map 요소 반복하기

let recipeMap = new Map([
  // 이러한 형식의 이중 배열을 통해 Map을 생성할 수 있다.
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);

// Map.keys()
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable);
}
// Map.values()
for (let amount of recipeMap.values()) {
  console.log(amount);
}
// Map.entries()
for (let entry of recipeMap.entries()) {
  console.log(entry);
}

// 맵은 값이 삽입된 순서를 기억한다.

// Map & forEach
recipeMap.forEach((value, key, map) => {
  console.log([value, key], map);
});

/**
 * Map과 Object는 다음의 방법을 통해 서로 치환될 수 있다.
 * Object -> Map (Object.entries)
 * Map -> Object (Object.fromEntries)
 */
// Object.entries()를 이용하여 객체를 맵으로 바꾸기
let obj = {
  name: "John",
  age: 30,
};

let objToMap = new Map(Object.entries(obj));
console.log(objToMap);

// Object.fromEntires()를 이용하여 맵을 객체로 바꾸기
let mapToObj = new Map();
mapToObj.set("banana", 1).set("orange", 2).set("meat", 4);

let obj2 = Object.fromEntries(mapToObj.entries());
// let obj2 = Object.fromEntries(mpaToObj);
console.log(obj2);
