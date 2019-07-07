'use strict';

/* todo: move to shared lib */
function* fib (n) {
  const inf = n === undefined;
  let term = 1;
  let next = 1;

  while (inf || n--) {
    yield term;
    [term, next] = [next, term + next];
  }
}

const Expectations = {
  Example: 44,
  Actual: 4613732
}

const Example = function() {
  return Solve(10);
}

const Actual = function() {
  return Solve(4000000);
}

const Solve = function(max) {
  let sum = 0;

  for(let t of fib())
  {
    if (t >= max)
      break;

    if (t % 2 === 0) {
      sum+=t;
    }
  }

  return sum;
}

module.exports = Solve
