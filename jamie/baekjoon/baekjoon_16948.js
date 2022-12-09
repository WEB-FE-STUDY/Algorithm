// 데스 나이트
// https://www.acmicpc.net/problem/16948

const fs = require('fs');
let [[N], [r1, c1, r2, c2]] = fs.readFileSync('input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(arr => arr.split(' ').map(Number));

const moves = [[-2, -1], [-2, 1], [0, -2], [0, 2], [2, -1], [2, 1]]

const visited = Array.from({ length: N }, () => Array(N).fill(false));

const queue = [[r1, c1]];
visited[r1][c1] = true;

const bfs = () => {
  let count = 0;
  let index = 0;

  while (index < queue.length) {
    count++;
    const length = queue.length;

    for (let i = index; i < length; i++) {
      const [cx, cy] = queue[index];

      for (const [x, y] of moves) {
        const [mx, my] = [cx + x, cy + y];
        if (!visited[mx] || visited[mx][my] === undefined) continue;
        if (mx === r2 && my === c2) return count;
        else if (!visited[mx][my]) {
          queue.push([mx, my]);
          visited[mx][my] = true;
        }
      }
      index++;
    }
  }
  return -1;
}

console.log(bfs());
