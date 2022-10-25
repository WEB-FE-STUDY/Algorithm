// 드래곤 커브
// https://www.acmicpc.net/problem/15685

const fs = require('fs');
let [[N], ...inputs] = fs.readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(arr => arr.split(' ').map(Number));

const visited = Array.from({ length: 101 }, () => new Array(101).fill(false));

const direction = [[1, 0], [0, -1], [-1, 0], [0, 1]];

for (const [x, y, d, g] of inputs) {
  let curveDirections = [d];

  for (let i = 0; i < g; i++) {
    curveDirections = [...curveDirections, ...curveDirections.reverse().map(d => (d + 1) % 4)];
  }

  let [cx, cy] = [x, y];
  visited[cy][cx] = true;

  curveDirections.forEach(d => {
    [cx, cy] = [cx + direction[d][0], cy + direction[d][1]];
    visited[cy][cx] = true;
  })
}

let answer = 0;

for (let i = 0; i < 100; i++) {
 for (let j = 0; j < 100; j++) {
   if (visited[i][j] && visited[i + 1][j] && visited[i][j + 1] && visited[i + 1][j + 1]) answer++;
 }
}

console.log(answer);
