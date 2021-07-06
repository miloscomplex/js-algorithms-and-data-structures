// MULTIPLE POINTERS PATTERN
// Time Complexity - 0(n)
// Space Complexity - 0(1)
// used to iterate through a sorted list/array/string etc

function sumZero(arr) {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
}
