'use strict';

// todo: ok now make _this_ part smarter
const problems = [
  require('./problems/Problem1'),
  require('./problems/Problem2'),
  require('./problems/Problem3')
];


const RunAll = function() {

  // run all problems and compare expected input with expected output
  problems.forEach(p => {
    if (p.Expected == undefined)
      return;

    const i = p.Expected.inputs;
    const e = p.Expected.output;
    console.log('input: ', i);
    console.log('expected output: ', e);

    const r = p.Solve(i);

    console.log(r == e, r);
  });

  // console.log('[Problem1]:');

  // console.log('[Problem2]   :');
  // console.log('input      10:', p2(10));
  // console.log('input 4000000:', p2(4000000));

  // console.log('[Problem3]             :');
  // console.log('input             13195:', p3(13195));
  // console.log('input      600851475143:', p3(600851475143));
}

module.exports = {
  RunAll,
  Problems: problems
};
