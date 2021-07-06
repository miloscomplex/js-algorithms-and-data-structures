function validAnagram(str1, str2){
  // add whatever parameters you deem necessary - good luck!
  if (str1.length !== str2.length ) {
      return false;
  }

  let strObj = {};

  for (let val in str1 ) {
      //console.log(str1[val])
      // if key exists add to it if not create it
      strObj[str1[val]] = (strObj[str1[val]] || 0) + 1;
  }

  for (let val in str2) {
      strObj[str2[val]] = (strObj[str2[val]] || 0) + 1;
  }

  // now loop over the to see if the values are even
  for (let key in strObj) {
      console.log(strObj)
      console.log(strObj[key])

      if (strObj[key] % 2 !== 0) {
          return false
      }
  }


  return true;
}
