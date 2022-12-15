const [[], ...lines] = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((l) => l.split(" ").map(Number));
const ds = [1, 2, 3, 4, 5, 6];
const q = [1];
const visited = Array(101).fill(false);
const portals = {};
let cnt = 0;
let ans = 0;

visited[1] = true;

for (const [x, y] of lines) {
  portals[x] = y;
}

while (q.length) {
  const l = q.length;
  for (let i = 0; i < l; i++) {
    const cur = q.shift();
    if (cur === 100) {
      ans = cnt;
      break;
    }

    for (const d of ds) {
      let next = cur + d;
      if (portals[next]) {
        next = portals[next];
      }

      if (!visited[next]) {
        q.push(next);
        visited[next] = true;
      }
    }
  }
  if (ans !== 0) break;
  cnt += 1;
}

console.log(ans);
