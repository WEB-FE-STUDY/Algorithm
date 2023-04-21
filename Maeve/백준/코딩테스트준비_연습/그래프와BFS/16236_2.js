// 16236 아기 상어
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const N = Number(input.shift());
  const map = input.map((el) => el.split(" ").map(Number));

  const shark = {
    x: 0,
    y: 0,
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (map[i][j] === 9) {
        map[i][j] = 0;
        shark.x = i;
        shark.y = j;
      }
    }
  }
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
