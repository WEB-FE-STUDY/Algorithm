const [[n, m], ...arr] = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((l) => l.split(" ").map(Number));
const ds = [
  [-1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
  [1, 0],
  [1, -1],
  [0, -1],
  [-1, -1],
];
const safeDistances = Array.from({ length: n }, () => Array(m).fill(100));
function bfs(start, arr) {
  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  const queue = [start];
  arr[start[0]][start[1]] = 0;
  visited[start[0]][start[1]] = true;

  while (queue.length) {
    const [i, j] = queue.shift();
    for ([di, dj] of ds) {
      const [ni, nj] = [i + di, j + dj];
      if (arr[ni] && arr[ni][nj] && !visited[ni][nj]) {
        if (arr[ni][nj] >= arr[i][j] + 1) {
          arr[ni][nj] = arr[i][j] + 1;
          visited[ni][nj] = true;
          queue.push([ni, nj]);
        } else {
          break;
        }
      }
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (arr[i][j]) {
      bfs([i, j], safeDistances);
    }
  }
}
console.log(Math.max(...safeDistances.flat()));
