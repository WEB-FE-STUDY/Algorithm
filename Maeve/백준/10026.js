// 10026 적록색약
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const N = Number(input.shift());
  let map = input.map((el) => el.split(""));

  let visited = Array.from(Array(N), () => new Array(N).fill(false));

  let answer = 0;
  let answer2 = 0;

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  const bfs = (i, j) => {
    const q = [];
    q.push([i, j]);
    visited[i][j] = true;

    while (q.length !== 0) {
      const [x, y] = q.shift();

      for (let dir = 0; dir < 4; dir++) {
        const [nx, ny] = [x + dx[dir], y + dy[dir]];

        if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
        if (!visited[nx][ny] && map[i][j] === map[nx][ny]) {
          visited[nx][ny] = true;
          q.push([nx, ny]);
        }
      }
    }
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        answer++;
        bfs(i, j);
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (map[i][j] === "G") map[i][j] = "R";
    }
  }

  visited = Array.from(Array(N), () => new Array(N).fill(false));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        answer2++;
        bfs(i, j);
      }
    }
  }

  console.log(answer, answer2);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
