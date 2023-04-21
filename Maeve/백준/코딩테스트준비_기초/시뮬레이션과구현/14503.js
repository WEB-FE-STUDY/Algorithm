// 14503 - 로봇 청소기
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0]; // 북 동 남 서
let count = 0;

const solution = (input) => {
  const [N, M] = input.shift().split(" ").map(Number);
  const [r, c, d] = input.shift().split(" ").map(Number);
  const map = input.map((el) => el.split(" ").map(Number));
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
