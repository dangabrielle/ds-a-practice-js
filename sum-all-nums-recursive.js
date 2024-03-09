// Write a function called sumRange.
// It will take a number and return the sum of all
// numbers from 1 up to the number passed in.

function sumRange(num) {
  if (num === 1) return 1;

  return num + sumRange(num - 1);
}

console.log(sumRange(3)); // 6
