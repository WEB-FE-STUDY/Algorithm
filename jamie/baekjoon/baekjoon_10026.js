// 적록색약
// https://www.acmicpc.net/problem/10026

const fs = require('fs');
let [N, ...gridA] = fs.readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

gridA = gridA.map(grid => grid.split(''));
const gridB = gridA.map(grid => grid.map(cell => cell === 'R' ? 'G' : cell));

const visitedA = Array.from({ length: Number(N) }, () => Array(Number(N)).fill(0));
const visitedB = Array.from({ length: Number(N) }, () => Array(Number(N)).fill(0));

const move = [[0, 1], [1, 0], [0, -1], [-1, 0]];

const bfs = (i, j, visited, grid) => {
  const queue = [[i, j]];
  const color = grid[i][j];
  let index = 0;
  visited[i][j] = 1;
  while (index < queue.length) {
    for (const [x, y] of move) {
      const [mx, my] = [queue[index][0] + x, queue[index][1] + y];
      if (mx < 0 || my < 0 || mx >= Number(N) || my >= Number(N)) continue;
      if (grid[mx][my] === color && !visited[mx][my]) {
        visited[mx][my] = 1;
        queue.push([mx, my]);
      }
    }
    index++;
  }
}

let countA = 0;
let countB = 0;

for (let i = 0; i < Number(N); i++) {
  for (let j = 0; j < Number(N); j++) {
    if (!visitedA[i][j]) {
      bfs(i, j, visitedA, gridA);
      countA++;
    }
    if (!visitedB[i][j]) {
      bfs(i, j, visitedB, gridB);
      countB++;
    }
  }
}

console.log(countA, countB);
