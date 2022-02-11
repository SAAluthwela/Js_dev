//pow(2,4) = 16 ---- pow = power

// Iterative method

function pow(x, n) {
  let result = 1;

  // multiply result by x n times in the loop
  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

console.log(pow(2, 3)); // 8

//recursive method

function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

console.log(pow(2, 3)); // 8

//shorter version

function pow(x, n) {
  return n == 1 ? x : x * pow(x, n - 1);
}
