import { test } from 'node:test';
import { strict as assert } from 'node:assert/strict';

import { twoSum } from '../problems/1';
import { isValid } from '../problems/20'
import { maxProfit } from '../problems/121'

console.log('Testing LeetCode Problems...');
console.log('----------------------------');

test('1. Two Sum', async (t) => {
  await t.test('nums = [3,3], target = 6 -> [0,1]', (_t) => {
    assert.deepEqual(twoSum([3, 3], 6), [0, 1]);
  });
  await t.test('nums = [3,2,4], target = 6 -> [1,2]', (_t) => {
    assert.deepEqual(twoSum([3, 2, 4], 6), [1, 2]);
  });
  await t.test('nums = [2,7,11,15], target = 9 -> [0,1]', (_t) => {
    assert.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
  });
});

test('20. Valid Parentheses', async (t) => {
  await t.test('"()" -> true', (_t) => {
    assert.equal(isValid('()'), true);
  });
  await t.test('"()[]{}" -> true', (_t) => {
    assert.equal(isValid('()[]{}'), true);
  });
  await t.test('"(] -> false', (_t) => {
    assert.equal(isValid('(]'), false);
  });
  await t.test('"]" -> false', (_t) => {
    assert.equal(isValid(']'), false);
  });
});

test('121. Best Time to Buy and Sell Stock', async (t) => {
  await t.test('[7,1,5,3,6,4] -> 5', (_t) => {
    assert.equal(maxProfit([7, 1, 5, 3, 6, 4]), 5);
  });
  await t.test('[7,6,4,3,1] -> 0', (_t) => {
    assert.equal(maxProfit([7, 6, 4, 3, 1]), 0);
  });
});

