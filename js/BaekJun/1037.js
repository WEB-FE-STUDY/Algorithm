const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  let answer = 0;
  const divisor = [...input][1].split(" ").map((idx) => Number(idx));
  const sortedDivisor = divisor.sort((a, b) => a - b);
  if (sortedDivisor.length === 1) {
    answer = sortedDivisor[0] ** 2;
  } else {
    answer = sortedDivisor[0] * sortedDivisor[sortedDivisor.length - 1];
  }
  return answer;
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  console.log(solution(input));
});
