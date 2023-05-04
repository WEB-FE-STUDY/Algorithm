// 2531 회전 초밥
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [N, d, k, c] = input.shift().split(" ").map(Number);
  let food = input.map(Number);
  food = [...food, ...input.map(Number)];
  let max = 0;

  for (let i = 0; i < N; i++) {
    const set = new Set([...food.slice(i, i + k), c]);
    max = Math.max(max, set.size);
  }

  console.log(max);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
