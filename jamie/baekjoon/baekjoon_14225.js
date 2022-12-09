// 부분수열의 합
// https://www.acmicpc.net/problem/14225

const fs = require('fs');
let [[N], S] = fs.readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(arr => arr.split(' ').map(Number));

const maxI = Array.from({ length: N }).reduce((total, v, i) => total + 2 ** i, 0);
const arr = [];

for (let i = 0; i <= maxI; i++) {
  const binary = i.toString(2).split('').reverse();
  const sum = binary.reduce((total, v, i) => total + (Number(v) ? S[i] : 0), 0);
  arr[sum] = true;
}

const answer = arr.findIndex(v => !v);

console.log(answer < 0 ? arr.length : answer);
