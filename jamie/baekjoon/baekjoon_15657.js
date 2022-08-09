// N과 M (8)
// https://www.acmicpc.net/problem/15657

const fs = require('fs');
const [[n, m], nums] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v => v.split(' ').map(Number));

nums.sort((a, b) => a - b);

const answer = [];

const sequence = (arr = [], index = 0) => {
  if (arr.length === m) answer.push(arr.join(' '));
  else {
    for (let i = index; i < n; i++) {
      sequence([...arr, nums[i]], i);
    }
  }
}

sequence();

console.log(answer.join('\n'));
