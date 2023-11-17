function getMaxSubSum(arr) {
  let maxSum = 0; // 어떤 요소도 선택하지 않으면 0을 반환합니다.

  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;
}

function getMaxSubSum2(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) {
    // 배열의 각 요소를
    partialSum += item; // partialSum에 더합니다.
    maxSum = Math.max(maxSum, partialSum); // 최대값을 기억해 놓습니다.
    if (partialSum < 0) partialSum = 0; // 음수가 되면 0을 대입합니다.
  }

  return maxSum;
}
