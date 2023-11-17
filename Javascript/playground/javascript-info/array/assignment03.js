let arr = ["a", "b"];

arr.push(function () {
  alert(this);
});

arr[2](); // ?

// a, b, function(){...}

// arr[2]()를 호출하는 것은 obj가 arr이고, method는 2인 메서드 obj[method]()를 호출하는 것과 문법적으로 동일합니다.

// 즉, arr[2]에 있는 함수가 객체 메서드처럼 호출되는 것이죠. 따라서 arr[2]는 arr을 참조하는 this를 받고, 배열을 출력합니다.
