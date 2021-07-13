function pivot(arr, start = 0, end = arr.length + 1) {

  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  let swapIdx = start;
  let pivot = arr[start];

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
      console.log(arr);
    }
  }
  swap(arr,start,swapIdx)
  console.log(arr)
  return swapIdx
}

pivot([4,8,2,5,9,1])
