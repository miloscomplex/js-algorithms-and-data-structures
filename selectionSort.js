function selectionSort(arr) {
  for (let i=0; i<arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
          min = j;

      }
    }
    if (i !== min) {
        console.log(arr)
        console.log('swapping to: ')
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
        console.log(arr)
        console.log('*********')
    }
  }
  return arr;
}

selectionSort([0,2,34,22,10,19,17])
// only positive is it's easy to understand 
