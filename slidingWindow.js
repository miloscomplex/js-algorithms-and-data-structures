// Time Complexity - 0(n)
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  // edgeCase
  if (arr.length < num) return null;

  // make the first sum
  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }

  tempSum = maxSum;

  // now set i to num
  for (let i = num; i < arr.length; i++) {
    // slide the window is here
    // subtract the first num and add the next num
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum)
  }

  return maxSum
}
