// 약수의 합 2
// https://www.acmicpc.net/problem/17427

const fs = require('fs');
let num = fs.readFileSync('/dev/stdin').toString().trim();

let answer = 0;

for (let i = 1; i <= num; i++) {
  answer += i * Math.floor(num / i);
}

console.log(answer);
