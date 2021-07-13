function maxSubarraySum(arr, num){
  // add whatever parameters you deem necessary - good luck!
  let maxSub = 0;
  let tempSub = 0;

  if (arr.length < num) return null;

  // make max sum
  for (let i=0; i < num; i++) {
      maxSub += arr[i];
  }

  tempSub = maxSub;

  for (let i = num; i < arr.length; i++) {
      tempSub = tempSub - arr[i - num ] + arr[i];
      maxSub = Math.max(maxSub, tempSub);
  }

  return maxSub;
}a
