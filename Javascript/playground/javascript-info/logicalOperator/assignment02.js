alert(alert(1) || 2 || alert(3));

// 1, 2가 순서대로 출력된다.

// alert 메서드는 값을 반환하지 않기 때문에 undefined를 반환한다.
// 따라서 OR 연산자는 다음 truthy 값인 2까지 실행하게 된다.
