const assert = require("assert");
const eulerNode = require("../index.js");

describe("eulerNode", () => {
  it("has a test", () => {
    assert(true, "eulerNode should have a test");
  });

  it("has a collection of problems", () => {
    const problems = eulerNode.problems;

    assert(problems !== undefined);
  });

  it("has problems that expose expected results", () => {
    const problem1 = eulerNode.problems[0];

    assert(problem1.expected !== undefined);
  });

  it("has problems that expose a solve method", () => {
    const solveMethod = eulerNode.problems[0].solve;

    assert(solveMethod !== undefined);
    assert(typeof solveMethod === "function");
  });

  let i = 0;
  eulerNode.problems.forEach(p => {
    if (p.expected === undefined) return;

    it(`solves problem ${++i}`, () => {
      const expectedInput = p.expected.inputs;
      const expectedOutput = p.expected.output;
      const r = p.solve(expectedInput);

      assert(r === expectedOutput);
    });
  });
});
