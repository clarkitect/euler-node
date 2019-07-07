"use strict";

const example = {
  inputs: 2,
  output: 9009
};

const expected = {
  inputs: 3,
  output: 906609
};

const isPalindrome = function(n, d) {
  const asString = `${n}`;

  if (asString.length % 2 !== 0) return false;

  const front = asString.substr(0, d);
  const back = asString
    .substr(d, d)
    .split("")
    .reverse()
    .join("");

  return front === back;
};

const solve = function(digits) {
  let a;
  let b;
  let max = Number("".padStart(digits, 9));
  let min = Number("1".padEnd(digits, 0));
  let product;
  let maxProduct = 0;

  for (a = max; a >= min; a--) {
    for (b = a; b >= min; b--) {
      product = a * b;
      if (isPalindrome(product, digits)) {
        if (product > maxProduct) maxProduct = product;
      }
    }
  }
  return maxProduct;
};

module.exports = {
  solve,
  example,
  expected,
  isPalindrome
};
