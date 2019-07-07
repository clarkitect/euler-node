'use strict';

const p1 = require('./problems/Problem1');
const p2 = require('./problems/Problem2');
const p3 = require('./problems/Problem3');

const ShowAll = function() {

  // todo: make smarter?

  console.log('[Problem1]:');
  console.log('input   10:', p1(10));
  console.log('input 1000:', p1(1000));

  console.log('[Problem2]   :');
  console.log('input      10:', p2(10));
  console.log('input 4000000:', p2(4000000));

  console.log('[Problem3]             :');
  console.log('input             13195:', p3(13195));
  console.log('input      600851475143:', p3(600851475143));
}

module.exports = {
  ShowAll,
  Problem1: p1,
  Problem2: p2,
  Problem3: p3
};
