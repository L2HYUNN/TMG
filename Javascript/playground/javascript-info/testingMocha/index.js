/**
 * # 테스트 자동화와 Mocha
 */

/**
 * ## 테스트는 왜 해야 하는가?
 * 함수를 하나 만들고 있다.
 * 대부분의 개발자는 매개변수 - 결과 관계를 중심으로 함수를 만들게 된다.
 * 개발 과정에서 계속 매개변수 - 결과를 비교하며 기능이 잘 구현되고 있는지 확인할 것이다.
 * 하지만 이렇게 수동으로 코드를 '재실행'하는 것은 당연하지만 상당히 불안전한 방법이다.
 *
 * "코드를 수동으로 재실행하면서 테스트를 하면 무언가를 놓치기 쉽다."
 *
 * 개발중 모든 유스 케이스를 직접 고려하는 것은 불가능에 가깝다.
 */

/**
 * ## Behavior Driven Development
 * Behavior Driven Development(BDD)를 알아본다.
 *
 * BDD는 테스트(test), 문서(documentation), 예시(example)를 한데 모아놓은 개념이다.
 *
 * 실제 개발 사례를 통해 BDD를 더욱 자세히 알아보자.
 */

/**
 * ### 거듭제곱 함수와 명세서
 * x를 n번 곱해주는 함수, pow(x, n) 함수 구현을 통해 BDD를 직접 적용해보자.
 *
 * 코드를 작성하기 전 먼저 코드가 무슨 일을 하는지 상상한 후 이를 자연어로 표현해야한다.
 * -> 이때, 만들어진 산출물을 BDD에선 명세서(specification) 또는 짧게 줄여 스팩(spec)이라고 부른다.
 *
 * // 명세서(specification) 예시
 * describe("pow", function() {
 *
 *    it("주어진 숫자의 n 제곱", function () {
 *      assert.equal(pow(2, 3), 8);
 *    });
 *  }
 * )
 *
 * 스팩은 다음과 같은 세 가지 주요 구성 요소로 이루어진다.
 *
 *  1. describe("title", function() { ... })
 *  구현하고자 하는 기능에 대한 설명이 들어간다.
 *
 *  2. it("유스 케이스 설명", function() { ... })
 *  it의 첫 번째 인수엔 특정 유스 케이스에 대한 설명이 들어간다.
 *  이 설명은 "누구나 읽을 수 있고 이해할 수 있는" 자연어로 적어준다.
 *  두 번째 인수엔 유스 케이스 테스트 함수가 들어간다.
 *
 *  3. assert.equal(value1, value2)
 *  기능을 제대로 구현했다면 에러 없이 실행된다.
 *  assert.*는 pow가 예상한 대로 동작하는지 확인해준다.
 *
 * 이러한 명세서는 실행가능하다.
 *
 */

/**
 * ## 개발 순서
 * 1. 명세서 초안 작성 (기본적인 테스트 포함)
 * 2. 명세서 초안을 보고 코드 작성
 * 3. 코드가 작동하는지 확인 Mocha등 테스트 프레임워크 이용, 테스트를 모두 통과할 때 까지 코드 수정
 * 4. 명세서에 고려되지 않았던 유스케이스 몇 가지 추가, 테스트 실패 시작
 * 5. 3번으로 돌아가 반복
 * 6. 기능이 완성될 때까지 3~6단계를 반복
 */

/**
 * ## 스펙 실행하기
 * 본 글에서 사용되는 3개의 라이브러리
 * - Mocha: 핵심 테스트 프레임워크, describe, it과 같은 테스팅 함수와 테스트 실행 관련 주요 함수 제공
 * - Chai: 다양한 assertion 제공 라이브러리
 * - Sinon: 함수의 정보를 캐내는 데 사용되는 라이브러리, 내장 함수 등을 모방
 *
 * 상세 실행 예제는 해당 글 참고
 * https://ko.javascript.info/testing-mocha
 */

/**
 * ## 스펙 개선하기
 * 테스트 하나에서 한 가지만 확인하기
 */

describe("pow", function () {
  it("주어진 숫자의 n 제곱", function () {
    assert.equal(pow(2, 3), 8);
    assert.equal(pow(3, 4), 81);
  });
});

// 하나의 it에 assert를 넣기 보다는 새로 it 블록을 하나 더 추가한다.
describe("pow", function () {
  it("2를 세 번 곱하면 8입니다.", function () {
    assert.equal(pow(2, 3), 8);
  });

  it("3을 네 번 곱하면 81입니다.", function () {
    assert.equal(pow(3, 4), 81);
  });
});

/**
 * ## 코드 개선하기
 */

function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

// 수동으로 여러 개의 it 블록을 만드는 대신 for문을 이용해 자동으로 it 블록을 만든다.
describe("pow", function () {
  function makeTest(x) {
    let expected = x * x * x;
    it(`${x}을/를 세 번 곱하면 ${expected}입니다.`, function () {
      assert.equal(pow(x, 3), expected);
    });
  }

  for (let x = 1; x <= 5; x++) {
    makeTest(x);
  }
});

/**
 * ## 중첩 describe
 * 아래 예시에서 헬퍼 함수 makeTest와 for문이 중첩 describe 안에 함께 묶여있다는 것에 주목하자.
 * makeTest는 오직 for문에서만 사용된다 따라서 describe를 이용하여 그룹을 만들 수 있다.
 *
 * 이처럼 중첩 describe는 새로운 테스트 '하위 그룹(subgroup)'을 정의할 때 사용된다.
 */

describe("pow", function () {
  describe("x를 세 번 곱합니다.", function () {
    function makeTest(x) {
      let expected = x * x * x;
      it(`${x}을/를 세 번 곱하면 ${expected}입니다.`, function () {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });

  // describe와 it을 사용해 이 아래에 더 많은 테스트를 추가할 수 있습니다.
});

// 함수 before는 (전체) 테스트가 실행되기 전에 실행되고, 함수 after는 (전체) 테스트가 실행된 후에 실행됩니다.
// 함수 beforeEach는 매 it이 실행되기 전에 실행되고, 함수 afterEach는 매 it이 실행된 후에 실행됩니다.
describe("test", function () {
  before(() => alert("테스트를 시작합니다 - 테스트가 시작되기 전"));
  after(() => alert("테스트를 종료합니다 - 테스트가 종료된 후"));

  beforeEach(() => alert("단일 테스트를 시작합니다 - 각 테스트 시작 전"));
  afterEach(() => alert("단일 테스트를 종료합니다 - 각 테스트 종료 후"));

  it("test 1", () => alert(1));
  it("test 2", () => alert(2));
});

// 실행 결과
// before이 beforeEach보다 빠르고 afterEach가 after보다 실행이 빠름에 주목

// 테스트를 시작합니다 - 테스트가 시작되기 전          (before)
// 단일 테스트를 시작합니다 - 각 테스트 시작 전         (beforeEach)
// 1
// 단일 테스트를 종료합니다 - 각 테스트 종료 후         (afterEach)
// 단일 테스트를 시작합니다 - 각 테스트 시작 전         (beforeEach)
// 2
// 단일 테스트를 종료합니다 - 각 테스트 종료 후         (afterEach)
// 테스트를 종료합니다 - 테스트가 종료된 후            (after)

// 이들은 대게 초기화 용도로 사용한다.
// 카운터 변수를 0으로 만들거나 테스트가 바뀔 때마다 해줘야 하는 작업이 있으면 이들을 이용할 수 있다.

/**
 * ## 스펙 확장하기
 * 기존에 n이 음수이거나 정수가 아닌 경우를 생각하지 않고 구현했기 때문에, 새롭게 추가한 테스트는 실패할 수밖에 없다.
 *
 * BDD의 핵심은 여기에 있다.
 * 실패할 수밖에 없는 테스트를 추가하고, 테스트를 통과할 수 있게 코드를 개선하는 것이다.
 */

describe("pow", function () {
  // ...

  it("n이 음수일 때 결과는 NaN입니다.", function () {
    assert.isNaN(pow(2, -1));
  });

  it("n이 정수가 아닐 때 결과는 NaN입니다.", function () {
    assert.isNaN(pow(2, 1.5));
  });
});

function pow(x, n) {
  if (n < 0) return NaN;
  if (Math.round(n) != n) return NaN;

  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

/**
 * ## 결론
 * 스펙이 있기 때문에 개발자는 안전한게 함수를 개선하거나 변경할 수 있게 된다.
 * 함수를 처음부터 다시 작성하게 되더라도 최종적으로 동일하게 동작한다는 것을 보장받을 수 있다.
 *
 * 테스트를 하지 않았다면 다음과 같은 문제에 직면할 수 있다.
 * 1. 코드 변경시 부작용을 생각지 않고 함수를 수정해 어디선가 버그가 발생할 수 있다.
 * 2. 코드 수정과 개선을 피하게 된다.
 *
 * 테스팅 자동화를 통해 위와 같은 문제를 피할 수 있다.
 *
 * 잘 테스트 된 코드는 더 나은 아키텍처를 만든다.
 */
