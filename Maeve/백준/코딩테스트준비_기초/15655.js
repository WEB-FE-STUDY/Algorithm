// 15655 N과 M (6)

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [N, M] = input[0].split(" ").map(Number);
  const numbers = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  const result = [];
  const visited = new Array(10001).fill(false);
  const answer = [];

  function func(number, current) {
    if (number === M) {
      answer.push(result.join(" "));
      return;
    }

    for (let i = 0; i < N; i++) {
      if (!visited[numbers[i]] && numbers[i] > current) {
        result[number] = numbers[i];
        visited[numbers[i]] = true;
        func(number + 1, numbers[i]);
        visited[numbers[i]] = false;
      }
    }
  }

  func(0, 0);

  console.log(answer.join("\n"));
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
