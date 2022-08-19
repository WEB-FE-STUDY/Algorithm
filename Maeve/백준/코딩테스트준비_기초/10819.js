// 10819 차이를 최대로
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const N = Number(input[0]);
  const numbers = input[1].split(" ").map(Number);

  let answer = 0;

  const result = [];
  const visited = new Array(9).fill(false);

  function recursive(count) {
    if (count === N) {
      let sum = 0;
      for (let i = 0; i < N - 1; i++) {
        sum += Math.abs(result[i] - result[i + 1]);
      }
      answer = Math.max(answer, sum);

      return;
    }

    for (let i = 1; i <= N; i++) {
      if (!visited[i]) {
        result[count] = numbers[i - 1];
        visited[i] = true;
        recursive(count + 1);
        visited[i] = false;
      }
    }
  }

  recursive(0);
  console.log(answer);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});

// 모든 경우를 다 구해보자
