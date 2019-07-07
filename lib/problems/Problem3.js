'use strict';

const Solve = function (n) {

  let largest = 2;

  while (largest <= n) {
    if (n % largest == 0) {
      n /= largest;
    } else {
      largest++;
    }

  }
  return largest;
}

module.exports = Solve
