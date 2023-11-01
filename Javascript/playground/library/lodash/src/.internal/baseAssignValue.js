/**
 * 변수 체크가 없는 'assignValue', 'assignMergeValue'의 기본적인 도구
 *
 * @param {Object} object 수정할 object
 * @param {string} key 할당을 위한 속성의 key
 * @param {*} value 할당할 value
 */
function baseAssignValue(object, key, value) {
  if (key === "__proto__") {
    Object.defineProperty(object, key, {
      configurable: true,
      enumerable: true,
      value: value,
      writable: true,
    });
  } else {
    object[key] = value;
  }
}

export default baseAssignValue;
