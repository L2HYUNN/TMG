import { playFor } from "./playfor";

export function amountFor(aPerformance) {
  // 값이 바뀌지 않는 변수는 매개변수로 전달
  let result = 0;

  switch (playFor(aPerformance).type) {
    case "tragedy":
      result = 40000;

      if (aPerformance.audience > 30) {
        result += 1000 * (aPerformance.audience - 30);
      }
      break;
    case "comedy":
      result = 30000;

      if (aPerformance.audience > 20) {
        result += 10000 + 500 * (aPerformance.audience - 20);
      }
      result += 300 * aPerformance.audience;
      break;

    default:
      throw new Error(`알 수 없는 장르: ${playFor(aPerformance).type}`);
  }

  return result; // 함수 안에서 값이 바뀌는 변수 반환
}
