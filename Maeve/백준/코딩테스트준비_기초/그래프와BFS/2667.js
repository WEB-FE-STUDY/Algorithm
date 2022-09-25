// 2667 단지번호붙이기
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const N = Number(input[0]);
  input.shift();
  const map = input.map((el) => el.split("").map(Number));

  let answer = 0;
  let count = [];
  let each_count = 0;
  const visited = Array.from(Array(25), () => new Array(25).fill(false));
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  function dfs(x, y) {
    each_count++;

    // 방문 처리
    visited[x][y] = true;

    for (let i = 0; i < 4; i++) {
      // 다음 좌표 구하고
      const nx = x + dx[i];
      const ny = y + dy[i];

      // 다음 좌표 방문하지 않았거나 범위 이내이면 dfs
      if (nx < 0 || nx >= N || ny < 0 || nx >= N) continue; // return하면 틀림 왜지 -> 탐색 완료 안 됐는데 종료해버려서 .... ?
      // continue 로 바꿔보기
      // if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
      if (map[nx][ny] && !visited[nx][ny]) dfs(nx, ny);
      // }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      // 방문하지 않았으면 dfs
      if (map[i][j] && !visited[i][j]) {
        each_count = 0;
        answer++;
        dfs(i, j);
        count.push(each_count);
      }
    }
  }

  console.log(answer);
  console.log(count.sort((a, b) => a - b).join("\n"));
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});

// (0, 0)부터 시작해서 동서남북 탐색
// 1만나면 탐색 계속, 0 만나면 리턴

// Maximun call stack size exceeded
// if (map[nx][ny] && !visited[nx][ny]) 이렇게 안 하고
// if (!visited[nx][ny]), if (map[x][y] === 0) return;

// count 소트하고 출력해야 함
