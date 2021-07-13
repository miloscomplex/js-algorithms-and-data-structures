function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    let current = arr[i]
    for (var j = i -1; j >= 0 && arr[j] > current; j--) {
        arr[j+1] = arr[j]
        //console.log(arr)
     }
     arr[j+1] = current
     console.log(arr)
  }
  return arr;
}

insertionSort([3,50,12,43,34,56])
// insertionSort is good for online sort
