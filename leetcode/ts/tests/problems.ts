import { test } from 'node:test';
import { strict as assert } from 'node:assert/strict';

import { twoSum } from '../problems/1';
import { isValid } from '../problems/20'
import { maxProfit } from '../problems/121'
import { canConstruct } from '../problems/383';
import { search } from '../problems/704'
import { TreeNode, isBalanced } from '../problems/110'

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

test('110. Balanced Binary Tree', async (t) => {
  await t.test('Right-heavy balanced tree', (_t) => {
    const root = new TreeNode(3)
    root.left = new TreeNode(9)
    root.right = new TreeNode(20)
    root.right.left = new TreeNode(15)
    root.right.right = new TreeNode(7)
    assert.equal(isBalanced(root), true);
  });
  await t.test('Left-heavy unbalanced tree', (_t) => {
    const root = new TreeNode(1)
    root.left = new TreeNode(2)
    root.right = new TreeNode(2)
    root.left.left = new TreeNode(3)
    root.left.right = new TreeNode(3)
    root.left.left.left = new TreeNode(4)
    root.left.left.right = new TreeNode(4)
    assert.equal(isBalanced(root), false);
  });
  await t.test('Null tree', (_t) => {
    assert.equal(isBalanced(null), true);
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

test('383. Ransom Note', async (t) => {
  await t.test('ransomNote = "a", magazine = "b" -> false', (_t) => {
    assert.equal(canConstruct('a', 'b'), false);
  });
  await t.test('ransomNote = "aa", magazine = "ab" -> false', (_t) => {
    assert.equal(canConstruct('aa', 'ab'), false);
  });
  await t.test('ransomNote = "aa", magazine = "aab" -> true', (_t) => {
    assert.equal(canConstruct('aa', 'aab'), true);
  });
});

test('704. Binary Search', async (t) => {
  await t.test('nums = [-1,0,3,5,9,12], target = 9 -> 4', (_t) => {
    assert.deepEqual(search([-1, 0, 3, 5, 9, 12], 9), 4);
  });
  await t.test('nums = [-1,0,3,5,9,12], target = 2 -> -1', (_t) => {
    assert.deepEqual(search([-1, 0, 3, 5, 9, 12], 2), -1);
  });
});
