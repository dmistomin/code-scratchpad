function search(nums: number[], target: number): number {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    const cur = nums[m];

    if (cur === target) {
      return m;
    }

    if (cur > target) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }

  return -1;
}

console.log('nums = [-1,0,3,5,9,12], target = 9', search([-1, 0, 3, 5, 9, 12], 9))
console.log('nums = [-1,0,3,5,9,12], target = 2', search([-1, 0, 3, 5, 9, 12], 2))
