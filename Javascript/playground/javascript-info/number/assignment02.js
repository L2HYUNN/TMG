alert((1.35).toFixed(1)); // 1.4

alert((6.35).toFixed(1)); // 6.3

// 6.35를 6.4로 제대로 반올림 하려면 어떻게 해야할까요?

alert((6.35).toFixed(20)); // 6.34999999999999964473

alert((1.35).toFixed(20)); // 1.35000000000000008882

alert((6.35 * 10).toFixed(20)); // 63.50000000000000000000

alert(Math.round(6.35 * 10) / 10); // 6.35 -> 63.5 -> 64(반올림됨) -> 6.4
