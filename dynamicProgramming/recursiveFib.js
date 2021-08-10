function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// memoized version
function fib(n, memo=[]) {
  if (memo[n] !== undefined) return memo[n];
  // if this n exists in memo we are done
  if (n <= 2) return 1;
  let res = fib(n-1, memo) + fib(n-2, memo);
  memo[n] = res;
  return res;
}