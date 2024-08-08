import { test } from 'node:test';
import { strict as assert } from 'node:assert/strict';

import { Heap } from '../lib/data-structures/heap'

console.log('Testing Data Structures...');
console.log('----------------------------');

test('Heap', async (t) => {
  await t.test('push()', (_t) => {
    const h = new Heap((a, b) => b - a);
    h.push(10);
    h.push(23);
    h.push(36);
    h.push(18);
    assert.deepEqual(h.asArray(), [10, 18, 36, 23]);
  });
});

