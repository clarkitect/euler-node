'use strict';

const example = {
  inputs: 13195,
  output: 29
};

const expected = {
  inputs: 600851475143,
  output: 6857
}

const solve = function (product) {

  let factor = 2;

  while (factor <= product) {
    if (product % factor == 0) {
      product /= factor;
    } else {
      factor++;
    }

  }
  return factor;
}

module.exports = {
  solve,
  example,
  expected
};
