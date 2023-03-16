// 14890 경사로
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [N, L] = input.shift().split(" ").map(Number);
  const map = input.map((el) => el.split(" ").map(Number));
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
