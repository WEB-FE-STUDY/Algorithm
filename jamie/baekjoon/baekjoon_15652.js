// N과 M (4)
// https://www.acmicpc.net/problem/15652

const fs = require('fs');
const [n, m] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const answer = [];

const sequence = (arr = []) => {
  if (arr.length === m) answer.push(arr.join(' '));
  else {
    for (let i = (arr.at(-1) || 1); i <= n; i++) {
      sequence([...arr, i]);
    }
  }
}

sequence();

console.log(answer.join('\n'));
