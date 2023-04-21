// 2631 줄세우기
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const N = Number(input.shift());
  const kids = input.map(Number);
  const LIS = new Array(N).fill(1);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (kids[j] < kids[i]) {
        LIS[i] = Math.max(LIS[i], LIS[j] + 1);
      }
    }
  }

  // console.log(LIS);

  console.log(N - Math.max(...LIS));
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
