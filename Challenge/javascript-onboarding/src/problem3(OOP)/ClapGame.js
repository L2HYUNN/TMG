class ClapGame {
  constructor(utils) {
    this.utils = utils;
  }

  _digits = [3, 6, 9];

  _isClapGameDigit(digit) {
    return this._digits.includes(digit);
  }

  _countClapDigits(number) {
    return this.utils
      .splitDigits(number)
      .reduce(
        (result, splitedNumber) =>
          this._isClapGameDigit(Number(splitedNumber)) ? result + 1 : result,
        0
      );
  }

  _countTotalClaps(number) {
    return this.utils
      .generateRange(number)
      .reduce(
        (result, current) => result + this._countClapDigits(current + 1),
        0
      );
  }

  play(number) {
    return this._countTotalClaps(number);
  }
}

module.exports = ClapGame;
