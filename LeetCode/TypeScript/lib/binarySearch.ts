
function binarySearch(arr: Array<number>, target: number): number {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    const m = Math.floor((l + r) / 2);

    if (arr[m] < target) {
      l = m + 1;
    } else if (arr[m] > target) {
      r = m - 1;
    } else {
      return m;
    }
  }

  return -1;
}


// console.log('nums = [-1,0,3,5,9,12], target = 9', binarySearch([-1, 0, 3, 5, 9, 12], 9))
// console.log('nums = [-1,0,3,5,9,12], target = 2', binarySearch([-1, 0, 3, 5, 9, 12], 2))
