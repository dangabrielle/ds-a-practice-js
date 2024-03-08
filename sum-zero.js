// write a function that acceps a sorted array of integers
// the function should find the first pair where the sum is 0
// return an array that includes both values that sum to zero
// or undefined if a pair doesn't exist

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZero([-2, 0, 1, 3])); // undefined

function sumZero(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    if (arr[start] + arr[end] === 0) {
      return [arr[start], arr[end]];
    } else if (arr[start] + arr[end] > 0) {
      end--;
    } else {
      start++;
    }
  }
}

// if we make start <= 0, then we would get a false positive. if the
// start and end are = to each other, they would have the same value. if
// the value is 0, then 0 - 0 = 0 = false positive

// brute force method using a nested for loop, O(n^2) time complexity
// function sumZero(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// }
