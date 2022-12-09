// 2003 수들의 합 2
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [N, M] = input[0].split(" ").map(Number);
  const numbers = input[1].split(" ").map(Number);

  let answer = 0;

  let [left, right] = [0, 0];
  let sum = 0;

  while (left <= right && right <= N) {
    if (sum >= M) sum -= numbers[left++];
    else sum += numbers[right++];

    if (sum === M) answer++;
  }

  console.log(answer);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
