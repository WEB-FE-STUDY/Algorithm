const input = require("fs").readFileSync("./dev/stdin.txt").toString().trim().split("\n");
const [n, m] = input[0].split(" ");
const arr = input.slice(1).map((v) => v.split("").map(Number));

function getSum(arr, mask) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    let row = 0;
    for (let j = 0; j < m; j++) {
      if (mask[i][j]) {
        row = row * 10 + arr[i][j];
      }
      if (!mask[i][j] || j === m - 1) {
        sum += row;
        row = 0;
      }
    }
    row = 0;
  }
  for (let i = 0; i < m; i++) {
    let col = 0;
    for (let j = 0; j < n; j++) {
      if (!mask[j][i]) {
        col = col * 10 + arr[j][i];
      }
      if (mask[j][i] || j === n - 1) {
        sum += col;
        col = 0;
      }
    }
    col = 0;
  }
  return sum;
}

let answer = 0;
for (let i = 0; i < 1 << (n * m); i++) {
  const bit = i
    .toString(2)
    .padStart(n * m, 0)
    .split("")
    .map(Number);
  const mask = [];
  for (let j = 0; j < n; j++) {
    mask.push(bit.slice(j * m, j * m + m));
  }
  const sum = getSum(arr, mask);
  answer = Math.max(answer, sum);
}

console.log(answer);
