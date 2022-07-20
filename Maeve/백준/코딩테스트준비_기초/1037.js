// 1037 약수

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];

const solution = (input) => {
  let answer = 0;
  numbers = input[1]
    .split(" ")
    .map((val) => +val)
    .sort((a, b) => a - b);

  if (numbers.length % 2 === 0) answer = numbers[0] * numbers[numbers.length - 1];
  else answer = numbers[Math.floor(numbers.length / 2)] ** 2;

  console.log(answer);
};

rl.on("line", (answer) => {
  input.push(answer.trim());
}).on("close", () => {
  solution(input);
});
