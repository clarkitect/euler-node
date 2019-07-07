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
