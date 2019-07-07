'use strict';

const Solve = function(max) {
  let i = 1;
  let sum = 0;

  while (i < max) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
    i++;
  }

  return sum;
}

module.exports = Solve
