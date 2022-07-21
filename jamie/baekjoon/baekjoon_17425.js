// 약수의 합
// https://www.acmicpc.net/problem/17425

const fs = require('fs');
let [, ...nums] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const divisors = Array.from({ length: 1000001 }, () => 1);
const sums = Array.from({ length: 1000001 });

for (let i = 2; i <= 1000000; i++) {
  for (let j = 1; i * j <= 1000000; j++) {
    divisors[i * j] += i;
  }
}

for (let i = 1; i <= 1000000; i++) {
  sums[i] = (sums[i - 1] || 0) + divisors[i];
}

const answer = [];

nums.forEach(num => {
  answer.push(sums[num]);
});

console.log(answer.join('\n'));
