/* eslint-disable no-unused-expressions */
const chai = require("chai");
const chaiArrays = require("chai-arrays");
const assert = require("assert");
const eulerNode = require("../index.js");

chai.use(chaiArrays);
const should = chai.should();

describe("eulerNode", () => {
  it("has a test", () => {
    assert(true, "eulerNode should have a test");
  });

  it("has a collection of problems", () => {
    let subject = eulerNode.problems;

    should.exist(subject);

    subject.should.be.array;
    subject.should.not.be.empty;
  });

  it("has problems that expose expected results", () => {
    let subject = eulerNode.problems[0].expected;

    should.exist(subject);

    subject.inputs.should.be.a("number");
    subject.output.should.be.a("number");
  });

  it("has problems that expose a solve function", () => {
    let subject = eulerNode.problems[0].solve;

    should.exist(subject);
    subject.should.be.instanceOf(Function);
  });

  let i = 0;
  eulerNode.problems.forEach(p => {
    if (p.expected === undefined) return;

    it(`solves problem ${++i}`, () => {
      const expectedInput = p.expected.inputs;
      const expectedOutput = p.expected.output;
      const solution = p.solve(expectedInput);

      should.exist(solution);
      solution.should.be.a("number");
      solution.should.equal(expectedOutput);
    });
  });
});
