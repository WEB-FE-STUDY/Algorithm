// 1806 부분합
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [N, S] = input[0].split(" ").map(Number);
  const numbers = input[1].split(" ").map(Number);

  let [left, right] = [0, 0];
  let min = Infinity;
  let isAvailable = false;
  let sum = numbers[0];

  while (right < N) {
    // S 보다 작으면 right 을 늘린다
    if (sum < S) {
      sum += numbers[++right];
    } else {
      // S 보다 크거나 같으면 left 를 늘린다
      isAvailable = true;
      min = Math.min(min, right - left + 1);
      sum -= numbers[left++]; // numbers[left++] 하다가 틀림 순서 잘 봐야함
    }
  }

  console.log(isAvailable ? min : 0);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
