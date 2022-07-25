// 골드바흐의 추측
// https://www.acmicpc.net/problem/6588

const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

inputs.pop();

const arr = Array.from({ length: 1000001 }, (v, i) => i);

delete arr[1];

for (let i = 2; i <= Math.sqrt(1000000); i++) {
  if (arr[i]) {
    for (let j = i * i; j <= 1000000; j += i) {
      delete arr[j];
    }
  }
}

const answer = inputs.map(num => {
  for (let i = num; i >= (num / 2); i--) {
    if (arr[i] && arr[num - i]) return `${num} = ${num - i} + ${i}`;
  }
  return 'Goldbach\'s conjecture is wrong.';
});

console.log(answer.join('\n'));
