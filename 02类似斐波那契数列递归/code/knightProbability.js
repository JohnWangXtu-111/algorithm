//https://leetcode.cn/problems/knight-probability-in-chessboard/
function f(n, rest, r, c) {
  if (r < 0 || c < 0 || r >= n || c >= n) return 0;

  if (rest === 0) return 1;

  return (
    (f(n, rest - 1, r - 1, c - 2) +
      f(n, rest - 1, r - 2, c - 1) +
      f(n, rest - 1, r - 2, c + 1) +
      f(n, rest - 1, r - 1, c + 2) +
      f(n, rest - 1, r + 1, c + 2) +
      f(n, rest - 1, r + 2, c + 1) +
      f(n, rest - 1, r + 2, c - 1) +
      f(n, rest - 1, r + 1, c - 2)) /
    8
  );
}
function validate(n, r, c) {
  return r >= 0 && c >= 0 && r < n && c < n;
}

function get(dp, n, rest, r, c) {
  let ans = 0;
  ans += validate(n, r - 1, c - 2) ? dp[rest - 1][r - 1][c - 2] : 0;
  ans += validate(n, r - 2, c - 1) ? dp[rest - 1][r - 2][c - 1] : 0;
  ans += validate(n, r - 2, c + 1) ? dp[rest - 1][r - 2][c + 1] : 0;
  ans += validate(n, r - 1, c + 2) ? dp[rest - 1][r - 1][c + 2] : 0;
  ans += validate(n, r + 1,  c+ 2) ? dp[rest - 1][r + 1][c + 2] : 0;
  ans += validate(n, r + 2, c + 1) ? dp[rest - 1][r + 2][c + 1] : 0;
  ans += validate(n, r + 2, c - 1) ? dp[rest - 1][r + 2][c - 1] : 0;
  ans += validate(n, r + 1, c - 2) ? dp[rest - 1][r + 1][c - 2] : 0;

  return ans / 8;
}

var knightProbability = function (n, k, row, col) {
  const dp = new Array(k + 1)
    .fill(1)
    .map((_) => new Array(n).fill(1).map((_) => new Array(n).fill(0)));
  for (let row = 0; row < n; ++row) {
    for (let col = 0; col < n; ++col) {
      dp[0][row][col] = 1;
    }
  }
  for (let rest = 1; rest <= k; ++rest) {
    for (let row = 0; row < n; ++row) {
      for (let col = 0; col < n; ++col) {
        dp[rest][row][col] = get(dp, n, rest,row, col);
      }
    }
  }

  return dp[k][row][col];
};
