// 연산자 끼워넣기
// https://www.acmicpc.net/problem/14888

const fs = require('fs');
let [, nums, ops] = fs.readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(arr => arr.split(' ').map(Number));

const calcs = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b,
  (a, b) => (a / b) >> 0
];

let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;

const opsCount = [0, 0, 0, 0];

const dfs = (num, dep = 1) => {
  if (dep === nums.length) {
    max = Math.max(max, num);
    min = Math.min(min, num);
  } else {
    for (let i = 0; i < 4; i++) {
      if (opsCount[i] < ops[i]) {
        opsCount[i]++;
        dfs(calcs[i](num, nums[dep]), dep + 1);
        opsCount[i]--;
      }
    }
  }
}

dfs(nums[0]);

console.log([max, min].join('\n'));
