// implement a function which accepts a sorted array and counts
// the unique values in the array
// there can be negative numbers in the array, but it will always
// be sorted

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4`

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  // first element is always unique
  let uniqueValues = 1;

  // create two pointers. compare the two, if they're the same, then
  // increase j++ to go to the next element. compare again until they're
  // different. if they're different, increase uniqueValues and set i to same
  // position that j is in. increase j by one until it reaches the end of the
  // array
  let i = 0;
  let j = 1;

  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      j++;
    } else {
      uniqueValues++;
      i = j;
      j++;
    }
  }

  return uniqueValues;
}
