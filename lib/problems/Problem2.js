"use strict";

function* fibo(maxYield) {
  const isInfinite = maxYield === undefined;

  let term = 1;
  let next = 1;
  // eslint-disable-next-line no-unmodified-loop-condition
  while (isInfinite || maxYield--) {
    yield term;
    [term, next] = [next, term + next];
  }
}

const example = {
  inputs: 10,
  output: 44
};

const expected = {
  inputs: 4000000,
  output: 4613732
};

const solve = function(upperBound) {
  let sum = 0;

  for (let term of fibo()) {
    if (term >= upperBound) break;

    if (term % 2 === 0) {
      sum += term;
    }
  }

  return sum;
};

module.exports = {
  solve,
  example,
  expected
};
