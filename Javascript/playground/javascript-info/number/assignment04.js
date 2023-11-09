// This loop is infinite. It never ends. Why?
let i = 0;
while (i != 10) {
  i += 0.2;
}

/**
 * 정밀도 손실때문에 i는 절대 10과 같아질 수 없다.
 *
 * 따라서 loop는 종료되지 않는다.
 */

let i2 = 0;
while (i2 < 11) {
  i2 += 0.2;
  if (i2 > 9.8 && i2 < 10.2) alert(i2);
}
