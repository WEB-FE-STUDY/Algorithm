// 17425 약수의 합

// 미리 모든 약수의 누적합을 계산해 놓음

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const MAX = 1000000;

let f = new Array(MAX + 1).fill(1);
let d = new Array(MAX + 1);
f[0] = 0;
d[0] = 0;

const solution = (input) => {
  for (let i = 2; i <= MAX; i++) {
    // fill(1)을 해놔서 2부터 돌아도 됨
    for (let j = 1; i * j <= MAX; j++) {
      f[i * j] += i;
    }
  }

  for (let i = 1; i <= MAX; i++) {
    d[i] = d[i - 1] + f[i];
  }

  const answer = [];
  for (let i = 1; i < input.length; i++) {
    answer.push(d[input[i]]);
  }
  console.log(answer.join("\n"));
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});

// 시간초과 - 입출력 문제
// 콘솔을 for 문 돌면서 찍으면 안 되고 한 번에 join으로 찍어야 함
