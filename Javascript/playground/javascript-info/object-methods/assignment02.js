let calculator = {
  // ... 여기에 답안 작성 ...
  value1: 0,
  value2: 0,

  read() {
    this.value1 = +prompt("첫번째 값을 일력해주세요", "");
    this.value2 = +prompt("두번째 값을 입력해주세요", "");
  },

  sum() {
    return this.value1 + this.value2;
  },

  mul() {
    return this.value1 * this.value2;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// 정답

// let calculator = {
//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   },

//   read() {
//     this.a = +prompt('첫 번째 값:', 0);
//     this.b = +prompt('두 번째 값:', 0);
//   }
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );
