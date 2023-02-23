// 2234 성곽
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [N, M] = input.shift().split(" ").map(Number);
  const map = input.map((el) => el.split(" ").map((i) => Number(i).toString(2).padStart(4, "0")));

  let visited = Array.from(Array(M), () => new Array(N).fill(false));

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  let space = 1;
  const answer = [];
  const answer2 = [];

  const removeWalls = (i, j, k, ni, nj) => {
    if (k === 0) {
      const from = map[i][j].split("");
      from[0] = "0";
      map[i][j] = from.join("");

      const to = map[ni][nj].split("");
      to[2] = "0";
      map[ni][nj] = to.join("");
    }
    if (k === 1) {
      const from = map[i][j].split("");
      from[1] = "0";
      map[i][j] = from.join("");

      const to = map[ni][nj].split("");
      to[3] = "0";
      map[ni][nj] = to.join("");
    }
    if (k === 2) {
      const from = map[i][j].split("");
      from[2] = "0";
      map[i][j] = from.join("");

      const to = map[ni][nj].split("");
      to[0] = "0";
      map[ni][nj] = to.join("");
    }
    if (k === 3) {
      const from = map[i][j].split("");
      from[3] = "0";
      map[i][j] = from.join("");

      const to = map[ni][nj].split("");
      to[1] = "0";
      map[ni][nj] = to.join("");
    }
  };

  const makeWalls = (i, j, k, ni, nj) => {
    if (k === 0) {
      const from = map[i][j].split("");
      from[0] = "1";
      map[i][j] = from.join("");

      const to = map[ni][nj].split("");
      to[2] = "1";
      map[ni][nj] = to.join("");
    }
    if (k === 1) {
      const from = map[i][j].split("");
      from[1] = "1";
      map[i][j] = from.join("");

      const to = map[ni][nj].split("");
      to[3] = "1";
      map[ni][nj] = to.join("");
    }
    if (k === 2) {
      const from = map[i][j].split("");
      from[2] = "1";
      map[i][j] = from.join("");

      const to = map[ni][nj].split("");
      to[0] = "1";
      map[ni][nj] = to.join("");
    }
    if (k === 3) {
      const from = map[i][j].split("");
      from[3] = "1";
      map[i][j] = from.join("");

      const to = map[ni][nj].split("");
      to[1] = "1";
      map[ni][nj] = to.join("");
    }
  };

  const isPossibleToMove = (x, y, i, nx, ny) => {
    if (i === 0 && map[x][y][0] === "0" && map[nx][ny][2] === "0") return true;
    if (i === 1 && map[x][y][1] === "0" && map[nx][ny][3] === "0") return true;
    if (i === 2 && map[x][y][2] === "0" && map[nx][ny][0] === "0") return true;
    if (i === 3 && map[x][y][3] === "0" && map[nx][ny][1] === "0") return true;
    return false;
  };

  const dfs = (x, y) => {
    visited[x][y] = true;

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx < 0 || nx >= M || ny < 0 || ny >= N) continue;
      if (!visited[nx][ny]) {
        if (isPossibleToMove(x, y, i, nx, ny)) {
          visited[nx][ny] = true;
          space++;
          dfs(nx, ny);
        }
      }
    }
  };

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (visited[i][j]) continue;
      dfs(i, j);
      answer.push(space);
      space = 1;
    }
  }

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < 4; k++) {
        visited = Array.from(Array(M), () => new Array(N).fill(false));
        const [ni, nj] = [i + dx[k], j + dy[k]];
        if (ni < 0 || ni >= M || nj < 0 || nj >= N) continue;

        if (map[i][j][k] === "1") {
          // 벽이면
          removeWalls(i, j, k, ni, nj);
          if (visited[i][j]) continue;
          dfs(i, j);
          answer2.push(space);
          space = 1;
          makeWalls(i, j, k, ni, nj);
        }
      }
    }
  }

  console.log(answer.length);
  console.log(Math.max(...answer));
  console.log(Math.max(...answer2));
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
