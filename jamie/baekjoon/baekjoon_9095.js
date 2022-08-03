// 1, 2, 3 더하기
// https://www.acmicpc.net/problem/9095

const fs = require('fs');
const [, ...inputs] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const counts = [];

counts[1] = 1;
counts[2] = 2;
counts[3] = 4;

for (let i = 4; i <= 10; i++) {
  counts[i] = counts[i - 1] + counts [i - 2] + counts[i - 3];
}

console.log(inputs.map(num => counts[num]).join('\n'));
