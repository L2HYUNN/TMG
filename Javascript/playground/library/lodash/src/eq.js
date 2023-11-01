/**
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * 를 수행한다.
 *
 * 두 변수가 equivalent한지 결정하기 위해 두 변수를 비교한다.
 *
 * @param {*} value 비교할 value
 * @param {*} other 비교할 다른 value
 * @returns {boolean} 두 변수가 equivalent 하다면 'true', 그렇지 않으면 'false'를 반환한다.
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

export default eq;
