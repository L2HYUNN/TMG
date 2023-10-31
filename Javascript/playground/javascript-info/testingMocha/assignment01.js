it("주어진 숫자의 n 제곱", function () {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});

/**
 * 위의 예시는 3가지 케이스를 모두 하나의 it으로 표현하고 있다.
 * 아래와 같이 분리하는 것이 더 좋은 방법이다.
 */

describe("주어진 숫자의 n 제곱", function () {
  it("5를 1 제곱하면 5", function () {
    assert.equal(pow(5, 1), 5);
  });

  it("5를 2 제곱하면 25", function () {
    assert.equal(pow(5, 2), 25);
  });

  it("5를 3 제곱하면 125", function () {
    assert.equal(pow(5, 3), 125);
  });
});

// 개발자는 위와 같이 테스트 코드를 작성하려는 유혹에 빠지곤 합니다.

// 위 코드엔 세 개의 assert, 즉 세 개의 테스트가 있지만 결론적으로 테스트 함수는 하나뿐입니다.

// 이렇게 테스트 코드를 작성하면 당장은 쉽게 테스트를 진행할 수 있지만, 에러가 발생했을 때 에러의 원인을 찾기가 힘들어집니다.

// 실행 흐름이 복잡한 경우 에러가 발생하면 에러를 만든 입력값이 무엇이었는지를 일일이 확인해야 합니다.

// 테스트 코드를 디버깅 해야 하는 웃픈 상황이 발생하는 거죠.

// 테스트는 명확한 입력값, 출력값과 함께 여러 개의 it 블록으로 쪼개 작성하는 것이 좋습니다.
