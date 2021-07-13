function isSubsequence(str1, str2) {
  // good luck. Add any arguments you deem necessary.
  let point1 = 0;
  let point2 = 0;

  while (point2 < str2.length) {

      if (str1[point1] === str2[point2]) {
          point1++;
          point2++;
      } else {
          point2++;
      }

      if (str1.length - 1 === point1) {
          return true;
      }
  }

  return false;
}
