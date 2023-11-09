function random(min, max) {
  return Math.trunc(Math.random() * (max - min) + min);
}

/**
 * Math.round()를 사용하게 되면 min, max를 얻을 확률이 다른 확률에 비해 절반이 된다.
 */

function randomInteger(min, max) {
  // here rand is from min to (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
