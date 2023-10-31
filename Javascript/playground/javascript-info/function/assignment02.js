function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("보호자의 동의를 받으셨나요?");
  }
}

function checkAge2(age) {
  return age > 18 ? true : confirm("보호자의 동의를 받으셨나요?");
}

function checkAge3(age) {
  return age > 18 || true || confirm("보호자의 동의를 받으셨나요?");
  // return (age > 18) || confirm("보호자의 동의를 받으셨나요?");
}
