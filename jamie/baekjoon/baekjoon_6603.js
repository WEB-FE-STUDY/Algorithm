// 로또
// https://www.acmicpc.net/problem/6603

const fs = require('fs');
const [...inputs] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const answer = [];

inputs.forEach((input) => {
  if (input.length > 2) {
    const [, ...arr] = input.split(' ');
    const nums = arr.sort((a, b) => a - b).map(Number);
    const lottos = [];

    const sequence = (arr = [], index = 0) => {
      if (arr.length === 6) lottos.push(arr.join(' '));
      else {
        for (let i = index; i < nums.length; i++) {
          !arr.includes(nums[i]) && sequence([...arr, nums[i]], i + 1);
        }
      }
    }
    sequence();
    answer.push(lottos.join('\n'));
  }
});

console.log(answer.join('\n\n'));
