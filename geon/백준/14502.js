const [[n, m], ...arr] = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));
const ds = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
const starts = [];
let ans = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (arr[i][j] === 2) {
      starts.push([i, j]);
    }
  }
}

function bfs(arr) {
  const q = [...starts];
  const visited = arr.map((l) => l.map((v) => v !== 0));
  for (const [si, sj] of starts) {
    visited[si][sj] = true;
  }

  while (q.length) {
    const [i, j] = q.shift();
    for (const [di, dj] of ds) {
      const [ni, nj] = [i + di, j + dj];
      if (arr[ni] && arr[ni][nj] === 0 && visited[ni][nj] === false) {
        q.push([ni, nj]);
        visited[ni][nj] = true;
      }
    }
  }
  const safes = visited.reduce((acc, cur) => (acc += cur.filter((v) => !v).length), 0);
  return safes;
}

function recursion(comb) {
  if (comb.length === 3) {
    solve(comb);
    return;
  }
  const last = comb.at(-1);
  for (let i = 0; i < n * m; i++) {
    if (i > last) {
      recursion([...comb, i]);
    }
  }
}

function solve(newWalls) {
  newWalls = newWalls.map((v) => [Math.floor(v / m), v % m]);
  if (newWalls.every(([i, j]) => arr[i][j] === 0)) {
    for (const [i, j] of newWalls) {
      arr[i][j] = 1;
    }

    ans = Math.max(ans, bfs(arr));

    for (const [i, j] of newWalls) {
      arr[i][j] = 0;
    }
  }
}

for (let i = 0; i < n * m; i++) {
  recursion([i]);
}

console.log(ans);
