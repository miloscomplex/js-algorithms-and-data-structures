function sameFrequency(num1, num2){
  // good luck. Add any arguments you deem necessary.
  // edge case
  // if (num1.length !== num2.length) return false;

  let numObj = {};
  let modNum = 10;

  while (num1 > 0) {
      let val = num1 % modNum ;
      numObj[val] = (numObj[val] || 0) + 1;
      num1 = num1 - val;
      modNum *= 10;
  }

  modNum = 10

  while (num2 > 0) {
      let val = num2 % modNum;
      let reduce = Math.floor(val / (modNum * .1));
      // getting infinity loop
      console.log(modNum, num2, val, reduce )
      numObj[reduce] = (numObj[reduce] || 0) + 1;
      num2 -= reduce;
      modNum *= 10;

  }

  for ( let key in numObj ) {
      if (numObj[key] % 2 !== 0) {
          return false
      }
  }

  return true;

}

sameFrequency(123, 1732)
