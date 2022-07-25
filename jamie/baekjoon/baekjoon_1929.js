// 소수 구하기
// https://www.acmicpc.net/problem/1929

const fs = require('fs');
const [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const arr = Array.from({ length: 1000001 }, (v, i) => i);

delete arr[1];

for (let i = 2; i <= Math.sqrt(1000000); i++) {
  if (arr[i]) {
    for (let j = i * i; j <= 1000000; j += i) {
      delete arr[j];
    }
  }
}

const answer = [];

for (let i = a; i <= b; i++) {
  arr[i] && answer.push(i);
}

console.log(answer.join('\n'));
