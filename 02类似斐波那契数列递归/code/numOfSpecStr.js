function process(index, str, N) {
  if (index === N) return 1;
  if (index === 0) {
    return process(index + 1, str + "0", N) + process(index + 1, str + "1", N);
  } else {
    if (str[index - 1] === "0")
      return (
        process(index + 1, str + "0", N) + process(index + 1, str + "1", N)
      );
    else return process(index + 1, str + "1", N);
  }
}

function numOfSpecStr(N) {
  return process(N, '', N);
}


//dp way
//fib f(n) = f(n - 1) + f(n - 2)