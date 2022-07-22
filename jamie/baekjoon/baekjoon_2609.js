// 최대공약수와 최소공배수
// https://www.acmicpc.net/problem/2609

const fs = require('fs');
let inputs = fs.readFileSync('input.txt').toString().trim().split(' ').map(Number);

let max = Math.max(...inputs);
let min = Math.min(...inputs);

let quotient = max;
let remainder = min;

while (remainder !== 0) {
  let temp = remainder;
  remainder = quotient % remainder;
  quotient = temp;
}

console.log(quotient);
console.log(max * min / quotient);

// const getGcd = (a, b) => {
//   if (b === 0) return a;
//   return getGcd(b, a % b);
// }
//
// const gcd = getGcd(max, min);

// console.log(gcd);
// console.log(max * min / gcd);


