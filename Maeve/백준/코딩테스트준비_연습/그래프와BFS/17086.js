// 17086 - 아기 상어 2
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [N, M] = input.shift().split(" ").map(Number);
  const map = input.map((el) => el.split(" ").map(Number));

  const dx = [1, 1, 0, -1, -1, -1, 0, 1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];

  let max = 0;

  // 이중 for문으로 모든 경우 체크
  // 큐 만들어서 시작점 넣고 큐 빌 때까지 or 1 만날 때까지 거리구하기 -> 최대거리 업데이트

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] === 1) continue;

      const queue = [];
      queue.push([i, j, 0]);
      const visited = Array.from(Array(N + 1), () => Array(M + 1).fill(false));

      while (queue.length !== 0) {
        // 큐 뽑기 & 방문처리
        const [x, y, count] = queue.shift();
        visited[x][y] = true;

        // 1이면 -> isAvailable false로 변경, update max
        if (map[x][y] === 1) {
          max = Math.max(max, count);
          break;
        }
        // 0이면 -> 방문하지 않은 곳 큐에 넣기
        for (let dir = 0; dir < 8; dir++) {
          const [nx, ny] = [x + dx[dir], y + dy[dir]];
          if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
          if (!visited[nx][ny]) {
            visited[nx][ny] = true; // 이거 없으면 시간초과 남
            queue.push([nx, ny, count + 1]);
          }
        }
      }
    }
  }
  console.log(max);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
