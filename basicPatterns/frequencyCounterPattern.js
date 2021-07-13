// runs in 0(n) since it uses objects and separates loops

function same(arr1, arr2) {
  // just return if the arr lengths are different
  if (arr1.length !== arr2.length) {
    return false
  }
  // create the objects
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  // set key val for frequencyCounter1
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  // set key val for frequencyCounter2
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  // check the two counters against eachother
  for (let key in frequencyCounter1) {
    // check the key
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }
    // check value
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }

  return true

}

same([1,2,3,2], [9,1,4,4])
