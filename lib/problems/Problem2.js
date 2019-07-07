'use strict';

function* fibo (n) {
  const inf = n === undefined;
  let term = 1;
  let next = 1;

  while (inf || n--) {
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

const Solve = function(max) {
  let sum = 0;

  for(let t of fibo())
  {
    if (t >= max)
      break;

    if (t % 2 === 0) {
      sum+=t;
    }
  }

  return sum;
}

module.exports = {
  Solve,
  Example: example,
  Expected: expected
}
