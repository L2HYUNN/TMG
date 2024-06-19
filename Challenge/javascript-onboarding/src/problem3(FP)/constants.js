const CLAP_GAME = Object.freeze({ DIGITS: [3, 6, 9] });

const ERROR_MESSAGE = Object.freeze({
  ERROR_INVALIDE_TYPE: "입력된 숫자의 타입이 올바르지 않습니다.",
  ERROR_NUBER_IS_NOT_INTEGER: "입력된 숫자가 정수가 아닙니다.",
  ERROR_NUMBER_NOT_IN_RANGE: "입력된 숫자가 유효 범위 안에 존재하지 않습니다.",
});

module.exports = {
  CLAP_GAME,
  ERROR_MESSAGE,
};
