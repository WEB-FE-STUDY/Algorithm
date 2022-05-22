const makeMiddle = (min, max) => {
  return Math.round(Number((min + max) / 2));
};

function binarySearch(arr, target) {
  let [min, max] = [0, arr.length - 1];
  let middle = makeMiddle(min, max);
  for (let i = 0; i < arr.length; i++) {
    if (arr[middle] < target) {
      min = middle + 1;
      middle = makeMiddle(min, max);
    } else if (arr[middle] > target) {
      max = middle - 1;
      middle = makeMiddle(min, max);
    } else {
      return true;
    }
  }
  return false;
}
const target = 10;
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
console.log(binarySearch(arr, target));
