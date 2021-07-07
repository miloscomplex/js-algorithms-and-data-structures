function countUniqueValues(arr){
  // add whatever parameters you deem necessary - good luck!
  // set pointer array position
  // in 0(n) time becasue it only loops once

  if (arr.length === 0) { return 0 }
  
  let i = 0;
  // neat idea to just increment ahead with the j value
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j]
    }

  }

  return i + 1
  //
  // let pointer1 = 0;
  // let pointer2 = 1;
  // let counter = 0;
  //
  // // only run if pointer2 is within the bounds of the array
  // while (pointer2 < arr.length ) {
  //
  //     // check if pointer1 !== pointer 2
  //     if (arr[pointer1] !== arr[pointer2]) {
  //         counter += 1;
  //         // move pointer2 to next position
  //         pointer1 ++;
  //         pointer2 ++;
  //     } else if (arr[pointer1] === arr[pointer2])  {
  //         // they are the same value
  //         pointer2 ++;
  //     }
  //
  // }
  //
  // return counter;

}

countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])
