// 나머지
// https://www.acmicpc.net/problem/10430

const fs = require('fs');
const [A, B, C] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(v => +v);

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);
