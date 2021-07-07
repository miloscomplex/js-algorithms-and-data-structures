function averagePair(arr, num){
  // add whatever parameters you deem necessary - good luck!
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
      let avg = (arr[left] + arr[right]) / 2;
      if (avg === num) {
          return true
      } else if (avg > num) {
          right--
      } else {
          left++
      }
  }
  return false
}
