function sameFrequency(num1, num2){
  // good luck. Add any arguments you deem necessary.
  // edge case
  let str1 = num1.toString();
  let str2 = num2.toString();
  //edge case
  if (str1.length !== str2.length) return false;

  let numObj = {};

  for (let i=0; i < str1.length; i++) {
      let val = str1[i];
      numObj[val] = (numObj[val] || 0) + 1;
  }

  for (let i=0; i < str2.length; i++) {
      let val = str2[i];
      numObj[val] = (numObj[val] || 0) + 1;
  }

  for ( let key in numObj ) {
      if (numObj[key] % 2 !== 0) {
          return false;
      }
  }

  return true;

}

sameFrequency(123, 1732)
