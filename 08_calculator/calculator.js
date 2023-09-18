const add = function (x, y) {
  return x + y
};

const subtract = function (x, y) {
  return x - y
};

const sum = function (array) {
  if (array.length == 0) return 0
  return array.reduce((acc, curr) => acc + curr)
};

const multiply = function (array) {
  if (array.length == 0) return 0
  return array.reduce((acc, curr) => acc * curr)
};

const power = function (x, y) {
  return x ** y
};

const factorial = function (x) {
  if (x == 0) return 1
  else return x * factorial(x - 1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
