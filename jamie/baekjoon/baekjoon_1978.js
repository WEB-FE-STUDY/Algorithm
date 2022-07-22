// 소수 찾기
// https://www.acmicpc.net/problem/1978

const fs = require('fs');
let [, inputs] = fs.readFileSync('input.txt').toString().trim().split('\n');

const arr = Array.from({ length: 1001 }, (v, i) => i);

for (let i = 2; i <= 1000; i++) {
  for (let j = i; j <= (1000 / i); j++) {
    delete arr[i * j];
  }
}

const answer = inputs.split(' ').map(Number).reduce((count, num) => {
  num !== 1 && arr[num] && count++
  return count;
}, 0);

console.log(answer);
