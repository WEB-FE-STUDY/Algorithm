const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const n = Number(input.shift());
  const arr = input[0]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  let good = 0;

  arr.forEach((el, idx) => {
    let [left, right] = [0, n - 1];
    while (left < right) {
      if (left === idx) left++;
      if (right === idx) right--;
      if (left === right) continue;
      const sum = arr[left] + arr[right];
      if (sum < el) {
        left++;
      } else if (sum > el) {
        right--;
      } else {
        good++;
        break;
      }
    }
  });

  return good;
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
