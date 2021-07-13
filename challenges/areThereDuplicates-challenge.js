function areThereDuplicates(...n) {
  // good luck. (supply any arguments you deem necessary.)
  if (n === null) return false;

  let dub = {};

  for (let val of n) {
      dub[val] = (dub[val] || 0) + 1
  }

  for (let key in dub) {
      if (dub[key] >= 2) {
          return true;
      }
  }
  return false;
}
