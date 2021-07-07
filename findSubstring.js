function isSubsequence(str1, str2) {
  // good luck. Add any arguments you deem necessary.
  let pointer = 0
  let next = 1

  while (next < str2.length) {
      if (str1[0] === str2[pointer] && str1[next - pointer] === str2[next]) {
          next++
      } else {
          pointer++
          next++
      }

      let sub = str2.substring(pointer, next)
      //console.log(sub)

      if (sub === str1) {
          return true
      }
  }

  return false
}
