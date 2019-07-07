'use strict';

const example = {
  inputs: 13195,
  output: 29
};

const expected = {
  inputs: 600851475143,
  output: 6857
}

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

module.exports = {
  Solve,
  Example: example,
  Expected: expected
};
