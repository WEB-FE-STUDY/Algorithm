// 수 이어 쓰기 1
// https://www.acmicpc.net/problem/1748

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const length = input.length;

if (length === 1) console.log(+input);
else {
  const lowNums = +`${'9'.repeat(length - 1)}`;
  let sum = (input - lowNums) * length;
  for (let i = 1; i <= length - 1; i++) {
    sum += +('9'.padEnd(i, '0')) * i;
  }
  console.log(sum);
}
