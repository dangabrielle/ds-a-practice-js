// Write a function called "all" which
// accepts an array and a callback and returns true
// if every value in the array returns true when passed
// as parameter to the callback function

function all(arr, fn) {
  // base case: check if arr is empty
  if (arr.length === 0) return true;

  // add first element into callback & check if true
  // if it is, remove the first element
  if (fn(arr[0])) {
    arr.shift();
    return all(arr, fn); // recursive call with modified arr
  } else {
    return false;
  }
}

let allAreLessThanSeven = all([1, 2, 9], function (num) {
  return num < 7;
});

console.log(allAreLessThanSeven); // false
