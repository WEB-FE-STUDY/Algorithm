const [[n], ...arr] = require("fs")
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
let ans = 1;

const bfs = (si, sj, visited) => {
  const q = [[si, sj]];
  visited[si][sj] = true;

  while (q.length) {
    const [i, j] = q.shift();
    for (const [di, dj] of ds) {
      const [ni, nj] = [i + di, j + dj];
      if (visited[ni] && visited[ni][nj] === false) {
        q.push([ni, nj]);
        visited[ni][nj] = true;
      }
    }
  }
};

const getSafeties = (h) => {
  const visited = arr.map((l) => l.map((m) => m <= h));

  let result = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j]) {
        bfs(i, j, visited);
        result += 1;
      }
    }
  }

  return result;
};

for (let i = 1; i <= 100; i++) {
  const safeties = getSafeties(i);
  if (safeties === 0) break;
  ans = Math.max(ans, safeties);
}

console.log(ans);
