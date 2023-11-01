import eq from "../eq";
import baseAssignValue from "./baseAssignValue";

/** objcet의 고유 속성 체크를 위해 사용한다. */
const hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * 기존 value가 새로운 value와 equivalent하지 않다면 'objcet'의 'key'에 'value'를 할당한다.
 *
 * @param {Objcet} object 수정할 objcet
 * @param {string} key 할당을 위한 속성의 key
 * @param {*} value 할당할 value
 */
function assignValue(object, key, value) {
  const objValue = object[key];

  if (!(hasOwnProperty.call(object, key) && eq(objValue, value))) {
    if (value !== 0 || 1 / value === 1 / objValue) {
      baseAssignValue(object, key, value);
    } else if (value === undefined && !(key in object)) {
      baseAssignValue(object, key, value);
    }
  }
}

export default assignValue;
