// given a sorted array and a target value, return the position
// of the value you're searching for (target). if the element does
// not exist, return -1

function findTarget(arr, target) {
  // create pointer values
  let start = 0;
  let end = arr.length - 1;

  // while loop
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else if (arr[mid] < target) {
      start = mid + 1;
    }
  }

  return -1;
}

console.log(findTarget([2, 4, 6, 8, 10, 12, 14, 16], 10));
