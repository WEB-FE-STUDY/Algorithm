const [n, k] = require("fs").readFileSync("./dev/stdin.txt").toString().trim().split(/\s+/).map(Number);
const visited = Array(100001).fill(false);
let queue = [[n, 0]];
let sec = 0;
visited[n] = true;

function solution() {
  while (queue.length) {
    const curs = queue;
    const nexts = curs.flatMap(([n, s]) => [
      [n * 2, s],
      [n - 1, s + 1],
      [n + 1, s + 1],
    ]);
    queue = [];
    sec += 1;

    for (const [n, s] of nexts) {
      if (visited[n] === false) {
        visited[n] = true;
        queue.push([n, s]);
        if (n === k) {
          sec = s;
          return;
        }
      }
    }
  }
  return;
}

if (n !== k) {
  solution();
}

console.log(sec);
