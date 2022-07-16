function binpow(base, pow) {
  let res = 1;
  while(pow > 0) {
    if(pow % 2 === 1) res *= base;

    base *= base;
    pow = Math.floor(pow / 2);
  }
  return res;
}
