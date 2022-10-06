// 배열 복원하기
// https://www.acmicpc.net/problem/16967

const fs = require('fs');
let [[H, W, X, Y], ...results] = fs.readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(input => input.split(' ').map(Number));

const answer = Array.from({ length: H }, () => new Array(W).fill(0));

for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (i - X >= 0 && j - Y >= 0) answer[i][j] = results[i][j] - answer[i - X][j - Y];
    else answer[i][j] = results[i][j];
  }
}

console.log(answer.map(arr => arr.join(' ')).join('\n'));
