// 11724 연결 요소의 개수
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [N, M] = input[0].split(" ").map(Number);
  input.shift();
  const map = input.map((el) => el.split(" ").map(Number));

  const visited = new Array(N + 1).fill(false);
  const vertex = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
  let answer = 0;

  for (let i = 0; i < map.length; i++) {
    vertex[map[i][0]][map[i][1]] = 1;
    vertex[map[i][1]][map[i][0]] = 1;
  }

  function dfs(v) {
    visited[v] = true;

    // 연결되어 있고 방문하지 않았으면 go
    for (let i = 1; i <= N; i++) {
      if (vertex[v][i] && !visited[i]) dfs(i);
    }
  }

  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      answer++;
      dfs(i);
    }
  }

  console.log(answer);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});

// 간선 채우고
// 탐색
