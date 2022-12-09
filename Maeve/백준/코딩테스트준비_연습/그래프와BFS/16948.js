// 16948 데스 나이트
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const N = Number(input[0]);
  const [r1, c1, r2, c2] = input[1].split(" ").map(Number);

  const dx = [-2, -2, 0, 0, 2, 2];
  const dy = [-1, 1, -2, 2, -1, 1];

  const queue = [];
  queue.push([r1, c1, 0]);
  const visited = Array.from(Array(N + 1), () => Array(N + 1).fill(false));

  let answer = Infinity;

  while (queue.length !== 0) {
    const [x, y, count] = queue.shift();

    visited[x][y] = true;

    if (x === r2 && y === c2) {
      answer = count;
      console.log(answer);
      return;
    }

    for (let dir = 0; dir < 6; dir++) {
      const [nx, ny] = [x + dx[dir], y + dy[dir]];
      if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
      if (!visited[nx][ny]) {
        visited[nx][ny] = true;
        queue.push([nx, ny, count + 1]);
      }
    }
  }

  console.log(-1);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
