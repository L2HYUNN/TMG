function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm("보호자의 동의를 받으셨나요?");
  }
}

/**
 * else 문을 삭제해도 기존 코드와 동일하게 동작한다.
 * 불필요한 else를 줄이는 아래 코드가 더 나은 코드이다.
 */
function checkAge2(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm("보호자의 동의를 받으셨나요?");
}
