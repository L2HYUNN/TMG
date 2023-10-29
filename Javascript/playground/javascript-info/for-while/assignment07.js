let n = 20;

for (let i = 2; i <= n; i++) {
  for (let j = 2; j <= i; j++) {
    if (i === j) console.log(i);
    if (i % j === 0) break;
  }
}

let n2 = 10;

nextPrime: for (let i = 2; i <= n2; i++) {
  // 각 i에 대하여 반복문을 돌림

  for (let j = 2; j < i; j++) {
    // 제수(나눗수)를 찾음
    if (i % j == 0) continue nextPrime; // 소수가 아니므로 다음 i로 넘어감
  }

  alert(i); // 소수
}
