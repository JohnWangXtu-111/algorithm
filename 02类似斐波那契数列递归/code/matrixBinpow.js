function matrixMultiply(a, b) {
  const row_len = a.length;
  const col_len = b[0].length;
  const blen = b.length;
  const ans = new Array(row_len).fill(0).map((_) => new Array(col_len).fill(0));

  for (let r = 0; r < row_len; ++r) {
    for (let c = 0; c < col_len; ++c) {
      let tmp = 0;
      for (let k = 0; k < blen; ++k) {
        tmp =  tmp + a[r][k] * b[k][c];
      }
      ans[r][c] = tmp;
    }
  }
  return ans;
}

function matrixBinpow(matrix, pow) {
  const SIZE = matrix.length;
  let res = new Array(SIZE).fill(0).map((_) => new Array(SIZE).fill(0));
  for (let i = 0; i < SIZE; ++i) {
    res[i][i] = 1;
  }

  while (pow > 0) {
    if (pow % 2 === 1) {
      res = matrixMultiply(res, matrix);
    }
    matrix = matrixMultiply(matrix, matrix);
    
    // console.log('matrix', matrix);
    pow = Math.floor(pow / 2);
  }
  // console.log(res)
  return res;
}

function fibo(n) {
  if (n <= 2) {
    return 1;
  }
  let ans = matrixBinpow(
    [
      [1, 1],
      [1, 0],
    ],
    n - 2
  );
  return ans[0][0] + ans[1][0];
}

console.log(fibo(5));
