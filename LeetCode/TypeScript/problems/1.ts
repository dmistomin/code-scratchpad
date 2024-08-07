export function twoSum(nums: Array<number>, target: number): Array<number> {
  const visited: { [num: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const remainder = target - n;

    if (remainder in visited) {
      return [visited[remainder], i];
    }

    visited[n] = i;
  }

  return [];
}

// console.log('nums = [3,3], target = 6: ', twoSum([3, 3], 6));
// console.log('nums = [3,2,4], target = 6', twoSum([3, 2, 4], 6));
// console.log('nums = [2,7,11,15], target = 9', twoSum([2, 7, 11, 15], 9));
