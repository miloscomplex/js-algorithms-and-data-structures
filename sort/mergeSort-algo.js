function mergeArrays(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    // while both arrays aren't at the end
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
          results.push(arr1[i]);
          i++;
        } else {
          // only else to avoid edge case as equal
          results.push(arr2[j]);
          j++;
        }
    }
    // if one is longer dump it into results
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }

    return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0,mid));
  let right = mergeSort(arr.slice(mid));
  return mergeArrays(left, right);
}

mergeSort([12,8,30,1])
