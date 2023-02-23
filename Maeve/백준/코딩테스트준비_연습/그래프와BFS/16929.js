// 16929 Two Dots
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [N, M] = input.shift().split(" ").map(Number);
  const map = input.map((el) => el.split(""));

  let visited = Array.from(Array(N), () => new Array(M).fill(false));

  const dx = [1, 0, -1, 0];
  const dy = [0, -1, 0, 1];

  let answer = "No";

  const dfs = (x, y, length, initX, initY) => {
    const dot = map[x][y];
    visited[x][y] = true;

    for (let k = 0; k < 4; k++) {
      const [nx, ny] = [x + dx[k], y + dy[k]];
      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
      if (!visited[nx][ny] && map[nx][ny] === dot) dfs(nx, ny, length + 1, initX, initY);
      if (nx === initX && ny === initY && visited[nx][ny]) {
        if (length >= 4) {
          answer = "Yes";
          return;
        }
      }
    }
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      dfs(i, j, 1, i, j);
      visited = Array.from(Array(N), () => new Array(M).fill(false)); // visited 각 경우마다 초기화
    }
  }

  console.log(answer);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
