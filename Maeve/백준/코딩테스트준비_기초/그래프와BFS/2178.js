// 2178 미로 탐색
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [N, M] = input[0].split(" ").map(Number);
  input.shift();
  const map = input.map((el) => el.split("").map(Number));

  const dx = [0, 1, 0, -1];
  const dy = [-1, 0, 1, 0];

  const visited = Array.from(Array(N + 1), () => Array(M + 1).fill(false));
  const cost = Array.from(Array(N + 1), () => Array(M + 1).fill(1));

  function bfs(j, i) {
    visited[j][i] = true;
    const queue = [];
    queue.push([j, i]);

    while (queue.length !== 0) {
      const [y, x] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const ny = y + dy[i];
        const nx = x + dx[i];

        // 범위 내에 있고, 1이고, 방문한 적 없으면 queue에 넣고 방문처리, cost 추가
        if (ny >= 0 && ny < N && nx >= 0 && nx < M) {
          if (map[ny][nx] === 1 && !visited[ny][nx]) {
            visited[ny][nx] = true;
            queue.push([ny, nx]);
            cost[ny][nx] = cost[y][x] + 1;
          }
        }
      }
    }
  }

  bfs(0, 0);

  console.log(cost[N - 1][M - 1]);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});

// 최단 거리 -> bfs가 보장
// 4방향 체크해서 1일 때만 넣음
