const [n, s, ...arr] = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);
let start = 0;
let end = 0;
let ans = 100001;
let sum = arr[0];

while (end < n) {
  if (sum < s) {
    sum += arr[++end];
  } else {
    ans = Math.min(ans, end - start + 1);
    sum -= arr[start++];
  }
}
console.log(start === 0 ? 0 : ans);
