// 14502 연구소
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [N, M] = input.shift().split(" ").map(Number);
  let answer = 0;
  const empty = [];
  let virus = 0;
  let wall = 0;
  const dx = [1, 0, -1, 0];
  const dy = [0, -1, 0, 1];
  const map = input.map((el) => el.split(" ").map(Number));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] === 0) empty.push([i, j]);
      if (map[i][j] === 2) virus++;
      if (map[i][j] === 1) wall++;
    }
  }

  const bfs = () => {
    // 2. 바이러스 퍼져나감 체크
    const visited = Array.from(Array(N + 1), () => Array(M + 1).fill(false));
    let contaminated = virus;

    const queue = [];
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (map[i][j] === 2) queue.push([i, j]);
      }
    }

    while (queue.length) {
      const [x, y] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];

        if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
        if (!visited[nx][ny] && map[nx][ny] === 0) {
          queue.push([nx, ny]);
          visited[nx][ny] = true;
          contaminated++;
        }
      }
    }

    // 3. 안정영역 크기 구해서 update
    return N * M - (wall + 3 + contaminated);
  };

  // 1. 벽을 세우고
  for (let i = 0; i < empty.length; i++) {
    for (let j = 0; j < empty.length; j++) {
      for (let k = 0; k < empty.length; k++) {
        map[empty[i][0]][empty[i][1]] = 1;
        map[empty[j][0]][empty[j][1]] = 1;
        map[empty[k][0]][empty[k][1]] = 1;

        answer = Math.max(answer, bfs());

        map[empty[i][0]][empty[i][1]] = 0;
        map[empty[j][0]][empty[j][1]] = 0;
        map[empty[k][0]][empty[k][1]] = 0;
      }
    }
  }

  // const buildWall = (idx) => {
  //   if (idx === 3) {
  //     const newMap = map.map((v) => [...v]);
  //     const res = spreadVirus(newMap);
  //     if (answer <= res) {
  //       answer = res;
  //     }
  //     return;
  //   }
  //   for (let i = 0; i < col; i++) {
  //     for (let j = 0; j < row; j++) {
  //       if (map[i][j] === 0) {
  //         map[i][j] = 1;
  //         buildWall(idx + 1);
  //         map[i][j] = 0;
  //       }
  //     }
  //   }
  // };

  // buildWall(0);

  console.log(answer);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});

// 64 * 64 * 64 = 262,144
