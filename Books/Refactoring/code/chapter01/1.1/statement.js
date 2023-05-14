import { amountFor } from "./amountFor";
import { playFor } from "./playfor";

export function statement(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `청구내역 (고객명: ${invoice.customer})\n`;
  const format = new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
    minimumFractionDigits: 0,
  }).format;

  for (let perf of invoice.performances) {
    // 포인트를 적립한다.
    volumeCredits += Math.max(perf.audience - 30, 0);

    // 희극 관객 5명마다 추가 포인트를 제공한다.
    if ("comedy" === playFor(perf).type) {
      volumeCredits += Math.floor(perf.audience / 5);
    }

    // 청구 내역을 출력한다.
    result += `${playFor(perf).name}: ${format(amountFor(perf))} ${
      perf.audience
    }석\n`;
    totalAmount += amountFor(perf);
  }
  result += `총액 ${format(totalAmount)}\n`;
  result += `적립 포인트 ${volumeCredits}점\n`;

  return result;
}
