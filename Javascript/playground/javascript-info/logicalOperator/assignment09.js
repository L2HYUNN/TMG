let userName = prompt("유저 이름을 입력해주세요", "");

if (userName === "Admin") {
  let password = prompt("비밀번호를 입력해주세요", "");

  if (password === "TheMaster") {
    alert("환영합니다!");
  } else if (password === "" || !password) {
    alert("취소되었습니다.");
  } else {
    alert("인증에 실패하였습니다.");
  }
} else {
  alert("취소되었습니다.");
}
