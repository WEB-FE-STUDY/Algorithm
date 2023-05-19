// 1189 컴백홈
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [R, C, K] = input.shift().split(" ").map(Number);
  const board = input.map((el) => el.split(""));

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  const visited = Array.from(Array(R), () => new Array(C).fill(false));

  visited[R - 1][0] = true;
  let answer = 0;

  const dfs = (curX, curY, dist) => {
    if (curX === 0 && curY === C - 1) {
      if (dist === K) answer++;
      return;
    }

    for (let dir = 0; dir < 4; dir++) {
      const [nextX, nextY] = [curX + dx[dir], curY + dy[dir]];

      if (nextX >= R || nextX < 0 || nextY >= C || nextY < 0) continue;
      if (board[nextX][nextY] === "." && !visited[nextX][nextY]) {
        visited[nextX][nextY] = true;
        dfs(nextX, nextY, dist + 1);
        visited[nextX][nextY] = false;
      }
    }
  };

  dfs(R - 1, 0, 1);

  console.log(answer);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});

// dfs인 이유
// 1) 최단 거리를 구하는 것이 아니기 때문에 bfs 쓰면 안 됨
// 2) visited를 true로 바꿨다가 false로 바꿔야 하기 때문에 bfs는 어려움
