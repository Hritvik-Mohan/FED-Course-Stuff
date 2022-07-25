let n = 5;

function isEven() {
  if(!(n & 1)) {
  return true; // even
} else {
  return false; // odd
}
}

console.log(isEven(n))