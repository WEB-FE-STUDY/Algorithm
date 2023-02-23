// 2206 유기농 배추
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const T = Number(input.shift());

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  const getAnswer = (N, M, map) => {
    const visited = Array.from(Array(N), () => new Array(M).fill(false));
    let count = 0;

    const bfs = (i, j) => {
      const q = [];
      q.push([i, j]);
      visited[i][j] = true;

      while (q.length !== 0) {
        const [x, y] = q.shift();

        for (let dir = 0; dir < 4; dir++) {
          const [nx, ny] = [x + dx[dir], y + dy[dir]];

          if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
          if (!visited[nx][ny] && map[nx][ny] === 1) {
            visited[nx][ny] = true;
            q.push([nx, ny]);
          }
        }
      }
    };

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (!visited[i][j] && map[i][j] === 1) {
          bfs(i, j);
          count++;
        }
      }
    }

    console.log(count);
  };

  for (let test = 0; test < T; test++) {
    const [M, N, K] = input.shift().split(" ").map(Number);
    const map = Array.from(Array(N), () => new Array(M).fill(0));
    for (let location = 0; location < K; location++) {
      const [Y, X] = input.shift().split(" ").map(Number);
      map[X][Y] = 1;
    }
    getAnswer(N, M, map);
  }
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
