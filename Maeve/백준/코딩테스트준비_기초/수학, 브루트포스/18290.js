// 18290 NM 과 K (1)

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [N, M, K] = input[0].split(" ").map(Number);
  input.shift();
  const numbers = input.map((el) => el.split(" ").map(Number));
  const visited = Array.from(Array(N), () => new Array(M).fill(false));

  let answer = -99999999;

  const dy = [0, 0, -1, 1];
  const dx = [1, -1, 0, 0];

  function isAvailable(x, y) {
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
        if (visited[nx][ny]) return false;
      }
    }

    return true;
  }

  function solve(count, sum) {
    if (count === K) {
      answer = Math.max(answer, sum);
      return;
    }

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (!visited[i][j] && isAvailable(i, j)) {
          visited[i][j] = true;
          solve(count + 1, sum + numbers[i][j]);
          visited[i][j] = false;
        }
      }
    }
  }

  solve(0, 0);

  console.log(answer);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
