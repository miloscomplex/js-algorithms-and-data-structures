function findRotatedIndex(arr, num){
  // add whatever parameters you deem necessary - good luck!
  let left = 0;
  let right = arr.length - 1;
  let index = -1;
  while (left <= right) {
      if (arr[left] === num) {
         return left;
      }
      if (arr[right] === num) {
          return right;
      }
      left++;
      right--;
  }
  return -1;
}
