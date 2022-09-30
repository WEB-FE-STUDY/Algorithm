const getNexts = ([n, clipboard]) => [
  [n, n],
  [n + clipboard, clipboard],
  [n - 1, clipboard],
];

const input = require("fs").readFileSync("./dev/stdin.txt").toString().trim();
const s = Number(input);
const queue = [[1, 0]];
const visited = Array.from({ length: 1001 }, () => Array(1001).fill(false));
let sec = 0;
visited[1][0] = true;

function solution() {
  while (queue.length) {
    const len = queue.length;
    sec += 1;
    for (let i = 0; i < len; i++) {
      const cur = queue.shift();
      const nexts = getNexts(cur);
      for (const [n, clipboard] of nexts) {
        if (n >= 0 && n <= 1000 && !visited[n][clipboard]) {
          visited[n][clipboard] = true;
          queue.push([n, clipboard]);
        }
        if (n === s) {
          return;
        }
      }
    }
  }
}

solution();

console.log(sec);
