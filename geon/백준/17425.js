// function g(start, end) {
//   let sum = 0;
//   for (let i = 1; i <= end; i++) {
//     sum += i * (Math.floor(end / i) - Math.floor(start / i));
//   }
//   return sum;
// }
const [_, ...arr] = require("fs").readFileSync("./dev/stdin.txt").toString().trim().split("\n").map(Number);

const f = new Array(1000001).fill(1);
const g = new Array(1000001);
f[0] = 0;
g[0] = 0;

for (let i = 2; i <= 1000000; i++) {
  for (let j = 1; i * j <= 1000000; j++) {
    f[i * j] += i;
  }
}
for (let i = 1; i <= 1000000; i++) {
  g[i] = g[i - 1] + f[i];
}
console.log(arr.map((v) => g[v]).join("\n"));

// let lastAns = 0;
// let lastN = 0;

// arr.forEach((n) => {
//   lastAns += g(lastN, n);
//   lastN = n;
//   console.log(lastAns);
// });
