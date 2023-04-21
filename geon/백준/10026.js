const lines = require("fs").readFileSync("./dev/stdin.txt").toString().trim().split("\n");
const n = Number(lines.shift());
const arr = lines.map((line) => line.split(""));
let visited = Array.from({ length: n }, () => Array(n).fill(false));
const ds = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
let grids = 0;
let amblyopiaGrids = 0;

function bfs(si, sj) {
  const q = [[si, sj]];

  visited[si][sj] = true;

  while (q.length) {
    const [i, j] = q.shift();
    for (const [di, dj] of ds) {
      const [ni, nj] = [i + di, j + dj];
      if (visited[ni] && visited[ni][nj] === false && arr[i][j] === arr[ni][nj]) {
        visited[ni][nj] = true;
        q.push([ni, nj]);
      }
    }
    if (arr[i][j] === "R") {
      arr[i][j] = "G";
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (!visited[i][j]) {
      bfs(i, j);
      grids += 1;
    }
  }
}
visited = Array.from({ length: n }, () => Array(n).fill(false));

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (!visited[i][j]) {
      bfs(i, j);
      amblyopiaGrids += 1;
    }
  }
}

console.log(grids, amblyopiaGrids);
