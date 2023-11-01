let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

console.log(calculateTotalSalaries(salaries));

function calculateTotalSalaries(salaries) {
  let sum = 0;

  for (let salary in salaries) {
    sum += salaries[salary];
  }

  return sum;
}
