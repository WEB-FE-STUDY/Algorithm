const [s, t] = require("fs").readFileSync("./dev/stdin.txt").toString().trim().split(" ").map(Number);
const ds = [
  ["*", (a) => a * a],
  ["+", (a) => a + a],
];
const q = [
  [s, ""],
  [1, "/"],
];
const visited = [];
let ans = -1;

visited[s] = true;
visited[1] = true;

while (q.length) {
  const [cur, ops] = q.shift();
  console.log(cur);
  if (cur === t) {
    ans = ops;
    break;
  }
  for (const [op, calc] of ds) {
    const next = calc(cur);
    if (!visited[next] && next >= 0 && next <= t) {
      visited[next] = true;
      q.push([next, ops + op]);
    }
  }
}

console.log(ans || 0);
