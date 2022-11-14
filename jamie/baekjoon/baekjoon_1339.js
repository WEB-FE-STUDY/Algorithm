// 단어 수학
// https://www.acmicpc.net/problem/1339

const fs = require('fs');
let [, ...words] = fs.readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const obj = {};

words.forEach(word => {
  word.split('').reverse().forEach((char, i) => {
    if (obj[char]) obj[char] += 10 ** i;
    else obj[char] = 10 ** i;
  })
})

let i = 9;

const answer = Object.values(obj).sort((a, b) => b - a).reduce((total, v) => total + v * i--, 0);

console.log(answer);
