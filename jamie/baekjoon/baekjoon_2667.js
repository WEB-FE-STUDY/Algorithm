// 단지 번호 붙이기
// https://www.acmicpc.net/problem/2667

const fs = require('fs');
const [n, ...inputs] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const houses = inputs.map(str => str.split('').map(Number));

const check = [[0, 1], [1, 0], [0, -1], [-1, 0]];
const answer = [];

const dfs = (a, b) => {
  let count = 1;
  houses[a][b] = 0;
  for (const [x, y] of check) {
    if (houses[a + x] && houses[a + x][b + y]) {
      count += dfs(a + x, b + y);
    }
  }
  return count;
};

for (let i = 0; i < +n; i++) {
  for (let j = 0; j < +n; j++) {
    if (houses[i][j]) {
      answer.push(dfs(i, j));
    }
  }
}

console.log(answer.length);
console.log(answer.sort((a, b) => a - b).join('\n'));
