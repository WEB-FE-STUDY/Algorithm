// 약수
// https://www.acmicpc.net/problem/1037

const fs = require('fs');
const [, nums] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const numArr = nums.split(' ').sort((a, b) => +a - +b);

console.log(+numArr[0] * +numArr.at(-1));
