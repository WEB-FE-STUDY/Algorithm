const [n, r1, c1, r2, c2] = require("fs").readFileSync("./dev/stdin.txt").toString().trim().split(/\s+/).map(Number);
const ds = [
  [-2, -1],
  [-2, 1],
  [0, -2],
  [0, 2],
  [2, -1],
  [2, 1],
];
const q = [[r1, c1]];
const visited = Array.from({ length: n }, () => Array(n).fill(false));
let ans = -1;
let cnt = 1;
visited[r1][c1] = true;

while (q.length) {
  const l = q.length;
  for (let i = 0; i < l; i++) {
    const [r, c] = q.shift();

    for (const [dr, dc] of ds) {
      const [nr, nc] = [r + dr, c + dc];

      if (visited[nr] && visited[nr][nc] === false) {
        visited[nr][nc] = true;
        q.push([nr, nc]);
        if (nr === r2 && nc === c2) {
          ans = cnt;
          break;
        }
      }
    }
    if (ans != -1) {
      break;
    }
  }

  cnt += 1;
  if (ans != -1) {
    break;
  }
}

console.log(ans);
