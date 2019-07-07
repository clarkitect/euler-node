"use strict";

const problems = [
  require("./problems/Problem1"),
  require("./problems/Problem2"),
  require("./problems/Problem3")
];

const runAll = function() {
  // Run all problems and compare expected input with expected output
  problems.forEach(p => {
    if (p.expected === undefined) return;

    const expectedInput = p.expected.inputs;
    const expectedOutput = p.expected.output;
    console.log("input          : ", expectedInput);
    console.log("expected output: ", expectedOutput);

    const r = p.solve(expectedInput);

    console.log(r === expectedOutput, r);
  });

  return 0;
};

module.exports = {
  runAll,
  problems
};
