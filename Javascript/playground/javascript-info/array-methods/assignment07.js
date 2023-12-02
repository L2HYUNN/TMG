// 이름 매핑하기
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map((user) => user.name);
/* 여기에 코드를 작성하세요. */

console.log(names); // John, Pete, Mary
