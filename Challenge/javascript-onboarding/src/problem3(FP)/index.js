const clapGame = require("./clapGame");

function problem3(number) {
  try {
    return clapGame(number);
  } catch (error) {
    return error.message;
  }
}

console.log(problem3(33));

module.exports = problem3;
