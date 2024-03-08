// sort an array in ascending order
// divide the array until you get single element arrays
// compare the values in the array, sort them, and then merge them back together

function splitArray(arr) {
  // base case
  if (arr.length <= 1) return arr;

  let mid = arr.length / 2;
  let leftSide = splitArray(arr.slice(0, mid));
  let rightSide = splitArray(arr.slice(mid));

  return mergeSort(leftSide, rightSide);
}

function mergeSort(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  // while loop
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

console.log(splitArray([8, 12, 166, 1, 2]));
