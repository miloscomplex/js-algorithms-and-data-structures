function binarySearch(arr, n) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor(start + end / 2);

  while (arr[middle] !== n && start < end) {
    if (n < arr[middle]) {
      end = middle - 1
      // make sure to move not to just middle
    } else {
      start = middle + 1
      // make sure to move not to just middle 
    }
    middle = Math.floor(start + end / 2);
  }

  console.log(start, middle, end);
  if (arr[middle] === n) {
    return middle;
  }
  return -1;
}

binarySearch([2,5,6,9,13,15,28], 15)
