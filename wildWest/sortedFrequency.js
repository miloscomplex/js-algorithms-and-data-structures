function sortedFrequency(arr, num){
  // add whatever parameters you deem necessary - good luck!
  let left = 0;
  let right = arr.length - 1;
  let counter = 0;

  while (left <= right) {
      if (left === right) {
          if (arr[left] === num) counter++;
          return counter === 0 ? -1 : counter;
      } else {
          if (arr[left] === num) counter++;
          if (arr[right] === num) counter++;
      }
      left++;
      right--;
  }

}
