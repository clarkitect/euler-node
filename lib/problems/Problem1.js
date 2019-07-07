"use strict";

const example = {
  inputs: 10,
  output: 23
};

const expected = {
  inputs: 1000,
  output: 233168
};

const solve = function(maximum) {
  let i = 1;
  let sum = 0;
  while (i < maximum) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
    i++;
  }

  return sum;
};

module.exports = { solve, example, expected };
