// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

const twoSum = function (arr, target) {
  // create hash map to store element and their positions
  let hashMap = {};

  // loop through the arr and store the element-position in hashMap
  // calculate the difference between the target and the current element
  // if the difference value exists in the hash map, then return an array
  // containing the current index and the one stored in the hash map
  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];

    if (diff in hashMap) {
      return [hashMap[diff], i];
    }
    // must be placed after the if statement
    // adding the key-value pairs before the if-statement will
    // prematurely end the loop and produce the wrong result
    hashMap[arr[i]] = i;
  }
};

console.log(twoSum([2, 7, 11, 5], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
