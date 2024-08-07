import { test } from 'node:test';
import { strict as assert } from 'node:assert/strict';

import { twoSum } from '../problems/1';

console.log('Testing LeetCode Problems...');

test('1. Two Sum', async (t) => {
  await t.test('nums = [3,3], target = 6 -> [0,1] ', (_t) => {
    assert.deepEqual(twoSum([3, 3], 6), [0, 1]);
  });
  await t.test('nums = [3,2,4], target = 6 -> [1,2]', (_t) => {
    assert.deepEqual(twoSum([3, 2, 4], 6), [1, 2]);
  });
  await t.test('nums = [2,7,11,15], target = 9 -> [0,1]', (_t) => {
    assert.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
  });
})

