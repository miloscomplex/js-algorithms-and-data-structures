function merge(arr1, arr2, compare = (a,b) => a - b){
  // add whatever parameters you deem necessary - good luck!
  let results = [];
  let i = 0;
  let j = 0;
  // while both arrays aren't at the end
  while (i < arr1.length && j < arr2.length) {
      if (compare(arr2[j], arr1[i]) > 0) {
          results.push(arr1[i]);
          i++
      } else {
          results.push(arr2[j]);
          j++;
      }
  }

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
