const problem1 = require("../src/problem1");
const problem2 = require("../src/problem2");
const problem3 = require("../src/problem3");
const problem4 = require("../src/problem4");
const problem5 = require("../src/problem5");
const problem6 = require("../src/problem6");
const problem7 = require("../src/problem7");

describe("problem1", () => {
  /** 승부 검증 */
  test("승부가 비긴 경우 0을 반환한다.", () => {
    expect(problem1([97, 98], [197, 198])).toEqual(0);
  });
  test("포비가 이긴 경우 1을 반환한다.", () => {
    expect(problem1([131, 132], [211, 212])).toEqual(1);
  });
  test("크롱이 이긴 경우 2를 반환한다.", () => {
    expect(problem1([211, 212], [131, 132])).toEqual(2);
  });

  /** 예외 검증 */
  test("페이지 배열의 길이는 2여야만 한다.", () => {
    expect(problem1([121, 122, 123], [211, 212])).toEqual(-1);
    expect(problem1([211, 212], [121, 122, 123])).toEqual(-1);
  });
  test("왼쪽 페이지는 홀수여야 한다.", () => {
    expect(problem1([98, 99], [193, 194])).toEqual(-1);
    expect(problem1([193, 194], [98, 99])).toEqual(-1);
  });
  test("오른쪽 페이지는 짝수여야 한다.", () => {
    expect(problem1([99, 103], [211, 212])).toEqual(-1);
    expect(problem1([211, 212], [99, 103])).toEqual(-1);
  });
  test("왼쪽 페이지는 오른쪽 페이지보다 작아야 한다.", () => {
    expect(problem1([31, 30], [393, 394])).toEqual(-1);
    expect(problem1([393, 394], [31, 30])).toEqual(-1);
  });
  test("페이지는 연속되어야 한다.", () => {
    expect(problem1([101, 102], [393, 400])).toEqual(-1);
    expect(problem1([393, 400], [101, 102])).toEqual(-1);
  });
});

describe("problem2", () => {
  test("case1", () => {
    expect(problem2("browoanoommnaon")).toEqual("brown");
  });
  test("case2", () => {
    expect(problem2("zyelleyz")).toEqual("");
  });
});

describe("problem3", () => {
  test("case1", () => {
    expect(problem3(13)).toEqual(4);
  });
  test("case2", () => {
    expect(problem3(33)).toEqual(14);
  });
});

describe("problem4", () => {
  test("case1", () => {
    expect(problem4("I love you")).toEqual("R olev blf");
  });
});

describe("problem5", () => {
  test("case1", () => {
    expect(problem5(50237)).toEqual([1, 0, 0, 0, 0, 2, 0, 3, 7]);
  });

  test("case2", () => {
    expect(problem5(15000)).toEqual([0, 1, 1, 0, 0, 0, 0, 0, 0]);
  });
});

describe("problem6", () => {
  test("case1", () => {
    expect(
      problem6([
        ["jm@email.com", "제이엠"],
        ["jason@email.com", "제이슨"],
        ["woniee@email.com", "워니"],
        ["mj@email.com", "엠제이"],
        ["nowm@email.com", "이제엠"],
      ])
    ).toEqual(["jason@email.com", "jm@email.com", "mj@email.com"]);
  });
});

describe("problem7", () => {
  test("case1", () => {
    expect(
      problem7(
        "mrko",
        [
          ["donut", "andole"],
          ["donut", "jun"],
          ["donut", "mrko"],
          ["shakevan", "andole"],
          ["shakevan", "jun"],
          ["shakevan", "mrko"],
        ],
        ["bedi", "bedi", "donut", "bedi", "shakevan"]
      )
    ).toEqual(["andole", "jun", "bedi"]);
  });
});
