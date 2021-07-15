function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.power(10, i)) % 10;

}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (var i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i]
  }

}
