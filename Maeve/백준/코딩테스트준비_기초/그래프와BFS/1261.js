// 1261 알고스팟
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [M, N] = input.shift().split(" ").map(Number);
  const maze = input.map((el) => el.split("").map(Number));
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  function bfs() {
    const dist = Array.from(Array(101), () => new Array(101).fill(-1));
    const deque = [];
    dist[1][1] = 1;
    deque.push([1, 1]);

    while (deque.length !== 0) {
      const [y, x] = deque.shift();

      for (let i = 0; i < 4; i++) {
        const [ny, nx] = [y + dy[i], x + dx[i]];

        if (nx < 0 || nx > M || ny < 0 || ny > N) continue;
        if (dist[ny][nx] !== -1) continue; // 왜지
        if (maze[ny][nx] === 0) {
          deque.unshift([ny, nx]);
          dist[ny][nx] = dist[y][x];
        }
        if (maze[ny][nx] === 1) {
          deque.push([ny, nx]);
          dist[ny][nx] = dist[y][x] + 1;
        }
      }
    }

    return dist[N][M];
  }

  const answer = bfs();
  console.log(answer);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
