const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [n, l] = input[0].split(" ").map(Number);
  const pipes = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  let answer = 1;
  let start = pipes.shift();
  for (const hole of pipes) {
    if (hole - start > l - 1) {
      answer++;
      start = hole;
    }
  }

  return answer;
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
