// 14502 연구소
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [N, M] = input.shift().split(" ").map(Number);
  const map = input.map((el) => el.split(" ").map(Number));
  let max = 0;
  const dx = [1, 0, -1, 0];
  const dy = [0, -1, 0, 1];

  const spreadVirus = () => {
    const virusQueue = [];
    let wall = 0;
    let contaminated = 0;
    const visited = Array.from(Array(N + 1), () => Array.from(M + 1).fill(false));

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (map[i][j] === 2) {
          virusQueue.push([i, j]);
          contaminated++;
        }
        if (map[i][j] === 1) wall++;
      }
    }

    while (virusQueue.length) {
      const [x, y] = virusQueue.shift();

      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

        if (map[nx][ny] === 0 && !visited[nx][ny]) {
          visited[nx][ny] = true;
          contaminated++;
          virusQueue.push([nx, ny]);
        }
      }
    }

    return N * M - (wall + contaminated);
  };

  const makeWall = (count) => {
    if (count === 3) {
      max = Math.max(max, spreadVirus());
      return;
    }

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (map[i][j] === 0) {
          map[i][j] = 1;
          makeWall(count + 1);
          map[i][j] = 0;
        }
      }
    }
  };

  makeWall(0);
  console.log(max);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
