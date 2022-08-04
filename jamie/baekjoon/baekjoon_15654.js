// N과 M (5)
// https://www.acmicpc.net/problem/15654

const fs = require('fs');
const [[n, m], nums] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v => v.split(' ').map(Number));

nums.sort((a, b) => a - b);

const answer = [];

const sequence = (arr = []) => {
  if (arr.length === m) answer.push(arr.join(' '));
  else {
    for (let i = 0; i < n; i++) {
      !arr.includes(nums[i]) && sequence([...arr, nums[i]]);
    }
  }
}

sequence();

console.log(answer.join('\n'));
