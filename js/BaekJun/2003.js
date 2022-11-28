const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  const [N, M] = input.shift().split(" ").map(Number);
  const arr = input[0].split(" ").map(Number);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    if (arr[i] === M) {
      count++;
      continue;
    }
    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      if (sum >= M) {
        if (sum === M) {
          count++;
        }
        break;
      }
    }
  }
  return count;
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
