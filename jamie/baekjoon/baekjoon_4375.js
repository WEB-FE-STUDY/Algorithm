// 1
// https://www.acmicpc.net/problem/4375

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v => +v);

const answer = input.map(num => {
  let multiple = 1;
  let length = 1;
  while (true) {
    if (multiple % num === 0) return length;
    multiple = (multiple * 10 + 1) % num;
    length++;
  }
});

answer.forEach(v => console.log(v));
