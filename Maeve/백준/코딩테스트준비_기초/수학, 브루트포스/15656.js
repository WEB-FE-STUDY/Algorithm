// 15656 N과 M (7)

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
  const answer = [];

  function func(number) {
    if (number === M) {
      answer.push(result.join(" "));
      return;
    }

    for (let i = 0; i < N; i++) {
      result[number] = numbers[i];
      func(number + 1);
    }
  }

  func(0);

  console.log(answer.join("\n"));
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
