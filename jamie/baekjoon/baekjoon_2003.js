// 수들의 합 2
// https://www.acmicpc.net/problem/2003

const fs = require('fs');
let [[N, M], S] = fs.readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(arr => arr.split(' ').map(Number));

const isEqualToM = (idx) => {
  let sum = 0;
  for (let i = idx; i < N; i++) {
    sum += S[i];
    if (sum === M) return true;
    else if (sum > M) return false;
  }
}

let count = 0;

for (let i = 0; i < N; i++) {
  if (isEqualToM(i)) count++;
}

console.log(count);

// ------

let head = 0;
let tail = 0;
let count = 0;
let sum = 0;

while (tail <= N) {
  if (sum <= M) sum += S[tail++];
  else sum -= S[head++];
  if (sum === M) count++;
}

console.log(count);
