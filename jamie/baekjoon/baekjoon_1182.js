// 부분수열의 합
// https://www.acmicpc.net/problem/1182

const fs = require('fs');
const [[count, total], nums] = fs.readFileSync('input.txt').toString().trim().split('\n').map((str) => str.split(' ').map(Number));

let answer = 0;

// const getSum = (arr) => arr.reduce((total, num) => total + num);
//
// const sequence = (arr = [], index = 0) => {
//   for (let i = index; i < count; i++) {
//     const sum = getSum([...arr, nums[i]]);
//     if (sum === total) {
//       answer++;
//     }
//     if (arr.length < count) sequence([...arr, nums[i]], i + 1);
//   }
// }
//
// sequence();

for (let i = 1; i < (1 << count); i++) {
  let sum = 0;
  for (let j = 0; j < nums.length; j++) {
    if ((i & (1 << j)) !== 0) sum += nums[j];
  }
  if (sum === total) answer++;
}

console.log(answer);
