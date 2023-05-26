// 18429 근손실
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [N, K] = input[0].split(" ").map(Number);
  const weights = input[1].split(" ").map(Number);

  const result = [];
  const visited = new Array(N).fill(false);
  let answer = 0;

  function func(number) {
    if (number === N) {
      let sum = 500;
      for (let j = 0; j < N; j++) {
        sum -= K;
        sum += weights[result[j] - 1];
        if (sum < 500) return;
      }

      answer++;
      return;
    }

    for (let i = 1; i <= N; i++) {
      if (!visited[i]) {
        result[number] = i;
        visited[i] = true;
        func(number + 1);
        visited[i] = false;
      }
    }
  }

  func(0);

  console.log(answer);
};

// 모든 조합 구하기

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
