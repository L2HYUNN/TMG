const ClapGame = require("./ClapGame");
const utils = require("./utilities");
const { validateNumber } = require("./validator");

function clapGame(number) {
  validateNumber(number);

  const clapGame = new ClapGame(utils);

  return clapGame.play(number);
}

function problem3(number) {
  try {
    return clapGame(number);
  } catch (error) {
    return error.message;
  }
}

console.log(problem3(33));
