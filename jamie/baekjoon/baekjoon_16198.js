// 에너지 모으기
// https://www.acmicpc.net/problem/16198

const fs = require('fs');
let [, beads] = fs.readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(arr => arr.split(' ').map(Number));

let total = 0;

(function dfs (v = 0) {
  if (beads.length === 2) {
    if (v > total) total = v;
  } else {
    for (let i = 1; i < beads.length - 1; i++) {
      const energy = beads[i - 1] * beads[i + 1];
      const [e] = beads.splice(i, 1);
      dfs(v + energy);
      beads.splice(i, 0, e);
    }
  }
}());

console.log(total);
